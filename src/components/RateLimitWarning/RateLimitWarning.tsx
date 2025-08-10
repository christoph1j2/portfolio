/**
 * Rate Limit Warning Component
 * 
 * Displays rate limiting information to users when they are approaching
 * or have exceeded their submission limits.
 */

import React from 'react';
import { motion } from 'motion/react';
import styles from './RateLimitWarning.module.css';

interface RateLimitWarningProps {
  isBlocked: boolean;
  blockReason?: string;
  timeUntilReset?: number;
  attemptsRemaining?: number;
  dailySubmissionsUsed: number;
  formatTimeRemaining: (ms: number) => string;
  className?: string;
}

const RateLimitWarning: React.FC<RateLimitWarningProps> = ({
  isBlocked,
  blockReason,
  timeUntilReset,
  attemptsRemaining,
  dailySubmissionsUsed,
  formatTimeRemaining,
  className = ''
}) => {
  // Don't render if user hasn't made any submissions and isn't blocked
  if (!isBlocked && dailySubmissionsUsed === 0 && (attemptsRemaining === undefined || attemptsRemaining > 2)) {
    return null;
  }

  return (
    <motion.div 
      className={`${styles.rateLimitWarning} ${className} ${isBlocked ? styles.blocked : styles.warning}`}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <div className={styles.content}>
        {isBlocked ? (
          <>
            <div className={styles.icon}>⚠️</div>
            <div className={styles.message}>
              <h4 className={styles.title}>Odesílání blokováno</h4>
              <p className={styles.description}>
                {blockReason}
                {timeUntilReset && timeUntilReset > 0 && (
                  <><br />Zkuste to znovu za: <strong>{formatTimeRemaining(timeUntilReset)}</strong></>
                )}
              </p>
              {blockReason?.includes('session') && (
                <p className={styles.hint}>
                  💡 Obnovte stránku pro novou relaci
                </p>
              )}
              {blockReason?.includes('Daily') && (
                <div className={styles.alternativeContact}>
                  <p>Pro urgentní záležitosti mě kontaktujte přímo:</p>
                  <a href="tel:+420605944418" className={styles.contactLink}>
                    📞 +420 605 944 418
                  </a>
                  <a href="mailto:ernst.leschka@gmail.com" className={styles.contactLink}>
                    ✉️ ernst.leschka@gmail.com
                  </a>
                </div>
              )}
            </div>
          </>
        ) : (
          <>
            <div className={styles.icon}>ℹ️</div>
            <div className={styles.message}>
              {dailySubmissionsUsed > 0 && (
                <p className={styles.statusInfo}>
                  Dnes jste již odeslali {dailySubmissionsUsed}/1 formulář
                </p>
              )}
              {attemptsRemaining !== undefined && attemptsRemaining <= 2 && (
                <p className={styles.statusInfo}>
                  Zbývá {attemptsRemaining} pokusů v této hodině
                </p>
              )}
            </div>
          </>
        )}
      </div>
    </motion.div>
  );
};

export default RateLimitWarning;
