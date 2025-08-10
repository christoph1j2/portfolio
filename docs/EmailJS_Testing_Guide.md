# Testing Your EmailJS Integration

After setting up EmailJS with your contact form, it's important to thoroughly test it to ensure everything works correctly. This guide provides steps for comprehensive testing.

## Basic Testing

1. **Local Development Testing**
   - Start your development server (`npm run dev` or `yarn dev`)
   - Navigate to your contact form
   - Fill out all fields and submit
   - Check your email to verify receipt
   - Verify all data is correctly included in the email

2. **Field Validation Testing**
   - Try submitting without required fields (name, email, message)
   - Verify appropriate error messages appear
   - Try submitting with invalid email format
   - Verify email validation error message appears

3. **Response UI Testing**
   - Submit a valid form and verify loading indicator appears
   - Verify success message appears after successful submission
   - Verify form fields reset after successful submission

## Advanced Testing

4. **Form Type Testing**
   - Test the contact form type
   - Test the order form type
   - Verify the form_type field is correctly included in your emails

5. **Service Type Testing (Order Form)**
   - Select each radio button option (web, app, maintenance)
   - Submit the form with each option
   - Verify the selected service_type is correctly included in your emails

6. **Error Handling Testing**
   - Temporarily change your EmailJS service ID to an invalid one
   - Submit the form and verify error handling works correctly
   - Restore your correct service ID

## Production Testing

7. **Production Environment Testing**
   - Deploy your changes to your production environment
   - Test the form on your live site
   - Verify emails are received correctly

8. **Mobile Testing**
   - Test the form submission on mobile devices
   - Verify all fields are easy to interact with
   - Verify submission works correctly

## Monitoring

9. **Usage Monitoring**
   - Check your EmailJS dashboard to monitor email usage
   - The free tier allows 200 emails per month
   - Consider setting up alerts if you approach this limit

## Troubleshooting Common Issues

- **Emails Not Received**: 
  - Check your spam/junk folder
  - Verify service ID, template ID and public key are correct
  - Check EmailJS dashboard for error messages

- **Form Submits Without Sending Email**:
  - Check browser console for JavaScript errors
  - Verify EmailJS library is correctly imported
  - Ensure form fields have the correct name attributes

- **Template Variables Not Working**:
  - Verify input name attributes match template variables
  - Check case sensitivity (e.g., `user_name` vs `userName`)

- **Rate Limiting Issues**:
  - If you're testing repeatedly, you might hit rate limits
  - Wait a few minutes between test submissions
