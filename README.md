# Momiji Travel Website

Modern Next.js landing page for Momiji Travel & Tours Sdn Bhd.

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

After connecting the GitHub repository to Vercel, every push to the production branch will trigger a new deployment.
