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
  title: 'Webcam Not Detected on Mac, How to Fix',
  description: 'Fix webcam not detected on Mac. Troubleshoot permissions, device selection, and macOS settings to get your camera working.',
  path: '/guides/webcam-not-detected-mac',
  keywords: [
    'webcam not detected mac',
    'camera not detected mac',
    'mac webcam not working',
    'macbook camera not working'
  ]
})

const faqs = [
  {
    question: 'Why is my webcam not detected on Mac?',
    answer: 'Mac webcam detection issues are usually caused by denied camera permissions, system privacy settings, or another app using the camera. Check System Preferences → Security & Privacy → Camera first, then verify the camera isn\'t being used by another app.'
  },
  {
    question: 'How do I enable webcam on Mac?',
    answer: 'Go to System Preferences → Security & Privacy → Privacy tab → Camera. Check the box next to your browser or application. Also verify the camera isn\'t covered and no other apps are using it.'
  }
]

export default function WebcamNotDetectedMacPage() {
  const articleSchema = generateArticleSchema(
    'Webcam Not Detected on Mac, How to Fix',
    'Fix webcam not detected on Mac. Troubleshoot permissions, device selection, and macOS settings to get your camera working.',
    '/guides/webcam-not-detected-mac',
    new Date().toISOString(),
    new Date().toISOString()
  )

  const breadcrumbs = generateBreadcrumbListSchema([
    { name: 'Home', path: '/' },
    { name: 'Guides', path: '/guides' },
    { name: 'Webcam Not Detected on Mac', path: '/guides/webcam-not-detected-mac' }
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
            { name: 'Webcam Not Detected on Mac', path: '/guides/webcam-not-detected-mac' }
          ]} />
          
          <TOC contentId="article-content" />
          
          <article id="article-content" className="prose prose-slate max-w-none bg-white p-8 md:p-12 rounded-2xl border border-gray-200">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Webcam Not Detected on Mac</h1>
            
            <p className="text-lg text-gray-700 mb-8">
              When your Mac doesn't detect your webcam, apps and websites can't access video input. This page covers how to fix webcam detection issues on Mac. Check permissions first, then verify system settings.
            </p>

            <p className="text-gray-700 mb-6">
              If you need to check your camera quickly, <Link href="/webcam" className="text-blue-600 hover:text-blue-800">run the webcam test</Link>.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Check Camera Permissions</h2>
            <p className="text-gray-700 mb-4">
              Mac requires explicit permission for apps to access your camera. Verify permissions are granted.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Open System Preferences → Security & Privacy</li>
              <li>Go to Privacy tab</li>
              <li>Select Camera from the left sidebar</li>
              <li>Check the box next to your browser or application</li>
              <li>If the app isn't listed, click the lock icon to unlock, then add it</li>
              <li>Restart the application after granting permission</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Check Physical Privacy Covers</h2>
            <p className="text-gray-700 mb-4">
              Some MacBooks have sliding privacy covers or stickers that can block the camera.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Look for a sliding cover above your MacBook screen</li>
              <li>Slide the cover open to reveal the camera</li>
              <li>Check for stickers or tape covering the camera</li>
              <li>Remove any physical obstructions</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Close Other Applications</h2>
            <p className="text-gray-700 mb-4">
              Only one application can access your webcam at a time. Close other apps using the camera. For general webcam issues, see the guide on <Link href="/guides/webcam-not-working" className="text-blue-600 hover:text-blue-800">webcam not working</Link>.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Close Zoom, Teams, Skype, or other video apps</li>
              <li>Check Activity Monitor for background processes using the camera</li>
              <li>Force quit any apps that won't close normally</li>
              <li>Restart your browser after closing other applications</li>
              <li>Try the webcam test again</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Test USB Webcam Connections</h2>
            <p className="text-gray-700 mb-4">
              USB webcams may not be properly recognized. Verify connections.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Unplug and reconnect USB webcams</li>
              <li>Try a different USB port</li>
              <li>Check System Information → USB to see if the device is recognized</li>
              <li>Test with a different USB cable if available</li>
              <li>For external cameras, check driver installation</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Reset Camera System</h2>
            <p className="text-gray-700 mb-4">
              Corrupted camera settings can prevent webcam detection. Reset the camera system.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Open Terminal</li>
              <li>Type: sudo killall VDCAssistant</li>
              <li>Press Enter and enter your password</li>
              <li>Wait a few seconds for camera system to restart</li>
              <li>Test webcam again</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Update macOS</h2>
            <p className="text-gray-700 mb-4">
              Outdated macOS versions can have camera compatibility issues. Update if needed.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Open System Preferences → Software Update</li>
              <li>Check for available updates</li>
              <li>Install any macOS updates</li>
              <li>Restart your Mac after updating</li>
              <li>Test webcam again</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Test Webcam After Fixes</h2>
            <p className="text-gray-700 mb-6">
              After trying these steps, use the <Link href="/webcam" className="text-blue-600 hover:text-blue-800 font-semibold">online webcam test</Link> to verify your Mac detects your webcam. The test shows live video feed and confirms device detection.
            </p>

            <RelatedGuides guides={[
              { title: 'Webcam Not Working', href: '/guides/webcam-not-working' },
              { title: 'Webcam Not Detected in Chrome', href: '/guides/webcam-not-detected-chrome' },
              { title: 'Webcam Test for Zoom', href: '/guides/webcam-test-zoom' }
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

