import { Metadata } from 'next'
import { generateMetadata as genMeta } from '@/lib/seo/metadata'
import { JsonLdScript } from '@/components/JsonLdScript'
import { generateArticleSchema, generateBreadcrumbListSchema, generateFAQPageSchema } from '@/lib/seo/jsonLd'
import Breadcrumbs from '@/components/Breadcrumbs'
import Link from 'next/link'

export const revalidate = 86400

export const metadata: Metadata = genMeta({
  title: 'Microphone Not Working, Quick Fix Guide',
  description: 'Fix a microphone that is not working in your browser or apps. Follow these quick checks to confirm device detection and permissions.',
  path: '/guides/microphone-not-working',
  keywords: [
    'microphone not working',
    'mic not working',
    'microphone not detected',
    'microphone fix',
    'mic troubleshooting'
  ]
})

const faqs = [
  {
    question: 'Why is my microphone not working?',
    answer: 'Microphone issues are usually caused by denied browser permissions, physical mute switches, wrong input device selection, or another application using the microphone. Check browser permissions first, then verify system settings.'
  },
  {
    question: 'How do I fix microphone not working in Chrome?',
    answer: 'Click the lock icon in Chrome\'s address bar, select Site Settings, then set Microphone to Allow. If that doesn\'t work, go to chrome://settings/content/microphone and ensure microphone access is enabled globally.'
  },
  {
    question: 'My microphone works in one app but not another. Why?',
    answer: 'Only one application can access your microphone at a time. Close other apps using the microphone, then try the app again. Also check if the app has its own microphone permission settings.'
  },
  {
    question: 'How do I test if my microphone is working?',
    answer: 'Use the online microphone test to check if your device is detected and working. The test shows real-time volume levels and allows you to record and play back audio to verify quality.'
  },
  {
    question: 'Microphone not working after Windows update?',
    answer: 'Windows updates can reset audio settings. Go to Settings → System → Sound → Input and verify your microphone is selected. Update audio drivers through Device Manager if the device still isn\'t detected.'
  }
]

export default function MicrophoneNotWorkingPage() {
  const articleSchema = generateArticleSchema(
    'Microphone Not Working, Quick Fix Guide',
    'Fix a microphone that is not working in your browser or apps. Follow these quick checks to confirm device detection and permissions.',
    '/guides/microphone-not-working',
    new Date().toISOString(),
    new Date().toISOString()
  )

  const breadcrumbs = generateBreadcrumbListSchema([
    { name: 'Home', path: '/' },
    { name: 'Guides', path: '/guides' },
    { name: 'Microphone Not Working', path: '/guides/microphone-not-working' }
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
            { name: 'Microphone Not Working', path: '/guides/microphone-not-working' }
          ]} />
          
          <article className="prose prose-slate max-w-none bg-white p-8 md:p-12 rounded-2xl border border-gray-200">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Microphone Not Working</h1>
            
            <p className="text-lg text-gray-700 mb-8">
              A microphone that stops working prevents calls and recordings. This page covers the most common causes and fixes. Start with browser permissions, then check system settings and hardware connections.
            </p>

            <p className="text-gray-700 mb-6">
              You can use the <Link href="/mic" className="text-blue-600 hover:text-blue-800">online microphone test</Link> to confirm whether your device is working.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Check Browser Permissions</h2>
            <p className="text-gray-700 mb-4">
              Browser permissions are the most common cause of microphone issues. Each browser handles permissions differently.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Click the lock or microphone icon in your browser's address bar</li>
              <li>Set microphone permission to "Allow"</li>
              <li>Refresh the page after changing permissions</li>
              <li>If no icon appears, check browser settings for site permissions</li>
            </ul>
            <p className="text-gray-700 mb-6">
              Use the <Link href="/mic" className="text-blue-600 hover:text-blue-800 font-semibold">online microphone test</Link> to verify permissions are working. If the test shows no activity, permissions are likely the issue.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Check Physical Mute Switch</h2>
            <p className="text-gray-700 mb-4">
              Many devices have physical mute buttons or switches that override software settings.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Check for a mute button on your headset or microphone</li>
              <li>Look for a mute switch on laptop keyboards (often Fn + F4 or similar)</li>
              <li>Verify USB microphones don't have inline mute controls</li>
              <li>Test the microphone after toggling any physical mute switches</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Verify Input Device Selection</h2>
            <p className="text-gray-700 mb-4">
              Your system may be using the wrong microphone. Check which input device is active.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Windows:</strong> Right-click the speaker icon → Open Sound Settings → Check the Input device dropdown</li>
              <li><strong>Mac:</strong> System Preferences → Sound → Input → Select the correct microphone</li>
              <li>Disconnect and reconnect USB microphones if they're not appearing</li>
              <li>Test each available input device to find the working one</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Close Other Applications</h2>
            <p className="text-gray-700 mb-4">
              Only one application can access your microphone at a time. Other apps may be blocking access.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Close Zoom, Teams, Skype, Discord, or other communication apps</li>
              <li>Check Task Manager (Windows) or Activity Monitor (Mac) for background processes</li>
              <li>Restart your browser after closing other applications</li>
              <li>Try the microphone test again</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Check System Volume Settings</h2>
            <p className="text-gray-700 mb-4">
              Microphone input volume may be muted or set too low in system settings. If volume is too low, see the guide on <Link href="/guides/microphone-too-quiet" className="text-blue-600 hover:text-blue-800">microphone too quiet</Link> for detailed steps to increase input levels.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Windows:</strong> Settings → System → Sound → Input → Ensure volume slider is up and not muted</li>
              <li><strong>Mac:</strong> System Preferences → Sound → Input → Adjust input volume slider</li>
              <li>Enable microphone boost if available (Windows Sound Settings)</li>
              <li>Test the microphone after adjusting volume</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Update Audio Drivers</h2>
            <p className="text-gray-700 mb-4">
              Outdated or corrupted audio drivers can prevent microphone detection. If your microphone isn't detected, check the guide for <Link href="/guides/microphone-not-detected-windows-11" className="text-blue-600 hover:text-blue-800">microphone not detected on Windows 11</Link> or <Link href="/guides/microphone-not-detected-windows-10" className="text-blue-600 hover:text-blue-800">Windows 10</Link> for platform-specific troubleshooting.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Windows:</strong> Device Manager → Sound, video and game controllers → Right-click audio device → Update driver</li>
              <li><strong>Mac:</strong> System Preferences → Software Update → Install any available updates</li>
              <li>Restart your computer after updating drivers</li>
              <li>Test the microphone again</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Test Hardware Connection</h2>
            <p className="text-gray-700 mb-4">
              Physical connection issues can prevent microphone detection.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Unplug and replug USB microphones</li>
              <li>Try a different USB port</li>
              <li>Test the microphone on another computer</li>
              <li>Check for visible damage to cables or connectors</li>
              <li>For wireless microphones, check battery level and reconnect</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Verify Microphone Works</h2>
            <p className="text-gray-700 mb-6">
              After trying these steps, use the <Link href="/mic" className="text-blue-600 hover:text-blue-800 font-semibold">online microphone test</Link> to confirm the device is working. The test shows real-time volume levels and allows you to record playback to verify audio quality.
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 my-8">
              <h3 className="font-semibold text-blue-900 mb-2">Related Guides</h3>
              <ul className="space-y-2 text-sm text-blue-800">
                <li><Link href="/guides/microphone-too-quiet" className="hover:text-blue-600 underline">Microphone Too Quiet</Link></li>
                <li><Link href="/guides/microphone-static-crackling" className="hover:text-blue-600 underline">Microphone Static or Crackling</Link></li>
                <li><Link href="/guides/how-to-enable-microphone-chrome" className="hover:text-blue-600 underline">How to Enable Microphone in Chrome</Link></li>
              </ul>
            </div>

            <p className="text-gray-700 mb-6 mt-8">
              You can use the <Link href="/mic" className="text-blue-600 hover:text-blue-800">online microphone test</Link> to confirm everything is working.
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
                <strong>Next step:</strong> Test your microphone to confirm it's working correctly.
              </p>
              <Link 
                href="/mic" 
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Run Microphone Test →
              </Link>
            </div>
          </article>
        </div>
      </div>
    </>
  )
}

