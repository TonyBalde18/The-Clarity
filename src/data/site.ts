// ---------------------------------------------------------------------------
// Site-wide details — change contact info and social links here, once.
// ---------------------------------------------------------------------------

export const SITE_NAME = 'The Clarity';

export const EMAIL = 'hello@theclarity.online';

/** Builds a mailto: link, optionally with a pre-filled subject line. */
export function mailto(subject?: string): string {
  return subject ? `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}` : `mailto:${EMAIL}`;
}

// TODO: add real profile URLs. A link is only shown in the footer once its
// `href` is filled in, so there are never dead "#" links on the live site.
export const SOCIAL_LINKS: { label: string; href: string }[] = [
  { label: 'Instagram', href: '' },
  { label: 'LinkedIn', href: '' },
];

/**
 * Prefixes a path with the configured `base` (see astro.config.mjs), so links
 * work both locally and under the GitHub Pages project path.
 *   withBase()                    -> '/The-Clarity/'
 *   withBase('#about')            -> '/The-Clarity/#about'
 *   withBase('services/brand/')   -> '/The-Clarity/services/brand/'
 */
export function withBase(path = ''): string {
  const base = import.meta.env.BASE_URL.replace(/\/?$/, '/');
  return base + path.replace(/^\//, '');
}
