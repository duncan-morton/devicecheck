import { Metadata } from 'next'
import HubPage from '@/components/HubPage'
import { generateMetadata as genMeta } from '@/lib/seo/metadata'

const title = 'Discord Issues – Troubleshooting Hub'
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

