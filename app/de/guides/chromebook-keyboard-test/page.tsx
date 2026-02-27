import { Metadata } from 'next'
import { generateMetadata as genMeta } from '@/lib/seo/metadata'
import JsonLdScript from '@/components/JsonLdScript'
import { generateArticleSchema, generateBreadcrumbListSchema, generateFAQPageSchema } from '@/lib/seo/jsonLd'
import Breadcrumbs from '@/components/Breadcrumbs'
import TOC from '@/components/TOC'
import RelatedGuides from '@/components/RelatedGuides'
import HelpfulWidget from '@/components/HelpfulWidget'
import Link from 'next/link'

export const revalidate = 86400

export const metadata: Metadata = genMeta({
  title: 'Chromebook Keyboard Test, How to Check Your Keyboard',
  description: 'Test your Chromebook keyboard to check all keys work correctly. Use online keyboard test to verify functionality and identify issues.',
  path: '/guides/chromebook-keyboard-test',
  keywords: [
    'chromebook keyboard test',
    'test chromebook keyboard',
    'chromebook keyboard check',
    'chrome os keyboard test'
  ]
})

const faqs = [
  {
    question: 'How do I test my Chromebook keyboard?',
    answer: 'Use the online keyboard test to check all keys work correctly. Press each key and verify it registers. Chromebook keyboards work similarly to standard keyboards, but may have Chrome OS-specific keys like the Search key.'
  }
]

export default function ChromebookKeyboardTestPage() {
  const articleSchema = generateArticleSchema(
    'Chromebook Keyboard Test, How to Check Your Keyboard',
    'Test your Chromebook keyboard to check all keys work correctly. Use online keyboard test to verify functionality and identify issues.',
    '/guides/chromebook-keyboard-test',
    new Date().toISOString(),
    new Date().toISOString()
  )

  const breadcrumbs = generateBreadcrumbListSchema([
    { name: 'Home', path: '/' },
    { name: 'Guides', path: '/guides' },
    { name: 'Chromebook Keyboard Test', path: '/guides/chromebook-keyboard-test' }
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
            { name: 'Chromebook Keyboard Test', path: '/guides/chromebook-keyboard-test' }
          ]} />
          
          <TOC contentId="article-content" />
          
          <article id="article-content" className="prose prose-slate max-w-none bg-white p-8 md:p-12 rounded-2xl border border-gray-200">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Chromebook Keyboard Test</h1>
            
            <p className="text-lg text-gray-700 mb-8">
              Testing your Chromebook keyboard helps identify stuck keys, non-responsive keys, and other issues. This page shows how to test your Chromebook keyboard using online tools. Start with the online keyboard test for the most comprehensive check.
            </p>

            <p className="text-gray-700 mb-6">
              You can verify every key using the <Link href="/keyboard" className="text-blue-600 hover:text-blue-800">keyboard test</Link>.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Use Online Keyboard Test</h2>
            <p className="text-gray-700 mb-4">
              The online keyboard test provides the most thorough keyboard check for Chromebooks.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Open the <Link href="/keyboard" className="text-blue-600 hover:text-blue-800 font-semibold">keyboard test page</Link></li>
              <li>Press each key on your Chromebook keyboard</li>
              <li>Watch for keys that light up or register</li>
              <li>Note any keys that don't respond</li>
              <li>Test modifier keys like Shift, Ctrl, and Alt</li>
              <li>Test the Search key (Chrome OS specific)</li>
              <li>Check function keys and number pad if available</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Test Chrome OS Specific Keys</h2>
            <p className="text-gray-700 mb-4">
              Chromebooks have keys specific to Chrome OS that need testing.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Test the Search key (magnifying glass icon)</li>
              <li>Test brightness keys (usually F6 and F7)</li>
              <li>Test volume keys (usually F8, F9, F10)</li>
              <li>Test back, forward, and refresh keys</li>
              <li>Test fullscreen key if available</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Test in Google Docs</h2>
            <p className="text-gray-700 mb-4">
              Simple text editor can help identify specific key issues.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Open Google Docs</li>
              <li>Type each letter, number, and symbol</li>
              <li>Check that correct characters appear</li>
              <li>Test Shift key combinations</li>
              <li>Verify special characters work</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Check Keyboard Settings</h2>
            <p className="text-gray-700 mb-4">
              Chrome OS keyboard settings can affect functionality.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Open Settings → Device → Keyboard</li>
              <li>Check keyboard layout settings</li>
              <li>Verify modifier key assignments</li>
              <li>Test keyboard after adjusting settings</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Test All Key Types</h2>
            <p className="text-gray-700 mb-4">
              Test different types of keys to ensure comprehensive coverage.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Test letter keys (A-Z)</li>
              <li>Test number keys (0-9)</li>
              <li>Test function keys (F1-F12)</li>
              <li>Test modifier keys (Shift, Ctrl, Alt)</li>
              <li>Test Chrome OS specific keys</li>
              <li>Test arrow keys and navigation keys</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Check for Physical Damage</h2>
            <p className="text-gray-700 mb-4">
              Physical damage can prevent keys from working on Chromebooks.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Inspect keyboard for visible damage</li>
              <li>Check for debris under keys</li>
              <li>Clean keyboard with compressed air</li>
              <li>Test individual keys after cleaning</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Verify Keyboard Works</h2>
            <p className="text-gray-700 mb-6">
              After testing, use the <Link href="/keyboard" className="text-blue-600 hover:text-blue-800 font-semibold">online keyboard test</Link> to verify all keys are working correctly. The test provides visual feedback and helps identify any remaining issues.
            </p>

            <RelatedGuides guides={[
              { title: 'Keyboard Not Working', href: '/guides/keyboard-not-working' },
              { title: 'Keys Not Registering', href: '/guides/keys-not-registering' },
              { title: 'Sticky or Repeating Keys', href: '/guides/sticky-repeating-keys' }
            ]} />

            <p className="text-gray-700 mb-6 mt-8">
              Check your keys with the <Link href="/keyboard" className="text-blue-600 hover:text-blue-800">keyboard test</Link>.
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

            <p className="text-gray-700 mb-6 mt-8">
              Use the <Link href="/keyboard" className="text-blue-600 hover:text-blue-800">online keyboard test</Link> to confirm everything is working.
            </p>
          </article>

          <HelpfulWidget />
        </div>
      </div>
    </>
  )
}

