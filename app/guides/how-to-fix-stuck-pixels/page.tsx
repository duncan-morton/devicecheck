import { Metadata } from 'next'
import { generateMetadata as genMeta } from '@/lib/seo/metadata'
import JsonLdScript from '@/components/JsonLdScript'
import { generateArticleSchema, generateBreadcrumbListSchema, generateFAQPageSchema } from '@/lib/seo/jsonLd'
import Breadcrumbs from '@/components/Breadcrumbs'
import Link from 'next/link'

export const revalidate = 86400

export const metadata: Metadata = genMeta({
  title: 'How to Fix Stuck Pixels, Repair Guide',
  description: 'Fix stuck pixels on your screen. Learn methods to repair stuck pixels using software, pressure techniques, and other repair methods.',
  path: '/guides/how-to-fix-stuck-pixels',
  keywords: [
    'fix stuck pixels',
    'stuck pixel repair',
    'how to fix stuck pixel',
    'pixel repair',
    'stuck pixel fix'
  ]
})

const faqs = [
  {
    question: 'Can stuck pixels be fixed?',
    answer: 'Stuck pixels can sometimes be fixed, unlike dead pixels. Try pixel repair software that rapidly cycles colors, or use gentle pressure techniques. Success rates vary, and some stuck pixels may be permanent.'
  },
  {
    question: 'How do I fix a stuck pixel?',
    answer: 'Use pixel repair software that displays rapidly changing colors on the stuck pixel area. Alternatively, apply gentle pressure with a soft cloth while the screen displays different colors. Be careful not to damage the screen.'
  }
]

export default function HowToFixStuckPixelsPage() {
  const articleSchema = generateArticleSchema(
    'How to Fix Stuck Pixels, Repair Guide',
    'Fix stuck pixels on your screen. Learn methods to repair stuck pixels using software, pressure techniques, and other repair methods.',
    '/guides/how-to-fix-stuck-pixels',
    new Date().toISOString(),
    new Date().toISOString()
  )

  const breadcrumbs = generateBreadcrumbListSchema([
    { name: 'Home', path: '/' },
    { name: 'Guides', path: '/guides' },
    { name: 'How to Fix Stuck Pixels', path: '/guides/how-to-fix-stuck-pixels' }
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
            { name: 'How to Fix Stuck Pixels', path: '/guides/how-to-fix-stuck-pixels' }
          ]} />
          
          <article className="prose prose-slate max-w-none bg-white p-8 md:p-12 rounded-2xl border border-gray-200">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">How to Fix Stuck Pixels</h1>
            
            <p className="text-lg text-gray-700 mb-8">
              Stuck pixels are pixels permanently lit in one color (red, green, or blue). Unlike dead pixels, stuck pixels can sometimes be fixed. This page covers methods to repair stuck pixels using software and physical techniques.
            </p>

            <p className="text-gray-700 mb-6">
              You can use the <Link href="/screen" className="text-blue-600 hover:text-blue-800">screen test</Link> to check for dead or stuck pixels.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Identify Stuck Pixels</h2>
            <p className="text-gray-700 mb-4">
              First, confirm you have stuck pixels, not dead pixels. For testing dead pixels, see the guide on <Link href="/guides/dead-pixel-test-guide" className="text-blue-600 hover:text-blue-800">dead pixel test guide</Link>.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Use the <Link href="/screen" className="text-blue-600 hover:text-blue-800 font-semibold">screen test</Link> to identify pixel defects</li>
              <li>Stuck pixels appear as colored dots (red, green, or blue)</li>
              <li>Dead pixels appear as black dots</li>
              <li>Note the exact location of stuck pixels</li>
              <li>Stuck pixels can sometimes be fixed; dead pixels cannot</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Use Pixel Repair Software</h2>
            <p className="text-gray-700 mb-4">
              Pixel repair software rapidly cycles colors to unstick pixels.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Download pixel repair software or use online tools</li>
              <li>Position the repair window over the stuck pixel</li>
              <li>Run the repair for 10-30 minutes</li>
              <li>Rapid color cycling can unstick the pixel</li>
              <li>Test the pixel after repair attempt</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Try Pressure Technique</h2>
            <p className="text-gray-700 mb-4">
              Gentle pressure can sometimes unstick pixels. Use caution.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Turn off your screen</li>
              <li>Place a soft cloth over the stuck pixel area</li>
              <li>Apply gentle pressure with your finger</li>
              <li>While applying pressure, turn screen back on</li>
              <li>Release pressure slowly</li>
              <li>Test if pixel is fixed</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Use Rapid Color Cycling</h2>
            <p className="text-gray-700 mb-4">
              Rapidly changing colors can help unstick pixels.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Use the screen test to cycle through colors rapidly</li>
              <li>Focus the color area on the stuck pixel</li>
              <li>Let it cycle for 15-20 minutes</li>
              <li>Check if pixel is fixed</li>
              <li>Repeat if needed</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Massage Technique</h2>
            <p className="text-gray-700 mb-4">
              Gentle massaging can help unstick pixels. Be very careful.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Turn off your screen</li>
              <li>Use a soft, lint-free cloth</li>
              <li>Gently massage the stuck pixel area in circular motions</li>
              <li>Apply light pressure only</li>
              <li>Turn screen on and test</li>
              <li>Stop if you feel any resistance or hear cracking</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Check Warranty</h2>
            <p className="text-gray-700 mb-4">
              If repair attempts fail, check your warranty coverage.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Check your screen's warranty policy</li>
              <li>Stuck pixels may be covered under warranty</li>
              <li>Document the stuck pixel with photos</li>
              <li>Contact manufacturer if under warranty</li>
              <li>Some manufacturers have zero pixel defect policies</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Test After Repair</h2>
            <p className="text-gray-700 mb-6">
              After attempting repairs, use the <Link href="/screen" className="text-blue-600 hover:text-blue-800 font-semibold">online screen test</Link> to verify if the stuck pixel is fixed. Test with different colors to confirm the pixel responds correctly.
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 my-8">
              <h3 className="font-semibold text-blue-900 mb-2">Related Guides</h3>
              <ul className="space-y-2 text-sm text-blue-800">
                <li><Link href="/guides/dead-pixel-test-guide" className="hover:text-blue-600 underline">Dead Pixel Test Guide</Link></li>
                <li><Link href="/guides/screen-flickering" className="hover:text-blue-600 underline">Screen Flickering</Link></li>
                <li><Link href="/guides/colour-calibration-basics" className="hover:text-blue-600 underline">Colour Calibration Basics</Link></li>
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
                <strong>Next step:</strong> Test your screen to check for stuck pixels.
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

