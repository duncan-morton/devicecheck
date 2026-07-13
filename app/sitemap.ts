import { MetadataRoute } from 'next'
import * as fs from 'fs'
import * as path from 'path'

const baseUrl = 'https://devicecheck.io'

/** List route slugs by reading the app/<section> directory (filesystem = source of truth). */
function slugsIn(section: string): string[] {
  const dir = path.join(process.cwd(), 'app', section)
  try {
    return fs
      .readdirSync(dir, { withFileTypes: true })
      .filter((d) => d.isDirectory() && !d.name.startsWith('[') && !d.name.startsWith('_'))
      .map((d) => d.name)
      .sort()
  } catch {
    return []
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const tools = ['/mic', '/webcam', '/keyboard', '/screen', '/meeting-check']
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
    '/hubs/laptop-device-troubleshooting',
  ]

  const guideRoutes = slugsIn('guides').map((s) => `/guides/${s}`)
  const issueRoutes = slugsIn('issues').map((s) => `/issues/${s}`)

  return [
    { url: `${baseUrl}/`, lastModified: now, changeFrequency: 'daily', priority: 1.0 },
    ...tools.map((r) => ({
      url: `${baseUrl}${r}`,
      lastModified: now,
      changeFrequency: 'daily' as const,
      priority: 0.9,
    })),
    ...staticRoutes.map((r) => ({
      url: `${baseUrl}${r}`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    })),
    ...guideRoutes.map((r) => ({
      url: `${baseUrl}${r}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    ...issueRoutes.map((r) => ({
      url: `${baseUrl}${r}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
  ]
}
