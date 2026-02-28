import { Metadata } from 'next'
import HubPage from '@/components/HubPage'
import { generateMetadata as genMeta } from '@/lib/seo/metadata'

const title = 'Windows Device Issues — Diagnose & Fix'
const description =
  'Fix microphone, webcam, keyboard, and screen issues on Windows. Step-by-step guides and common problems explained.'
const path = '/hubs/windows-device-issues'

export const metadata: Metadata = genMeta({
  title,
  description,
  path,
  keywords: [
    'windows microphone not working',
    'windows webcam not working',
    'windows keyboard not working',
    'screen flickering windows',
    'windows device troubleshooting'
  ]
})

export default function Page() {
  return (
    <HubPage
      config={{
        title,
        description,
        path,
        hubKey: 'windows',
        primaryCta: { label: 'Run Full Meeting Check', href: '/meeting-check' },
        authorityGuideLink: { label: 'How device access works', href: '/guides/how-to-enable-camera-browser' },
        intro:
          'Resolve Windows 10 and Windows 11 microphone, webcam, keyboard, and screen problems with a single hub. Use this checklist to diagnose permissions, drivers, and hardware quickly before important calls or work.',
        quickAnswer: {
          problem: 'Windows device permissions or drivers blocking input',
          platform: 'Windows 10/11',
          deviceType: 'mic'
        },
        quickSummary: [
          'Check Windows Privacy settings for microphone, camera, and keyboard access',
          'Update audio, camera, graphics, and keyboard drivers in Device Manager',
          'Close other apps locking the device, then restart the computer',
          'Test with the online tools to confirm detection after each change'
        ],
        why: [
          'Windows privacy controls can block device access after updates or policy changes. Permissions must be re-enabled for microphone and camera.',
          'Driver updates or mismatches cause devices to disappear or lag. Outdated audio, camera, graphics, or keyboard drivers frequently create instability.',
          'Single-application locks: only one app can use the camera or microphone at a time. Background apps, conferencing tools, or browser tabs can hold the device and cause failures.',
          'Power and performance settings can throttle USB devices, displays, or input responsiveness, especially on laptops running on battery.'
        ],
        steps: [
          'Open Settings → Privacy & Security → Microphone/Camera and enable access for desktop apps',
          'Open Device Manager and update drivers for audio inputs, cameras, keyboards, and display adapters',
          'Set the correct input/output device in Sound settings and select the right camera in app settings',
          'Close Zoom, Teams, Discord, and browser tabs that may be using the device, then retry',
          'Restart the PC to release device locks and reinitialize drivers',
          'Test the microphone and webcam in the browser using the online tools',
          'For USB devices, move to a different USB port and avoid unpowered hubs',
          'Disable audio enhancements or noise suppression if audio is distorted or clipping',
          'Check graphics settings for display refresh rate and scaling if screens flicker or scale incorrectly',
          'Run the built-in Windows troubleshooters for audio, camera, keyboard, and display',
          'Update Windows to the latest patch level and reboot',
          'If issues persist, test the device on another PC to rule out hardware faults'
        ],
        permissions: [
          'Settings → Privacy & Security → Microphone: enable access and allow desktop apps',
          'Settings → Privacy & Security → Camera: enable access and allow desktop apps',
          'Browser: click the lock icon in the address bar and set Microphone/Camera to Allow',
          'Teams/Zoom/Discord: select the correct device inside app settings after enabling system permissions'
        ],
        advanced: [
          'Reinstall audio and camera drivers from the manufacturer website',
          'Reset Winsock and network settings if conferencing apps fail repeatedly',
          'Disable power-saving for USB Root Hubs in Device Manager',
          'Check Group Policy or security software that may block devices',
          'Create a new Windows user profile to rule out profile-level corruption'
        ],
        prevention: [
          'Keep Windows Update, drivers, and conferencing apps current',
          'Avoid running multiple video apps at once; close them fully after meetings',
          'Use wired connections for webcams and microphones when possible',
          'Avoid aggressive USB power saving on laptops; keep devices on main ports',
          'Run a quick device test before important calls'
        ],
        faqs: [
          {
            question: 'Why does my Windows microphone stop working after updates?',
            answer: 'Updates can reset privacy permissions or replace drivers. Re-enable microphone access in Privacy settings and update audio drivers in Device Manager.'
          },
          {
            question: 'How do I fix a black screen on my Windows webcam?',
            answer: 'Allow camera access in Privacy settings, close apps using the camera, select the correct device in app settings, and update camera drivers.'
          },
          {
            question: 'Why are my Windows keyboard keys delayed?',
            answer: 'Filter keys or outdated drivers can cause delay. Disable keyboard filters, update drivers, and check for background apps consuming CPU.'
          },
          {
            question: 'How do I reduce screen flicker on Windows?',
            answer: 'Update graphics drivers, match refresh rate to your monitor, and disable adaptive brightness. Check cable and port quality for external monitors.'
          },
          {
            question: 'Which tool should I run first for Windows device issues?',
            answer: 'Run the online microphone and webcam tests to confirm detection, then update drivers and recheck permissions.'
          },
          {
            question: 'Can one app block my camera or mic on Windows?',
            answer: 'Yes. Only one app can hold the device. Close conferencing apps, browsers, and background tools, then retest.'
          }
        ]
      }}
    />
  )
}

