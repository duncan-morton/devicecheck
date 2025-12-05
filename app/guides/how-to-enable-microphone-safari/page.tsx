import { Metadata } from 'next'
import { generateMetadata as genMeta } from '@/lib/seo/metadata'
import JsonLdScript from '@/components/JsonLdScript'
import { generateArticleSchema, generateBreadcrumbListSchema, generateFAQPageSchema } from '@/lib/seo/jsonLd'
import Breadcrumbs from '@/components/Breadcrumbs'
import Link from 'next/link'

export const revalidate = 86400

export const metadata: Metadata = genMeta({
  title: 'How to Enable Microphone in Safari',
  description: 'Enable microphone access in Safari browser. Step-by-step guide to allow microphone permissions for websites and fix mic access issues on Mac.',
  path: '/guides/how-to-enable-microphone-safari',
  keywords: [
    'enable microphone safari',
    'safari microphone permission',
    'allow microphone safari',
    'safari mic access',
    'microphone settings safari'
  ]
})

const faqs = [
  {
    question: 'How do I enable microphone in Safari?',
    answer: 'Go to Safari → Preferences → Websites → Microphone. Select "Allow" for the website you want to use. You can also click the microphone icon in Safari\'s address bar when a site requests access and select "Allow".'
  },
  {
    question: 'Where are microphone settings in Safari?',
    answer: 'Safari microphone settings are in Safari → Preferences → Websites → Microphone. This shows all websites that have requested microphone access and their current permission status.'
  }
]

export default function HowToEnableMicrophoneSafariPage() {
  const articleSchema = generateArticleSchema(
    'How to Enable Microphone in Safari',
    'Enable microphone access in Safari browser. Step-by-step guide to allow microphone permissions for websites and fix mic access issues on Mac.',
    '/guides/how-to-enable-microphone-safari',
    new Date().toISOString(),
    new Date().toISOString()
  )

  const breadcrumbs = generateBreadcrumbListSchema([
    { name: 'Home', path: '/' },
    { name: 'Guides', path: '/guides' },
    { name: 'How to Enable Microphone in Safari', path: '/guides/how-to-enable-microphone-safari' }
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
            { name: 'How to Enable Microphone in Safari', path: '/guides/how-to-enable-microphone-safari' }
          ]} />
          
          <article className="prose prose-slate max-w-none bg-white p-8 md:p-12 rounded-2xl border border-gray-200">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">How to Enable Microphone in Safari</h1>
            
            <p className="text-lg text-gray-700 mb-8">
              Safari requires permission to access your microphone. This page shows how to enable microphone access for websites on Mac. Follow these steps to allow microphone permissions in Safari.
            </p>

            <p className="text-gray-700 mb-6">
              You can use the <Link href="/mic" className="text-blue-600 hover:text-blue-800">online microphone test</Link> to confirm whether your device is working.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Enable Microphone for a Specific Website</h2>
            <p className="text-gray-700 mb-4">
              Allow microphone access for individual websites using Safari's website preferences.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Click the microphone icon in Safari's address bar when a site requests access</li>
              <li>Select "Allow" from the dropdown menu</li>
              <li>Refresh the page after allowing permission</li>
              <li>The website can now access your microphone</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Enable Microphone in Safari Preferences</h2>
            <p className="text-gray-700 mb-4">
              Configure microphone permissions for all websites through Safari Preferences.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Open Safari → Preferences (or Safari → Settings on newer macOS)</li>
              <li>Go to Websites tab</li>
              <li>Select Microphone from the left sidebar</li>
              <li>Find the website in the list</li>
              <li>Change permission from "Deny" to "Allow"</li>
              <li>Refresh the website after changing permission</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Use Safari Address Bar Icon</h2>
            <p className="text-gray-700 mb-4">
              Safari shows a microphone icon in the address bar when a site requests microphone access.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Look for the microphone icon in the address bar</li>
              <li>Click the icon to see current permission status</li>
              <li>Select "Allow" to grant permission</li>
              <li>Select "Deny" to block permission</li>
              <li>Refresh the page after changing permission</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Check System Microphone Permissions</h2>
            <p className="text-gray-700 mb-4">
              Safari also requires system-level microphone permissions on Mac. Verify these are enabled.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>System Preferences → Security & Privacy → Privacy tab</li>
              <li>Select Microphone from the left sidebar</li>
              <li>Ensure Safari is checked in the list</li>
              <li>If Safari is not listed, click the lock icon and add it</li>
              <li>Restart Safari after changing system permissions</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Troubleshoot Microphone Not Working</h2>
            <p className="text-gray-700 mb-4">
              If microphone still doesn't work after enabling permissions, try these steps.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Close other applications using the microphone</li>
              <li>Restart Safari completely</li>
              <li>Check that the correct microphone is selected in System Preferences → Sound → Input</li>
              <li>Update Safari to the latest version</li>
              <li>Clear Safari cache and cookies for the website</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Test Microphone After Enabling</h2>
            <p className="text-gray-700 mb-6">
              After enabling microphone permissions, use the <Link href="/mic" className="text-blue-600 hover:text-blue-800 font-semibold">online microphone test</Link> to verify access works. The test shows real-time volume levels and confirms your microphone is detected.
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 my-8">
              <h3 className="font-semibold text-blue-900 mb-2">Related Guides</h3>
              <ul className="space-y-2 text-sm text-blue-800">
                <li><Link href="/guides/how-to-enable-microphone-chrome" className="hover:text-blue-600 underline">How to Enable Microphone in Chrome</Link></li>
                <li><Link href="/guides/how-to-enable-microphone-firefox" className="hover:text-blue-600 underline">How to Enable Microphone in Firefox</Link></li>
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
                <strong>Next step:</strong> Test your microphone to confirm Safari can access it.
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

