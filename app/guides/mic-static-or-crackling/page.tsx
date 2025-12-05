import { Metadata } from 'next'
import { generateMetadata as genMeta } from '@/lib/seo/metadata'
import JsonLdScript from '@/components/JsonLdScript'
import { generateArticleSchema, generateBreadcrumbListSchema, generateFAQPageSchema } from '@/lib/seo/jsonLd'
import Breadcrumbs from '@/components/Breadcrumbs'
import TOC from '@/components/TOC'
import RelatedGuides from '@/components/RelatedGuides'
import HelpfulWidget from '@/components/HelpfulWidget'
import DeviceNavigation from '@/components/DeviceNavigation'
import StickyActionBar from '@/components/StickyActionBar'
import Link from 'next/link'

export const revalidate = 86400

export const metadata: Metadata = genMeta({
  title: 'Microphone Static or Crackling - How to Fix Audio Distortion',
  description: 'Fix microphone static, crackling, and distortion. Troubleshoot USB connections, reduce interference, adjust gain settings, and eliminate audio problems.',
  path: '/guides/mic-static-or-crackling',
  keywords: [
    'microphone static',
    'mic crackling',
    'microphone distortion',
    'audio static',
    'mic audio problems',
    'microphone interference'
  ]
})

const faqs = [
  {
    question: 'Why is my microphone making static or crackling sounds?',
    answer: 'Microphone static and crackling are usually caused by loose USB connections, electrical interference, gain set too high, damaged cables, or driver issues. Check USB connections first, then reduce interference and adjust gain settings.'
  },
  {
    question: 'How do I fix microphone static in Windows?',
    answer: 'Check USB connections and try a different port. Reduce microphone boost in Sound settings. Move the microphone away from electrical devices. Update audio drivers through Device Manager. Test with a different USB cable if available.'
  },
  {
    question: 'How do I fix microphone crackling on Mac?',
    answer: 'Unplug and reconnect USB microphones. Try a different USB port. Reduce input volume if it\'s set too high. Move away from electrical interference sources. Update macOS to ensure you have the latest audio drivers.'
  },
  {
    question: 'Can USB ports cause microphone static?',
    answer: 'Yes. USB 2.0 ports or damaged USB ports can cause static and crackling. Use USB 3.0 or higher ports when possible. Avoid USB hubs and connect directly to the computer. Try different USB ports to find one that works better.'
  },
  {
    question: 'Does microphone boost cause crackling?',
    answer: 'Yes. Microphone boost set too high can cause distortion and crackling. Reduce boost levels in device properties. Start with lower boost and increase gradually until you find the balance between volume and quality.'
  },
  {
    question: 'How do I test if my microphone static is fixed?',
    answer: 'Use the online microphone test to check audio quality. Record a test clip and play it back to hear if static or crackling is present. The test shows real-time levels that can indicate distortion problems.'
  },
  {
    question: 'Can electrical interference cause microphone static?',
    answer: 'Yes. Electrical devices like monitors, speakers, power supplies, and fluorescent lights can cause interference. Move the microphone away from these devices. Keep USB cables away from power cables. Turn off nearby electrical devices to test.'
  }
]

export default function MicStaticOrCracklingPage() {
  const articleSchema = generateArticleSchema(
    'Microphone Static or Crackling - How to Fix Audio Distortion',
    'Fix microphone static, crackling, and distortion. Troubleshoot USB connections, reduce interference, adjust gain settings, and eliminate audio problems.',
    '/guides/mic-static-or-crackling',
    new Date().toISOString(),
    new Date().toISOString()
  )

  const breadcrumbs = generateBreadcrumbListSchema([
    { name: 'Home', path: '/' },
    { name: 'Guides', path: '/guides' },
    { name: 'Microphone Static or Crackling', path: '/guides/mic-static-or-crackling' }
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
            { name: 'Microphone Static or Crackling', path: '/guides/mic-static-or-crackling' }
          ]} />
          
          <TOC contentId="article-content" />
          
          <article id="article-content" className="prose prose-slate max-w-none bg-white p-8 md:p-12 rounded-2xl border border-gray-200">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Microphone Static or Crackling</h1>
            
            <p className="text-lg text-gray-700 mb-8">
              Static or crackling in microphone audio makes your voice hard to understand. This guide covers all causes and solutions for microphone distortion, from USB connection issues to electrical interference.
            </p>

            <p className="text-gray-700 mb-6">
              You can use the <Link href="/mic" className="text-blue-600 hover:text-blue-800">online microphone test</Link> to confirm whether your device is working.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Quick Fix Summary</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Unplug and firmly reconnect USB microphones</li>
              <li>Try a different USB port, preferably USB 3.0 or higher</li>
              <li>Reduce microphone boost if it's set too high</li>
              <li>Move microphone away from electrical devices</li>
              <li>Check USB cables for damage</li>
              <li>Update audio drivers</li>
              <li>Avoid USB hubs, connect directly to computer</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Why This Happens</h2>
            <p className="text-gray-700 mb-4">
              Loose or damaged USB connections cause electrical noise that appears as static or crackling. USB ports can wear out over time, and damaged cables introduce interference into the signal path.
            </p>
            <p className="text-gray-700 mb-4">
              Electrical interference from nearby devices creates static. Monitors, speakers, power supplies, and fluorescent lights generate electromagnetic fields that can interfere with microphone signals, especially in USB cables.
            </p>
            <p className="text-gray-700 mb-4">
              Gain or boost set too high causes distortion and crackling. When the input signal is amplified beyond the microphone's capabilities, it creates clipping and distortion that sounds like static.
            </p>
            <p className="text-gray-700 mb-6">
              Driver problems can cause audio artifacts. Outdated or corrupted audio drivers may not process the microphone signal correctly, resulting in static or crackling sounds.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Step-by-Step Fix Guide</h2>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Step 1: Check USB Connections</h3>
            <p className="text-gray-700 mb-4">
              Loose or damaged USB connections are the most common cause of static and crackling. Verify all connections are secure.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Unplug USB microphones completely</li>
              <li>Inspect USB connectors for visible damage or bent pins</li>
              <li>Firmly reconnect the microphone</li>
              <li>Try a different USB port, preferably USB 3.0 or higher</li>
              <li>Test with a different USB cable if available</li>
              <li>Avoid USB hubs, connect directly to the computer</li>
            </ul>
            <p className="text-gray-700 mb-6">
              USB 2.0 ports can cause issues with high-quality microphones. USB 3.0 ports provide better power delivery and data transfer, reducing static problems.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Step 2: Reduce Electrical Interference</h3>
            <p className="text-gray-700 mb-4">
              Electrical devices generate interference that creates static in microphone audio. Identify and eliminate interference sources.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Move the microphone away from monitors, speakers, and power supplies</li>
              <li>Keep USB cables away from power cables</li>
              <li>Turn off nearby fluorescent lights or LED strips</li>
              <li>Unplug other USB devices to test for interference</li>
              <li>Use shorter USB cables when possible</li>
              <li>Test in a different room to rule out environmental interference</li>
            </ul>
            <p className="text-gray-700 mb-4">
              Power supplies and chargers are common interference sources. Keep them at least 3 feet away from your microphone setup.
            </p>
            <p className="text-gray-700 mb-6">
              Test the microphone after each change to identify which device is causing interference.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Step 3: Adjust Gain and Boost Settings</h3>
            <p className="text-gray-700 mb-4">
              Gain or boost set too high causes distortion and crackling. Lower these settings to eliminate static.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Windows:</strong> Settings → System → Sound → Input → Device properties → Levels tab. Reduce the "Microphone boost" slider. Start by reducing it by 10 dB and test. If static persists, reduce further.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Mac:</strong> System Preferences → Sound → Input. Reduce the input volume slider if it's set too high. Some USB microphones have Mac-specific control software with gain adjustments.
            </p>
            <p className="text-gray-700 mb-4">
              Find the balance between volume and quality. Lower boost reduces static but may make the microphone quieter. If you need more volume after reducing boost, see the guide on <Link href="/guides/mic-too-quiet" className="text-blue-600 hover:text-blue-800">microphone too quiet</Link> for alternative solutions.
            </p>
            <p className="text-gray-700 mb-6">
              Test the microphone after each adjustment. Use the online microphone test to record and play back audio to hear if static is eliminated.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Step 4: Update Audio Drivers</h3>
            <p className="text-gray-700 mb-4">
              Outdated or corrupted audio drivers can cause static and crackling. Update drivers to ensure proper signal processing.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Windows:</strong> Device Manager → Sound, video and game controllers → Right-click audio device → Update driver → Search automatically for drivers. Restart your computer after updating.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Mac:</strong> System Preferences → Software Update → Install any available updates. macOS updates include audio driver improvements.
            </p>
            <p className="text-gray-700 mb-6">
              If automatic updates don't work, visit your computer or microphone manufacturer's website. Download the latest drivers for your specific model and operating system.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Step 5: Check USB Cable Quality</h3>
            <p className="text-gray-700 mb-4">
              Damaged or low-quality USB cables introduce static and crackling. Test with a different cable to rule out cable problems.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Inspect USB cable for visible damage or kinks</li>
              <li>Test with a different USB cable if available</li>
              <li>Use shorter cables when possible</li>
              <li>Ensure cable is rated for USB 3.0 or higher if using USB 3.0 ports</li>
              <li>Check cable connections at both ends</li>
            </ul>
            <p className="text-gray-700 mb-6">
              Professional USB cables with better shielding reduce interference. If static persists with a new cable, the issue is likely the microphone or USB port.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Step 6: Test Microphone on Another Computer</h3>
            <p className="text-gray-700 mb-4">
              Testing the microphone on another computer helps isolate whether the problem is hardware or software related.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Connect the microphone to another computer</li>
              <li>Test audio quality on the second computer</li>
              <li>If static persists, the microphone hardware may be faulty</li>
              <li>If static disappears, the issue is with your original computer's settings or hardware</li>
            </ul>
            <p className="text-gray-700 mb-6">
              This test helps determine if you need to replace the microphone or continue troubleshooting your computer setup.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Browser and OS Specific Fixes</h2>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Windows 10 and Windows 11</h3>
            <p className="text-gray-700 mb-4">
              Windows audio processing can introduce static if settings are incorrect.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Disable audio enhancements: Device properties → Enhancements tab → Disable all sound effects</li>
              <li>Set audio format to highest quality: Device properties → Advanced tab → Select highest sample rate</li>
              <li>Disable exclusive mode: Device properties → Advanced tab → Uncheck "Allow applications to take exclusive control"</li>
            </ul>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">macOS</h3>
            <p className="text-gray-700 mb-4">
              Mac audio settings are simpler but may have fewer troubleshooting options.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>System Preferences → Sound → Input → Reduce input volume</li>
              <li>Disable "Use ambient noise reduction" if available</li>
              <li>Update macOS to latest version for driver improvements</li>
            </ul>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Chrome and Other Browsers</h3>
            <p className="text-gray-700 mb-4">
              Browsers use system audio settings but may have additional processing that causes static.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Browsers respect system microphone settings</li>
              <li>Some web applications have noise reduction that can cause artifacts</li>
              <li>Test in different browsers to see if static is browser-specific</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How to Prevent the Problem in Future</h2>
            <p className="text-gray-700 mb-4">
              Use high-quality USB cables with good shielding. Professional cables reduce interference and last longer.
            </p>
            <p className="text-gray-700 mb-4">
              Keep microphone setup away from electrical devices. Establish a permanent position that minimizes interference sources.
            </p>
            <p className="text-gray-700 mb-4">
              Don't set microphone boost too high. Find the minimum boost level that provides adequate volume to avoid distortion.
            </p>
            <p className="text-gray-700 mb-4">
              Use the same USB port consistently. Windows can treat different ports as different devices, causing confusion.
            </p>
            <p className="text-gray-700 mb-6">
              Test your microphone regularly using the online microphone test. Catching static issues early prevents problems during important calls.
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
              { title: 'Microphone Not Working', href: '/guides/microphone-not-working' },
              { title: 'Microphone Too Quiet', href: '/guides/mic-too-quiet' },
              { title: 'Microphone Test for Zoom', href: '/guides/mic-test-for-zoom' }
            ]} />

            <p className="text-gray-700 mb-6 mt-8">
              Use the <Link href="/mic" className="text-blue-600 hover:text-blue-800">online microphone test</Link> to confirm everything is working.
            </p>
          </article>

          <HelpfulWidget />
          <DeviceNavigation />
        </div>
      </div>
      <StickyActionBar toolName="Microphone Test" toolHref="/mic" />
    </>
  )
}

