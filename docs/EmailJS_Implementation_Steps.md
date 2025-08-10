# EmailJS Implementation Steps

## Step 1: Sign Up for EmailJS

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for an account

## Step 2: Set Up Email Service

1. From your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Select your email provider (Gmail, Outlook, etc.)
4. Follow the authentication process
5. Once connected, note down the **Service ID**

## Step 3: Create Email Template

1. Go to "Email Templates" in the dashboard
2. Click "Create New Template"
3. Design your email template with dynamic variables:

```html
<h2>New Contact Form Submission</h2>
<p><strong>Name:</strong> {{user_name}}</p>
<p><strong>Email:</strong> {{user_email}}</p>
<p><strong>Phone:</strong> {{user_phone}}</p>
<p><strong>Message:</strong></p>
<p>{{message}}</p>

<p><strong>Form Type:</strong> {{form_type}}</p>
{{#if service_type}}
<p><strong>Service Requested:</strong> {{service_type}}</p>
{{/if}}
```

4. Save the template and note the **Template ID**

## Step 4: Get Your Public Key

1. Go to "Account" > "API Keys"
2. Copy your **Public Key**

## Step 5: Update Your Code

Replace the placeholders in `ContactSection.tsx` with your actual values:

```typescript
emailjs.sendForm(
    'YOUR_SERVICE_ID',    // Replace with your Service ID from Step 2
    'YOUR_TEMPLATE_ID',   // Replace with your Template ID from Step 3
    form.current,
    'YOUR_PUBLIC_KEY'     // Replace with your Public Key from Step 4
)
```

## Step 6: Test the Form

1. Run your application locally
2. Fill out and submit the contact form
3. Check your email to verify receipt
4. Check the EmailJS dashboard for delivery status

## Step 7: Domain Restriction (Optional Security Enhancement)

1. In EmailJS dashboard, go to "Account" > "API Keys"
2. Add domain restrictions to only allow your website to use your EmailJS account

## Step 8: Monitor Usage

The free tier of EmailJS allows 200 emails per month. Monitor your usage in the dashboard.
