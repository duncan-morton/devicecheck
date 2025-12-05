import { Metadata } from 'next'
import { generateMetadata as genMeta } from '@/lib/seo/metadata'
import JsonLdScript from '@/components/JsonLdScript'
import { generateWebApplicationSchema, generateBreadcrumbListSchema, generateFAQPageSchema } from '@/lib/seo/jsonLd'
import KeyboardTool from '@/components/KeyboardTool'
import Breadcrumbs from '@/components/Breadcrumbs'
import RelatedTools from '@/components/RelatedTools'
import DeviceNavigation from '@/components/DeviceNavigation'
import StickyActionBar from '@/components/StickyActionBar'
import Link from 'next/link'

export const revalidate = 86400 // ISR: Revalidate every 24 hours

export const metadata: Metadata = genMeta({
  title: 'Online Keyboard Test – Test All Keys Instantly',
  description: 'Test your keyboard online instantly. Check if all keys work, detect stuck keys, test ghosting, and verify keyboard functionality with our free browser-based keyboard test tool.',
  path: '/keyboard',
  keywords: [
    'online keyboard test',
    'keyboard test',
    'keyboard test online',
    'test keyboard keys',
    'keyboard not working',
    'stuck keys test',
    'keyboard ghosting test',
    'key test online'
  ]
})

const faqs = [
  {
    question: 'How do I test my keyboard online?',
    answer: 'Simply press any key on your keyboard. Keys will light up green when pressed and turn blue after being tested. The tool tracks which keys you\'ve tested and shows your progress.'
  },
  {
    question: 'What is keyboard ghosting?',
    answer: 'Keyboard ghosting occurs when pressing multiple keys simultaneously causes some key presses to not register. This happens when keyboards don\'t support N-key rollover. Test by pressing multiple keys at once.'
  },
  {
    question: 'How do I fix stuck keys?',
    answer: 'Stuck keys can be caused by debris, spills, or mechanical issues. Try cleaning with compressed air, gently removing the keycap and cleaning underneath, or replacing the keyboard if cleaning doesn\'t help.'
  },
  {
    question: 'Why are some keys not working?',
    answer: 'Keys may not work due to physical damage, debris under keys, driver issues, or hardware failure. Test each key individually, clean the keyboard, update drivers, and try the keyboard on another computer to isolate the issue.'
  },
  {
    question: 'Can I test laptop keyboards?',
    answer: 'Yes! Our keyboard test works with all keyboards including laptop keyboards, mechanical keyboards, membrane keyboards, and wireless keyboards. Just press keys and watch them light up.'
  }
]

export default function KeyboardTestPage() {
  const webAppSchema = generateWebApplicationSchema(
    'Online Keyboard Test',
    'Test your keyboard online instantly. Check if all keys work, detect stuck keys, and test ghosting.',
    '/keyboard'
  )

  const breadcrumbs = generateBreadcrumbListSchema([
    { name: 'Home', path: '/' },
    { name: 'Keyboard Test', path: '/keyboard' }
  ])

  const faqSchema = generateFAQPageSchema(faqs)

  return (
    <>
      <JsonLdScript data={webAppSchema} />
      <JsonLdScript data={breadcrumbs} />
      <JsonLdScript data={faqSchema} />
      
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8 max-w-6xl">
          <Breadcrumbs items={[{ name: 'Keyboard Test', path: '/keyboard' }]} />
          
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Online Keyboard Test – Test All Keys Instantly
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl">
              Test your keyboard instantly with our free online tool. Check if all keys work properly, detect stuck or non-responsive keys, test for ghosting, and verify your keyboard functionality.
            </p>
          </div>

          <div className="mb-8">
            <Link 
              href="#test"
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
            >
              Run Keyboard Test →
            </Link>
          </div>

          <div id="test" className="scroll-mt-8">
            <KeyboardTool />
          </div>

          <RelatedTools currentPath="/keyboard" />

          {/* Comprehensive SEO Content */}
          <article className="prose prose-slate max-w-none bg-white p-8 md:p-12 rounded-2xl border border-gray-200 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Test Your Keyboard Online</h2>
            
            <p className="text-lg text-gray-700 mb-6">
              Testing your keyboard is essential for ensuring all keys work correctly, especially before important work or gaming sessions. Our <strong>free online keyboard test</strong> provides instant visual feedback on every key press, helping you identify stuck keys, non-responsive keys, and keyboard ghosting issues—all without installing any software.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Why Test Your Keyboard?</h3>
            <p className="text-gray-700 mb-4">
              Keyboard issues can disrupt productivity and gaming. By testing your keyboard, you can:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Verify all keys register correctly</li>
              <li>Identify stuck or sticky keys</li>
              <li>Test for keyboard ghosting (multiple key presses)</li>
              <li>Check modifier keys (Shift, Ctrl, Alt) functionality</li>
              <li>Verify special keys (Function keys, arrow keys, etc.)</li>
              <li>Test keyboard before important work or gaming</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Step-by-Step Keyboard Testing Guide</h3>
            <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-6">
              <li>
                <strong>Start Testing:</strong> Click "Run Keyboard Test" or simply start pressing keys. Each key will light up green when pressed and turn blue after being tested.
              </li>
              <li>
                <strong>Test All Keys:</strong> Systematically press every key on your keyboard, including letters, numbers, symbols, function keys, and modifier keys (Shift, Ctrl, Alt, etc.).
              </li>
              <li>
                <strong>Check Progress:</strong> Watch the progress bar to see how many keys you've tested. Aim to test all 87+ keys on a standard keyboard.
              </li>
              <li>
                <strong>Test Multiple Keys:</strong> Press multiple keys simultaneously to test for keyboard ghosting. If some keys don't register when pressed together, you may have a ghosting issue.
              </li>
              <li>
                <strong>Review Results:</strong> Check the "Recent Key Presses" section to see which keys you've pressed. If a key doesn't appear, it may not be working correctly.
              </li>
            </ol>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Common Keyboard Problems and Solutions</h3>

            <h4 className="text-xl font-bold text-gray-900 mt-6 mb-3">Stuck Keys or Keys That Don't Release</h4>
            <p className="text-gray-700 mb-4">
              If a key stays pressed or doesn't release:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>
                <strong>Physical Debris:</strong> Food crumbs, dust, or liquid can cause keys to stick. Use compressed air to blow debris out from under keys.
              </li>
              <li>
                <strong>Liquid Spills:</strong> If liquid was spilled, immediately unplug the keyboard, turn it upside down, and let it dry completely (24-48 hours). For mechanical keyboards, you may need to remove keycaps and clean switches.
              </li>
              <li>
                <strong>Keycap Removal:</strong> Gently remove the stuck keycap (if removable) and clean underneath. Be careful not to break the mechanism.
              </li>
              <li>
                <strong>Mechanical Issues:</strong> For mechanical keyboards, the switch may be damaged. Consider replacing the switch or the entire keyboard if multiple keys are affected.
              </li>
            </ul>

            <h4 className="text-xl font-bold text-gray-900 mt-6 mb-3">Keys Not Working or Not Registering</h4>
            <p className="text-gray-700 mb-4">
              If keys don't register when pressed:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>
                <strong>Connection Issues:</strong> For USB keyboards, unplug and replug the cable. For wireless keyboards, check battery level and reconnect.
              </li>
              <li>
                <strong>Driver Problems:</strong> Update keyboard drivers in Windows Device Manager or Mac System Preferences. Sometimes reinstalling drivers fixes issues.
              </li>
              <li>
                <strong>Test on Another Computer:</strong> If the keyboard works on another computer, the issue is software-related. If it doesn't work anywhere, it's hardware failure.
              </li>
              <li>
                <strong>Check for Physical Damage:</strong> Inspect the keyboard for visible damage, broken switches, or loose connections.
              </li>
              <li>
                <strong>Software Conflicts:</strong> Close any keyboard remapping software or macros that might interfere with key detection.
              </li>
            </ul>

            <h4 className="text-xl font-bold text-gray-900 mt-6 mb-3">Keyboard Ghosting</h4>
            <p className="text-gray-700 mb-4">
              Keyboard ghosting occurs when pressing multiple keys simultaneously causes some key presses to not register. This is common in cheaper keyboards:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>
                <strong>What Causes Ghosting:</strong> Keyboards use a matrix circuit. Cheaper keyboards don't support N-key rollover (NKRO), meaning they can't detect all key combinations.
              </li>
              <li>
                <strong>How to Test:</strong> Press multiple keys at once (especially gaming combinations like WASD + Shift + Space). If some keys don't register, you have ghosting.
              </li>
              <li>
                <strong>Solutions:</strong> Upgrade to a keyboard with NKRO (N-key rollover) or 6KRO (6-key rollover). Mechanical keyboards often support NKRO via USB or PS/2 connection.
              </li>
              <li>
                <strong>Gaming Impact:</strong> Ghosting is problematic for gamers who need to press multiple keys simultaneously. Test your keyboard with common gaming key combinations.
              </li>
            </ul>

            <h4 className="text-xl font-bold text-gray-900 mt-6 mb-3">Wrong Characters Appearing</h4>
            <p className="text-gray-700 mb-4">
              If pressing one key produces a different character:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Check your keyboard layout settings (QWERTY vs AZERTY vs QWERTZ)</li>
              <li>Verify language/region settings in your operating system</li>
              <li>Check for stuck modifier keys (Shift, Alt, Ctrl)</li>
              <li>Restart your computer to reset keyboard state</li>
              <li>Test with an on-screen keyboard to verify software vs hardware issue</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Understanding Keyboard Types</h3>

            <h4 className="text-xl font-bold text-gray-900 mt-6 mb-3">Mechanical Keyboards</h4>
            <p className="text-gray-700 mb-4">
              Mechanical keyboards use individual switches under each key. They offer:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Better tactile feedback and key feel</li>
              <li>Longer lifespan (50-100 million keystrokes per switch)</li>
              <li>Often support N-key rollover (NKRO)</li>
              <li>Customizable keycaps and switches</li>
              <li>Generally more expensive than membrane keyboards</li>
            </ul>

            <h4 className="text-xl font-bold text-gray-900 mt-6 mb-3">Membrane Keyboards</h4>
            <p className="text-gray-700 mb-4">
              Membrane keyboards use a rubber dome under keys. They offer:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Quieter operation</li>
              <li>Lower cost</li>
              <li>Thinner profile</li>
              <li>May have ghosting issues with multiple key presses</li>
              <li>Shorter lifespan than mechanical keyboards</li>
            </ul>

            <h4 className="text-xl font-bold text-gray-900 mt-6 mb-3">Laptop Keyboards</h4>
            <p className="text-gray-700 mb-4">
              Laptop keyboards are typically membrane-based and integrated:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Compact design with function key combinations</li>
              <li>May have limited key travel</li>
              <li>Difficult to repair or replace individual keys</li>
              <li>Often have specific layouts (smaller Enter key, different arrow keys)</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Keyboard Maintenance Tips</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Regular Cleaning:</strong> Use compressed air monthly to remove dust and debris from under keys</li>
              <li><strong>Avoid Eating Over Keyboard:</strong> Crumbs and spills are the leading cause of keyboard failure</li>
              <li><strong>Clean Keycaps:</strong> Remove keycaps (if possible) and clean with mild soap and water. Let dry completely before reattaching</li>
              <li><strong>Update Drivers:</strong> Keep keyboard drivers updated for best compatibility</li>
              <li><strong>Protect from Spills:</strong> Consider a keyboard cover or keep drinks away from your keyboard</li>
              <li><strong>Test Regularly:</strong> Use our keyboard test tool monthly to catch issues early</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Troubleshooting Guides</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><Link href="/guides/keyboard-not-working" className="text-blue-600 hover:text-blue-800">Keyboard not working</Link></li>
              <li><Link href="/guides/keys-not-registering" className="text-blue-600 hover:text-blue-800">Keys not registering</Link></li>
              <li><Link href="/guides/sticky-repeating-keys" className="text-blue-600 hover:text-blue-800">Sticky or repeating keys</Link></li>
              <li><Link href="/guides/keyboard-ghosting-explained" className="text-blue-600 hover:text-blue-800">Keyboard ghosting explained</Link></li>
              <li><Link href="/guides/mechanical-keyboard-switch-test" className="text-blue-600 hover:text-blue-800">Mechanical keyboard switch test</Link></li>
              <li><Link href="/guides/how-to-test-keyboard-windows" className="text-blue-600 hover:text-blue-800">Test keyboard on Windows</Link></li>
              <li><Link href="/guides/how-to-test-keyboard-mac" className="text-blue-600 hover:text-blue-800">Test keyboard on Mac</Link></li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Frequently Asked Questions</h3>
            <div className="space-y-6 mt-6">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-200 pb-6 last:border-0">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{faq.question}</h4>
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Testing for Gaming</h3>
            <p className="text-gray-700 mb-4">
              Gamers need keyboards that can handle rapid, simultaneous key presses. When testing for gaming:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Test common gaming combinations (WASD + Shift + Space + Ctrl)</li>
              <li>Verify all movement keys work correctly</li>
              <li>Check modifier keys used in games (Shift for run, Ctrl for crouch, etc.)</li>
              <li>Test for ghosting with multiple simultaneous presses</li>
              <li>Ensure keys register quickly without delay</li>
              <li>Consider keyboards with anti-ghosting or NKRO for competitive gaming</li>
            </ul>

            <p className="text-lg text-gray-700 mt-8">
              Ready to test your keyboard? <Link href="#test" className="text-blue-600 hover:text-blue-800 font-semibold">Scroll up and click "Run Keyboard Test"</Link> to verify all your keys are working perfectly. The test takes just minutes and helps ensure your keyboard is ready for work, gaming, or any task.
            </p>
          </article>

          <DeviceNavigation />
        </div>
      </div>
      <StickyActionBar toolName="Keyboard Test" toolHref="/keyboard" />
    </>
  )
}

