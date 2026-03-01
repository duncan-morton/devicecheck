import { Metadata } from 'next'
import HubPage from '@/components/HubPage'
import { generateMetadata as genMeta } from '@/lib/seo/metadata'

const title = 'Discord Device Issues — Diagnose & Fix'
const description =
  'Fix Discord microphone and webcam problems. Clear permissions, select the right devices, and stop robotic or missing audio.'
const path = '/hubs/discord-issues'

export const metadata: Metadata = genMeta({
  title,
  description,
  path,
  keywords: [
    'discord microphone not working',
    'discord camera not working',
    'discord robotic voice',
    'discord audio issues',
    'discord video problems'
  ]
})

export default function Page() {
  return (
    <HubPage
      config={{
        title,
        description,
        path,
        hubKey: 'discord',
        primaryCta: { label: 'Run Full Meeting Check', href: '/meeting-check' },
        authorityGuideLink: { label: 'How device access works', href: '/guides/how-device-access-works' },
        problemClusters: {
          sectionTitle: 'Common Discord Device Problems',
          intro:
            'Discord issues usually fall into a few categories: camera not working or not detected, microphone not working or robotic audio, permission denials, or OS-level conflicts (e.g. another app holding the device). Identifying which type you have speeds up the fix.',
          groups: [
            {
              title: 'Discord Camera Not Working',
              paragraphs: [
                'A black screen or "no camera" in Discord typically means the camera is blocked by the OS, used by another app, or Discord is set to the wrong device. On Windows and macOS, privacy settings must allow Discord (or your browser) to use the camera.',
                'If the camera works in other apps but not in Discord, check User Settings → Voice & Video and select the correct camera. For step-by-step fixes, see the'
              ],
              links: [{ href: '/issues/webcam-not-working-discord', label: 'webcam not working in Discord' }]
            },
            {
              title: 'Discord Microphone Not Working',
              paragraphs: [
                'When others can\'t hear you in Discord, or your voice sounds robotic, the mic is usually blocked by system privacy settings, not selected in Discord Voice & Video, or held by another app. Allow the microphone for Discord in Windows or macOS, then in Discord choose the correct input device.',
                'For detailed steps and troubleshooting, see the'
              ],
              links: [{ href: '/issues/microphone-not-working-discord', label: 'microphone not working in Discord' }]
            },
            {
              title: 'Discord Permission or Access Problems',
              paragraphs: [
                'If Discord cannot see your camera or microphone at all, the block is usually at the OS layer. Windows and macOS require explicit permission for each app. Browser Discord needs site permission via the lock icon.',
                'For how to unblock devices, see'
              ],
              links: [{ href: '/guides/how-to-enable-camera-browser', label: 'how to enable camera and microphone in the browser' }]
            },
            {
              title: 'Discord Audio or Device Conflicts',
              paragraphs: [
                'Robotic voice, echo, or no input in Discord are often caused by noise suppression, virtual audio devices, or another app holding the mic. Only one app can use the camera or mic at a time, so Zoom or Teams can block Discord.',
                'For audio and conflict fixes, see the'
              ],
              links: [{ href: '/issues/microphone-not-working-discord', label: 'microphone not working in Discord' }]
            }
          ]
        },
        howItWorks: {
          title: 'How Discord Accesses Your Camera & Microphone',
          paragraphs: [
            'Discord needs permission at several layers. First, the OS (Windows or macOS) must allow Discord to use the microphone and camera. If that\'s denied, Discord never sees the devices.',
            'In the Discord app, you then choose which camera and microphone to use in User Settings → Voice & Video. Only one app can use the camera or mic at a time, so another conferencing app or browser tab can block Discord and cause "no input" or black video.',
            'Understanding these layers helps when diagnosing: start with OS permissions, then confirm device selection and input sensitivity inside Discord. For more on how apps get access, see the guide below.'
          ],
          guideLink: { href: '/guides/how-device-access-works', label: 'How device access works' }
        },
        quickChecklist: {
          title: 'Before Your Next Discord Call — Quick Checklist',
          items: [
            'Test your camera with an online test or Discord video settings',
            'Test your microphone and confirm it\'s selected in Discord Voice & Video',
            'Close conflicting apps (other voice or video apps)',
            'Check Discord Voice & Video and confirm the correct devices and input sensitivity',
            'Run a full meeting check to verify everything before joining'
          ],
          meetingCheckHref: '/meeting-check'
        },
        intro:
          'Fix Discord mic and camera issues in one place. Use these steps to unblock permissions, stop robotic audio, and select the correct devices for Discord voice and video.',
        quickAnswer: {
          problem: 'Discord blocked mic/camera or wrong device selected',
          platform: 'Discord',
          deviceType: 'mic'
        },
        quickSummary: [
          'Allow microphone and camera in system privacy settings',
          'In Discord Settings → Voice & Video, select the correct mic and camera',
          'Disable noise suppression/echo cancellation if audio sounds robotic',
          'Close other apps using the camera or mic, then restart Discord'
        ],
        why: [
          'System privacy blocks can prevent Discord from seeing the microphone or camera. Permissions must be enabled first.',
          'Only one app can hold the camera or microphone. Background conferencing apps can block Discord.',
          'Wrong device selection or virtual devices cause no audio or distorted sound. Selecting the correct hardware fixes most cases.',
          'Noise suppression or audio filters can distort voice, causing robotic sound.'
        ],
        steps: [
          'Enable Microphone and Camera in system privacy settings (Windows/macOS)',
          'Open Discord → User Settings → Voice & Video and choose the correct input/output devices',
          'Toggle off Advanced Voice Processing if audio sounds robotic',
          'Close Zoom, Teams, or other apps that might hold the devices',
          'Restart Discord after changing permissions',
          'Update Discord to the latest version',
          'Test mic and camera with the online tools to confirm detection',
          'If using USB, reconnect and reselect devices inside Discord',
          'Disable virtual audio cables or virtual cameras if they interfere',
          'Reset Discord voice settings if device selection is stuck',
          'Check Input Sensitivity and set manually if Discord is not picking up voice',
          'If issues persist, reinstall Discord'
        ],
        permissions: [
          'Windows/macOS: allow Microphone and Camera access',
          'Discord: User Settings → Voice & Video, pick correct mic and camera',
          'Browser Discord: allow mic and camera via the lock icon when using web',
          'Close other apps that may be using the devices'
        ],
        advanced: [
          'Disable GPU acceleration if video is unstable',
          'Turn off Noise Suppression or Echo Cancellation to stop robotic audio',
          'Check hardware acceleration conflicts with certain GPUs',
          'Use Push to Talk to avoid open mic noise if suppression causes distortion',
          'Test in a new Discord account/profile to rule out profile corruption'
        ],
        prevention: [
          'Keep Discord updated',
          'Verify mic and camera selection before streaming or calls',
          'Avoid stacking multiple audio processors or virtual devices',
          'Close unused video apps to release camera and mic',
          'Run a quick mic and camera test before going live'
        ],
        faqs: [
          {
            question: 'Why does my Discord voice sound robotic?',
            answer: 'Noise suppression or network jitter can distort audio. Disable advanced processing, choose the correct mic, and close other apps using bandwidth.'
          },
          {
            question: 'Why is my camera not showing in Discord?',
            answer: 'Another app may be using the camera or Discord is blocked. Close other apps, allow camera in system settings, and select the correct device in Discord.'
          },
          {
            question: 'How do I fix “no input detected” in Discord?',
            answer: 'Select the correct microphone in Voice & Video, set input sensitivity manually, and ensure system permissions allow microphone access.'
          },
          {
            question: 'Can Discord use virtual devices?',
            answer: 'Yes, but virtual devices can fail. If video or audio fails, switch to the physical device in settings.'
          },
          {
            question: 'Should I restart Discord after changes?',
            answer: 'Yes. Restart Discord after changing permissions or device selection to clear locks.'
          },
          {
            question: 'How do I test before joining a call?',
            answer: 'Use the online mic and webcam tests, then place a test call in Discord to confirm.'
          }
        ]
      }}
    />
  )
}

