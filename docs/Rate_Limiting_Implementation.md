# Advanced Rate Limiting Implementation

This document explains the comprehensive rate limiting system implemented to prevent abuse of your contact form and EmailJS integration.

## 📋 Overview

The rate limiting system implements multiple layers of protection to ensure that a single user/IP cannot send more than 1 form submission per day, with additional safeguards against spam and abuse.

## 🛡️ Protection Layers

### 1. Device Fingerprinting
- **Purpose**: Creates a semi-unique identifier for each device/browser
- **Components**: User agent, screen resolution, timezone, language, platform, hardware specs
- **Benefits**: Works without cookies, persists across sessions
- **Limitations**: Can be spoofed, may change with browser updates

### 2. LocalStorage Tracking
- **Purpose**: Persistent tracking across browser sessions
- **Data Stored**: Daily submission count, attempt history, timestamps
- **Duration**: Persists until manually cleared or storage limit reached
- **Reset**: Automatically resets at midnight each day

### 3. SessionStorage Tracking
- **Purpose**: Prevents multiple submissions in the same browsing session
- **Scope**: Single browser tab/window session
- **Reset**: Cleared when tab/window is closed or page is refreshed
- **Limitation**: Only one submission per session allowed

### 4. In-Memory Rate Limiting
- **Purpose**: Fastest checks for immediate blocking
- **Scope**: Current page load only
- **Benefits**: Cannot be bypassed by clearing storage
- **Limitations**: Lost on page refresh

### 5. Attempt Frequency Control
- **Purpose**: Prevents rapid-fire spam attempts
- **Rule**: Maximum 3 attempts per hour
- **Tracking**: Sliding window of recent attempts
- **Auto-cleanup**: Old attempts automatically removed

## 🔧 Configuration

### Current Limits
```typescript
const MAX_DAILY_SUBMISSIONS = 1;           // 1 form submission per day
const MAX_ATTEMPTS_PER_HOUR = 3;          // 3 attempts per hour
const ATTEMPT_WINDOW_MS = 3600000;        // 1 hour in milliseconds
```

### Customization
You can easily adjust these limits by modifying the constants in `src/utils/rateLimiting.ts`:

```typescript
// For stricter limits
const MAX_DAILY_SUBMISSIONS = 1;
const MAX_ATTEMPTS_PER_HOUR = 2;

// For more lenient limits (not recommended)
const MAX_DAILY_SUBMISSIONS = 2;
const MAX_ATTEMPTS_PER_HOUR = 5;
```

## 📱 User Experience

### Visual Feedback
- **Rate Limit Warning Component**: Shows current status and remaining attempts
- **Blocked State**: Button disabled with clear messaging
- **Countdown Timer**: Shows when user can try again
- **Alternative Contact**: Direct contact info when blocked

### User Messages
- **Approaching Limit**: "Zbývá X pokusů v této hodině"
- **Daily Limit Reached**: "Daily submission limit reached (1 per day)"
- **Session Blocked**: "Only one submission per session allowed"
- **Too Many Attempts**: "Too many attempts in the last hour"

## 🚀 Implementation Files

### Core Files
- `src/utils/rateLimiting.ts` - Main rate limiting logic
- `src/hooks/useRateLimit.ts` - React hook for easy integration
- `src/components/RateLimitWarning/` - UI component for user feedback

### Integration
- `src/components/Contact/ContactSection.tsx` - Integrated into contact form
- CSS modules for styling disabled states and warnings

## 🧪 Testing

### Manual Testing
```typescript
// In development console
import { rateLimitManager } from './src/utils/rateLimiting.ts';

// Check current status
console.log(rateLimitManager.getStatus());

// Clear all limits (development only)
rateLimitManager.clearAllLimits();

// Test rate limiting
const result = rateLimitManager.checkRateLimit();
console.log('Blocked:', result.blocked, 'Reason:', result.reason);
```

### Test Scenarios
1. **First submission** - Should work normally
2. **Second submission same day** - Should be blocked
3. **Multiple rapid attempts** - Should be blocked after 3 attempts
4. **New session** - Should be blocked if daily limit reached
5. **Next day** - Should reset and allow new submission

## 🔒 Security Considerations

### Strengths
- **Multi-layered approach** - Hard to bypass all protections
- **No server required** - Works with static hosting
- **Privacy-friendly** - No personal data stored
- **Graceful degradation** - Works even if some methods fail

### Limitations
- **Client-side only** - Can be bypassed with developer tools
- **Storage clearing** - Users can clear browser data
- **Device spoofing** - Fingerprint can be changed
- **IP changes** - Same user, different network

### Recommendations for Enhanced Security
1. **Server-side validation** - Implement backend rate limiting
2. **CAPTCHA integration** - Add human verification
3. **IP-based tracking** - Server-side IP rate limiting
4. **Email validation** - Verify email addresses before sending

## 🌐 Backend Integration Options

If you want server-side rate limiting, consider these approaches:

### Option 1: Serverless Functions
```javascript
// netlify/functions/send-email.js
exports.handler = async (event, context) => {
  const clientIP = event.headers['x-forwarded-for'] || event.headers['x-real-ip'];
  
  // Check IP-based rate limiting
  if (await isRateLimited(clientIP)) {
    return {
      statusCode: 429,
      body: JSON.stringify({ error: 'Rate limited' })
    };
  }
  
  // Send email via EmailJS or other service
  // Record submission for IP
};
```

### Option 2: Express.js Backend
```javascript
const rateLimit = require('express-rate-limit');

const emailRateLimit = rateLimit({
  windowMs: 24 * 60 * 60 * 1000, // 24 hours
  max: 1, // 1 request per day per IP
  message: 'Too many form submissions from this IP',
  standardHeaders: true,
  legacyHeaders: false,
});

app.post('/api/send-email', emailRateLimit, async (req, res) => {
  // Handle form submission
});
```

### Option 3: Cloudflare Rate Limiting
Set up Cloudflare rate limiting rules:
- 1 request per day per IP to `/api/send-form`
- Block for 24 hours after limit exceeded

## 📊 Monitoring and Analytics

### Tracking Blocked Attempts
The system logs blocked attempts for monitoring:

```typescript
// Add to handleSubmit error handling
if (!checkRateLimit()) {
  // Track blocked attempt
  gtag('event', 'form_blocked', {
    'event_category': 'Security',
    'event_label': blockReason
  });
}
```

### Usage Statistics
Monitor your EmailJS dashboard for:
- Submission patterns
- Peak usage times
- Potential abuse attempts

## 🔄 Maintenance

### Regular Tasks
1. **Monitor EmailJS quota** - Check usage vs limits
2. **Review blocking patterns** - Ensure legitimate users aren't blocked
3. **Update fingerprinting** - Keep pace with browser changes
4. **Test rate limiting** - Verify functionality after updates

### Updates and Improvements
- Add more sophisticated fingerprinting
- Implement progressive penalties
- Add whitelist functionality for trusted users
- Enhance user feedback messages

## 🎯 Best Practices

### For Users
- Clear error messages with alternative contact methods
- Countdown timers for blocked states
- Progressive disclosure of rate limiting info

### For Developers
- Test thoroughly across different browsers
- Monitor false positives
- Provide easy configuration
- Document all limits and behaviors

### For Security
- Combine with server-side validation when possible
- Use HTTPS for all form submissions
- Regularly review and update limits
- Monitor for bypass attempts

---

**Note**: This client-side rate limiting provides good protection against casual abuse but should be combined with server-side validation for maximum security in production environments.
