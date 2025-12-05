import { Metadata } from 'next'
import { generateMetadata as genMeta } from '@/lib/seo/metadata'
import { JsonLdScript } from '@/components/JsonLdScript'
import { generateArticleSchema, generateBreadcrumbListSchema, generateFAQPageSchema } from '@/lib/seo/jsonLd'
import Breadcrumbs from '@/components/Breadcrumbs'
import Link from 'next/link'

export const revalidate = 86400

export const metadata: Metadata = genMeta({
  title: 'Webcam Not Working, Quick Fix Guide',
  description: 'Fix a webcam that is not working in your browser or apps. Follow these quick checks to confirm device detection and permissions.',
  path: '/guides/webcam-not-working',
  keywords: [
    'webcam not working',
    'camera not working',
    'webcam not detected',
    'webcam fix',
    'camera troubleshooting'
  ]
})

const faqs = [
  {
    question: 'Why is my webcam not working?',
    answer: 'Webcam issues are usually caused by denied browser permissions, physical privacy covers, wrong camera device selection, or another application using the camera. Check browser permissions first, then verify system settings.'
  },
  {
    question: 'How do I fix webcam not working in Chrome?',
    answer: 'Click the lock icon in Chrome\'s address bar, select Site Settings, then set Camera to Allow. If that doesn\'t work, go to chrome://settings/content/camera and ensure camera access is enabled globally.'
  },
  {
    question: 'My webcam works in one app but not another. Why?',
    answer: 'Only one application can access your webcam at a time. Close other apps using the camera, then try the app again. Also check if the app has its own camera permission settings.'
  }
]

export default function WebcamNotWorkingPage() {
  const articleSchema = generateArticleSchema(
    'Webcam Not Working, Quick Fix Guide',
    'Fix a webcam that is not working in your browser or apps. Follow these quick checks to confirm device detection and permissions.',
    '/guides/webcam-not-working',
    new Date().toISOString(),
    new Date().toISOString()
  )

  const breadcrumbs = generateBreadcrumbListSchema([
    { name: 'Home', path: '/' },
    { name: 'Guides', path: '/guides' },
    { name: 'Webcam Not Working', path: '/guides/webcam-not-working' }
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
            { name: 'Webcam Not Working', path: '/guides/webcam-not-working' }
          ]} />
          
          <article className="prose prose-slate max-w-none bg-white p-8 md:p-12 rounded-2xl border border-gray-200">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Webcam Not Working</h1>
            
            <p className="text-lg text-gray-700 mb-8">
              A webcam that stops working prevents video calls and recordings. This page covers the most common causes and fixes. Start with browser permissions, then check system settings and hardware connections.
            </p>

            <p className="text-gray-700 mb-6">
              If you need to check your camera quickly, <Link href="/webcam" className="text-blue-600 hover:text-blue-800">run the webcam test</Link>.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Check Browser Permissions</h2>
            <p className="text-gray-700 mb-4">
              Browser permissions are the most common cause of webcam issues. Each browser handles permissions differently.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Click the lock or camera icon in your browser's address bar</li>
              <li>Set camera permission to "Allow"</li>
              <li>Refresh the page after changing permissions</li>
              <li>If no icon appears, check browser settings for site permissions</li>
            </ul>
            <p className="text-gray-700 mb-6">
              Use the <Link href="/webcam" className="text-blue-600 hover:text-blue-800 font-semibold">online webcam test</Link> to verify permissions are working. If the test shows no video, permissions are likely the issue.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Check Physical Privacy Covers</h2>
            <p className="text-gray-700 mb-4">
              Many laptops have sliding privacy covers over the camera. Ensure the cover is open.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Look for a sliding cover above your laptop screen</li>
              <li>Slide the cover open to reveal the camera</li>
              <li>Check for stickers or tape covering the camera</li>
              <li>Remove any physical obstructions</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Verify Camera Device Selection</h2>
            <p className="text-gray-700 mb-4">
              Your system may be using the wrong camera. Check which camera device is active.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Windows:</strong> Settings → Privacy → Camera → Check which apps can access camera</li>
              <li><strong>Mac:</strong> System Preferences → Security & Privacy → Camera → Verify browser is checked</li>
              <li>Disconnect and reconnect USB webcams if they're not appearing</li>
              <li>Test each available camera device to find the working one</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Close Other Applications</h2>
            <p className="text-gray-700 mb-4">
              Only one application can access your webcam at a time. Other apps may be blocking access.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Close Zoom, Teams, Skype, Discord, or other communication apps</li>
              <li>Check Task Manager (Windows) or Activity Monitor (Mac) for background processes</li>
              <li>Restart your browser after closing other applications</li>
              <li>Try the webcam test again</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Check System Camera Settings</h2>
            <p className="text-gray-700 mb-4">
              System-level camera permissions may be disabled. Verify these are enabled. For Chrome-specific issues, see the guide on <Link href="/guides/webcam-not-detected-chrome" className="text-blue-600 hover:text-blue-800">webcam not detected in Chrome</Link>.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Windows:</strong> Settings → Privacy → Camera → Ensure "Allow apps to access your camera" is enabled</li>
              <li><strong>Mac:</strong> System Preferences → Security & Privacy → Camera → Check your browser</li>
              <li>Restart your browser after changing system settings</li>
              <li>Test the webcam again</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Update Camera Drivers</h2>
            <p className="text-gray-700 mb-4">
              Outdated or corrupted camera drivers can prevent webcam detection.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Windows:</strong> Device Manager → Imaging devices → Right-click camera → Update driver</li>
              <li><strong>Mac:</strong> System Preferences → Software Update → Install any available updates</li>
              <li>Restart your computer after updating drivers</li>
              <li>Test the webcam again</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Test Hardware Connection</h2>
            <p className="text-gray-700 mb-4">
              Physical connection issues can prevent webcam detection.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Unplug and replug USB webcams</li>
              <li>Try a different USB port</li>
              <li>Test the webcam on another computer</li>
              <li>Check for visible damage to cables or connectors</li>
              <li>For built-in cameras, check if they appear in Device Manager</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Verify Webcam Works</h2>
            <p className="text-gray-700 mb-6">
              After trying these steps, use the <Link href="/webcam" className="text-blue-600 hover:text-blue-800 font-semibold">online webcam test</Link> to confirm the device is working. The test shows live video feed and allows you to verify camera detection.
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 my-8">
              <h3 className="font-semibold text-blue-900 mb-2">Related Guides</h3>
              <ul className="space-y-2 text-sm text-blue-800">
                <li><Link href="/guides/webcam-not-detected-chrome" className="hover:text-blue-600 underline">Webcam Not Detected in Chrome</Link></li>
                <li><Link href="/guides/webcam-not-detected-mac" className="hover:text-blue-600 underline">Webcam Not Detected on Mac</Link></li>
                <li><Link href="/guides/webcam-test-zoom" className="hover:text-blue-600 underline">Webcam Test for Zoom</Link></li>
              </ul>
            </div>

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

            <div className="mt-8 p-6 bg-gray-50 rounded-xl border border-gray-200">
              <p className="text-gray-700 mb-4">
                <strong>Next step:</strong> Test your webcam to confirm it's working correctly.
              </p>
              <Link 
                href="/webcam" 
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Run Webcam Test →
              </Link>
            </div>
          </article>
        </div>
      </div>
    </>
  )
}

