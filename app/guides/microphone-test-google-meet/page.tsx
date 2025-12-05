import { Metadata } from 'next'
import { generateMetadata as genMeta } from '@/lib/seo/metadata'
import JsonLdScript from '@/components/JsonLdScript'
import { generateArticleSchema, generateBreadcrumbListSchema, generateFAQPageSchema } from '@/lib/seo/jsonLd'
import Breadcrumbs from '@/components/Breadcrumbs'
import Link from 'next/link'

export const revalidate = 86400

export const metadata: Metadata = genMeta({
  title: 'Microphone Test for Google Meet',
  description: 'Test your microphone before Google Meet calls. Verify audio works correctly using browser test or Meet settings.',
  path: '/guides/microphone-test-google-meet',
  keywords: [
    'microphone test google meet',
    'google meet mic test',
    'test microphone for google meet',
    'google meet microphone check'
  ]
})

const faqs = [
  {
    question: 'How do I test my microphone for Google Meet?',
    answer: 'Use our online microphone test to verify your mic works before Meet calls. If the test works, your microphone will work in Google Meet. Google Meet uses your browser\'s microphone access, so browser tests are reliable.'
  },
  {
    question: 'My microphone works in the test but not in Google Meet. Why?',
    answer: 'Check Meet\'s audio settings. Click the three dots menu → Settings → Audio → Ensure the correct microphone is selected. Also verify your browser has microphone permissions for meet.google.com.'
  }
]

export default function MicrophoneTestGoogleMeetPage() {
  const articleSchema = generateArticleSchema(
    'Microphone Test for Google Meet',
    'Test your microphone before Google Meet calls. Verify audio works correctly using browser test or Meet settings.',
    '/guides/microphone-test-google-meet',
    new Date().toISOString(),
    new Date().toISOString()
  )

  const breadcrumbs = generateBreadcrumbListSchema([
    { name: 'Home', path: '/' },
    { name: 'Guides', path: '/guides' },
    { name: 'Microphone Test for Google Meet', path: '/guides/microphone-test-google-meet' }
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
            { name: 'Microphone Test for Google Meet', path: '/guides/microphone-test-google-meet' }
          ]} />
          
          <article className="prose prose-slate max-w-none bg-white p-8 md:p-12 rounded-2xl border border-gray-200">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Microphone Test for Google Meet</h1>
            
            <p className="text-lg text-gray-700 mb-8">
              Testing your microphone before Google Meet calls prevents audio issues during meetings. This page shows how to verify your microphone works with Google Meet. Use our browser test first, then check Meet settings if needed.
            </p>

            <p className="text-gray-700 mb-6">
              You can use the <Link href="/mic" className="text-blue-600 hover:text-blue-800">online microphone test</Link> to confirm whether your device is working.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Test Microphone in Browser</h2>
            <p className="text-gray-700 mb-4">
              Test your microphone using our online tool before joining Meet calls. Google Meet uses your browser's microphone access, so if the test works, your microphone will work in Meet.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Open the <Link href="/mic" className="text-blue-600 hover:text-blue-800 font-semibold">microphone test page</Link></li>
              <li>Click "Allow" when prompted for microphone access</li>
              <li>Speak into your microphone and watch the volume meter</li>
              <li>Record and play back to verify audio quality</li>
              <li>If the test works, your mic will work in Google Meet</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Test Microphone in Google Meet</h2>
            <p className="text-gray-700 mb-4">
              Google Meet has built-in microphone testing. Use this to verify settings within Meet.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Join a Google Meet call or create a test meeting</li>
              <li>Click the three dots menu → Settings</li>
              <li>Go to Audio tab</li>
              <li>Speak into your microphone</li>
              <li>Watch the microphone level indicator</li>
              <li>Adjust microphone volume if needed</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Select Correct Microphone in Google Meet</h2>
            <p className="text-gray-700 mb-4">
              Google Meet may be using the wrong microphone. Verify the correct device is selected.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Meet Settings → Audio → Microphone dropdown</li>
              <li>Select your preferred microphone from the list</li>
              <li>Test the microphone after selecting</li>
              <li>If your microphone doesn't appear, check browser permissions</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Check Browser Microphone Permissions</h2>
            <p className="text-gray-700 mb-4">
              Google Meet requires browser microphone permissions. Verify permissions are granted for meet.google.com.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Click the lock icon in your browser's address bar while on meet.google.com</li>
              <li>Set Microphone permission to "Allow"</li>
              <li>Refresh the Meet page after changing permissions</li>
              <li>Test microphone again</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Adjust Google Meet Microphone Volume</h2>
            <p className="text-gray-700 mb-4">
              Google Meet has its own microphone volume control. Adjust this if audio is too quiet or too loud.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Meet Settings → Audio → Microphone volume slider</li>
              <li>Increase volume if others can't hear you</li>
              <li>Decrease volume if audio is distorted</li>
              <li>Test while speaking to find optimal level</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Troubleshoot Google Meet Microphone Issues</h2>
            <p className="text-gray-700 mb-4">
              If your microphone works in the browser test but not in Google Meet, try these steps. For general microphone issues, see the guide on <Link href="/guides/microphone-not-working" className="text-blue-600 hover:text-blue-800">microphone not working</Link>.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Close other applications using the microphone</li>
              <li>Refresh the Google Meet page</li>
              <li>Check that Meet is using the correct input device</li>
              <li>Try a different browser if issues persist</li>
              <li>Verify system microphone settings are correct</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Verify Microphone Before Meetings</h2>
            <p className="text-gray-700 mb-6">
              Always test your microphone before important Google Meet calls. Use the <Link href="/mic" className="text-blue-600 hover:text-blue-800 font-semibold">online microphone test</Link> to confirm everything works. This prevents audio issues during meetings.
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 my-8">
              <h3 className="font-semibold text-blue-900 mb-2">Related Guides</h3>
              <ul className="space-y-2 text-sm text-blue-800">
                <li><Link href="/guides/microphone-test-zoom" className="hover:text-blue-600 underline">Microphone Test for Zoom</Link></li>
                <li><Link href="/guides/microphone-test-microsoft-teams" className="hover:text-blue-600 underline">Microphone Test for Microsoft Teams</Link></li>
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
                <strong>Next step:</strong> Test your microphone to ensure it works with Google Meet.
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

