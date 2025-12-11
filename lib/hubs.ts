import issuesData from '@/data/issues.json'

export interface IssueItem {
  slug: string
  title: string
  deviceType: 'mic' | 'webcam' | 'keyboard' | 'screen'
  platform: string
  problem: string
  keywords: string[]
}

const issues = issuesData as IssueItem[]

export type IssueGroup = Record<'mic' | 'webcam' | 'keyboard' | 'screen', IssueItem[]>

export function groupIssues(filter: (issue: IssueItem) => boolean): IssueGroup {
  const grouped: IssueGroup = {
    mic: [],
    webcam: [],
    keyboard: [],
    screen: []
  }

  issues.filter(filter).forEach(issue => {
    grouped[issue.deviceType].push(issue)
  })

  return grouped
}

const platformIncludes = (issue: IssueItem, values: string[]) =>
  values.some(v => issue.platform.toLowerCase().includes(v.toLowerCase()))

const slugIncludes = (issue: IssueItem, values: string[]) =>
  values.some(v => issue.slug.toLowerCase().includes(v.toLowerCase()))

export const hubFilters = {
  windows: (issue: IssueItem) =>
    platformIncludes(issue, ['windows 10', 'windows 11', 'windows']) ||
    slugIncludes(issue, ['windows-10', 'windows-11', 'windows']),
  mac: (issue: IssueItem) =>
    platformIncludes(issue, ['mac', 'macos', 'macbook']),
  chrome: (issue: IssueItem) =>
    platformIncludes(issue, ['chrome']) || slugIncludes(issue, ['chrome']),
  zoom: (issue: IssueItem) =>
    platformIncludes(issue, ['zoom']) || slugIncludes(issue, ['zoom']),
  teams: (issue: IssueItem) =>
    platformIncludes(issue, ['teams', 'microsoft teams']) || slugIncludes(issue, ['teams']),
  discord: (issue: IssueItem) =>
    platformIncludes(issue, ['discord']) || slugIncludes(issue, ['discord']),
  laptop: (issue: IssueItem) =>
    platformIncludes(issue, ['windows', 'mac', 'macos', 'macbook', 'chromebook']) ||
    slugIncludes(issue, ['windows', 'mac', 'macos', 'macbook', 'chromebook'])
}

export interface GuideLink {
  title: string
  href: string
}

export interface ToolLink {
  title: string
  href: string
}

export const toolSets: Record<
  'windows' | 'mac' | 'chrome' | 'zoom' | 'teams' | 'discord' | 'laptop',
  ToolLink[]
> = {
  windows: [
    { title: 'Microphone Test', href: '/mic' },
    { title: 'Webcam Test', href: '/webcam' },
    { title: 'Keyboard Test', href: '/keyboard' },
    { title: 'Screen Test', href: '/screen' }
  ],
  mac: [
    { title: 'Microphone Test', href: '/mic' },
    { title: 'Webcam Test', href: '/webcam' },
    { title: 'Keyboard Test', href: '/keyboard' },
    { title: 'Screen Test', href: '/screen' }
  ],
  chrome: [
    { title: 'Microphone Test', href: '/mic' },
    { title: 'Webcam Test', href: '/webcam' }
  ],
  zoom: [
    { title: 'Microphone Test', href: '/mic' },
    { title: 'Webcam Test', href: '/webcam' }
  ],
  teams: [
    { title: 'Microphone Test', href: '/mic' },
    { title: 'Webcam Test', href: '/webcam' }
  ],
  discord: [
    { title: 'Microphone Test', href: '/mic' },
    { title: 'Webcam Test', href: '/webcam' }
  ],
  laptop: [
    { title: 'Microphone Test', href: '/mic' },
    { title: 'Webcam Test', href: '/webcam' },
    { title: 'Keyboard Test', href: '/keyboard' },
    { title: 'Screen Test', href: '/screen' }
  ]
}

export const guideSets: Record<
  'windows' | 'mac' | 'chrome' | 'zoom' | 'teams' | 'discord' | 'laptop',
  GuideLink[]
> = {
  windows: [
    { title: 'Microphone Not Working Windows 11', href: '/issues/microphone-not-working-windows-11' },
    { title: 'Screen Flickering Windows 11', href: '/issues/screen-flickering-windows-11' }
  ],
  mac: [
    { title: 'Microphone Not Working on Mac', href: '/issues/microphone-not-working-mac' },
    { title: 'Screen Flickering on Mac', href: '/issues/screen-flickering-mac' }
  ],
  chrome: [
    { title: 'Webcam Not Detected in Chrome', href: '/issues/webcam-not-detected-chrome' },
    { title: 'Chrome Microphone Permission Blocked', href: '/issues/chrome-microphone-permission-blocked' }
  ],
  zoom: [
    { title: 'Microphone Not Working in Zoom', href: '/issues/microphone-not-working-zoom' },
    { title: 'Webcam Not Working in Zoom', href: '/issues/webcam-not-working-zoom' }
  ],
  teams: [
    { title: 'Microphone Not Working in Microsoft Teams', href: '/issues/microphone-not-working-teams' },
    { title: 'Webcam Not Working in Microsoft Teams', href: '/issues/webcam-not-working-teams' }
  ],
  discord: [
    { title: 'Microphone Not Working in Discord', href: '/issues/microphone-not-working-discord' },
    { title: 'Webcam Not Working in Discord', href: '/issues/webcam-not-working-discord' }
  ],
  laptop: [
    { title: 'Webcam Freezes After a Few Seconds', href: '/issues/webcam-freezing-after-few-seconds' },
    { title: 'Keyboard Not Working on Windows 11', href: '/issues/keyboard-not-working-windows-11' }
  ]
}

