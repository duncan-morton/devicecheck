import { Metadata } from 'next'

const BASE_URL = 'https://devicecheck.io'
const SITE_NAME = 'DeviceCheck.io'
const DEFAULT_DESCRIPTION = 'Free online device testing tools. Test your webcam, microphone, keyboard, screen, and more. Instant browser-based device diagnostics.'

export interface PageMetadata {
  title: string
  description: string
  path: string
  keywords?: string[]
  ogImage?: string
  noindex?: boolean
}

export function generateMetadata(config: PageMetadata): Metadata {
  const fullTitle = config.title.includes('|') 
    ? config.title 
    : `${config.title} | ${SITE_NAME}`
  
  const canonical = `${BASE_URL}${config.path}`
  const ogImage = config.ogImage || `${BASE_URL}/og-image.png`

  return {
    title: fullTitle,
    description: config.description,
    keywords: config.keywords?.join(', '),
    alternates: {
      canonical
    },
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
      locale: 'en_US',
      type: 'website'
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


