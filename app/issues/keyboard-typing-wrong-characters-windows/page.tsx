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
import TroubleshootingMatrix from '@/components/TroubleshootingMatrix'
import Link from 'next/link'
import issuesData from '@/data/issues.json'

export const revalidate = 86400

const baseUrl = 'https://devicecheck.io'
const issuePath = '/issues/keyboard-typing-wrong-characters-windows'
const alternates = {
  canonical: baseUrl + issuePath,
  languages: { en: baseUrl + issuePath, de: baseUrl + '/de' + issuePath, es: baseUrl + '/es' + issuePath, fr: baseUrl + '/fr' + issuePath, pt: baseUrl + '/pt' + issuePath, hi: baseUrl + '/hi' + issuePath, 'x-default': baseUrl + issuePath },
}
export const metadata: Metadata = { ...genMeta({
  title: 'Keyboard Typing Wrong Characters on Windows - Complete Fix Guide',
  description: 'Fix keyboard typing wrong characters on windows. Step-by-step troubleshooting guide covering Windows settings, permissions, drivers, and solutions for keyboard typing incorrect characters or symbols.',
  path: issuePath,
  keywords: ["keyboard typing wrong characters windows","keyboard typing symbols instead of letters","keyboard layout wrong windows","keyboard typing numbers instead of letters","windows keyboard fix"]
}), alternates }

const faqs = [
  {
    "question": "Why is keyboard typing wrong characters on windows?",
    "answer": "Keyboard typing incorrect characters or symbols. This usually happens due to permission settings, driver issues, or conflicts with other applications. Start by checking system permissions and ensuring the correct device is selected."
  },
  {
    "question": "How do I fix keyboard typing wrong characters on windows?",
    "answer": "First, check Windows permissions and settings. Verify the correct keyboard is selected. Update drivers if needed. Use the keyboard test to verify the device is working correctly. Follow the step-by-step guide above for detailed instructions."
  },
  {
    "question": "How do I test if my keyboard is working?",
    "answer": "Use the online keyboard test to check if your device is detected and working. The test provides real-time feedback and helps identify any remaining issues."
  },
  {
    "question": "What causes keyboard typing wrong characters on windows?",
    "answer": "Common causes include privacy settings blocking access, outdated drivers, incorrect device selection, or another application using the keyboard. Check permissions first, then verify device selection and update drivers."
  },
  {
    "question": "Can I fix keyboard typing wrong characters on windows without technical knowledge?",
    "answer": "Yes. Most keyboard issues can be fixed by checking permissions in Windows settings and ensuring the correct device is selected. Follow the step-by-step guide above for detailed instructions."
  }
]

export default function IssuePage() {
  const articleSchema = generateArticleSchema(
    'Keyboard Typing Wrong Characters on Windows - Complete Fix Guide',
    'Fix keyboard typing wrong characters on windows. Step-by-step troubleshooting guide.',
    '/issues/keyboard-typing-wrong-characters-windows',
    new Date().toISOString(),
    new Date().toISOString()
  )

  const breadcrumbItems = [{"name":"Home","path":"/"},{"name":"Issues","path":"/issues"},{"name":"Windows device issues","path":"/hubs/windows-device-issues"},{"name":"Keyboard Typing Wrong Characters on Windows","path":"/issues/keyboard-typing-wrong-characters-windows"}]
  const breadcrumbs = generateBreadcrumbListSchema(breadcrumbItems)

  const faqSchema = generateFAQPageSchema(faqs)
  const howToSchema = generateHowToSchema({
    url: 'https://devicecheck.io/issues/keyboard-typing-wrong-characters-windows',
    name: 'Keyboard Typing Wrong Characters on Windows',
    description: 'Fix keyboard typing wrong characters on windows with clear steps for Windows covering permissions, device selection, and drivers.',
    steps: [{"title":"Check keyboard language settings","description":"Check keyboard language settings"},{"title":"Verify keyboard layout","description":"Verify keyboard layout"},{"title":"Update keyboard drivers","description":"Update keyboard drivers"},{"title":"Check for Windows updates","description":"Check for Windows updates"},{"title":"Run keyboard troubleshooter","description":"Run keyboard troubleshooter"}]
  })

  const steps = [{"title":"Check keyboard language settings","description":"Check keyboard language settings"},{"title":"Verify keyboard layout","description":"Verify keyboard layout"},{"title":"Update keyboard drivers","description":"Update keyboard drivers"},{"title":"Check for Windows updates","description":"Check for Windows updates"},{"title":"Run keyboard troubleshooter","description":"Run keyboard troubleshooter"}]

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
            { name: 'Keyboard Typing Wrong Characters on Windows', path: '/issues/keyboard-typing-wrong-characters-windows' }
          ]} />
          
          <div className="mb-4">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Keyboard Typing Wrong Characters on Windows</h1>
            <p className="text-xl text-gray-600 max-w-3xl">
              Keyboard typing incorrect characters or symbols on Windows. This guide covers all solutions, from permissions to driver updates.
            </p>
          </div>

          <div className="mb-4 rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-700">
            This is a Windows device issue. <Link href="/hubs/windows-device-issues" className="text-blue-600 hover:text-blue-800 font-medium">See all Windows device issues →</Link>
          </div>


          <IssueDiagnostic device="keyboard" mode="defer" />

          <IssueLinksPanel issue={{ slug: "keyboard-typing-wrong-characters-windows", deviceType: "keyboard", platform: "Windows", title: "Keyboard Typing Wrong Characters on Windows" }} allIssues={issuesData} />

          <div className="text-gray-600">
            <StepsBlock steps={steps} />
          </div>

          <article id="article-content" className="prose prose-slate max-w-none bg-white p-8 md:p-12 rounded-2xl border border-gray-200 mt-8">
            <QuickAnswerBox 
              problem="Keyboard typing incorrect characters or symbols"
              platform="Windows"
              deviceType="keyboard"
            />

            <TOCAccordion contentId="article-content" summaryText="On this page" />

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Quick Fix Summary</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Check keyboard language settings</li>
              <li>Verify keyboard layout</li>
              <li>Update keyboard drivers</li>
              <li>Check for Windows updates</li>
              <li>Run keyboard troubleshooter</li>
            </ul>

            <p className="text-sm text-gray-500 mt-4 mb-6">
              Next: <Link href="/meeting-check" className="text-blue-600 hover:text-blue-800">Run full meeting check</Link> · <Link href="/webcam" className="text-blue-600 hover:text-blue-800">Webcam test</Link>
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Why This Happens</h2>
            <p className="text-gray-700 mb-4">
              Windows includes strict privacy controls that can block keyboard access. The system requires explicit permission for applications to use your keyboard, and these settings can be reset after updates or changed accidentally.
            </p>
            <p className="text-gray-700 mb-4">
              Driver issues are another common cause. Windows may not automatically install the correct drivers for your keyboard, especially for USB devices or specialized equipment. Outdated drivers can cause detection problems or poor performance.
            </p>
            <p className="text-gray-700 mb-4">
              System conflicts occur when multiple applications try to access the keyboard simultaneously. Windows allows only one application to use the keyboard at a time, so background apps or previous sessions can block access.
            </p>
            <p className="text-gray-700 mb-6">
              Hardware problems include loose connections, damaged cables, or keyboard hardware failure. Physical issues are less common but should be checked if software solutions don't work.
            </p>

            <TroubleshootingMatrix issue={{ deviceType: 'keyboard', platform: "Windows", slug: 'keyboard-typing-wrong-characters-windows' }} />

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Step-by-Step Fix Guide</h2>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Step 1: Check Permissions and Settings</h3>
            <p className="text-gray-700 mb-4">
              Windows requires explicit permission for keyboard access. Verify permissions are enabled in system settings.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Open Windows settings or preferences</li>
              <li>Navigate to Privacy or Security settings</li>
              <li>Find Keyboard permissions</li>
              <li>Ensure access is enabled</li>
              <li>Check that your application is listed and allowed</li>
              <li>Restart your computer if needed</li>
            </ul>
            <p className="text-gray-700 mb-6">
              Open Settings → Time & Language → Language & Region. Check your keyboard layout is correct. Go to Settings → Devices → Typing and verify keyboard settings. Open Device Manager and check for keyboard driver issues.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Step 2: Verify Device Selection</h3>
            <p className="text-gray-700 mb-4">
              Windows may be using the wrong keyboard or no device at all. Verify the correct device is selected.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Open system sound or camera settings</li>
              <li>Check the list of available devices</li>
              <li>Select the correct keyboard</li>
              <li>Test the device to confirm it works</li>
              <li>Set it as the default if available</li>
            </ul>
            <p className="text-gray-700 mb-6">
              If your keyboard doesn't appear in the list, it may not be detected. See Step 3 for driver troubleshooting.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Step 3: Update Drivers</h3>
            <p className="text-gray-700 mb-4">
              Outdated or missing drivers prevent keyboard detection. Update drivers through system settings or Device Manager.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Open Device Manager or system settings</li>
              <li>Find keyboard section</li>
              <li>Right-click your device and select Update driver</li>
              <li>Choose automatic driver search</li>
              <li>Wait for the system to find and install drivers</li>
              <li>Restart your computer after updating</li>
            </ul>
            <p className="text-gray-700 mb-4">
              If your keyboard doesn't appear in Device Manager, check other sections like "Sound, video and game controllers" or "Universal Serial Bus controllers" for USB devices.
            </p>
            <p className="text-gray-700 mb-6">
              If automatic search doesn't find drivers, visit your computer or keyboard manufacturer's website. Download the latest drivers for Windows and install them manually.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Step 4: Close Conflicting Applications</h3>
            <p className="text-gray-700 mb-4">
              Only one application can access your keyboard at a time. Other apps may be blocking access.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Close other applications using the keyboard</li>
              <li>Check system tray for background apps</li>
              <li>End processes in Task Manager if needed</li>
              <li>Restart your browser if using web applications</li>
              <li>Check for browser extensions that might block access</li>
            </ul>
            <p className="text-gray-700 mb-6">
              Some applications don't release keyboard access when closed. Restart your computer to clear all keyboard locks if needed.
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
              If the keyboard works on another computer, the issue is software-related. If it doesn't work anywhere, the keyboard may be faulty.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Platform-Specific Fixes</h2>
            
            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Windows</h3>
            <p className="text-gray-700 mb-4">
              Windows has specific settings for keyboard access. Follow these detailed steps for Windows.
            </p>
            <p className="text-gray-700 mb-4">
              Open Settings → Time & Language → Language & Region. Check your keyboard layout is correct. Go to Settings → Devices → Typing and verify keyboard settings. Open Device Manager and check for keyboard driver issues.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Verify settings are saved correctly</li>
              <li>Restart the application after changing settings</li>
              <li>Test the keyboard to confirm it works</li>
              <li>Check for Windows updates</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Advanced Troubleshooting</h2>
            <p className="text-gray-700 mb-4">
              If basic fixes don't work, try these advanced troubleshooting steps.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Run system troubleshooter for keyboard issues</li>
              <li>Reset keyboard settings to defaults</li>
              <li>Check for system updates</li>
              <li>Reinstall keyboard drivers</li>
              <li>Test in safe mode if available</li>
              <li>Check system logs for error messages</li>
            </ul>
            <p className="text-gray-700 mb-6">
              If none of these steps work, the issue may be hardware-related. Test your keyboard on another computer to confirm. Contact the manufacturer if the device is under warranty.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Prevention Tips</h2>
            <p className="text-gray-700 mb-4">
              Keep Windows updated. System updates often include driver updates that can fix keyboard issues.
            </p>
            <p className="text-gray-700 mb-4">
              Don't disable keyboard access in privacy settings unless necessary. Windows remembers your choice and may block access to new applications.
            </p>
            <p className="text-gray-700 mb-4">
              Close applications properly instead of just minimizing them. Background apps can hold keyboard access and prevent other applications from using it.
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
                    "title": "Keyboard Not Working on Mac",
                    "href": "/issues/keyboard-not-working-mac"
          },
          {
                    "title": "Keyboard Keys Sticking on Windows",
                    "href": "/issues/keyboard-keys-sticking-windows"
          },
          {
                    "title": "Keyboard Ghosting on Windows",
                    "href": "/issues/keyboard-ghosting-windows"
          }
]} />

            <p className="text-gray-700 mb-6 mt-8">
              Use the <Link href="/keyboard" className="text-blue-600 hover:text-blue-800">online keyboard test</Link> to confirm everything is working.
            </p>
          </article>

          <HelpfulWidget />
        </div>
      </div>
    </>
  )
}
