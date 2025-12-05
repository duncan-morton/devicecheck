import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://devicecheck.io'
  
  const staticRoutes = [
    '',
    '/webcam',
    '/mic',
    '/keyboard',
    '/screen',
    '/meeting-check',
    '/guides',
    '/privacy',
    '/terms',
    '/contact'
  ]

  const guideRoutes = [
    // Microphone guides
    '/guides/microphone-not-working',
    '/guides/microphone-too-quiet',
    '/guides/microphone-static-crackling',
    '/guides/microphone-test-zoom',
    '/guides/microphone-test-microsoft-teams',
    '/guides/microphone-test-google-meet',
    '/guides/how-to-enable-microphone-chrome',
    '/guides/how-to-enable-microphone-firefox',
    '/guides/how-to-enable-microphone-safari',
    '/guides/how-to-enable-microphone-edge',
    '/guides/microphone-not-detected-windows-10',
    '/guides/microphone-not-detected-windows-11',
    '/guides/mac-microphone-not-working',
    '/guides/chromebook-microphone-not-working',
    '/guides/iphone-microphone-test',
    '/guides/android-microphone-test',
    // Webcam guides
    '/guides/webcam-not-working',
    '/guides/webcam-not-detected-chrome',
    '/guides/webcam-not-detected-mac',
    '/guides/how-to-enable-camera-browser',
    '/guides/webcam-test-zoom',
    '/guides/webcam-test-microsoft-teams',
    '/guides/webcam-test-google-meet',
    '/guides/webcam-too-dark-grainy',
    '/guides/webcam-lagging-low-fps',
    '/guides/external-webcam-not-recognised',
    // Keyboard guides
    '/guides/keyboard-not-working',
    '/guides/keys-not-registering',
    '/guides/how-to-test-keyboard-windows',
    '/guides/how-to-test-keyboard-mac',
    '/guides/chromebook-keyboard-test',
    '/guides/sticky-repeating-keys',
    '/guides/mechanical-keyboard-switch-test',
    '/guides/keyboard-ghosting-explained',
    // Screen guides
    '/guides/dead-pixel-test-guide',
    '/guides/how-to-fix-stuck-pixels',
    '/guides/screen-flickering',
    '/guides/screen-looks-washed-out',
    '/guides/colour-calibration-basics'
  ]

  const routes = [
    ...staticRoutes.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: route === '' ? 1.0 : 0.9,
    })),
    ...guideRoutes.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }))
  ]

  return routes
}
