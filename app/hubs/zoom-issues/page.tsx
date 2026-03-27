import { Metadata } from 'next'
import Link from 'next/link'
import HubPage from '@/components/HubPage'
import { generateMetadata as genMeta } from '@/lib/seo/metadata'

const title = 'Zoom Device Issues — Diagnose & Fix'
const description =
  'Fix Zoom microphone and webcam issues fast. Step-by-step permissions, device selection, and quick fixes for Zoom audio and video.'
const path = '/hubs/zoom-issues'

const a = 'text-blue-600 hover:text-blue-800'

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
        intro: (
          <>
            <p>
              A single hub for fixing Zoom microphone and webcam problems: unblock devices, pick the right inputs, and stop Zoom from muting or hiding your camera. Run a quick{' '}
              <Link href="/webcam" className={a}>
                webcam test
              </Link>{' '}
              to confirm Zoom is the issue before you change permissions or drivers.
            </p>
            <p>
              Use the{' '}
              <Link href="/mic" className={a}>
                microphone test
              </Link>{' '}
              to check input levels and that the OS sees your mic before you touch Zoom audio settings.
            </p>
          </>
        ),
        instantDiagnosis: {
          sectionTitle: 'Fix Zoom Issues Based on What You See',
          intro: (
            <p className="text-gray-700">
              Match the symptom first—then read the linked guide for the exact fix path. When you are ready to verify everything together, use the{' '}
              <Link href="/meeting-check" className={a}>
                full meeting check
              </Link>
              .
            </p>
          ),
          scenarios: [
            {
              headline: 'Zoom says “No camera found”',
              explanation:
                'Zoom is asking the OS for a camera handle and getting none: either no device is enumerated, the wrong privacy scope is denied, or another process already holds exclusive access.',
              linkHref: '/issues/webcam-not-working-zoom',
              linkLabel: 'Fix webcam not working in Zoom →'
            },
            {
              headline: 'Camera works in Photo or Teams, but not in Zoom',
              explanation:
                'Other apps can prove the hardware works; Zoom may be pointed at a dead virtual camera, blocked under Zoom’s own permission entry, or starved because a different app still owns the capture session.',
              linkHref: '/issues/webcam-not-working-zoom',
              linkLabel: 'Webcam in Zoom: wrong device, lock, or block →'
            },
            {
              headline: 'Microphone “works” (levels move) but callers hear nothing',
              explanation:
                'Input is reaching Zoom’s meter from one path while the meeting is using another input, or Zoom is sending silence due to routing, exclusive mode, or a muted chain you cannot see in the pre-join screen.',
              linkHref: '/issues/microphone-not-working-zoom',
              linkLabel: 'Microphone not working in Zoom →'
            },
            {
              headline: 'Others can’t hear you at all',
              explanation:
                'Usually the OS or Zoom is using the wrong mic, the input is muted at system level, or Zoom never received capture permission for the active profile.',
              linkHref: '/issues/microphone-not-working-zoom',
              linkLabel: 'Zoom mic selection and mute chain →'
            },
            {
              headline: 'Echo, doubling, or squealing feedback',
              explanation:
                'Your mic is picking up your own speakers or a monitor path; Bluetooth hands-free profiles and “listen to this device” loops make this worse.',
              linkHref: '/issues/zoom-audio-delay-microphone',
              linkLabel: 'Zoom delay, echo, and feedback fixes →'
            },
            {
              headline: 'Zoom keeps picking the wrong microphone',
              explanation:
                'Windows and macOS default devices change when you plug USB or switch Bluetooth modes; Zoom caches a name that no longer matches the live device list.',
              linkHref: '/issues/microphone-not-working-zoom',
              linkLabel: 'Stabilize Zoom mic selection →'
            },
            {
              headline: 'Fine in the browser, broken in the Zoom desktop app',
              explanation:
                'Browser Zoom and the desktop app do not share the same permission record or capture stack; one can be allowed while the other is still denied or pointed at a different device.',
              linkHref: '/issues/webcam-not-working-zoom',
              linkLabel: 'Desktop vs web Zoom device path →'
            },
            {
              headline: 'USB mic never appears in Zoom’s list',
              explanation:
                'If the OS does not expose the device to user-mode apps, Zoom cannot list it—this is enumeration and power, not a Zoom setting.',
              linkHref: '/issues/microphone-not-detected-usb',
              linkLabel: 'USB microphone not detected →'
            }
          ]
        },
        problemClusters: {
          sectionTitle: 'Common Zoom Device Problems',
          intro:
            'Use the clusters below to orient by device type. They complement the symptom triage above: triage matches what you see; clusters organize fixes by camera, mic, permissions, and audio quality.',
          groups: [
            {
              title: 'Zoom Camera Not Working',
              paragraphs: [
                'Black video or “no camera” is rarely a single switch. Zoom must see an enumerated device, get OS consent for the Zoom binary (not only the browser), and win access if another app holds the camera open.',
                'If hardware works elsewhere, the next step is Zoom’s Video device list and OS privacy entries for Zoom specifically. Walk through'
              ],
              links: [{ href: '/issues/webcam-not-working-zoom', label: 'webcam not working in Zoom' }]
            },
            {
              title: 'Zoom Microphone Not Working',
              paragraphs: [
                'When remote participants hear silence, assume a chain: system default input → Zoom’s selected input → Zoom’s mute and level state. Bluetooth headsets often expose two profiles; Zoom may bind to the wrong one.',
                'For input selection, exclusive mode, and profile mismatches, use'
              ],
              links: [{ href: '/issues/microphone-not-working-zoom', label: 'microphone not working in Zoom' }]
            },
            {
              title: 'Zoom Permission or Access Problems',
              paragraphs: [
                '“Not detected” at the Zoom UI can still mean allowed at the browser but denied for the desktop app, or allowed for an old Zoom path after an update reinstalled the binary.',
                'Browser-only joins need site permissions and sometimes Chrome’s camera stack; for Chrome-specific detection failures see'
              ],
              links: [{ href: '/issues/webcam-not-detected-chrome', label: 'webcam not detected in Chrome' }]
            },
            {
              title: 'Zoom Audio or Device Conflicts',
              paragraphs: [
                'Delay and garbled audio are often buffer and routing issues: VPNs, virtual cables, and aggressive noise suppression fight Zoom’s own processing.',
                'For lag and feedback tied to mic and speaker routing, see'
              ],
              links: [{ href: '/issues/zoom-audio-delay-microphone', label: 'Zoom microphone delay, echo, and lag' }]
            }
          ]
        },
        whyZoomFails: {
          sectionTitle: 'Why Zoom Camera and Microphone Issues Happen',
          blocks: [
            {
              title: 'Device selection layer',
              paragraphs: [
                'Zoom does not “auto-know” your best mic or camera; it binds to whatever the OS reports at launch and what you last picked in Settings. Renamed devices, dock/undock, and Bluetooth mode switches invalidate that binding without a visible error.',
                <>
                  When the wrong device is selected, fixes are about re-enumeration and explicit choice, not generic “updates.” Start with{' '}
                  <Link href="/issues/microphone-not-working-zoom" className={a}>
                    microphone not working in Zoom
                  </Link>{' '}
                  for input and output selection.
                </>
              ]
            },
            {
              title: 'OS permission layer',
              paragraphs: [
                'Windows and macOS gate capture per executable and per profile. Deny once, or allow an old Zoom path, and the current app gets a hard no while other software still works.',
                'That is why the same webcam works in a browser tab but fails in the installed Zoom client: two different apps, two permission decisions.'
              ]
            },
            {
              title: 'App conflict layer',
              paragraphs: [
                'Many cameras and mics allow only one exclusive reader at a time. Teams, OBS, browser tabs with live preview, and even the OS camera privacy screen can hold the device open so Zoom sees “in use” or an empty list.',
                <>
                  If video is dead only inside Zoom, treat lock and selection first in{' '}
                  <Link href="/issues/webcam-not-working-zoom" className={a}>
                    webcam not working in Zoom
                  </Link>
                  .
                </>
              ]
            },
            {
              title: 'Browser vs desktop',
              paragraphs: [
                'Web Zoom uses the browser’s media pipeline and site permission prompt. Desktop Zoom uses native capture APIs and its own entries in system privacy panels. Passing one test does not prove the other path is allowed or pointed at the same hardware.'
              ]
            }
          ]
        },
        zoomVsOther: {
          sectionTitle: 'Why Your Camera or Mic Works Outside Zoom',
          paragraphs: [
            'Chrome can show a preview because the tab holds a valid getUserMedia grant and a device ID that still resolves. The Zoom app asks macOS or Windows separately; if Zoom is not toggled on in system privacy, Chrome’s green light means nothing for the client.',
            <>
              Chrome-specific “camera not detected” errors are usually site settings or the browser’s device list, not Zoom’s. Use{' '}
              <Link href="/issues/webcam-not-detected-chrome" className={a}>
                webcam not detected in Chrome
              </Link>{' '}
              when the failure is limited to the browser path.
            </>,
            'Teams and Google Meet use the same OS services but maintain their own default devices and background processes. A Teams helper left running can keep the mic in a low-bandwidth mode or hold the camera until you fully quit the app.',
            'Device locking is implicit: opening a capture stream in one app often blocks a second open on the same endpoint. OBS “Start Virtual Camera” or another meeting tab can satisfy your test in one place while Zoom gets a black tile.',
            <>
              If the hardware is USB and never appears in any app’s list, skip Zoom settings and troubleshoot enumeration:{' '}
              <Link href="/issues/microphone-not-detected-usb" className={a}>
                USB microphone not detected
              </Link>
              .
            </>
          ]
        },
        beforeSettingsChange: {
          sectionTitle: 'Before You Change Any Settings',
          items: [
            'Quit other video or meeting apps and any tool that might preview the camera (including browser tabs with live video).',
            'Fully restart Zoom after plug/unplug or Bluetooth reconnect so it rescans devices.',
            'In Zoom Settings → Audio and Video, manually pick the physical mic and camera—not a “default” you have not verified.',
            'Confirm the OS input meter moves when you speak; if it does not, Zoom cannot fix it in-app.',
            'Compare desktop vs web Zoom once: same account, same machine, narrows permission vs pipeline issues.'
          ],
          meetingCheckHref: '/meeting-check'
        },
        howItWorks: {
          title: 'How Zoom Accesses Your Camera & Microphone',
          paragraphs: [
            'Think in order: hardware enumerated → OS permission for the exact Zoom binary → Zoom’s own device pick → meeting join state (mute, waiting room, audio device mode). Skipping a layer is why generic advice fails.',
            'Browser Zoom adds site permission and whatever audio device the browser is using (which may differ from system default). Desktop Zoom follows app privacy lists and can use different drivers for Bluetooth.',
            'When diagnosis stalls, map which layer passed: our tools and the guides below isolate whether the break is above or below Zoom.'
          ],
          guideLink: { href: '/guides/how-device-access-works', label: 'How device access works' }
        },
        quickChecklist: {
          title: 'Before Your Next Zoom Call — Quick Checklist',
          items: [
            'Run the webcam and mic tests if anything changed since last call (drivers, dock, headset).',
            'In Zoom, confirm speaker, microphone, and camera in Settings—not only the pre-join dropdown.',
            'Close background capture apps and restart Zoom once.',
            'Use wired headphones if others report echo.',
            'Run a full meeting check right before an important join.'
          ],
          meetingCheckHref: '/meeting-check'
        },
        quickAnswer: {
          problem: 'Zoom blocked mic/camera or wrong device selected',
          platform: 'Zoom',
          deviceType: 'mic'
        },
        quickSummary: [
          'Triage by symptom first, then confirm the OS still exposes your devices.',
          'Separate browser Zoom from desktop Zoom when debugging permissions.',
          'Prefer explicit device choice over “default” after hardware changes.',
          <>
            Camera path:{' '}
            <Link href="/issues/webcam-not-working-zoom" className={a}>
              webcam not working in Zoom
            </Link>
            .
          </>,
          <>
            Mic path:{' '}
            <Link href="/issues/microphone-not-working-zoom" className={a}>
              microphone not working in Zoom
            </Link>
            .
          </>,
          <>
            Echo or delay:{' '}
            <Link href="/issues/zoom-audio-delay-microphone" className={a}>
              Zoom audio delay and microphone
            </Link>
            .
          </>
        ],
        why: [
          'Zoom only sees devices the OS hands it; denial or stale permission entries surface as empty lists, not helpful errors.',
          'Exclusive capture means one owner at a time—virtual cameras and other meetings count.',
          'Bluetooth and USB re-enumeration change device IDs; Zoom may keep a label that no longer maps to a live endpoint.',
          'Browser and desktop success diverge because they are different apps in privacy panels.'
        ],
        steps: [
          'Match your symptom to the triage section, then open the linked issue guide.',
          'Confirm OS privacy allows Zoom (desktop) or the browser (web) for mic and camera.',
          'Quit apps that might hold the camera or mic; restart Zoom.',
          'Zoom → Settings → Audio: pick microphone and speaker; test without Bluetooth phone mode if possible.',
          'Zoom → Settings → Video: pick the physical camera; disable unnecessary virtual inputs.',
          'If using USB audio or video, reconnect and reselect after the OS remounts the device.',
          'For echo or delay, use wired headphones and review Zoom audio processing options.',
          'Compare web vs desktop Zoom once to isolate permission scope.',
          'Update Zoom after large OS upgrades; re-check privacy toggles if the app path changed.',
          'Reinstall Zoom only when settings and permissions are correct but devices still never appear.'
        ],
        permissions: [
          'Desktop Zoom: enable Microphone and Camera for Zoom in Windows Settings / macOS Privacy.',
          'Web Zoom: allow the site in the browser lock icon; conflicts with Chrome are covered in the Chrome issue guide.',
          'Zoom Settings → Audio/Video: set devices explicitly after OS or hardware changes.',
          'If the device is missing everywhere, troubleshoot USB or Chrome detection before Zoom-specific steps.'
        ],
        advanced: [
          'Reset Zoom app data only after documenting your account and meeting settings.',
          'Disable aggressive VPN split-tunneling during AV tests.',
          'Try a wired network path when video encodes but audio stutters.',
          'Create a clean OS user profile to rule out broken privacy databases.',
          'Remove virtual audio/video tools temporarily to see if enumeration normalizes.'
        ],
        prevention: [
          'After headset or dock changes, reopen Zoom and reconfirm devices.',
          'End other meetings and close camera preview tabs before important Zoom joins.',
          'Keep one known-good wired headset for high-stakes calls.',
          'Run meeting check before presentations or interviews.'
        ],
        faqs: [
          {
            question: 'Why can no one hear me in Zoom?',
            answer:
              'Usually the wrong input, system-level mute, or OS denial. Confirm the OS meter moves, then Zoom’s selected mic and mute state.'
          },
          {
            question: 'Why is my Zoom camera black?',
            answer:
              'Often another app holds the camera, Zoom is blocked in OS privacy, or Zoom is set to a virtual or disconnected device.'
          },
          {
            question: 'How do I stop Zoom audio delay?',
            answer:
              'Reduce competing audio software, use wired headphones, and check network load. See the delay and echo guide for routing detail.'
          },
          {
            question: 'Why does Zoom pick the wrong microphone?',
            answer:
              'Defaults change when hardware changes; Zoom may cache an old device name. Pick the mic manually and restart Zoom after reconnecting USB or Bluetooth.'
          },
          {
            question: 'Should I use the Zoom web client or app?',
            answer:
              'The desktop app is easier for stable device control. Web is fine when browser permissions are clean—treat them as separate apps for troubleshooting.'
          },
          {
            question: 'Can I test before joining?',
            answer:
              'Yes. Use the site webcam and mic tests, then Zoom’s test meeting or the full meeting check.'
          }
        ]
      }}
    />
  )
}
