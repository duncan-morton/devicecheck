import type { Locale } from '@/i18n/getTranslation'
import { SUPPORTED_LOCALES } from '@/i18n/getTranslation'

export const BASE_URL = 'https://devicecheck.io'

/**
 * Builds a full URL for a given path and locale
 * @param path - The path (e.g., '/mic', '/webcam')
 * @param locale - The locale code
 * @returns Full URL (e.g., 'https://devicecheck.io/mic' or 'https://devicecheck.io/es/mic')
 */
export function buildLocalizedUrl(path: string, locale: Locale): string {
  if (locale === 'en') {
    return `${BASE_URL}${path}`
  }
  
  // Ensure path starts with /
  const cleanPath = path.startsWith('/') ? path : `/${path}`
  return `${BASE_URL}/${locale}${cleanPath}`
}

/**
 * Extracts the base path from a localized path
 * @param path - The path (e.g., '/mic' or '/es/mic' or '/es')
 * @returns The base path without locale prefix (e.g., '/mic' or '/')
 */
export function getBasePath(path: string): string {
  const segments = path.split('/').filter(Boolean)
  
  // Check if first segment is a locale
  if (segments.length > 0 && SUPPORTED_LOCALES.includes(segments[0] as Locale)) {
    const remaining = segments.slice(1).join('/')
    return remaining ? `/${remaining}` : '/'
  }
  
  return path || '/'
}

/**
 * Checks if a path should have hreflang alternates
 * Only home + 5 tools should have alternates
 */
export function shouldHaveAlternates(path: string): boolean {
  const basePath = getBasePath(path)
  const pathsWithAlternates = ['/', '/mic', '/webcam', '/keyboard', '/screen', '/meeting-check']
  return pathsWithAlternates.includes(basePath)
}

