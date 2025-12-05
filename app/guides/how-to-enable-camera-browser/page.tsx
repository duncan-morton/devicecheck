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
  title: 'How to Enable Camera in Browser',
  description: 'Enable camera access in your browser. Step-by-step guide to allow camera permissions for Chrome, Firefox, Safari, and Edge.',
  path: '/guides/how-to-enable-camera-browser',
  keywords: [
    'enable camera browser',
    'browser camera permission',
    'allow camera browser',
    'camera access browser',
    'webcam permission browser'
  ]
})

const faqs = [
  {
    question: 'How do I enable camera in my browser?',
    answer: 'Click the lock or camera icon in your browser\'s address bar, then set Camera to Allow. Each browser handles permissions slightly differently, but the process is similar across Chrome, Firefox, Safari, and Edge.'
  },
  {
    question: 'Why is my browser asking for camera permission?',
    answer: 'Browsers require explicit permission before websites can access your camera. This is a security feature to protect your privacy. Only grant camera access to websites you trust.'
  }
]

export default function HowToEnableCameraBrowserPage() {
  const articleSchema = generateArticleSchema(
    'How to Enable Camera in Browser',
    'Enable camera access in your browser. Step-by-step guide to allow camera permissions for Chrome, Firefox, Safari, and Edge.',
    '/guides/how-to-enable-camera-browser',
    new Date().toISOString(),
    new Date().toISOString()
  )

  const breadcrumbs = generateBreadcrumbListSchema([
    { name: 'Home', path: '/' },
    { name: 'Guides', path: '/guides' },
    { name: 'How to Enable Camera in Browser', path: '/guides/how-to-enable-camera-browser' }
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
            { name: 'How to Enable Camera in Browser', path: '/guides/how-to-enable-camera-browser' }
          ]} />
          
          <TOC contentId="article-content" />
          
          <article id="article-content" className="prose prose-slate max-w-none bg-white p-8 md:p-12 rounded-2xl border border-gray-200">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">How to Enable Camera in Browser</h1>
            
            <p className="text-lg text-gray-700 mb-8">
              Browsers require permission to access your camera. This page shows how to enable camera access in Chrome, Firefox, Safari, and Edge. Follow these steps to allow camera permissions for websites.
            </p>

            <p className="text-gray-700 mb-6">
              If you need to check your camera quickly, <Link href="/webcam" className="text-blue-600 hover:text-blue-800">run the webcam test</Link>.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Enable Camera in Chrome</h2>
            <p className="text-gray-700 mb-4">
              Chrome handles camera permissions through site settings.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Click the lock icon in Chrome's address bar</li>
              <li>Find "Camera" in the permissions list</li>
              <li>Change the setting from "Block" to "Allow"</li>
              <li>Refresh the page after changing the setting</li>
              <li>Alternatively, go to chrome://settings/content/camera to manage all sites</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Enable Camera in Firefox</h2>
            <p className="text-gray-700 mb-4">
              Firefox shows a camera icon in the address bar when a site requests camera access.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Click the camera icon in Firefox's address bar</li>
              <li>Select "Allow" from the dropdown menu</li>
              <li>Refresh the page after allowing permission</li>
              <li>Or go to Preferences → Privacy & Security → Permissions → Camera</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Enable Camera in Safari</h2>
            <p className="text-gray-700 mb-4">
              Safari requires permission through website preferences.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Click the camera icon in Safari's address bar when a site requests access</li>
              <li>Select "Allow" from the dropdown menu</li>
              <li>Or go to Safari → Preferences → Websites → Camera</li>
              <li>Find the website in the list and set permission to "Allow"</li>
              <li>Refresh the page after changing permission</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Enable Camera in Edge</h2>
            <p className="text-gray-700 mb-4">
              Edge handles camera permissions similar to Chrome.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Click the lock icon in Edge's address bar</li>
              <li>Find "Camera" in the permissions list</li>
              <li>Change the setting from "Block" to "Allow"</li>
              <li>Refresh the page after changing the setting</li>
              <li>Or go to edge://settings/content/camera to manage all sites</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Check System Camera Permissions</h2>
            <p className="text-gray-700 mb-4">
              Browsers also require system-level camera permissions. Verify these are enabled.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Windows:</strong> Settings → Privacy → Camera → Ensure your browser is allowed</li>
              <li><strong>Mac:</strong> System Preferences → Security & Privacy → Camera → Check your browser</li>
              <li>Restart your browser after changing system permissions</li>
              <li>Test camera access again</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Troubleshoot Camera Not Working</h2>
            <p className="text-gray-700 mb-4">
              If camera still doesn't work after enabling permissions, try these steps.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Close other applications using the camera</li>
              <li>Restart your browser completely</li>
              <li>Check that the correct camera is selected in system settings</li>
              <li>Update your browser to the latest version</li>
              <li>Clear browser cache and cookies for the website</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Test Camera After Enabling</h2>
            <p className="text-gray-700 mb-6">
              After enabling camera permissions, use the <Link href="/webcam" className="text-blue-600 hover:text-blue-800 font-semibold">online webcam test</Link> to verify access works. The test shows live video feed and confirms camera detection.
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

