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
  title: 'Webcam Lagging or Low FPS, How to Fix',
  description: 'Fix webcam video that is lagging or has low frame rate. Troubleshoot performance issues, reduce resolution, and optimize settings.',
  path: '/guides/webcam-lagging-low-fps',
  keywords: [
    'webcam lagging',
    'webcam low fps',
    'webcam stuttering',
    'webcam performance',
    'webcam frame rate'
  ]
})

const faqs = [
  {
    question: 'Why is my webcam lagging?',
    answer: 'Webcam lagging is usually caused by high resolution settings, slow USB connection, CPU overload, or multiple apps using the camera. Reduce webcam resolution, close other applications, and ensure the camera is connected to a USB 3.0 port.'
  },
  {
    question: 'How do I fix low FPS on my webcam?',
    answer: 'Reduce webcam resolution in your video app settings. Lower resolutions like 720p use less bandwidth and processing power, resulting in higher frame rates. Also close other applications and ensure your USB connection is fast enough.'
  }
]

export default function WebcamLaggingLowFpsPage() {
  const articleSchema = generateArticleSchema(
    'Webcam Lagging or Low FPS, How to Fix',
    'Fix webcam video that is lagging or has low frame rate. Troubleshoot performance issues, reduce resolution, and optimize settings.',
    '/guides/webcam-lagging-low-fps',
    new Date().toISOString(),
    new Date().toISOString()
  )

  const breadcrumbs = generateBreadcrumbListSchema([
    { name: 'Home', path: '/' },
    { name: 'Guides', path: '/guides' },
    { name: 'Webcam Lagging or Low FPS', path: '/guides/webcam-lagging-low-fps' }
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
            { name: 'Webcam Lagging or Low FPS', path: '/guides/webcam-lagging-low-fps' }
          ]} />
          
          <TOC contentId="article-content" />
          
          <article id="article-content" className="prose prose-slate max-w-none bg-white p-8 md:p-12 rounded-2xl border border-gray-200">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Webcam Lagging or Low FPS</h1>
            
            <p className="text-lg text-gray-700 mb-8">
              Lagging or low frame rate webcam video makes calls choppy and hard to follow. This page covers how to fix webcam performance issues. Reduce resolution first, then check USB connection and system resources.
            </p>

            <p className="text-gray-700 mb-6">
              If you need to check your camera quickly, <Link href="/webcam" className="text-blue-600 hover:text-blue-800">run the webcam test</Link>.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Reduce Webcam Resolution</h2>
            <p className="text-gray-700 mb-4">
              High resolution settings require more processing power and bandwidth. Lower resolution improves frame rate.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Check your video app's camera settings</li>
              <li>Reduce resolution from 1080p to 720p or lower</li>
              <li>Lower resolutions use less CPU and bandwidth</li>
              <li>Test different resolutions to find best performance</li>
              <li>720p is usually sufficient for video calls</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Check USB Connection</h2>
            <p className="text-gray-700 mb-4">
              Slow USB connections can cause webcam lag. Verify connection speed.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Use USB 3.0 or higher ports for external webcams</li>
              <li>Avoid USB hubs; connect directly to computer</li>
              <li>Try a different USB port if lagging persists</li>
              <li>Check USB cable quality and length</li>
              <li>Shorter cables often perform better</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Close Other Applications</h2>
            <p className="text-gray-700 mb-4">
              Multiple applications using system resources can cause webcam lag.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Close unnecessary applications</li>
              <li>Check Task Manager (Windows) or Activity Monitor (Mac) for CPU usage</li>
              <li>Close browser tabs not in use</li>
              <li>Disable background processes if possible</li>
              <li>Test webcam after closing other apps</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Disable Video Enhancements</h2>
            <p className="text-gray-700 mb-4">
              Video enhancement features can reduce frame rate. Disable if lagging occurs.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Check video app settings for enhancement options</li>
              <li>Disable background blur or virtual backgrounds</li>
              <li>Turn off auto-focus if available</li>
              <li>Disable image stabilization if causing lag</li>
              <li>Test performance after disabling enhancements</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Update Camera Drivers</h2>
            <p className="text-gray-700 mb-4">
              Outdated camera drivers can cause performance issues. Update drivers.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Windows:</strong> Device Manager → Imaging devices → Right-click camera → Update driver</li>
              <li><strong>Mac:</strong> System Preferences → Software Update → Install available updates</li>
              <li>Restart your computer after updating drivers</li>
              <li>Test webcam performance again</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Check System Resources</h2>
            <p className="text-gray-700 mb-4">
              Insufficient system resources can cause webcam lag. Monitor CPU and memory usage.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Check CPU usage in Task Manager or Activity Monitor</li>
              <li>Monitor memory usage</li>
              <li>Close resource-intensive applications</li>
              <li>Restart your computer if resources are consistently high</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Test Webcam Performance</h2>
            <p className="text-gray-700 mb-6">
              After making adjustments, use the <Link href="/webcam" className="text-blue-600 hover:text-blue-800 font-semibold">online webcam test</Link> to verify performance. The test shows live video feed and helps you see if lagging is resolved.
            </p>

            <RelatedGuides guides={[
              { title: 'Webcam Too Dark or Grainy', href: '/guides/webcam-too-dark-grainy' },
              { title: 'Webcam Not Working', href: '/guides/webcam-not-working' },
              { title: 'External Webcam Not Recognised', href: '/guides/external-webcam-not-recognised' }
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

