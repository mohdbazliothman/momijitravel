# Momiji Travel Website

Modern Next.js landing page for Momiji Travel & Tours Sdn Bhd.

## Routes

- `/ms/` - Bahasa Melayu homepage
- `/en/` - English homepage
- `/int/` - International inbound-tourism homepage
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

This project uses Next.js static export through `next.config.mjs`.

## Vercel Deployment

Recommended Vercel settings:

- Framework Preset: `Next.js`
- Install Command: `npm install`
- Build Command: `npm run build`
- Output Directory: `out`

The project includes `vercel.json` to redirect `/` to `/ms/`.

After connecting the GitHub repository to Vercel, every push to the production branch will trigger a new deployment.
