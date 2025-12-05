import { Metadata } from 'next'
import { generateMetadata as genMeta } from '@/lib/seo/metadata'
import JsonLdScript from '@/components/JsonLdScript'
import { generateArticleSchema, generateBreadcrumbListSchema, generateFAQPageSchema } from '@/lib/seo/jsonLd'
import Breadcrumbs from '@/components/Breadcrumbs'
import Link from 'next/link'

export const revalidate = 86400

export const metadata: Metadata = genMeta({
  title: 'Mac Microphone Not Working, How to Fix',
  description: 'Fix microphone not working on Mac. Troubleshoot permissions, device selection, and system settings to get your mic working.',
  path: '/guides/mac-microphone-not-working',
  keywords: [
    'mac microphone not working',
    'mac mic not working',
    'macbook microphone not working',
    'mac microphone not detected'
  ]
})

const faqs = [
  {
    question: 'Why is my microphone not working on Mac?',
    answer: 'Mac microphone issues are usually caused by denied permissions, wrong input device selection, or system settings. Check System Preferences → Security & Privacy → Microphone first, then verify input device selection in Sound settings.'
  },
  {
    question: 'How do I enable microphone on Mac?',
    answer: 'Go to System Preferences → Security & Privacy → Privacy tab → Microphone. Check the box next to your browser or application. Also verify Settings → Sound → Input to ensure the correct microphone is selected.'
  }
]

export default function MacMicrophoneNotWorkingPage() {
  const articleSchema = generateArticleSchema(
    'Mac Microphone Not Working, How to Fix',
    'Fix microphone not working on Mac. Troubleshoot permissions, device selection, and system settings to get your mic working.',
    '/guides/mac-microphone-not-working',
    new Date().toISOString(),
    new Date().toISOString()
  )

  const breadcrumbs = generateBreadcrumbListSchema([
    { name: 'Home', path: '/' },
    { name: 'Guides', path: '/guides' },
    { name: 'Mac Microphone Not Working', path: '/guides/mac-microphone-not-working' }
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
            { name: 'Mac Microphone Not Working', path: '/guides/mac-microphone-not-working' }
          ]} />
          
          <article className="prose prose-slate max-w-none bg-white p-8 md:p-12 rounded-2xl border border-gray-200">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Mac Microphone Not Working</h1>
            
            <p className="text-lg text-gray-700 mb-8">
              When your Mac microphone stops working, apps and websites can't access audio input. This page covers how to fix microphone issues on Mac. Check permissions first, then verify device selection and system settings.
            </p>

            <p className="text-gray-700 mb-6">
              You can use the <Link href="/mic" className="text-blue-600 hover:text-blue-800">online microphone test</Link> to confirm whether your device is working.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Check Microphone Permissions</h2>
            <p className="text-gray-700 mb-4">
              Mac requires explicit permission for apps to access your microphone. Verify permissions are granted.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Open System Preferences → Security & Privacy</li>
              <li>Go to Privacy tab</li>
              <li>Select Microphone from the left sidebar</li>
              <li>Check the box next to your browser or application</li>
              <li>If the app isn't listed, click the lock icon to unlock, then add it</li>
              <li>Restart the application after granting permission</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Verify Input Device Selection</h2>
            <p className="text-gray-700 mb-4">
              Mac may be using the wrong microphone. Check which input device is selected.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Open System Preferences → Sound</li>
              <li>Go to Input tab</li>
              <li>Check that your microphone appears in the device list</li>
              <li>Select the correct microphone if multiple devices are available</li>
              <li>Adjust input volume slider if needed</li>
              <li>Speak into the microphone and watch the input level indicator</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Check Physical Mute Switch</h2>
            <p className="text-gray-700 mb-4">
              Some Mac keyboards have a physical mute button that can disable the microphone.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Look for a microphone mute key on your keyboard</li>
              <li>Check for Fn + F4 or similar function key combinations</li>
              <li>Press the mute key again to unmute</li>
              <li>Check the menu bar for microphone mute indicators</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Test USB Microphone Connections</h2>
            <p className="text-gray-700 mb-4">
              USB microphones may not be properly recognized. Verify connections.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Unplug and reconnect USB microphones</li>
              <li>Try a different USB port</li>
              <li>Check System Information → USB to see if the device is recognized</li>
              <li>Test with a different USB cable if available</li>
              <li>For external audio interfaces, check driver installation</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Reset Audio Settings</h2>
            <p className="text-gray-700 mb-4">
              Corrupted audio settings can prevent microphone access. Reset audio settings.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Open Terminal</li>
              <li>Type: sudo killall coreaudiod</li>
              <li>Press Enter and enter your password</li>
              <li>Wait a few seconds for audio system to restart</li>
              <li>Test microphone again</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Update macOS</h2>
            <p className="text-gray-700 mb-4">
              Outdated macOS versions can have microphone compatibility issues. Update if needed. For general microphone troubleshooting, see the guide on <Link href="/guides/microphone-not-working" className="text-blue-600 hover:text-blue-800">microphone not working</Link>.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Open System Preferences → Software Update</li>
              <li>Check for available updates</li>
              <li>Install any macOS updates</li>
              <li>Restart your Mac after updating</li>
              <li>Test microphone again</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Test Microphone After Fixes</h2>
            <p className="text-gray-700 mb-6">
              After trying these steps, use the <Link href="/mic" className="text-blue-600 hover:text-blue-800 font-semibold">online microphone test</Link> to verify your Mac microphone is working. The test shows real-time volume levels and confirms device detection.
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 my-8">
              <h3 className="font-semibold text-blue-900 mb-2">Related Guides</h3>
              <ul className="space-y-2 text-sm text-blue-800">
                <li><Link href="/guides/microphone-not-detected-windows-10" className="hover:text-blue-600 underline">Microphone Not Detected on Windows 10</Link></li>
                <li><Link href="/guides/microphone-not-working" className="hover:text-blue-600 underline">Microphone Not Working</Link></li>
                <li><Link href="/guides/chromebook-microphone-not-working" className="hover:text-blue-600 underline">Chromebook Microphone Not Working</Link></li>
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
                <strong>Next step:</strong> Test your microphone to confirm it's working on Mac.
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

