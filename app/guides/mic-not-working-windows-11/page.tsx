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
  title: 'Microphone Not Working on Windows 11 - Complete Fix Guide',
  description: 'Fix microphone not working on Windows 11. Step-by-step guide covering permissions, drivers, settings, and troubleshooting for all microphone issues.',
  path: '/guides/mic-not-working-windows-11',
  keywords: [
    'microphone not working windows 11',
    'mic not working windows 11',
    'windows 11 microphone fix',
    'microphone not detected windows 11',
    'windows 11 mic troubleshooting'
  ]
})

const faqs = [
  {
    question: 'Why is my microphone not working on Windows 11?',
    answer: 'Windows 11 microphone issues are usually caused by privacy settings blocking access, outdated drivers, incorrect input device selection, or another application using the microphone. Start by checking Privacy settings, then verify device selection and update drivers.'
  },
  {
    question: 'How do I enable microphone in Windows 11?',
    answer: 'Open Settings → Privacy & Security → Microphone. Ensure "Microphone access" is turned on and "Let desktop apps access your microphone" is enabled. Restart your computer after changing these settings.'
  },
  {
    question: 'My microphone works in one app but not another on Windows 11. Why?',
    answer: 'Only one application can access your microphone at a time. Close other apps using the microphone, then try the app again. Also check if the app has its own microphone permission settings in Windows 11 Privacy settings.'
  },
  {
    question: 'How do I update microphone drivers on Windows 11?',
    answer: 'Open Device Manager, expand "Audio inputs and outputs" or "Sound, video and game controllers", right-click your microphone, select "Update driver", then choose "Search automatically for drivers". Windows 11 will download and install the latest drivers.'
  },
  {
    question: 'Windows 11 microphone not working after update. How do I fix it?',
    answer: 'Windows updates can reset audio settings. Go to Settings → System → Sound → Input and verify your microphone is selected. Update audio drivers through Device Manager if the device still isn\'t detected. Restart your computer after updating.'
  },
  {
    question: 'How do I test if my microphone is working on Windows 11?',
    answer: 'Use the online microphone test to check if your device is detected and working. The test shows real-time volume levels and allows you to record and play back audio to verify quality. If the test works, your microphone hardware is fine.'
  },
  {
    question: 'My USB microphone is not detected on Windows 11. What should I do?',
    answer: 'Unplug and reconnect the USB microphone. Try a different USB port, preferably USB 3.0 or higher. Check Device Manager to see if the microphone appears. If it shows with a warning icon, right-click and select "Update driver". Restart your computer if needed.'
  }
]

export default function MicNotWorkingWindows11Page() {
  const articleSchema = generateArticleSchema(
    'Microphone Not Working on Windows 11 - Complete Fix Guide',
    'Fix microphone not working on Windows 11. Step-by-step guide covering permissions, drivers, settings, and troubleshooting for all microphone issues.',
    '/guides/mic-not-working-windows-11',
    new Date().toISOString(),
    new Date().toISOString()
  )

  const breadcrumbs = generateBreadcrumbListSchema([
    { name: 'Home', path: '/' },
    { name: 'Guides', path: '/guides' },
    { name: 'Microphone Not Working on Windows 11', path: '/guides/mic-not-working-windows-11' }
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
            { name: 'Microphone Not Working on Windows 11', path: '/guides/mic-not-working-windows-11' }
          ]} />
          
          <TOC contentId="article-content" />
          
          <article id="article-content" className="prose prose-slate max-w-none bg-white p-8 md:p-12 rounded-2xl border border-gray-200">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Microphone Not Working on Windows 11</h1>
            
            <p className="text-lg text-gray-700 mb-8">
              Windows 11 microphone problems prevent video calls, recordings, and voice commands. This guide covers all solutions for microphone issues on Windows 11, from privacy settings to driver updates.
            </p>

            <p className="text-gray-700 mb-6">
              You can use the <Link href="/mic" className="text-blue-600 hover:text-blue-800">online microphone test</Link> to confirm whether your device is working.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Quick Fix Summary</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Enable microphone access in Windows 11 Privacy settings</li>
              <li>Check that the correct microphone is selected in Sound settings</li>
              <li>Update audio drivers through Device Manager</li>
              <li>Close other applications using the microphone</li>
              <li>Unplug and reconnect USB microphones</li>
              <li>Restart your computer after changing settings</li>
              <li>Check browser permissions if using web apps</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Why This Happens</h2>
            <p className="text-gray-700 mb-4">
              Windows 11 includes strict privacy controls that can block microphone access. The operating system requires explicit permission for apps to use your microphone, and these settings can be reset after updates or changed accidentally.
            </p>
            <p className="text-gray-700 mb-4">
              Driver issues are another common cause. Windows 11 may not automatically install the correct drivers for your microphone, especially for USB devices or specialized audio equipment. Outdated drivers can cause detection problems or poor audio quality.
            </p>
            <p className="text-gray-700 mb-4">
              System conflicts occur when multiple applications try to access the microphone simultaneously. Windows 11 allows only one application to use the microphone at a time, so background apps or previous sessions can block access.
            </p>
            <p className="text-gray-700 mb-6">
              Hardware problems include loose USB connections, damaged cables, or microphone hardware failure. Physical issues are less common but should be checked if software solutions don't work.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Step-by-Step Fix Guide</h2>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Step 1: Enable Microphone Privacy Settings</h3>
            <p className="text-gray-700 mb-4">
              Windows 11 privacy settings control microphone access for all applications. These settings must be enabled before any app can use your microphone.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Press Windows key + I to open Settings</li>
              <li>Click "Privacy & Security" in the left sidebar</li>
              <li>Select "Microphone" from the privacy options</li>
              <li>Turn on "Microphone access" toggle switch</li>
              <li>Enable "Let desktop apps access your microphone" if you use desktop applications</li>
              <li>Scroll down and ensure your browser or application is listed and enabled</li>
            </ul>
            <p className="text-gray-700 mb-6">
              Restart your computer after changing these settings. Windows 11 requires a restart for privacy setting changes to take full effect.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Step 2: Verify Input Device Selection</h3>
            <p className="text-gray-700 mb-4">
              Windows 11 may be using the wrong microphone or no microphone at all. Verify the correct device is selected as the default input.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Open Settings → System → Sound</li>
              <li>Scroll to the "Input" section</li>
              <li>Check the "Choose your input device" dropdown</li>
              <li>Select your microphone from the list</li>
              <li>Speak into the microphone and watch the input level indicator</li>
              <li>If the indicator doesn't move, the microphone isn't working or isn't selected</li>
            </ul>
            <p className="text-gray-700 mb-4">
              Click "Test your microphone" button to hear playback. If you hear your voice clearly, the microphone hardware is working and the issue is likely permissions or application settings.
            </p>
            <p className="text-gray-700 mb-6">
              If your microphone doesn't appear in the list, it may not be detected. See Step 4 for driver troubleshooting.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Step 3: Check Microphone Volume and Mute Settings</h3>
            <p className="text-gray-700 mb-4">
              Microphone volume may be set too low or muted in Windows 11 sound settings. Check these settings even if the device is detected.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>In Settings → System → Sound → Input, find your selected microphone</li>
              <li>Ensure the volume slider is not at zero</li>
              <li>Check that the microphone is not muted (no mute icon visible)</li>
              <li>Click "Device properties" to access advanced settings</li>
              <li>In Device properties, check the "Levels" tab</li>
              <li>Ensure microphone volume is at least 50%</li>
              <li>Enable "Microphone boost" if available and needed</li>
            </ul>
            <p className="text-gray-700 mb-6">
              Test the microphone after each adjustment. Speak normally and watch the input level indicator respond. If levels are still too low, see the guide on <Link href="/guides/mic-too-quiet" className="text-blue-600 hover:text-blue-800">microphone too quiet</Link> for detailed volume troubleshooting.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Step 4: Update Audio Drivers</h3>
            <p className="text-gray-700 mb-4">
              Outdated or missing audio drivers prevent Windows 11 from detecting your microphone. Update drivers through Device Manager or Windows Update.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Press Windows key + X and select "Device Manager"</li>
              <li>Expand "Audio inputs and outputs" section</li>
              <li>Look for your microphone in the list</li>
              <li>If you see a yellow warning icon, the driver has a problem</li>
              <li>Right-click your microphone and select "Update driver"</li>
              <li>Choose "Search automatically for drivers"</li>
              <li>Wait for Windows 11 to find and install drivers</li>
            </ul>
            <p className="text-gray-700 mb-4">
              If your microphone doesn't appear under Audio inputs, check "Sound, video and game controllers" section. Some microphones are listed there instead.
            </p>
            <p className="text-gray-700 mb-4">
              If automatic search doesn't find drivers, visit your computer or microphone manufacturer's website. Download the latest Windows 11 drivers and install them manually.
            </p>
            <p className="text-gray-700 mb-6">
              Restart your computer after updating drivers. Windows 11 requires a restart for driver changes to take effect.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Step 5: Close Conflicting Applications</h3>
            <p className="text-gray-700 mb-4">
              Only one application can access your microphone at a time in Windows 11. Other apps may be blocking access without you realizing it.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Close Zoom, Teams, Skype, Discord, or other communication apps</li>
              <li>Check the system tray for background apps using the microphone</li>
              <li>Press Ctrl + Shift + Esc to open Task Manager</li>
              <li>Look for apps with microphone icons in the taskbar</li>
              <li>End any processes that might be using the microphone</li>
              <li>Restart your browser if using web-based applications</li>
            </ul>
            <p className="text-gray-700 mb-6">
              Try your microphone again after closing other applications. If it works now, one of those apps was blocking access.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Step 6: Check Physical Connections</h3>
            <p className="text-gray-700 mb-4">
              Loose or damaged connections prevent microphone detection. Verify all physical connections are secure.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Unplug USB microphones and firmly reconnect them</li>
              <li>Try a different USB port, preferably USB 3.0 or higher</li>
              <li>Check USB cables for visible damage</li>
              <li>For 3.5mm jack microphones, ensure the plug is fully inserted</li>
              <li>Test the microphone on another computer if possible</li>
              <li>Check for physical mute switches on the microphone or headset</li>
            </ul>
            <p className="text-gray-700 mb-6">
              If the microphone works on another computer, the issue is Windows 11 settings or drivers. If it doesn't work anywhere, the hardware may be faulty.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Step 7: Run Windows Troubleshooter</h3>
            <p className="text-gray-700 mb-4">
              Windows 11 includes a built-in troubleshooter that can automatically detect and fix common microphone problems.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Open Settings → System → Troubleshoot</li>
              <li>Click "Other troubleshooters"</li>
              <li>Find "Recording Audio" and click "Run"</li>
              <li>Follow the troubleshooter prompts</li>
              <li>Allow Windows to apply recommended fixes</li>
              <li>Restart your computer if prompted</li>
            </ul>
            <p className="text-gray-700 mb-6">
              The troubleshooter can reset audio settings, re-enable disabled devices, and fix driver conflicts automatically.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Browser and Application Specific Fixes</h2>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Chrome Browser</h3>
            <p className="text-gray-700 mb-4">
              Chrome requires both Windows 11 permissions and browser-specific permissions. See the guide on <Link href="/guides/how-to-enable-microphone-chrome" className="text-blue-600 hover:text-blue-800">how to enable microphone in Chrome</Link> for detailed browser settings.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Click the lock icon in Chrome's address bar</li>
              <li>Set Microphone to "Allow"</li>
              <li>Go to chrome://settings/content/microphone for global settings</li>
              <li>Ensure microphone access isn't blocked globally</li>
            </ul>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Microsoft Teams</h3>
            <p className="text-gray-700 mb-4">
              Teams has its own microphone settings that override Windows 11 settings in some cases.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Open Teams → Settings → Devices</li>
              <li>Select your microphone from the Audio Devices dropdown</li>
              <li>Test the microphone in Teams settings</li>
              <li>Adjust microphone volume slider if needed</li>
            </ul>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Zoom</h3>
            <p className="text-gray-700 mb-4">
              Zoom requires microphone access through both Windows 11 and its own settings. See the guide on <Link href="/guides/mic-test-for-zoom" className="text-blue-600 hover:text-blue-800">microphone test for Zoom</Link> for application-specific troubleshooting.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Open Zoom → Settings → Audio</li>
              <li>Select your microphone from the Microphone dropdown</li>
              <li>Test microphone in Zoom settings</li>
              <li>Ensure "Automatically adjust microphone volume" is enabled if needed</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How to Prevent the Problem in Future</h2>
            <p className="text-gray-700 mb-4">
              Keep Windows 11 updated. Microsoft releases audio driver updates through Windows Update that can fix microphone issues.
            </p>
            <p className="text-gray-700 mb-4">
              Don't disable microphone access in Privacy settings unless necessary. Windows 11 remembers your choice and may block access to new applications.
            </p>
            <p className="text-gray-700 mb-4">
              Close applications properly instead of just minimizing them. Background apps can hold microphone access and prevent other applications from using it.
            </p>
            <p className="text-gray-700 mb-4">
              Regularly update audio drivers through Device Manager or Windows Update. Outdated drivers cause more problems after major Windows 11 updates.
            </p>
            <p className="text-gray-700 mb-6">
              Use the same USB port for USB microphones when possible. Windows 11 can treat different USB ports as different devices, causing confusion.
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
              { title: 'Microphone Not Detected on Windows 11', href: '/guides/microphone-not-detected-windows-11' },
              { title: 'Microphone Too Quiet', href: '/guides/mic-too-quiet' },
              { title: 'Microphone Static or Crackling', href: '/guides/mic-static-or-crackling' }
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

