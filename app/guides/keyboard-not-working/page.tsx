import { Metadata } from 'next'
import { generateMetadata as genMeta } from '@/lib/seo/metadata'
import JsonLdScript from '@/components/JsonLdScript'
import { generateArticleSchema, generateBreadcrumbListSchema, generateFAQPageSchema } from '@/lib/seo/jsonLd'
import Breadcrumbs from '@/components/Breadcrumbs'
import Link from 'next/link'

export const revalidate = 86400

export const metadata: Metadata = genMeta({
  title: 'Keyboard Not Working, Quick Fix Guide',
  description: 'Fix a keyboard that is not working. Follow these quick checks to confirm device detection, connections, and software issues.',
  path: '/guides/keyboard-not-working',
  keywords: [
    'keyboard not working',
    'keyboard not responding',
    'keyboard fix',
    'keyboard troubleshooting',
    'keys not working'
  ]
})

const faqs = [
  {
    question: 'Why is my keyboard not working?',
    answer: 'Keyboard issues are usually caused by loose connections, driver problems, or software conflicts. Check USB connections first, then verify drivers and test with the online keyboard test to identify which keys are affected.'
  },
  {
    question: 'How do I fix keyboard not working on Windows?',
    answer: 'Check USB connections, update keyboard drivers in Device Manager, and restart your computer. If specific keys don\'t work, use the online keyboard test to identify the problem. Check for physical damage or debris under keys.'
  }
]

export default function KeyboardNotWorkingPage() {
  const articleSchema = generateArticleSchema(
    'Keyboard Not Working, Quick Fix Guide',
    'Fix a keyboard that is not working. Follow these quick checks to confirm device detection, connections, and software issues.',
    '/guides/keyboard-not-working',
    new Date().toISOString(),
    new Date().toISOString()
  )

  const breadcrumbs = generateBreadcrumbListSchema([
    { name: 'Home', path: '/' },
    { name: 'Guides', path: '/guides' },
    { name: 'Keyboard Not Working', path: '/guides/keyboard-not-working' }
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
            { name: 'Keyboard Not Working', path: '/guides/keyboard-not-working' }
          ]} />
          
          <article className="prose prose-slate max-w-none bg-white p-8 md:p-12 rounded-2xl border border-gray-200">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Keyboard Not Working</h1>
            
            <p className="text-lg text-gray-700 mb-8">
              A keyboard that stops working prevents typing and input. This page covers the most common causes and fixes. Start with physical connections, then check drivers and software settings.
            </p>

            <p className="text-gray-700 mb-6">
              You can verify every key using the <Link href="/keyboard" className="text-blue-600 hover:text-blue-800">keyboard test</Link>.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Check Physical Connections</h2>
            <p className="text-gray-700 mb-4">
              Loose or damaged connections are the most common cause of keyboard issues. Verify connections.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Unplug and firmly reconnect USB keyboards</li>
              <li>Try a different USB port</li>
              <li>Check for visible damage to USB cables or connectors</li>
              <li>For wireless keyboards, check battery level and reconnect</li>
              <li>Test with a different keyboard if available</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Test Keyboard Online</h2>
            <p className="text-gray-700 mb-4">
              Use an online keyboard test to identify which keys are affected.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Open the <Link href="/keyboard" className="text-blue-600 hover:text-blue-800 font-semibold">keyboard test page</Link></li>
              <li>Press each key to see which ones respond</li>
              <li>Note which keys don't register</li>
              <li>This helps identify if it's a specific key or entire keyboard issue</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Update Keyboard Drivers</h2>
            <p className="text-gray-700 mb-4">
              Outdated or corrupted keyboard drivers can prevent keyboard detection.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Windows:</strong> Device Manager → Keyboards → Right-click keyboard → Update driver</li>
              <li><strong>Mac:</strong> System Preferences → Software Update → Install available updates</li>
              <li>Restart your computer after updating drivers</li>
              <li>Test keyboard again</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Check for Physical Damage</h2>
            <p className="text-gray-700 mb-4">
              Physical damage or debris can prevent keys from working. If specific keys aren't registering, see the guide on <Link href="/guides/keys-not-registering" className="text-blue-600 hover:text-blue-800">keys not registering</Link> for detailed troubleshooting.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Inspect keyboard for visible damage</li>
              <li>Check for debris or liquid under keys</li>
              <li>Clean keyboard with compressed air</li>
              <li>Remove stuck keys carefully if needed</li>
              <li>Test individual keys after cleaning</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Check Sticky Keys or Filter Keys</h2>
            <p className="text-gray-700 mb-4">
              Windows accessibility features can interfere with keyboard input.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Windows:</strong> Settings → Ease of Access → Keyboard</li>
              <li>Disable Sticky Keys if enabled</li>
              <li>Disable Filter Keys if enabled</li>
              <li>Test keyboard after disabling these features</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Restart Computer</h2>
            <p className="text-gray-700 mb-4">
              Software glitches can prevent keyboard input. Restart to reset system.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Save any open work</li>
              <li>Restart your computer completely</li>
              <li>Test keyboard after restart</li>
              <li>If issue persists, check hardware connections</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Verify Keyboard Works</h2>
            <p className="text-gray-700 mb-6">
              After trying these steps, use the <Link href="/keyboard" className="text-blue-600 hover:text-blue-800 font-semibold">online keyboard test</Link> to verify all keys are working. The test shows which keys register and helps identify remaining issues.
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 my-8">
              <h3 className="font-semibold text-blue-900 mb-2">Related Guides</h3>
              <ul className="space-y-2 text-sm text-blue-800">
                <li><Link href="/guides/keys-not-registering" className="hover:text-blue-600 underline">Keys Not Registering</Link></li>
                <li><Link href="/guides/sticky-repeating-keys" className="hover:text-blue-600 underline">Sticky or Repeating Keys</Link></li>
                <li><Link href="/guides/keyboard-ghosting-explained" className="hover:text-blue-600 underline">Keyboard Ghosting Explained</Link></li>
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
                <strong>Next step:</strong> Test your keyboard to confirm all keys are working.
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

