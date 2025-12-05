import { Metadata } from 'next'
import { generateMetadata as genMeta } from '@/lib/seo/metadata'
import JsonLdScript from '@/components/JsonLdScript'
import { generateArticleSchema, generateBreadcrumbListSchema, generateFAQPageSchema } from '@/lib/seo/jsonLd'
import Breadcrumbs from '@/components/Breadcrumbs'
import Link from 'next/link'

export const revalidate = 86400

export const metadata: Metadata = genMeta({
  title: 'Microphone Static or Crackling, How to Fix',
  description: 'Fix microphone static, crackling, or distortion. Check connections, reduce interference, and adjust audio settings to eliminate audio problems.',
  path: '/guides/microphone-static-crackling',
  keywords: [
    'microphone static',
    'mic crackling',
    'microphone distortion',
    'audio static',
    'microphone interference'
  ]
})

const faqs = [
  {
    question: 'Why is my microphone making static noise?',
    answer: 'Static noise is usually caused by loose connections, electrical interference, damaged cables, or driver issues. Check USB connections first, then try a different port or cable. Update audio drivers if the problem persists.'
  },
  {
    question: 'How do I fix microphone crackling?',
    answer: 'Crackling is often caused by USB port issues, driver problems, or sample rate mismatches. Try a different USB port, update audio drivers, and check that your system sample rate matches your microphone\'s capabilities.'
  },
  {
    question: 'Microphone works but has background static. How to fix?',
    answer: 'Background static can be caused by electrical interference, poor cable quality, or gain settings too high. Move away from electrical devices, use a shorter or higher-quality cable, and reduce microphone boost or gain levels.'
  }
]

export default function MicrophoneStaticCracklingPage() {
  const articleSchema = generateArticleSchema(
    'Microphone Static or Crackling, How to Fix',
    'Fix microphone static, crackling, or distortion. Check connections, reduce interference, and adjust audio settings to eliminate audio problems.',
    '/guides/microphone-static-crackling',
    new Date().toISOString(),
    new Date().toISOString()
  )

  const breadcrumbs = generateBreadcrumbListSchema([
    { name: 'Home', path: '/' },
    { name: 'Guides', path: '/guides' },
    { name: 'Microphone Static or Crackling', path: '/guides/microphone-static-crackling' }
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
            { name: 'Microphone Static or Crackling', path: '/guides/microphone-static-crackling' }
          ]} />
          
          <article className="prose prose-slate max-w-none bg-white p-8 md:p-12 rounded-2xl border border-gray-200">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Microphone Static or Crackling</h1>
            
            <p className="text-lg text-gray-700 mb-8">
              Static or crackling in microphone audio makes your voice hard to understand. This page covers common causes and fixes. Check connections first, then address interference and driver issues.
            </p>

            <p className="text-gray-700 mb-6">
              You can use the <Link href="/mic" className="text-blue-600 hover:text-blue-800">online microphone test</Link> to confirm whether your device is working.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Check USB Connections</h2>
            <p className="text-gray-700 mb-4">
              Loose or damaged USB connections cause static and crackling. Verify connections are secure.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Unplug and firmly reconnect USB microphones</li>
              <li>Try a different USB port, preferably USB 3.0 or higher</li>
              <li>Check for visible damage to USB cables or connectors</li>
              <li>Avoid USB hubs; connect directly to the computer</li>
              <li>Test with a different USB cable if available</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Reduce Electrical Interference</h2>
            <p className="text-gray-700 mb-4">
              Electrical devices can cause interference that creates static in microphone audio.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Move the microphone away from monitors, speakers, and power supplies</li>
              <li>Keep USB cables away from power cables</li>
              <li>Turn off nearby fluorescent lights or LED strips</li>
              <li>Unplug other USB devices to test for interference</li>
              <li>Use shorter USB cables when possible</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Adjust Gain and Boost Settings</h2>
            <p className="text-gray-700 mb-4">
              Gain or boost set too high can cause distortion and crackling. Lower these settings. If your microphone is too quiet after reducing gain, see the guide on <Link href="/guides/microphone-too-quiet" className="text-blue-600 hover:text-blue-800">microphone too quiet</Link> for alternative solutions.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Reduce microphone boost in Windows Sound Settings</li>
              <li>Lower input volume if it's set to maximum</li>
              <li>Check application-specific gain settings</li>
              <li>Test the microphone after each adjustment</li>
            </ul>
            <p className="text-gray-700 mb-6">
              Use the <Link href="/mic" className="text-blue-600 hover:text-blue-800 font-semibold">microphone test</Link> to monitor audio quality while adjusting settings. The test shows real-time levels and allows playback to hear any static or distortion.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Update Audio Drivers</h2>
            <p className="text-gray-700 mb-4">
              Outdated or corrupted audio drivers can cause static and crackling. Update drivers.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Windows:</strong> Device Manager → Sound, video and game controllers → Right-click audio device → Update driver</li>
              <li><strong>Mac:</strong> System Preferences → Software Update → Install available updates</li>
              <li>Restart your computer after updating drivers</li>
              <li>Check manufacturer website for latest drivers if Windows Update doesn't find them</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Check Sample Rate Settings</h2>
            <p className="text-gray-700 mb-4">
              Sample rate mismatches between system and microphone can cause crackling.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Windows:</strong> Sound Settings → Device Properties → Advanced → Check sample rate matches microphone specs</li>
              <li>Try 44.1 kHz or 48 kHz as standard rates</li>
              <li>Some microphones require specific sample rates</li>
              <li>Check microphone documentation for recommended settings</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Test Cable Quality</h2>
            <p className="text-gray-700 mb-4">
              Poor quality or damaged cables can introduce static. Test with different cables.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Replace USB cables if they show signs of wear</li>
              <li>Use shorter cables to reduce interference</li>
              <li>Try shielded USB cables for better signal quality</li>
              <li>Check for kinks or damage along cable length</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Verify Microphone Quality</h2>
            <p className="text-gray-700 mb-6">
              After trying these steps, use the <Link href="/mic" className="text-blue-600 hover:text-blue-800 font-semibold">online microphone test</Link> to verify audio quality. Record and play back to hear if static or crackling persists.
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 my-8">
              <h3 className="font-semibold text-blue-900 mb-2">Related Guides</h3>
              <ul className="space-y-2 text-sm text-blue-800">
                <li><Link href="/guides/microphone-not-working" className="hover:text-blue-600 underline">Microphone Not Working</Link></li>
                <li><Link href="/guides/microphone-too-quiet" className="hover:text-blue-600 underline">Microphone Too Quiet</Link></li>
                <li><Link href="/guides/microphone-test-zoom" className="hover:text-blue-600 underline">Microphone Test for Zoom</Link></li>
              </ul>
            </div>

            <p className="text-gray-700 mb-6 mt-8">
              You can use the <Link href="/mic" className="text-blue-600 hover:text-blue-800">online microphone test</Link> to confirm everything is working.
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
                <strong>Next step:</strong> Test your microphone to check for static or crackling.
              </p>
              <Link 
                href="/mic" 
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Run Microphone Test →
              </Link>
            </div>
          </article>
        </div>
      </div>
    </>
  )
}

