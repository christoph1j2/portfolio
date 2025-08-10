# EmailJS Integration Documentation

This document provides comprehensive instructions on how EmailJS is integrated with the contact form in this portfolio project.

## Overview

EmailJS allows you to send emails directly from client-side JavaScript code without any server-side code. In this project, it's used to:

1. Collect form data from the contact form (name, email, phone, message, service type)
2. Send this data to your personal email address
3. Provide feedback to the user about the submission status

## Setup Instructions

### 1. Create an EmailJS Account

If you haven't already:
- Go to [EmailJS website](https://www.emailjs.com/) and create an account
- The free tier allows 200 emails per month

### 2. Configure Email Service

1. Log in to your EmailJS dashboard
2. Go to "Email Services" and click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the authentication steps
5. Note down the **Service ID** that is generated

### 3. Create Email Template

1. Go to "Email Templates" and click "Create New Template"
2. Design your email with the following variables:
   - `{{user_name}}` - Sender's name
   - `{{user_email}}` - Sender's email
   - `{{user_phone}}` - Sender's phone (optional)
   - `{{message}}` - The message content
   - `{{service_type}}` - Selected service type (web, app, maintenance)
   - `{{form_type}}` - Form type (contact or order)
3. Save the template and note down the **Template ID**

### 4. Get Your Public Key

1. Go to "Account" > "API Keys"
2. Copy your **Public Key**

### 5. Update the Code

Replace the placeholders in `ContactSection.tsx` with your actual values:
```javascript
emailjs.sendForm(
    'YOUR_SERVICE_ID', // Replace with your actual Service ID
    'YOUR_TEMPLATE_ID', // Replace with your actual Template ID
    form.current,
    'YOUR_PUBLIC_KEY' // Replace with your actual Public Key
)
```

## Form Data Structure

The form sends the following data to your email:

| Field Name | Description | Required | Form Input Name |
|------------|-------------|----------|----------------|
| Name | Sender's name | Yes | `user_name` |
| Email | Sender's email | Yes | `user_email` |
| Phone | Sender's phone | No | `user_phone` |
| Message | Main message content | Yes | `message` |
| Service Type | Selected service (radio button) | For order form only | `service_type` |
| Form Type | Whether it's contact or order form | Auto-filled | `form_type` |

## How It Works

1. When a user submits the form, the `handleSubmit` function is called
2. Form validation is performed to check required fields
3. If validation passes, the form data is sent to EmailJS
4. EmailJS processes the form data and sends an email to your configured address
5. Success or error messages are displayed to the user based on the response

## Troubleshooting

If emails aren't being received:

1. Check EmailJS dashboard for any error messages
2. Verify all IDs (Service ID, Template ID, Public Key) are correct
3. Ensure the email template variables match the form field names
4. Check spam/junk folder in your email
5. Verify the EmailJS service is properly configured

## Security Considerations

- Your EmailJS Public Key is safe to include in client-side code
- For additional security, consider setting up domain restrictions in EmailJS dashboard
- Form validation helps prevent spam submissions

## Additional Resources

- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [EmailJS React Integration](https://www.emailjs.com/docs/examples/reactjs/)
