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
  title: 'Screen Flickering, How to Fix',
  description: 'Fix screen flickering issues. Troubleshoot display problems, update drivers, check connections, and resolve flickering on monitors and laptops.',
  path: '/guides/screen-flickering',
  keywords: [
    'screen flickering',
    'monitor flickering',
    'display flickering',
    'screen flicker fix',
    'laptop screen flickering'
  ]
})

const faqs = [
  {
    question: 'Why is my screen flickering?',
    answer: 'Screen flickering is usually caused by refresh rate issues, loose cable connections, outdated graphics drivers, or display settings. Check cable connections first, then update graphics drivers and adjust refresh rate settings.'
  },
  {
    question: 'How do I fix screen flickering?',
    answer: 'Check cable connections, update graphics drivers, adjust refresh rate to match your monitor\'s native rate, and disable hardware acceleration in browsers. If flickering persists, test with a different cable or monitor to isolate the issue.'
  }
]

export default function ScreenFlickeringPage() {
  const articleSchema = generateArticleSchema(
    'Screen Flickering, How to Fix',
    'Fix screen flickering issues. Troubleshoot display problems, update drivers, check connections, and resolve flickering on monitors and laptops.',
    '/guides/screen-flickering',
    new Date().toISOString(),
    new Date().toISOString()
  )

  const breadcrumbs = generateBreadcrumbListSchema([
    { name: 'Home', path: '/' },
    { name: 'Guides', path: '/guides' },
    { name: 'Screen Flickering', path: '/guides/screen-flickering' }
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
            { name: 'Screen Flickering', path: '/guides/screen-flickering' }
          ]} />
          
          <TOC contentId="article-content" />
          
          <article id="article-content" className="prose prose-slate max-w-none bg-white p-8 md:p-12 rounded-2xl border border-gray-200">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Screen Flickering</h1>
            
            <p className="text-lg text-gray-700 mb-8">
              Screen flickering makes displays hard to use and can indicate hardware or software issues. This page covers how to fix screen flickering. Check cable connections first, then update drivers and adjust display settings.
            </p>

            <p className="text-gray-700 mb-6">
              You can use the <Link href="/screen" className="text-blue-600 hover:text-blue-800">screen test</Link> to check for dead or stuck pixels.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Check Cable Connections</h2>
            <p className="text-gray-700 mb-4">
              Loose or damaged cables are a common cause of screen flickering.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Unplug and firmly reconnect display cables</li>
              <li>Check for visible damage to cables</li>
              <li>Try a different cable if available</li>
              <li>Test with a different port if multiple ports available</li>
              <li>For laptops, check internal display connections</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Update Graphics Drivers</h2>
            <p className="text-gray-700 mb-4">
              Outdated graphics drivers can cause screen flickering. Update drivers.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Windows:</strong> Device Manager → Display adapters → Right-click graphics card → Update driver</li>
              <li><strong>Mac:</strong> System Preferences → Software Update → Install available updates</li>
              <li>Check graphics card manufacturer website for latest drivers</li>
              <li>Restart computer after updating drivers</li>
              <li>Test screen after update</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Adjust Refresh Rate</h2>
            <p className="text-gray-700 mb-4">
              Incorrect refresh rate settings can cause flickering.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Windows:</strong> Settings → System → Display → Advanced display settings → Refresh rate</li>
              <li>Set refresh rate to match your monitor's native rate</li>
              <li>Common rates are 60Hz, 75Hz, 120Hz, or 144Hz</li>
              <li>Test different refresh rates if flickering persists</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Disable Hardware Acceleration</h2>
            <p className="text-gray-700 mb-4">
              Browser hardware acceleration can cause flickering in some cases.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Chrome: Settings → System → Disable "Use hardware acceleration"</li>
              <li>Firefox: Preferences → General → Performance → Uncheck "Use recommended performance settings"</li>
              <li>Restart browser after changing settings</li>
              <li>Test if flickering is resolved</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Check Display Settings</h2>
            <p className="text-gray-700 mb-4">
              Incorrect display settings can cause flickering.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Check resolution matches monitor's native resolution</li>
              <li>Verify color depth settings</li>
              <li>Test with different resolutions</li>
              <li>Reset display settings to defaults if needed</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Test with Different Monitor</h2>
            <p className="text-gray-700 mb-4">
              Test with a different monitor to isolate the issue.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Connect a different monitor if available</li>
              <li>If flickering stops, issue is with original monitor</li>
              <li>If flickering continues, issue is with graphics card or drivers</li>
              <li>This helps identify the source of the problem</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Test Screen After Fixes</h2>
            <p className="text-gray-700 mb-6">
              After trying these steps, use the <Link href="/screen" className="text-blue-600 hover:text-blue-800 font-semibold">online screen test</Link> to verify flickering is resolved. The test displays solid colors that make flickering easy to detect.
            </p>

            <RelatedGuides guides={[
              { title: 'Screen Looks Washed Out', href: '/guides/screen-looks-washed-out' },
              { title: 'Colour Calibration Basics', href: '/guides/colour-calibration-basics' },
              { title: 'Dead Pixel Test Guide', href: '/guides/dead-pixel-test-guide' }
            ]} />

            <p className="text-gray-700 mb-6 mt-8">
              Open the <Link href="/screen" className="text-blue-600 hover:text-blue-800">screen test</Link> to confirm the issue is resolved.
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
              Use the <Link href="/screen" className="text-blue-600 hover:text-blue-800">online screen test</Link> to check your display for issues.
            </p>
          </article>

          <HelpfulWidget />
        </div>
      </div>
    </>
  )
}

