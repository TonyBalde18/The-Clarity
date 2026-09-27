# The Clarity - Landing Page

Marketing landing page for **The Clarity**, a UK-based business consultancy.
Built with [Astro](https://astro.build) as a static site, deployed to GitHub
Pages.

## Stack

- [Astro](https://astro.build) - static output, no client-side framework
- Self-hosted fonts via [Fontsource](https://fontsource.org) - Cormorant
  Garamond (headings) + Inter Variable (body/UI) - no external Google Fonts
  request, no render-blocking third-party connection
- Plain CSS with custom properties for the brand design tokens
  (`src/styles/global.css`)

## Local development

```bash
npm install
npm run dev
```

This starts a dev server (default: http://localhost:4321) with hot reload.

## Build

```bash
npm run build
```

Outputs the static site to `dist/`. Preview the production build locally with:

```bash
npm run preview
```

## Project structure

```
src/
  assets/images/     Source photography (optimised by Astro at build time)
  components/        One .astro component per homepage section, plus
                     Header, Footer, Photo (optimised images) and
                     PlaceholderArt (founder photo stand-in)
  data/
    services.ts      The four services: nav labels, full titles, page copy
    site.ts          Contact email, social links, base-aware link helper
  layouts/
    Layout.astro         Shared <head>: meta, Open Graph, favicon
    ServiceLayout.astro  Shared template for every service page
  pages/
    index.astro            Homepage
    services/[slug].astro  /services/strategy|systems|brand|growth/
    404.astro              Not-found page
  styles/
    global.css       Brand colours, type scale, buttons, layout primitives
public/
  favicon.svg, apple-touch-icon.png, og-image.jpg (social share image)
IMAGES.md            Photo credits and how to swap images
```

### Links and the base path

The site is served from `/The-Clarity/`, so never hard-code root paths like
`/services/brand/` or `#about`. Use `withBase()` from `src/data/site.ts`:
`withBase('services/brand/')`, `withBase('#about')`.

## Placeholder content

Text marked `TODO` in the codebase is placeholder copy written in The
Clarity's brand voice, not final copy. The service-page copy lives in
`src/data/services.ts`. Search for `TODO` to find everything that still
needs a real pass:

```bash
grep -rn "TODO" src
```

Photography credits, and how to replace any image (including adding the
founder photo), are in `IMAGES.md`.

## Deploying to GitHub Pages

This repo includes a GitHub Actions workflow at
`.github/workflows/deploy.yml` that builds the site and deploys it to GitHub
Pages automatically on every push to `main`. It's deployed as
`TonyBalde18/The-Clarity`, and `astro.config.mjs` is already configured to
match (`site: 'https://TonyBalde18.github.io'`, `base: '/The-Clarity/'`) — set
the repo's **Settings → Pages → Source** to **GitHub Actions** and pushes to
`main` deploy automatically.
