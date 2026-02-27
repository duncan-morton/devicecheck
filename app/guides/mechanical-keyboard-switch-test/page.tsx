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
  title: 'Mechanical Keyboard Switch Test, How to Check Switches',
  description: 'Test mechanical keyboard switches to verify they work correctly. Identify faulty switches, test actuation, and check switch consistency.',
  path: '/guides/mechanical-keyboard-switch-test',
  keywords: [
    'mechanical keyboard switch test',
    'test keyboard switches',
    'keyboard switch check',
    'mechanical switch test'
  ]
})

const faqs = [
  {
    question: 'How do I test mechanical keyboard switches?',
    answer: 'Use the online keyboard test to press each key and verify switches register correctly. Check for consistent actuation force, listen for switch sounds, and identify any switches that don\'t respond or feel different from others.'
  },
  {
    question: 'What does it mean if a mechanical switch doesn\'t work?',
    answer: 'A non-working mechanical switch could be caused by debris, worn contacts, or a faulty switch. Clean the switch first, then test again. If it still doesn\'t work, the switch may need replacement.'
  }
]

export default function MechanicalKeyboardSwitchTestPage() {
  const articleSchema = generateArticleSchema(
    'Mechanical Keyboard Switch Test, How to Check Switches',
    'Test mechanical keyboard switches to verify they work correctly. Identify faulty switches, test actuation, and check switch consistency.',
    '/guides/mechanical-keyboard-switch-test',
    new Date().toISOString(),
    new Date().toISOString()
  )

  const breadcrumbs = generateBreadcrumbListSchema([
    { name: 'Home', path: '/' },
    { name: 'Guides', path: '/guides' },
    { name: 'Mechanical Keyboard Switch Test', path: '/guides/mechanical-keyboard-switch-test' }
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
            { name: 'Mechanical Keyboard Switch Test', path: '/guides/mechanical-keyboard-switch-test' }
          ]} />
          
          <TOC contentId="article-content" />
          
          <article id="article-content" className="prose prose-slate max-w-none bg-white p-8 md:p-12 rounded-2xl border border-gray-200">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Mechanical Keyboard Switch Test</h1>
            
            <p className="text-lg text-gray-700 mb-8">
              Testing mechanical keyboard switches helps identify faulty switches, inconsistent actuation, and other issues. This page shows how to test mechanical keyboard switches using online tools and physical inspection. Start with the online keyboard test to check switch functionality.
            </p>

            <p className="text-gray-700 mb-6">
              You can verify every key using the <Link href="/keyboard" className="text-blue-600 hover:text-blue-800">keyboard test</Link>.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Use Online Keyboard Test</h2>
            <p className="text-gray-700 mb-4">
              The online keyboard test provides the most thorough switch functionality check.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Open the <Link href="/keyboard" className="text-blue-600 hover:text-blue-800 font-semibold">keyboard test page</Link></li>
              <li>Press each key systematically</li>
              <li>Watch for keys that light up or register</li>
              <li>Note any switches that don't respond</li>
              <li>Test modifier keys and function keys</li>
              <li>Check for consistent response across all switches</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Test Actuation Force</h2>
            <p className="text-gray-700 mb-4">
              Mechanical switches should have consistent actuation force. Test for consistency.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Press each key and note the force required</li>
              <li>Compare force across similar keys</li>
              <li>Switches that require more or less force may be faulty</li>
              <li>Linear switches should feel consistent</li>
              <li>Tactile switches should have consistent bump feel</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Listen for Switch Sounds</h2>
            <p className="text-gray-700 mb-4">
              Mechanical switches produce sounds that can indicate switch condition. For more information on keyboard limitations, see the guide on <Link href="/guides/keyboard-ghosting-explained" className="text-blue-600 hover:text-blue-800">keyboard ghosting explained</Link>.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Press each key and listen for click sounds</li>
              <li>Click switches should produce consistent clicks</li>
              <li>Switches that sound different may be faulty</li>
              <li>Check for rattling or unusual sounds</li>
              <li>Compare sounds across similar switches</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Test Switch Consistency</h2>
            <p className="text-gray-700 mb-4">
              All switches of the same type should feel and sound consistent.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Test multiple keys with the same switch type</li>
              <li>Compare actuation force and feel</li>
              <li>Check for switches that feel different</li>
              <li>Inconsistent switches may need replacement</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Check for Sticky Switches</h2>
            <p className="text-gray-700 mb-4">
              Sticky switches don't return to their original position properly.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Press each key and release</li>
              <li>Check that keys return to original position</li>
              <li>Sticky switches may need cleaning</li>
              <li>Remove key caps and clean switch mechanisms</li>
              <li>Test switches after cleaning</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Test Switch Response Time</h2>
            <p className="text-gray-700 mb-4">
              Mechanical switches should respond immediately when pressed.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Press keys quickly in sequence</li>
              <li>Check that all presses register</li>
              <li>Switches that don't register may be faulty</li>
              <li>Test with the online keyboard test for visual feedback</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Verify Switch Functionality</h2>
            <p className="text-gray-700 mb-6">
              After testing, use the <Link href="/keyboard" className="text-blue-600 hover:text-blue-800 font-semibold">online keyboard test</Link> to verify all switches are working correctly. The test provides visual feedback and helps identify any switches that need attention.
            </p>

            <RelatedGuides guides={[
              { title: 'Keyboard Not Working', href: '/guides/keyboard-not-working' },
              { title: 'Sticky or Repeating Keys', href: '/guides/sticky-repeating-keys' },
              { title: 'Keyboard Ghosting Explained', href: '/guides/keyboard-ghosting-explained' }
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

