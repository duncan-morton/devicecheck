export interface WebSiteSchema {
  '@context': string
  '@type': string
  name: string
  url: string
  description: string
  potentialAction?: {
    '@type': string
    target: string
    'query-input': string
  }
}

export interface OrganizationSchema {
  '@context': string
  '@type': string
  name: string
  url: string
  logo?: string
  sameAs?: string[]
}

export interface WebApplicationSchema {
  '@context': string
  '@type': string
  name: string
  url: string
  description: string
  applicationCategory: string
  operatingSystem: string
  browserRequirements?: string
  offers?: {
    '@type': string
    price: string
    priceCurrency: string
  }
}

export interface BreadcrumbListSchema {
  '@context': string
  '@type': string
  itemListElement: Array<{
    '@type': string
    position: number
    name: string
    item: string
  }>
}

export interface FAQPageSchema {
  '@context': string
  '@type': string
  mainEntity: Array<{
    '@type': string
    name: string
    acceptedAnswer: {
      '@type': string
      text: string
    }
  }>
}

export interface ArticleSchema {
  '@context': string
  '@type': string
  headline: string
  description: string
  author: {
    '@type': string
    name: string
  }
  publisher: {
    '@type': string
    name: string
    logo?: {
      '@type': string
      url: string
    }
  }
  datePublished?: string
  dateModified?: string
}

const BASE_URL = 'https://devicecheck.io'

export function generateWebSiteSchema(): WebSiteSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'DeviceCheck.io',
    url: BASE_URL,
    description: 'Free online device testing tools. Test your webcam, microphone, keyboard, screen, and more.',
    potentialAction: {
      '@type': 'SearchAction',
      target: `${BASE_URL}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string'
    }
  }
}

export function generateOrganizationSchema(): OrganizationSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'DeviceCheck.io',
    url: BASE_URL,
    logo: `${BASE_URL}/logo.png`,
    sameAs: []
  }
}

export function generateWebApplicationSchema(
  name: string,
  description: string,
  path: string
): WebApplicationSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name,
    url: `${BASE_URL}${path}`,
    description,
    applicationCategory: 'UtilityApplication',
    operatingSystem: 'Any',
    browserRequirements: 'Requires JavaScript. Requires HTML5.',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD'
    }
  }
}

export function generateBreadcrumbListSchema(
  items: Array<{ name: string; path: string }>
): BreadcrumbListSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${BASE_URL}${item.path}`
    }))
  }
}

export function generateFAQPageSchema(
  faqs: Array<{ question: string; answer: string }>
): FAQPageSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  }
}

export function generateArticleSchema(
  headline: string,
  description: string,
  path: string,
  datePublished?: string,
  dateModified?: string
): ArticleSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    author: {
      '@type': 'Person',
      name: 'DeviceCheck.io'
    },
    publisher: {
      '@type': 'Organization',
      name: 'DeviceCheck.io',
      logo: {
        '@type': 'ImageObject',
        url: `${BASE_URL}/logo.png`
      }
    },
    datePublished,
    dateModified
  }
}


