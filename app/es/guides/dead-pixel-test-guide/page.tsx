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
  title: 'Dead Pixel Test Guide, How to Check Your Screen',
  description: 'Test your screen for dead pixels. Learn how to identify dead pixels, stuck pixels, and screen defects using online tools.',
  path: '/guides/dead-pixel-test-guide',
  keywords: [
    'dead pixel test',
    'test dead pixels',
    'pixel test',
    'screen pixel test',
    'dead pixel check'
  ]
})

const faqs = [
  {
    question: 'What is a dead pixel?',
    answer: 'A dead pixel is a pixel on your screen that is permanently black and doesn\'t respond to signals. Dead pixels cannot be fixed and are considered a manufacturing defect. Most manufacturers allow 1-3 dead pixels before considering a screen defective.'
  },
  {
    question: 'How do I test for dead pixels?',
    answer: 'Use the online screen test and cycle through solid colors (red, green, blue, white, black). Dead pixels appear as black dots on colored backgrounds. Stuck pixels appear as colored dots (red, green, or blue) on black backgrounds.'
  },
  {
    question: 'Can dead pixels be fixed?',
    answer: 'Dead pixels cannot be fixed as they are permanently damaged. However, stuck pixels (pixels stuck in one color) can sometimes be fixed using pixel repair software or gentle pressure techniques.'
  }
]

export default function DeadPixelTestGuidePage() {
  const articleSchema = generateArticleSchema(
    'Dead Pixel Test Guide, How to Check Your Screen',
    'Test your screen for dead pixels. Learn how to identify dead pixels, stuck pixels, and screen defects using online tools.',
    '/guides/dead-pixel-test-guide',
    new Date().toISOString(),
    new Date().toISOString()
  )

  const breadcrumbs = generateBreadcrumbListSchema([
    { name: 'Home', path: '/' },
    { name: 'Guides', path: '/guides' },
    { name: 'Dead Pixel Test Guide', path: '/guides/dead-pixel-test-guide' }
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
            { name: 'Dead Pixel Test Guide', path: '/guides/dead-pixel-test-guide' }
          ]} />
          
          <TOC contentId="article-content" />
          
          <article id="article-content" className="prose prose-slate max-w-none bg-white p-8 md:p-12 rounded-2xl border border-gray-200">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Dead Pixel Test Guide</h1>
            
            <p className="text-lg text-gray-700 mb-8">
              Dead pixels are permanently black dots on your screen that indicate a manufacturing defect. This page shows how to test for dead pixels using online tools. Start with the screen test to identify any pixel defects.
            </p>

            <p className="text-gray-700 mb-6">
              You can use the <Link href="/screen" className="text-blue-600 hover:text-blue-800">screen test</Link> to check for dead or stuck pixels.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Use Online Screen Test</h2>
            <p className="text-gray-700 mb-4">
              The online screen test provides the most thorough pixel check.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Open the <Link href="/screen" className="text-blue-600 hover:text-blue-800 font-semibold">screen test page</Link></li>
              <li>Enter fullscreen mode for best results</li>
              <li>Cycle through solid colors: red, green, blue, white, black</li>
              <li>Look for black dots on colored backgrounds (dead pixels)</li>
              <li>Look for colored dots on black background (stuck pixels)</li>
              <li>Note the location of any defective pixels</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What Are Dead Pixels</h2>
            <p className="text-gray-700 mb-4">
              Dead pixels are permanently damaged and cannot be fixed.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Dead pixels appear as black dots on any background</li>
              <li>They don't respond to electrical signals</li>
              <li>Dead pixels are a manufacturing defect</li>
              <li>They cannot be repaired</li>
              <li>Most manufacturers allow 1-3 dead pixels</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What Are Stuck Pixels</h2>
            <p className="text-gray-700 mb-4">
              Stuck pixels are different from dead pixels and may be fixable. If you find stuck pixels, see the guide on <Link href="/guides/how-to-fix-stuck-pixels" className="text-blue-600 hover:text-blue-800">how to fix stuck pixels</Link> for repair methods.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Stuck pixels appear as colored dots (red, green, or blue)</li>
              <li>They're permanently lit in one color</li>
              <li>Stuck pixels can sometimes be fixed</li>
              <li>Try pixel repair software or gentle pressure</li>
              <li>See the stuck pixel fix guide for repair methods</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Test Different Colors</h2>
            <p className="text-gray-700 mb-4">
              Test multiple colors to identify all pixel defects.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Red background: Shows dead pixels and green/blue stuck pixels</li>
              <li>Green background: Shows dead pixels and red/blue stuck pixels</li>
              <li>Blue background: Shows dead pixels and red/green stuck pixels</li>
              <li>White background: Shows dead pixels clearly</li>
              <li>Black background: Shows stuck pixels clearly</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Check Warranty Coverage</h2>
            <p className="text-gray-700 mb-4">
              Most manufacturers have policies regarding dead pixels.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Check your screen's warranty policy</li>
              <li>Most allow 1-3 dead pixels before replacement</li>
              <li>Some have zero dead pixel policies</li>
              <li>Document pixel locations with photos</li>
              <li>Contact manufacturer if pixel count exceeds policy</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Test Your Screen</h2>
            <p className="text-gray-700 mb-6">
              Use the <Link href="/screen" className="text-blue-600 hover:text-blue-800 font-semibold">online screen test</Link> to check for dead pixels. Enter fullscreen mode and cycle through colors to identify any pixel defects. Document any issues you find.
            </p>

            <RelatedGuides guides={[
              { title: 'How to Fix Stuck Pixels', href: '/guides/how-to-fix-stuck-pixels' },
              { title: 'Screen Flickering', href: '/guides/screen-flickering' },
              { title: 'Screen Looks Washed Out', href: '/guides/screen-looks-washed-out' }
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

