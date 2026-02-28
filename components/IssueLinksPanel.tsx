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

const NEXT_CHECKS: Record<string, { meeting: string; other: { href: string; label: string } }> = {
  webcam: { meeting: 'Run full meeting check', other: { href: '/mic', label: 'Microphone test' } },
  mic: { meeting: 'Run full meeting check', other: { href: '/webcam', label: 'Webcam test' } },
  keyboard: { meeting: 'Run full meeting check', other: { href: '/webcam', label: 'Webcam test' } },
  screen: { meeting: 'Run full meeting check', other: { href: '/webcam', label: 'Webcam test' } },
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
  const samePlatform = sameDevice.filter(
    (i) => i.platform && issue.platform && i.platform.toLowerCase() === issue.platform.toLowerCase()
  )
  const commonProblems = [
    ...samePlatform,
    ...sameDevice.filter((i) => !samePlatform.includes(i)),
  ]
    .slice(0, 4)
    .sort((a, b) => (a.title || a.slug).localeCompare(b.title || b.slug))

  const nextChecks = NEXT_CHECKS[issue.deviceType]

  return (
    <section className="mt-4 mb-6 space-y-4" aria-label="Related links">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

        <div className={`bg-white rounded-xl border border-gray-200 p-4 md:p-6 ${!hub ? 'md:col-span-2' : ''}`}>
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
      </div>

      {nextChecks && (
        <div className="bg-white rounded-xl border border-gray-200 p-4 md:p-6">
          <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-3">
            Next checks
          </h3>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/meeting-check"
              className="inline-flex items-center px-4 py-2.5 rounded-lg font-medium text-white bg-green-600 hover:bg-green-700 transition-colors text-sm"
            >
              {nextChecks.meeting}
            </Link>
            <Link
              href={nextChecks.other.href}
              className="inline-flex items-center px-4 py-2.5 rounded-lg font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 border border-gray-200 transition-colors text-sm"
            >
              Test {nextChecks.other.label.toLowerCase()}
            </Link>
          </div>
        </div>
      )}
    </section>
  )
}
