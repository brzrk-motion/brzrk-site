/** Resolve the public site origin for canonical and Open Graph URLs. */
export function getSiteOrigin(): string {
  const configured = import.meta.env.VITE_SITE_URL?.replace(/\/$/, '')
  if (configured) return configured

  const base = import.meta.env.BASE_URL.replace(/\/$/, '')
  return base && base !== '/' ? `https://brzrk-motion.github.io${base}` : 'https://brzrk-motion.github.io/brzrk-site'
}
