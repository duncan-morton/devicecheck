import { Metadata } from 'next'
import { generateMetadata as genMeta } from '@/lib/seo/metadata'
import JsonLdScript from '@/components/JsonLdScript'
import { generateArticleSchema, generateBreadcrumbListSchema, generateFAQPageSchema } from '@/lib/seo/jsonLd'
import Breadcrumbs from '@/components/Breadcrumbs'
import Link from 'next/link'

export const revalidate = 86400

export const metadata: Metadata = genMeta({
  title: 'Keyboard Keys Not Working - Complete Troubleshooting Guide',
  description: 'Fix keyboard keys not working. Step-by-step guide covering stuck keys, driver issues, hardware problems, and software conflicts for all keyboard types.',
  path: '/guides/keyboard-keys-not-working',
  keywords: [
    'keyboard keys not working',
    'keys not registering',
    'keyboard not responding',
    'keys stuck',
    'keyboard fix',
    'keys not working'
  ]
})

const faqs = [
  {
    question: 'Why are my keyboard keys not working?',
    answer: 'Keyboard keys can stop working due to stuck keys, driver issues, software conflicts, hardware damage, or incorrect keyboard layout settings. Check for stuck keys first, then verify drivers and software settings.'
  },
  {
    question: 'How do I fix keys not registering on my keyboard?',
    answer: 'Clean the keyboard to remove debris. Check for stuck keys that might be blocking others. Update keyboard drivers. Test the keyboard on another computer to rule out hardware issues. Use the online keyboard test to identify which keys aren\'t working.'
  },
  {
    question: 'Can software cause keyboard keys to stop working?',
    answer: 'Yes. Some software can remap keys or block certain key combinations. Check for keyboard remapping software, gaming software, or accessibility features that might interfere. Disable these temporarily to test.'
  },
  {
    question: 'How do I test which keyboard keys are not working?',
    answer: 'Use the online keyboard test to see which keys register and which don\'t. The test highlights keys as you press them and shows a history of pressed keys. This helps identify specific problem keys.'
  },
  {
    question: 'My keyboard works on one computer but not another. Why?',
    answer: 'This indicates a software or driver issue rather than hardware. Update keyboard drivers on the computer where it doesn\'t work. Check for software conflicts or different keyboard layout settings.'
  },
  {
    question: 'Can spilled liquid cause keyboard keys to stop working?',
    answer: 'Yes. Liquid can damage keyboard circuits or cause keys to stick. Turn off the computer immediately. Disconnect the keyboard. Let it dry completely before testing. Clean sticky keys with isopropyl alcohol if needed.'
  },
  {
    question: 'How do I fix a specific key that is not working?',
    answer: 'Clean around the specific key to remove debris. Check if the key is physically stuck. Test the key using the online keyboard test. If cleaning doesn\'t work, the key switch may be damaged and need replacement.'
  }
]

export default function KeyboardKeysNotWorkingPage() {
  const articleSchema = generateArticleSchema(
    'Keyboard Keys Not Working - Complete Troubleshooting Guide',
    'Fix keyboard keys not working. Step-by-step guide covering stuck keys, driver issues, hardware problems, and software conflicts for all keyboard types.',
    '/guides/keyboard-keys-not-working',
    new Date().toISOString(),
    new Date().toISOString()
  )

  const breadcrumbs = generateBreadcrumbListSchema([
    { name: 'Home', path: '/' },
    { name: 'Guides', path: '/guides' },
    { name: 'Keyboard Keys Not Working', path: '/guides/keyboard-keys-not-working' }
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
            { name: 'Keyboard Keys Not Working', path: '/guides/keyboard-keys-not-working' }
          ]} />
          
          <article className="prose prose-slate max-w-none bg-white p-8 md:p-12 rounded-2xl border border-gray-200">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Keyboard Keys Not Working</h1>
            
            <p className="text-lg text-gray-700 mb-8">
              Keyboard keys that don't register make typing difficult or impossible. This guide covers all causes and solutions for keys not working, from stuck keys to driver issues.
            </p>

            <p className="text-gray-700 mb-6">
              You can use the <Link href="/keyboard" className="text-blue-600 hover:text-blue-800">online keyboard test</Link> to identify which keys are not working.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Quick Fix Summary</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Clean keyboard to remove debris and stuck particles</li>
              <li>Check for physically stuck keys</li>
              <li>Update keyboard drivers through Device Manager</li>
              <li>Test keyboard on another computer to rule out hardware</li>
              <li>Disable keyboard remapping software or accessibility features</li>
              <li>Check keyboard layout settings in system preferences</li>
              <li>Restart your computer after changing settings</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Why This Happens</h2>
            <p className="text-gray-700 mb-4">
              Debris and stuck particles prevent keys from registering. Food crumbs, dust, and other particles can get under keycaps and block the switch mechanism.
            </p>
            <p className="text-gray-700 mb-4">
              Physically stuck keys block other keys from working. Some keyboards have key rollover limitations that prevent multiple keys from registering simultaneously.
            </p>
            <p className="text-gray-700 mb-4">
              Driver issues can cause keys to stop working, especially after system updates. Outdated or corrupted keyboard drivers prevent proper communication between hardware and software.
            </p>
            <p className="text-gray-700 mb-6">
              Software conflicts can remap or block keys. Gaming software, accessibility features, and keyboard remapping tools can interfere with normal key operation.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Step-by-Step Fix Guide</h2>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Step 1: Test Keyboard to Identify Problem Keys</h3>
            <p className="text-gray-700 mb-4">
              Before troubleshooting, identify which keys aren't working. This helps determine if the problem is specific keys or the entire keyboard.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Use the online keyboard test to check all keys</li>
              <li>Press each key and watch for highlighting</li>
              <li>Note which keys don't register</li>
              <li>Check if the problem affects specific rows or columns</li>
              <li>Test modifier keys like Shift, Ctrl, and Alt separately</li>
            </ul>
            <p className="text-gray-700 mb-4">
              The keyboard test shows a history of pressed keys, making it easy to see which keys register and which don't. This information helps narrow down the cause.
            </p>
            <p className="text-gray-700 mb-6">
              If all keys fail to register, the problem is likely driver-related or a complete hardware failure. If only specific keys fail, the issue is likely debris or damaged switches.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Step 2: Clean the Keyboard</h3>
            <p className="text-gray-700 mb-4">
              Debris under keys is the most common cause of keys not registering. Clean the keyboard thoroughly to remove particles.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Turn off your computer and disconnect the keyboard</li>
              <li>Turn the keyboard upside down and shake gently</li>
              <li>Use compressed air to blow debris from under keys</li>
              <li>Clean around problem keys with a soft brush</li>
              <li>For mechanical keyboards, remove keycaps if possible</li>
              <li>Use isopropyl alcohol on a cotton swab for sticky keys</li>
            </ul>
            <p className="text-gray-700 mb-4">
              Be careful when cleaning. Don't use excessive force or liquid that could damage the keyboard. Let the keyboard dry completely before reconnecting.
            </p>
            <p className="text-gray-700 mb-6">
              After cleaning, test the keyboard again using the online keyboard test. If keys still don't work, continue with other solutions.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Step 3: Check for Stuck Keys</h3>
            <p className="text-gray-700 mb-4">
              Stuck keys can prevent other keys from registering due to keyboard rollover limitations. Check for keys that are physically pressed down.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Visually inspect all keys for ones that appear pressed</li>
              <li>Press and release each key to check for sticking</li>
              <li>Pay special attention to modifier keys like Shift and Ctrl</li>
              <li>Check for keys that feel different when pressed</li>
              <li>Use the online keyboard test to see if keys register continuously</li>
            </ul>
            <p className="text-gray-700 mb-4">
              Some keyboards have limited key rollover, meaning they can only register a certain number of keys simultaneously. A stuck key counts toward this limit.
            </p>
            <p className="text-gray-700 mb-6">
              If you find a stuck key, clean around it or gently pry it up if it's mechanical. See the guide on <Link href="/guides/sticky-repeating-keys" className="text-blue-600 hover:text-blue-800">sticky or repeating keys</Link> for detailed solutions.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Step 4: Update Keyboard Drivers</h3>
            <p className="text-gray-700 mb-4">
              Outdated or corrupted keyboard drivers can cause keys to stop working. Update drivers to restore functionality.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Windows:</strong> Device Manager → Keyboards → Right-click your keyboard → Update driver → Search automatically for drivers. Windows will download and install the latest drivers. Restart your computer after updating.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Mac:</strong> System Preferences → Software Update → Install any available updates. macOS updates include keyboard driver improvements.
            </p>
            <p className="text-gray-700 mb-4">
              If automatic updates don't work, visit your keyboard manufacturer's website. Download drivers specific to your keyboard model and operating system.
            </p>
            <p className="text-gray-700 mb-6">
              Driver updates often fix keyboard issues that appear after system updates or software installations.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Step 5: Check Keyboard Layout Settings</h3>
            <p className="text-gray-700 mb-4">
              Incorrect keyboard layout settings can make keys appear not to work when they're actually mapped differently.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Windows:</strong> Settings → Time & Language → Language → Keyboard. Ensure the correct keyboard layout is selected. Check for multiple keyboard layouts that might be active.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Mac:</strong> System Preferences → Keyboard → Input Sources. Ensure the correct keyboard layout is selected. Remove incorrect layouts if present.
            </p>
            <p className="text-gray-700 mb-6">
              Test the keyboard after changing layout settings. Some layouts remap keys, which can make it seem like keys aren't working.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Step 6: Disable Keyboard Remapping Software</h3>
            <p className="text-gray-700 mb-4">
              Software that remaps keys can interfere with normal keyboard operation. Disable these programs temporarily to test.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Check for gaming software with keyboard macros</li>
              <li>Look for keyboard remapping tools in system tray</li>
              <li>Disable accessibility features that might remap keys</li>
              <li>Check for manufacturer software that customizes keyboard</li>
              <li>Temporarily disable these programs and test keyboard</li>
            </ul>
            <p className="text-gray-700 mb-4">
              Some software runs in the background and remaps keys without obvious indication. Check Task Manager or Activity Monitor for keyboard-related processes.
            </p>
            <p className="text-gray-700 mb-6">
              If disabling software fixes the problem, reconfigure it to avoid conflicts with the keys you need.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Step 7: Test Keyboard on Another Computer</h3>
            <p className="text-gray-700 mb-4">
              Testing the keyboard on another computer helps determine if the problem is hardware or software-related.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Connect the keyboard to another computer</li>
              <li>Test the same keys that weren't working</li>
              <li>If keys work on another computer, the issue is software-related</li>
              <li>If keys don't work on another computer, the keyboard hardware is faulty</li>
            </ul>
            <p className="text-gray-700 mb-4">
              This test helps narrow down whether you need to troubleshoot software or replace hardware.
            </p>
            <p className="text-gray-700 mb-6">
              If the keyboard works on another computer, focus on driver and software solutions. If it doesn't work, consider hardware repair or replacement.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Step 8: Check for Liquid Damage</h3>
            <p className="text-gray-700 mb-4">
              Liquid spills can damage keyboard circuits or cause keys to stick. If you've spilled liquid on your keyboard, take immediate action.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Turn off your computer immediately</li>
              <li>Disconnect the keyboard</li>
              <li>Turn the keyboard upside down to drain liquid</li>
              <li>Let it dry completely for at least 24 hours</li>
              <li>Clean sticky keys with isopropyl alcohol if needed</li>
              <li>Test the keyboard after it's completely dry</li>
            </ul>
            <p className="text-gray-700 mb-4">
              Don't use the keyboard while it's wet. This can cause short circuits and permanent damage.
            </p>
            <p className="text-gray-700 mb-6">
              If keys still don't work after drying, the keyboard may have permanent damage and need replacement.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Browser and OS Specific Fixes</h2>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Windows 10 and Windows 11</h3>
            <p className="text-gray-700 mb-4">
              Windows keyboard settings can affect key registration.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Settings → Time & Language → Language → Keyboard → Verify layout</li>
              <li>Device Manager → Keyboards → Update drivers</li>
              <li>Check for Sticky Keys or Filter Keys in Ease of Access settings</li>
            </ul>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">macOS</h3>
            <p className="text-gray-700 mb-4">
              Mac keyboard settings are simpler but should be verified.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>System Preferences → Keyboard → Input Sources → Verify layout</li>
              <li>System Preferences → Accessibility → Keyboard → Check for modifications</li>
            </ul>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Chrome and Other Browsers</h3>
            <p className="text-gray-700 mb-4">
              Browsers don't typically interfere with keyboard input, but extensions might.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Disable browser extensions temporarily to test</li>
              <li>Some extensions can remap or block keys</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How to Prevent the Problem in Future</h2>
            <p className="text-gray-700 mb-4">
              Keep your keyboard clean. Regular cleaning prevents debris from building up and blocking keys.
            </p>
            <p className="text-gray-700 mb-4">
              Avoid eating or drinking near your keyboard. Spills can cause permanent damage.
            </p>
            <p className="text-gray-700 mb-4">
              Keep keyboard drivers updated. System updates can reset driver settings, so check drivers after major updates.
            </p>
            <p className="text-gray-700 mb-4">
              Be careful with keyboard remapping software. Test changes before saving, and keep backups of original settings.
            </p>
            <p className="text-gray-700 mb-6">
              Test your keyboard regularly using the online keyboard test. Catching issues early prevents problems during important work.
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

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 my-8">
              <h3 className="font-semibold text-blue-900 mb-2">Related Guides</h3>
              <ul className="space-y-2 text-sm text-blue-800">
                <li><Link href="/guides/keyboard-not-working" className="hover:text-blue-600 underline">Keyboard Not Working</Link></li>
                <li><Link href="/guides/keys-not-registering" className="hover:text-blue-600 underline">Keys Not Registering</Link></li>
                <li><Link href="/guides/keyboard-ghosting-explained" className="hover:text-blue-600 underline">Keyboard Ghosting Explained</Link></li>
              </ul>
            </div>

            <p className="text-gray-700 mb-6 mt-8">
              Use the <Link href="/keyboard" className="text-blue-600 hover:text-blue-800">online keyboard test</Link> to confirm everything is working.
            </p>
          </article>
        </div>
      </div>
    </>
  )
}

