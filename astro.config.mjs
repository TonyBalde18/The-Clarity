import { defineConfig } from 'astro/config';

// ---------------------------------------------------------------------------
// GitHub Pages (project page) config — CURRENT SETUP
// ---------------------------------------------------------------------------
// This site is deployed to: https://TonyBalde18.github.io/The-Clarity/
// `site` must be the root of that GitHub Pages account, and `base` must be
// the repo name (with leading + trailing slash, matching its exact case) so
// that all internal links, the sitemap, and asset URLs resolve correctly
// under the /The-Clarity/ path.
//
// ---------------------------------------------------------------------------
// MOVING TO A CUSTOM DOMAIN LATER? Do this:
// ---------------------------------------------------------------------------
// 1. Set `site` to your custom domain, e.g. 'https://theclarity.co.uk'
// 2. Set `base` to '/' (remove the '/The-Clarity/' project-page path)
// 3. Add a `public/CNAME` file containing just your domain name, e.g.
//      theclarity.co.uk
// 4. Configure the DNS records for your domain to point at GitHub Pages
//    (see https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)
// No other code changes are needed — Astro rewrites all internal links
// automatically based on `base`.
// ---------------------------------------------------------------------------

export default defineConfig({
  site: 'https://TonyBalde18.github.io',
  base: '/The-Clarity/',
});
