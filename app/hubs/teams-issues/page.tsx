import { Metadata } from 'next'
import HubPage from '@/components/HubPage'
import { generateMetadata as genMeta } from '@/lib/seo/metadata'

const title = 'Microsoft Teams Issues – Troubleshooting Hub'
const description =
  'Fix Microsoft Teams microphone and webcam problems. Step-by-step permissions and device selection guide for Teams audio and video.'
const path = '/hubs/teams-issues'

export const metadata: Metadata = genMeta({
  title,
  description,
  path,
  keywords: [
    'teams microphone not working',
    'teams camera not working',
    'teams audio issues',
    'teams video problems',
    'microsoft teams troubleshooting'
  ]
})

export default function Page() {
  return (
    <HubPage
      config={{
        title,
        description,
        path,
        hubKey: 'teams',
        intro:
          'Solve Microsoft Teams microphone and webcam issues quickly. This hub covers permissions, correct device selection, and app conflicts that keep Teams from seeing your devices.',
        quickAnswer: {
          problem: 'Teams blocked mic/camera or wrong device selected',
          platform: 'Microsoft Teams',
          deviceType: 'mic'
        },
        quickSummary: [
          'Enable microphone and camera in Windows/macOS privacy settings before opening Teams',
          'In Teams Settings → Devices select the correct mic and camera and run the test',
          'Close other apps using the camera or mic, then restart Teams',
          'Use the online tests to verify the devices work outside Teams'
        ],
        why: [
          'Teams depends on system permissions. If Windows or macOS denies access, Teams cannot use the microphone or camera.',
          'Only one app can hold the camera or microphone at a time. Background conferencing tools can block Teams.',
          'Teams may default to virtual devices. Selecting the correct physical mic and camera resolves most failures.',
          'Cached Teams settings or outdated versions can cause unreliable device detection.'
        ],
        steps: [
          'Open system privacy settings and allow Microphone and Camera for desktop apps',
          'Open Teams → Settings → Devices and pick the correct microphone, speaker, and camera',
          'Run “Test call” in Teams to confirm audio and video',
          'Close Zoom, Discord, and browser tabs that may hold the devices',
          'Restart Teams after changing permissions',
          'Update Teams to the latest version',
          'Test with the online microphone and webcam tools to confirm detection',
          'If USB, reconnect devices and reselect them in Teams',
          'Disable virtual cameras if Teams keeps selecting them',
          'Clear Teams cache if devices never appear',
          'Check corporate policies or security tools that might block devices',
          'Reinstall Teams if configuration remains stuck'
        ],
        permissions: [
          'Windows/macOS: enable Microphone and Camera in system privacy settings',
          'Teams: Settings → Devices, pick the correct mic and camera and run a test call',
          'Browser Teams: allow mic and camera via the lock icon if using the web client',
          'Close other apps that may be holding the camera or mic'
        ],
        advanced: [
          'Clear Teams cache and sign back in if devices will not appear',
          'Disable virtual cameras or audio drivers that override selection',
          'Use wired headsets to reduce echo and feedback',
          'Check tenant policies if corporate restrictions block devices',
          'Reinstall Teams if updates do not clear the issue'
        ],
        prevention: [
          'Keep Teams updated and restart it regularly',
          'Check device selection before important calls',
          'Avoid running multiple video apps simultaneously',
          'Prefer wired networking and headsets for stability',
          'Run a quick mic and camera test before joining meetings'
        ],
        faqs: [
          {
            question: 'Why can no one hear me in Teams?',
            answer: 'Teams may be blocked by system permissions or using the wrong mic. Allow Microphone in system settings and select the correct mic in Teams Devices.'
          },
          {
            question: 'Why is my Teams camera black?',
            answer: 'Another app may hold the camera or Teams is blocked. Close other apps, allow camera in system settings, and pick the right camera in Teams Devices.'
          },
          {
            question: 'How do I stop Teams echo?',
            answer: 'Use a headset, reduce speaker volume, and disable audio enhancements. Only one mic should be active.'
          },
          {
            question: 'Why does Teams pick the wrong microphone?',
            answer: 'Teams may default to a virtual or inactive device. Open Devices and choose the correct input manually.'
          },
          {
            question: 'Does Teams web need permissions too?',
            answer: 'Yes. If using Teams in a browser, click the lock icon and allow microphone and camera.'
          },
          {
            question: 'Can I test before a meeting?',
            answer: 'Yes. Use Teams “Test call” and the online mic/webcam tests to confirm everything works.'
          }
        ]
      }}
    />
  )
}

