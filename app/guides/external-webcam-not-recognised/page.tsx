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
  title: 'External Webcam Not Recognised, How to Fix',
  description: 'Fix external webcam not being recognized by your computer. Troubleshoot USB connections, drivers, and system settings.',
  path: '/guides/external-webcam-not-recognised',
  keywords: [
    'external webcam not recognised',
    'usb webcam not detected',
    'external camera not working',
    'webcam not recognized'
  ]
})

const faqs = [
  {
    question: 'Why is my external webcam not being recognized?',
    answer: 'External webcam recognition issues are usually caused by USB connection problems, missing drivers, or system permissions. Check USB connections first, then verify drivers are installed and system permissions are enabled.'
  },
  {
    question: 'How do I get my computer to recognize my external webcam?',
    answer: 'Unplug and reconnect the USB webcam, try a different USB port, and ensure USB 3.0 or higher if available. Check Device Manager (Windows) or System Information (Mac) to see if the device appears. Install drivers if needed.'
  }
]

export default function ExternalWebcamNotRecognisedPage() {
  const articleSchema = generateArticleSchema(
    'External Webcam Not Recognised, How to Fix',
    'Fix external webcam not being recognized by your computer. Troubleshoot USB connections, drivers, and system settings.',
    '/guides/external-webcam-not-recognised',
    new Date().toISOString(),
    new Date().toISOString()
  )

  const breadcrumbs = generateBreadcrumbListSchema([
    { name: 'Home', path: '/' },
    { name: 'Guides', path: '/guides' },
    { name: 'External Webcam Not Recognised', path: '/guides/external-webcam-not-recognised' }
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
            { name: 'External Webcam Not Recognised', path: '/guides/external-webcam-not-recognised' }
          ]} />
          
          <TOC contentId="article-content" />
          
          <article id="article-content" className="prose prose-slate max-w-none bg-white p-8 md:p-12 rounded-2xl border border-gray-200">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">External Webcam Not Recognised</h1>
            
            <p className="text-lg text-gray-700 mb-8">
              When your computer doesn't recognize an external webcam, apps and websites can't access video input. This page covers how to fix external webcam recognition issues. Check USB connections first, then verify drivers and system settings.
            </p>

            <p className="text-gray-700 mb-6">
              If you need to check your camera quickly, <Link href="/webcam" className="text-blue-600 hover:text-blue-800">run the webcam test</Link>.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Check USB Connections</h2>
            <p className="text-gray-700 mb-4">
              USB connection issues are the most common cause of webcam recognition problems. Verify connections.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Unplug and firmly reconnect USB webcam</li>
              <li>Try a different USB port, preferably USB 3.0 or higher</li>
              <li>Check for visible damage to USB cables or connectors</li>
              <li>Avoid USB hubs; connect directly to the computer</li>
              <li>Test with a different USB cable if available</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Check Device Manager</h2>
            <p className="text-gray-700 mb-4">
              Verify your webcam appears in Device Manager and isn't disabled.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Windows:</strong> Open Device Manager → Look for "Imaging devices" or "Cameras"</li>
              <li>Check if webcam appears in the list</li>
              <li>If it shows a warning icon, right-click and select "Enable device"</li>
              <li>If device is missing, check USB connections</li>
              <li>Try uninstalling and reconnecting the device</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Install or Update Drivers</h2>
            <p className="text-gray-700 mb-4">
              Missing or outdated drivers can prevent webcam recognition. Install or update drivers. For general webcam issues, see the guide on <Link href="/guides/webcam-not-working" className="text-blue-600 hover:text-blue-800">webcam not working</Link>.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Windows:</strong> Device Manager → Right-click webcam → Update driver → Search automatically</li>
              <li>Check webcam manufacturer website for latest drivers</li>
              <li>Install manufacturer software if available</li>
              <li>Restart computer after installing drivers</li>
              <li>Test webcam recognition again</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Check System Information</h2>
            <p className="text-gray-700 mb-4">
              Verify your computer detects the USB device at the system level.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Windows:</strong> Device Manager → Universal Serial Bus controllers → Check for webcam</li>
              <li><strong>Mac:</strong> System Information → USB → Look for webcam device</li>
              <li>If device doesn't appear, USB connection may be faulty</li>
              <li>Try a different USB port or cable</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Check Camera Permissions</h2>
            <p className="text-gray-700 mb-4">
              System camera permissions may need to be enabled for external webcams.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Windows:</strong> Settings → Privacy → Camera → Ensure apps can access camera</li>
              <li><strong>Mac:</strong> System Preferences → Security & Privacy → Camera → Check your browser</li>
              <li>Restart browser after changing permissions</li>
              <li>Test webcam recognition again</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Test on Another Computer</h2>
            <p className="text-gray-700 mb-4">
              Test the webcam on another computer to rule out hardware issues.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Connect webcam to another computer</li>
              <li>Check if it's recognized there</li>
              <li>If it works on another computer, issue is with your system</li>
              <li>If it doesn't work anywhere, webcam may be faulty</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Test Webcam Recognition</h2>
            <p className="text-gray-700 mb-6">
              After trying these steps, use the <Link href="/webcam" className="text-blue-600 hover:text-blue-800 font-semibold">online webcam test</Link> to verify your external webcam is recognized. The test shows available cameras and confirms device detection.
            </p>

            <RelatedGuides guides={[
              { title: 'Webcam Not Working', href: '/guides/webcam-not-working' },
              { title: 'Webcam Not Detected in Chrome', href: '/guides/webcam-not-detected-chrome' },
              { title: 'Webcam Lagging or Low FPS', href: '/guides/webcam-lagging-low-fps' }
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

