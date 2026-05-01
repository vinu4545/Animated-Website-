# ColdFrame (React)

This folder is a **Vite + React** shell around the mirrored legacy experience: the main markup is injected from `src/coldframe-body.html`, and scroll / WebGL behavior still comes from the patched bundle in `public/_astro/hoisted.CRsATKbF.js`.

## Setup

From `coldframe-react`:

```bash
npm install
npm run prepare:site
npm run dev
```

`prepare:site` copies assets from `../oryzo.ai` into `public/`, rewrites **ColdFrame** branding (no ORYZO / Lusion links in user-facing copy), patches the JS bundle, and regenerates `src/coldframe-body.html`.

Run `prepare:site` again after you update `../oryzo.ai/index.html` or the source bundle.

## Production build

```bash
npm run prepare:site
npm run build
npm run preview
```

## Assets

For the full visual experience you need a complete `oryzo.ai` mirror (images, video, fonts, `.riv` if any, etc.). This repo may only contain a subset; add missing files under `oryzo.ai/` and re-run `prepare:site`.

## Favicon

`index.html` points to `/meta/favicon.svg`. Replace files under `public/meta/` with your own ColdFrame artwork when ready.
