import { Metadata } from 'next'
import { generateMetadata as genMeta } from '@/lib/seo/metadata'
import JsonLdScript from '@/components/JsonLdScript'
import { generateArticleSchema, generateBreadcrumbListSchema, generateFAQPageSchema, generateHowToSchema } from '@/lib/seo/jsonLd'
import Breadcrumbs from '@/components/Breadcrumbs'
import TOCAccordion from '@/components/TOCAccordion'
import RelatedGuides from '@/components/RelatedGuides'
import HelpfulWidget from '@/components/HelpfulWidget'
import QuickAnswerBox from '@/components/QuickAnswerBox'
import StepsBlock from '@/components/StepsBlock'
import IssueDiagnostic from '@/components/IssueDiagnostic'
import IssueLinksPanel from '@/components/IssueLinksPanel'
import Link from 'next/link'
import issuesData from '@/data/issues.json'

export const revalidate = 86400

const baseUrl = 'https://devicecheck.io'
const issuePath = '/issues/screen-dead-pixels-mac'
const alternates = {
  canonical: baseUrl + issuePath,
  languages: { en: baseUrl + issuePath, de: baseUrl + '/de' + issuePath, es: baseUrl + '/es' + issuePath, fr: baseUrl + '/fr' + issuePath, pt: baseUrl + '/pt' + issuePath, hi: baseUrl + '/hi' + issuePath, 'x-default': baseUrl + issuePath },
}
export const metadata: Metadata = { ...genMeta({
  title: 'Screen Dead Pixels on Mac - Complete Fix Guide',
  description: 'Fix screen dead pixels on mac. Step-by-step troubleshooting guide covering macOS settings, permissions, drivers, and solutions for dead or stuck pixels on mac display.',
  path: issuePath,
  keywords: ["screen dead pixels mac","mac dead pixel fix","macbook dead pixels","mac display dead pixels","mac screen pixel issues"]
}), alternates }

const faqs = [
  {
    "question": "Why is screen dead pixels on mac?",
    "answer": "Dead or stuck pixels on Mac display. This usually happens due to permission settings, driver issues, or conflicts with other applications. Start by checking system permissions and ensuring the correct device is selected."
  },
  {
    "question": "How do I fix screen dead pixels on mac?",
    "answer": "First, check macOS permissions and settings. Verify the correct screen is selected. Update drivers if needed. Use the screen test to verify the device is working correctly. Follow the step-by-step guide above for detailed instructions."
  },
  {
    "question": "How do I test if my screen is working?",
    "answer": "Use the online screen test to check if your device is detected and working. The test provides real-time feedback and helps identify any remaining issues."
  },
  {
    "question": "What causes screen dead pixels on mac?",
    "answer": "Common causes include privacy settings blocking access, outdated drivers, incorrect device selection, or another application using the screen. Check permissions first, then verify device selection and update drivers."
  },
  {
    "question": "Can I fix screen dead pixels on mac without technical knowledge?",
    "answer": "Yes. Most screen issues can be fixed by checking permissions in macOS settings and ensuring the correct device is selected. Follow the step-by-step guide above for detailed instructions."
  },
  {
    "question": "How do I enable camera on Mac?",
    "answer": "Open System Preferences → Security & Privacy → Privacy → Camera. Check the box next to the applications that need access. You may need to restart applications after granting permission."
  }
]

export default function IssuePage() {
  const articleSchema = generateArticleSchema(
    'Screen Dead Pixels on Mac - Complete Fix Guide',
    'Fix screen dead pixels on mac. Step-by-step troubleshooting guide.',
    '/issues/screen-dead-pixels-mac',
    new Date().toISOString(),
    new Date().toISOString()
  )

  const breadcrumbItems = [{"name":"Home","path":"/"},{"name":"Issues","path":"/issues"},{"name":"Mac device issues","path":"/hubs/mac-device-issues"},{"name":"Screen Dead Pixels on Mac","path":"/issues/screen-dead-pixels-mac"}]
  const breadcrumbs = generateBreadcrumbListSchema(breadcrumbItems)

  const faqSchema = generateFAQPageSchema(faqs)
  const howToSchema = generateHowToSchema({
    url: 'https://devicecheck.io/issues/screen-dead-pixels-mac',
    name: 'Screen Dead Pixels on Mac',
    description: 'Fix screen dead pixels on mac with clear steps for macOS covering permissions, device selection, and drivers.',
    steps: [{"title":"Check display settings in","description":"Check display settings in System Preferences"},{"title":"Update macOS to latest","description":"Update macOS to latest version"},{"title":"Reset display settings","description":"Reset display settings"},{"title":"Check for physical damage","description":"Check for physical damage"},{"title":"Test with another display","description":"Test with another display"}]
  })

  const steps = [{"title":"Check display settings in","description":"Check display settings in System Preferences"},{"title":"Update macOS to latest","description":"Update macOS to latest version"},{"title":"Reset display settings","description":"Reset display settings"},{"title":"Check for physical damage","description":"Check for physical damage"},{"title":"Test with another display","description":"Test with another display"}]

  return (
    <>
      <JsonLdScript data={articleSchema} />
      <JsonLdScript data={breadcrumbs} />
      <JsonLdScript data={faqSchema} />
      <JsonLdScript data={howToSchema} />
      
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8 max-w-6xl">
          <Breadcrumbs items={[
            { name: 'Issues', path: '/issues' },
            { name: 'Screen Dead Pixels on Mac', path: '/issues/screen-dead-pixels-mac' }
          ]} />
          
          <div className="mb-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Screen Dead Pixels on Mac</h1>
            <p className="text-xl text-gray-600 max-w-3xl">
              Dead or stuck pixels on Mac display on macOS. This guide covers all solutions, from permissions to driver updates.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 mb-6">
            <Link
              href="/screen"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Run the Screen Test →
            </Link>
            <Link
              href="/meeting-check"
              className="inline-flex items-center px-6 py-3 bg-gray-100 text-gray-800 rounded-lg font-medium border border-gray-200 hover:bg-gray-200 transition-colors"
            >
              Run full meeting check
            </Link>
            <p className="text-sm text-gray-500 w-full mt-1">Runs locally in your browser.</p>
          </div>

          <IssueDiagnostic device="screen" mode="defer" />

          <IssueLinksPanel issue={{ slug: "screen-dead-pixels-mac", deviceType: "screen", platform: "macOS", title: "Screen Dead Pixels on Mac" }} allIssues={issuesData} />

          <div className="text-gray-600">
            <StepsBlock steps={steps} />
          </div>

          <article id="article-content" className="prose prose-slate max-w-none bg-white p-8 md:p-12 rounded-2xl border border-gray-200 mt-8">
            <QuickAnswerBox 
              problem="Dead or stuck pixels on Mac display"
              platform="macOS"
              deviceType="screen"
            />

            <TOCAccordion contentId="article-content" summaryText="On this page" />

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Quick Fix Summary</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Check display settings in System Preferences</li>
              <li>Update macOS to latest version</li>
              <li>Reset display settings</li>
              <li>Check for physical damage</li>
              <li>Test with another display</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Why This Happens</h2>
            <p className="text-gray-700 mb-4">
              macOS includes strict privacy controls that can block screen access. The system requires explicit permission for applications to use your screen, and these settings can be reset after updates or changed accidentally.
            </p>
            <p className="text-gray-700 mb-4">
              Driver issues are another common cause. macOS may not automatically install the correct drivers for your screen, especially for USB devices or specialized equipment. Outdated drivers can cause detection problems or poor performance.
            </p>
            <p className="text-gray-700 mb-4">
              System conflicts occur when multiple applications try to access the screen simultaneously. macOS allows only one application to use the screen at a time, so background apps or previous sessions can block access.
            </p>
            <p className="text-gray-700 mb-6">
              Hardware problems include loose connections, damaged cables, or screen hardware failure. Physical issues are less common but should be checked if software solutions don't work.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Step-by-Step Fix Guide</h2>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Step 1: Check Permissions and Settings</h3>
            <p className="text-gray-700 mb-4">
              macOS requires explicit permission for screen access. Verify permissions are enabled in system settings.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Open macOS settings or preferences</li>
              <li>Navigate to Privacy or Security settings</li>
              <li>Find Screen permissions</li>
              <li>Ensure access is enabled</li>
              <li>Check that your application is listed and allowed</li>
              <li>Restart your computer if needed</li>
            </ul>
            <p className="text-gray-700 mb-6">
              Open System Preferences → Displays. Check resolution and color profile. Update macOS to latest version. Reset display settings if needed. Check for physical damage or loose connections.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Step 2: Verify Device Selection</h3>
            <p className="text-gray-700 mb-4">
              macOS may be using the wrong screen or no device at all. Verify the correct device is selected.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Open system sound or camera settings</li>
              <li>Check the list of available devices</li>
              <li>Select the correct screen</li>
              <li>Test the device to confirm it works</li>
              <li>Set it as the default if available</li>
            </ul>
            <p className="text-gray-700 mb-6">
              If your screen doesn't appear in the list, it may not be detected. See Step 3 for driver troubleshooting.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Step 3: Update Drivers</h3>
            <p className="text-gray-700 mb-4">
              Outdated or missing drivers prevent screen detection. Update drivers through system settings or Device Manager.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Open Device Manager or system settings</li>
              <li>Find screen section</li>
              <li>Right-click your device and select Update driver</li>
              <li>Choose automatic driver search</li>
              <li>Wait for the system to find and install drivers</li>
              <li>Restart your computer after updating</li>
            </ul>
            <p className="text-gray-700 mb-4">
              If your screen doesn't appear in Device Manager, check other sections like "Sound, video and game controllers" or "Universal Serial Bus controllers" for USB devices.
            </p>
            <p className="text-gray-700 mb-6">
              If automatic search doesn't find drivers, visit your computer or screen manufacturer's website. Download the latest drivers for macOS and install them manually.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Step 4: Close Conflicting Applications</h3>
            <p className="text-gray-700 mb-4">
              Only one application can access your screen at a time. Other apps may be blocking access.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Close other applications using the screen</li>
              <li>Check system tray for background apps</li>
              <li>End processes in Task Manager if needed</li>
              <li>Restart your browser if using web applications</li>
              <li>Check for browser extensions that might block access</li>
            </ul>
            <p className="text-gray-700 mb-6">
              Some applications don't release screen access when closed. Restart your computer to clear all screen locks if needed.
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
              If the screen works on another computer, the issue is software-related. If it doesn't work anywhere, the screen may be faulty.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Platform-Specific Fixes</h2>
            
            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">macOS</h3>
            <p className="text-gray-700 mb-4">
              macOS has specific settings for screen access. Follow these detailed steps for macOS.
            </p>
            <p className="text-gray-700 mb-4">
              Open System Preferences → Displays. Check resolution and color profile. Update macOS to latest version. Reset display settings if needed. Check for physical damage or loose connections.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Verify settings are saved correctly</li>
              <li>Restart the application after changing settings</li>
              <li>Test the screen to confirm it works</li>
              <li>Check for macOS updates</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Advanced Troubleshooting</h2>
            <p className="text-gray-700 mb-4">
              If basic fixes don't work, try these advanced troubleshooting steps.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Run system troubleshooter for screen issues</li>
              <li>Reset screen settings to defaults</li>
              <li>Check for system updates</li>
              <li>Reinstall screen drivers</li>
              <li>Test in safe mode if available</li>
              <li>Check system logs for error messages</li>
            </ul>
            <p className="text-gray-700 mb-6">
              If none of these steps work, the issue may be hardware-related. Test your screen on another computer to confirm. Contact the manufacturer if the device is under warranty.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Prevention Tips</h2>
            <p className="text-gray-700 mb-4">
              Keep macOS updated. System updates often include driver updates that can fix screen issues.
            </p>
            <p className="text-gray-700 mb-4">
              Don't disable screen access in privacy settings unless necessary. macOS remembers your choice and may block access to new applications.
            </p>
            <p className="text-gray-700 mb-4">
              Close applications properly instead of just minimizing them. Background apps can hold screen access and prevent other applications from using it.
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
                    "title": "Screen Flickering on MacBook Pro",
                    "href": "/issues/screen-flickering-macbook-pro"
          },
          {
                    "title": "Monitor Ghosting in Games",
                    "href": "/issues/monitor-ghosting-games"
          },
          {
                    "title": "Screen Color Calibration on Windows",
                    "href": "/issues/screen-color-calibration-windows"
          }
]} />

            <p className="text-gray-700 mb-6 mt-8">
              Use the <Link href="/screen" className="text-blue-600 hover:text-blue-800">online screen test</Link> to confirm everything is working.
            </p>
          </article>

          <HelpfulWidget />
        </div>
      </div>
    </>
  )
}
