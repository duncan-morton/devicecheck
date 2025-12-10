import { Metadata } from 'next'
import { generateMetadata as genMeta } from '@/lib/seo/metadata'
import JsonLdScript from '@/components/JsonLdScript'
import { generateWebApplicationSchema, generateBreadcrumbListSchema, generateFAQPageSchema } from '@/lib/seo/jsonLd'
import { getTranslation, type Locale } from '@/i18n/getTranslation'
import MeetingCheckTool from '@/components/MeetingCheckTool'
import Breadcrumbs from '@/components/Breadcrumbs'
import RelatedTools from '@/components/RelatedTools'
import DeviceNavigation from '@/components/DeviceNavigation'
import StickyActionBar from '@/components/StickyActionBar'
import Link from 'next/link'

export const revalidate = 86400 // ISR: Revalidate every 24 hours

const locale: Locale = 'fr'
const t = getTranslation(locale)

export const metadata: Metadata = genMeta({
  title: t.meeting_check_title,
  description: 'Test your network, camera, and microphone before video calls. Check ping, jitter, and device connectivity with our free meeting check tool for Zoom, Teams, and Google Meet.',
  path: '/fr/meeting-check',
  locale: 'fr',
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
  }
]

export default function MeetingCheckPage() {
  const locale: Locale = 'fr'
  const t = getTranslation(locale)
  
  const webAppSchema = generateWebApplicationSchema(
    t.meeting_check_title,
    'Test your network, camera, and microphone before video calls.',
    '/fr/meeting-check',
    locale
  )

  const breadcrumbs = generateBreadcrumbListSchema([
    { name: t.breadcrumb_home, path: '/fr' },
    { name: t.meeting_check, path: '/fr/meeting-check' }
  ], locale)

  const faqSchema = generateFAQPageSchema(faqs, locale)

  return (
    <>
      <JsonLdScript data={webAppSchema} />
      <JsonLdScript data={breadcrumbs} />
      <JsonLdScript data={faqSchema} />
      
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8 max-w-6xl">
          <Breadcrumbs items={[{ name: t.meeting_check, path: '/fr/meeting-check' }]} locale={locale} />
          
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t.meeting_check_title}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl">
              Test your network connectivity, camera, and microphone before important video calls. Ensure everything works perfectly for Zoom, Teams, Google Meet, and other video conferencing platforms.
            </p>
          </div>

          <div className="mb-8">
            <Link 
              href="#test"
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
            >
              Run Meeting Check →
            </Link>
          </div>

          <div id="test" className="scroll-mt-8">
            <MeetingCheckTool />
          </div>

          <RelatedTools currentPath="/meeting-check" locale={locale} />

          {/* Comprehensive SEO Content */}
          <article className="prose prose-slate max-w-none bg-white p-8 md:p-12 rounded-2xl border border-gray-200 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Check Your Setup Before Video Calls</h2>
            
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

          <DeviceNavigation />
        </div>
      </div>
      <StickyActionBar toolName={t.meeting_check} toolHref="/fr/meeting-check" />
    </>
  )
}

