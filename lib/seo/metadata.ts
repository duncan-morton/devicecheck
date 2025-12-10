import { Metadata } from 'next'
import type { Locale } from '@/i18n/getTranslation'
import { getLocalizedPath, SUPPORTED_LOCALES } from '@/i18n/getTranslation'
import { buildLocalizedUrl, getBasePath, shouldHaveAlternates } from './urls'

const BASE_URL = 'https://devicecheck.io'
const SITE_NAME = 'DeviceCheck.io'
const DEFAULT_DESCRIPTION = 'Free online device testing tools. Test your webcam, microphone, keyboard, screen, and more. Instant browser-based device diagnostics.'

const LOCALE_MAP: Record<Locale, string> = {
  en: 'en_US',
  es: 'es_ES',
  pt: 'pt_BR',
  de: 'de_DE',
  fr: 'fr_FR',
  hi: 'hi_IN'
}

export interface PageMetadata {
  title: string
  description: string
  path: string
  keywords?: string[]
  ogImage?: string
  noindex?: boolean
  locale?: Locale
}

export function generateMetadata(config: PageMetadata): Metadata {
  const locale = config.locale || 'en'
  const fullTitle = config.title.includes('|') 
    ? config.title 
    : `${config.title} | ${SITE_NAME}`
  
  const canonical = `${BASE_URL}${config.path}`
  const ogImage = config.ogImage || `${BASE_URL}/og-image.png`

  // Generate hreflang alternates only for home + 5 tools
  let alternates: Metadata['alternates'] = {
    canonical
  }
  
  if (shouldHaveAlternates(config.path)) {
    const basePath = getBasePath(config.path)
    const languages: Record<string, string> = {}
    
    for (const loc of SUPPORTED_LOCALES) {
      languages[loc] = buildLocalizedUrl(basePath, loc)
    }
    
    alternates = {
      canonical,
      languages
    }
  }

  return {
    title: fullTitle,
    description: config.description,
    keywords: config.keywords?.join(', '),
    alternates,
    openGraph: {
      title: fullTitle,
      description: config.description,
      url: canonical,
      siteName: SITE_NAME,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: config.title
        }
      ],
      locale: LOCALE_MAP[locale],
      type: 'website',
      alternateLocale: Object.values(LOCALE_MAP).filter(l => l !== LOCALE_MAP[locale])
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: config.description,
      images: [ogImage]
    },
    robots: {
      index: !config.noindex,
      follow: !config.noindex,
      googleBot: {
        index: !config.noindex,
        follow: !config.noindex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1
      }
    }
  }
}


