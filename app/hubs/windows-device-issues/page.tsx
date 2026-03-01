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
        authorityGuideLink: { label: 'How device access works', href: '/guides/how-device-access-works' },
        problemClusters: {
          sectionTitle: 'Common Windows Device Problems',
          intro:
            'Windows device issues usually fall into a few categories: camera not working or not detected, microphone not working or not selected, permission denials after updates, or conflicts (e.g. another app holding the device). Identifying which type you have speeds up the fix.',
          groups: [
            {
              title: 'Windows Camera Not Working',
              paragraphs: [
                'A black screen or "no camera" on Windows typically means the camera is blocked by privacy settings, used by another app, or the wrong device is selected. Settings → Privacy & Security → Camera must allow desktop apps to use the camera.',
                'If the camera works in one app but not another, check the app\'s device selection and close other apps using the camera. For step-by-step fixes, see the'
              ],
              links: [{ href: '/issues/webcam-not-working-windows-11', label: 'webcam not working on Windows 11' }]
            },
            {
              title: 'Windows Microphone Not Working',
              paragraphs: [
                'When the mic is not detected or not working on Windows, it is usually blocked by privacy settings after an update, not selected as the default input, or held by another app. Allow microphone access in Settings → Privacy & Security, then set the correct device in Sound settings.',
                'For detailed steps and troubleshooting, see the'
              ],
              links: [{ href: '/issues/microphone-not-working-windows-11', label: 'microphone not working on Windows 11' }]
            },
            {
              title: 'Windows Permission or Access Problems',
              paragraphs: [
                'If apps cannot see your camera or microphone at all, the block is usually at the OS layer. Windows 10 and 11 require explicit permission for each app; after updates, these can reset.',
                'For how permissions and device access work, see'
              ],
              links: [{ href: '/guides/how-device-access-works', label: 'how device access works' }]
            },
            {
              title: 'Windows Audio or Device Conflicts',
              paragraphs: [
                'Echo, feedback, or devices dropping on Windows are often caused by another app holding the mic or camera, virtual audio devices, or driver issues. Only one app can use the camera or mic at a time.',
                'For conflict and driver fixes, see the'
              ],
              links: [{ href: '/guides/microphone-not-working', label: 'microphone not working (general)' }]
            }
          ]
        },
        howItWorks: {
          title: 'How Windows Accesses Your Devices',
          paragraphs: [
            'Windows controls device access at the OS layer. Settings → Privacy & Security → Microphone and Camera must allow access for desktop (and optionally browser) apps. If that\'s denied, no app can use the devices.',
            'In the browser, each site also needs permission via the lock icon or prompt. In each app (Zoom, Teams, etc.), you then choose which camera and microphone to use. Only one app can use the camera or mic at a time, so another app can block access and cause "not detected" or black video.',
            'Understanding these layers helps when diagnosing: start with Windows privacy permissions, then confirm device selection inside the app. For more on how apps get access, see the guide below.'
          ],
          guideLink: { href: '/guides/how-device-access-works', label: 'How device access works' }
        },
        quickChecklist: {
          title: 'Before Your Next Call on Windows — Quick Checklist',
          items: [
            'Test your camera with an online test',
            'Test your microphone and confirm it\'s selected in Sound settings',
            'Close conflicting apps (video calls, streaming, or camera apps)',
            'Check Settings → Privacy & Security and confirm Microphone and Camera are allowed',
            'Run a full meeting check to verify everything before joining'
          ],
          meetingCheckHref: '/meeting-check'
        },
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

