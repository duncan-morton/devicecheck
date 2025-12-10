import { Metadata } from 'next'
import { generateMetadata as genMeta } from '@/lib/seo/metadata'
import JsonLdScript from '@/components/JsonLdScript'
import { generateArticleSchema, generateBreadcrumbListSchema, generateFAQPageSchema } from '@/lib/seo/jsonLd'
import Breadcrumbs from '@/components/Breadcrumbs'
import TOC from '@/components/TOC'
import RelatedGuides from '@/components/RelatedGuides'
import HelpfulWidget from '@/components/HelpfulWidget'
import DeviceNavigation from '@/components/DeviceNavigation'
import StickyActionBar from '@/components/StickyActionBar'
import Link from 'next/link'

export const revalidate = 86400

export const metadata: Metadata = genMeta({
  title: 'Sticky or Repeating Keys, How to Fix',
  description: 'Fix keyboard keys that stick or repeat when pressed. Clean keyboard, check for debris, and troubleshoot mechanical issues.',
  path: '/guides/sticky-repeating-keys',
  keywords: [
    'sticky keys',
    'repeating keys',
    'keyboard keys sticking',
    'keys repeating',
    'keyboard stuck keys'
  ]
})

const faqs = [
  {
    question: 'Why are my keyboard keys sticking?',
    answer: 'Sticky keys are usually caused by debris under keys, spilled liquids, or worn key switches. Clean the keyboard with compressed air, remove stuck keys carefully, and check for physical damage. For mechanical keyboards, switches may need replacement.'
  },
  {
    question: 'How do I fix keys that keep repeating?',
    answer: 'Keys that repeat are often caused by debris preventing proper key release, worn switches, or software settings. Clean under the affected keys, check keyboard repeat rate settings, and test with the online keyboard test to identify the problem.'
  }
]

export default function StickyRepeatingKeysPage() {
  const articleSchema = generateArticleSchema(
    'Sticky or Repeating Keys, How to Fix',
    'Fix keyboard keys that stick or repeat when pressed. Clean keyboard, check for debris, and troubleshoot mechanical issues.',
    '/guides/sticky-repeating-keys',
    new Date().toISOString(),
    new Date().toISOString()
  )

  const breadcrumbs = generateBreadcrumbListSchema([
    { name: 'Home', path: '/' },
    { name: 'Guides', path: '/guides' },
    { name: 'Sticky or Repeating Keys', path: '/guides/sticky-repeating-keys' }
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
            { name: 'Sticky or Repeating Keys', path: '/guides/sticky-repeating-keys' }
          ]} />
          
          <TOC contentId="article-content" />
          
          <article id="article-content" className="prose prose-slate max-w-none bg-white p-8 md:p-12 rounded-2xl border border-gray-200">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Sticky or Repeating Keys</h1>
            
            <p className="text-lg text-gray-700 mb-8">
              Keys that stick or repeat when pressed make typing difficult and cause input errors. This page covers how to fix sticky or repeating keys. Start by identifying which keys are affected, then clean and test the keyboard.
            </p>

            <p className="text-gray-700 mb-6">
              You can verify every key using the <Link href="/keyboard" className="text-blue-600 hover:text-blue-800">keyboard test</Link>.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Identify Affected Keys</h2>
            <p className="text-gray-700 mb-4">
              Use an online keyboard test to identify which keys are sticking or repeating.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Open the <Link href="/keyboard" className="text-blue-600 hover:text-blue-800 font-semibold">keyboard test page</Link></li>
              <li>Press each key and release</li>
              <li>Watch for keys that stay highlighted</li>
              <li>Note keys that register multiple times</li>
              <li>Identify all affected keys</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Clean Keyboard</h2>
            <p className="text-gray-700 mb-4">
              Debris under keys is the most common cause of sticky keys. Clean the keyboard.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Turn keyboard upside down and shake gently</li>
              <li>Use compressed air to blow out debris</li>
              <li>Clean around affected keys with a soft brush</li>
              <li>Remove stuck keys carefully if needed</li>
              <li>Clean key switches and mechanisms</li>
              <li>Test keys after cleaning</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Check for Liquid Damage</h2>
            <p className="text-gray-700 mb-4">
              Spilled liquids can cause keys to stick. Check for liquid damage. If keys aren't registering at all, see the guide on <Link href="/guides/keys-not-registering" className="text-blue-600 hover:text-blue-800">keys not registering</Link> for additional troubleshooting.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Inspect keyboard for signs of liquid</li>
              <li>If liquid was spilled, unplug keyboard immediately</li>
              <li>Let keyboard dry completely before testing</li>
              <li>Clean sticky residue with isopropyl alcohol</li>
              <li>Test keys after cleaning and drying</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Check Key Repeat Settings</h2>
            <p className="text-gray-700 mb-4">
              Software settings can cause keys to repeat. Check repeat rate settings.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Windows:</strong> Settings → Ease of Access → Keyboard → Adjust repeat delay</li>
              <li><strong>Mac:</strong> System Preferences → Keyboard → Adjust key repeat rate</li>
              <li>Increase repeat delay to reduce accidental repeats</li>
              <li>Test keyboard after adjusting settings</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Remove and Clean Stuck Keys</h2>
            <p className="text-gray-700 mb-4">
              For mechanical keyboards, you can remove key caps to clean underneath.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Use a keycap puller for mechanical keyboards</li>
              <li>Gently pry off affected key caps</li>
              <li>Clean key switches with compressed air</li>
              <li>Clean key caps separately</li>
              <li>Reattach key caps carefully</li>
              <li>Test keys after cleaning</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Check for Worn Switches</h2>
            <p className="text-gray-700 mb-4">
              Worn key switches can cause sticking or repeating. Check switch condition.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Test if affected keys feel different when pressed</li>
              <li>Check for mechanical wear on switches</li>
              <li>Mechanical keyboards may need switch replacement</li>
              <li>Contact manufacturer for replacement switches</li>
              <li>Consider professional repair for complex issues</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Test Keyboard After Fixes</h2>
            <p className="text-gray-700 mb-6">
              After trying these steps, use the <Link href="/keyboard" className="text-blue-600 hover:text-blue-800 font-semibold">online keyboard test</Link> to verify keys are no longer sticking or repeating. The test shows which keys respond correctly and helps identify any remaining issues.
            </p>

            <RelatedGuides guides={[
              { title: 'Keyboard Not Working', href: '/guides/keyboard-not-working' },
              { title: 'Keys Not Registering', href: '/guides/keys-not-registering' },
              { title: 'Mechanical Keyboard Switch Test', href: '/guides/mechanical-keyboard-switch-test' }
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
          <DeviceNavigation />
        </div>
      </div>
      <StickyActionBar toolName="Keyboard Test" toolHref="/keyboard" />
    </>
  )
}

