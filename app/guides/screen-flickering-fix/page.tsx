import { Metadata } from 'next'
import { generateMetadata as genMeta } from '@/lib/seo/metadata'
import JsonLdScript from '@/components/JsonLdScript'
import { generateArticleSchema, generateBreadcrumbListSchema, generateFAQPageSchema } from '@/lib/seo/jsonLd'
import Breadcrumbs from '@/components/Breadcrumbs'
import Link from 'next/link'

export const revalidate = 86400

export const metadata: Metadata = genMeta({
  title: 'Screen Flickering Fix - Complete Troubleshooting Guide',
  description: 'Fix screen flickering issues. Step-by-step guide covering display settings, drivers, cables, refresh rates, and hardware problems for all screen types.',
  path: '/guides/screen-flickering-fix',
  keywords: [
    'screen flickering',
    'monitor flickering',
    'display flickering',
    'screen flickering fix',
    'flickering screen',
    'monitor flicker'
  ]
})

const faqs = [
  {
    question: 'Why is my screen flickering?',
    answer: 'Screen flickering can be caused by incorrect refresh rate settings, outdated display drivers, loose or damaged cables, incompatible applications, or hardware problems. Check refresh rate settings first, then verify drivers and cables.'
  },
  {
    question: 'How do I fix screen flickering in Windows?',
    answer: 'Open Display Settings → Advanced Display Settings → Display Adapter Properties → Monitor tab. Check refresh rate and set it to the highest supported rate. Update display drivers through Device Manager. Check cable connections.'
  },
  {
    question: 'How do I fix screen flickering on Mac?',
    answer: 'System Preferences → Displays → Check refresh rate settings. Update macOS to ensure you have latest display drivers. Check cable connections. Disable automatic graphics switching if available. Reset NVRAM if flickering persists.'
  },
  {
    question: 'Can display cables cause screen flickering?',
    answer: 'Yes. Loose, damaged, or low-quality cables can cause flickering. Check HDMI, DisplayPort, or VGA connections. Try a different cable. Ensure cables are firmly connected at both ends. Use high-quality cables for best results.'
  },
  {
    question: 'Can refresh rate cause screen flickering?',
    answer: 'Yes. Incorrect refresh rate settings are a common cause of flickering. Set refresh rate to the highest value your monitor supports (usually 60Hz, 75Hz, 120Hz, or 144Hz). Lower refresh rates can cause noticeable flickering.'
  },
  {
    question: 'How do I update display drivers to fix flickering?',
    answer: 'Windows: Device Manager → Display Adapters → Right-click graphics card → Update driver → Search automatically. Mac: System Preferences → Software Update. Visit your graphics card manufacturer\'s website for latest drivers if automatic updates don\'t work.'
  },
  {
    question: 'Can software cause screen flickering?',
    answer: 'Yes. Some applications, especially games or video software, can cause flickering if they conflict with display settings. Close applications one by one to identify the cause. Update problematic software to latest versions.'
  }
]

export default function ScreenFlickeringFixPage() {
  const articleSchema = generateArticleSchema(
    'Screen Flickering Fix - Complete Troubleshooting Guide',
    'Fix screen flickering issues. Step-by-step guide covering display settings, drivers, cables, refresh rates, and hardware problems for all screen types.',
    '/guides/screen-flickering-fix',
    new Date().toISOString(),
    new Date().toISOString()
  )

  const breadcrumbs = generateBreadcrumbListSchema([
    { name: 'Home', path: '/' },
    { name: 'Guides', path: '/guides' },
    { name: 'Screen Flickering Fix', path: '/guides/screen-flickering-fix' }
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
            { name: 'Screen Flickering Fix', path: '/guides/screen-flickering-fix' }
          ]} />
          
          <article className="prose prose-slate max-w-none bg-white p-8 md:p-12 rounded-2xl border border-gray-200">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Screen Flickering Fix</h1>
            
            <p className="text-lg text-gray-700 mb-8">
              Screen flickering is distracting and can cause eye strain. This guide covers all causes and solutions for flickering displays, from refresh rate settings to hardware problems.
            </p>

            <p className="text-gray-700 mb-6">
              You can use the <Link href="/screen" className="text-blue-600 hover:text-blue-800">online screen test</Link> to check your display for issues.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Quick Fix Summary</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Set refresh rate to highest supported value</li>
              <li>Update display drivers through Device Manager or System Preferences</li>
              <li>Check and reseat display cables</li>
              <li>Try a different cable if available</li>
              <li>Close applications that might cause conflicts</li>
              <li>Disable automatic graphics switching on laptops</li>
              <li>Restart your computer after changing settings</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Why This Happens</h2>
            <p className="text-gray-700 mb-4">
              Incorrect refresh rate settings are the most common cause of screen flickering. Refresh rate determines how many times per second the screen updates. Lower refresh rates can cause noticeable flickering, especially under certain lighting conditions.
            </p>
            <p className="text-gray-700 mb-4">
              Outdated or corrupted display drivers can cause flickering. Drivers control how your graphics card communicates with the display. Problems with drivers can result in unstable refresh rates or display signals.
            </p>
            <p className="text-gray-700 mb-4">
              Loose or damaged display cables cause signal interruptions that appear as flickering. Cables can become loose over time, or physical damage can degrade signal quality.
            </p>
            <p className="text-gray-700 mb-6">
              Software conflicts can cause flickering. Some applications, especially games or video software, can interfere with display settings or refresh rates, causing temporary flickering.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Step-by-Step Fix Guide</h2>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Step 1: Adjust Refresh Rate Settings</h3>
            <p className="text-gray-700 mb-4">
              Refresh rate is the most common cause of flickering. Set it to the highest value your monitor supports.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Windows 10/11:</strong> Right-click desktop → Display Settings → Advanced Display Settings → Display Adapter Properties → Monitor tab → Screen Refresh Rate dropdown → Select highest available rate (usually 60Hz, 75Hz, 120Hz, or 144Hz) → Apply.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Mac:</strong> System Preferences → Displays → Check "Refresh Rate" dropdown → Select highest available rate → Close preferences.
            </p>
            <p className="text-gray-700 mb-4">
              Lower refresh rates (30Hz or 50Hz) can cause noticeable flickering. Most modern monitors support at least 60Hz, which should eliminate flickering for most users.
            </p>
            <p className="text-gray-700 mb-6">
              Test the screen after changing refresh rate. If flickering persists, continue with other solutions.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Step 2: Update Display Drivers</h3>
            <p className="text-gray-700 mb-4">
              Outdated or corrupted display drivers can cause flickering. Update drivers to ensure proper communication between graphics card and display.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Windows:</strong> Device Manager → Display Adapters → Right-click your graphics card → Update driver → Search automatically for drivers. Windows will download and install the latest drivers. Restart your computer after updating.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Mac:</strong> System Preferences → Software Update → Install any available updates. macOS updates include display driver improvements.
            </p>
            <p className="text-gray-700 mb-4">
              If automatic updates don't work, visit your graphics card manufacturer's website (NVIDIA, AMD, or Intel). Download the latest drivers for your specific graphics card model and operating system.
            </p>
            <p className="text-gray-700 mb-6">
              Driver updates often fix flickering issues that appear after system updates or software installations.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Step 3: Check Display Cables</h3>
            <p className="text-gray-700 mb-4">
              Loose or damaged cables cause signal interruptions that appear as flickering. Verify all cable connections are secure.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Unplug display cables at both ends</li>
              <li>Inspect cables for visible damage or bent pins</li>
              <li>Firmly reconnect cables at both ends</li>
              <li>Ensure cables are fully inserted</li>
              <li>Try a different cable if available</li>
              <li>Test with a different port on your graphics card</li>
            </ul>
            <p className="text-gray-700 mb-4">
              HDMI, DisplayPort, and VGA cables can all cause flickering if damaged or loose. DisplayPort generally provides the most stable connection for high refresh rates.
            </p>
            <p className="text-gray-700 mb-6">
              If flickering stops after reconnecting cables, the problem was a loose connection. If it persists, try a different cable.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Step 4: Close Conflicting Applications</h3>
            <p className="text-gray-700 mb-4">
              Some applications can cause flickering by interfering with display settings or refresh rates.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Close games or video software</li>
              <li>Close applications with fullscreen modes</li>
              <li>Check for background applications affecting display</li>
              <li>Restart your computer to clear all applications</li>
              <li>Test if flickering occurs with no applications open</li>
            </ul>
            <p className="text-gray-700 mb-4">
              If flickering only occurs with specific applications, update those applications or adjust their display settings.
            </p>
            <p className="text-gray-700 mb-6">
              Some applications force specific refresh rates that conflict with your display settings. Check application settings for display or graphics options.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Step 5: Disable Automatic Graphics Switching (Laptops)</h3>
            <p className="text-gray-700 mb-4">
              Laptops with dual graphics (integrated and dedicated) can flicker when switching between them. Disable automatic switching to prevent this.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Windows:</strong> Graphics Settings → Graphics Performance Preference → Set applications to use specific graphics card → Disable automatic switching if available.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Mac:</strong> System Preferences → Energy Saver → Uncheck "Automatic graphics switching" if available. Note that this may reduce battery life.
            </p>
            <p className="text-gray-700 mb-6">
              Automatic graphics switching can cause flickering when the system switches between integrated and dedicated graphics. Disabling this prevents switching-related flickering.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Step 6: Reset Display Settings</h3>
            <p className="text-gray-700 mb-4">
              Corrupted display settings can cause flickering. Reset settings to defaults to eliminate configuration problems.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Windows:</strong> Display Settings → Advanced Display Settings → Display Adapter Properties → List All Modes → Select a standard resolution and refresh rate → Apply. This resets display settings to defaults.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Mac:</strong> System Preferences → Displays → Hold Option key and click "Scaled" → Select default resolution → Close preferences.
            </p>
            <p className="text-gray-700 mb-6">
              After resetting, reconfigure display settings gradually. Test after each change to identify which setting causes flickering.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Step 7: Check for Hardware Problems</h3>
            <p className="text-gray-700 mb-4">
              If software solutions don't work, the problem may be hardware-related. Test your display on another computer to isolate the issue.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Connect your display to another computer</li>
              <li>Test if flickering occurs on the second computer</li>
              <li>If flickering persists, the display hardware may be faulty</li>
              <li>If flickering stops, the problem is with your original computer</li>
              <li>Test with a different display on your computer</li>
            </ul>
            <p className="text-gray-700 mb-4">
              This test helps determine whether the problem is the display, graphics card, or computer settings.
            </p>
            <p className="text-gray-700 mb-6">
              If the display flickers on multiple computers, it likely has a hardware problem and may need repair or replacement.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Browser and OS Specific Fixes</h2>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Windows 10 and Windows 11</h3>
            <p className="text-gray-700 mb-4">
              Windows display settings are the primary control for refresh rates and display configuration.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Display Settings → Advanced Display Settings → Refresh Rate</li>
              <li>Device Manager → Display Adapters → Update drivers</li>
              <li>Graphics Settings → Disable automatic graphics switching</li>
            </ul>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">macOS</h3>
            <p className="text-gray-700 mb-4">
              Mac display settings are simpler but should be checked for refresh rate issues.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>System Preferences → Displays → Refresh Rate</li>
              <li>System Preferences → Energy Saver → Disable automatic graphics switching</li>
              <li>Reset NVRAM if flickering persists: Restart and hold Option+Command+P+R</li>
            </ul>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Chrome and Other Browsers</h3>
            <p className="text-gray-700 mb-4">
              Browsers typically don't cause screen flickering, but hardware acceleration can sometimes interfere.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Chrome: Settings → Advanced → System → Disable "Use hardware acceleration"</li>
              <li>Test if disabling hardware acceleration fixes flickering</li>
              <li>Re-enable after testing if it doesn't help</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How to Prevent the Problem in Future</h2>
            <p className="text-gray-700 mb-4">
              Set refresh rate to the highest supported value and leave it there. Constantly changing refresh rates can cause flickering.
            </p>
            <p className="text-gray-700 mb-4">
              Keep display drivers updated. System updates can reset driver settings, so check drivers after major updates.
            </p>
            <p className="text-gray-700 mb-4">
              Use high-quality display cables. Cheap or damaged cables can cause signal problems that lead to flickering.
            </p>
            <p className="text-gray-700 mb-4">
              Secure cable connections. Check cables periodically to ensure they haven't become loose.
            </p>
            <p className="text-gray-700 mb-6">
              Test your display regularly using the online screen test. Catching flickering issues early prevents problems during important work.
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
                <li><Link href="/guides/screen-flickering" className="hover:text-blue-600 underline">Screen Flickering</Link></li>
                <li><Link href="/guides/dead-vs-stuck-pixels" className="hover:text-blue-600 underline">Dead vs Stuck Pixels</Link></li>
                <li><Link href="/guides/dead-pixel-test-guide" className="hover:text-blue-600 underline">Dead Pixel Test Guide</Link></li>
              </ul>
            </div>

            <p className="text-gray-700 mb-6 mt-8">
              Use the <Link href="/screen" className="text-blue-600 hover:text-blue-800">online screen test</Link> to check your display for issues.
            </p>
          </article>
        </div>
      </div>
    </>
  )
}

