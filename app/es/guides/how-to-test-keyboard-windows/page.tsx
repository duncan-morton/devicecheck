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
  title: 'How to Test Keyboard on Windows',
  description: 'Test your keyboard on Windows to check all keys work correctly. Use online keyboard test or Windows built-in tools to verify functionality.',
  path: '/guides/how-to-test-keyboard-windows',
  keywords: [
    'test keyboard windows',
    'keyboard test windows',
    'windows keyboard check',
    'test keyboard online windows'
  ]
})

const faqs = [
  {
    question: 'How do I test my keyboard on Windows?',
    answer: 'Use the online keyboard test to check all keys work correctly. Press each key and verify it registers. You can also use Windows On-Screen Keyboard to test individual keys, or check Device Manager to verify keyboard detection.'
  }
]

export default function HowToTestKeyboardWindowsPage() {
  const articleSchema = generateArticleSchema(
    'How to Test Keyboard on Windows',
    'Test your keyboard on Windows to check all keys work correctly. Use online keyboard test or Windows built-in tools to verify functionality.',
    '/guides/how-to-test-keyboard-windows',
    new Date().toISOString(),
    new Date().toISOString()
  )

  const breadcrumbs = generateBreadcrumbListSchema([
    { name: 'Home', path: '/' },
    { name: 'Guides', path: '/guides' },
    { name: 'How to Test Keyboard on Windows', path: '/guides/how-to-test-keyboard-windows' }
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
            { name: 'How to Test Keyboard on Windows', path: '/guides/how-to-test-keyboard-windows' }
          ]} />
          
          <TOC contentId="article-content" />
          
          <article id="article-content" className="prose prose-slate max-w-none bg-white p-8 md:p-12 rounded-2xl border border-gray-200">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">How to Test Keyboard on Windows</h1>
            
            <p className="text-lg text-gray-700 mb-8">
              Testing your keyboard on Windows helps identify stuck keys, non-responsive keys, and other issues. This page shows how to test your keyboard using online tools and Windows built-in features. Start with the online keyboard test for the most comprehensive check.
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
              <li>Test modifier keys like Shift, Ctrl, and Alt</li>
              <li>Check function keys and number pad if available</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Use Windows On-Screen Keyboard</h2>
            <p className="text-gray-700 mb-4">
              Windows includes an on-screen keyboard that can help test physical keyboard input.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Press Windows key + R to open Run dialog</li>
              <li>Type "osk" and press Enter</li>
              <li>On-screen keyboard appears</li>
              <li>Press physical keys and watch on-screen keyboard</li>
              <li>Keys that don't highlight indicate problems</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Check Device Manager</h2>
            <p className="text-gray-700 mb-4">
              Verify Windows detects your keyboard in Device Manager. If your keyboard isn't working at all, see the guide on <Link href="/guides/keyboard-not-working" className="text-blue-600 hover:text-blue-800">keyboard not working</Link> for comprehensive troubleshooting.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Press Windows key + X</li>
              <li>Select Device Manager</li>
              <li>Expand "Keyboards" section</li>
              <li>Check that your keyboard appears in the list</li>
              <li>If it shows a warning icon, right-click and update driver</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Test in Notepad</h2>
            <p className="text-gray-700 mb-4">
              Simple text editor can help identify specific key issues.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Open Notepad</li>
              <li>Type each letter, number, and symbol</li>
              <li>Check that correct characters appear</li>
              <li>Test Shift key combinations</li>
              <li>Verify special characters work</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Check Keyboard Settings</h2>
            <p className="text-gray-700 mb-4">
              Windows keyboard settings can affect functionality.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Open Settings → Ease of Access → Keyboard</li>
              <li>Check Sticky Keys and Filter Keys settings</li>
              <li>Disable these if they interfere with testing</li>
              <li>Verify repeat delay and repeat rate settings</li>
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
              <li>Test modifier keys (Shift, Ctrl, Alt, Windows)</li>
              <li>Test number pad if available</li>
              <li>Test arrow keys and navigation keys</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Verify Keyboard Works</h2>
            <p className="text-gray-700 mb-6">
              After testing, use the <Link href="/keyboard" className="text-blue-600 hover:text-blue-800 font-semibold">online keyboard test</Link> to verify all keys are working correctly. The test provides visual feedback and helps identify any remaining issues.
            </p>

            <RelatedGuides guides={[
              { title: 'How to Test Keyboard on Mac', href: '/guides/how-to-test-keyboard-mac' },
              { title: 'Keyboard Not Working', href: '/guides/keyboard-not-working' },
              { title: 'Keys Not Registering', href: '/guides/keys-not-registering' }
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

