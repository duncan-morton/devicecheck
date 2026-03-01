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
        authorityGuideLink: { label: 'How device access works', href: '/guides/how-device-access-works' },
        problemClusters: {
          sectionTitle: 'Common Chrome Permission Problems',
          intro:
            'Chrome device issues usually fall into a few categories: camera not working or blocked, microphone not working or blocked, site permission denials, or conflicts (e.g. another tab or app holding the device). Identifying which type you have speeds up the fix.',
          groups: [
            {
              title: 'Chrome Camera Not Working or Blocked',
              paragraphs: [
                'A black screen or "camera blocked" in Chrome typically means the site does not have permission, another tab is using the camera, or the wrong device is selected. Click the lock icon in the address bar and set Camera to Allow; close other tabs using the camera.',
                'If the camera works on other sites but not this one, reset the site permission and re-allow. For step-by-step fixes, see the'
              ],
              links: [{ href: '/issues/webcam-not-detected-chrome', label: 'webcam not detected in Chrome' }]
            },
            {
              title: 'Chrome Microphone Not Working or Blocked',
              paragraphs: [
                'When the mic is not detected or blocked in Chrome, the site usually does not have permission or another tab is using the microphone. Click the lock icon and set Microphone to Allow; select the correct input in site settings.',
                'For detailed steps and troubleshooting, see the'
              ],
              links: [{ href: '/issues/chrome-microphone-permission-blocked', label: 'Chrome microphone permission blocked' }]
            },
            {
              title: 'Chrome Permission or Access Problems',
              paragraphs: [
                'If a site cannot see your camera or microphone at all, the block is at the browser (site permission) or OS layer. Chrome stores per-site decisions; Windows or macOS must also allow Chrome to use the devices.',
                'For how permissions and device access work, see'
              ],
              links: [{ href: '/guides/how-device-access-works', label: 'how device access works' }]
            },
            {
              title: 'Chrome Audio or Device Conflicts',
              paragraphs: [
                'Wrong device, echo, or "device in use" in Chrome are often caused by another tab or app holding the mic or camera, or a virtual device being selected. Only one tab or app can use the camera or mic at a time.',
                'For conflict and permission fixes, see'
              ],
              links: [{ href: '/guides/how-to-enable-microphone-chrome', label: 'how to enable microphone in Chrome' }]
            }
          ]
        },
        howItWorks: {
          title: 'How Chrome Accesses Your Camera & Microphone',
          paragraphs: [
            'Chrome needs permission at two layers. First, the OS (Windows or macOS) must allow Chrome to use the microphone and camera. Second, each site needs permission—via the lock icon or prompt—to use the devices.',
            'When you allow a site, Chrome stores that decision. You can then choose which camera and microphone to use in site settings when multiple devices exist. Only one tab or app can use the camera or mic at a time, so another tab or conferencing app can block access and cause "not detected" or black video.',
            'Understanding these layers helps when diagnosing: start with OS permissions, then Chrome site permissions, then device selection. For more on how apps get access, see the guide below.'
          ],
          guideLink: { href: '/guides/how-device-access-works', label: 'How device access works' }
        },
        quickChecklist: {
          title: 'Before Your Next Chrome Call — Quick Checklist',
          items: [
            'Test your camera with an online test',
            'Test your microphone and confirm it\'s selected in Chrome site settings',
            'Close other tabs or apps using the camera or mic',
            'Check the lock icon for the call site and confirm Microphone and Camera are allowed',
            'Run a full meeting check to verify everything before joining'
          ],
          meetingCheckHref: '/meeting-check'
        },
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

