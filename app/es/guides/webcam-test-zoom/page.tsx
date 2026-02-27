import { Metadata } from 'next'
import { generateMetadata as genMeta } from '@/lib/seo/metadata'
import JsonLdScript from '@/components/JsonLdScript'
import { generateArticleSchema, generateBreadcrumbListSchema, generateFAQPageSchema } from '@/lib/seo/jsonLd'
import Breadcrumbs from '@/components/Breadcrumbs'
import TOC from '@/components/TOC'
import RelatedGuides from '@/components/RelatedGuides'
import HelpfulWidget from '@/components/HelpfulWidget'
import Link from 'next/link'

export const revalidate = 86400

export const metadata: Metadata = genMeta({
  title: 'Webcam Test for Zoom, Quick Check Guide',
  description: 'Test your webcam before Zoom meetings. Verify camera works correctly using browser test or Zoom settings.',
  path: '/guides/webcam-test-zoom',
  keywords: [
    'webcam test zoom',
    'zoom camera test',
    'test webcam for zoom',
    'zoom webcam check'
  ]
})

const faqs = [
  {
    question: 'How do I test my webcam for Zoom?',
    answer: 'Use our online webcam test to verify your camera works before joining Zoom meetings. If the test works, your webcam will work in Zoom. You can also test in Zoom by going to Settings → Video → You\'ll see a preview of your camera.'
  },
  {
    question: 'My webcam works in the test but not in Zoom. Why?',
    answer: 'Check Zoom\'s video settings. Go to Zoom Settings → Video → Camera and ensure the correct device is selected. Also verify Zoom has camera permissions in your system settings.'
  }
]

export default function WebcamTestZoomPage() {
  const articleSchema = generateArticleSchema(
    'Webcam Test for Zoom, Quick Check Guide',
    'Test your webcam before Zoom meetings. Verify camera works correctly using browser test or Zoom settings.',
    '/guides/webcam-test-zoom',
    new Date().toISOString(),
    new Date().toISOString()
  )

  const breadcrumbs = generateBreadcrumbListSchema([
    { name: 'Home', path: '/' },
    { name: 'Guides', path: '/guides' },
    { name: 'Webcam Test for Zoom', path: '/guides/webcam-test-zoom' }
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
            { name: 'Webcam Test for Zoom', path: '/guides/webcam-test-zoom' }
          ]} />
          
          <TOC contentId="article-content" />
          
          <article id="article-content" className="prose prose-slate max-w-none bg-white p-8 md:p-12 rounded-2xl border border-gray-200">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Webcam Test for Zoom</h1>
            
            <p className="text-lg text-gray-700 mb-8">
              Testing your webcam before Zoom meetings prevents video issues during calls. This page shows how to verify your webcam works with Zoom. Use our browser test first, then check Zoom settings if needed.
            </p>

            <p className="text-gray-700 mb-6">
              If you need to check your camera quickly, <Link href="/webcam" className="text-blue-600 hover:text-blue-800">run the webcam test</Link>.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Test Webcam in Browser</h2>
            <p className="text-gray-700 mb-4">
              Test your webcam using our online tool before opening Zoom. If the test works, your webcam will work in Zoom.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Open the <Link href="/webcam" className="text-blue-600 hover:text-blue-800 font-semibold">webcam test page</Link></li>
              <li>Click "Allow" when prompted for camera access</li>
              <li>Check that video feed appears</li>
              <li>Verify resolution and quality</li>
              <li>If the test works, your webcam will work in Zoom</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Test Webcam in Zoom Settings</h2>
            <p className="text-gray-700 mb-4">
              Zoom has built-in webcam testing. Use this to verify settings within the Zoom app.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Open Zoom application</li>
              <li>Go to Settings → Video</li>
              <li>You'll see a preview of your camera</li>
              <li>If you see yourself, your webcam works</li>
              <li>Adjust video settings if needed</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Select Correct Camera in Zoom</h2>
            <p className="text-gray-700 mb-4">
              Zoom may be using the wrong camera. Verify the correct device is selected.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Zoom Settings → Video → Camera dropdown</li>
              <li>Select your preferred camera from the list</li>
              <li>Test the camera after selecting</li>
              <li>If your camera doesn't appear, check system settings</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Check Zoom Camera Permissions</h2>
            <p className="text-gray-700 mb-4">
              Zoom needs camera permissions to access your device. Verify permissions are granted.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Windows:</strong> Settings → Privacy → Camera → Ensure Zoom is allowed</li>
              <li><strong>Mac:</strong> System Preferences → Security & Privacy → Camera → Check Zoom</li>
              <li>Restart Zoom after changing permissions</li>
              <li>Test webcam again</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Adjust Zoom Video Settings</h2>
            <p className="text-gray-700 mb-4">
              Zoom has video quality and enhancement settings. Adjust these for better video.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Zoom Settings → Video → Adjust video quality</li>
              <li>Enable or disable video enhancements</li>
              <li>Test different settings to find optimal quality</li>
              <li>Check that resolution matches your webcam capabilities</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Troubleshoot Zoom Webcam Issues</h2>
            <p className="text-gray-700 mb-4">
              If your webcam works in the browser test but not in Zoom, try these steps. If the webcam isn't working at all, see the guide on <Link href="/guides/webcam-not-working" className="text-blue-600 hover:text-blue-800">webcam not working</Link> for comprehensive troubleshooting.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Close other applications using the camera</li>
              <li>Restart Zoom application</li>
              <li>Check that Zoom is using the correct camera device</li>
              <li>Update Zoom to the latest version</li>
              <li>Verify system camera settings are correct</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Verify Webcam Before Meetings</h2>
            <p className="text-gray-700 mb-6">
              Always test your webcam before important Zoom meetings. Use the <Link href="/webcam" className="text-blue-600 hover:text-blue-800 font-semibold">online webcam test</Link> to confirm everything works. This prevents video issues during calls.
            </p>

            <RelatedGuides guides={[
              { title: 'Webcam Test for Microsoft Teams', href: '/guides/webcam-test-microsoft-teams' },
              { title: 'Webcam Test for Google Meet', href: '/guides/webcam-test-google-meet' },
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
        </div>
      </div>
    </>
  )
}

