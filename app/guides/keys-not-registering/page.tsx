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
  title: 'Keys Not Registering, How to Fix',
  description: 'Fix keyboard keys that are not registering when pressed. Troubleshoot stuck keys, debris, and hardware issues.',
  path: '/guides/keys-not-registering',
  keywords: [
    'keys not registering',
    'keyboard keys not working',
    'keys not responding',
    'keyboard input not working'
  ]
})

const faqs = [
  {
    question: 'Why are my keyboard keys not registering?',
    answer: 'Keys not registering are usually caused by debris under keys, worn key switches, or connection issues. Clean the keyboard with compressed air, check for physical damage, and test individual keys using the online keyboard test.'
  }
]

export default function KeysNotRegisteringPage() {
  const articleSchema = generateArticleSchema(
    'Keys Not Registering, How to Fix',
    'Fix keyboard keys that are not registering when pressed. Troubleshoot stuck keys, debris, and hardware issues.',
    '/guides/keys-not-registering',
    new Date().toISOString(),
    new Date().toISOString()
  )

  const breadcrumbs = generateBreadcrumbListSchema([
    { name: 'Home', path: '/' },
    { name: 'Guides', path: '/guides' },
    { name: 'Keys Not Registering', path: '/guides/keys-not-registering' }
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
            { name: 'Keys Not Registering', path: '/guides/keys-not-registering' }
          ]} />
          
          <TOC contentId="article-content" />
          
          <article id="article-content" className="prose prose-slate max-w-none bg-white p-8 md:p-12 rounded-2xl border border-gray-200">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Keys Not Registering</h1>
            
            <p className="text-lg text-gray-700 mb-8">
              Keys that don't register when pressed prevent typing and input. This page covers how to fix keys that aren't registering. Start by identifying which keys are affected, then clean and test the keyboard.
            </p>

            <p className="text-gray-700 mb-6">
              You can verify every key using the <Link href="/keyboard" className="text-blue-600 hover:text-blue-800">keyboard test</Link>.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Test Which Keys Are Affected</h2>
            <p className="text-gray-700 mb-4">
              Use an online keyboard test to identify which specific keys aren't registering.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Open the <Link href="/keyboard" className="text-blue-600 hover:text-blue-800 font-semibold">keyboard test page</Link></li>
              <li>Press each key systematically</li>
              <li>Note which keys don't light up or register</li>
              <li>Check if it's specific keys or a pattern</li>
              <li>This helps determine if it's hardware or software</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Clean Keyboard</h2>
            <p className="text-gray-700 mb-4">
              Debris under keys is a common cause of keys not registering. Clean the keyboard.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Turn keyboard upside down and shake gently</li>
              <li>Use compressed air to blow out debris</li>
              <li>Clean around affected keys with a soft brush</li>
              <li>Remove stuck keys carefully if needed</li>
              <li>Test keys after cleaning</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Check for Physical Damage</h2>
            <p className="text-gray-700 mb-4">
              Physical damage to key switches can prevent keys from registering. If keys are stuck or repeating, see the guide on <Link href="/guides/sticky-repeating-keys" className="text-blue-600 hover:text-blue-800">sticky or repeating keys</Link> for specific solutions.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Inspect affected keys for visible damage</li>
              <li>Check if key caps are properly seated</li>
              <li>Look for broken or bent key switches</li>
              <li>Test if keys feel different when pressed</li>
              <li>Mechanical keyboards may need switch replacement</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Check Keyboard Connection</h2>
            <p className="text-gray-700 mb-4">
              Loose connections can cause intermittent key registration issues.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Unplug and reconnect USB keyboards</li>
              <li>Try a different USB port</li>
              <li>Check USB cable for damage</li>
              <li>For wireless keyboards, check battery and reconnect</li>
              <li>Test keyboard after reconnecting</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Update Keyboard Drivers</h2>
            <p className="text-gray-700 mb-4">
              Outdated drivers can cause key registration problems. Update drivers.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Windows:</strong> Device Manager → Keyboards → Right-click keyboard → Update driver</li>
              <li>Restart computer after updating</li>
              <li>Test keys again</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Test Keyboard After Fixes</h2>
            <p className="text-gray-700 mb-6">
              After trying these steps, use the <Link href="/keyboard" className="text-blue-600 hover:text-blue-800 font-semibold">online keyboard test</Link> to verify keys are registering. The test shows which keys respond and helps identify any remaining issues.
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

