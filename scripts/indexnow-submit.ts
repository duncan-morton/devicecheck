/**
 * IndexNow submission: notifies search engines of URL updates for faster indexing.
 * Run: INDEXNOW_KEY=<key> npx tsx scripts/indexnow-submit.ts
 * DRY_RUN=1 to print payload without sending.
 *
 * Key must match the content of public/<KEY>.txt (e.g. public/dc-idx-4a2e1b9c3d5f6e7a8b9c0d1e2f.txt).
 */

import * as fs from 'fs'
import * as path from 'path'
import { getSupportedLocalesForPath } from '../lib/i18n/routeLocaleSupport'

const INDEXNOW_API = 'https://api.indexnow.org/indexnow'
const BATCH_SIZE = 10_000

const ROUTES_WITH_ALTERNATES = ['/', '/mic', '/webcam', '/keyboard', '/screen', '/meeting-check']

const STATIC_ROUTES = [
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

const GUIDE_ROUTES = [
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
  '/guides/keyboard-not-working',
  '/guides/keys-not-registering',
  '/guides/how-to-test-keyboard-windows',
  '/guides/how-to-test-keyboard-mac',
  '/guides/chromebook-keyboard-test',
  '/guides/sticky-repeating-keys',
  '/guides/mechanical-keyboard-switch-test',
  '/guides/keyboard-ghosting-explained',
  '/guides/keyboard-keys-not-working',
  '/guides/dead-pixel-test-guide',
  '/guides/how-to-fix-stuck-pixels',
  '/guides/screen-flickering',
  '/guides/screen-looks-washed-out',
  '/guides/colour-calibration-basics',
  '/guides/dead-vs-stuck-pixels',
  '/guides/screen-flickering-fix'
]

function buildUrl(baseUrl: string, pathSegment: string, locale: string): string {
  const clean = baseUrl.replace(/\/$/, '')
  if (locale === 'en') {
    return pathSegment === '/' ? clean : `${clean}${pathSegment}`
  }
  const seg = pathSegment === '/' ? '' : pathSegment
  return `${clean}/${locale}${seg}`
}

function getIssuePaths(): string[] {
  const filePath = path.join(process.cwd(), 'data', 'issues.json')
  const raw = fs.readFileSync(filePath, 'utf-8')
  const data = JSON.parse(raw) as Array<{ slug: string }>
  return data.map((i) => `/issues/${i.slug}`)
}

function collectUrls(baseUrl: string): string[] {
  const set = new Set<string>()

  for (const route of ROUTES_WITH_ALTERNATES) {
    const locales = getSupportedLocalesForPath(route)
    for (const locale of locales) {
      set.add(buildUrl(baseUrl, route, locale))
    }
  }

  for (const route of STATIC_ROUTES) {
    set.add(`${baseUrl.replace(/\/$/, '')}${route}`)
  }

  for (const route of GUIDE_ROUTES) {
    set.add(`${baseUrl.replace(/\/$/, '')}${route}`)
  }

  for (const route of getIssuePaths()) {
    set.add(`${baseUrl.replace(/\/$/, '')}${route}`)
  }

  return Array.from(set)
}

function toCanonicalHost(baseUrl: string): string {
  let u: URL
  try {
    u = new URL(baseUrl)
  } catch {
    return 'devicecheck.io'
  }
  let host = u.hostname
  if (host.startsWith('www.')) {
    host = host.slice(4)
  }
  return host
}

async function main() {
  const key = process.env.INDEXNOW_KEY
  if (!key || key.length < 8) {
    console.error('Missing or invalid INDEXNOW_KEY. Set it to the same value as in public/<KEY>.txt (e.g. dc-idx-4a2e1b9c3d5f6e7a8b9c0d1e2f).')
    process.exit(1)
  }

  let baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://devicecheck.io'
  baseUrl = baseUrl.replace(/\/$/, '')
  if (baseUrl.includes('www.')) {
    baseUrl = baseUrl.replace(/^https?:\/\/www\./, (p) => p.replace('www.', ''))
  }

  const host = toCanonicalHost(baseUrl)
  const keyLocation = `${baseUrl}/${key}.txt`
  const urls = collectUrls(baseUrl)
  const deduped = Array.from(new Set(urls))

  console.log('IndexNow submit')
  console.log('  host:', host)
  console.log('  keyLocation:', keyLocation)
  console.log('  URL count:', deduped.length)

  const batches: string[][] = []
  for (let i = 0; i < deduped.length; i += BATCH_SIZE) {
    batches.push(deduped.slice(i, i + BATCH_SIZE))
  }
  console.log('  batches:', batches.length)

  const dryRun = process.env.DRY_RUN === '1' || process.env.DRY_RUN === 'true'
  if (dryRun) {
    console.log('\nDRY_RUN=1: would send the following payload(s):')
    for (let b = 0; b < batches.length; b++) {
      console.log('\nBatch', b + 1, '(', batches[b].length, 'URLs ):')
      console.log(JSON.stringify({ host, key, keyLocation, urlList: batches[b].slice(0, 5) }, null, 2))
      if (batches[b].length > 5) console.log('  ... and', batches[b].length - 5, 'more URLs')
    }
    process.exit(0)
  }

  for (let b = 0; b < batches.length; b++) {
    const urlList = batches[b]
    const payload = { host, key, keyLocation, urlList }
    const res = await fetch(INDEXNOW_API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })
    console.log('  Batch', b + 1, ':', res.status, res.statusText)
    if (!res.ok) {
      const text = await res.text()
      console.error('  Body:', text.slice(0, 500))
      process.exit(1)
    }
  }

  console.log('Done.')
}

main()
