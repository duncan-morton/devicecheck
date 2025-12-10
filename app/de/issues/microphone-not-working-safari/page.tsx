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
  title: 'Microphone Not Working in Safari - Complete Fix Guide',
  description: 'Fix microphone not working in safari. Step-by-step troubleshooting guide covering Safari settings, permissions, drivers, and solutions for microphone not detected or not working in safari browser.',
  path: '/issues/microphone-not-working-safari',
  keywords: ["microphone not working safari","safari mic fix","safari microphone permission","mic not working safari mac","safari microphone not detected"]
})

const faqs = [
  {
    "question": "Why is microphone not working in safari?",
    "answer": "Microphone not detected or not working in Safari browser. This usually happens due to permission settings, driver issues, or conflicts with other applications. Start by checking system permissions and ensuring the correct device is selected."
  },
  {
    "question": "How do I fix microphone not working in safari?",
    "answer": "First, check Safari permissions and settings. Verify the correct microphone is selected. Update drivers if needed. Use the microphone test to verify the device is working correctly. Follow the step-by-step guide above for detailed instructions."
  },
  {
    "question": "How do I test if my microphone is working?",
    "answer": "Use the online microphone test to check if your device is detected and working. The test provides real-time feedback and helps identify any remaining issues."
  },
  {
    "question": "What causes microphone not working in safari?",
    "answer": "Common causes include privacy settings blocking access, outdated drivers, incorrect device selection, or another application using the microphone. Check permissions first, then verify device selection and update drivers."
  },
  {
    "question": "Can I fix microphone not working in safari without technical knowledge?",
    "answer": "Yes. Most microphone issues can be fixed by checking permissions in Safari settings and ensuring the correct device is selected. Follow the step-by-step guide above for detailed instructions."
  },
  {
    "question": "How do I enable microphone in Safari?",
    "answer": "Open Safari → Preferences → Websites → Microphone. Select \"Ask\" or \"Allow\" for the website. Also check System Preferences → Security & Privacy → Privacy → Microphone to ensure Safari is enabled."
  }
]

export default function IssuePage() {
  const articleSchema = generateArticleSchema(
    'Microphone Not Working in Safari - Complete Fix Guide',
    'Fix microphone not working in safari. Step-by-step troubleshooting guide.',
    '/issues/microphone-not-working-safari',
    new Date().toISOString(),
    new Date().toISOString()
  )

  const breadcrumbs = generateBreadcrumbListSchema([
    { name: 'Home', path: '/' },
    { name: 'Issues', path: '/issues' },
    { name: 'Microphone Not Working in Safari', path: '/issues/microphone-not-working-safari' }
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
            { name: 'Issues', path: '/issues' },
            { name: 'Microphone Not Working in Safari', path: '/issues/microphone-not-working-safari' }
          ]} />
          
          <TOC contentId="article-content" />
          
          <article id="article-content" className="prose prose-slate max-w-none bg-white p-8 md:p-12 rounded-2xl border border-gray-200">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Microphone Not Working in Safari</h1>
            
            <p className="text-lg text-gray-700 mb-4">
              Microphone not detected or not working in Safari browser on Safari prevents normal use of your microphone. This guide covers all solutions for microphone not working in safari, from permissions to driver updates.
            </p>
            
            <p className="text-gray-700 mb-8">
              You can use the <Link href="/mic" className="text-blue-600 hover:text-blue-800">online microphone test</Link> to confirm whether your device is working.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Quick Fix Summary</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Enable microphone in Safari preferences</li>
              <li>Check macOS Privacy settings</li>
              <li>Verify microphone permissions</li>
              <li>Reset Safari permissions</li>
              <li>Update Safari to latest version</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Why This Happens</h2>
            <p className="text-gray-700 mb-4">
              Safari includes strict privacy controls that can block microphone access. The system requires explicit permission for applications to use your microphone, and these settings can be reset after updates or changed accidentally.
            </p>
            <p className="text-gray-700 mb-4">
              Driver issues are another common cause. Safari may not automatically install the correct drivers for your microphone, especially for USB devices or specialized equipment. Outdated drivers can cause detection problems or poor performance.
            </p>
            <p className="text-gray-700 mb-4">
              System conflicts occur when multiple applications try to access the microphone simultaneously. Safari allows only one application to use the microphone at a time, so background apps or previous sessions can block access.
            </p>
            <p className="text-gray-700 mb-6">
              Hardware problems include loose connections, damaged cables, or microphone hardware failure. Physical issues are less common but should be checked if software solutions don't work.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Step-by-Step Fix Guide</h2>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Step 1: Check Permissions and Settings</h3>
            <p className="text-gray-700 mb-4">
              Safari requires explicit permission for microphone access. Verify permissions are enabled in system settings.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Open Safari settings or preferences</li>
              <li>Navigate to Privacy or Security settings</li>
              <li>Find Microphone permissions</li>
              <li>Ensure access is enabled</li>
              <li>Check that your application is listed and allowed</li>
              <li>Restart your computer if needed</li>
            </ul>
            <p className="text-gray-700 mb-6">
              Open Safari → Preferences → Websites → Microphone. Select "Ask" or "Allow" for the website. On macOS, also check System Preferences → Security & Privacy → Privacy → Microphone. Ensure Safari is listed and enabled.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Step 2: Verify Device Selection</h3>
            <p className="text-gray-700 mb-4">
              Safari may be using the wrong microphone or no device at all. Verify the correct device is selected.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Open system sound or camera settings</li>
              <li>Check the list of available devices</li>
              <li>Select the correct microphone</li>
              <li>Test the device to confirm it works</li>
              <li>Set it as the default if available</li>
            </ul>
            <p className="text-gray-700 mb-6">
              If your microphone doesn't appear in the list, it may not be detected. See Step 3 for driver troubleshooting.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Step 3: Update Drivers</h3>
            <p className="text-gray-700 mb-4">
              Outdated or missing drivers prevent microphone detection. Update drivers through system settings or Device Manager.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Open Device Manager or system settings</li>
              <li>Find Audio inputs section</li>
              <li>Right-click your device and select Update driver</li>
              <li>Choose automatic driver search</li>
              <li>Wait for the system to find and install drivers</li>
              <li>Restart your computer after updating</li>
            </ul>
            <p className="text-gray-700 mb-4">
              If your microphone doesn't appear in Device Manager, check other sections like "Sound, video and game controllers" or "Universal Serial Bus controllers" for USB devices.
            </p>
            <p className="text-gray-700 mb-6">
              If automatic search doesn't find drivers, visit your computer or microphone manufacturer's website. Download the latest drivers for Safari and install them manually.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Step 4: Close Conflicting Applications</h3>
            <p className="text-gray-700 mb-4">
              Only one application can access your microphone at a time. Other apps may be blocking access.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Close other applications using the microphone</li>
              <li>Check system tray for background apps</li>
              <li>End processes in Task Manager if needed</li>
              <li>Restart your browser if using web applications</li>
              <li>Check for browser extensions that might block access</li>
            </ul>
            <p className="text-gray-700 mb-6">
              Some applications don't release microphone access when closed. Restart your computer to clear all microphone locks if needed.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Step 5: Check Physical Connections</h3>
            <p className="text-gray-700 mb-4">
              Loose or damaged connections prevent device detection. Verify all physical connections are secure.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Unplug USB devices and firmly reconnect them</li>
              <li>Try a different USB port if available</li>
              <li>Check cables for visible damage</li>
              <li>Test the device on another computer if possible</li>
              <li>Check for physical mute switches if applicable</li>
            </ul>
            <p className="text-gray-700 mb-6">
              If the microphone works on another computer, the issue is software-related. If it doesn't work anywhere, the microphone may be faulty.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Platform-Specific Fixes</h2>
            
            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Safari</h3>
            <p className="text-gray-700 mb-4">
              Safari has specific settings for microphone access. Follow these detailed steps for Safari.
            </p>
            <p className="text-gray-700 mb-4">
              Open Safari → Preferences → Websites → Microphone. Select "Ask" or "Allow" for the website. On macOS, also check System Preferences → Security & Privacy → Privacy → Microphone. Ensure Safari is listed and enabled.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Verify settings are saved correctly</li>
              <li>Restart the application after changing settings</li>
              <li>Test the microphone to confirm it works</li>
              <li>Check for Safari updates</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Advanced Troubleshooting</h2>
            <p className="text-gray-700 mb-4">
              If basic fixes don't work, try these advanced troubleshooting steps.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Run system troubleshooter for microphone issues</li>
              <li>Reset microphone settings to defaults</li>
              <li>Check for system updates</li>
              <li>Reinstall microphone drivers</li>
              <li>Test in safe mode if available</li>
              <li>Check system logs for error messages</li>
            </ul>
            <p className="text-gray-700 mb-6">
              If none of these steps work, the issue may be hardware-related. Test your microphone on another computer to confirm. Contact the manufacturer if the device is under warranty.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Prevention Tips</h2>
            <p className="text-gray-700 mb-4">
              Keep Safari updated. System updates often include driver updates that can fix microphone issues.
            </p>
            <p className="text-gray-700 mb-4">
              Don't disable microphone access in privacy settings unless necessary. Safari remembers your choice and may block access to new applications.
            </p>
            <p className="text-gray-700 mb-4">
              Close applications properly instead of just minimizing them. Background apps can hold microphone access and prevent other applications from using it.
            </p>
            <p className="text-gray-700 mb-6">
              Regularly update drivers through system settings or Device Manager. Outdated drivers cause more problems after major system updates.
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
          {
                    "title": "Microphone Not Working in Chrome",
                    "href": "/issues/microphone-not-working-chrome"
          },
          {
                    "title": "Microphone Not Working on Discord Mobile",
                    "href": "/issues/mic-not-working-discord-mobile"
          },
          {
                    "title": "Microphone Not Working in Zoom",
                    "href": "/issues/microphone-not-working-zoom"
          }
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
