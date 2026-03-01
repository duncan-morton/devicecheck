import { Metadata } from 'next'
import Link from 'next/link'
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
        authorityGuideLink: { label: 'How device access works', href: '/guides/how-device-access-works' },
        problemClusters: {
          sectionTitle: 'Common Zoom Device Problems',
          intro:
            'Zoom issues usually fall into a few categories: camera not working or not detected, microphone not working or not selected, permission denials, or OS-level conflicts (e.g. another app holding the device). Identifying which type you have speeds up the fix.',
          groups: [
            {
              title: 'Zoom Camera Not Working',
              paragraphs: [
                'A black screen or "no camera" in Zoom typically means the camera is blocked by the OS, used by another app, or Zoom is set to the wrong device. On Windows and macOS, privacy settings must allow Zoom (or your browser) to use the camera.',
                'If the camera works in other apps but not in Zoom, check Zoom Settings → Video and select the correct camera. For step-by-step fixes, see the'
              ],
              links: [{ href: '/issues/webcam-not-working-zoom', label: 'webcam not working in Zoom' }]
            },
            {
              title: 'Zoom Microphone Not Working',
              paragraphs: [
                'When others can’t hear you in Zoom, the mic is usually blocked by system privacy settings, not selected in Zoom Audio settings, or held by another app. Allow the microphone for Zoom (or your browser) in Windows or macOS, then in Zoom choose the correct input device.',
                'For detailed steps and troubleshooting, see the'
              ],
              links: [{ href: '/issues/microphone-not-working-zoom', label: 'microphone not working in Zoom' }]
            },
            {
              title: 'Zoom Permission or Access Problems',
              paragraphs: [
                'If Zoom cannot see your camera or microphone at all, the block is usually at the OS or browser layer. Windows and macOS require explicit permission for each app; browser Zoom needs site permission via the lock icon or prompt.',
                'For how to unblock devices, see'
              ],
              links: [{ href: '/guides/how-to-enable-camera-browser', label: 'how to enable camera and microphone in the browser' }]
            },
            {
              title: 'Zoom Audio or Device Conflicts',
              paragraphs: [
                'Delay, echo, or feedback in Zoom are often caused by speaker output being picked up by the mic, virtual audio devices, or network latency. Use a headset or wired headphones to reduce echo; close other audio apps and check Zoom’s device selection.',
                'For delay and feedback fixes, see the'
              ],
              links: [{ href: '/issues/zoom-audio-delay-microphone', label: 'Zoom microphone delay or lag' }]
            }
          ]
        },
        howItWorks: {
          title: 'How Zoom Accesses Your Camera & Microphone',
          paragraphs: [
            'Zoom needs permission at several layers. First, the OS (Windows or macOS) must allow Zoom—or the browser, if you use Zoom on the web—to use the microphone and camera. If that’s denied, Zoom never sees the devices.',
            'In the browser, Zoom Web also needs site permission (via the lock icon or prompt). In the Zoom desktop app, you then choose which camera and microphone to use in Settings → Audio and Video. Only one app can use the camera or mic at a time, so another conferencing app or browser tab can block Zoom and cause "not detected" or black video.',
            'Understanding these layers helps when diagnosing: start with OS and browser permissions, then confirm device selection inside Zoom. For more on how apps get access, see the guide below.'
          ],
          guideLink: { href: '/guides/how-device-access-works', label: 'How device access works' }
        },
        quickChecklist: {
          title: 'Before Your Next Zoom Call — Quick Checklist',
          items: [
            'Test your camera with an online test or Zoom’s video test',
            'Test your microphone and confirm it’s selected in Zoom Audio settings',
            'Close conflicting apps (other video calls, streaming, or camera apps)',
            'Check Zoom Settings → Audio/Video and confirm the correct devices',
            'Run a full meeting check to verify everything before joining'
          ],
          meetingCheckHref: '/meeting-check'
        },
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
          <>Run the online mic and webcam tests, or use the <Link href="/meeting-check">full meeting check</Link>, to confirm detection before joining</>
        ],
        why: [
          'Zoom respects system privacy controls. If Windows or macOS blocks access, Zoom cannot use your devices.',
          <>Only one app can hold the camera or microphone at a time. Background conferencing apps can block Zoom — see <Link href="/issues/webcam-not-working-zoom">webcam not working in Zoom</Link> for steps.</>,
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

