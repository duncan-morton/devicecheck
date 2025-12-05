import { Metadata } from 'next'
import { generateMetadata as genMeta } from '@/lib/seo/metadata'
import { JsonLdScript } from '@/components/JsonLdScript'
import { generateArticleSchema, generateBreadcrumbListSchema, generateFAQPageSchema } from '@/lib/seo/jsonLd'
import Breadcrumbs from '@/components/Breadcrumbs'
import Link from 'next/link'

export const revalidate = 86400

export const metadata: Metadata = genMeta({
  title: 'Microphone Test for Zoom, Quick Check Guide',
  description: 'Test your microphone before Zoom meetings. Verify audio works correctly using our browser test or Zoom settings.',
  path: '/guides/microphone-test-zoom',
  keywords: [
    'microphone test zoom',
    'zoom mic test',
    'test microphone for zoom',
    'zoom microphone check'
  ]
})

const faqs = [
  {
    question: 'How do I test my microphone for Zoom?',
    answer: 'Use our online microphone test to verify your mic works before joining Zoom meetings. If the test works, your microphone will work in Zoom. You can also test in Zoom by going to Settings → Audio → Test Speaker & Microphone.'
  },
  {
    question: 'My microphone works in the test but not in Zoom. Why?',
    answer: 'Check Zoom\'s audio settings. Go to Zoom Settings → Audio → Microphone and ensure the correct device is selected. Also verify Zoom has microphone permissions in your system settings.'
  },
  {
    question: 'How do I test microphone in Zoom app?',
    answer: 'Open Zoom → Settings → Audio → Click "Test Speaker & Microphone". Speak into your microphone and you should hear your voice played back. Adjust volume if needed.'
  }
]

export default function MicrophoneTestZoomPage() {
  const articleSchema = generateArticleSchema(
    'Microphone Test for Zoom, Quick Check Guide',
    'Test your microphone before Zoom meetings. Verify audio works correctly using our browser test or Zoom settings.',
    '/guides/microphone-test-zoom',
    new Date().toISOString(),
    new Date().toISOString()
  )

  const breadcrumbs = generateBreadcrumbListSchema([
    { name: 'Home', path: '/' },
    { name: 'Guides', path: '/guides' },
    { name: 'Microphone Test for Zoom', path: '/guides/microphone-test-zoom' }
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
            { name: 'Microphone Test for Zoom', path: '/guides/microphone-test-zoom' }
          ]} />
          
          <article className="prose prose-slate max-w-none bg-white p-8 md:p-12 rounded-2xl border border-gray-200">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Microphone Test for Zoom</h1>
            
            <p className="text-lg text-gray-700 mb-8">
              Testing your microphone before Zoom meetings prevents audio issues during calls. This page shows how to verify your microphone works with Zoom. Use our browser test first, then check Zoom settings if needed.
            </p>

            <p className="text-gray-700 mb-6">
              You can use the <Link href="/mic" className="text-blue-600 hover:text-blue-800">online microphone test</Link> to confirm whether your device is working.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Test Microphone in Browser</h2>
            <p className="text-gray-700 mb-4">
              Test your microphone using our online tool before opening Zoom. If the test works, your microphone will work in Zoom.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Open the <Link href="/mic" className="text-blue-600 hover:text-blue-800 font-semibold">microphone test page</Link></li>
              <li>Click "Allow" when prompted for microphone access</li>
              <li>Speak into your microphone and watch the volume meter</li>
              <li>Record and play back to verify audio quality</li>
              <li>If the test works, your mic will work in Zoom</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Test Microphone in Zoom Settings</h2>
            <p className="text-gray-700 mb-4">
              Zoom has built-in microphone testing. Use this to verify settings within the Zoom app.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Open Zoom application</li>
              <li>Go to Settings → Audio</li>
              <li>Click "Test Speaker & Microphone"</li>
              <li>Speak into your microphone</li>
              <li>You should hear your voice played back</li>
              <li>Adjust microphone volume slider if needed</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Select Correct Microphone in Zoom</h2>
            <p className="text-gray-700 mb-4">
              Zoom may be using the wrong microphone. Verify the correct device is selected.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Zoom Settings → Audio → Microphone dropdown</li>
              <li>Select your preferred microphone from the list</li>
              <li>Test the microphone after selecting</li>
              <li>If your microphone doesn't appear, check system settings</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Check Zoom Microphone Permissions</h2>
            <p className="text-gray-700 mb-4">
              Zoom needs microphone permissions to access your device. Verify permissions are granted.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Windows:</strong> Settings → Privacy → Microphone → Ensure Zoom is allowed</li>
              <li><strong>Mac:</strong> System Preferences → Security & Privacy → Microphone → Check Zoom</li>
              <li>Restart Zoom after changing permissions</li>
              <li>Test microphone again</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Adjust Zoom Microphone Volume</h2>
            <p className="text-gray-700 mb-4">
              Zoom has its own microphone volume control. Adjust this if audio is too quiet or too loud.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Zoom Settings → Audio → Microphone volume slider</li>
              <li>Increase volume if others can't hear you</li>
              <li>Decrease volume if audio is distorted</li>
              <li>Test while speaking to find optimal level</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Troubleshoot Zoom Microphone Issues</h2>
            <p className="text-gray-700 mb-4">
              If your microphone works in the browser test but not in Zoom, try these steps. If the microphone isn't working at all, see the guide on <Link href="/guides/microphone-not-working" className="text-blue-600 hover:text-blue-800">microphone not working</Link> for comprehensive troubleshooting.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Close other applications using the microphone</li>
              <li>Restart Zoom application</li>
              <li>Check that Zoom is using the correct input device</li>
              <li>Update Zoom to the latest version</li>
              <li>Verify system microphone settings are correct</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Verify Microphone Before Meetings</h2>
            <p className="text-gray-700 mb-6">
              Always test your microphone before important Zoom meetings. Use the <Link href="/mic" className="text-blue-600 hover:text-blue-800 font-semibold">online microphone test</Link> to confirm everything works. This prevents audio issues during calls.
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 my-8">
              <h3 className="font-semibold text-blue-900 mb-2">Related Guides</h3>
              <ul className="space-y-2 text-sm text-blue-800">
                <li><Link href="/guides/microphone-test-microsoft-teams" className="hover:text-blue-600 underline">Microphone Test for Microsoft Teams</Link></li>
                <li><Link href="/guides/microphone-test-google-meet" className="hover:text-blue-600 underline">Microphone Test for Google Meet</Link></li>
                <li><Link href="/guides/microphone-not-working" className="hover:text-blue-600 underline">Microphone Not Working</Link></li>
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
                <strong>Next step:</strong> Test your microphone to ensure it works with Zoom.
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

