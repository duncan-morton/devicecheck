import { Metadata } from 'next'
import { generateMetadata as genMeta } from '@/lib/seo/metadata'
import JsonLdScript from '@/components/JsonLdScript'
import { generateWebApplicationSchema, generateBreadcrumbListSchema, generateFAQPageSchema, generateHowToSchema } from '@/lib/seo/jsonLd'
import { getTranslation, getLocalizedPath, type Locale } from '@/i18n/getTranslation'
import WebcamTool from '@/components/WebcamTool'
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
  title: t.webcam_meta_title,
  description: t.webcam_meta_description,
  path: '/webcam',
  locale: 'en',
  keywords: [
    'online webcam test',
    'webcam test',
    'camera test online',
    'test webcam for zoom',
    'webcam not working',
    'camera test browser',
    'webcam resolution test',
    'video call test',
    'meeting camera test'
  ]
})

const faqs = (t: ReturnType<typeof getTranslation>) => [
  { question: t.webcam_faq_1_q, answer: t.webcam_faq_1_a },
  { question: t.webcam_faq_2_q, answer: t.webcam_faq_2_a },
  { question: t.webcam_faq_3_q, answer: t.webcam_faq_3_a },
  { question: t.webcam_faq_4_q, answer: t.webcam_faq_4_a },
  { question: t.webcam_faq_5_q, answer: t.webcam_faq_5_a }
]

const steps = [
  {
    title: 'Allow camera in your browser',
    description: 'Click the lock icon in the address bar and set Camera to Allow for this site.'
  },
  {
    title: 'Select the correct camera',
    description: 'In browser/device settings, pick the camera you want and confirm a live preview appears.'
  },
  {
    title: 'Close other apps using the camera',
    description: 'Quit Zoom, Teams, Discord, or tabs that may be holding the camera, then retry.'
  },
  {
    title: 'Check physical and privacy covers',
    description: 'Open any camera privacy cover and ensure no hardware switches are blocking the lens.'
  },
  {
    title: 'Update camera drivers',
    description: 'Update drivers (Windows) or keep macOS updated so the camera is recognized correctly.'
  },
  {
    title: 'Retest with the online tool',
    description: 'Run the webcam test and verify the preview, resolution badge, and grid overlay work.'
  }
]

const howToSchema = generateHowToSchema({
  url: 'https://devicecheck.io/webcam',
  name: 'How to fix webcam issues online',
  description: 'Step-by-step instructions to fix webcam not working: permissions, device selection, drivers, and retesting.',
  steps
})

export default function WebcamTestPage() {
  const locale: Locale = 'en'
  const t = getTranslation(locale)
  
  const webAppSchema = generateWebApplicationSchema(
    t.webcam_meta_title,
    t.webcam_meta_description,
    getLocalizedPath('/webcam', locale),
    locale
  )

  const breadcrumbs = generateBreadcrumbListSchema([
    { name: t.breadcrumb_home, path: getLocalizedPath('/', locale) },
    { name: t.webcam_test, path: getLocalizedPath('/webcam', locale) }
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
          <Breadcrumbs items={[{ name: t.webcam_test, path: getLocalizedPath('/webcam', locale) }]} locale={locale} />
          
          <div className="mb-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t.webcam_test_title}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl">
              {t.webcam_intro}
            </p>
          </div>

          <div className="mb-5">
            <Link 
              href="#test"
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
            >
              {t.run_webcam_test} →
            </Link>
          </div>

          <StepsBlock steps={steps} />

          <div id="test" className="scroll-mt-8">
            <WebcamTool />
          </div>

          <RelatedTools currentPath={getLocalizedPath('/webcam', locale)} locale={locale} />

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

          {/* Comprehensive SEO Content */}
          <article className="prose prose-slate max-w-none bg-white p-8 md:p-12 rounded-2xl border border-gray-200 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">{t.webcam_how_title}</h2>
            
            <p className="text-lg text-gray-700 mb-6">
              {t.webcam_how_intro}
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">{t.webcam_why_title}</h3>
            <p className="text-gray-700 mb-4">
              {t.webcam_why_intro}
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>{t.webcam_why_1}</li>
              <li>{t.webcam_why_2}</li>
              <li>{t.webcam_why_3}</li>
              <li>{t.webcam_why_4}</li>
              <li>{t.webcam_why_5}</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">{t.webcam_steps_title}</h3>
            <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-6">
              <li><strong>{t.webcam_step_1_title}:</strong> {t.webcam_step_1_text}</li>
              <li><strong>{t.webcam_step_2_title}:</strong> {t.webcam_step_2_text}</li>
              <li><strong>{t.webcam_step_3_title}:</strong> {t.webcam_step_3_text}</li>
              <li><strong>{t.webcam_step_4_title}:</strong> {t.webcam_step_4_text}</li>
              <li><strong>{t.webcam_step_5_title}:</strong> {t.webcam_step_5_text}</li>
            </ol>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">{t.webcam_common_title}</h3>

            <h4 className="text-xl font-bold text-gray-900 mt-6 mb-3">{t.webcam_black_title}</h4>
            <p className="text-gray-700 mb-4">
              {t.webcam_black_intro}
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>{t.webcam_black_1}</li>
              <li>{t.webcam_black_2}</li>
              <li>{t.webcam_black_3}</li>
              <li>{t.webcam_black_4}</li>
              <li>{t.webcam_black_5}</li>
            </ul>

            <h4 className="text-xl font-bold text-gray-900 mt-6 mb-3">{t.webcam_detect_title}</h4>
            <p className="text-gray-700 mb-4">
              {t.webcam_detect_intro}
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>{t.webcam_detect_1}</li>
              <li>{t.webcam_detect_2}</li>
              <li>{t.webcam_detect_3}</li>
              <li>{t.webcam_detect_4}</li>
              <li>{t.webcam_detect_5}</li>
            </ul>

            <h4 className="text-xl font-bold text-gray-900 mt-6 mb-3">{t.webcam_quality_title}</h4>
            <p className="text-gray-700 mb-4">
              {t.webcam_quality_intro}
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>{t.webcam_quality_1}</li>
              <li>{t.webcam_quality_2}</li>
              <li>{t.webcam_quality_3}</li>
              <li>{t.webcam_quality_4}</li>
              <li>{t.webcam_quality_5}</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">{t.webcam_video_conf_title}</h3>

            <h4 className="text-xl font-bold text-gray-900 mt-6 mb-3">{t.webcam_zoom_title}</h4>
            <p className="text-gray-700 mb-4">
              {t.webcam_zoom_text}
            </p>

            <h4 className="text-xl font-bold text-gray-900 mt-6 mb-3">{t.webcam_teams_title}</h4>
            <p className="text-gray-700 mb-4">
              {t.webcam_teams_text}
            </p>

            <h4 className="text-xl font-bold text-gray-900 mt-6 mb-3">{t.webcam_meet_title}</h4>
            <p className="text-gray-700 mb-4">
              {t.webcam_meet_text}
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">{t.webcam_resolution_title}</h3>
            <p className="text-gray-700 mb-4">
              {t.webcam_resolution_intro}
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>{t.webcam_resolution_1}</li>
              <li>{t.webcam_resolution_2}</li>
              <li>{t.webcam_resolution_3}</li>
              <li>{t.webcam_resolution_4}</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">{t.webcam_privacy_title}</h3>
            <p className="text-gray-700 mb-4">
              {t.webcam_privacy_intro}
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>{t.webcam_privacy_1}</li>
              <li>{t.webcam_privacy_2}</li>
              <li>{t.webcam_privacy_3}</li>
              <li>{t.webcam_privacy_4}</li>
            </ul>
            <p className="text-gray-700 mb-6">
              {t.webcam_privacy_footer}
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">{t.webcam_browser_title}</h3>
            <p className="text-gray-700 mb-4">
              {t.webcam_browser_intro}
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>{t.webcam_browser_1}</li>
              <li>{t.webcam_browser_2}</li>
              <li>{t.webcam_browser_3}</li>
              <li>{t.webcam_browser_4}</li>
              <li>{t.webcam_browser_5}</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">{t.webcam_troubleshooting_title}</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><Link href={getLocalizedPath("/guides/webcam-not-working", locale)} className="text-blue-600 hover:text-blue-800">Webcam not working</Link></li>
              <li><Link href={getLocalizedPath("/guides/webcam-not-detected-chrome", locale)} className="text-blue-600 hover:text-blue-800">Webcam not detected in Chrome</Link></li>
              <li><Link href={getLocalizedPath("/guides/webcam-test-zoom", locale)} className="text-blue-600 hover:text-blue-800">Test webcam for Zoom</Link></li>
              <li><Link href={getLocalizedPath("/guides/webcam-too-dark-grainy", locale)} className="text-blue-600 hover:text-blue-800">Webcam too dark or grainy</Link></li>
              <li><Link href={getLocalizedPath("/guides/webcam-lagging-low-fps", locale)} className="text-blue-600 hover:text-blue-800">Webcam lagging or low FPS</Link></li>
              <li><Link href={getLocalizedPath("/guides/external-webcam-not-recognised", locale)} className="text-blue-600 hover:text-blue-800">External webcam not recognised</Link></li>
              <li><Link href={getLocalizedPath("/guides/how-to-enable-camera-browser", locale)} className="text-blue-600 hover:text-blue-800">Enable camera in browser</Link></li>
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

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">{t.webcam_tips_title}</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>{t.webcam_tips_1}</li>
              <li>{t.webcam_tips_2}</li>
              <li>{t.webcam_tips_3}</li>
              <li>{t.webcam_tips_4}</li>
              <li>{t.webcam_tips_5}</li>
            </ul>

            <p className="text-lg text-gray-700 mt-8">
              {t.webcam_ready_text}{' '}
              <Link href="#test" className="text-blue-600 hover:text-blue-800 font-semibold">
                {t.webcam_ready_link}
              </Link>
            </p>
          </article>

          <DeviceNavigation />
        </div>
      </div>
      <StickyActionBar toolName={t.webcam_test} toolHref={getLocalizedPath('/webcam', locale)} />
    </>
  )
}

