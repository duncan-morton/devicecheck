import { Metadata } from 'next'
import { generateMetadata as genMeta } from '@/lib/seo/metadata'
import { JsonLdScript } from '@/components/JsonLdScript'
import { generateArticleSchema, generateBreadcrumbListSchema, generateFAQPageSchema } from '@/lib/seo/jsonLd'
import Breadcrumbs from '@/components/Breadcrumbs'
import Link from 'next/link'

export const revalidate = 86400

export const metadata: Metadata = genMeta({
  title: 'Chromebook Microphone Not Working, How to Fix',
  description: 'Fix microphone not working on Chromebook. Troubleshoot permissions, device selection, and Chrome OS settings to get your mic working.',
  path: '/guides/chromebook-microphone-not-working',
  keywords: [
    'chromebook microphone not working',
    'chromebook mic not working',
    'chrome os microphone not working',
    'chromebook microphone not detected'
  ]
})

const faqs = [
  {
    question: 'Why is my microphone not working on Chromebook?',
    answer: 'Chromebook microphone issues are usually caused by denied browser permissions, wrong input device selection, or Chrome OS settings. Check Chrome browser permissions first, then verify Settings → Privacy and Security → Site Settings → Microphone.'
  },
  {
    question: 'How do I enable microphone on Chromebook?',
    answer: 'Click the lock icon in Chrome\'s address bar, then set Microphone to Allow. Alternatively, go to Chrome Settings → Privacy and Security → Site Settings → Microphone and ensure access is enabled for the website.'
  }
]

export default function ChromebookMicrophoneNotWorkingPage() {
  const articleSchema = generateArticleSchema(
    'Chromebook Microphone Not Working, How to Fix',
    'Fix microphone not working on Chromebook. Troubleshoot permissions, device selection, and Chrome OS settings to get your mic working.',
    '/guides/chromebook-microphone-not-working',
    new Date().toISOString(),
    new Date().toISOString()
  )

  const breadcrumbs = generateBreadcrumbListSchema([
    { name: 'Home', path: '/' },
    { name: 'Guides', path: '/guides' },
    { name: 'Chromebook Microphone Not Working', path: '/guides/chromebook-microphone-not-working' }
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
            { name: 'Chromebook Microphone Not Working', path: '/guides/chromebook-microphone-not-working' }
          ]} />
          
          <article className="prose prose-slate max-w-none bg-white p-8 md:p-12 rounded-2xl border border-gray-200">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Chromebook Microphone Not Working</h1>
            
            <p className="text-lg text-gray-700 mb-8">
              When your Chromebook microphone stops working, websites and apps can't access audio input. This page covers how to fix microphone issues on Chromebook. Check browser permissions first, then verify Chrome OS settings.
            </p>

            <p className="text-gray-700 mb-6">
              You can use the <Link href="/mic" className="text-blue-600 hover:text-blue-800">online microphone test</Link> to confirm whether your device is working.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Check Chrome Browser Permissions</h2>
            <p className="text-gray-700 mb-4">
              Chrome browser permissions control microphone access on Chromebook. Verify these are enabled.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Click the lock icon in Chrome's address bar</li>
              <li>Find "Microphone" in the permissions list</li>
              <li>Change the setting from "Block" to "Allow"</li>
              <li>Refresh the page after changing the setting</li>
              <li>The website can now access your microphone</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Check Chrome OS Settings</h2>
            <p className="text-gray-700 mb-4">
              Chrome OS has system-level microphone settings. Verify these are configured correctly. For Chrome browser permission issues, see the guide on <Link href="/guides/how-to-enable-microphone-chrome" className="text-blue-600 hover:text-blue-800">how to enable microphone in Chrome</Link>.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Open Settings → Privacy and Security</li>
              <li>Go to Site Settings → Microphone</li>
              <li>Ensure "Ask before accessing" is enabled</li>
              <li>Review blocked sites and allow if needed</li>
              <li>Check that microphone access isn't globally blocked</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Verify Input Device Selection</h2>
            <p className="text-gray-700 mb-4">
              Chromebook may be using the wrong microphone. Check which input device is selected.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Open Settings → Sound</li>
              <li>Go to Input section</li>
              <li>Check that your microphone appears in the device list</li>
              <li>Select the correct microphone if multiple devices are available</li>
              <li>Adjust input volume if needed</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Check Physical Mute Switch</h2>
            <p className="text-gray-700 mb-4">
              Some Chromebooks have a physical mute button or keyboard shortcut that disables the microphone.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Look for a microphone mute key on your keyboard</li>
              <li>Check for Search + M or similar keyboard shortcuts</li>
              <li>Press the mute key again to unmute</li>
              <li>Check the system tray for microphone mute indicators</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Test USB Microphone Connections</h2>
            <p className="text-gray-700 mb-4">
              USB microphones may not be properly recognized on Chromebook. Verify connections.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Unplug and reconnect USB microphones</li>
              <li>Try a different USB port</li>
              <li>Check Settings → Connected devices to see if the device is recognized</li>
              <li>Test with a different USB cable if available</li>
              <li>Some USB microphones may not be compatible with Chrome OS</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Powerwash Chromebook</h2>
            <p className="text-gray-700 mb-4">
              If microphone issues persist, a powerwash can reset Chrome OS settings. This erases all local data.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Back up important files to Google Drive</li>
              <li>Open Settings → Advanced → Reset settings</li>
              <li>Select "Powerwash"</li>
              <li>Follow the on-screen instructions</li>
              <li>Sign back into your Chromebook after powerwash</li>
              <li>Test microphone again</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Test Microphone After Fixes</h2>
            <p className="text-gray-700 mb-6">
              After trying these steps, use the <Link href="/mic" className="text-blue-600 hover:text-blue-800 font-semibold">online microphone test</Link> to verify your Chromebook microphone is working. The test shows real-time volume levels and confirms device detection.
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 my-8">
              <h3 className="font-semibold text-blue-900 mb-2">Related Guides</h3>
              <ul className="space-y-2 text-sm text-blue-800">
                <li><Link href="/guides/mac-microphone-not-working" className="hover:text-blue-600 underline">Mac Microphone Not Working</Link></li>
                <li><Link href="/guides/microphone-not-working" className="hover:text-blue-600 underline">Microphone Not Working</Link></li>
                <li><Link href="/guides/how-to-enable-microphone-chrome" className="hover:text-blue-600 underline">How to Enable Microphone in Chrome</Link></li>
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
                <strong>Next step:</strong> Test your microphone to confirm it's working on Chromebook.
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

