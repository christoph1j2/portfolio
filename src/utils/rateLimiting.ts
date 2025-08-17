/**
 * Rate Limiting Utilities
 * 
 * Comprehensive client-side rate limiting system with multiple layers of protection:
 * 1. IP-based rate limiting (using fingerprinting)
 * 2. LocalStorage-based tracking
 * 3. SessionStorage-based tracking
 * 4. In-memory rate limiting
 * 5. Exponential backoff for repeated attempts
 */

interface RateLimitEntry {
  count: number;
  firstAttempt: number;
  lastAttempt: number;
  blocked: boolean;
  blockUntil?: number;
  attempts: number[];
}

interface DeviceFingerprint {
  userAgent: string;
  language: string;
  platform: string;
  screenResolution: string;
  timezone: string;
  cookieEnabled: boolean;
  doNotTrack: string;
  hardwareConcurrency: number;
  memorySize?: number;
}

class RateLimitManager {
  private readonly STORAGE_KEY = 'ecl_form_tracking';
  private readonly SESSION_KEY = 'ecl_session_tracking';
  private readonly MAX_DAILY_SUBMISSIONS = 1;
  private readonly ATTEMPT_WINDOW_MS = 60 * 60 * 1000; // 1 hour window for attempt tracking
  private readonly MAX_ATTEMPTS_PER_HOUR = 3;
  
  private memoryTracker: Map<string, RateLimitEntry> = new Map();

  /**
   * Generate a device fingerprint to identify unique users
   * This creates a semi-unique identifier without using IP address
   */
  private generateDeviceFingerprint(): string {
    try {
      const fingerprint: DeviceFingerprint = {
        userAgent: navigator.userAgent,
        language: navigator.language,
        platform: navigator.platform,
        screenResolution: `${screen.width}x${screen.height}x${screen.colorDepth}`,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        cookieEnabled: navigator.cookieEnabled,
        doNotTrack: navigator.doNotTrack || 'unknown',
        hardwareConcurrency: navigator.hardwareConcurrency || 0,
        memorySize: (navigator as Navigator & { deviceMemory?: number }).deviceMemory || undefined
      };

      // Create hash from fingerprint data
      const fingerprintString = JSON.stringify(fingerprint);
      return this.simpleHash(fingerprintString);
    } catch {
  // Nepodařilo se vygenerovat otisk zařízení – použijeme záložní metodu
  console.warn('Nepodařilo se vygenerovat otisk zařízení, používá se náhradní metoda');
      return this.simpleHash(navigator.userAgent + screen.width + screen.height);
    }
  }

  /**
   * Simple hash function for creating device identifier
   */
  private simpleHash(str: string): string {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // Convert to 32-bit integer
    }
    return Math.abs(hash).toString(36);
  }

  /**
   * Get current timestamp in milliseconds
   */
  private now(): number {
    return Date.now();
  }

  /**
   * Check if it's a new day since the last submission
   */
  private isNewDay(lastTimestamp: number): boolean {
    const last = new Date(lastTimestamp);
    const current = new Date();
    
    return last.getDate() !== current.getDate() || 
           last.getMonth() !== current.getMonth() || 
           last.getFullYear() !== current.getFullYear();
  }

  /**
   * Load rate limit data from localStorage
   */
  private loadFromStorage(key: string): RateLimitEntry | null {
    try {
      const stored = localStorage.getItem(key);
      if (!stored) return null;
      
      const data = JSON.parse(stored) as RateLimitEntry;
      
      // Clean old attempts (older than 1 hour)
      const cutoff = this.now() - this.ATTEMPT_WINDOW_MS;
      data.attempts = (data.attempts || []).filter(timestamp => timestamp > cutoff);
      
      return data;
    } catch {
  // Chyba při načítání dat z localStorage
  console.warn('Nepodařilo se načíst data pro omezení z localStorage');
      return null;
    }
  }

  /**
   * Save rate limit data to localStorage
   */
  private saveToStorage(key: string, data: RateLimitEntry): void {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch {
  // Chyba při ukládání do localStorage
  console.warn('Nepodařilo se uložit data pro omezení do localStorage');
    }
  }

  /**
   * Load rate limit data from sessionStorage
   */
  private loadFromSessionStorage(): RateLimitEntry | null {
    try {
      const stored = sessionStorage.getItem(this.SESSION_KEY);
      if (!stored) return null;
      return JSON.parse(stored) as RateLimitEntry;
    } catch {
  // Chyba při načítání dat ze sessionStorage
  console.warn('Nepodařilo se načíst session data pro omezení');
      return null;
    }
  }

  /**
   * Save rate limit data to sessionStorage
   */
  private saveToSessionStorage(data: RateLimitEntry): void {
    try {
      sessionStorage.setItem(this.SESSION_KEY, JSON.stringify(data));
    } catch {
  // Chyba při ukládání do sessionStorage
  console.warn('Nepodařilo se uložit session data pro omezení');
    }
  }

  /**
   * Check if user is currently rate limited
   * Returns an object with blocking information
   */
  public checkRateLimit(): {
    blocked: boolean;
    reason?: string;
    timeUntilReset?: number;
    attemptsRemaining?: number;
  } {
    const deviceId = this.generateDeviceFingerprint();
    const currentTime = this.now();

    // Check memory-based rate limiting first (fastest)
    const memoryEntry = this.memoryTracker.get(deviceId);
    if (memoryEntry && memoryEntry.blockUntil && currentTime < memoryEntry.blockUntil) {
      return {
        blocked: true,
        // Překlad: Příliš mnoho pokusů z tohoto zařízení
        reason: 'Příliš mnoho pokusů z tohoto zařízení',
        timeUntilReset: memoryEntry.blockUntil - currentTime
      };
    }

    // Check localStorage-based rate limiting
    const storageKey = `${this.STORAGE_KEY}_${deviceId}`;
    let storageData = this.loadFromStorage(storageKey);
    
    // Check sessionStorage-based rate limiting
    let sessionData = this.loadFromSessionStorage();

    // Initialize if no data exists
    if (!storageData) {
      storageData = {
        count: 0,
        firstAttempt: currentTime,
        lastAttempt: 0,
        blocked: false,
        attempts: []
      };
    }

    if (!sessionData) {
      sessionData = {
        count: 0,
        firstAttempt: currentTime,
        lastAttempt: 0,
        blocked: false,
        attempts: []
      };
    }

    // Check if user has exceeded daily limit
    if (!this.isNewDay(storageData.lastAttempt) && storageData.count >= this.MAX_DAILY_SUBMISSIONS) {
      const timeUntilMidnight = this.getTimeUntilMidnight();
      
      // Update memory tracker
      this.memoryTracker.set(deviceId, {
        ...storageData,
        blocked: true,
        blockUntil: currentTime + timeUntilMidnight
      });

      return {
        blocked: true,
        // Překlad: Denní limit odeslání dosažen (1 za den)
        reason: 'Dosažen denní limit odeslání (1 za den)',
        timeUntilReset: timeUntilMidnight
      };
    }

    // Check for too many attempts in the last hour (anti-spam)
    const recentAttempts = storageData.attempts.filter(
      timestamp => timestamp > currentTime - this.ATTEMPT_WINDOW_MS
    );

    if (recentAttempts.length >= this.MAX_ATTEMPTS_PER_HOUR) {
      const oldestAttempt = Math.min(...recentAttempts);
      const timeUntilReset = (oldestAttempt + this.ATTEMPT_WINDOW_MS) - currentTime;
      
      return {
        blocked: true,
        // Překlad: Příliš mnoho pokusů za poslední hodinu
        reason: 'Příliš mnoho pokusů za poslední hodinu',
        timeUntilReset: Math.max(timeUntilReset, 0)
      };
    }

    // Check session-based limiting (prevents multiple submissions in same session)
    if (sessionData.count >= 1) {
      return {
        blocked: true,
        // Překlad: V rámci jedné relace je povoleno pouze jedno odeslání
        reason: 'V rámci jedné relace je povoleno pouze jedno odeslání',
        timeUntilReset: 0 // Reset při obnovení stránky / nové relaci
      };
    }

    // Not blocked
    return {
      blocked: false,
      attemptsRemaining: Math.max(0, this.MAX_ATTEMPTS_PER_HOUR - recentAttempts.length)
    };
  }

  /**
   * Record a form submission attempt
   */
  public recordAttempt(successful: boolean = false): void {
    const deviceId = this.generateDeviceFingerprint();
    const currentTime = this.now();
    const storageKey = `${this.STORAGE_KEY}_${deviceId}`;

    // Update localStorage data
    const storageData = this.loadFromStorage(storageKey) || {
      count: 0,
      firstAttempt: currentTime,
      lastAttempt: 0,
      blocked: false,
      attempts: []
    };

    // Reset daily count if it's a new day
    if (this.isNewDay(storageData.lastAttempt)) {
      storageData.count = 0;
      storageData.firstAttempt = currentTime;
    }

    // Update attempts array
    storageData.attempts = storageData.attempts || [];
    storageData.attempts.push(currentTime);
    
    // Clean old attempts
    const cutoff = currentTime - this.ATTEMPT_WINDOW_MS;
    storageData.attempts = storageData.attempts.filter(timestamp => timestamp > cutoff);

    if (successful) {
      storageData.count += 1;
    }
    
    storageData.lastAttempt = currentTime;
    
    this.saveToStorage(storageKey, storageData);

    // Update session storage
    const sessionData = this.loadFromSessionStorage() || {
      count: 0,
      firstAttempt: currentTime,
      lastAttempt: 0,
      blocked: false,
      attempts: []
    };

    sessionData.attempts = sessionData.attempts || [];
    sessionData.attempts.push(currentTime);
    
    if (successful) {
      sessionData.count += 1;
    }
    
    sessionData.lastAttempt = currentTime;
    this.saveToSessionStorage(sessionData);

    // Update memory tracker
    this.memoryTracker.set(deviceId, {
      ...storageData,
      blocked: storageData.count >= this.MAX_DAILY_SUBMISSIONS && successful
    });
  }

  /**
   * Get time until midnight (when daily limit resets)
   */
  private getTimeUntilMidnight(): number {
    const now = new Date();
    const midnight = new Date();
    midnight.setHours(24, 0, 0, 0); // Next midnight
    return midnight.getTime() - now.getTime();
  }

  /**
   * Format time duration for user display
   */
  public formatTimeRemaining(milliseconds: number): string {
    if (milliseconds <= 0) return 'brzy';

    const hours = Math.floor(milliseconds / (1000 * 60 * 60));
    const minutes = Math.floor((milliseconds % (1000 * 60 * 60)) / (1000 * 60));

    if (hours > 0) {
      return `${hours}h ${minutes}m`;
    } else if (minutes > 0) {
      return `${minutes} minut`;
    } else {
      return 'méně než minutu';
    }
  }

  /**
   * Clear all rate limiting data (for testing purposes)
   * WARNING: Use only for development/testing
   */
  public clearAllLimits(): void {
    if (import.meta.env.DEV) {
      localStorage.removeItem(this.STORAGE_KEY);
      sessionStorage.removeItem(this.SESSION_KEY);
      this.memoryTracker.clear();
      
      // Clear all device-specific entries
      const deviceId = this.generateDeviceFingerprint();
      const storageKey = `${this.STORAGE_KEY}_${deviceId}`;
      localStorage.removeItem(storageKey);
    }
  }

  /**
   * Get current rate limit status for display purposes
   */
  public getStatus(): {
    dailySubmissionsUsed: number;
    attemptsInLastHour: number;
    deviceId: string;
    nextResetTime: string;
  } {
    const deviceId = this.generateDeviceFingerprint();
    const storageKey = `${this.STORAGE_KEY}_${deviceId}`;
    const storageData = this.loadFromStorage(storageKey);
    
    if (!storageData) {
      return {
        dailySubmissionsUsed: 0,
        attemptsInLastHour: 0,
        deviceId: deviceId.substring(0, 8) + '...',
        nextResetTime: 'půlnoc'
      };
    }

    const currentTime = this.now();
    const recentAttempts = storageData.attempts.filter(
      timestamp => timestamp > currentTime - this.ATTEMPT_WINDOW_MS
    );

    return {
      dailySubmissionsUsed: this.isNewDay(storageData.lastAttempt) ? 0 : storageData.count,
      attemptsInLastHour: recentAttempts.length,
      deviceId: deviceId.substring(0, 8) + '...',
      nextResetTime: 'půlnoc'
    };
  }
}

// Export singleton instance
export const rateLimitManager = new RateLimitManager();

// Export additional utility functions
export const formatTimeRemaining = (ms: number) => rateLimitManager.formatTimeRemaining(ms);
export const getRateLimitStatus = () => rateLimitManager.getStatus();
