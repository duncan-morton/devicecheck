import { Metadata } from 'next'
import { generateMetadata as genMeta } from '@/lib/seo/metadata'
import { JsonLdScript } from '@/components/JsonLdScript'
import { generateArticleSchema, generateBreadcrumbListSchema, generateFAQPageSchema } from '@/lib/seo/jsonLd'
import Breadcrumbs from '@/components/Breadcrumbs'
import Link from 'next/link'

export const revalidate = 86400

export const metadata: Metadata = genMeta({
  title: 'Microphone Test for Microsoft Teams',
  description: 'Test your microphone before Microsoft Teams meetings. Verify audio works correctly using browser test or Teams settings.',
  path: '/guides/microphone-test-microsoft-teams',
  keywords: [
    'microphone test teams',
    'teams mic test',
    'test microphone for teams',
    'microsoft teams microphone check'
  ]
})

const faqs = [
  {
    question: 'How do I test my microphone for Microsoft Teams?',
    answer: 'Use our online microphone test to verify your mic works before Teams meetings. If the test works, your microphone will work in Teams. You can also test in Teams by going to Settings → Devices → Audio Devices.'
  },
  {
    question: 'My microphone works in the test but not in Teams. Why?',
    answer: 'Check Teams audio settings. Go to Teams Settings → Devices → Audio Devices and ensure the correct microphone is selected. Also verify Teams has microphone permissions in your system settings.'
  }
]

export default function MicrophoneTestMicrosoftTeamsPage() {
  const articleSchema = generateArticleSchema(
    'Microphone Test for Microsoft Teams',
    'Test your microphone before Microsoft Teams meetings. Verify audio works correctly using browser test or Teams settings.',
    '/guides/microphone-test-microsoft-teams',
    new Date().toISOString(),
    new Date().toISOString()
  )

  const breadcrumbs = generateBreadcrumbListSchema([
    { name: 'Home', path: '/' },
    { name: 'Guides', path: '/guides' },
    { name: 'Microphone Test for Microsoft Teams', path: '/guides/microphone-test-microsoft-teams' }
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
            { name: 'Microphone Test for Microsoft Teams', path: '/guides/microphone-test-microsoft-teams' }
          ]} />
          
          <article className="prose prose-slate max-w-none bg-white p-8 md:p-12 rounded-2xl border border-gray-200">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Microphone Test for Microsoft Teams</h1>
            
            <p className="text-lg text-gray-700 mb-8">
              Testing your microphone before Teams meetings prevents audio issues during calls. This page shows how to verify your microphone works with Microsoft Teams. Use our browser test first, then check Teams settings if needed.
            </p>

            <p className="text-gray-700 mb-6">
              You can use the <Link href="/mic" className="text-blue-600 hover:text-blue-800">online microphone test</Link> to confirm whether your device is working.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Test Microphone in Browser</h2>
            <p className="text-gray-700 mb-4">
              Test your microphone using our online tool before opening Teams. If the test works, your microphone will work in Teams.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Open the <Link href="/mic" className="text-blue-600 hover:text-blue-800 font-semibold">microphone test page</Link></li>
              <li>Click "Allow" when prompted for microphone access</li>
              <li>Speak into your microphone and watch the volume meter</li>
              <li>Record and play back to verify audio quality</li>
              <li>If the test works, your mic will work in Teams</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Test Microphone in Teams Settings</h2>
            <p className="text-gray-700 mb-4">
              Teams has built-in microphone testing. Use this to verify settings within the Teams app.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Open Microsoft Teams application</li>
              <li>Go to Settings → Devices</li>
              <li>Click "Audio Devices" section</li>
              <li>Speak into your microphone</li>
              <li>Watch the microphone level indicator</li>
              <li>Adjust microphone volume if needed</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Select Correct Microphone in Teams</h2>
            <p className="text-gray-700 mb-4">
              Teams may be using the wrong microphone. Verify the correct device is selected.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Teams Settings → Devices → Audio Devices → Microphone dropdown</li>
              <li>Select your preferred microphone from the list</li>
              <li>Test the microphone after selecting</li>
              <li>If your microphone doesn't appear, check system settings</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Check Teams Microphone Permissions</h2>
            <p className="text-gray-700 mb-4">
              Teams needs microphone permissions to access your device. Verify permissions are granted.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Windows:</strong> Settings → Privacy → Microphone → Ensure Teams is allowed</li>
              <li><strong>Mac:</strong> System Preferences → Security & Privacy → Microphone → Check Teams</li>
              <li>Restart Teams after changing permissions</li>
              <li>Test microphone again</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Adjust Teams Microphone Volume</h2>
            <p className="text-gray-700 mb-4">
              Teams has its own microphone volume control. Adjust this if audio is too quiet or too loud.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Teams Settings → Devices → Audio Devices → Microphone volume slider</li>
              <li>Increase volume if others can't hear you</li>
              <li>Decrease volume if audio is distorted</li>
              <li>Test while speaking to find optimal level</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Troubleshoot Teams Microphone Issues</h2>
            <p className="text-gray-700 mb-4">
              If your microphone works in the browser test but not in Teams, try these steps. For general microphone issues, see the guide on <Link href="/guides/microphone-not-working" className="text-blue-600 hover:text-blue-800">microphone not working</Link>.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Close other applications using the microphone</li>
              <li>Restart Teams application</li>
              <li>Check that Teams is using the correct input device</li>
              <li>Update Teams to the latest version</li>
              <li>Verify system microphone settings are correct</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Verify Microphone Before Meetings</h2>
            <p className="text-gray-700 mb-6">
              Always test your microphone before important Teams meetings. Use the <Link href="/mic" className="text-blue-600 hover:text-blue-800 font-semibold">online microphone test</Link> to confirm everything works. This prevents audio issues during calls.
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 my-8">
              <h3 className="font-semibold text-blue-900 mb-2">Related Guides</h3>
              <ul className="space-y-2 text-sm text-blue-800">
                <li><Link href="/guides/microphone-test-zoom" className="hover:text-blue-600 underline">Microphone Test for Zoom</Link></li>
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
                <strong>Next step:</strong> Test your microphone to ensure it works with Teams.
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

