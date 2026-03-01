import { Metadata } from 'next'
import { generateMetadata as genMeta } from '@/lib/seo/metadata'
import JsonLdScript from '@/components/JsonLdScript'
import { generateWebApplicationSchema, generateBreadcrumbListSchema, generateFAQPageSchema, generateHowToSchema } from '@/lib/seo/jsonLd'
import { getTranslation, type Locale } from '@/i18n/getTranslation'
import { localizePathIfSupported } from '@/lib/i18n/routeLocaleSupport'
import MicTool from '@/components/MicTool'
import Breadcrumbs from '@/components/Breadcrumbs'
import RelatedTools from '@/components/RelatedTools'
import FixByPlatformSection from '@/components/FixByPlatformSection'
import Link from 'next/link'
import StepsBlock from '@/components/StepsBlock'

export const revalidate = 86400 // ISR: Revalidate every 24 hours

const locale: Locale = 'en'
const t = getTranslation(locale)

export const metadata: Metadata = genMeta({
  title: t.mic_test_title,
        description: t.mic_test_description,
  path: '/mic',
  locale: 'en',
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
    answer: 'Click “Allow” when the browser asks for microphone access, then speak into your mic. The volume meter will show your input level; you can also record a short clip and play it back to confirm quality.'
  },
  {
    question: 'Why is my microphone not working?',
    answer: 'Usually the cause is denied browser or system permissions, a physical mute switch, or the wrong input device selected. Allow the mic in your browser and OS privacy settings, close other apps using the mic, and pick the correct device in sound settings.'
  },
  {
    question: 'How can I check if my mic is working?',
    answer: 'Run this test and watch the meter: if bars move when you speak, the browser sees your mic. Use the record-and-playback step to confirm the audio sounds clear. No movement means permissions or device selection need fixing.'
  },
  {
    question: 'Is this microphone test private?',
    answer: 'Yes. All processing happens in your browser; no audio is sent to our servers or stored. We don’t record, save, or share your voice.'
  },
  {
    question: 'Does this work on mobile?',
    answer: 'Yes, on phones and tablets that support getUserMedia in the browser (e.g. Chrome and Safari on iOS/Android). Allow microphone access when prompted; if the test works, your mic is working for that browser.'
  },
  {
    question: 'Can I test my microphone for Zoom or Teams?',
    answer: 'Yes. If this test works in your browser, your mic will work in Zoom, Teams, and Meet. Run it before important calls to avoid “no audio” issues.'
  },
  {
    question: 'What should the volume meter show?',
    answer: 'Green or yellow bars when you speak is ideal; red means too loud. No activity means the mic isn’t detected or is muted—check permissions and device selection.'
  }
]

const steps = [
  {
    title: 'Enable microphone permissions',
    description: 'Click the browser lock icon or open system Privacy settings and allow microphone access.'
  },
  {
    title: 'Select the correct input',
    description: 'In system Sound settings and in your app, choose the microphone you are using and test levels.'
  },
  {
    title: 'Close other apps using the mic',
    description: 'Quit Zoom, Teams, Discord, or recording tools that might be holding the microphone.'
  },
  {
    title: 'Check physical connections',
    description: 'Reconnect the mic, try another USB port, and check for hardware mute switches.'
  },
  {
    title: 'Update audio drivers',
    description: 'Update drivers in Device Manager (Windows) or keep macOS updated to refresh audio support.'
  },
  {
    title: 'Retest in the browser tool',
    description: 'Run the online microphone test and confirm the meter moves when you speak.'
  }
]

const howToSchema = generateHowToSchema({
  url: 'https://devicecheck.io/mic',
  name: 'How to fix microphone issues online',
  description: 'Step-by-step instructions to fix microphone not working: permissions, device selection, drivers, and retesting.',
  steps
})

export default function MicTestPage() {
  const locale: Locale = 'en'
  const t = getTranslation(locale)
  
  const webAppSchema = generateWebApplicationSchema(
    t.mic_test_title,
    'Test your microphone online instantly. Check mic input levels, audio quality, and record playback.',
    '/mic',
    locale
  )

  const breadcrumbs = generateBreadcrumbListSchema([
    { name: t.breadcrumb_home, path: '/' },
    { name: t.microphone_test, path: '/mic' }
  ], locale)

  const faqSchema = generateFAQPageSchema(faqs, locale)

  return (
    <>
      <JsonLdScript data={howToSchema} />
      <JsonLdScript data={webAppSchema} />
      <JsonLdScript data={breadcrumbs} />
      <JsonLdScript data={faqSchema} />
      
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8 max-w-6xl">
          <Breadcrumbs items={[{ name: t.microphone_test, path: '/mic' }]} locale={locale} />
          
          <Link 
            href={localizePathIfSupported('/', locale)}
            className="inline-block text-sm text-slate-500 hover:text-slate-900 mb-4 transition-colors"
          >
            ← All tools
          </Link>
          
          <div className="mb-4">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              {(t as Record<string, string>).mic_problem_h1 || t.mic_test_title}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl">
              {t.mic_intro}
            </p>
          </div>

          <div className="mb-6">
            <Link 
              href="#test"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              {t.run_microphone_test} →
            </Link>
          </div>

          <div id="test" className="scroll-mt-8 mb-8">
            <MicTool />
          </div>

          <RelatedTools currentPath="/mic" locale={locale} />

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

          {/* Authority: when to test, what the test checks, problems, permissions, then how diagnostic works */}
          <article className="prose prose-slate max-w-none bg-white p-8 md:p-12 rounded-2xl border border-gray-200 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">When Should You Test Your Microphone?</h2>

            <h4 className="text-lg font-semibold text-gray-900 mt-4 mb-2">Before Zoom or Teams calls</h4>
            <p className="text-gray-700 mb-3">
              A quick mic check before joining avoids “can’t hear you” and “no audio” issues. If this test works in your browser, your mic will work in Zoom, Teams, and Meet. Run the <Link href={localizePathIfSupported('/meeting-check', locale)} className="text-blue-600 hover:text-blue-800">full meeting check</Link> to verify camera and mic together.
            </p>

            <h4 className="text-lg font-semibold text-gray-900 mt-4 mb-2">When your mic sounds quiet or distorted</h4>
            <p className="text-gray-700 mb-3">
              Low volume or muffled sound often comes from system input levels, physical mute, or the wrong device. This tool’s level meter shows whether the browser is receiving signal; if it’s low, adjust OS settings or try our <Link href={localizePathIfSupported('/issues/microphone-too-quiet-windows', locale)} className="text-blue-600 hover:text-blue-800">microphone too quiet (Windows)</Link> guide.
            </p>

            <h4 className="text-lg font-semibold text-gray-900 mt-4 mb-2">When apps can&apos;t detect your microphone</h4>
            <p className="text-gray-700 mb-3">
              If an app says “no microphone” or “device not found,” the cause is usually permissions or another app holding the device. Testing here confirms whether the browser can see your mic; if it can’t, fix permissions first. For Zoom specifically, see <Link href={localizePathIfSupported('/issues/microphone-not-working-zoom', locale)} className="text-blue-600 hover:text-blue-800">microphone not working in Zoom</Link>.
            </p>

            <h4 className="text-lg font-semibold text-gray-900 mt-4 mb-2">Before recording or streaming</h4>
            <p className="text-gray-700 mb-6">
              Recording and streaming need consistent input levels and no feedback. Use this test to set levels and confirm there’s no echo or crackle before you go live or hit record.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What This Microphone Test Checks</h2>
            <p className="text-gray-700 mb-2">
              <strong>Input detection:</strong> Whether the browser can access your selected microphone and receive an audio stream.
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Volume level monitoring:</strong> A real-time meter shows how loud the input is so you can adjust system or app gain.
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Device switching:</strong> You can change the microphone in the tool (when the browser offers a device picker) to confirm which device is active.
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Browser permissions:</strong> If the test never gets a signal, the issue is usually a denied or reset permission at the site or system level.
            </p>
            <p className="text-gray-700 mb-6">
              <strong>Hardware response:</strong> Recording and playback confirm that the mic is not only detected but producing usable audio.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Common Microphone Problems This Test Helps Diagnose</h2>
            <p className="text-gray-700 mb-2">
              <strong>Microphone not detected:</strong> No bars or “no device” usually means blocked permissions or another app using the mic. Fix browser and OS permissions, then retest. More: <Link href={localizePathIfSupported('/issues/microphone-not-working-chrome', locale)} className="text-blue-600 hover:text-blue-800">microphone not working in Chrome</Link>.
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Microphone too quiet:</strong> Low or no movement on the meter points to input gain, mute, or wrong device. Raise input level in system sound settings and ensure the correct mic is selected; see <Link href={localizePathIfSupported('/guides/mic-too-quiet', locale)} className="text-blue-600 hover:text-blue-800">microphone too quiet</Link> for more.
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Echo or feedback:</strong> Speakers feeding into the mic cause echo. Use headphones or lower speaker volume. For call-specific echo: <Link href={localizePathIfSupported('/issues/microphone-feedback-loop-problem', locale)} className="text-blue-600 hover:text-blue-800">microphone feedback loop</Link>.
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Static or crackling:</strong> Often driver or USB/connection related. Try another port, update audio drivers, or see <Link href={localizePathIfSupported('/guides/microphone-static-crackling', locale)} className="text-blue-600 hover:text-blue-800">static or crackling sound</Link>.
            </p>
            <p className="text-gray-700 mb-6">
              <strong>Wrong microphone selected:</strong> System or browser may be using a different input. Use the tool’s device list (if shown) or system sound settings to pick the correct mic. <Link href={localizePathIfSupported('/issues/microphone-keeps-switching-input', locale)} className="text-blue-600 hover:text-blue-800">Mic keeps switching input</Link> has more.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Browser Microphone Permissions Explained</h2>
            <p className="text-gray-700 mb-3">
              Browsers ask for microphone access when a site requests it; you must click “Allow” for this test to work. In Chrome, you can manage permissions via the lock icon next to the address bar or in Settings → Privacy and security → Site settings → Microphone.
            </p>
            <p className="text-gray-700 mb-3">
              Windows and macOS add a second layer: even if the browser has permission, the OS can block “desktop” or “app” access to the microphone. If the test fails, check system Privacy/Settings and ensure microphone access is allowed for your browser.
            </p>
            <p className="text-gray-700 mb-6">
              Permissions often fail silently: the page loads but no audio appears, or the prompt never shows if the site was previously blocked. Reset the site’s permission and reload, or use an incognito/private window to get a fresh prompt. For step-by-step Chrome setup: <Link href={localizePathIfSupported('/guides/how-to-enable-microphone-chrome', locale)} className="text-blue-600 hover:text-blue-800">how to enable microphone in Chrome</Link>.
            </p>
            <p className="text-gray-700 mb-6">
              For a full picture of how camera, microphone, and device access work across hardware, OS, and browser, see <Link href={localizePathIfSupported('/guides/how-device-access-works', locale)} className="text-blue-600 hover:text-blue-800">how device access works</Link>.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How this diagnostic works &amp; why problems happen</h2>
            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">{t.mic_how_to_title}</h3>
            
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
              <li><Link href={localizePathIfSupported("/guides/microphone-not-working", locale)} className="text-blue-600 hover:text-blue-800">Microphone not working</Link></li>
              <li><Link href={localizePathIfSupported("/guides/microphone-too-quiet", locale)} className="text-blue-600 hover:text-blue-800">Microphone too quiet</Link></li>
              <li><Link href={localizePathIfSupported("/guides/microphone-static-crackling", locale)} className="text-blue-600 hover:text-blue-800">Static or crackling sound</Link></li>
              <li><Link href={localizePathIfSupported("/guides/microphone-test-zoom", locale)} className="text-blue-600 hover:text-blue-800">Test microphone for Zoom</Link></li>
              <li><Link href={localizePathIfSupported("/guides/microphone-test-microsoft-teams", locale)} className="text-blue-600 hover:text-blue-800">Test microphone for Microsoft Teams</Link></li>
              <li><Link href={localizePathIfSupported("/guides/microphone-not-detected-windows-11", locale)} className="text-blue-600 hover:text-blue-800">Microphone not detected (Windows 11)</Link></li>
              <li><Link href={localizePathIfSupported("/guides/how-to-enable-microphone-chrome", locale)} className="text-blue-600 hover:text-blue-800">Enable microphone in Chrome</Link></li>
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

