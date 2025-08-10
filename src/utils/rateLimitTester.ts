/**
 * Rate Limiting Testing Utility
 * 
 * This utility provides functions to test the rate limiting system in development.
 * Use these functions in the browser console to test various scenarios.
 */

import { rateLimitManager } from '../utils/rateLimiting';

// Only available in development mode
const isDevelopment = import.meta.env.DEV;

class RateLimitTester {
  /**
   * Print current rate limiting status
   */
  static printStatus(): void {
    if (!isDevelopment) {
      console.warn('Rate limit testing is only available in development mode');
      return;
    }

    const status = rateLimitManager.getStatus();
    const limitCheck = rateLimitManager.checkRateLimit();

    console.group('📊 Rate Limiting Status');
    console.log('🔒 Blocked:', limitCheck.blocked);
    if (limitCheck.blocked) {
      console.log('❌ Reason:', limitCheck.reason);
      if (limitCheck.timeUntilReset) {
        console.log('⏰ Time until reset:', rateLimitManager.formatTimeRemaining(limitCheck.timeUntilReset));
      }
    }
    console.log('📈 Daily submissions used:', status.dailySubmissionsUsed);
    console.log('🔄 Attempts in last hour:', status.attemptsInLastHour);
    console.log('🆔 Device ID:', status.deviceId);
    console.log('🔄 Next reset:', status.nextResetTime);
    console.groupEnd();
  }

  /**
   * Test scenario: First time user
   */
  static testFirstTimeUser(): void {
    if (!isDevelopment) return;

    console.group('🧪 Testing: First Time User');
    rateLimitManager.clearAllLimits();
    console.log('✅ Cleared all limits');
    
    const result = rateLimitManager.checkRateLimit();
    console.log('🔓 Should be allowed:', !result.blocked);
    console.log('📝 Attempts remaining:', result.attemptsRemaining);
    console.groupEnd();
  }

  /**
   * Test scenario: User who already submitted today
   */
  static testDailyLimitReached(): void {
    if (!isDevelopment) return;

    console.group('🧪 Testing: Daily Limit Reached');
    rateLimitManager.clearAllLimits();
    
    // Simulate successful submission
    rateLimitManager.recordAttempt(true);
    console.log('✅ Recorded successful submission');
    
    const result = rateLimitManager.checkRateLimit();
    console.log('🔒 Should be blocked:', result.blocked);
    console.log('❌ Reason:', result.reason);
    if (result.timeUntilReset) {
      console.log('⏰ Time until reset:', rateLimitManager.formatTimeRemaining(result.timeUntilReset));
    }
    console.groupEnd();
  }

  /**
   * Test scenario: Too many attempts in short time
   */
  static testSpamAttempts(): void {
    if (!isDevelopment) return;

    console.group('🧪 Testing: Spam Attempts');
    rateLimitManager.clearAllLimits();
    
    // Simulate multiple failed attempts
    for (let i = 0; i < 4; i++) {
      rateLimitManager.recordAttempt(false);
      console.log(`📝 Recorded attempt ${i + 1}`);
    }
    
    const result = rateLimitManager.checkRateLimit();
    console.log('🔒 Should be blocked:', result.blocked);
    console.log('❌ Reason:', result.reason);
    console.groupEnd();
  }

  /**
   * Test scenario: Session-based blocking
   */
  static testSessionBlocking(): void {
    if (!isDevelopment) return;

    console.group('🧪 Testing: Session Blocking');
    
    // Clear localStorage but keep sessionStorage
    // Generate device ID using same method as rate limiting manager
    const fingerprintData = {
      userAgent: navigator.userAgent,
      language: navigator.language,
      platform: navigator.platform,
      screenResolution: `${screen.width}x${screen.height}x${screen.colorDepth}`,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    };
    
    let hash = 0;
    const str = JSON.stringify(fingerprintData);
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash;
    }
    const deviceId = Math.abs(hash).toString(36);
    
    const storageKey = `ecl_form_tracking_${deviceId}`;
    localStorage.removeItem(storageKey);
    
    // Simulate successful submission in this session
    rateLimitManager.recordAttempt(true);
    console.log('✅ Recorded successful submission in session');
    
    const result = rateLimitManager.checkRateLimit();
    console.log('🔒 Should be blocked:', result.blocked);
    console.log('❌ Reason:', result.reason);
    console.groupEnd();
  }

  /**
   * Clear all rate limiting data
   */
  static clearAll(): void {
    if (!isDevelopment) return;

    rateLimitManager.clearAllLimits();
    console.log('🧹 Cleared all rate limiting data');
  }

  /**
   * Run all test scenarios
   */
  static runAllTests(): void {
    if (!isDevelopment) return;

    console.group('🧪 Running All Rate Limiting Tests');
    
    this.testFirstTimeUser();
    this.testDailyLimitReached();
    this.testSpamAttempts();
    this.testSessionBlocking();
    
    console.log('✅ All tests completed');
    console.groupEnd();
    
    // Clean up
    this.clearAll();
  }

  /**
   * Monitor rate limiting in real-time
   */
  static startMonitoring(): number {
    if (!isDevelopment) return 0;

    console.log('👀 Starting rate limiting monitoring...');
    
    return window.setInterval(() => {
      this.printStatus();
    }, 5000) as number; // Update every 5 seconds
  }

  /**
   * Stop monitoring
   */
  static stopMonitoring(intervalId: number): void {
    if (!isDevelopment) return;

    clearInterval(intervalId);
    console.log('⏹️ Stopped rate limiting monitoring');
  }
}

// Make available globally in development
if (isDevelopment) {
  (window as unknown as Window & { RateLimitTester: typeof RateLimitTester }).RateLimitTester = RateLimitTester;
  console.log('🧪 Rate limiting tester loaded. Use RateLimitTester.runAllTests() to test all scenarios.');
}

export default RateLimitTester;
