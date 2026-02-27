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
  title: 'Dead vs Stuck Pixels - How to Identify and Fix Screen Issues',
  description: 'Learn the difference between dead and stuck pixels, how to identify them, and methods to fix stuck pixels. Complete guide to screen pixel problems.',
  path: '/guides/dead-vs-stuck-pixels',
  keywords: [
    'dead pixels',
    'stuck pixels',
    'dead vs stuck pixels',
    'pixel fix',
    'screen pixels',
    'dead pixel test'
  ]
})

const faqs = [
  {
    question: 'What is the difference between dead and stuck pixels?',
    answer: 'Dead pixels are permanently black and cannot display any color. Stuck pixels are stuck on a single color (usually red, green, or blue) but can sometimes be fixed. Dead pixels are permanent, while stuck pixels may respond to repair methods.'
  },
  {
    question: 'How do I identify dead pixels?',
    answer: 'Dead pixels appear as black dots on colored backgrounds. Test your screen using the online screen test with solid colors. Dead pixels show as black spots that don\'t change color regardless of what\'s displayed.'
  },
  {
    question: 'How do I identify stuck pixels?',
    answer: 'Stuck pixels appear as colored dots (usually red, green, or blue) that don\'t change. Test your screen with different colored backgrounds. Stuck pixels maintain their color regardless of what should be displayed.'
  },
  {
    question: 'Can stuck pixels be fixed?',
    answer: 'Sometimes. Stuck pixels can respond to pressure methods, pixel repair software, or rapid color flashing. Dead pixels cannot be fixed and require screen replacement. Try pixel repair methods before assuming a pixel is dead.'
  },
  {
    question: 'How do I test for dead or stuck pixels?',
    answer: 'Use the online screen test to display solid colors (black, white, red, green, blue). Look for pixels that don\'t match the background color. Dead pixels appear black on colored backgrounds. Stuck pixels appear as colored dots on backgrounds.'
  },
  {
    question: 'Are dead pixels covered by warranty?',
    answer: 'Most manufacturers have dead pixel policies. Policies vary, but many cover screens with multiple dead pixels (often 3-5) or dead pixels in specific locations. Check your manufacturer\'s warranty policy for specific coverage.'
  },
  {
    question: 'Can I prevent dead or stuck pixels?',
    answer: 'Dead and stuck pixels are usually manufacturing defects that appear over time. You can\'t prevent them, but you can catch them early with regular testing. Test new screens immediately to identify issues while under warranty.'
  }
]

export default function DeadVsStuckPixelsPage() {
  const articleSchema = generateArticleSchema(
    'Dead vs Stuck Pixels - How to Identify and Fix Screen Issues',
    'Learn the difference between dead and stuck pixels, how to identify them, and methods to fix stuck pixels. Complete guide to screen pixel problems.',
    '/guides/dead-vs-stuck-pixels',
    new Date().toISOString(),
    new Date().toISOString()
  )

  const breadcrumbs = generateBreadcrumbListSchema([
    { name: 'Home', path: '/' },
    { name: 'Guides', path: '/guides' },
    { name: 'Dead vs Stuck Pixels', path: '/guides/dead-vs-stuck-pixels' }
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
            { name: 'Dead vs Stuck Pixels', path: '/guides/dead-vs-stuck-pixels' }
          ]} />
          
          <TOC contentId="article-content" />
          
          <article id="article-content" className="prose prose-slate max-w-none bg-white p-8 md:p-12 rounded-2xl border border-gray-200">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Dead vs Stuck Pixels</h1>
            
            <p className="text-lg text-gray-700 mb-8">
              Dead and stuck pixels are common screen problems that can be annoying or distracting. This guide explains the difference, how to identify each type, and methods to fix stuck pixels.
            </p>

            <p className="text-gray-700 mb-6">
              You can use the <Link href="/screen" className="text-blue-600 hover:text-blue-800">online screen test</Link> to identify dead or stuck pixels on your display.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Quick Fix Summary</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Test your screen with solid colors to identify pixel problems</li>
              <li>Dead pixels are black and cannot be fixed</li>
              <li>Stuck pixels are colored and may respond to repair methods</li>
              <li>Try pressure method or pixel repair software for stuck pixels</li>
              <li>Check warranty coverage for dead pixels</li>
              <li>Test new screens immediately to catch issues early</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Why This Happens</h2>
            <p className="text-gray-700 mb-4">
              Dead pixels occur when a pixel's transistor fails completely. The pixel cannot receive power or display any color, resulting in a permanently black dot. This is usually a manufacturing defect or component failure.
            </p>
            <p className="text-gray-700 mb-4">
              Stuck pixels occur when a pixel's subpixel (red, green, or blue) gets stuck in the "on" position. The pixel displays a single color continuously instead of changing with the image. This can sometimes be fixed by stimulating the pixel.
            </p>
            <p className="text-gray-700 mb-4">
              Manufacturing processes aren't perfect. Even high-quality screens can have pixel defects. Most manufacturers have policies allowing a certain number of dead pixels before considering a screen defective.
            </p>
            <p className="text-gray-700 mb-6">
              Age and use can cause pixels to fail over time. While less common than manufacturing defects, pixels can die or get stuck as screens age.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Step-by-Step Identification</h2>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">What Are Dead Pixels?</h3>
            <p className="text-gray-700 mb-4">
              Dead pixels are permanently black and cannot display any color. They appear as black dots on your screen regardless of what's being displayed.
            </p>
            <p className="text-gray-700 mb-4">
              Dead pixels occur when a pixel's transistor fails completely. The pixel cannot receive power, so it remains off (black) at all times. This is a permanent hardware failure.
            </p>
            <p className="text-gray-700 mb-4">
              Test for dead pixels using the online screen test. Display solid colors like white, red, green, and blue. Dead pixels appear as black dots that don't change color.
            </p>
            <p className="text-gray-700 mb-6">
              Dead pixels cannot be fixed. They require screen replacement if they're bothersome. Most manufacturers have warranty policies covering multiple dead pixels.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">What Are Stuck Pixels?</h3>
            <p className="text-gray-700 mb-4">
              Stuck pixels are stuck on a single color, usually red, green, or blue. They appear as colored dots that don't change with the image.
            </p>
            <p className="text-gray-700 mb-4">
              Stuck pixels occur when a subpixel gets stuck in the "on" position. Each pixel has red, green, and blue subpixels. If one subpixel gets stuck, the pixel displays that color continuously.
            </p>
            <p className="text-gray-700 mb-4">
              Test for stuck pixels using the online screen test. Display different solid colors. Stuck pixels appear as colored dots (red, green, or blue) that don't match the background.
            </p>
            <p className="text-gray-700 mb-6">
              Stuck pixels can sometimes be fixed using pressure methods or pixel repair software. They're not always permanent like dead pixels.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">How to Test for Pixel Problems</h3>
            <p className="text-gray-700 mb-4">
              Use the online screen test to identify dead or stuck pixels. The test displays solid colors that make pixel problems easy to see.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Open the online screen test</li>
              <li>Enter fullscreen mode for best results</li>
              <li>Cycle through solid colors: black, white, red, green, blue</li>
              <li>Look for pixels that don't match the background</li>
              <li>Dead pixels appear black on colored backgrounds</li>
              <li>Stuck pixels appear as colored dots on backgrounds</li>
            </ul>
            <p className="text-gray-700 mb-4">
              Test each color thoroughly. Move close to the screen to see individual pixels clearly. Use the pixel check mode for detailed inspection.
            </p>
            <p className="text-gray-700 mb-6">
              Note the location and type of any pixel problems. This information helps determine if pixels can be fixed or if warranty coverage applies.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Fixing Stuck Pixels - Pressure Method</h3>
            <p className="text-gray-700 mb-4">
              The pressure method can sometimes fix stuck pixels by stimulating the pixel's components. This method works by applying gentle pressure to the stuck pixel.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Turn off your screen</li>
              <li>Locate the stuck pixel</li>
              <li>Wrap a soft cloth around a pen or similar object</li>
              <li>Apply gentle pressure directly to the stuck pixel</li>
              <li>Hold pressure for 10-15 seconds</li>
              <li>Release and turn screen back on</li>
              <li>Test if the pixel is fixed</li>
            </ul>
            <p className="text-gray-700 mb-4">
              Be careful not to apply too much pressure. Excessive force can damage the screen. Use a soft cloth to protect the screen surface.
            </p>
            <p className="text-gray-700 mb-4">
              This method may need to be repeated several times. Some stuck pixels respond immediately, while others require multiple attempts.
            </p>
            <p className="text-gray-700 mb-6">
              If the pressure method doesn't work, try pixel repair software. See the guide on <Link href="/guides/how-to-fix-stuck-pixels" className="text-blue-600 hover:text-blue-800">how to fix stuck pixels</Link> for detailed repair methods.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Fixing Stuck Pixels - Software Methods</h3>
            <p className="text-gray-700 mb-4">
              Pixel repair software flashes rapid color changes to stimulate stuck pixels. This method can fix pixels that don't respond to pressure.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Download pixel repair software (many free options available)</li>
              <li>Position the repair window over the stuck pixel</li>
              <li>Run the repair sequence for 10-30 minutes</li>
              <li>Test the pixel after repair</li>
              <li>Repeat if necessary</li>
            </ul>
            <p className="text-gray-700 mb-4">
              Pixel repair software works by rapidly changing colors, which can stimulate stuck subpixels back into normal operation. This method is safer than pressure and can be run for extended periods.
            </p>
            <p className="text-gray-700 mb-6">
              Not all stuck pixels respond to software repair. If software methods don't work, the pixel may be permanently stuck or actually dead.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">When Pixels Cannot Be Fixed</h3>
            <p className="text-gray-700 mb-4">
              Dead pixels cannot be fixed. They require screen replacement if they're bothersome. Check your warranty coverage before replacing screens.
            </p>
            <p className="text-gray-700 mb-4">
              Some stuck pixels don't respond to repair methods. If pressure and software methods don't work after multiple attempts, the pixel may be permanently stuck.
            </p>
            <p className="text-gray-700 mb-4">
              Multiple dead pixels may qualify for warranty coverage. Most manufacturers have policies covering screens with 3-5 dead pixels, depending on screen size and location.
            </p>
            <p className="text-gray-700 mb-6">
              If pixels are in corners or edges, they may be less noticeable. Consider whether replacement is worth the cost if pixels don't significantly impact use.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Warranty and Replacement</h2>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Manufacturer Dead Pixel Policies</h3>
            <p className="text-gray-700 mb-4">
              Most manufacturers have dead pixel policies that define when screens qualify for replacement. Policies vary by manufacturer and screen type.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Many policies require 3-5 dead pixels for replacement</li>
              <li>Some policies consider pixel location (center vs edges)</li>
              <li>Policies may differ for different screen sizes</li>
              <li>Check your manufacturer's specific policy</li>
              <li>Warranty coverage typically applies to new screens</li>
            </ul>
            <p className="text-gray-700 mb-6">
              Test new screens immediately after purchase. Identifying pixel problems early ensures warranty coverage if needed.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How to Prevent the Problem in Future</h2>
            <p className="text-gray-700 mb-4">
              Test new screens immediately after purchase. Use the online screen test to identify pixel problems while under warranty.
            </p>
            <p className="text-gray-700 mb-4">
              Handle screens carefully. Physical damage can cause pixels to fail. Avoid pressure on screen surfaces.
            </p>
            <p className="text-gray-700 mb-4">
              Keep screens clean. Dust and debris can affect pixel operation over time. Clean screens regularly with appropriate methods.
            </p>
            <p className="text-gray-700 mb-4">
              Understand that some pixel defects are normal. Most manufacturers allow a certain number of dead pixels before considering screens defective.
            </p>
            <p className="text-gray-700 mb-6">
              Regular testing helps identify pixel problems early. Test screens periodically to catch issues before they become more noticeable.
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

            <RelatedGuides guides={[
              { title: 'Dead Pixel Test Guide', href: '/guides/dead-pixel-test-guide' },
              { title: 'How to Fix Stuck Pixels', href: '/guides/how-to-fix-stuck-pixels' },
              { title: 'Screen Flickering Fix', href: '/guides/screen-flickering-fix' }
            ]} />

            <p className="text-gray-700 mb-6 mt-8">
              Use the <Link href="/screen" className="text-blue-600 hover:text-blue-800">online screen test</Link> to identify dead or stuck pixels.
            </p>
          </article>

          <HelpfulWidget />
        </div>
      </div>
    </>
  )
}

