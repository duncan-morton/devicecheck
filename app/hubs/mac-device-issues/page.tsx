import { Metadata } from 'next'
import HubPage from '@/components/HubPage'
import { generateMetadata as genMeta } from '@/lib/seo/metadata'

const title = 'Mac Device Issues — Diagnose & Fix'
const description =
  'Fix microphone, webcam, keyboard, and screen issues on macOS. Step-by-step guides and common problems explained.'
const path = '/hubs/mac-device-issues'

export const metadata: Metadata = genMeta({
  title,
  description,
  path,
  keywords: [
    'mac microphone not working',
    'mac webcam not working',
    'mac keyboard not working',
    'mac screen flicker',
    'mac device troubleshooting'
  ]
})

export default function Page() {
  return (
    <HubPage
      config={{
        title,
        description,
        path,
        hubKey: 'mac',
        primaryCta: { label: 'Run Full Meeting Check', href: '/meeting-check' },
        authorityGuideLink: { label: 'How device access works', href: '/guides/how-to-enable-camera-browser' },
        intro:
          'Resolve macOS microphone, webcam, keyboard, and screen problems in one place. Use this hub to fix permissions, drivers, and app conflicts on Mac and MacBook systems.',
        quickAnswer: {
          problem: 'macOS privacy settings or device permissions blocking access',
          platform: 'macOS',
          deviceType: 'mic'
        },
        quickSummary: [
          'Check macOS Privacy settings for microphone and camera access',
          'Select the correct input/output devices in System Settings → Sound',
          'Close apps that hold the camera or mic, then retest',
          'Update macOS and restart to refresh device services'
        ],
        why: [
          'macOS privacy controls block microphone and camera until you allow each app. After updates, permissions can reset.',
          'Audio and camera services can lock to a single app. Background conferencing apps or browsers may hold the device.',
          'System updates or kext changes can impact device stability. Restarting and updating often restores services.',
          'Display or keyboard issues can come from power settings, external device conflicts, or incorrect input sources.'
        ],
        steps: [
          'Open System Settings → Privacy & Security → Microphone and Camera, allow needed apps',
          'Open Sound settings and select the correct input and output devices',
          'Close Zoom, Teams, Discord, and browser tabs using the camera or mic, then retry',
          'Restart the Mac to release device locks and reload services',
          'Update macOS to the latest version available',
          'Test the microphone and webcam using the online tools in the browser',
          'For USB devices, reconnect directly to the Mac and avoid unpowered hubs',
          'Disable noise suppression or audio effects if voice sounds muffled or clipped',
          'Check Display settings for refresh rate and color profile if the screen flickers or colors look wrong',
          'Reset NVRAM/PRAM if display or audio routing is inconsistent',
          'Create a new user profile to rule out profile-level permission issues',
          'If problems persist, test the device on another Mac to confirm hardware health'
        ],
        permissions: [
          'System Settings → Privacy & Security → Microphone: allow required apps',
          'System Settings → Privacy & Security → Camera: allow required apps',
          'Browser: click the address bar lock and allow Microphone/Camera',
          'Conferencing apps: select the correct device inside app settings after granting system permissions'
        ],
        advanced: [
          'Remove and re-add apps from Microphone/Camera lists to refresh permissions',
          'Reset NVRAM/PRAM if audio or display routing seems stuck',
          'Check Activity Monitor for apps holding the camera or mic and quit them',
          'Update or reinstall conferencing apps that fail to see devices',
          'Run Apple Diagnostics if hardware faults are suspected'
        ],
        prevention: [
          'Keep macOS and conferencing apps updated',
          'Grant permissions once, then avoid frequent permission resets',
          'Close video apps fully after meetings to release devices',
          'Use direct USB connections instead of hubs when possible',
          'Run a quick device test before important calls'
        ],
        faqs: [
          {
            question: 'Why is my Mac microphone not detected?',
            answer: 'Microphone access may be blocked in Privacy settings. Allow the app under Microphone, select the correct input in Sound settings, and restart the app.'
          },
          {
            question: 'How do I fix a black screen on my Mac webcam?',
            answer: 'Allow camera access in Privacy settings, close other apps using the camera, and reopen the app. If needed, restart the Mac and test again.'
          },
          {
            question: 'Why is my Mac keyboard lagging?',
            answer: 'Check for heavy background apps, disable keyboard accessibility filters if enabled, and ensure the correct input source is selected. Restart to clear locks.'
          },
          {
            question: 'How do I stop Mac screen flicker?',
            answer: 'Update macOS, check the display refresh rate and color profile, and disconnect extra adapters. Reset NVRAM if flicker persists.'
          },
          {
            question: 'Which test should I run first?',
            answer: 'Run the online microphone and webcam tests to confirm detection. If they fail, recheck permissions and restart the Mac.'
          },
          {
            question: 'Can another app block my Mac camera or mic?',
            answer: 'Yes. Only one app can hold the device. Quit conferencing apps or browser tabs that may be using the camera or mic, then retry.'
          }
        ]
      }}
    />
  )
}

