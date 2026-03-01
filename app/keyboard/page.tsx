import { Metadata } from 'next'
import { generateMetadata as genMeta } from '@/lib/seo/metadata'
import JsonLdScript from '@/components/JsonLdScript'
import { generateWebApplicationSchema, generateBreadcrumbListSchema, generateFAQPageSchema, generateHowToSchema } from '@/lib/seo/jsonLd'
import { getTranslation, type Locale } from '@/i18n/getTranslation'
import { localizePathIfSupported } from '@/lib/i18n/routeLocaleSupport'
import KeyboardTool from '@/components/KeyboardTool'
import Breadcrumbs from '@/components/Breadcrumbs'
import RelatedTools from '@/components/RelatedTools'
import FixByPlatformSection from '@/components/FixByPlatformSection'
import Link from 'next/link'
import StepsBlock from '@/components/StepsBlock'

export const revalidate = 86400 // ISR: Revalidate every 24 hours

const locale: Locale = 'en'
const t = getTranslation(locale)

export const metadata: Metadata = genMeta({
  title: t.keyboard_meta_title,
  description: t.keyboard_meta_description,
  path: '/keyboard',
  locale: 'en',
  keywords: [
    'online keyboard test',
    'keyboard test',
    'keyboard test online',
    'test keyboard keys',
    'keyboard not working',
    'stuck keys test',
    'keyboard ghosting test',
    'key test online'
  ]
})

const faqs = (t: ReturnType<typeof getTranslation>) => [
  { question: t.keyboard_faq_1_q, answer: t.keyboard_faq_1_a },
  { question: t.keyboard_faq_2_q, answer: t.keyboard_faq_2_a },
  { question: t.keyboard_faq_3_q, answer: t.keyboard_faq_3_a },
  { question: t.keyboard_faq_4_q, answer: t.keyboard_faq_4_a },
  { question: t.keyboard_faq_5_q, answer: t.keyboard_faq_5_a },
  { question: 'How do I test my keyboard online?', answer: 'Click inside the test area so it has focus, then press each key. Keys that register will highlight. Test one key at a time and in combinations to check for ghosting.' },
  { question: 'Why are some keys not registering?', answer: 'Check that the test area has focus, the correct keyboard layout is selected in your OS, and no other app is capturing input. Stuck keys or hardware faults can also cause missed input.' },
  { question: 'What is keyboard ghosting?', answer: 'Ghosting is when pressing several keys at once produces wrong or no output. This test shows which combinations fail. It’s common on cheaper keyboards with limited rollover.' },
  { question: 'Does this keyboard test work on wireless keyboards?', answer: 'Yes. Wireless and Bluetooth keyboards work the same way in the test. Ensure the keyboard is paired and the page has focus; Bluetooth can add slight delay.' },
  { question: 'Can I test my keyboard for gaming?', answer: 'Yes. Press multiple keys at once to test rollover and ghosting. If many keys register together, the keyboard is suitable for gaming. See our keyboard ghosting guide for more.' }
]

const steps = [
  {
    title: 'Check keyboard connections',
    description: 'Reconnect the keyboard, try a different USB port, or ensure Bluetooth keyboards are paired.'
  },
  {
    title: 'Verify layout and language',
    description: 'Open system keyboard settings and confirm the correct layout and language are selected.'
  },
  {
    title: 'Test all keys',
    description: 'Use the online keyboard test to press every key and see if they register correctly.'
  },
  {
    title: 'Close conflicting apps',
    description: 'Quit macros, remapping tools, or games that might capture input exclusively.'
  },
  {
    title: 'Update keyboard drivers',
    description: 'Update drivers via Device Manager (Windows) or keep macOS updated for keyboard support.'
  },
  {
    title: 'Retry after restart',
    description: 'Restart the system to release locks and retest in the keyboard tool.'
  }
]

const howToSchema = generateHowToSchema({
  url: 'https://devicecheck.io/keyboard',
  name: 'How to fix keyboard issues online',
  description: 'Step-by-step instructions to fix keyboard not working: connections, layout, conflicts, drivers, and retesting.',
  steps
})

export default function KeyboardTestPage() {
  const locale: Locale = 'en'
  const t = getTranslation(locale)
  
  const webAppSchema = generateWebApplicationSchema(
    t.keyboard_meta_title,
    t.keyboard_meta_description,
    localizePathIfSupported('/keyboard', locale),
    locale
  )

  const breadcrumbs = generateBreadcrumbListSchema([
    { name: t.breadcrumb_home, path: localizePathIfSupported('/', locale) },
    { name: t.keyboard_test, path: localizePathIfSupported('/keyboard', locale) }
  ], locale)

  const faqSchema = generateFAQPageSchema(faqs(t), locale)

  return (
    <>
      <JsonLdScript data={howToSchema} />
      <JsonLdScript data={webAppSchema} />
      <JsonLdScript data={breadcrumbs} />
      <JsonLdScript data={faqSchema} />
      
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8 max-w-6xl">
          <Breadcrumbs items={[{ name: t.keyboard_test, path: localizePathIfSupported('/keyboard', locale) }]} locale={locale} />
          
          <Link 
            href={localizePathIfSupported('/', locale)}
            className="inline-block text-sm text-slate-500 hover:text-slate-900 mb-4 transition-colors"
          >
            ← All tools
          </Link>
          
          <div className="mb-4">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              {(t as Record<string, string>).keyboard_problem_h1 || t.keyboard_test_title}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl">
              {t.keyboard_intro}
            </p>
          </div>

          <div className="mb-6">
            <Link 
              href="#test"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              {t.run_keyboard_test} →
            </Link>
          </div>

          <div id="test" className="scroll-mt-8 mb-8">
            <KeyboardTool />
          </div>

          <RelatedTools currentPath={localizePathIfSupported('/keyboard', locale)} locale={locale} />

          <FixByPlatformSection locale={locale} />

          <div className="mb-8 rounded-xl border border-gray-200 bg-white p-4 md:p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-2">Quick checks</h2>
            <StepsBlock steps={steps} />
          </div>

          {/* Embed Link */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-12">
            <p className="text-gray-700 mb-2">
              <strong>For IT teams and site owners:</strong> Embed this test on your help pages.
            </p>
            <Link
              href="/embed"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Get embed code →
            </Link>
          </div>

          {/* Authority: when to test, what test checks, common problems, device access (match /mic structure) */}
          <article className="prose prose-slate max-w-none bg-white p-8 md:p-12 rounded-2xl border border-gray-200 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">When Should You Test Your Keyboard?</h2>
            <h4 className="text-lg font-semibold text-gray-900 mt-4 mb-2">Before gaming or long typing sessions</h4>
            <p className="text-gray-700 mb-3">
              Keys that don’t register or ghost (wrong keys firing) can ruin games and work. This test lets you press every key and see which ones respond. Fix layout or hardware issues before you rely on the keyboard.
            </p>
            <h4 className="text-lg font-semibold text-gray-900 mt-4 mb-2">When keys stick, repeat, or don’t register</h4>
            <p className="text-gray-700 mb-3">
              Sticky or repeating keys often point to debris, worn switches, or software (e.g. Sticky Keys). Use this tool to see which keys misbehave; then check <Link href={localizePathIfSupported('/guides/sticky-repeating-keys', locale)} className="text-blue-600 hover:text-blue-800">sticky or repeating keys</Link> for fixes.
            </p>
            <h4 className="text-lg font-semibold text-gray-900 mt-4 mb-2">When you suspect ghosting or wrong layout</h4>
            <p className="text-gray-700 mb-3">
              Ghosting is when pressing several keys at once causes wrong or missing input. This test shows which key combinations register. For why it happens and what to do, see <Link href={localizePathIfSupported('/guides/keyboard-ghosting-explained', locale)} className="text-blue-600 hover:text-blue-800">keyboard ghosting explained</Link>.
            </p>
            <h4 className="text-lg font-semibold text-gray-900 mt-4 mb-2">After connecting a new or external keyboard</h4>
            <p className="text-gray-700 mb-6">
              Confirm the OS sees the keyboard and the correct layout is selected. Run this test to verify every key maps as expected before you depend on it for work or play.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What This Keyboard Test Checks</h2>
            <p className="text-gray-700 mb-2"><strong>Key registration:</strong> Whether each key press is received by the browser and shown on screen.</p>
            <p className="text-gray-700 mb-2"><strong>Multi-key input:</strong> Holding several keys at once reveals ghosting or rollover limits.</p>
            <p className="text-gray-700 mb-2"><strong>Layout:</strong> The test reflects the active system layout (e.g. QWERTY), so you can confirm the right layout is selected.</p>
            <p className="text-gray-700 mb-2"><strong>Modifier keys:</strong> Shift, Ctrl, Alt, and Meta can be tested to ensure they combine correctly with other keys.</p>
            <p className="text-gray-700 mb-6"><strong>No permissions needed:</strong> Keyboard input does not require browser or OS device permissions like camera or mic; the test only needs focus.</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Common Keyboard Problems This Test Helps Diagnose</h2>
            <p className="text-gray-700 mb-2">
              <strong>Keys not registering:</strong> If a key never lights in the test, it may be stuck, broken, or the wrong layout may be active. Check system keyboard settings and try another port or cable. More: <Link href={localizePathIfSupported('/guides/keys-not-registering', locale)} className="text-blue-600 hover:text-blue-800">keys not registering</Link>.
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Ghosting:</strong> Multiple keys pressed together produce wrong or missing characters. This test shows which combinations fail. See <Link href={localizePathIfSupported('/issues/keyboard-ghosting-issue', locale)} className="text-blue-600 hover:text-blue-800">keyboard ghosting issue</Link> for causes and fixes.
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Wrong layout or characters:</strong> You press one key but another character appears. Confirm the correct keyboard layout and language in OS settings. <Link href={localizePathIfSupported('/issues/keyboard-keys-typing-wrong', locale)} className="text-blue-600 hover:text-blue-800">Keys typing wrong characters</Link> has more.
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Input delay:</strong> Keys feel slow to respond. Often caused by Bluetooth latency, USB power, or background software. Test with a wired keyboard to compare; see <Link href={localizePathIfSupported('/issues/keyboard-slow-to-respond', locale)} className="text-blue-600 hover:text-blue-800">keyboard slow to respond</Link>.
            </p>
            <p className="text-gray-700 mb-6">
              <strong>Keyboard not detected:</strong> The OS doesn’t list the keyboard or it stops working after sleep. Reconnect, try another port, and check Device Manager or System Preferences. <Link href={localizePathIfSupported('/issues/keyboard-not-detected-usb', locale)} className="text-blue-600 hover:text-blue-800">Keyboard not detected (USB)</Link> can help.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Keyboard Input and Device Access</h2>
            <p className="text-gray-700 mb-6">
              Keyboard input does not use camera or microphone permissions. The browser receives key events when the page has focus. For how device access (camera, mic, and selection) works across OS, browser, and app layers, see <Link href={localizePathIfSupported('/guides/how-device-access-works', locale)} className="text-blue-600 hover:text-blue-800">how device access works</Link>.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How this diagnostic works &amp; why problems happen</h2>
            <h3 className="text-xl font-bold text-gray-900 mt-4 mb-3">{t.keyboard_how_title}</h3>
            
            <p className="text-lg text-gray-700 mb-6">
              {t.keyboard_how_intro}
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">{t.keyboard_why_title}</h3>
            <p className="text-gray-700 mb-4">
              {t.keyboard_why_intro}
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>{t.keyboard_why_1}</li>
              <li>{t.keyboard_why_2}</li>
              <li>{t.keyboard_why_3}</li>
              <li>{t.keyboard_why_4}</li>
              <li>{t.keyboard_why_5}</li>
              <li>{t.keyboard_why_6}</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">{t.keyboard_steps_title}</h3>
            <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-6">
              <li><strong>{t.keyboard_step_1_title}:</strong> {t.keyboard_step_1_text}</li>
              <li><strong>{t.keyboard_step_2_title}:</strong> {t.keyboard_step_2_text}</li>
              <li><strong>{t.keyboard_step_3_title}:</strong> {t.keyboard_step_3_text}</li>
              <li><strong>{t.keyboard_step_4_title}:</strong> {t.keyboard_step_4_text}</li>
              <li><strong>{t.keyboard_step_5_title}:</strong> {t.keyboard_step_5_text}</li>
            </ol>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">{t.keyboard_common_title}</h3>

            <h4 className="text-xl font-bold text-gray-900 mt-6 mb-3">{t.keyboard_stuck_title}</h4>
            <p className="text-gray-700 mb-4">
              {t.keyboard_stuck_intro}
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>{t.keyboard_stuck_1}</li>
              <li>{t.keyboard_stuck_2}</li>
              <li>{t.keyboard_stuck_3}</li>
              <li>{t.keyboard_stuck_4}</li>
            </ul>

            <h4 className="text-xl font-bold text-gray-900 mt-6 mb-3">{t.keyboard_not_working_title}</h4>
            <p className="text-gray-700 mb-4">
              {t.keyboard_not_working_intro}
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>{t.keyboard_not_working_1}</li>
              <li>{t.keyboard_not_working_2}</li>
              <li>{t.keyboard_not_working_3}</li>
              <li>{t.keyboard_not_working_4}</li>
              <li>{t.keyboard_not_working_5}</li>
            </ul>

            <h4 className="text-xl font-bold text-gray-900 mt-6 mb-3">{t.keyboard_ghosting_title}</h4>
            <p className="text-gray-700 mb-4">
              {t.keyboard_ghosting_intro}
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>{t.keyboard_ghosting_1}</li>
              <li>{t.keyboard_ghosting_2}</li>
              <li>{t.keyboard_ghosting_3}</li>
              <li>{t.keyboard_ghosting_4}</li>
            </ul>

            <h4 className="text-xl font-bold text-gray-900 mt-6 mb-3">{t.keyboard_wrong_title}</h4>
            <p className="text-gray-700 mb-4">
              {t.keyboard_wrong_intro}
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>{t.keyboard_wrong_1}</li>
              <li>{t.keyboard_wrong_2}</li>
              <li>{t.keyboard_wrong_3}</li>
              <li>{t.keyboard_wrong_4}</li>
              <li>{t.keyboard_wrong_5}</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">{t.keyboard_types_title}</h3>

            <h4 className="text-xl font-bold text-gray-900 mt-6 mb-3">{t.keyboard_mech_title}</h4>
            <p className="text-gray-700 mb-4">
              {t.keyboard_mech_intro}
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>{t.keyboard_mech_1}</li>
              <li>{t.keyboard_mech_2}</li>
              <li>{t.keyboard_mech_3}</li>
              <li>{t.keyboard_mech_4}</li>
              <li>{t.keyboard_mech_5}</li>
            </ul>

            <h4 className="text-xl font-bold text-gray-900 mt-6 mb-3">{t.keyboard_mem_title}</h4>
            <p className="text-gray-700 mb-4">
              {t.keyboard_mem_intro}
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>{t.keyboard_mem_1}</li>
              <li>{t.keyboard_mem_2}</li>
              <li>{t.keyboard_mem_3}</li>
              <li>{t.keyboard_mem_4}</li>
              <li>{t.keyboard_mem_5}</li>
            </ul>

            <h4 className="text-xl font-bold text-gray-900 mt-6 mb-3">{t.keyboard_laptop_title}</h4>
            <p className="text-gray-700 mb-4">
              {t.keyboard_laptop_intro}
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>{t.keyboard_laptop_1}</li>
              <li>{t.keyboard_laptop_2}</li>
              <li>{t.keyboard_laptop_3}</li>
              <li>{t.keyboard_laptop_4}</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">{t.keyboard_maint_title}</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>{t.keyboard_maint_1}</li>
              <li>{t.keyboard_maint_2}</li>
              <li>{t.keyboard_maint_3}</li>
              <li>{t.keyboard_maint_4}</li>
              <li>{t.keyboard_maint_5}</li>
              <li>{t.keyboard_maint_6}</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">{t.keyboard_troubleshooting_title}</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><Link href={localizePathIfSupported("/guides/keyboard-not-working", locale)} className="text-blue-600 hover:text-blue-800">Keyboard not working</Link></li>
              <li><Link href={localizePathIfSupported("/guides/keys-not-registering", locale)} className="text-blue-600 hover:text-blue-800">Keys not registering</Link></li>
              <li><Link href={localizePathIfSupported("/guides/sticky-repeating-keys", locale)} className="text-blue-600 hover:text-blue-800">Sticky or repeating keys</Link></li>
              <li><Link href={localizePathIfSupported("/guides/keyboard-ghosting-explained", locale)} className="text-blue-600 hover:text-blue-800">Keyboard ghosting explained</Link></li>
              <li><Link href={localizePathIfSupported("/guides/mechanical-keyboard-switch-test", locale)} className="text-blue-600 hover:text-blue-800">Mechanical keyboard switch test</Link></li>
              <li><Link href={localizePathIfSupported("/guides/how-to-test-keyboard-windows", locale)} className="text-blue-600 hover:text-blue-800">Test keyboard on Windows</Link></li>
              <li><Link href={localizePathIfSupported("/guides/how-to-test-keyboard-mac", locale)} className="text-blue-600 hover:text-blue-800">Test keyboard on Mac</Link></li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">{t.frequently_asked_questions}</h3>
            <div className="space-y-6 mt-6">
              {faqs(t).map((faq, index) => (
                <div key={index} className="border-b border-gray-200 pb-6 last:border-0">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{faq.question}</h4>
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">{t.keyboard_tips_gaming_title}</h3>
            <p className="text-gray-700 mb-4">
              {t.keyboard_tips_gaming_intro}
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>{t.keyboard_tips_gaming_1}</li>
              <li>{t.keyboard_tips_gaming_2}</li>
              <li>{t.keyboard_tips_gaming_3}</li>
              <li>{t.keyboard_tips_gaming_4}</li>
              <li>{t.keyboard_tips_gaming_5}</li>
              <li>{t.keyboard_tips_gaming_6}</li>
            </ul>

            <p className="text-lg text-gray-700 mt-8">
              {t.keyboard_ready_text}{' '}
              <Link href="#test" className="text-blue-600 hover:text-blue-800 font-semibold">
                {t.keyboard_ready_link}
              </Link>
            </p>
          </article>
        </div>
      </div>
    </>
  )
}

