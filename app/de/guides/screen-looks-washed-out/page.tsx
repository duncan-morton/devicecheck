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
  title: 'Screen Looks Washed Out, How to Fix',
  description: 'Fix a screen that looks washed out or faded. Adjust brightness, contrast, color settings, and gamma to improve display quality.',
  path: '/guides/screen-looks-washed-out',
  keywords: [
    'screen washed out',
    'monitor washed out',
    'display faded',
    'screen color fix',
    'washed out screen'
  ]
})

const faqs = [
  {
    question: 'Why does my screen look washed out?',
    answer: 'Washed out screens are usually caused by incorrect brightness, contrast, or gamma settings. High brightness with low contrast can make colors appear faded. Adjust display settings to improve color saturation and contrast.'
  },
  {
    question: 'How do I fix a washed out screen?',
    answer: 'Adjust brightness and contrast settings, increase color saturation, adjust gamma settings, and check color profile settings. Use the online screen test to compare colors and verify settings are correct.'
  }
]

export default function ScreenLooksWashedOutPage() {
  const articleSchema = generateArticleSchema(
    'Screen Looks Washed Out, How to Fix',
    'Fix a screen that looks washed out or faded. Adjust brightness, contrast, color settings, and gamma to improve display quality.',
    '/guides/screen-looks-washed-out',
    new Date().toISOString(),
    new Date().toISOString()
  )

  const breadcrumbs = generateBreadcrumbListSchema([
    { name: 'Home', path: '/' },
    { name: 'Guides', path: '/guides' },
    { name: 'Screen Looks Washed Out', path: '/guides/screen-looks-washed-out' }
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
            { name: 'Screen Looks Washed Out', path: '/guides/screen-looks-washed-out' }
          ]} />
          
          <TOC contentId="article-content" />
          
          <article id="article-content" className="prose prose-slate max-w-none bg-white p-8 md:p-12 rounded-2xl border border-gray-200">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Screen Looks Washed Out</h1>
            
            <p className="text-lg text-gray-700 mb-8">
              A washed out screen appears faded with reduced color saturation and contrast. This page covers how to fix washed out displays by adjusting brightness, contrast, and color settings. Start with basic display adjustments.
            </p>

            <p className="text-gray-700 mb-6">
              You can use the <Link href="/screen" className="text-blue-600 hover:text-blue-800">screen test</Link> to check for dead or stuck pixels.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Adjust Brightness and Contrast</h2>
            <p className="text-gray-700 mb-4">
              Incorrect brightness and contrast settings cause washed out appearance.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Use monitor's physical buttons to access OSD menu</li>
              <li>Reduce brightness if it's set too high</li>
              <li>Increase contrast to improve color depth</li>
              <li>Balance brightness and contrast for optimal appearance</li>
              <li>Test different combinations to find best settings</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Adjust Color Saturation</h2>
            <p className="text-gray-700 mb-4">
              Low color saturation makes screens look washed out.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Access monitor's color settings in OSD menu</li>
              <li>Increase color saturation or vibrancy</li>
              <li>Adjust individual color channels if available</li>
              <li>Test with the screen test to see color changes</li>
              <li>Avoid setting saturation too high</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Adjust Gamma Settings</h2>
            <p className="text-gray-700 mb-4">
              Gamma affects mid-tone brightness and can cause washed out appearance. For more detailed color calibration, see the guide on <Link href="/guides/colour-calibration-basics" className="text-blue-600 hover:text-blue-800">colour calibration basics</Link>.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Windows:</strong> Settings → System → Display → Advanced display settings → Color calibration</li>
              <li>Adjust gamma slider to improve mid-tone contrast</li>
              <li>Lower gamma can make colors appear richer</li>
              <li>Test different gamma values</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Check Color Profile</h2>
            <p className="text-gray-700 mb-4">
              Incorrect color profiles can cause washed out colors.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Windows:</strong> Settings → System → Display → Advanced display settings → Color profile</li>
              <li>Check current color profile</li>
              <li>Try different color profiles</li>
              <li>Reset to default profile if needed</li>
              <li>Test screen appearance after changing profile</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Update Graphics Drivers</h2>
            <p className="text-gray-700 mb-4">
              Outdated graphics drivers can affect color rendering.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Update graphics drivers to latest version</li>
              <li>Check graphics card control panel for color settings</li>
              <li>Adjust color settings in graphics driver software</li>
              <li>Restart computer after updating drivers</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Check Monitor Presets</h2>
            <p className="text-gray-700 mb-4">
              Monitor presets can affect color appearance.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Access monitor's OSD menu</li>
              <li>Check current preset mode</li>
              <li>Try different presets like "Standard" or "Vivid"</li>
              <li>Some presets may cause washed out appearance</li>
              <li>Test with screen test to compare presets</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Test Screen Appearance</h2>
            <p className="text-gray-700 mb-6">
              After adjusting settings, use the <Link href="/screen" className="text-blue-600 hover:text-blue-800 font-semibold">online screen test</Link> to verify colors appear correctly. The test displays solid colors that make it easy to see if the screen still looks washed out.
            </p>

            <RelatedGuides guides={[
              { title: 'Colour Calibration Basics', href: '/guides/colour-calibration-basics' },
              { title: 'Screen Flickering', href: '/guides/screen-flickering' },
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

