import { Metadata } from 'next'
import { generateMetadata as genMeta } from '@/lib/seo/metadata'
import { JsonLdScript } from '@/components/JsonLdScript'
import { generateArticleSchema, generateBreadcrumbListSchema, generateFAQPageSchema } from '@/lib/seo/jsonLd'
import Breadcrumbs from '@/components/Breadcrumbs'
import Link from 'next/link'

export const revalidate = 86400

export const metadata: Metadata = genMeta({
  title: 'Webcam Not Detected in Chrome, How to Fix',
  description: 'Fix webcam not detected in Chrome browser. Troubleshoot permissions, device selection, and Chrome settings to get your camera working.',
  path: '/guides/webcam-not-detected-chrome',
  keywords: [
    'webcam not detected chrome',
    'camera not detected chrome',
    'chrome webcam not working',
    'chrome camera permission'
  ]
})

const faqs = [
  {
    question: 'Why is my webcam not detected in Chrome?',
    answer: 'Chrome webcam detection issues are usually caused by denied camera permissions, system privacy settings, or another app using the camera. Check chrome://settings/content/camera first, then verify system camera permissions.'
  },
  {
    question: 'How do I enable webcam in Chrome?',
    answer: 'Click the lock icon in Chrome\'s address bar, then set Camera to Allow. Alternatively, go to chrome://settings/content/camera and ensure camera access is enabled. Refresh the page after changing settings.'
  }
]

export default function WebcamNotDetectedChromePage() {
  const articleSchema = generateArticleSchema(
    'Webcam Not Detected in Chrome, How to Fix',
    'Fix webcam not detected in Chrome browser. Troubleshoot permissions, device selection, and Chrome settings to get your camera working.',
    '/guides/webcam-not-detected-chrome',
    new Date().toISOString(),
    new Date().toISOString()
  )

  const breadcrumbs = generateBreadcrumbListSchema([
    { name: 'Home', path: '/' },
    { name: 'Guides', path: '/guides' },
    { name: 'Webcam Not Detected in Chrome', path: '/guides/webcam-not-detected-chrome' }
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
            { name: 'Webcam Not Detected in Chrome', path: '/guides/webcam-not-detected-chrome' }
          ]} />
          
          <article className="prose prose-slate max-w-none bg-white p-8 md:p-12 rounded-2xl border border-gray-200">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Webcam Not Detected in Chrome</h1>
            
            <p className="text-lg text-gray-700 mb-8">
              When Chrome doesn't detect your webcam, websites can't access video input. This page covers how to fix webcam detection issues in Chrome. Check browser permissions first, then verify system settings.
            </p>

            <p className="text-gray-700 mb-6">
              If you need to check your camera quickly, <Link href="/webcam" className="text-blue-600 hover:text-blue-800">run the webcam test</Link>.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Enable Camera Permission in Chrome</h2>
            <p className="text-gray-700 mb-4">
              Chrome requires permission to access your webcam. Verify permissions are granted.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Click the lock icon in Chrome's address bar</li>
              <li>Find "Camera" in the permissions list</li>
              <li>Change the setting from "Block" to "Allow"</li>
              <li>Refresh the page after changing the setting</li>
              <li>The website can now access your webcam</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Check Chrome Camera Settings</h2>
            <p className="text-gray-700 mb-4">
              Chrome has global camera settings that control access for all websites.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Type chrome://settings/content/camera in the address bar</li>
              <li>Press Enter to open camera settings</li>
              <li>Ensure "Ask before accessing" is enabled</li>
              <li>Review blocked sites and remove if needed</li>
              <li>Return to the website and try again</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Check System Camera Permissions</h2>
            <p className="text-gray-700 mb-4">
              System-level camera permissions can override browser settings. Verify these are enabled. For general webcam issues, see the guide on <Link href="/guides/webcam-not-working" className="text-blue-600 hover:text-blue-800">webcam not working</Link>.
              Chrome also requires system-level camera permissions. Verify these are enabled.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Windows:</strong> Settings → Privacy → Camera → Ensure Chrome is allowed</li>
              <li><strong>Mac:</strong> System Preferences → Security & Privacy → Camera → Check Chrome</li>
              <li>Restart Chrome after changing system permissions</li>
              <li>Test webcam again</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Close Other Applications</h2>
            <p className="text-gray-700 mb-4">
              Only one application can access your webcam at a time. Close other apps using the camera.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Close Zoom, Teams, Skype, or other video apps</li>
              <li>Check Task Manager (Windows) or Activity Monitor (Mac) for background processes</li>
              <li>Restart Chrome after closing other applications</li>
              <li>Try the webcam test again</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Select Correct Camera Device</h2>
            <p className="text-gray-700 mb-4">
              Chrome may be trying to use the wrong camera. Select the correct device.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>When a site requests camera access, Chrome may show a device selector</li>
              <li>Choose the correct webcam from the dropdown</li>
              <li>If no selector appears, check system settings for default camera</li>
              <li>Test with the <Link href="/webcam" className="text-blue-600 hover:text-blue-800 font-semibold">webcam test</Link> to verify device selection</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Update Chrome</h2>
            <p className="text-gray-700 mb-4">
              Outdated Chrome versions can have camera compatibility issues. Update Chrome.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Open Chrome → Settings → About Chrome</li>
              <li>Chrome will check for updates automatically</li>
              <li>Install any available updates</li>
              <li>Restart Chrome after updating</li>
              <li>Test webcam again</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Test Webcam After Fixes</h2>
            <p className="text-gray-700 mb-6">
              After trying these steps, use the <Link href="/webcam" className="text-blue-600 hover:text-blue-800 font-semibold">online webcam test</Link> to verify Chrome detects your webcam. The test shows live video feed and confirms device detection.
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 my-8">
              <h3 className="font-semibold text-blue-900 mb-2">Related Guides</h3>
              <ul className="space-y-2 text-sm text-blue-800">
                <li><Link href="/guides/webcam-not-working" className="hover:text-blue-600 underline">Webcam Not Working</Link></li>
                <li><Link href="/guides/webcam-not-detected-mac" className="hover:text-blue-600 underline">Webcam Not Detected on Mac</Link></li>
                <li><Link href="/guides/how-to-enable-camera-browser" className="hover:text-blue-600 underline">How to Enable Camera in Browser</Link></li>
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
                <strong>Next step:</strong> Test your webcam to confirm Chrome detects it.
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

