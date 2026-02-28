import { Metadata } from 'next'
import HubPage from '@/components/HubPage'
import { generateMetadata as genMeta } from '@/lib/seo/metadata'

const title = 'Chrome & Browser Permission Issues — Diagnose & Fix'
const description =
  'Fix microphone and webcam permission problems in Chrome. Step-by-step guide to unblock camera and mic for calls.'
const path = '/hubs/chrome-permissions-issues'

export const metadata: Metadata = genMeta({
  title,
  description,
  path,
  keywords: [
    'chrome microphone blocked',
    'chrome camera blocked',
    'chrome allow microphone',
    'chrome allow camera',
    'chrome permissions fix'
  ]
})

export default function Page() {
  return (
    <HubPage
      config={{
        title,
        description,
        path,
        hubKey: 'chrome',
        primaryCta: { label: 'Run Full Meeting Check', href: '/meeting-check' },
        authorityGuideLink: { label: 'How device access works', href: '/guides/how-to-enable-camera-browser' },
        intro:
          'Fix Chrome microphone and camera permission problems fast. This hub shows how to unblock devices, pick the right input, and stop Chrome from denying access during calls.',
        quickAnswer: {
          problem: 'Chrome blocking microphone or camera permissions',
          platform: 'Chrome',
          deviceType: 'mic'
        },
        quickSummary: [
          'Click the lock icon in Chrome and set Microphone and Camera to Allow',
          'Select the correct input device in Chrome site settings',
          'Close other tabs and apps using the camera or mic',
          'Restart Chrome after changing permissions and test again'
        ],
        why: [
          'Chrome blocks camera and microphone by default until you allow each site. Cached decisions or old permissions often block new calls.',
          'Multiple tabs or apps can hold the camera or microphone, causing Chrome to report the device as busy.',
          'Wrong device selection: Chrome may default to a virtual or inactive device. Selecting the correct input fixes most cases.',
          'Browser cache or outdated versions can mis-handle permissions. A refresh or update often clears stale states.'
        ],
        steps: [
          'Open the address bar lock icon → Site settings → Allow Microphone and Camera',
          'Choose the correct microphone and camera in Chrome site permissions',
          'Close all other tabs using the camera or mic, then reload the call tab',
          'Restart Chrome to release device locks',
          'Update Chrome to the latest version',
          'In Windows or macOS, enable Microphone and Camera permissions in system privacy settings',
          'Disable conflicting extensions that may block audio/video',
          'Test with the online microphone and webcam tools to confirm detection',
          'If using USB devices, reconnect them and reselect in Chrome permissions',
          'If issues persist, clear site permissions (chrome://settings/content) and re-allow'
        ],
        permissions: [
          'Chrome: lock icon → Site settings → Allow Microphone and Camera',
          'Chrome: pick the correct device under site permissions when multiple inputs exist',
          'Windows/macOS: enable Microphone and Camera in system privacy settings',
          'Close other tabs or apps holding the device before retrying'
        ],
        advanced: [
          'Clear Chrome site permissions and re-allow devices',
          'Disable virtual cameras or audio devices if they hijack selection',
          'Test in a new Chrome profile to rule out profile corruption',
          'Check enterprise or security software that may block media devices',
          'Reinstall or repair Chrome if permissions remain stuck'
        ],
        prevention: [
          'Keep Chrome updated',
          'Review site permissions periodically and remove unused blocks',
          'Avoid running multiple conferencing tabs at the same time',
          'Choose physical devices instead of virtual sources when possible',
          'Run a quick test before important calls'
        ],
        faqs: [
          {
            question: 'How do I allow the microphone in Chrome?',
            answer: 'Click the lock icon, open Site settings, and set Microphone to Allow. Select the correct microphone if more than one appears.'
          },
          {
            question: 'Why does Chrome say my camera is blocked?',
            answer: 'Chrome may have a prior block decision or another app is holding the camera. Allow camera in Site settings, close other apps, and restart Chrome.'
          },
          {
            question: 'Why is Chrome using the wrong microphone?',
            answer: 'Chrome may default to another input. Open Site settings and pick the correct device from the dropdown.'
          },
          {
            question: 'Do I need system permissions too?',
            answer: 'Yes. Ensure Windows or macOS privacy settings allow Chrome to use microphone and camera.'
          },
          {
            question: 'Can extensions block my camera or mic?',
            answer: 'Yes. Disable extensions that alter audio/video or privacy, then retest.'
          },
          {
            question: 'What if nothing changes after I allow permissions?',
            answer: 'Restart Chrome, clear site permissions, update Chrome, and re-allow. Then test with the online tools.'
          }
        ]
      }}
    />
  )
}

