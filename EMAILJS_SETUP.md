# EmailJS Setup for Contact Form

## Overview
The contact form now sends emails directly from the frontend using EmailJS, eliminating the need for a backend server.

## Setup Instructions

### 1. Create EmailJS Account

1. Visit [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a **FREE** account (no credit card required)
3. Verify your email

### 2. Add Gmail Service

1. Go to **"Email Services"** in the EmailJS dashboard
2. Click **"Add New Service"**
3. Select **"Gmail"**
4. Click **"Connect Account"** and authorize with `chris.pathfinder.72@gmail.com`
5. Give it a name (e.g., "Chris Pathfinder Gmail")
6. **COPY the Service ID** (e.g., `service_abc1234`)

### 3. Create Email Template

1. Go to **"Email Templates"** in the EmailJS dashboard
2. Click **"Create New Template"**
3. Set Template Name: `template_contact`
4. Configure the template:

**To Email:**
```
chris.pathfinder.72@gmail.com
```

**From Name:**
```
{{from_name}}
```

**Subject:**
```
New Contact Form Submission from {{from_name}}
```

**Content (Message Body):**
```html
New contact form submission:

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Date of Birth: {{dob}}
Qualification: {{profession}}
Gender: {{gender}}

Message:
{{message}}

---
This message was sent from the Chris Pathfinder website contact form.
Reply to: {{from_email}}
```

5. Click **"Save"**
6. **COPY the Template ID** (should be `template_contact`)

### 4. Get Your Public Key

1. Go to **"Account"** → **"General"** in the EmailJS dashboard
2. Find **"Public Key"** section
3. **COPY your Public Key** (looks like a random string)

### 5. Update Environment Variables

Open the `.env.local` file in your project root and update:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=template_contact
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

### 6. Run the Application

```powershell
npm run dev
```

That's it! No backend server needed. The form will now send emails directly to `chris.pathfinder.72@gmail.com`.

## Features

✅ Frontend-only solution (no backend required)
✅ Direct email delivery to chris.pathfinder.72@gmail.com
✅ reCAPTCHA protection
✅ Form validation
✅ Success/error messages
✅ Auto-reset form after submission
✅ FREE (EmailJS free tier: 200 emails/month)

## Testing

1. Fill out the contact form
2. Complete the reCAPTCHA
3. Click "Send Message"
4. Check `chris.pathfinder.72@gmail.com` inbox for the email

## Troubleshooting

**Error: "EmailJS is not configured"**
- Make sure you've added your Public Key to `.env.local`
- Restart the dev server after updating `.env.local`

**Emails not received:**
- Check your EmailJS dashboard for sent emails
- Verify the Gmail service is connected
- Check spam folder in Gmail
- Ensure you're using the correct template ID

**reCAPTCHA errors:**
- The site key is already configured
- Make sure you have internet connection

## EmailJS Free Tier Limits

- ✅ 200 emails per month
- ✅ Unlimited templates
- ✅ Email history for 30 days
- ✅ Gmail, Outlook, Yahoo, and custom SMTP support

Perfect for small to medium websites!
