import { Metadata } from 'next'
import { generateMetadata as genMeta } from '@/lib/seo/metadata'
import JsonLdScript from '@/components/JsonLdScript'
import {
  generateWebApplicationSchema,
  generateBreadcrumbListSchema,
  generateFAQPageSchema,
} from '@/lib/seo/jsonLd'
import Breadcrumbs from '@/components/Breadcrumbs'
import KeyboardTool from '@/components/KeyboardTool'
import RelatedGuides from '@/components/RelatedGuides'
import HelpfulWidget from '@/components/HelpfulWidget'
import Link from 'next/link'

export const revalidate = 86400

export const metadata: Metadata = genMeta({
  title: 'Chromebook Keyboard Test — Test Every Key Online',
  description:
    'Free online Chromebook keyboard tester. Press each key and watch it light up to check for dead, stuck, or unresponsive keys — including the Search key and top row. No install, works on any Chromebook.',
  path: '/guides/chromebook-keyboard-test',
  keywords: [
    'chromebook keyboard test',
    'chromebook keyboard tester',
    'online chromebook keyboard test',
    'chromebook key test',
    'chromebook keypad test',
    'test chromebook keyboard',
    'chromebook keyboard check',
    'chrome os keyboard test',
  ],
})

const faqs = [
  {
    question: 'How do I test my Chromebook keyboard?',
    answer:
      'Open this page on your Chromebook and press each key. Every key you press turns green in the on-screen keyboard, so you can instantly see which keys register and which are dead or stuck. Work across all rows, then test modifiers (Shift, Ctrl, Alt) and the Search key. No download or sign-in is needed.',
  },
  {
    question: 'Does this test the Search key and the top-row keys?',
    answer:
      'Yes. The Chromebook layout shows the Search/Launcher key (where Caps Lock sits on other laptops) and the browser/system top row — Back, Forward, Reload, Full screen, Windows overview, brightness and volume. These light up on most Chromebooks; a few models report the top row differently, but letters, numbers, arrows and modifier keys always work.',
  },
  {
    question: 'How do I test a school or managed Chromebook keyboard?',
    answer:
      'The test runs entirely in the browser, so it works on managed and school (admin-enrolled) Chromebooks without any install or special permissions. Just open the page and start pressing keys. If a key does not respond here, it is a hardware or driver issue rather than a website or account restriction.',
  },
  {
    question: 'Some keys are not registering — what should I do?',
    answer:
      'If a key never turns green, first restart the Chromebook and retest, as a stuck Chrome OS process can block input. Then check Settings → Device → Keyboard for remapped keys, and clean under the key with compressed air. If it still fails on this test, the key or keyboard hardware is faulty.',
  },
  {
    question: 'Do I need to install anything?',
    answer:
      'No. This is a browser-based online keyboard test. Nothing is installed, and nothing you type is recorded or sent anywhere — key detection happens locally on your device.',
  },
]

export default function ChromebookKeyboardTestPage() {
  const path = '/guides/chromebook-keyboard-test'

  const appSchema = generateWebApplicationSchema(
    'Chromebook Keyboard Test',
    'Free online Chromebook keyboard tester — press each key and watch it light up to find dead, stuck, or unresponsive keys.',
    path,
  )

  const breadcrumbs = generateBreadcrumbListSchema([
    { name: 'Home', path: '/' },
    { name: 'Guides', path: '/guides' },
    { name: 'Chromebook Keyboard Test', path },
  ])

  const faqSchema = generateFAQPageSchema(faqs)

  return (
    <>
      <JsonLdScript data={appSchema} />
      <JsonLdScript data={breadcrumbs} />
      <JsonLdScript data={faqSchema} />

      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8 max-w-5xl">
          <Breadcrumbs
            items={[
              { name: 'Guides', path: '/guides' },
              { name: 'Chromebook Keyboard Test', path },
            ]}
          />

          <div className="mb-6">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Chromebook Keyboard Test
            </h1>
            <p className="text-lg text-gray-700 max-w-3xl">
              Press each key on your Chromebook and watch it light up below. It&apos;s the fastest
              way to check for dead, stuck, or unresponsive keys — including the Search key and the
              browser top row. Runs in your browser, nothing to install.
            </p>
          </div>

          {/* Interactive tester — the reason people are here */}
          <div className="mb-10">
            <KeyboardTool chromebook />
          </div>

          {/* Supporting content */}
          <article className="prose prose-slate max-w-none bg-white p-8 md:p-12 rounded-2xl border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How to use the Chromebook keyboard test</h2>
            <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
              <li>Open this page on the Chromebook you want to test.</li>
              <li>Press every key once — each one turns green when it registers.</li>
              <li>Hold a key to confirm it repeats, and release to confirm it clears.</li>
              <li>Test the modifiers (Shift, Ctrl, Alt) and the Search key.</li>
              <li>Note any key that never lights up — that&apos;s a dead or stuck key.</li>
            </ol>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What the results mean</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Key turns green:</strong> the key works and is registering correctly.</li>
              <li><strong>Key never lights up:</strong> a dead or disconnected key — likely hardware.</li>
              <li><strong>Key stays green after release:</strong> a stuck key; clean under it or check for debris.</li>
              <li><strong>Wrong character appears:</strong> a layout mismatch — check Settings → Device → Keyboard.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">If keys still don&apos;t work</h2>
            <p className="text-gray-700 mb-4">
              A key that fails this test is almost always hardware or driver related, not a website issue.
              Try these before assuming the keyboard is broken:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Restart the Chromebook (a stuck Chrome OS process can block input) and retest.</li>
              <li>Sign in as a different user or use Guest mode to rule out a profile setting.</li>
              <li>Check Settings → Device → Keyboard for remapped keys (Search, Ctrl, Alt).</li>
              <li>Clean under the key with compressed air; check for trapped debris.</li>
              <li>Try an external USB keyboard — if that works, the built-in keyboard needs service.</li>
            </ul>
            <p className="text-gray-700 mb-6">
              For step-by-step fixes, see <Link href="/guides/keyboard-not-working" className="text-blue-600 hover:text-blue-800">keyboard not working</Link>{' '}
              and <Link href="/guides/sticky-repeating-keys" className="text-blue-600 hover:text-blue-800">sticky or repeating keys</Link>.
              Want to test a different device? Try the full <Link href="/keyboard" className="text-blue-600 hover:text-blue-800">online keyboard test</Link>.
            </p>

            <RelatedGuides
              guides={[
                { title: 'Keyboard Not Working', href: '/guides/keyboard-not-working' },
                { title: 'Sticky or Repeating Keys', href: '/guides/sticky-repeating-keys' },
                { title: 'Keyboard Typing Wrong Characters', href: '/issues/keyboard-keys-typing-wrong' },
              ]}
            />

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Frequently Asked Questions</h2>
            <div className="space-y-6 mt-6">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-200 pb-6 last:border-0">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{faq.question}</h3>
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              ))}
            </div>
          </article>

          <HelpfulWidget />
        </div>
      </div>
    </>
  )
}
