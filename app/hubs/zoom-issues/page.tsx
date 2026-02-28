import { Metadata } from 'next'
import HubPage from '@/components/HubPage'
import { generateMetadata as genMeta } from '@/lib/seo/metadata'

const title = 'Zoom Device Issues — Diagnose & Fix'
const description =
  'Fix Zoom microphone and webcam issues fast. Step-by-step permissions, device selection, and quick fixes for Zoom audio and video.'
const path = '/hubs/zoom-issues'

export const metadata: Metadata = genMeta({
  title,
  description,
  path,
  keywords: [
    'zoom microphone not working',
    'zoom webcam not working',
    'zoom audio issues',
    'zoom camera blocked',
    'zoom troubleshooting'
  ]
})

export default function Page() {
  return (
    <HubPage
      config={{
        title,
        description,
        path,
        hubKey: 'zoom',
        primaryCta: { label: 'Run Full Meeting Check', href: '/meeting-check' },
        authorityGuideLink: { label: 'How device access works', href: '/guides/how-to-enable-camera-browser' },
        intro:
          'A single hub for fixing Zoom microphone and webcam problems. Follow these steps to unblock devices, pick the right inputs, and stop Zoom from muting or hiding your camera.',
        quickAnswer: {
          problem: 'Zoom blocked mic/camera or wrong device selected',
          platform: 'Zoom',
          deviceType: 'mic'
        },
        quickSummary: [
          'Allow microphone and camera in system privacy settings before opening Zoom',
          'In Zoom Settings → Audio/Video select the correct mic and camera',
          'Close other apps using the camera or mic, then restart Zoom',
          'Run the online mic and webcam tests to confirm detection before joining'
        ],
        why: [
          'Zoom respects system privacy controls. If Windows or macOS blocks access, Zoom cannot use your devices.',
          'Only one app can hold the camera or microphone at a time. Background conferencing apps can block Zoom.',
          'Zoom may default to a virtual or inactive device. Selecting the right input/output fixes most failures.',
          'Outdated Zoom versions or cached permissions can cause unreliable audio and video.'
        ],
        steps: [
          'Open system privacy settings (Windows/macOS) and allow microphone and camera access',
          'Open Zoom → Settings → Audio and select the correct microphone and speaker',
          'Open Zoom → Settings → Video and select the correct camera',
          'Uncheck “Automatically adjust microphone volume” if audio is unstable',
          'Close other conferencing apps and browser tabs that might hold the camera',
          'Restart Zoom after changing permissions',
          'Update Zoom to the latest version',
          'Test mic and camera with the online tools to confirm detection',
          'If using USB devices, reconnect and reselect them inside Zoom',
          'Disable virtual cameras or audio filters that may hijack device selection',
          'If audio is delayed, reduce background apps and check network stability',
          'Reinstall Zoom if settings appear stuck after updates'
        ],
        permissions: [
          'Windows/macOS: enable Microphone and Camera for desktop apps',
          'Zoom: Settings → Audio/Video, pick the correct devices',
          'Browser Zoom: allow mic and camera via the lock icon if joining from web',
          'Close other apps using the camera or mic before retrying'
        ],
        advanced: [
          'Delete Zoom configuration and re-sign in if devices never appear',
          'Disable VPNs or network filters that may block media streams',
          'Use wired headphones to prevent echo and feedback',
          'Lower HD video in Zoom if video freezes or lags',
          'Test on another account/profile to rule out profile corruption'
        ],
        prevention: [
          'Keep Zoom updated and restart it daily',
          'Check device selection before important calls',
          'Avoid running multiple video apps simultaneously',
          'Use wired connections for more stable audio and video',
          'Run a quick mic and camera test before joining meetings'
        ],
        faqs: [
          {
            question: 'Why can no one hear me in Zoom?',
            answer: 'Your mic may be blocked or the wrong device is selected. Allow microphone in system settings, pick the correct mic in Zoom Audio settings, and unmute.'
          },
          {
            question: 'Why is my Zoom camera black?',
            answer: 'Another app may be holding the camera, or Zoom is blocked. Close other apps, allow camera in system settings, and pick the correct camera in Zoom Video settings.'
          },
          {
            question: 'How do I stop Zoom audio delay?',
            answer: 'Reduce background apps, use wired networking if possible, and lower Zoom video quality. Close other streaming apps that consume bandwidth.'
          },
          {
            question: 'Why does Zoom pick the wrong microphone?',
            answer: 'Zoom may select a virtual or inactive mic. Open Audio settings and choose the correct input manually.'
          },
          {
            question: 'Should I use the Zoom web client or app?',
            answer: 'The desktop app offers better control of devices. If the web client is required, allow mic and camera in the browser lock icon first.'
          },
          {
            question: 'Can I test before joining?',
            answer: 'Yes. Use the online mic and webcam tests, then use Zoom’s Test Speaker & Microphone to confirm.'
          }
        ]
      }}
    />
  )
}

