import { Metadata } from 'next'
import { generateMetadata as genMeta } from '@/lib/seo/metadata'
import JsonLdScript from '@/components/JsonLdScript'
import { generateWebApplicationSchema, generateBreadcrumbListSchema, generateFAQPageSchema, generateHowToSchema } from '@/lib/seo/jsonLd'
import { getTranslation, getLocalizedPath, type Locale } from '@/i18n/getTranslation'
import KeyboardTool from '@/components/KeyboardTool'
import Breadcrumbs from '@/components/Breadcrumbs'
import RelatedTools from '@/components/RelatedTools'
import DeviceNavigation from '@/components/DeviceNavigation'
import StickyActionBar from '@/components/StickyActionBar'
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
  { question: t.keyboard_faq_5_q, answer: t.keyboard_faq_5_a }
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
    getLocalizedPath('/keyboard', locale),
    locale
  )

  const breadcrumbs = generateBreadcrumbListSchema([
    { name: t.breadcrumb_home, path: getLocalizedPath('/', locale) },
    { name: t.keyboard_test, path: getLocalizedPath('/keyboard', locale) }
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
          <Breadcrumbs items={[{ name: t.keyboard_test, path: getLocalizedPath('/keyboard', locale) }]} locale={locale} />
          
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t.keyboard_test_title}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl">
              {t.keyboard_intro}
            </p>
          </div>

          <StepsBlock title="Steps to fix this" steps={steps} />

          <div className="mb-8">
            <Link 
              href="#test"
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
            >
              {t.run_keyboard_test} →
            </Link>
          </div>

          <div id="test" className="scroll-mt-8">
            <KeyboardTool />
          </div>

          <RelatedTools currentPath={getLocalizedPath('/keyboard', locale)} locale={locale} />

          {/* Comprehensive SEO Content */}
          <article className="prose prose-slate max-w-none bg-white p-8 md:p-12 rounded-2xl border border-gray-200 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">{t.keyboard_how_title}</h2>
            
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
              <li><Link href={getLocalizedPath("/guides/keyboard-not-working", locale)} className="text-blue-600 hover:text-blue-800">Keyboard not working</Link></li>
              <li><Link href={getLocalizedPath("/guides/keys-not-registering", locale)} className="text-blue-600 hover:text-blue-800">Keys not registering</Link></li>
              <li><Link href={getLocalizedPath("/guides/sticky-repeating-keys", locale)} className="text-blue-600 hover:text-blue-800">Sticky or repeating keys</Link></li>
              <li><Link href={getLocalizedPath("/guides/keyboard-ghosting-explained", locale)} className="text-blue-600 hover:text-blue-800">Keyboard ghosting explained</Link></li>
              <li><Link href={getLocalizedPath("/guides/mechanical-keyboard-switch-test", locale)} className="text-blue-600 hover:text-blue-800">Mechanical keyboard switch test</Link></li>
              <li><Link href={getLocalizedPath("/guides/how-to-test-keyboard-windows", locale)} className="text-blue-600 hover:text-blue-800">Test keyboard on Windows</Link></li>
              <li><Link href={getLocalizedPath("/guides/how-to-test-keyboard-mac", locale)} className="text-blue-600 hover:text-blue-800">Test keyboard on Mac</Link></li>
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

          <DeviceNavigation />
        </div>
      </div>
      <StickyActionBar toolName={t.keyboard_test} toolHref={getLocalizedPath('/keyboard', locale)} />
    </>
  )
}

