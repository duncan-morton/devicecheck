import { Metadata } from 'next'
import { generateMetadata as genMeta } from '@/lib/seo/metadata'
import JsonLdScript from '@/components/JsonLdScript'
import { generateArticleSchema, generateBreadcrumbListSchema, generateFAQPageSchema } from '@/lib/seo/jsonLd'
import Breadcrumbs from '@/components/Breadcrumbs'
import Link from 'next/link'

export const revalidate = 86400

export const metadata: Metadata = genMeta({
  title: 'Keyboard Ghosting Explained, What It Is and How to Test',
  description: 'Learn what keyboard ghosting is and how to test for it. Understand why some key combinations don\'t register and how to identify ghosting issues.',
  path: '/guides/keyboard-ghosting-explained',
  keywords: [
    'keyboard ghosting',
    'what is keyboard ghosting',
    'keyboard ghosting test',
    'key ghosting',
    'keyboard rollover'
  ]
})

const faqs = [
  {
    question: 'What is keyboard ghosting?',
    answer: 'Keyboard ghosting occurs when pressing multiple keys simultaneously causes some keys to not register. This happens because keyboards have limited key rollover capabilities, meaning they can only detect a certain number of keys pressed at once.'
  },
  {
    question: 'How do I test for keyboard ghosting?',
    answer: 'Use the online keyboard test and press multiple keys simultaneously. Try common gaming combinations like WASD plus Shift and Ctrl. If some keys don\'t register when pressed together, your keyboard has ghosting issues.'
  },
  {
    question: 'How do I fix keyboard ghosting?',
    answer: 'You can\'t fix ghosting on most keyboards as it\'s a hardware limitation. To avoid ghosting, use a keyboard with N-key rollover (NKRO) or at least 6-key rollover. Mechanical keyboards often have better rollover capabilities than membrane keyboards.'
  }
]

export default function KeyboardGhostingExplainedPage() {
  const articleSchema = generateArticleSchema(
    'Keyboard Ghosting Explained, What It Is and How to Test',
    'Learn what keyboard ghosting is and how to test for it. Understand why some key combinations don\'t register and how to identify ghosting issues.',
    '/guides/keyboard-ghosting-explained',
    new Date().toISOString(),
    new Date().toISOString()
  )

  const breadcrumbs = generateBreadcrumbListSchema([
    { name: 'Home', path: '/' },
    { name: 'Guides', path: '/guides' },
    { name: 'Keyboard Ghosting Explained', path: '/guides/keyboard-ghosting-explained' }
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
            { name: 'Keyboard Ghosting Explained', path: '/guides/keyboard-ghosting-explained' }
          ]} />
          
          <article className="prose prose-slate max-w-none bg-white p-8 md:p-12 rounded-2xl border border-gray-200">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Keyboard Ghosting Explained</h1>
            
            <p className="text-lg text-gray-700 mb-8">
              Keyboard ghosting occurs when pressing multiple keys simultaneously causes some keys to not register. This page explains what keyboard ghosting is, why it happens, and how to test for it. Understanding ghosting helps you choose keyboards that meet your needs.
            </p>

            <p className="text-gray-700 mb-6">
              You can verify every key using the <Link href="/keyboard" className="text-blue-600 hover:text-blue-800">keyboard test</Link>.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What Is Keyboard Ghosting</h2>
            <p className="text-gray-700 mb-4">
              Keyboard ghosting happens when a keyboard cannot detect all keys pressed simultaneously.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Pressing multiple keys at once may cause some keys not to register</li>
              <li>This is a hardware limitation, not a software issue</li>
              <li>Most keyboards have limited key rollover capabilities</li>
              <li>Ghosting affects gaming and fast typing scenarios</li>
              <li>Some key combinations are more likely to ghost than others</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Why Keyboard Ghosting Happens</h2>
            <p className="text-gray-700 mb-4">
              Ghosting occurs due to how keyboards are wired internally.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Keyboards use a matrix of rows and columns to detect key presses</li>
              <li>Pressing certain key combinations creates electrical conflicts</li>
              <li>These conflicts prevent some keys from being detected</li>
              <li>Budget keyboards often have more ghosting issues</li>
              <li>Mechanical keyboards typically have better rollover</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Test for Keyboard Ghosting</h2>
            <p className="text-gray-700 mb-4">
              Use an online keyboard test to check for ghosting issues.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Open the <Link href="/keyboard" className="text-blue-600 hover:text-blue-800 font-semibold">keyboard test page</Link></li>
              <li>Press multiple keys simultaneously</li>
              <li>Try common gaming combinations like WASD plus modifiers</li>
              <li>Watch for keys that don't register when pressed together</li>
              <li>Test different key combinations to identify ghosting patterns</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Key Rollover Types</h2>
            <p className="text-gray-700 mb-4">
              Keyboards have different rollover capabilities that affect ghosting.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>2-key rollover:</strong> Can detect 2 keys at once</li>
              <li><strong>6-key rollover:</strong> Can detect 6 keys at once</li>
              <li><strong>N-key rollover (NKRO):</strong> Can detect unlimited keys simultaneously</li>
              <li>NKRO keyboards eliminate ghosting completely</li>
              <li>USB NKRO is preferred for gaming keyboards</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Common Ghosting Scenarios</h2>
            <p className="text-gray-700 mb-4">
              Certain key combinations are more likely to cause ghosting.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Gaming combinations like WASD plus Shift and Ctrl</li>
              <li>Typing shortcuts with multiple modifier keys</li>
              <li>Diagonal key combinations</li>
              <li>Keys in the same row or column</li>
              <li>Test your specific use cases to identify issues</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How to Avoid Ghosting</h2>
            <p className="text-gray-700 mb-4">
              Choose keyboards with better rollover capabilities to avoid ghosting.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Look for keyboards with N-key rollover (NKRO)</li>
              <li>Mechanical keyboards often have better rollover</li>
              <li>Check keyboard specifications before purchasing</li>
              <li>Test keyboards before buying if possible</li>
              <li>Gaming keyboards typically have better rollover</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Test Your Keyboard for Ghosting</h2>
            <p className="text-gray-700 mb-6">
              Use the <Link href="/keyboard" className="text-blue-600 hover:text-blue-800 font-semibold">online keyboard test</Link> to check for ghosting issues. Press multiple keys simultaneously and watch for keys that don't register. This helps you understand your keyboard's limitations.
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 my-8">
              <h3 className="font-semibold text-blue-900 mb-2">Related Guides</h3>
              <ul className="space-y-2 text-sm text-blue-800">
                <li><Link href="/guides/keyboard-not-working" className="hover:text-blue-600 underline">Keyboard Not Working</Link></li>
                <li><Link href="/guides/keys-not-registering" className="hover:text-blue-600 underline">Keys Not Registering</Link></li>
                <li><Link href="/guides/mechanical-keyboard-switch-test" className="hover:text-blue-600 underline">Mechanical Keyboard Switch Test</Link></li>
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
                <strong>Next step:</strong> Test your keyboard for ghosting issues.
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

