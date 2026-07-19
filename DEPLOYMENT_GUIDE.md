# Gift4U Deployment Guide

This guide will walk you through getting your Gift4U website live on the internet for FREE. No coding experience needed — just follow each step.

---

## Step 1: Create a GitHub Account (skip if you already have one)

1. Go to https://github.com
2. Click "Sign Up"
3. Enter your email, create a password, and choose a username
4. Verify your email address
5. Done! You now have a GitHub account

---

## Step 2: Upload Your Code to GitHub

### Option A: Using GitHub Website (Easiest)

1. Log into GitHub
2. Click the "+" icon in the top right corner
3. Click "New repository"
4. Name it: `gift4u`
5. Make sure "Public" is selected
6. Click "Create repository"
7. On the next page, click "uploading an existing file" link
8. Drag and drop ALL the files from your gift4u folder into the upload area
   - Make sure to include ALL folders (app, components, context, data) and files (package.json, tailwind.config.js, etc.)
9. Click "Commit changes"

### Option B: Using GitHub Desktop App (More Reliable for Many Files)

1. Download GitHub Desktop from https://desktop.github.com
2. Install and sign in with your GitHub account
3. Click "File" > "New Repository"
4. Name: gift4u
5. Choose the gift4u folder as the local path
6. Click "Create Repository"
7. Click "Publish Repository" at the top
8. Uncheck "Keep this code private" if checked
9. Click "Publish Repository"

---

## Step 3: Deploy on Vercel (FREE)

1. Go to https://vercel.com
2. Click "Sign Up" and choose "Continue with GitHub"
3. Authorize Vercel to access your GitHub
4. Once logged in, click "Add New..." > "Project"
5. You'll see your GitHub repositories — find "gift4u" and click "Import"
6. Leave all settings as default (Vercel auto-detects Next.js)
7. Click "Deploy"
8. Wait 1-2 minutes while it builds
9. DONE! You'll get a URL like: https://gift4u-yourusername.vercel.app

---

## Step 4: Your Site is Live!

That's it! Your Gift4U website is now live on the internet. Anyone in the world can visit it.

Your free URL will look something like:
- https://gift4u.vercel.app
- https://gift4u-abc123.vercel.app

---

## Optional: Custom Domain

If you want a custom domain like www.gift4u.com:

1. Buy a domain from Namecheap (https://namecheap.com) or GoDaddy
2. In your Vercel dashboard, go to your project > Settings > Domains
3. Add your custom domain
4. Follow Vercel's instructions to update your domain's DNS settings
5. Wait a few minutes and your custom domain will be connected

---

## Updating Your Site

Whenever you want to make changes:

1. Edit the files on GitHub (or push new changes via GitHub Desktop)
2. Vercel automatically rebuilds and deploys — no action needed from you!

---

## Need Help?

- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs
- GitHub Docs: https://docs.github.com

---

## Payment Integration (When Ready to Accept Real Payments)

The current site has payment UI buttons. To accept real payments, you'll need:

### Stripe (Cards, Apple Pay, Google Pay)
1. Create account at https://stripe.com
2. Get your API keys from the Stripe dashboard
3. Add them as environment variables in Vercel

### PayPal
1. Create business account at https://paypal.com
2. Get API credentials from PayPal Developer portal
3. Add them as environment variables in Vercel

### Crypto
1. Sign up for a crypto payment processor like:
   - Coinbase Commerce (https://commerce.coinbase.com)
   - BitPay (https://bitpay.com)
   - NOWPayments (https://nowpayments.io)
2. Get your API key and add to Vercel environment variables

When you're ready to set up real payments, just let me know and I'll help you integrate them!
