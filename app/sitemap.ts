import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://devicecheck.io'
  
  const routes = [
    '',
    '/webcam',
    '/mic',
    '/keyboard',
    '/screen',
    '/meeting-check',
    '/guides',
    '/guides/webcam-not-working-fix',
    '/guides/test-webcam-for-zoom',
    '/guides/microphone-not-working-fix',
    '/guides/keyboard-test-online-guide',
    '/guides/dead-pixel-test-guide',
    '/privacy',
    '/terms'
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route.startsWith('/guides') ? 'monthly' : 'weekly',
    priority: route === '' ? 1.0 : route.startsWith('/guides') ? 0.7 : 0.9,
  }))
}


