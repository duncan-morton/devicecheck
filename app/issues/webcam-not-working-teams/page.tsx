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
const issuePath = '/issues/webcam-not-working-teams'
const alternates = {
  canonical: baseUrl + issuePath,
  languages: { en: baseUrl + issuePath, de: baseUrl + '/de' + issuePath, es: baseUrl + '/es' + issuePath, fr: baseUrl + '/fr' + issuePath, pt: baseUrl + '/pt' + issuePath, hi: baseUrl + '/hi' + issuePath, 'x-default': baseUrl + issuePath },
}
export const metadata: Metadata = { ...genMeta({
  title: 'Webcam Not Working in Microsoft Teams - Complete Fix Guide',
  description: 'Fix webcam not working in microsoft teams. Step-by-step troubleshooting guide covering Teams settings, permissions, drivers, and solutions for teams cannot access camera.',
  path: issuePath,
  keywords: ["webcam not working teams","teams camera fix","teams can't detect webcam"]
}), alternates }

const faqs = [
  {
    "question": "Why is webcam not working in microsoft teams?",
    "answer": "Teams cannot access camera. This usually happens due to permission settings, driver issues, or conflicts with other applications. Start by checking system permissions and ensuring the correct device is selected."
  },
  {
    "question": "How do I fix webcam not working in microsoft teams?",
    "answer": "First, check Teams permissions and settings. Verify the correct camera is selected. Update drivers if needed. Use the webcam test to verify the device is working correctly. Follow the step-by-step guide above for detailed instructions."
  },
  {
    "question": "How do I test if my camera is working?",
    "answer": "Use the online webcam test to check if your device is detected and working. The test provides real-time feedback and helps identify any remaining issues."
  },
  {
    "question": "What causes webcam not working in microsoft teams?",
    "answer": "Common causes include privacy settings blocking access, outdated drivers, incorrect device selection, or another application using the camera. Check permissions first, then verify device selection and update drivers."
  },
  {
    "question": "Can I fix webcam not working in microsoft teams without technical knowledge?",
    "answer": "Yes. Most camera issues can be fixed by checking permissions in Teams settings and ensuring the correct device is selected. Follow the step-by-step guide above for detailed instructions."
  }
]

export default function IssuePage() {
  const articleSchema = generateArticleSchema(
    'Webcam Not Working in Microsoft Teams - Complete Fix Guide',
    'Fix webcam not working in microsoft teams. Step-by-step troubleshooting guide.',
    '/issues/webcam-not-working-teams',
    new Date().toISOString(),
    new Date().toISOString()
  )

  const breadcrumbItems = [{"name":"Home","path":"/"},{"name":"Issues","path":"/issues"},{"name":"Teams issues","path":"/hubs/teams-issues"},{"name":"Webcam Not Working in Microsoft Teams","path":"/issues/webcam-not-working-teams"}]
  const breadcrumbs = generateBreadcrumbListSchema(breadcrumbItems)

  const faqSchema = generateFAQPageSchema(faqs)
  const howToSchema = generateHowToSchema({
    url: 'https://devicecheck.io/issues/webcam-not-working-teams',
    name: 'Webcam Not Working in Microsoft Teams',
    description: 'Fix webcam not working in microsoft teams with clear steps for Teams covering permissions, device selection, and drivers.',
    steps: [{"title":"Check camera permissions in","description":"Check camera permissions in system settings"},{"title":"Verify the correct camera","description":"Verify the correct camera is selected"},{"title":"Update camera drivers","description":"Update camera drivers"},{"title":"Close other applications using","description":"Close other applications using the camera"},{"title":"Check physical connections","description":"Check physical connections"},{"title":"Restart your computer","description":"Restart your computer"}]
  })

  const steps = [{"title":"Check camera permissions in","description":"Check camera permissions in system settings"},{"title":"Verify the correct camera","description":"Verify the correct camera is selected"},{"title":"Update camera drivers","description":"Update camera drivers"},{"title":"Close other applications using","description":"Close other applications using the camera"},{"title":"Check physical connections","description":"Check physical connections"},{"title":"Restart your computer","description":"Restart your computer"}]

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
            { name: 'Webcam Not Working in Microsoft Teams', path: '/issues/webcam-not-working-teams' }
          ]} />
          
          <div className="mb-4">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Webcam Not Working in Microsoft Teams</h1>
            <p className="text-xl text-gray-600 max-w-3xl">
              Teams cannot access camera. This guide covers all solutions, from permissions to driver updates.
            </p>
          </div>

          <IssueDiagnostic device="webcam" mode="defer" />

          <IssueLinksPanel issue={{ slug: "webcam-not-working-teams", deviceType: "webcam", platform: "Teams", title: "Webcam Not Working in Microsoft Teams" }} allIssues={issuesData} />

          <div className="text-gray-600">
            <StepsBlock steps={steps} />
          </div>

          <article id="article-content" className="prose prose-slate max-w-none bg-white p-8 md:p-12 rounded-2xl border border-gray-200 mt-8">
            <QuickAnswerBox 
              problem="Teams cannot access camera"
              platform="Teams"
              deviceType="webcam"
            />

            <TOCAccordion contentId="article-content" summaryText="On this page" />

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Quick Fix Summary</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Check camera permissions in system settings</li>
              <li>Verify the correct camera is selected</li>
              <li>Update camera drivers</li>
              <li>Close other applications using the camera</li>
              <li>Check physical connections</li>
              <li>Restart your computer</li>
            </ul>

            <p className="text-sm text-gray-500 mt-4 mb-6">
              Next: <Link href="/meeting-check" className="text-blue-600 hover:text-blue-800">Run full meeting check</Link> · <Link href="/mic" className="text-blue-600 hover:text-blue-800">Microphone test</Link>
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Why This Happens</h2>
            <p className="text-gray-700 mb-4">
              Teams includes strict privacy controls that can block camera access. The system requires explicit permission for applications to use your camera, and these settings can be reset after updates or changed accidentally.
            </p>
            <p className="text-gray-700 mb-4">
              Driver issues are another common cause. Teams may not automatically install the correct drivers for your camera, especially for USB devices or specialized equipment. Outdated drivers can cause detection problems or poor performance.
            </p>
            <p className="text-gray-700 mb-4">
              System conflicts occur when multiple applications try to access the camera simultaneously. Teams allows only one application to use the camera at a time, so background apps or previous sessions can block access.
            </p>
            <p className="text-gray-700 mb-6">
              Hardware problems include loose connections, damaged cables, or camera hardware failure. Physical issues are less common but should be checked if software solutions don't work.
            </p>

            <TroubleshootingMatrix issue={{ deviceType: 'webcam', platform: "Teams", slug: 'webcam-not-working-teams' }} />

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Step-by-Step Fix Guide</h2>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Step 1: Check Permissions and Settings</h3>
            <p className="text-gray-700 mb-4">
              Teams requires explicit permission for camera access. Verify permissions are enabled in system settings.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Open Teams settings or preferences</li>
              <li>Navigate to Privacy or Security settings</li>
              <li>Find Camera permissions</li>
              <li>Ensure access is enabled</li>
              <li>Check that your application is listed and allowed</li>
              <li>Restart your computer if needed</li>
            </ul>
            <p className="text-gray-700 mb-6">
              Open Teams settings and navigate to camera permissions. Enable access for your application and restart if needed.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Step 2: Verify Device Selection</h3>
            <p className="text-gray-700 mb-4">
              Teams may be using the wrong camera or no device at all. Verify the correct device is selected.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Open system sound or camera settings</li>
              <li>Check the list of available devices</li>
              <li>Select the correct camera</li>
              <li>Test the device to confirm it works</li>
              <li>Set it as the default if available</li>
            </ul>
            <p className="text-gray-700 mb-6">
              If your camera doesn't appear in the list, it may not be detected. See Step 3 for driver troubleshooting.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Step 3: Update Drivers</h3>
            <p className="text-gray-700 mb-4">
              Outdated or missing drivers prevent camera detection. Update drivers through system settings or Device Manager.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Open Device Manager or system settings</li>
              <li>Find Cameras section</li>
              <li>Right-click your device and select Update driver</li>
              <li>Choose automatic driver search</li>
              <li>Wait for the system to find and install drivers</li>
              <li>Restart your computer after updating</li>
            </ul>
            <p className="text-gray-700 mb-4">
              If your camera doesn't appear in Device Manager, check other sections like "Sound, video and game controllers" or "Universal Serial Bus controllers" for USB devices.
            </p>
            <p className="text-gray-700 mb-6">
              If automatic search doesn't find drivers, visit your computer or camera manufacturer's website. Download the latest drivers for Teams and install them manually.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Step 4: Close Conflicting Applications</h3>
            <p className="text-gray-700 mb-4">
              Only one application can access your camera at a time. Other apps may be blocking access.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Close other applications using the camera</li>
              <li>Check system tray for background apps</li>
              <li>End processes in Task Manager if needed</li>
              <li>Restart your browser if using web applications</li>
              <li>Check for browser extensions that might block access</li>
            </ul>
            <p className="text-gray-700 mb-6">
              Some applications don't release camera access when closed. Restart your computer to clear all camera locks if needed.
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
              If the camera works on another computer, the issue is software-related. If it doesn't work anywhere, the camera may be faulty.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Platform-Specific Fixes</h2>
            
            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Teams</h3>
            <p className="text-gray-700 mb-4">
              Teams has specific settings for camera access. Follow these detailed steps for Teams.
            </p>
            <p className="text-gray-700 mb-4">
              Open Teams settings and navigate to camera permissions. Enable access for your application and restart if needed.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Verify settings are saved correctly</li>
              <li>Restart the application after changing settings</li>
              <li>Test the camera to confirm it works</li>
              <li>Check for Teams updates</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Advanced Troubleshooting</h2>
            <p className="text-gray-700 mb-4">
              If basic fixes don't work, try these advanced troubleshooting steps.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Run system troubleshooter for camera issues</li>
              <li>Reset camera settings to defaults</li>
              <li>Check for system updates</li>
              <li>Reinstall camera drivers</li>
              <li>Test in safe mode if available</li>
              <li>Check system logs for error messages</li>
            </ul>
            <p className="text-gray-700 mb-6">
              If none of these steps work, the issue may be hardware-related. Test your camera on another computer to confirm. Contact the manufacturer if the device is under warranty.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Prevention Tips</h2>
            <p className="text-gray-700 mb-4">
              Keep Teams updated. System updates often include driver updates that can fix camera issues.
            </p>
            <p className="text-gray-700 mb-4">
              Don't disable camera access in privacy settings unless necessary. Teams remembers your choice and may block access to new applications.
            </p>
            <p className="text-gray-700 mb-4">
              Close applications properly instead of just minimizing them. Background apps can hold camera access and prevent other applications from using it.
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
                    "title": "Camera Not Detected in Teams",
                    "href": "/issues/camera-not-detected-teams"
          },
          {
                    "title": "Webcam Not Working on Windows 11",
                    "href": "/issues/webcam-not-working-windows-11"
          },
          {
                    "title": "Webcam Not Working in Firefox",
                    "href": "/issues/webcam-not-working-firefox"
          }
]} />

            <p className="text-gray-700 mb-6 mt-8">
              Use the <Link href="/webcam" className="text-blue-600 hover:text-blue-800">online webcam test</Link> to confirm everything is working.
            </p>
          </article>

          <HelpfulWidget />
        </div>
      </div>
    </>
  )
}
