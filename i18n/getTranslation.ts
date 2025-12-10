import enTranslations from './translations/en.json'
import esTranslations from './translations/es.json'
import ptTranslations from './translations/pt.json'
import deTranslations from './translations/de.json'
import frTranslations from './translations/fr.json'
import hiTranslations from './translations/hi.json'

export type Locale = 'en' | 'es' | 'pt' | 'de' | 'fr' | 'hi'

const translations: Record<Locale, typeof enTranslations> = {
  en: enTranslations,
  es: esTranslations,
  pt: ptTranslations,
  de: deTranslations,
  fr: frTranslations,
  hi: hiTranslations
}

export function getTranslation(locale: Locale = 'en') {
  return translations[locale] || translations.en
}

export function getLocaleFromPath(pathname: string): Locale {
  const segments = pathname.split('/').filter(Boolean)
  const firstSegment = segments[0]
  
  if (['es', 'pt', 'de', 'fr', 'hi'].includes(firstSegment)) {
    return firstSegment as Locale
  }
  
  return 'en'
}

export function getPathWithoutLocale(pathname: string): string {
  const segments = pathname.split('/').filter(Boolean)
  const firstSegment = segments[0]
  
  if (['es', 'pt', 'de', 'fr', 'hi'].includes(firstSegment)) {
    return '/' + segments.slice(1).join('/')
  }
  
  return pathname || '/'
}

export function getLocalizedPath(path: string, locale: Locale): string {
  if (locale === 'en') {
    return path
  }
  
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path
  
  return `/${locale}/${cleanPath}`
}

export const SUPPORTED_LOCALES: Locale[] = ['en', 'es', 'pt', 'de', 'fr', 'hi']

export const LOCALE_NAMES: Record<Locale, string> = {
  en: 'English',
  es: 'Español',
  pt: 'Português',
  de: 'Deutsch',
  fr: 'Français',
  hi: 'हिन्दी'
}



