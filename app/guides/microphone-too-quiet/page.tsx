import { Metadata } from 'next'
import { generateMetadata as genMeta } from '@/lib/seo/metadata'
import { JsonLdScript } from '@/components/JsonLdScript'
import { generateArticleSchema, generateBreadcrumbListSchema, generateFAQPageSchema } from '@/lib/seo/jsonLd'
import Breadcrumbs from '@/components/Breadcrumbs'
import Link from 'next/link'

export const revalidate = 86400

export const metadata: Metadata = genMeta({
  title: 'Microphone Too Quiet, How to Increase Volume',
  description: 'Fix a microphone that is too quiet. Increase input volume, enable microphone boost, and adjust positioning for better audio levels.',
  path: '/guides/microphone-too-quiet',
  keywords: [
    'microphone too quiet',
    'mic too quiet',
    'microphone volume low',
    'increase microphone volume',
    'microphone boost'
  ]
})

const faqs = [
  {
    question: 'How do I make my microphone louder?',
    answer: 'Increase microphone input volume in system settings. On Windows, go to Settings → System → Sound → Input and raise the volume slider. Enable microphone boost if available. On Mac, go to System Preferences → Sound → Input and adjust the input volume.'
  },
  {
    question: 'Why is my microphone so quiet?',
    answer: 'Low microphone volume is usually caused by system volume settings, microphone positioning, or hardware limitations. Check system input volume first, then try moving closer to the microphone or enabling microphone boost.'
  },
  {
    question: 'How do I enable microphone boost on Windows?',
    answer: 'Go to Settings → System → Sound → Input → Device Properties → Additional device properties → Levels tab. Increase the microphone level and enable microphone boost if available. Some devices don\'t support boost.'
  },
  {
    question: 'My microphone is quiet in Zoom but works elsewhere. Why?',
    answer: 'Zoom has its own microphone volume settings. Go to Zoom Settings → Audio → Microphone and increase the volume slider. Also check that Zoom is using the correct input device.'
  }
]

export default function MicrophoneTooQuietPage() {
  const articleSchema = generateArticleSchema(
    'Microphone Too Quiet, How to Increase Volume',
    'Fix a microphone that is too quiet. Increase input volume, enable microphone boost, and adjust positioning for better audio levels.',
    '/guides/microphone-too-quiet',
    new Date().toISOString(),
    new Date().toISOString()
  )

  const breadcrumbs = generateBreadcrumbListSchema([
    { name: 'Home', path: '/' },
    { name: 'Guides', path: '/guides' },
    { name: 'Microphone Too Quiet', path: '/guides/microphone-too-quiet' }
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
            { name: 'Microphone Too Quiet', path: '/guides/microphone-too-quiet' }
          ]} />
          
          <article className="prose prose-slate max-w-none bg-white p-8 md:p-12 rounded-2xl border border-gray-200">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Microphone Too Quiet</h1>
            
            <p className="text-lg text-gray-700 mb-8">
              A quiet microphone makes your voice hard to hear in calls and recordings. This page shows how to increase input volume and improve microphone sensitivity. Start with system settings, then adjust positioning and hardware controls.
            </p>

            <p className="text-gray-700 mb-6">
              You can use the <Link href="/mic" className="text-blue-600 hover:text-blue-800">online microphone test</Link> to confirm whether your device is working.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Increase System Input Volume</h2>
            <p className="text-gray-700 mb-4">
              System volume settings control microphone input levels. Adjust these first.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Windows:</strong> Settings → System → Sound → Input → Raise the volume slider</li>
              <li><strong>Mac:</strong> System Preferences → Sound → Input → Increase input volume</li>
              <li>Right-click the speaker icon (Windows) for quick access to sound settings</li>
              <li>Test volume after each adjustment</li>
            </ul>
            <p className="text-gray-700 mb-6">
              Use the <Link href="/mic" className="text-blue-600 hover:text-blue-800 font-semibold">microphone test</Link> to see real-time volume levels. The meter should show green or yellow bars when you speak normally.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Enable Microphone Boost</h2>
            <p className="text-gray-700 mb-4">
              Microphone boost amplifies input signal beyond normal levels. Not all devices support this feature.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Windows:</strong> Settings → System → Sound → Input → Device Properties → Additional device properties → Levels tab → Enable microphone boost</li>
              <li>Boost increases sensitivity but may also increase background noise</li>
              <li>Start with low boost levels and increase if needed</li>
              <li>Some USB microphones have built-in gain controls instead</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Adjust Microphone Positioning</h2>
            <p className="text-gray-700 mb-4">
              Distance and angle affect microphone volume. Position the microphone correctly.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Keep the microphone 6 to 12 inches from your mouth</li>
              <li>Position it directly in front of you, not to the side</li>
              <li>Avoid covering the microphone with your hand or clothing</li>
              <li>For headset microphones, position the boom near your mouth</li>
              <li>Test different positions to find the best volume</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Check Hardware Gain Controls</h2>
            <p className="text-gray-700 mb-4">
              Some microphones have physical volume or gain controls on the device itself.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Look for volume dials or buttons on USB microphones</li>
              <li>Check inline controls on headset cables</li>
              <li>Verify external audio interfaces have gain knobs turned up</li>
              <li>Consult your microphone's manual for control locations</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Adjust Application-Specific Settings</h2>
            <p className="text-gray-700 mb-4">
              Some applications have their own microphone volume controls that override system settings. For video conferencing apps, see the guides for <Link href="/guides/microphone-test-zoom" className="text-blue-600 hover:text-blue-800">testing microphone for Zoom</Link> or <Link href="/guides/microphone-test-microsoft-teams" className="text-blue-600 hover:text-blue-800">Microsoft Teams</Link> to adjust app-specific settings.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Zoom:</strong> Settings → Audio → Microphone → Increase volume slider</li>
              <li><strong>Teams:</strong> Settings → Devices → Microphone → Adjust volume</li>
              <li><strong>Discord:</strong> User Settings → Voice & Video → Input Volume → Increase slider</li>
              <li>Check each application's audio settings individually</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Test Different Microphones</h2>
            <p className="text-gray-700 mb-4">
              If volume remains low after adjustments, the microphone hardware may be the issue.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Test with a different microphone if available</li>
              <li>Compare built-in laptop mic with external USB microphone</li>
              <li>Check if the microphone works better on another computer</li>
              <li>Some microphones have lower sensitivity by design</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Verify Volume Levels</h2>
            <p className="text-gray-700 mb-6">
              After making adjustments, use the <Link href="/mic" className="text-blue-600 hover:text-blue-800 font-semibold">online microphone test</Link> to verify volume levels. The test shows real-time input levels and helps you find the optimal settings.
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 my-8">
              <h3 className="font-semibold text-blue-900 mb-2">Related Guides</h3>
              <ul className="space-y-2 text-sm text-blue-800">
                <li><Link href="/guides/microphone-not-working" className="hover:text-blue-600 underline">Microphone Not Working</Link></li>
                <li><Link href="/guides/microphone-static-crackling" className="hover:text-blue-600 underline">Microphone Static or Crackling</Link></li>
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
                <strong>Next step:</strong> Test your microphone volume to confirm levels are adequate.
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

