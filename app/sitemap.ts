import { MetadataRoute } from 'next'
import * as fs from 'fs'
import * as path from 'path'
import { buildLocalizedUrl } from '@/lib/seo/urls'
import { getSupportedLocalesForPath } from '@/lib/i18n/routeLocaleSupport'

interface IssueData {
  slug: string
  title: string
  deviceType: 'mic' | 'webcam' | 'keyboard' | 'screen'
  platform: string
  problem: string
  keywords: string[]
}

function getIssuesData(): IssueData[] {
  const filePath = path.join(process.cwd(), 'data', 'issues.json')
  const fileContent = fs.readFileSync(filePath, 'utf-8')
  return JSON.parse(fileContent) as IssueData[]
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://devicecheck.io'
  
  // Routes with hreflang alternates (home + 5 tools)
  const routesWithAlternates = [
    { path: '/', priority: 1.0, changeFrequency: 'daily' as const },
    { path: '/mic', priority: 0.9, changeFrequency: 'daily' as const },
    { path: '/webcam', priority: 0.9, changeFrequency: 'daily' as const },
    { path: '/keyboard', priority: 0.9, changeFrequency: 'daily' as const },
    { path: '/screen', priority: 0.9, changeFrequency: 'daily' as const },
    { path: '/meeting-check', priority: 0.9, changeFrequency: 'daily' as const }
  ]
  
  const staticRoutes = [
    '/guides',
    '/issues',
    '/privacy',
    '/terms',
    '/contact',
    '/hubs/windows-device-issues',
    '/hubs/mac-device-issues',
    '/hubs/chrome-permissions-issues',
    '/hubs/zoom-issues',
    '/hubs/teams-issues',
    '/hubs/discord-issues',
    '/hubs/laptop-device-troubleshooting'
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
    '/guides/mic-not-working-windows-11',
    '/guides/mic-too-quiet',
    '/guides/mic-static-or-crackling',
    '/guides/mic-test-for-zoom',
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
    '/guides/webcam-quality-improve',
    '/guides/improve-webcam-quality',
    '/guides/how-device-access-works',
    '/guides/laptop-camera-not-working',
    // Keyboard guides
    '/guides/keyboard-not-working',
    '/guides/keys-not-registering',
    '/guides/how-to-test-keyboard-windows',
    '/guides/how-to-test-keyboard-mac',
    '/guides/chromebook-keyboard-test',
    '/guides/sticky-repeating-keys',
    '/guides/mechanical-keyboard-switch-test',
    '/guides/keyboard-ghosting-explained',
    '/guides/keyboard-keys-not-working',
    // Screen guides
    '/guides/dead-pixel-test-guide',
    '/guides/how-to-fix-stuck-pixels',
    '/guides/screen-flickering',
    '/guides/screen-looks-washed-out',
    '/guides/colour-calibration-basics',
    '/guides/dead-vs-stuck-pixels',
    '/guides/screen-flickering-fix'
  ]

  // Get all issues from issues.json
  const issues = getIssuesData()
  const issueRoutes = issues.map((issue) => `/issues/${issue.slug}`)

  const routes: MetadataRoute.Sitemap = [
  // Routes with hreflang alternates (home + 5 tools) — only emit locale URLs that exist
  ...routesWithAlternates.map((route) => {
      const supported = getSupportedLocalesForPath(route.path)
      const languages: Record<string, string> = {}
      for (const locale of supported) {
        languages[locale] = buildLocalizedUrl(route.path, locale)
      }
      return {
        url: buildLocalizedUrl(route.path, 'en'),
        lastModified: new Date(),
        changeFrequency: route.changeFrequency,
        priority: route.priority,
        alternates: {
          languages
        }
      }
    }),
    // Other static routes (no alternates)
    ...staticRoutes.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    })),
    ...guideRoutes.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    ...issueRoutes.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }))
  ]

  return routes
}
