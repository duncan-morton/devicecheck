import { Metadata } from 'next'
import { generateMetadata as genMeta } from '@/lib/seo/metadata'
import JsonLdScript from '@/components/JsonLdScript'
import { generateArticleSchema, generateBreadcrumbListSchema, generateFAQPageSchema } from '@/lib/seo/jsonLd'
import Breadcrumbs from '@/components/Breadcrumbs'
import Link from 'next/link'

export const revalidate = 86400

export const metadata: Metadata = genMeta({
  title: 'How to Enable Microphone in Chrome',
  description: 'Enable microphone access in Chrome browser. Step-by-step guide to allow microphone permissions for websites and fix mic access issues.',
  path: '/guides/how-to-enable-microphone-chrome',
  keywords: [
    'enable microphone chrome',
    'chrome microphone permission',
    'allow microphone chrome',
    'chrome mic access',
    'microphone settings chrome'
  ]
})

const faqs = [
  {
    question: 'How do I enable microphone in Chrome?',
    answer: 'Click the lock icon in Chrome\'s address bar, then set Microphone to Allow. Alternatively, go to chrome://settings/content/microphone and ensure microphone access is enabled. Refresh the page after changing settings.'
  },
  {
    question: 'Where are microphone settings in Chrome?',
    answer: 'Chrome microphone settings are in chrome://settings/content/microphone. You can also access them by clicking the lock icon in the address bar and selecting Site Settings, then Microphone.'
  },
  {
    question: 'Chrome is asking for microphone permission. Should I allow it?',
    answer: 'Allow microphone permission if you trust the website and need to use microphone features. For device testing sites like ours, allowing permission is safe as audio is processed locally in your browser.'
  }
]

export default function HowToEnableMicrophoneChromePage() {
  const articleSchema = generateArticleSchema(
    'How to Enable Microphone in Chrome',
    'Enable microphone access in Chrome browser. Step-by-step guide to allow microphone permissions for websites and fix mic access issues.',
    '/guides/how-to-enable-microphone-chrome',
    new Date().toISOString(),
    new Date().toISOString()
  )

  const breadcrumbs = generateBreadcrumbListSchema([
    { name: 'Home', path: '/' },
    { name: 'Guides', path: '/guides' },
    { name: 'How to Enable Microphone in Chrome', path: '/guides/how-to-enable-microphone-chrome' }
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
            { name: 'How to Enable Microphone in Chrome', path: '/guides/how-to-enable-microphone-chrome' }
          ]} />
          
          <article className="prose prose-slate max-w-none bg-white p-8 md:p-12 rounded-2xl border border-gray-200">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">How to Enable Microphone in Chrome</h1>
            
            <p className="text-lg text-gray-700 mb-8">
              Chrome requires permission to access your microphone. This page shows how to enable microphone access for websites. Follow these steps to allow microphone permissions in Chrome.
            </p>

            <p className="text-gray-700 mb-6">
              You can use the <Link href="/mic" className="text-blue-600 hover:text-blue-800">online microphone test</Link> to confirm whether your device is working.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Enable Microphone for a Specific Website</h2>
            <p className="text-gray-700 mb-4">
              Allow microphone access for individual websites using Chrome's site settings.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Click the lock icon or camera icon in Chrome's address bar</li>
              <li>Find "Microphone" in the permissions list</li>
              <li>Change the setting from "Block" to "Allow"</li>
              <li>Refresh the page after changing the setting</li>
              <li>The website can now access your microphone</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Enable Microphone Globally in Chrome</h2>
            <p className="text-gray-700 mb-4">
              Configure Chrome to allow microphone access by default, or manage permissions for all sites.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Open Chrome Settings (chrome://settings)</li>
              <li>Go to Privacy and Security → Site Settings</li>
              <li>Click "Microphone"</li>
              <li>Ensure "Sites can ask to use your microphone" is enabled</li>
              <li>Review blocked sites and allow if needed</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Use Chrome Settings URL</h2>
            <p className="text-gray-700 mb-4">
              Access microphone settings directly using Chrome's settings URL.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Type chrome://settings/content/microphone in the address bar</li>
              <li>Press Enter to open microphone settings</li>
              <li>Ensure "Ask before accessing" is enabled</li>
              <li>Review blocked sites and remove if needed</li>
              <li>Return to the website and try again</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Check System Microphone Permissions</h2>
            <p className="text-gray-700 mb-4">
              Chrome also requires system-level microphone permissions. Verify these are enabled.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Windows:</strong> Settings → Privacy → Microphone → Ensure "Allow apps to access your microphone" is enabled</li>
              <li><strong>Mac:</strong> System Preferences → Security & Privacy → Microphone → Check Chrome</li>
              <li>Restart Chrome after changing system permissions</li>
              <li>Test microphone access again</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Troubleshoot Microphone Not Working</h2>
            <p className="text-gray-700 mb-4">
              If microphone still doesn't work after enabling permissions, try these steps. For more detailed troubleshooting, see the guide on <Link href="/guides/microphone-not-working" className="text-blue-600 hover:text-blue-800">microphone not working</Link>.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Close other applications using the microphone</li>
              <li>Restart Chrome completely</li>
              <li>Check that the correct microphone is selected in system settings</li>
              <li>Update Chrome to the latest version</li>
              <li>Clear Chrome cache and cookies for the website</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Test Microphone After Enabling</h2>
            <p className="text-gray-700 mb-6">
              After enabling microphone permissions, use the <Link href="/mic" className="text-blue-600 hover:text-blue-800 font-semibold">online microphone test</Link> to verify access works. The test shows real-time volume levels and confirms your microphone is detected.
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 my-8">
              <h3 className="font-semibold text-blue-900 mb-2">Related Guides</h3>
              <ul className="space-y-2 text-sm text-blue-800">
                <li><Link href="/guides/how-to-enable-microphone-firefox" className="hover:text-blue-600 underline">How to Enable Microphone in Firefox</Link></li>
                <li><Link href="/guides/how-to-enable-microphone-safari" className="hover:text-blue-600 underline">How to Enable Microphone in Safari</Link></li>
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
                <strong>Next step:</strong> Test your microphone to confirm Chrome can access it.
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

