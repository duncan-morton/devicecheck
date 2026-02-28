import Link from 'next/link'

export interface TroubleshootingMatrixIssue {
  deviceType: string
  platform?: string
  slug: string
}

const HUB_MAPPINGS: Array<{ test: (p: string) => boolean; path: string; name: string }> = [
  { test: (p) => /zoom/i.test(p), path: '/hubs/zoom-issues', name: 'Zoom issues' },
  { test: (p) => /teams/i.test(p), path: '/hubs/teams-issues', name: 'Teams issues' },
  { test: (p) => /discord/i.test(p), path: '/hubs/discord-issues', name: 'Discord issues' },
  { test: (p) => /chrome/i.test(p) || /firefox/i.test(p) || /safari/i.test(p) || /edge/i.test(p), path: '/hubs/chrome-permissions-issues', name: 'Browser permission issues' },
  { test: (p) => /windows/i.test(p), path: '/hubs/windows-device-issues', name: 'Windows device issues' },
  { test: (p) => /mac/i.test(p) || /macos/i.test(p), path: '/hubs/mac-device-issues', name: 'Mac device issues' },
]

function getHubForPlatform(platform: string | undefined): { path: string; name: string } | null {
  if (!platform?.trim()) return null
  const p = platform.trim()
  for (const { test, path, name } of HUB_MAPPINGS) {
    if (test(p)) return { path, name }
  }
  return null
}

const DEVICE_HARDWARE_LAYER: Record<string, string> = {
  webcam: 'Camera / webcam hardware',
  mic: 'Microphone hardware',
  microphone: 'Microphone hardware',
  keyboard: 'Keyboard hardware',
  screen: 'Display / monitor',
}

const BROWSER_PLATFORMS = ['Chrome', 'Firefox', 'Safari', 'Edge']
const APP_PLATFORMS = ['Zoom', 'Microsoft Teams', 'Discord', 'Discord Mobile', 'Google Meet']

function isOS(platform: string): boolean {
  const p = platform.toLowerCase()
  return /windows|mac|macos|chrome os|gaming/i.test(p)
}

function isBrowser(platform: string): boolean {
  return BROWSER_PLATFORMS.some((b) => platform.toLowerCase().includes(b.toLowerCase()))
}

function isApp(platform: string): boolean {
  return APP_PLATFORMS.some((a) => platform.toLowerCase().includes(a.toLowerCase()))
}

const FAILURE_POINTS: Record<string, string[]> = {
  webcam: [
    'Browser or app permission blocked',
    'OS privacy settings (camera access disabled)',
    'Outdated or missing camera driver',
    'App selecting wrong camera or none',
    'Another app or process locking the camera',
    'USB or built-in camera not detected by OS',
  ],
  mic: [
    'Browser or app permission blocked',
    'OS privacy settings (microphone access disabled)',
    'Outdated or missing audio driver',
    'App selecting wrong microphone or none',
    'Another app using the microphone exclusively',
    'Default system microphone set incorrectly',
  ],
  microphone: [
    'Browser or app permission blocked',
    'OS privacy settings (microphone access disabled)',
    'Outdated or missing audio driver',
    'App selecting wrong microphone or none',
    'Another app using the microphone exclusively',
    'Default system microphone set incorrectly',
  ],
  keyboard: [
    'Wrong keyboard layout or input source selected',
    'OS accessibility or filter keys interfering',
    'Driver or USB controller issue',
    'App or game not receiving focus',
    'Hardware connection or port problem',
    'Firmware or wireless pairing issue',
  ],
  screen: [
    'Wrong display or refresh rate selected',
    'Graphics driver outdated or conflicting',
    'Cable or connector fault',
    'Display power or sleep settings',
    'Another display taking precedence',
    'Hardware fault (backlight, panel)',
  ],
}

const NOT_DETECTED_SLUGS: Record<string, string> = {
  webcam: 'webcam-not-detected-chrome',
  mic: 'microphone-not-detected-usb',
  microphone: 'microphone-not-detected-usb',
  keyboard: 'keyboard-not-detected-usb',
  screen: 'screen-not-detected-windows',
}

const QUALITY_SLUGS: Record<string, string> = {
  webcam: 'webcam-poor-quality',
  mic: 'microphone-too-quiet-windows',
  microphone: 'microphone-too-quiet-windows',
  keyboard: 'keyboard-keys-typing-wrong',
  screen: 'monitor-colour-inaccuracy',
}

interface TroubleshootingMatrixProps {
  issue: TroubleshootingMatrixIssue
}

export default function TroubleshootingMatrix({ issue }: TroubleshootingMatrixProps) {
  const deviceType = (issue.deviceType || '').toLowerCase().trim()
  const platform = (issue.platform || '').trim()
  const failurePoints = FAILURE_POINTS[deviceType] || FAILURE_POINTS.mic
  const hardwareLabel = DEVICE_HARDWARE_LAYER[deviceType] || 'Device hardware'
  const hub = getHubForPlatform(platform)
  const notDetectedSlug = NOT_DETECTED_SLUGS[deviceType]
  const qualitySlug = QUALITY_SLUGS[deviceType]

  const stackLayers: string[] = []
  stackLayers.push(hardwareLabel)
  if (platform && isOS(platform)) stackLayers.push(`OS layer (${platform})`)
  if (platform && isApp(platform)) stackLayers.push(`Application layer (${platform})`)
  if (platform && isBrowser(platform)) stackLayers.push(`Browser layer (${platform})`)

  return (
    <div className="rounded-xl border border-gray-200 bg-gray-50/50 p-4 md:p-5 mb-6" aria-labelledby="troubleshooting-matrix-heading">
      <h2 id="troubleshooting-matrix-heading" className="text-lg font-semibold text-gray-900 mb-3">
        Troubleshooting matrix
      </h2>

      <div className="space-y-4 text-sm text-gray-700">
        <div>
          <h3 className="font-medium text-gray-900 mb-1">Where this problem usually occurs</h3>
          <ul className="list-disc pl-5 space-y-0.5">
            {stackLayers.map((layer, i) => (
              <li key={i}>{layer}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-medium text-gray-900 mb-1">Common failure points in this stack</h3>
          <ul className="list-disc pl-5 space-y-0.5">
            {failurePoints.slice(0, 6).map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-medium text-gray-900 mb-1">If this fix doesn&apos;t work</h3>
          <ul className="list-disc pl-5 space-y-0.5">
            {notDetectedSlug && (
              <li>
                Device not detected at all → <Link href={`/issues/${notDetectedSlug}`} className="text-blue-600 hover:text-blue-800">Not detected guide</Link>
              </li>
            )}
            {qualitySlug && qualitySlug !== notDetectedSlug && (
              <li>
                Device works but quality is poor → <Link href={`/issues/${qualitySlug}`} className="text-blue-600 hover:text-blue-800">Quality &amp; settings guide</Link>
              </li>
            )}
            {hub && (
              <li>
                Issue is specific to {platform} → <Link href={hub.path} className="text-blue-600 hover:text-blue-800">{hub.name}</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  )
}
