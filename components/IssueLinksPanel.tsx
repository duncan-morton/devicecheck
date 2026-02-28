import Link from 'next/link'

export interface IssueForLinks {
  slug: string
  deviceType: string
  platform?: string
  title?: string
}

const HUB_MAPPINGS: Array<{ test: (p: string) => boolean; path: string; name: string }> = [
  { test: (p) => /zoom/i.test(p), path: '/hubs/zoom-issues', name: 'Zoom issues' },
  { test: (p) => /teams/i.test(p), path: '/hubs/teams-issues', name: 'Teams issues' },
  { test: (p) => /discord/i.test(p), path: '/hubs/discord-issues', name: 'Discord issues' },
  { test: (p) => /chrome/i.test(p) || /permission/i.test(p) || /browser/i.test(p), path: '/hubs/chrome-permissions-issues', name: 'Chrome & browser permission issues' },
  { test: (p) => /windows/i.test(p), path: '/hubs/windows-device-issues', name: 'Windows device issues' },
  { test: (p) => /mac/i.test(p) || /macos/i.test(p), path: '/hubs/mac-device-issues', name: 'Mac device issues' },
  { test: (p) => /laptop/i.test(p), path: '/hubs/laptop-device-troubleshooting', name: 'Laptop device troubleshooting' },
]

export function getHubForPlatform(platform: string | undefined): { path: string; name: string } | null {
  if (!platform || typeof platform !== 'string') return null
  const p = platform.trim()
  if (!p) return null
  for (const { test, path, name } of HUB_MAPPINGS) {
    if (test(p)) return { path, name }
  }
  return null
}

interface IssueLinksPanelProps {
  issue: IssueForLinks
  allIssues: Array<{ slug: string; deviceType: string; platform?: string; title?: string }>
}

export default function IssueLinksPanel({ issue, allIssues }: IssueLinksPanelProps) {
  const hub = getHubForPlatform(issue.platform)

  const sameDevice = allIssues.filter(
    (i) => i.deviceType === issue.deviceType && i.slug !== issue.slug
  )
  const samePlatformSameDevice = sameDevice.filter(
    (i) => i.platform && issue.platform && i.platform.toLowerCase() === issue.platform.toLowerCase()
  )
  const samePlatformDiffDevice = issue.platform
    ? allIssues.filter(
        (i) =>
          i.slug !== issue.slug &&
          i.platform &&
          issue.platform &&
          i.platform.toLowerCase() === issue.platform.toLowerCase() &&
          i.deviceType !== issue.deviceType
      )
    : []
  const sameDeviceDiffPlatform = sameDevice.filter((i) => !samePlatformSameDevice.includes(i))

  const merged: typeof allIssues = [...samePlatformSameDevice]
  if (samePlatformDiffDevice[0] && !merged.some((m) => m.slug === samePlatformDiffDevice[0].slug)) {
    merged.push(samePlatformDiffDevice[0])
  }
  if (sameDeviceDiffPlatform[0] && !merged.some((m) => m.slug === sameDeviceDiffPlatform[0].slug)) {
    merged.push(sameDeviceDiffPlatform[0])
  }
  for (const i of sameDevice) {
    if (merged.length >= 5) break
    if (!merged.some((m) => m.slug === i.slug)) merged.push(i)
  }
  const commonProblems = merged
    .slice(0, 5)
    .sort((a, b) => (a.title || a.slug).localeCompare(b.title || b.slug))

  return (
    <section className="mt-4 mb-6 space-y-4" aria-label="Related links">
      {/* Hub link first (internal link priority) */}
      {hub && (
        <div className="bg-white rounded-xl border border-gray-200 p-4 md:p-6">
          <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-2">
            Related hub
          </h3>
          <Link
            href={hub.path}
            className="text-blue-600 hover:text-blue-800 font-medium text-sm"
          >
            See all {hub.name} →
          </Link>
        </div>
      )}

      <div className="bg-white rounded-xl border border-gray-200 p-4 md:p-6">
        <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-3">
          Common problems
        </h3>
        <ul className="space-y-2">
          {commonProblems.map((i) => (
            <li key={i.slug}>
              <Link
                href={`/issues/${i.slug}`}
                className="text-gray-900 hover:text-blue-600 transition-colors"
              >
                {i.title || i.slug}
              </Link>
              {i.platform && (
                <p className="text-xs text-gray-500 mt-0.5">{i.platform}</p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
