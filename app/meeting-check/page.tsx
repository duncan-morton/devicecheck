import { Metadata } from 'next'
import { generateMetadata as genMeta } from '@/lib/seo/metadata'
import JsonLdScript from '@/components/JsonLdScript'
import { generateWebApplicationSchema, generateBreadcrumbListSchema, generateFAQPageSchema, generateHowToSchema } from '@/lib/seo/jsonLd'
import { getTranslation, type Locale } from '@/i18n/getTranslation'
import { localizePathIfSupported } from '@/lib/i18n/routeLocaleSupport'
import MeetingCheckTool from '@/components/MeetingCheckTool'
import Breadcrumbs from '@/components/Breadcrumbs'
import RelatedTools from '@/components/RelatedTools'
import FixByPlatformSection from '@/components/FixByPlatformSection'
import Link from 'next/link'
import StepsBlock from '@/components/StepsBlock'

export const revalidate = 86400 // ISR: Revalidate every 24 hours

const locale: Locale = 'en'
const t = getTranslation(locale)

export const metadata: Metadata = genMeta({
  title: t.meeting_check_title,
  description: 'Test your network, camera, and microphone before video calls. Check ping, jitter, and device connectivity with our free meeting check tool for Zoom, Teams, and Google Meet.',
  path: '/meeting-check',
  locale: 'en',
  keywords: [
    'meeting check',
    'device check',
    'video call test',
    'zoom test',
    'teams test',
    'meeting setup test',
    'video call preparation',
    'connectivity test'
  ]
})

const faqs = [
  {
    question: 'What does the meeting check test?',
    answer: 'Our meeting check tests your network connectivity (ping and jitter), camera access, and microphone access. This ensures everything is working before joining important video calls.'
  },
  {
    question: 'What is a good ping for video calls?',
    answer: 'For video calls, ping under 100ms is excellent, 100-150ms is good, 150-200ms is acceptable, and over 200ms may cause noticeable lag. Lower ping means less delay in your video call.'
  },
  {
    question: 'What is jitter and why does it matter?',
    answer: 'Jitter measures variation in ping times. High jitter causes choppy video and audio. Jitter under 30ms is excellent, 30-50ms is good, and over 50ms may cause quality issues in video calls.'
  },
  {
    question: 'How do I improve my connection for video calls?',
    answer: 'Use a wired Ethernet connection instead of WiFi, close bandwidth-heavy applications, ensure you\'re close to your router, and consider upgrading your internet plan if speeds are consistently low.'
  },
  {
    question: 'Will this test work for Zoom, Teams, and Google Meet?',
    answer: 'Yes! If our meeting check passes, your setup will work with Zoom, Microsoft Teams, Google Meet, and other video conferencing platforms. We test the same requirements these platforms need.'
  },
  {
    question: 'Why did my camera or microphone test fail?',
    answer: 'Usually the browser or OS has blocked access. Allow camera and microphone for this site and for your browser in system Privacy settings. Close other apps using the camera or mic, then run the check again.'
  },
  {
    question: 'Do I need to install anything for the meeting check?',
    answer: 'No. The check runs in your browser. You only need to allow camera and microphone when prompted. No app download or account required.'
  },
  {
    question: 'Tests pass here but my app still has no camera or mic. Why?',
    answer: 'The meeting app may be using a different device. In Zoom, Teams, or Meet, open Settings → Video and Audio and select the same camera and microphone that passed in this check.'
  }
]

const steps = [
  {
    title: 'Test network first',
    description: 'Click Test Network to measure ping and jitter. Aim for ping <150ms and low jitter.'
  },
  {
    title: 'Allow camera and mic',
    description: 'Use the browser lock icon and system privacy settings to allow camera and microphone.'
  },
  {
    title: 'Select correct devices',
    description: 'In your OS and conferencing app, pick the correct microphone and camera, then retest.'
  },
  {
    title: 'Close other video apps',
    description: 'Quit Zoom, Teams, Discord, or tabs holding the camera or mic before retesting.'
  },
  {
    title: 'Update drivers and restart',
    description: 'Update audio/camera drivers (Windows) or keep macOS updated; restart to clear locks.'
  },
  {
    title: 'Retest before joining',
    description: 'Re-run meeting check to confirm all tests show Pass before your call.'
  }
]

const howToSchema = generateHowToSchema({
  url: 'https://devicecheck.io/meeting-check',
  name: 'How to run a meeting check for calls',
  description: 'Step-by-step instructions to test network, camera, and microphone before video calls.',
  steps
})

export default function MeetingCheckPage() {
  const locale: Locale = 'en'
  const t = getTranslation(locale)
  
  const webAppSchema = generateWebApplicationSchema(
    t.meeting_check_title,
    'Test your network, camera, and microphone before video calls.',
    '/meeting-check',
    locale
  )

  const breadcrumbs = generateBreadcrumbListSchema([
    { name: t.breadcrumb_home, path: '/' },
    { name: t.meeting_check, path: '/meeting-check' }
  ], locale)

  const faqSchema = generateFAQPageSchema(faqs, locale)

  return (
    <>
      <JsonLdScript data={howToSchema} />
      <JsonLdScript data={webAppSchema} />
      <JsonLdScript data={breadcrumbs} />
      <JsonLdScript data={faqSchema} />
      
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8 max-w-6xl">
          <Breadcrumbs items={[{ name: t.meeting_check, path: '/meeting-check' }]} locale={locale} />
          
          <Link 
            href={localizePathIfSupported('/', locale)}
            className="inline-block text-sm text-slate-500 hover:text-slate-900 mb-4 transition-colors"
          >
            ← All tools
          </Link>
          
          <div className="mb-4">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              {(t as Record<string, string>).meeting_check_problem_h1 || t.meeting_check_title}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl">
              Test your network connectivity, camera, and microphone before important video calls. Ensure everything works for Zoom, Teams, Google Meet, and other platforms.
            </p>
          </div>

          <div className="mb-6">
            <Link 
              href="#test"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Run Full Meeting Check
            </Link>
          </div>

          <div id="test" className="scroll-mt-8 mb-8">
            <MeetingCheckTool />
          </div>

          <RelatedTools currentPath="/meeting-check" locale={locale} />

          <FixByPlatformSection locale={locale} />

          <div className="mb-8 rounded-xl border border-gray-200 bg-white p-4 md:p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-2">Quick checks</h2>
            <StepsBlock steps={steps} />
          </div>

          {/* Authority: when to run, what it tests, common problems, permissions (match /mic structure) */}
          <article className="prose prose-slate max-w-none bg-white p-8 md:p-12 rounded-2xl border border-gray-200 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">When Should You Run a Meeting Check?</h2>
            <h4 className="text-lg font-semibold text-gray-900 mt-4 mb-2">Before important Zoom, Teams, or Meet calls</h4>
            <p className="text-gray-700 mb-3">
              A quick run a few minutes before the call catches permission, device, or network issues while you still have time to fix them. If all tests pass here, your setup will work in the meeting app.
            </p>
            <h4 className="text-lg font-semibold text-gray-900 mt-4 mb-2">After changing devices or permissions</h4>
            <p className="text-gray-700 mb-3">
              New headset, different camera, or a fresh OS/browser permission reset can break video or audio. Run the check after any change to confirm camera and mic are detected and network is stable.
            </p>
            <h4 className="text-lg font-semibold text-gray-900 mt-4 mb-2">When you had “no camera” or “no mic” last time</h4>
            <p className="text-gray-700 mb-3">
              If a previous call failed with device issues, run this check first. It tests the same layers (network, camera, microphone) that Zoom, Teams, and Meet use. Fix any failing step before joining again.
            </p>
            <h4 className="text-lg font-semibold text-gray-900 mt-4 mb-2">Before your first call on a new platform</h4>
            <p className="text-gray-700 mb-6">
              First time on Zoom, Teams, or Meet? Run the meeting check so you grant browser and OS permissions once and confirm devices work before others are waiting.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What This Meeting Check Tests</h2>
            <p className="text-gray-700 mb-2"><strong>Network:</strong> Ping and jitter to gauge latency and stability. High values can cause lag or choppy audio in calls.</p>
            <p className="text-gray-700 mb-2"><strong>Camera access:</strong> Whether the browser can get a video stream from your camera. Same permission and device stack that meeting apps use.</p>
            <p className="text-gray-700 mb-2"><strong>Microphone access:</strong> Whether the browser can get an audio stream from your mic. Confirms permissions and device selection.</p>
            <p className="text-gray-700 mb-2"><strong>Pass/fail summary:</strong> A single view of what’s working so you can fix only what failed.</p>
            <p className="text-gray-700 mb-6"><strong>No account or install:</strong> Runs in the browser; no app or login required. Uses the same device access as web-based meeting clients.</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Common Problems This Check Helps Diagnose</h2>
            <p className="text-gray-700 mb-2">
              <strong>Camera test fails:</strong> Usually browser or OS has blocked the camera, or another app is using it. Allow camera for this site and for your browser in system Privacy; close other video apps. More: <Link href={localizePathIfSupported('/issues/webcam-not-working-zoom', locale)} className="text-blue-600 hover:text-blue-800">webcam not working in Zoom</Link> (same fix for other apps).
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Microphone test fails:</strong> Often permissions or wrong device. Allow mic for this site and in OS settings; pick the correct input in system sound. See <Link href={localizePathIfSupported('/issues/microphone-not-working-zoom', locale)} className="text-blue-600 hover:text-blue-800">microphone not working in Zoom</Link> for steps.
            </p>
            <p className="text-gray-700 mb-2">
              <strong>High ping or jitter:</strong> Network congestion, WiFi, or bandwidth-heavy apps. Use wired Ethernet if possible, close streaming/downloads, and retest. If it stays high, check your connection or ISP.
            </p>
            <p className="text-gray-700 mb-6">
              <strong>Tests pass here but fail in the app:</strong> The app may be using a different camera or mic. In Zoom, Teams, or Meet, open Settings → Video/Audio and select the same devices that passed in this check.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Meeting Check and Device Permissions</h2>
            <p className="text-gray-700 mb-6">
              Camera and microphone tests use the same OS → browser → app layers as video calls. If the check fails for camera or mic, fix permissions at the browser and system level. For how those layers work and why devices fail even when they work elsewhere, see <Link href={localizePathIfSupported('/guides/how-device-access-works', locale)} className="text-blue-600 hover:text-blue-800">how device access works</Link>.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How this diagnostic works &amp; why problems happen</h2>
            <h3 className="text-xl font-bold text-gray-900 mt-4 mb-3">How to Check Your Setup Before Video Calls</h3>
            
            <p className="text-lg text-gray-700 mb-6">
              Testing your setup before important video calls prevents embarrassing technical issues and ensures smooth communication. Our <strong>free meeting check tool</strong> tests your network connectivity, camera access, and microphone functionality—everything you need for successful video calls on Zoom, Microsoft Teams, Google Meet, and other platforms.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Why Test Before Video Calls?</h3>
            <p className="text-gray-700 mb-4">
              Pre-call testing helps you:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Avoid connection issues during important meetings</li>
              <li>Ensure camera and microphone work correctly</li>
              <li>Identify network problems before they disrupt calls</li>
              <li>Fix permission issues in advance</li>
              <li>Verify audio and video quality</li>
              <li>Gain confidence before important presentations</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Understanding Network Metrics</h3>

            <h4 className="text-xl font-bold text-gray-900 mt-6 mb-3">Ping (Latency)</h4>
            <p className="text-gray-700 mb-4">
              Ping measures the time it takes for data to travel from your device to a server and back. Lower ping means less delay:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>&lt; 100ms:</strong> Excellent - Smooth video calls with minimal delay</li>
              <li><strong>100-150ms:</strong> Good - Acceptable for most video calls</li>
              <li><strong>150-200ms:</strong> Acceptable - May notice slight delay</li>
              <li><strong>&gt; 200ms:</strong> Poor - May cause noticeable lag and quality issues</li>
            </ul>

            <h4 className="text-xl font-bold text-gray-900 mt-6 mb-3">Jitter</h4>
            <p className="text-gray-700 mb-4">
              Jitter measures variation in ping times. Consistent ping is better than variable ping:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>&lt; 30ms:</strong> Excellent - Very stable connection</li>
              <li><strong>30-50ms:</strong> Good - Stable enough for video calls</li>
              <li><strong>50-100ms:</strong> Acceptable - May cause occasional choppiness</li>
              <li><strong>&gt; 100ms:</strong> Poor - Likely to cause choppy video and audio</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Step-by-Step Meeting Check Guide</h3>
            <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-6">
              <li>
                <strong>Test Network:</strong> Click "Test Network" to check your ping and jitter. Wait for the test to complete (takes about 5 seconds).
              </li>
              <li>
                <strong>Test Camera:</strong> Click "Test Camera" to verify camera access. Grant permissions if prompted. The test confirms your camera works.
              </li>
              <li>
                <strong>Test Microphone:</strong> Click "Test Microphone" to verify mic access. Grant permissions if prompted. The test confirms your microphone works.
              </li>
              <li>
                <strong>Review Results:</strong> Check the summary. All tests should show "Pass" for optimal video call quality.
              </li>
              <li>
                <strong>Fix Issues:</strong> If any test fails, follow the troubleshooting steps below before joining your call.
              </li>
            </ol>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Troubleshooting Network Issues</h3>

            <h4 className="text-xl font-bold text-gray-900 mt-6 mb-3">High Ping or Latency</h4>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Use Wired Connection:</strong> Connect via Ethernet cable instead of WiFi for lower latency</li>
              <li><strong>Close Bandwidth-Heavy Apps:</strong> Close streaming services, downloads, and other bandwidth-intensive applications</li>
              <li><strong>Move Closer to Router:</strong> If using WiFi, move closer to your router or use a WiFi extender</li>
              <li><strong>Check Internet Plan:</strong> Ensure your internet plan provides sufficient speed for video calls (minimum 1 Mbps upload/download)</li>
              <li><strong>Restart Router:</strong> Unplug your router for 30 seconds, then plug it back in</li>
              <li><strong>Check for Interference:</strong> Reduce interference from other devices (microwaves, Bluetooth devices)</li>
            </ul>

            <h4 className="text-xl font-bold text-gray-900 mt-6 mb-3">High Jitter</h4>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Network Congestion:</strong> Avoid peak usage times or upgrade your internet plan</li>
              <li><strong>WiFi Interference:</strong> Switch to 5GHz WiFi band if available (less interference than 2.4GHz)</li>
              <li><strong>Background Applications:</strong> Close applications that use network bandwidth</li>
              <li><strong>Router Quality:</strong> Consider upgrading to a better router if jitter persists</li>
              <li><strong>ISP Issues:</strong> Contact your internet service provider if jitter is consistently high</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Camera and Microphone Troubleshooting</h3>

            <h4 className="text-xl font-bold text-gray-900 mt-6 mb-3">Camera Not Working</h4>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Check browser permissions (click lock icon in address bar)</li>
              <li>Close other applications using the camera (Zoom, Teams, etc.)</li>
              <li>Check physical privacy covers on laptops</li>
              <li>Restart your browser</li>
              <li>Test camera in another application to verify hardware</li>
              <li>Update camera drivers (Windows Device Manager or Mac System Preferences)</li>
            </ul>

            <h4 className="text-xl font-bold text-gray-900 mt-6 mb-3">Microphone Not Working</h4>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Check browser permissions (click lock icon in address bar)</li>
              <li>Check physical mute switches on headsets or laptops</li>
              <li>Verify correct input device is selected in system settings</li>
              <li>Close other applications using the microphone</li>
              <li>Check microphone volume levels in system settings</li>
              <li>Test microphone in another application</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Platform-Specific Testing</h3>

            <h4 className="text-xl font-bold text-gray-900 mt-6 mb-3">Zoom Meeting Check</h4>
            <p className="text-gray-700 mb-4">
              Before joining a Zoom meeting, run our meeting check. If all tests pass, your Zoom call will work smoothly. You can also test within Zoom by going to Settings → Video and Settings → Audio, but our tool is faster and doesn't require the Zoom app.
            </p>

            <h4 className="text-xl font-bold text-gray-900 mt-6 mb-3">Microsoft Teams Check</h4>
            <p className="text-gray-700 mb-4">
              Teams users should run our meeting check before joining meetings. If our tests pass, Teams will work correctly. You can also test in Teams by going to Settings → Devices, but our browser-based test is more convenient.
            </p>

            <h4 className="text-xl font-bold text-gray-900 mt-6 mb-3">Google Meet Check</h4>
            <p className="text-gray-700 mb-4">
              Google Meet relies on your browser's camera and microphone access. If our meeting check passes, Meet will work perfectly. You can also join a test meeting in Meet to verify your setup.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Best Practices for Video Calls</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Test Before Important Calls:</strong> Always run a meeting check 5-10 minutes before important calls</li>
              <li><strong>Use Wired Connection:</strong> Ethernet provides more stable connection than WiFi</li>
              <li><strong>Close Unnecessary Apps:</strong> Free up bandwidth and system resources</li>
              <li><strong>Check Lighting:</strong> Ensure good lighting for video quality</li>
              <li><strong>Test Audio:</strong> Verify microphone and speakers work correctly</li>
              <li><strong>Have Backup Plan:</strong> Know how to join via phone if internet fails</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">{t.frequently_asked_questions}</h3>
            <div className="space-y-6 mt-6">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-200 pb-6 last:border-0">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{faq.question}</h4>
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              ))}
            </div>

            <p className="text-lg text-gray-700 mt-8">
              Ready to check your meeting setup? <Link href="#test" className="text-blue-600 hover:text-blue-800 font-semibold">Scroll up and click "Run Meeting Check"</Link> to test your network, camera, and microphone. Ensure everything works perfectly before your next important video call.
            </p>
          </article>
        </div>
      </div>
    </>
  )
}

