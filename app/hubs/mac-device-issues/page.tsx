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
        authorityGuideLink: { label: 'How device access works', href: '/guides/how-device-access-works' },
        problemClusters: {
          sectionTitle: 'Common Mac Device Problems',
          intro:
            'macOS device issues usually fall into a few categories: camera not working or not detected, microphone not working or not selected, permission denials after updates, or conflicts (e.g. another app holding the device). Identifying which type you have speeds up the fix.',
          groups: [
            {
              title: 'Mac Camera Not Working',
              paragraphs: [
                'A black screen or "no camera" on Mac typically means the camera is blocked by privacy settings, used by another app, or the wrong device is selected. System Settings → Privacy & Security → Camera must allow the app to use the camera.',
                'If the camera works in one app but not another, check the app\'s device selection and close other apps using the camera. For step-by-step fixes, see the'
              ],
              links: [{ href: '/issues/webcam-not-working-mac', label: 'webcam not working on Mac' }]
            },
            {
              title: 'Mac Microphone Not Working',
              paragraphs: [
                'When the mic is not detected or not working on Mac, it is usually blocked by privacy settings, not selected as the input in Sound settings, or held by another app. Allow microphone access in System Settings → Privacy & Security, then set the correct device in Sound.',
                'For detailed steps and troubleshooting, see the'
              ],
              links: [{ href: '/issues/microphone-not-working-mac', label: 'microphone not working on Mac' }]
            },
            {
              title: 'Mac Permission or Access Problems',
              paragraphs: [
                'If apps cannot see your camera or microphone at all, the block is usually at the OS layer. macOS requires explicit permission for each app; after updates, these can reset.',
                'For how permissions and device access work, see'
              ],
              links: [{ href: '/guides/how-device-access-works', label: 'how device access works' }]
            },
            {
              title: 'Mac Audio or Device Conflicts',
              paragraphs: [
                'Echo, feedback, or devices dropping on Mac are often caused by another app holding the mic or camera, or audio routing issues. Only one app can use the camera or mic at a time.',
                'For conflict and permission fixes, see the'
              ],
              links: [{ href: '/guides/mac-microphone-not-working', label: 'Mac microphone not working' }]
            }
          ]
        },
        howItWorks: {
          title: 'How macOS Accesses Your Devices',
          paragraphs: [
            'macOS controls device access at the OS layer. System Settings → Privacy & Security → Microphone and Camera must allow access for each app. If that\'s denied, the app cannot use the devices.',
            'In the browser, each site also needs permission via the lock icon or prompt. In each app (Zoom, Teams, etc.), you then choose which camera and microphone to use. Only one app can use the camera or mic at a time, so another app can block access and cause "not detected" or black video.',
            'Understanding these layers helps when diagnosing: start with macOS privacy permissions, then confirm device selection inside the app. For more on how apps get access, see the guide below.'
          ],
          guideLink: { href: '/guides/how-device-access-works', label: 'How device access works' }
        },
        quickChecklist: {
          title: 'Before Your Next Call on Mac — Quick Checklist',
          items: [
            'Test your camera with an online test',
            'Test your microphone and confirm it\'s selected in Sound settings',
            'Close conflicting apps (video calls, streaming, or camera apps)',
            'Check System Settings → Privacy & Security and confirm Microphone and Camera are allowed',
            'Run a full meeting check to verify everything before joining'
          ],
          meetingCheckHref: '/meeting-check'
        },
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

