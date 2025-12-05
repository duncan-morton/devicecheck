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
  title: 'Android Microphone Test, How to Check Your Mic',
  description: 'Test your Android microphone to verify it works correctly. Check permissions, test in apps, and troubleshoot microphone issues on Android.',
  path: '/guides/android-microphone-test',
  keywords: [
    'android microphone test',
    'test android microphone',
    'android mic test',
    'android microphone not working'
  ]
})

const faqs = [
  {
    question: 'How do I test my Android microphone?',
    answer: 'Use the Voice Recorder app to record a short audio clip and play it back. You can also use our online microphone test in Chrome if you grant microphone permissions. Check Settings → Apps → Permissions → Microphone to ensure apps have permission.'
  },
  {
    question: 'Why is my Android microphone not working?',
    answer: 'Android microphone issues are usually caused by denied app permissions, blocked microphone access, or hardware problems. Check Settings → Apps → Permissions → Microphone to ensure apps have permission, and check for physical blockages like dirt or debris.'
  }
]

export default function AndroidMicrophoneTestPage() {
  const articleSchema = generateArticleSchema(
    'Android Microphone Test, How to Check Your Mic',
    'Test your Android microphone to verify it works correctly. Check permissions, test in apps, and troubleshoot microphone issues on Android.',
    '/guides/android-microphone-test',
    new Date().toISOString(),
    new Date().toISOString()
  )

  const breadcrumbs = generateBreadcrumbListSchema([
    { name: 'Home', path: '/' },
    { name: 'Guides', path: '/guides' },
    { name: 'Android Microphone Test', path: '/guides/android-microphone-test' }
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
            { name: 'Android Microphone Test', path: '/guides/android-microphone-test' }
          ]} />
          
          <TOC contentId="article-content" />
          
          <article id="article-content" className="prose prose-slate max-w-none bg-white p-8 md:p-12 rounded-2xl border border-gray-200">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Android Microphone Test</h1>
            
            <p className="text-lg text-gray-700 mb-8">
              Testing your Android microphone ensures it works for calls, recordings, and video apps. This page shows how to test your Android microphone using built-in apps and browser tools. Check permissions first, then test audio quality.
            </p>

            <p className="text-gray-700 mb-6">
              You can use the <Link href="/mic" className="text-blue-600 hover:text-blue-800">online microphone test</Link> to confirm whether your device is working.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Test Microphone with Voice Recorder</h2>
            <p className="text-gray-700 mb-4">
              Voice Recorder is the easiest way to test your Android microphone. Use it to record and play back audio.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Open the Voice Recorder app</li>
              <li>Tap the record button</li>
              <li>Speak into your Android for 5-10 seconds</li>
              <li>Tap stop to end recording</li>
              <li>Play back the recording to hear audio quality</li>
              <li>If you hear clear audio, your microphone is working</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Check Microphone Permissions</h2>
            <p className="text-gray-700 mb-4">
              Android requires permission for apps to access your microphone. Verify permissions are granted.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Open Settings → Apps → Permissions</li>
              <li>Select Microphone from the permissions list</li>
              <li>Check that apps needing microphone access are enabled</li>
              <li>Toggle on any apps that should have microphone access</li>
              <li>For Chrome, ensure microphone permission is enabled</li>
              <li>Test microphone again after changing permissions</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Test Microphone in Chrome</h2>
            <p className="text-gray-700 mb-4">
              You can test your Android microphone using browser-based tools in Chrome.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Open Chrome on your Android</li>
              <li>Navigate to the <Link href="/mic" className="text-blue-600 hover:text-blue-800 font-semibold">microphone test page</Link></li>
              <li>Tap "Allow" when prompted for microphone access</li>
              <li>Speak into your Android</li>
              <li>Watch the volume meter for activity</li>
              <li>Record and play back to verify audio quality</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Test During Phone Call</h2>
            <p className="text-gray-700 mb-4">
              Make a test call to verify microphone works for phone calls.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Call a friend or family member</li>
              <li>Ask if they can hear you clearly</li>
              <li>Test with speakerphone on and off</li>
              <li>Try different call apps if issues persist</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Check for Physical Blockages</h2>
            <p className="text-gray-700 mb-4">
              Dirt, debris, or case covers can block Android microphones. Check for physical blockages.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Inspect microphone grilles for dirt or debris</li>
              <li>Clean microphone openings with a soft brush</li>
              <li>Remove phone case and test microphone</li>
              <li>Check that case isn't covering microphone openings</li>
              <li>Android phones have multiple microphones; check all openings</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Test Different Microphones</h2>
            <p className="text-gray-700 mb-4">
              Android phones have multiple microphones for different purposes. Test each one.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Bottom microphone: Used for phone calls and recordings</li>
              <li>Front microphone: Used for selfie videos and video calls</li>
              <li>Back microphone: Used for rear camera video recording</li>
              <li>Test each microphone in its respective app</li>
              <li>If one microphone fails, others may still work</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Restart Android Phone</h2>
            <p className="text-gray-700 mb-4">
              Software glitches can prevent microphone access. Restart your Android to reset audio systems.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Press and hold the power button</li>
              <li>Select Restart from the menu</li>
              <li>Wait for phone to restart</li>
              <li>Test microphone again after restart</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Verify Microphone Works</h2>
            <p className="text-gray-700 mb-6">
              After trying these steps, use the <Link href="/mic" className="text-blue-600 hover:text-blue-800 font-semibold">online microphone test</Link> in Chrome to verify your Android microphone is working. The test shows real-time volume levels and confirms device detection.
            </p>

            <RelatedGuides guides={[
              { title: 'iPhone Microphone Test', href: '/guides/iphone-microphone-test' },
              { title: 'Microphone Not Working', href: '/guides/microphone-not-working' },
              { title: 'Microphone Test for Zoom', href: '/guides/microphone-test-zoom' }
            ]} />

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

            <p className="text-gray-700 mb-6 mt-8">
              Use the <Link href="/mic" className="text-blue-600 hover:text-blue-800">online microphone test</Link> to confirm everything is working.
            </p>
          </article>

          <HelpfulWidget />
          <DeviceNavigation />
        </div>
      </div>
      <StickyActionBar toolName="Microphone Test" toolHref="/mic" />
    </>
  )
}

