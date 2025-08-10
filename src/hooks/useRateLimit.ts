/**
 * React Hook for Rate Limiting
 * 
 * This hook provides a clean interface for using rate limiting in React components.
 * It integrates with the RateLimitManager and provides real-time updates.
 */

import { useState, useEffect, useCallback } from 'react';
import { rateLimitManager } from '../utils/rateLimiting';

interface UseRateLimitResult {
  // Current rate limit status
  isBlocked: boolean;
  blockReason?: string;
  timeUntilReset?: number;
  attemptsRemaining?: number;
  
  // Actions
  checkRateLimit: () => boolean;
  recordAttempt: (successful?: boolean) => void;
  
  // Status information
  dailySubmissionsUsed: number;
  attemptsInLastHour: number;
  
  // Utility functions
  formatTimeRemaining: (ms: number) => string;
}

export const useRateLimit = (): UseRateLimitResult => {
  const [rateLimitState, setRateLimitState] = useState(() => {
    const initialCheck = rateLimitManager.checkRateLimit();
    const initialStatus = rateLimitManager.getStatus();
    
    return {
      isBlocked: initialCheck.blocked,
      blockReason: initialCheck.reason,
      timeUntilReset: initialCheck.timeUntilReset,
      attemptsRemaining: initialCheck.attemptsRemaining,
      dailySubmissionsUsed: initialStatus.dailySubmissionsUsed,
      attemptsInLastHour: initialStatus.attemptsInLastHour,
    };
  });

  // Update rate limit state
  const updateRateLimitState = useCallback(() => {
    const limitCheck = rateLimitManager.checkRateLimit();
    const status = rateLimitManager.getStatus();
    
    setRateLimitState({
      isBlocked: limitCheck.blocked,
      blockReason: limitCheck.reason,
      timeUntilReset: limitCheck.timeUntilReset,
      attemptsRemaining: limitCheck.attemptsRemaining,
      dailySubmissionsUsed: status.dailySubmissionsUsed,
      attemptsInLastHour: status.attemptsInLastHour,
    });
  }, []);

  // Check rate limit (returns true if allowed, false if blocked)
  const checkRateLimit = useCallback((): boolean => {
    const result = rateLimitManager.checkRateLimit();
    updateRateLimitState();
    return !result.blocked;
  }, [updateRateLimitState]);

  // Record an attempt
  const recordAttempt = useCallback((successful: boolean = false) => {
    rateLimitManager.recordAttempt(successful);
    updateRateLimitState();
  }, [updateRateLimitState]);

  // Format time remaining
  const formatTimeRemaining = useCallback((ms: number): string => {
    return rateLimitManager.formatTimeRemaining(ms);
  }, []);

  // Set up interval to update countdown timer
  useEffect(() => {
    if (!rateLimitState.isBlocked || !rateLimitState.timeUntilReset) {
      return;
    }

    const interval = setInterval(() => {
      updateRateLimitState();
    }, 1000); // Update every second for countdown

    return () => clearInterval(interval);
  }, [rateLimitState.isBlocked, rateLimitState.timeUntilReset, updateRateLimitState]);

  return {
    isBlocked: rateLimitState.isBlocked,
    blockReason: rateLimitState.blockReason,
    timeUntilReset: rateLimitState.timeUntilReset,
    attemptsRemaining: rateLimitState.attemptsRemaining,
    checkRateLimit,
    recordAttempt,
    dailySubmissionsUsed: rateLimitState.dailySubmissionsUsed,
    attemptsInLastHour: rateLimitState.attemptsInLastHour,
    formatTimeRemaining,
  };
};

export default useRateLimit;
