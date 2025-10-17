# EmailJS Setup Instructions

## 1. Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## 2. Set Up Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Note down your **Service ID**

## 3. Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template content:

```
Subject: New Contact Form Message from {{from_name}}

Hello {{to_name}},

You have received a new message from your portfolio contact form:

From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This message was sent from your portfolio website.
```

4. Save the template and note down your **Template ID**

## 4. Get Public Key
1. Go to "Account" → "General"
2. Find your **Public Key** (also called User ID)

## 5. Set Environment Variables
Create a `.env.local` file in your project root with:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
```

Replace the placeholder values with your actual EmailJS credentials.

## 6. Test the Form
1. Start your development server: `pnpm dev`
2. Navigate to your contact form
3. Fill out and submit the form
4. Check your email to confirm the message was received

## Important Notes
- The free EmailJS plan allows 200 emails per month
- Make sure to keep your credentials secure and never commit them to version control
- The `.env.local` file should be in your `.gitignore`
