import { Metadata } from 'next'
import { generateMetadata as genMeta } from '@/lib/seo/metadata'
import JsonLdScript from '@/components/JsonLdScript'
import { generateArticleSchema, generateBreadcrumbListSchema, generateFAQPageSchema } from '@/lib/seo/jsonLd'
import Breadcrumbs from '@/components/Breadcrumbs'
import Link from 'next/link'

export const revalidate = 86400

export const metadata: Metadata = genMeta({
  title: 'Microphone Not Detected on Windows 11, How to Fix',
  description: 'Fix microphone not detected on Windows 11. Troubleshoot device detection, driver issues, and permissions to get your mic working.',
  path: '/guides/microphone-not-detected-windows-11',
  keywords: [
    'microphone not detected windows 11',
    'mic not detected windows 11',
    'windows 11 microphone not working',
    'microphone not showing windows 11'
  ]
})

const faqs = [
  {
    question: 'Why is my microphone not detected on Windows 11?',
    answer: 'Microphone not detected issues on Windows 11 are usually caused by disabled privacy settings, outdated drivers, wrong input device selection, or hardware connection problems. Check Settings → Privacy & Security → Microphone first, then verify device selection and drivers.'
  },
  {
    question: 'How do I enable microphone in Windows 11?',
    answer: 'Go to Settings → Privacy & Security → Microphone → Ensure "Microphone access" is enabled. Also check Settings → System → Sound → Input to verify your microphone is selected and not muted.'
  }
]

export default function MicrophoneNotDetectedWindows11Page() {
  const articleSchema = generateArticleSchema(
    'Microphone Not Detected on Windows 11, How to Fix',
    'Fix microphone not detected on Windows 11. Troubleshoot device detection, driver issues, and permissions to get your mic working.',
    '/guides/microphone-not-detected-windows-11',
    new Date().toISOString(),
    new Date().toISOString()
  )

  const breadcrumbs = generateBreadcrumbListSchema([
    { name: 'Home', path: '/' },
    { name: 'Guides', path: '/guides' },
    { name: 'Microphone Not Detected on Windows 11', path: '/guides/microphone-not-detected-windows-11' }
  ])

  const faqSchema = generateFAQPageSchema(faqs)

  return (
    <>
      <JsonLdScript data={articleSchema} />
      <JsonLdScript data={breadcrumbs} />
      <JsonLdScript data={faqSchema} />
      
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <Breadcrumbs items={[
            { name: 'Guides', path: '/guides' },
            { name: 'Microphone Not Detected on Windows 11', path: '/guides/microphone-not-detected-windows-11' }
          ]} />
          
          <article className="prose prose-slate max-w-none bg-white p-8 md:p-12 rounded-2xl border border-gray-200">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Microphone Not Detected on Windows 11</h1>
            
            <p className="text-lg text-gray-700 mb-8">
              When Windows 11 doesn't detect your microphone, apps and websites can't access audio input. This page covers how to fix microphone detection issues on Windows 11. Check privacy settings first, then verify device selection and drivers.
            </p>

            <p className="text-gray-700 mb-6">
              You can use the <Link href="/mic" className="text-blue-600 hover:text-blue-800">online microphone test</Link> to confirm whether your device is working.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Enable Microphone Privacy Settings</h2>
            <p className="text-gray-700 mb-4">
              Windows 11 privacy settings can block microphone access. Verify these are enabled.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Open Settings → Privacy & Security → Microphone</li>
              <li>Ensure "Microphone access" is turned on</li>
              <li>Check "Let desktop apps access your microphone" if needed</li>
              <li>Restart your computer after changing these settings</li>
              <li>Test microphone again</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Check Sound Input Settings</h2>
            <p className="text-gray-700 mb-4">
              Verify your microphone is selected and enabled in Windows 11 sound settings.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Open Settings → System → Sound</li>
              <li>Go to Input section</li>
              <li>Check that your microphone appears in the device list</li>
              <li>Ensure the microphone is not muted</li>
              <li>Test the microphone using the "Test your microphone" button</li>
              <li>Adjust input volume if needed</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Update Audio Drivers</h2>
            <p className="text-gray-700 mb-4">
              Outdated or missing audio drivers prevent microphone detection. Update drivers. If your microphone still isn't detected after updating, see the guide on <Link href="/guides/microphone-not-working" className="text-blue-600 hover:text-blue-800">microphone not working</Link> for additional troubleshooting steps.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Open Device Manager (Win + X → Device Manager)</li>
              <li>Expand "Audio inputs and outputs"</li>
              <li>Right-click your microphone device</li>
              <li>Select "Update driver"</li>
              <li>Choose "Search automatically for drivers"</li>
              <li>Restart your computer after updating</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Check Device Manager</h2>
            <p className="text-gray-700 mb-4">
              Verify your microphone appears in Device Manager and isn't disabled.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Open Device Manager</li>
              <li>Expand "Audio inputs and outputs"</li>
              <li>Look for your microphone device</li>
              <li>If it shows a warning icon, right-click and select "Enable device"</li>
              <li>If the device is missing, check physical connections</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Verify Physical Connections</h2>
            <p className="text-gray-700 mb-4">
              Check that USB microphones are properly connected and recognized.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Unplug and reconnect USB microphones</li>
              <li>Try a different USB port</li>
              <li>Check for Windows notification when connecting USB devices</li>
              <li>Test with a different USB cable if available</li>
              <li>For 3.5mm microphones, ensure the jack is fully inserted</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Run Audio Troubleshooter</h2>
            <p className="text-gray-700 mb-4">
              Windows 11 includes an audio troubleshooter that can fix common issues.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Open Settings → System → Troubleshoot</li>
              <li>Click "Other troubleshooters"</li>
              <li>Find "Recording Audio" and click "Run"</li>
              <li>Follow the on-screen instructions</li>
              <li>Test microphone after troubleshooting</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Test Microphone Detection</h2>
            <p className="text-gray-700 mb-6">
              After trying these steps, use the <Link href="/mic" className="text-blue-600 hover:text-blue-800 font-semibold">online microphone test</Link> to verify Windows 11 detects your microphone. The test shows real-time volume levels and confirms device detection.
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 my-8">
              <h3 className="font-semibold text-blue-900 mb-2">Related Guides</h3>
              <ul className="space-y-2 text-sm text-blue-800">
                <li><Link href="/guides/microphone-not-detected-windows-10" className="hover:text-blue-600 underline">Microphone Not Detected on Windows 10</Link></li>
                <li><Link href="/guides/microphone-not-working" className="hover:text-blue-600 underline">Microphone Not Working</Link></li>
                <li><Link href="/guides/mac-microphone-not-working" className="hover:text-blue-600 underline">Mac Microphone Not Working</Link></li>
              </ul>
            </div>

            <p className="text-gray-700 mb-6 mt-8">
              You can use the <Link href="/mic" className="text-blue-600 hover:text-blue-800">online microphone test</Link> to confirm everything is working.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Frequently Asked Questions</h2>
            <div className="space-y-6 mt-6">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-200 pb-6 last:border-0">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{faq.question}</h3>
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-gray-50 rounded-xl border border-gray-200">
              <p className="text-gray-700 mb-4">
                <strong>Next step:</strong> Test your microphone to confirm Windows 11 detects it.
              </p>
              <Link 
                href="/mic" 
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Run Microphone Test →
              </Link>
            </div>
          </article>
        </div>
      </div>
    </>
  )
}

