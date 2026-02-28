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
const issuePath = '/issues/microphone-feedback-loop-problem'
const alternates = {
  canonical: baseUrl + issuePath,
  languages: { en: baseUrl + issuePath, de: baseUrl + '/de' + issuePath, es: baseUrl + '/es' + issuePath, fr: baseUrl + '/fr' + issuePath, pt: baseUrl + '/pt' + issuePath, hi: baseUrl + '/hi' + issuePath, 'x-default': baseUrl + issuePath },
}
export const metadata: Metadata = { ...genMeta({
  title: 'Microphone Feedback Loop Problem - Complete Fix Guide',
  description: 'Fix microphone feedback loop problem. Step-by-step troubleshooting guide covering All settings, permissions, drivers, and solutions for loud feedback loop from speakers.',
  path: issuePath,
  keywords: ["microphone feedback loop","mic loud feedback","speaker mic loop fix"]
}), alternates }

const faqs = [
  {
    "question": "Why is microphone feedback loop problem?",
    "answer": "Loud feedback loop from speakers. This usually happens due to permission settings, driver issues, or conflicts with other applications. Start by checking system permissions and ensuring the correct device is selected."
  },
  {
    "question": "How do I fix microphone feedback loop problem?",
    "answer": "First, check All permissions and settings. Verify the correct microphone is selected. Update drivers if needed. Use the microphone test to verify the device is working correctly. Follow the step-by-step guide above for detailed instructions."
  },
  {
    "question": "How do I test if my microphone is working?",
    "answer": "Use the online microphone test to check if your device is detected and working. The test provides real-time feedback and helps identify any remaining issues."
  },
  {
    "question": "What causes microphone feedback loop problem?",
    "answer": "Common causes include privacy settings blocking access, outdated drivers, incorrect device selection, or another application using the microphone. Check permissions first, then verify device selection and update drivers."
  },
  {
    "question": "Can I fix microphone feedback loop problem without technical knowledge?",
    "answer": "Yes. Most microphone issues can be fixed by checking permissions in All settings and ensuring the correct device is selected. Follow the step-by-step guide above for detailed instructions."
  }
]

export default function IssuePage() {
  const articleSchema = generateArticleSchema(
    'Microphone Feedback Loop Problem - Complete Fix Guide',
    'Fix microphone feedback loop problem. Step-by-step troubleshooting guide.',
    '/issues/microphone-feedback-loop-problem',
    new Date().toISOString(),
    new Date().toISOString()
  )

  const breadcrumbItems = [{"name":"Home","path":"/"},{"name":"Issues","path":"/issues"},{"name":"Microphone Feedback Loop Problem","path":"/issues/microphone-feedback-loop-problem"}]
  const breadcrumbs = generateBreadcrumbListSchema(breadcrumbItems)

  const faqSchema = generateFAQPageSchema(faqs)
  const howToSchema = generateHowToSchema({
    url: 'https://devicecheck.io/issues/microphone-feedback-loop-problem',
    name: 'Microphone Feedback Loop Problem',
    description: 'Fix microphone feedback loop problem with clear steps for All covering permissions, device selection, and drivers.',
    steps: [{"title":"Check microphone permissions in","description":"Check microphone permissions in system settings"},{"title":"Verify the correct microphone","description":"Verify the correct microphone is selected"},{"title":"Update audio drivers","description":"Update audio drivers"},{"title":"Close other applications using","description":"Close other applications using the microphone"},{"title":"Check physical connections","description":"Check physical connections"},{"title":"Restart your computer","description":"Restart your computer"}]
  })

  const steps = [{"title":"Check microphone permissions in","description":"Check microphone permissions in system settings"},{"title":"Verify the correct microphone","description":"Verify the correct microphone is selected"},{"title":"Update audio drivers","description":"Update audio drivers"},{"title":"Close other applications using","description":"Close other applications using the microphone"},{"title":"Check physical connections","description":"Check physical connections"},{"title":"Restart your computer","description":"Restart your computer"}]

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
            { name: 'Microphone Feedback Loop Problem', path: '/issues/microphone-feedback-loop-problem' }
          ]} />
          
          <div className="mb-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Microphone Feedback Loop Problem</h1>
            <p className="text-xl text-gray-600 max-w-3xl">
              Loud feedback loop from speakers on All. This guide covers all solutions, from permissions to driver updates.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 mb-6">
            <Link
              href="/mic"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Run the Microphone Test →
            </Link>
            <Link
              href="/meeting-check"
              className="inline-flex items-center px-6 py-3 bg-gray-100 text-gray-800 rounded-lg font-medium border border-gray-200 hover:bg-gray-200 transition-colors"
            >
              Run full meeting check
            </Link>
            <p className="text-sm text-gray-500 w-full mt-1">Runs locally in your browser.</p>
          </div>

          <IssueDiagnostic device="mic" mode="defer" />

          <IssueLinksPanel issue={{ slug: "microphone-feedback-loop-problem", deviceType: "mic", platform: "All", title: "Microphone Feedback Loop Problem" }} allIssues={issuesData} />

          <div className="text-gray-600">
            <StepsBlock steps={steps} />
          </div>

          <article id="article-content" className="prose prose-slate max-w-none bg-white p-8 md:p-12 rounded-2xl border border-gray-200 mt-8">
            <QuickAnswerBox 
              problem="Loud feedback loop from speakers"
              platform="All"
              deviceType="mic"
            />

            <TOCAccordion contentId="article-content" summaryText="On this page" />

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Quick Fix Summary</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Check microphone permissions in system settings</li>
              <li>Verify the correct microphone is selected</li>
              <li>Update audio drivers</li>
              <li>Close other applications using the microphone</li>
              <li>Check physical connections</li>
              <li>Restart your computer</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Why This Happens</h2>
            <p className="text-gray-700 mb-4">
              All includes strict privacy controls that can block microphone access. The system requires explicit permission for applications to use your microphone, and these settings can be reset after updates or changed accidentally.
            </p>
            <p className="text-gray-700 mb-4">
              Driver issues are another common cause. All may not automatically install the correct drivers for your microphone, especially for USB devices or specialized equipment. Outdated drivers can cause detection problems or poor performance.
            </p>
            <p className="text-gray-700 mb-4">
              System conflicts occur when multiple applications try to access the microphone simultaneously. All allows only one application to use the microphone at a time, so background apps or previous sessions can block access.
            </p>
            <p className="text-gray-700 mb-6">
              Hardware problems include loose connections, damaged cables, or microphone hardware failure. Physical issues are less common but should be checked if software solutions don't work.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Step-by-Step Fix Guide</h2>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Step 1: Check Permissions and Settings</h3>
            <p className="text-gray-700 mb-4">
              All requires explicit permission for microphone access. Verify permissions are enabled in system settings.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Open All settings or preferences</li>
              <li>Navigate to Privacy or Security settings</li>
              <li>Find Microphone permissions</li>
              <li>Ensure access is enabled</li>
              <li>Check that your application is listed and allowed</li>
              <li>Restart your computer if needed</li>
            </ul>
            <p className="text-gray-700 mb-6">
              Open All settings and navigate to microphone permissions. Enable access for your application and restart if needed.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Step 2: Verify Device Selection</h3>
            <p className="text-gray-700 mb-4">
              All may be using the wrong microphone or no device at all. Verify the correct device is selected.
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
              If automatic search doesn't find drivers, visit your computer or microphone manufacturer's website. Download the latest drivers for All and install them manually.
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
            
            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">All</h3>
            <p className="text-gray-700 mb-4">
              All has specific settings for microphone access. Follow these detailed steps for All.
            </p>
            <p className="text-gray-700 mb-4">
              Open All settings and navigate to microphone permissions. Enable access for your application and restart if needed.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Verify settings are saved correctly</li>
              <li>Restart the application after changing settings</li>
              <li>Test the microphone to confirm it works</li>
              <li>Check for All updates</li>
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
              Keep All updated. System updates often include driver updates that can fix microphone issues.
            </p>
            <p className="text-gray-700 mb-4">
              Don't disable microphone access in privacy settings unless necessary. All remembers your choice and may block access to new applications.
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
                    "title": "Microphone Not Working in Safari",
                    "href": "/issues/microphone-not-working-safari"
          }
]} />

            <p className="text-gray-700 mb-6 mt-8">
              Use the <Link href="/mic" className="text-blue-600 hover:text-blue-800">online microphone test</Link> to confirm everything is working.
            </p>
          </article>

          <HelpfulWidget />
        </div>
      </div>
    </>
  )
}
