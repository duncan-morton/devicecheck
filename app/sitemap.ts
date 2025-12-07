import { MetadataRoute } from 'next'
import * as fs from 'fs'
import * as path from 'path'

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
  
  const staticRoutes = [
    '',
    '/webcam',
    '/mic',
    '/keyboard',
    '/screen',
    '/meeting-check',
    '/guides',
    '/issues',
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
