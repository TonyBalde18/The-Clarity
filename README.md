# The Clarity — Landing Page

Marketing landing page for **The Clarity**, a UK-based business consultancy.
Built with [Astro](https://astro.build) as a static site, deployed to GitHub
Pages.

## Stack

- [Astro](https://astro.build) — static output, no client-side framework
- Self-hosted fonts via [Fontsource](https://fontsource.org) — Cormorant
  Garamond (headings) + Inter Variable (body/UI) — no external Google Fonts
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
  components/     One .astro component per homepage section, plus
                   Header, Footer, and PlaceholderArt (temporary imagery)
  layouts/
    Layout.astro   Shared <head>, fonts, meta tags
  pages/
    index.astro    Assembles all sections into the single homepage
  styles/
    global.css     Brand colours, type scale, layout primitives
public/
  images/          Drop real photography here (see public/images/README.md)
  favicon.svg
```

## Placeholder content

Text and imagery marked `TODO` throughout the codebase are placeholders
written in The Clarity's brand voice, not final copy. Search the codebase for
`TODO` to find everything that still needs a real pass:

```bash
grep -rn "TODO" src public
```

Images are currently rendered by a `<PlaceholderArt />` component (tone-on-tone
geometric shapes in the brand palette) rather than stock photography, per the
brand's imagery guidelines (no generic "business people" stock). See
`public/images/README.md` for exactly how to swap in real photography.

## Deploying to GitHub Pages

This repo includes a GitHub Actions workflow at
`.github/workflows/deploy.yml` that builds the site and deploys it to GitHub
Pages automatically on every push to `main`.

**One-time setup:**

1. Push this repo to GitHub as `the-clarity` (or update `base` in
   `astro.config.mjs` to match whatever repo name you actually use).
2. In `astro.config.mjs`, replace `your-github-username` in the `site` field
   with your actual GitHub username or org.
3. In the GitHub repo, go to **Settings → Pages** and set **Source** to
   **GitHub Actions**.
4. Push to `main` — the workflow will build and deploy automatically. Your
   site will be live at `https://<your-github-username>.github.io/the-clarity/`.

**Moving to a custom domain later:** see the comment block at the top of
`astro.config.mjs` — it walks through the three changes needed (`site`,
`base`, and a `public/CNAME` file).

### Exact commands to push for the first time

```bash
git init
git add .
git commit -m "Initial commit: The Clarity landing page"
git branch -M main
git remote add origin https://github.com/<your-github-username>/the-clarity.git
git push -u origin main
```

Then set Pages source to "GitHub Actions" as described above.
