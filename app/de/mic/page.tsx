import { Metadata } from 'next'
import { generateMetadata as genMeta } from '@/lib/seo/metadata'
import JsonLdScript from '@/components/JsonLdScript'
import { generateWebApplicationSchema, generateBreadcrumbListSchema, generateFAQPageSchema } from '@/lib/seo/jsonLd'
import { getTranslation, getLocalizedPath, type Locale } from '@/i18n/getTranslation'
import MicTool from '@/components/MicTool'
import Breadcrumbs from '@/components/Breadcrumbs'
import RelatedTools from '@/components/RelatedTools'
import Link from 'next/link'

export const revalidate = 86400 // ISR: Revalidate every 24 hours

const locale: Locale = 'de'
const t = getTranslation(locale)

export const metadata: Metadata = genMeta({
  title: t.mic_test_title,
  description: t.mic_test_description,
  path: '/de/mic',
  locale: 'de',
  keywords: [
    'online microphone test',
    'online mic test',
    'microphone test',
    'mic test online',
    'test microphone for zoom',
    'microphone not working',
    'mic test browser',
    'audio test online',
    'microphone check'
  ]
})

const faqs = [
  {
    question: 'How do I test my microphone online?',
    answer: 'Click "Allow" when prompted for microphone access. Speak into your mic and watch the volume meter respond. You can record a 5-second test clip and play it back to verify audio quality.'
  },
  {
    question: 'Why is my microphone not working?',
    answer: 'Common causes include denied browser permissions, physical mute switches, wrong input device selected, or driver issues. Check browser permissions first, then verify system settings and ensure no other apps are using the microphone.'
  },
  {
    question: 'Can I test my microphone for Zoom or Teams?',
    answer: 'Yes! If our microphone test works, your mic will work in Zoom, Microsoft Teams, Google Meet, and other video conferencing platforms. Test here first to avoid issues during important calls.'
  },
  {
    question: 'Is my microphone data secure?',
    answer: 'Absolutely. All audio processing happens locally in your browser. No audio data is sent to our servers, recorded, stored, or shared with anyone. Your privacy is completely protected.'
  },
  {
    question: 'What should the volume meter show?',
    answer: 'The meter should show green/yellow bars when you speak normally. If it stays red or shows no activity, check your mic volume settings, ensure you\'re not muted, and verify the correct input device is selected.'
  }
]

export default function MicTestPage() {
  const locale: Locale = 'de'
  const t = getTranslation(locale)
  
  const webAppSchema = generateWebApplicationSchema(
    t.mic_test_title,
    'Test your microphone online instantly. Check mic input levels, audio quality, and record playback.',
    '/de/mic',
    locale
  )

  const breadcrumbs = generateBreadcrumbListSchema([
    { name: t.breadcrumb_home, path: '/de' },
    { name: t.microphone_test, path: '/de/mic' }
  ], locale)

  const faqSchema = generateFAQPageSchema(faqs, locale)

  return (
    <>
      <JsonLdScript data={webAppSchema} />
      <JsonLdScript data={breadcrumbs} />
      <JsonLdScript data={faqSchema} />
      
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8 max-w-6xl">
          <Breadcrumbs items={[{ name: t.microphone_test, path: '/de/mic' }]} locale={locale} />
          
          <Link 
            href={getLocalizedPath('/', locale)}
            className="inline-block text-sm text-slate-500 hover:text-slate-900 mb-4 transition-colors"
          >
            ← All tools
          </Link>
          
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t.mic_test_title}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl">
              {t.mic_intro}
            </p>
          </div>

          <div className="mb-8">
            <Link 
              href="#test"
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
            >
              {t.run_microphone_test} →
            </Link>
          </div>

          <div id="test" className="scroll-mt-8">
            <MicTool />
          </div>

          <RelatedTools currentPath={getLocalizedPath("/mic", locale)} locale={locale} />

          {/* Comprehensive SEO Content */}
          <article className="prose prose-slate max-w-none bg-white p-8 md:p-12 rounded-2xl border border-gray-200 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">{t.mic_how_to_title}</h2>
            
            <p className="text-lg text-gray-700 mb-6">
              {t.mic_how_to_intro}
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">{t.mic_why_test_title}</h3>
            <p className="text-gray-700 mb-4">
              {t.mic_why_test_intro}
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>{t.mic_why_test_1}</li>
              <li>{t.mic_why_test_2}</li>
              <li>{t.mic_why_test_3}</li>
              <li>{t.mic_why_test_4}</li>
              <li>{t.mic_why_test_5}</li>
              <li>{t.mic_why_test_6}</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">{t.mic_steps_title}</h3>
            <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-6">
              <li>
                <strong>{t.mic_step_1_title}:</strong> {t.mic_step_1_text}
              </li>
              <li>
                <strong>{t.mic_step_2_title}:</strong> {t.mic_step_2_text}
              </li>
              <li>
                <strong>{t.mic_step_3_title}:</strong> {t.mic_step_3_text}
              </li>
              <li>
                <strong>{t.mic_step_4_title}:</strong> {t.mic_step_4_text}
              </li>
              <li>
                <strong>{t.mic_step_5_title}:</strong> {t.mic_step_5_text}
              </li>
            </ol>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">{t.mic_common_problems_title}</h3>

            <h4 className="text-xl font-bold text-gray-900 mt-6 mb-3">{t.mic_not_working_title}</h4>
            <p className="text-gray-700 mb-4">
              {t.mic_not_working_intro}
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>{t.mic_not_working_1}</li>
              <li>{t.mic_not_working_2}</li>
              <li>{t.mic_not_working_3}</li>
              <li>{t.mic_not_working_4}</li>
              <li>{t.mic_not_working_5}</li>
            </ul>

            <h4 className="text-xl font-bold text-gray-900 mt-6 mb-3">{t.mic_too_quiet_title}</h4>
            <p className="text-gray-700 mb-4">
              {t.mic_too_quiet_intro}
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>{t.mic_too_quiet_1}</li>
              <li>{t.mic_too_quiet_2}</li>
              <li>{t.mic_too_quiet_3}</li>
              <li>{t.mic_too_quiet_4}</li>
              <li>{t.mic_too_quiet_5}</li>
            </ul>

            <h4 className="text-xl font-bold text-gray-900 mt-6 mb-3">{t.mic_echo_title}</h4>
            <p className="text-gray-700 mb-4">
              {t.mic_echo_intro}
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>{t.mic_echo_1}</li>
              <li>{t.mic_echo_2}</li>
              <li>{t.mic_echo_3}</li>
              <li>{t.mic_echo_4}</li>
              <li>{t.mic_echo_5}</li>
            </ul>

            <h4 className="text-xl font-bold text-gray-900 mt-6 mb-3">{t.mic_wrong_device_title}</h4>
            <p className="text-gray-700 mb-4">
              {t.mic_wrong_device_intro}
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>{t.mic_wrong_device_1}</li>
              <li>{t.mic_wrong_device_2}</li>
              <li>{t.mic_wrong_device_3}</li>
              <li>{t.mic_wrong_device_4}</li>
              <li>{t.mic_wrong_device_5}</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">{t.mic_video_conferencing_title}</h3>

            <h4 className="text-xl font-bold text-gray-900 mt-6 mb-3">{t.mic_zoom_title}</h4>
            <p className="text-gray-700 mb-4">
              {t.mic_zoom_text}
            </p>

            <h4 className="text-xl font-bold text-gray-900 mt-6 mb-3">{t.mic_teams_title}</h4>
            <p className="text-gray-700 mb-4">
              {t.mic_teams_text}
            </p>

            <h4 className="text-xl font-bold text-gray-900 mt-6 mb-3">{t.mic_meet_title}</h4>
            <p className="text-gray-700 mb-4">
              {t.mic_meet_text}
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">{t.mic_levels_title}</h3>
            <p className="text-gray-700 mb-4">
              {t.mic_levels_intro}
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>{t.mic_levels_green}</li>
              <li>{t.mic_levels_yellow}</li>
              <li>{t.mic_levels_red}</li>
              <li>{t.mic_levels_none}</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">{t.mic_permissions_title}</h3>
            <p className="text-gray-700 mb-4">
              {t.mic_permissions_intro}
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>{t.mic_permissions_chrome}</li>
              <li>{t.mic_permissions_firefox}</li>
              <li>{t.mic_permissions_edge}</li>
              <li>{t.mic_permissions_safari}</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">{t.mic_privacy_title}</h3>
            <p className="text-gray-700 mb-4">
              {t.mic_privacy_intro}
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>{t.mic_privacy_1}</li>
              <li>{t.mic_privacy_2}</li>
              <li>{t.mic_privacy_3}</li>
              <li>{t.mic_privacy_4}</li>
              <li>{t.mic_privacy_5}</li>
            </ul>
            <p className="text-gray-700 mb-6">
              {t.mic_privacy_footer}
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">{t.mic_troubleshooting_title}</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><Link href="/guides/microphone-not-working" className="text-blue-600 hover:text-blue-800">Microphone not working</Link></li>
              <li><Link href="/guides/microphone-too-quiet" className="text-blue-600 hover:text-blue-800">Microphone too quiet</Link></li>
              <li><Link href="/guides/microphone-static-crackling" className="text-blue-600 hover:text-blue-800">Static or crackling sound</Link></li>
              <li><Link href="/guides/microphone-test-zoom" className="text-blue-600 hover:text-blue-800">Test microphone for Zoom</Link></li>
              <li><Link href="/guides/microphone-test-microsoft-teams" className="text-blue-600 hover:text-blue-800">Test microphone for Microsoft Teams</Link></li>
              <li><Link href="/guides/microphone-not-detected-windows-11" className="text-blue-600 hover:text-blue-800">Microphone not detected (Windows 11)</Link></li>
              <li><Link href="/guides/how-to-enable-microphone-chrome" className="text-blue-600 hover:text-blue-800">Enable microphone in Chrome</Link></li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">{t.frequently_asked_questions}</h3>
            <div className="space-y-6 mt-6">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-200 pb-6 last:border-0">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{faq.question}</h4>
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">{t.mic_tips_title}</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>{t.mic_tips_1}</li>
              <li>{t.mic_tips_2}</li>
              <li>{t.mic_tips_3}</li>
              <li>{t.mic_tips_4}</li>
              <li>{t.mic_tips_5}</li>
              <li>{t.mic_tips_6}</li>
            </ul>

            <p className="text-lg text-gray-700 mt-8">
              {t.mic_ready_text} <Link href="#test" className="text-blue-600 hover:text-blue-800 font-semibold">{t.mic_scroll_up_link}</Link> to verify your mic is working perfectly for your next video call or recording.
            </p>
          </article>
        </div>
      </div>
    </>
  )
}

