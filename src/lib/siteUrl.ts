/** Resolve the public site origin for canonical and Open Graph URLs. */
export function getSiteOrigin(): string {
  const configured = import.meta.env.VITE_SITE_URL?.replace(/\/$/, '')
  if (configured) return configured

  const base = import.meta.env.BASE_URL.replace(/\/$/, '')
  const path = base && base !== '/' ? base : ''

  if (typeof window !== 'undefined') {
    return `${window.location.origin}${path}`
  }

  return path ? `https://brzrk-motion.github.io${path}` : 'https://brzrk-motion.github.io/brzrk-site'
}
