import { Metadata } from 'next'
import { generateMetadata as genMeta } from '@/lib/seo/metadata'
import JsonLdScript from '@/components/JsonLdScript'
import { generateArticleSchema, generateBreadcrumbListSchema, generateFAQPageSchema } from '@/lib/seo/jsonLd'
import Breadcrumbs from '@/components/Breadcrumbs'
import Link from 'next/link'

export const revalidate = 86400

export const metadata: Metadata = genMeta({
  title: 'Colour Calibration Basics, How to Calibrate Your Screen',
  description: 'Learn the basics of screen color calibration. Adjust brightness, contrast, gamma, and color settings to improve display accuracy.',
  path: '/guides/colour-calibration-basics',
  keywords: [
    'color calibration',
    'screen calibration',
    'monitor calibration',
    'display calibration',
    'color calibration guide'
  ]
})

const faqs = [
  {
    question: 'What is screen color calibration?',
    answer: 'Screen color calibration adjusts your display\'s color, brightness, contrast, and gamma settings to ensure accurate color representation. Proper calibration ensures colors appear as intended and match what you see in print or on other devices.'
  },
  {
    question: 'How do I calibrate my screen?',
    answer: 'Use Windows built-in color calibration tool (Settings → System → Display → Advanced display settings → Color calibration) or macOS Display Calibrator Assistant. Adjust brightness, contrast, gamma, and color balance using on-screen guides.'
  }
]

export default function ColourCalibrationBasicsPage() {
  const articleSchema = generateArticleSchema(
    'Colour Calibration Basics, How to Calibrate Your Screen',
    'Learn the basics of screen color calibration. Adjust brightness, contrast, gamma, and color settings to improve display accuracy.',
    '/guides/colour-calibration-basics',
    new Date().toISOString(),
    new Date().toISOString()
  )

  const breadcrumbs = generateBreadcrumbListSchema([
    { name: 'Home', path: '/' },
    { name: 'Guides', path: '/guides' },
    { name: 'Colour Calibration Basics', path: '/guides/colour-calibration-basics' }
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
            { name: 'Colour Calibration Basics', path: '/guides/colour-calibration-basics' }
          ]} />
          
          <article className="prose prose-slate max-w-none bg-white p-8 md:p-12 rounded-2xl border border-gray-200">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Colour Calibration Basics</h1>
            
            <p className="text-lg text-gray-700 mb-8">
              Screen color calibration ensures your display shows colors accurately. This page covers the basics of calibrating your screen. Start with built-in calibration tools, then adjust settings for optimal color accuracy.
            </p>

            <p className="text-gray-700 mb-6">
              You can use the <Link href="/screen" className="text-blue-600 hover:text-blue-800">screen test</Link> to check for dead or stuck pixels.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Use Windows Color Calibration</h2>
            <p className="text-gray-700 mb-4">
              Windows includes a built-in color calibration tool.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Open Settings → System → Display</li>
              <li>Click "Advanced display settings"</li>
              <li>Select "Color calibration"</li>
              <li>Follow the on-screen wizard</li>
              <li>Adjust gamma, brightness, and contrast</li>
              <li>Save the calibration profile when finished</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Use macOS Display Calibrator</h2>
            <p className="text-gray-700 mb-4">
              macOS includes a Display Calibrator Assistant.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Open System Preferences → Displays</li>
              <li>Click "Color" tab</li>
              <li>Click "Calibrate" button</li>
              <li>Follow the Display Calibrator Assistant</li>
              <li>Adjust gamma, white point, and brightness</li>
              <li>Save the calibration profile</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Adjust Brightness</h2>
            <p className="text-gray-700 mb-4">
              Proper brightness is essential for accurate color calibration.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Set brightness to match your environment</li>
              <li>For dim rooms, lower brightness</li>
              <li>For bright rooms, increase brightness</li>
              <li>Avoid setting brightness too high or too low</li>
              <li>Use calibration tool's brightness test patterns</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Adjust Contrast</h2>
            <p className="text-gray-700 mb-4">
              Contrast affects the difference between light and dark areas.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Use calibration tool's contrast test patterns</li>
              <li>Adjust until you can distinguish all shades</li>
              <li>Balance contrast with brightness</li>
              <li>Too high contrast can wash out colors</li>
              <li>Too low contrast reduces image depth</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Adjust Gamma</h2>
            <p className="text-gray-700 mb-4">
              Gamma affects mid-tone brightness and color accuracy.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Use calibration tool's gamma test patterns</li>
              <li>Adjust until gray scale appears neutral</li>
              <li>Standard gamma is 2.2 for most displays</li>
              <li>Mac displays often use 1.8 gamma</li>
              <li>Test with the screen test to verify gamma</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Adjust Color Balance</h2>
            <p className="text-gray-700 mb-4">
              Color balance ensures whites appear neutral, not tinted.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Use calibration tool's color balance test</li>
              <li>Adjust red, green, and blue sliders</li>
              <li>Aim for neutral white without color tint</li>
              <li>Test with white background to verify</li>
              <li>Save calibration when satisfied</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Test Calibration Results</h2>
            <p className="text-gray-700 mb-6">
              After calibrating, use the <Link href="/screen" className="text-blue-600 hover:text-blue-800 font-semibold">online screen test</Link> to verify color accuracy. The test displays solid colors that help you see if calibration improved color representation.
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 my-8">
              <h3 className="font-semibold text-blue-900 mb-2">Related Guides</h3>
              <ul className="space-y-2 text-sm text-blue-800">
                <li><Link href="/guides/screen-looks-washed-out" className="hover:text-blue-600 underline">Screen Looks Washed Out</Link></li>
                <li><Link href="/guides/screen-flickering" className="hover:text-blue-600 underline">Screen Flickering</Link></li>
                <li><Link href="/guides/dead-pixel-test-guide" className="hover:text-blue-600 underline">Dead Pixel Test Guide</Link></li>
              </ul>
            </div>

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

            <div className="mt-8 p-6 bg-gray-50 rounded-xl border border-gray-200">
              <p className="text-gray-700 mb-4">
                <strong>Next step:</strong> Test your screen to check color accuracy.
              </p>
              <Link 
                href="/screen" 
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Run Screen Test →
              </Link>
            </div>
          </article>
        </div>
      </div>
    </>
  )
}

