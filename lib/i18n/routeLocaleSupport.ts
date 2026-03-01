import type { Locale } from '@/i18n/getTranslation'
import { getLocalizedPath } from '@/i18n/getTranslation'

/**
 * Single source of truth: which locales have a real route for a given path.
 * Used to avoid emitting hreflang, sitemap entries, or internal links to locale URLs that 404.
 *
 * - Tools (/, /mic, /webcam, /keyboard, /screen, /meeting-check): all locales
 * - Hubs (/hubs/*): EN only
 * - Issues (/issues/*): EN only
 * - Contact: EN only
 * - Privacy, Terms: all locales (pages exist in de, es, fr, pt, hi)
 * - Guides (/guides/*): EN only for now (per-guide locale existence could be added later)
 */
const ALL_LOCALES: Locale[] = ['en', 'de', 'es', 'fr', 'pt', 'hi']

const TOOL_PATHS = ['/', '/mic', '/webcam', '/keyboard', '/screen', '/meeting-check']

/** Paths that exist in all locale trees */
const PATHS_ALL_LOCALES = new Set([
  '/',
  '/mic',
  '/webcam',
  '/keyboard',
  '/screen',
  '/meeting-check',
  '/privacy',
  '/terms'
])

/** Path prefixes that are EN-only (no locale copies) */
const EN_ONLY_PREFIXES = ['/hubs/', '/issues/', '/guides/']

/** Exact paths that are EN-only */
const EN_ONLY_EXACT = new Set(['/contact'])

/**
 * Normalize path to base path (no locale prefix).
 * e.g. /pt/mic -> /mic, /hubs/zoom-issues -> /hubs/zoom-issues
 */
function getBasePath(path: string): string {
  const segments = path.split('/').filter(Boolean)
  if (segments.length > 0 && (ALL_LOCALES as string[]).includes(segments[0])) {
    const rest = segments.slice(1).join('/')
    return rest ? `/${rest}` : '/'
  }
  return path.startsWith('/') ? path : `/${path}`
}

/**
 * Returns which locales actually have a route for this path.
 * Used for hreflang, sitemap, and to decide when to link to a locale variant.
 */
export function getSupportedLocalesForPath(path: string): Locale[] {
  const base = getBasePath(path)

  if (PATHS_ALL_LOCALES.has(base)) return [...ALL_LOCALES]
  if (EN_ONLY_EXACT.has(base)) return ['en']
  if (TOOL_PATHS.includes(base)) return [...ALL_LOCALES]

  for (const prefix of EN_ONLY_PREFIXES) {
    if (base.startsWith(prefix)) return ['en']
  }

  return ['en']
}

/**
 * Returns the path to use for the given locale: localized if that locale has a route, otherwise EN.
 * Use this for internal links and locale switcher so we never link to a locale URL that 404s.
 */
export function localizePathIfSupported(path: string, locale: Locale): string {
  const base = getBasePath(path)
  const supported = getSupportedLocalesForPath(path)
  const effectiveLocale = supported.includes(locale) ? locale : 'en'
  return getLocalizedPath(base, effectiveLocale)
}
