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
  title: 'Webcam Test for Google Meet',
  description: 'Test your webcam before Google Meet calls. Verify camera works correctly using browser test or Meet settings.',
  path: '/guides/webcam-test-google-meet',
  keywords: [
    'webcam test google meet',
    'google meet camera test',
    'test webcam for google meet',
    'google meet webcam check'
  ]
})

const faqs = [
  {
    question: 'How do I test my webcam for Google Meet?',
    answer: 'Use our online webcam test to verify your camera works before Meet calls. If the test works, your webcam will work in Google Meet. Google Meet uses your browser\'s camera access, so browser tests are reliable.'
  }
]

export default function WebcamTestGoogleMeetPage() {
  const articleSchema = generateArticleSchema(
    'Webcam Test for Google Meet',
    'Test your webcam before Google Meet calls. Verify camera works correctly using browser test or Meet settings.',
    '/guides/webcam-test-google-meet',
    new Date().toISOString(),
    new Date().toISOString()
  )

  const breadcrumbs = generateBreadcrumbListSchema([
    { name: 'Home', path: '/' },
    { name: 'Guides', path: '/guides' },
    { name: 'Webcam Test for Google Meet', path: '/guides/webcam-test-google-meet' }
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
            { name: 'Webcam Test for Google Meet', path: '/guides/webcam-test-google-meet' }
          ]} />
          
          <TOC contentId="article-content" />
          
          <article id="article-content" className="prose prose-slate max-w-none bg-white p-8 md:p-12 rounded-2xl border border-gray-200">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Webcam Test for Google Meet</h1>
            
            <p className="text-lg text-gray-700 mb-8">
              Testing your webcam before Google Meet calls prevents video issues during meetings. This page shows how to verify your webcam works with Google Meet. Use our browser test first, then check Meet settings if needed.
            </p>

            <p className="text-gray-700 mb-6">
              If you need to check your camera quickly, <Link href="/webcam" className="text-blue-600 hover:text-blue-800">run the webcam test</Link>.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Test Webcam in Browser</h2>
            <p className="text-gray-700 mb-4">
              Test your webcam using our online tool before joining Meet calls. Google Meet uses your browser's camera access, so if the test works, your webcam will work in Meet.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Open the <Link href="/webcam" className="text-blue-600 hover:text-blue-800 font-semibold">webcam test page</Link></li>
              <li>Click "Allow" when prompted for camera access</li>
              <li>Check that video feed appears</li>
              <li>Verify resolution and quality</li>
              <li>If the test works, your webcam will work in Google Meet</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Test Webcam in Google Meet</h2>
            <p className="text-gray-700 mb-4">
              Google Meet has built-in webcam testing. Use this to verify settings within Meet.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Join a Google Meet call or create a test meeting</li>
              <li>Click the three dots menu → Settings</li>
              <li>Go to Video tab</li>
              <li>You'll see a preview of your camera</li>
              <li>If you see yourself, your webcam works</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Select Correct Camera in Google Meet</h2>
            <p className="text-gray-700 mb-4">
              Google Meet may be using the wrong camera. Verify the correct device is selected.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Meet Settings → Video → Camera dropdown</li>
              <li>Select your preferred camera from the list</li>
              <li>Test the camera after selecting</li>
              <li>If your camera doesn't appear, check browser permissions</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Check Browser Camera Permissions</h2>
            <p className="text-gray-700 mb-4">
              Google Meet requires browser camera permissions. Verify permissions are granted for meet.google.com.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Click the lock icon in your browser's address bar while on meet.google.com</li>
              <li>Set Camera permission to "Allow"</li>
              <li>Refresh the Meet page after changing permissions</li>
              <li>Test webcam again</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Troubleshoot Google Meet Webcam Issues</h2>
            <p className="text-gray-700 mb-4">
              If your webcam works in the browser test but not in Google Meet, try these steps. For general webcam issues, see the guide on <Link href="/guides/webcam-not-working" className="text-blue-600 hover:text-blue-800">webcam not working</Link>.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Close other applications using the camera</li>
              <li>Refresh the Google Meet page</li>
              <li>Check that Meet is using the correct camera device</li>
              <li>Try a different browser if issues persist</li>
              <li>Verify system camera settings are correct</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Verify Webcam Before Meetings</h2>
            <p className="text-gray-700 mb-6">
              Always test your webcam before important Google Meet calls. Use the <Link href="/webcam" className="text-blue-600 hover:text-blue-800 font-semibold">online webcam test</Link> to confirm everything works. This prevents video issues during meetings.
            </p>

            <RelatedGuides guides={[
              { title: 'Webcam Test for Zoom', href: '/guides/webcam-test-zoom' },
              { title: 'Webcam Test for Microsoft Teams', href: '/guides/webcam-test-microsoft-teams' },
              { title: 'Webcam Not Working', href: '/guides/webcam-not-working' }
            ]} />

            <p className="text-gray-700 mb-6 mt-8">
              <Link href="/webcam" className="text-blue-600 hover:text-blue-800">Run the webcam test</Link> to verify your camera setup.
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
              Use the <Link href="/webcam" className="text-blue-600 hover:text-blue-800">online webcam test</Link> to verify your camera setup.
            </p>
          </article>

          <HelpfulWidget />
          <DeviceNavigation />
        </div>
      </div>
      <StickyActionBar toolName="Webcam Test" toolHref="/webcam" />
    </>
  )
}

