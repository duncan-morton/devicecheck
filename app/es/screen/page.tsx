import { Metadata } from 'next'
import { generateMetadata as genMeta } from '@/lib/seo/metadata'
import JsonLdScript from '@/components/JsonLdScript'
import { generateWebApplicationSchema, generateBreadcrumbListSchema, generateFAQPageSchema } from '@/lib/seo/jsonLd'
import { getTranslation, type Locale } from '@/i18n/getTranslation'
import { localizePathIfSupported } from '@/lib/i18n/routeLocaleSupport'
import ScreenTool from '@/components/ScreenTool'
import Breadcrumbs from '@/components/Breadcrumbs'
import RelatedTools from '@/components/RelatedTools'
import Link from 'next/link'

export const revalidate = 86400 // ISR: Revalidate every 24 hours

const locale: Locale = 'es'
const t = getTranslation(locale)

export const metadata: Metadata = genMeta({
  title: t.screen_test_title,
  description: 'Test your screen for dead pixels, stuck pixels, and color accuracy with our free online screen test tool. Check monitor quality instantly in your browser.',
  path: '/es/screen',
  locale: 'es',
  keywords: [
    'dead pixel test',
    'screen test',
    'monitor test',
    'dead pixel check',
    'stuck pixel test',
    'screen test online',
    'monitor color test',
    'pixel test'
  ]
})

const faqs = [
  {
    question: 'How do I test for dead pixels?',
    answer: 'Enter fullscreen mode and cycle through solid colors (especially black, white, red, green, blue). Dead pixels appear as black dots on colored backgrounds. Stuck pixels appear as colored dots on black/white backgrounds.'
  },
  {
    question: 'What is the difference between dead and stuck pixels?',
    answer: 'Dead pixels are permanently black and don\'t respond to signals. Stuck pixels are permanently lit in one color (red, green, or blue). Dead pixels cannot be fixed, but stuck pixels can sometimes be repaired with pixel fixing software or gentle pressure.'
  },
  {
    question: 'Can I fix stuck pixels?',
    answer: 'Sometimes. Try pixel fixing software that rapidly cycles colors, apply gentle pressure with a soft cloth, or use a pixel unsticker tool. However, many stuck pixels cannot be fixed and may require screen replacement.'
  },
  {
    question: 'How many dead pixels are acceptable?',
    answer: 'Most manufacturers consider 1-3 dead pixels acceptable, especially on larger screens. However, if dead pixels are clustered together or in the center of the screen, you may be eligible for a replacement under warranty.'
  },
  {
    question: 'Does this test work on all monitors?',
    answer: 'Yes! Our screen test works on LCD, LED, OLED, and all monitor types. Enter fullscreen mode for the most accurate test results.'
  }
]

export default function ScreenTestPage() {
  const locale: Locale = 'es'
  const t = getTranslation(locale)
  
  const webAppSchema = generateWebApplicationSchema(
    t.screen_test_title,
    'Test your screen for dead pixels, stuck pixels, and color accuracy.',
    '/es/screen',
    locale
  )

  const breadcrumbs = generateBreadcrumbListSchema([
    { name: t.breadcrumb_home, path: '/es' },
    { name: t.screen_test, path: '/es/screen' }
  ], locale)

  const faqSchema = generateFAQPageSchema(faqs, locale)

  return (
    <>
      <JsonLdScript data={webAppSchema} />
      <JsonLdScript data={breadcrumbs} />
      <JsonLdScript data={faqSchema} />
      
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8 max-w-6xl">
          <Breadcrumbs items={[{ name: t.screen_test, path: '/es/screen' }]} locale={locale} />
          
          <Link 
            href={localizePathIfSupported('/', locale)}
            className="inline-block text-sm text-slate-500 hover:text-slate-900 mb-4 transition-colors"
          >
            ← All tools
          </Link>
          
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t.screen_test_title}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl">
              Test your screen for dead pixels, stuck pixels, color accuracy, and backlight issues with our free online screen test tool. Perfect for checking monitor quality before purchase or troubleshooting display issues.
            </p>
          </div>

          <div className="mb-8">
            <Link 
              href="#test"
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
            >
              {t.run_screen_test} →
            </Link>
          </div>

          <div id="test" className="scroll-mt-8">
            <ScreenTool />
          </div>

          <RelatedTools currentPath="/screen" locale={locale} />

          {/* Comprehensive SEO Content */}
          <article className="prose prose-slate max-w-none bg-white p-8 md:p-12 rounded-2xl border border-gray-200 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Test Your Screen for Dead Pixels</h2>
            
            <p className="text-lg text-gray-700 mb-6">
              Testing your screen for dead pixels, stuck pixels, and color accuracy is essential when purchasing a new monitor or troubleshooting display issues. Our <strong>free online screen test</strong> provides comprehensive testing tools to check your monitor's quality, identify pixel defects, and verify color accuracy—all directly in your browser.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Why Test Your Screen?</h3>
            <p className="text-gray-700 mb-4">
              Screen testing helps you:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Identify dead or stuck pixels before warranty expires</li>
              <li>Check color accuracy and calibration</li>
              <li>Detect backlight bleeding or uniformity issues</li>
              <li>Verify monitor quality after purchase</li>
              <li>Troubleshoot display problems</li>
              <li>Test multiple monitors for comparison</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Understanding Dead vs Stuck Pixels</h3>

            <h4 className="text-xl font-bold text-gray-900 mt-6 mb-3">Dead Pixels</h4>
            <p className="text-gray-700 mb-4">
              Dead pixels are permanently black and don't respond to electrical signals. They appear as black dots on colored backgrounds and cannot be fixed. Dead pixels are caused by manufacturing defects or physical damage to the screen.
            </p>

            <h4 className="text-xl font-bold text-gray-900 mt-6 mb-3">Stuck Pixels</h4>
            <p className="text-gray-700 mb-4">
              Stuck pixels are permanently lit in one color (usually red, green, or blue). They appear as colored dots on black or white backgrounds. Unlike dead pixels, stuck pixels can sometimes be repaired using pixel fixing techniques.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Step-by-Step Screen Testing Guide</h3>
            <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-6">
              <li>
                <strong>Enter Fullscreen Mode:</strong> Click "Enter Fullscreen Mode" for the most accurate test. This ensures you're testing the entire screen without browser UI interference.
              </li>
              <li>
                <strong>Test Solid Colors:</strong> Use the solid color mode and cycle through black, white, red, green, and blue. Look for pixels that don't match the background color.
              </li>
              <li>
                <strong>Use Auto Cycle:</strong> Enable auto cycle to automatically switch between colors every 2 seconds. This makes it easier to spot pixel defects.
              </li>
              <li>
                <strong>Check Pixel Grid:</strong> Use the pixel check mode to see individual pixels clearly. This helps identify exact pixel locations.
              </li>
              <li>
                <strong>Test Gradient:</strong> Use gradient mode to check for color banding and smooth color transitions.
              </li>
              <li>
                <strong>Document Issues:</strong> Note the location and type of any pixel defects you find. Take photos if needed for warranty claims.
              </li>
            </ol>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How to Fix Stuck Pixels</h3>
            <p className="text-gray-700 mb-4">
              While dead pixels cannot be fixed, stuck pixels can sometimes be repaired:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>
                <strong>Pixel Fixing Software:</strong> Use software that rapidly cycles colors to "unstick" pixels. Run for 10-30 minutes.
              </li>
              <li>
                <strong>Gentle Pressure:</strong> Turn off your monitor, wrap a soft cloth around your finger, and gently massage the stuck pixel area. Turn the monitor back on to check.
              </li>
              <li>
                <strong>Heat Method:</strong> Some users report success by gently warming the stuck pixel area with a warm (not hot) cloth, then cooling it.
              </li>
              <li>
                <strong>Pixel Unsticker Tools:</strong> Specialized tools apply rapid color changes directly to stuck pixels.
              </li>
              <li>
                <strong>Warranty Replacement:</strong> If stuck pixels persist and are in visible areas, contact the manufacturer for warranty replacement.
              </li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Testing Color Accuracy</h3>
            <p className="text-gray-700 mb-4">
              Our screen test includes color accuracy testing:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Primary Colors:</strong> Test red, green, and blue to ensure color channels work correctly</li>
              <li><strong>Gradient Testing:</strong> Check for smooth color transitions without banding</li>
              <li><strong>Contrast:</strong> Test black and white levels for proper contrast</li>
              <li><strong>Uniformity:</strong> Check for consistent color across the entire screen</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Common Screen Issues</h3>

            <h4 className="text-xl font-bold text-gray-900 mt-6 mb-3">Backlight Bleeding</h4>
            <p className="text-gray-700 mb-4">
              Backlight bleeding appears as light leaking from screen edges, especially visible on black backgrounds. This is common in LCD monitors and may be more noticeable in dark rooms.
            </p>

            <h4 className="text-xl font-bold text-gray-900 mt-6 mb-3">Color Uniformity</h4>
            <p className="text-gray-700 mb-4">
              Color uniformity issues appear as color variations across the screen. Test with solid colors to identify areas with different tints or brightness levels.
            </p>

            <h4 className="text-xl font-bold text-gray-900 mt-6 mb-3">Viewing Angles</h4>
            <p className="text-gray-700 mb-4">
              Test your screen from different angles. Colors and brightness should remain consistent when viewed from the sides, above, or below.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Warranty and Dead Pixel Policies</h3>
            <p className="text-gray-700 mb-4">
              Most manufacturers have dead pixel policies:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Zero Dead Pixel Policy:</strong> Some premium monitors guarantee zero dead pixels</li>
              <li><strong>Acceptable Dead Pixel Count:</strong> Many manufacturers allow 1-3 dead pixels, especially on larger screens</li>
              <li><strong>Bright Pixel Policy:</strong> Stuck pixels (bright pixels) are often covered under warranty</li>
              <li><strong>Clustering:</strong> Dead pixels clustered together may qualify for replacement even if under the acceptable count</li>
              <li><strong>Center Screen:</strong> Dead pixels in the center of the screen are more likely to qualify for replacement</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Troubleshooting Guides</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><Link href="/guides/dead-pixel-test-guide" className="text-blue-600 hover:text-blue-800">Dead pixel test guide</Link></li>
              <li><Link href="/guides/how-to-fix-stuck-pixels" className="text-blue-600 hover:text-blue-800">Fix stuck pixels</Link></li>
              <li><Link href="/guides/screen-flickering" className="text-blue-600 hover:text-blue-800">Screen flickering</Link></li>
              <li><Link href="/guides/screen-looks-washed-out" className="text-blue-600 hover:text-blue-800">Screen looks washed out</Link></li>
              <li><Link href="/guides/colour-calibration-basics" className="text-blue-600 hover:text-blue-800">Colour calibration basics</Link></li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">{t.frequently_asked_questions}</h3>
            <div className="space-y-6 mt-6">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-200 pb-6 last:border-0">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{faq.question}</h4>
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Tips for Accurate Testing</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Use Fullscreen:</strong> Always test in fullscreen mode for accurate results</li>
              <li><strong>Clean Your Screen:</strong> Clean your monitor before testing to avoid mistaking dirt for dead pixels</li>
              <li><strong>Test in Dark Room:</strong> Test in a dark room to better see backlight bleeding and pixel defects</li>
              <li><strong>Test All Colors:</strong> Don't just test black and white—test all primary colors</li>
              <li><strong>Take Photos:</strong> Document any issues with photos for warranty claims</li>
              <li><strong>Test Multiple Times:</strong> Run the test multiple times to confirm pixel defects</li>
            </ul>

            <p className="text-lg text-gray-700 mt-8">
              Ready to test your screen? <Link href="#test" className="text-blue-600 hover:text-blue-800 font-semibold">Scroll up and click "Run Screen Test"</Link> to check for dead pixels, stuck pixels, and color accuracy. The test takes just minutes and helps ensure your monitor is in perfect condition.
            </p>
          </article>
        </div>
      </div>
    </>
  )
}

