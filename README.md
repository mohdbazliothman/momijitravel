# Momiji Travel Website

Modern Next.js landing page for Momiji Travel & Tours Sdn Bhd.

## Routes

- `/ms/` - Bahasa Melayu homepage
- `/en/` - English homepage
- `/int/` - International inbound-tourism homepage
- `/int/book-planning-call/` - Free trip-planning call request form
- `/int/travel-enquiry/` - Written inbound travel enquiry form
- `/int/multi-country-tours/malaysia-singapore-thailand/` - Signature Malaysia, Singapore and Thailand tour page
- `/` - redirects to `/ms/` on Vercel, with a static fallback page

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production Build

```bash
npm run build
```

This project uses Next.js with Vercel serverless routes for secure form submission.

## Email Form Environment Variables

The inbound consultation and travel enquiry forms submit through a server-side API route. Configure these variables in Vercel before launch:

```bash
RESEND_API_KEY=your_resend_api_key
EMAIL_FROM=Momiji Travel <verified-sender@your-domain.com>
CONTACT_EMAIL_TO=mymomijimedia@gmail.com
```

`CONTACT_EMAIL_TO` defaults to `mymomijimedia@gmail.com` if omitted, but `RESEND_API_KEY` and `EMAIL_FROM` are required for email delivery.

## Vercel Deployment

Recommended Vercel settings:

- Framework Preset: `Next.js`
- Install Command: `npm install`
- Build Command: `npm run build`

The project includes `vercel.json` to redirect `/` to `/ms/`.

After connecting the GitHub repository to Vercel, every push to the production branch will trigger a new deployment.
