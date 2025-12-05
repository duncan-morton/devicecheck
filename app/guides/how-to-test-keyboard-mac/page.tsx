import { Metadata } from 'next'
import { generateMetadata as genMeta } from '@/lib/seo/metadata'
import { JsonLdScript } from '@/components/JsonLdScript'
import { generateArticleSchema, generateBreadcrumbListSchema, generateFAQPageSchema } from '@/lib/seo/jsonLd'
import Breadcrumbs from '@/components/Breadcrumbs'
import Link from 'next/link'

export const revalidate = 86400

export const metadata: Metadata = genMeta({
  title: 'How to Test Keyboard on Mac',
  description: 'Test your keyboard on Mac to check all keys work correctly. Use online keyboard test or macOS built-in tools to verify functionality.',
  path: '/guides/how-to-test-keyboard-mac',
  keywords: [
    'test keyboard mac',
    'keyboard test mac',
    'mac keyboard check',
    'test keyboard online mac'
  ]
})

const faqs = [
  {
    question: 'How do I test my keyboard on Mac?',
    answer: 'Use the online keyboard test to check all keys work correctly. Press each key and verify it registers. You can also use TextEdit to test typing, or check System Preferences to verify keyboard detection and settings.'
  }
]

export default function HowToTestKeyboardMacPage() {
  const articleSchema = generateArticleSchema(
    'How to Test Keyboard on Mac',
    'Test your keyboard on Mac to check all keys work correctly. Use online keyboard test or macOS built-in tools to verify functionality.',
    '/guides/how-to-test-keyboard-mac',
    new Date().toISOString(),
    new Date().toISOString()
  )

  const breadcrumbs = generateBreadcrumbListSchema([
    { name: 'Home', path: '/' },
    { name: 'Guides', path: '/guides' },
    { name: 'How to Test Keyboard on Mac', path: '/guides/how-to-test-keyboard-mac' }
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
            { name: 'How to Test Keyboard on Mac', path: '/guides/how-to-test-keyboard-mac' }
          ]} />
          
          <article className="prose prose-slate max-w-none bg-white p-8 md:p-12 rounded-2xl border border-gray-200">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">How to Test Keyboard on Mac</h1>
            
            <p className="text-lg text-gray-700 mb-8">
              Testing your keyboard on Mac helps identify stuck keys, non-responsive keys, and other issues. This page shows how to test your keyboard using online tools and macOS built-in features. Start with the online keyboard test for the most comprehensive check.
            </p>

            <p className="text-gray-700 mb-6">
              You can verify every key using the <Link href="/keyboard" className="text-blue-600 hover:text-blue-800">keyboard test</Link>.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Use Online Keyboard Test</h2>
            <p className="text-gray-700 mb-4">
              The online keyboard test provides the most thorough keyboard check.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Open the <Link href="/keyboard" className="text-blue-600 hover:text-blue-800 font-semibold">keyboard test page</Link></li>
              <li>Press each key on your keyboard</li>
              <li>Watch for keys that light up or register</li>
              <li>Note any keys that don't respond</li>
              <li>Test modifier keys like Shift, Control, Option, and Command</li>
              <li>Check function keys and number pad if available</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Test in TextEdit</h2>
            <p className="text-gray-700 mb-4">
              Simple text editor can help identify specific key issues.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Open TextEdit</li>
              <li>Type each letter, number, and symbol</li>
              <li>Check that correct characters appear</li>
              <li>Test Shift key combinations</li>
              <li>Verify special characters work</li>
              <li>Test Command key shortcuts</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Check System Preferences</h2>
            <p className="text-gray-700 mb-4">
              Verify keyboard settings in System Preferences. If your keyboard isn't working at all, see the guide on <Link href="/guides/keyboard-not-working" className="text-blue-600 hover:text-blue-800">keyboard not working</Link> for comprehensive troubleshooting.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Open System Preferences → Keyboard</li>
              <li>Check that keyboard is detected</li>
              <li>Verify key repeat and delay settings</li>
              <li>Test modifier key assignments</li>
              <li>Check function key behavior settings</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Use Keyboard Viewer</h2>
            <p className="text-gray-700 mb-4">
              macOS includes a keyboard viewer that shows key layout.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Open System Preferences → Keyboard</li>
              <li>Check "Show keyboard and emoji viewers in menu bar"</li>
              <li>Click the keyboard icon in menu bar</li>
              <li>Select "Show Keyboard Viewer"</li>
              <li>Press physical keys and watch on-screen keyboard</li>
              <li>Keys that don't highlight indicate problems</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Test All Key Types</h2>
            <p className="text-gray-700 mb-4">
              Test different types of keys to ensure comprehensive coverage.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Test letter keys (A-Z)</li>
              <li>Test number keys (0-9)</li>
              <li>Test function keys (F1-F12)</li>
              <li>Test modifier keys (Shift, Control, Option, Command)</li>
              <li>Test number pad if available</li>
              <li>Test arrow keys and navigation keys</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Check for Sticky Keys</h2>
            <p className="text-gray-700 mb-4">
              Sticky keys can interfere with keyboard testing.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Open System Preferences → Accessibility → Keyboard</li>
              <li>Check Sticky Keys settings</li>
              <li>Disable if it interferes with testing</li>
              <li>Test keyboard after adjusting settings</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Verify Keyboard Works</h2>
            <p className="text-gray-700 mb-6">
              After testing, use the <Link href="/keyboard" className="text-blue-600 hover:text-blue-800 font-semibold">online keyboard test</Link> to verify all keys are working correctly. The test provides visual feedback and helps identify any remaining issues.
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 my-8">
              <h3 className="font-semibold text-blue-900 mb-2">Related Guides</h3>
              <ul className="space-y-2 text-sm text-blue-800">
                <li><Link href="/guides/how-to-test-keyboard-windows" className="hover:text-blue-600 underline">How to Test Keyboard on Windows</Link></li>
                <li><Link href="/guides/keyboard-not-working" className="hover:text-blue-600 underline">Keyboard Not Working</Link></li>
                <li><Link href="/guides/keys-not-registering" className="hover:text-blue-600 underline">Keys Not Registering</Link></li>
              </ul>
            </div>

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

            <div className="mt-8 p-6 bg-gray-50 rounded-xl border border-gray-200">
              <p className="text-gray-700 mb-4">
                <strong>Next step:</strong> Test your keyboard to verify all keys work on Mac.
              </p>
              <Link 
                href="/keyboard" 
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Run Keyboard Test →
              </Link>
            </div>
          </article>
        </div>
      </div>
    </>
  )
}

