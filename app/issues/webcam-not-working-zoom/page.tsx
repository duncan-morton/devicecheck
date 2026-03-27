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
import { ZoomCheckThisFirst, ZoomWhatThisUsuallyMeans } from '@/components/ZoomIssueAuthoritySections'
import IssueLinksPanel from '@/components/IssueLinksPanel'
import TroubleshootingMatrix from '@/components/TroubleshootingMatrix'
import Link from 'next/link'
import issuesData from '@/data/issues.json'

export const revalidate = 86400

const issuePath = '/issues/webcam-not-working-zoom'
export const metadata: Metadata = { ...genMeta({
  title: 'Webcam Not Working in Zoom - Complete Fix Guide',
  description: 'Fix webcam not working in zoom. Step-by-step troubleshooting guide covering Zoom settings, permissions, drivers, and solutions for webcam not showing or detected in zoom.',
  path: issuePath,
  keywords: ["webcam not working zoom","zoom camera fix","zoom webcam not detected","zoom camera not showing","zoom video not working"]
}) }

const faqs = [
  {
    "question": "Why is webcam not working in zoom?",
    "answer": "Webcam not showing or detected in Zoom. This usually happens due to permission settings, driver issues, or conflicts with other applications. Start by checking system permissions and ensuring the correct device is selected."
  },
  {
    "question": "How do I fix webcam not working in zoom?",
    "answer": "First, check Zoom permissions and settings. Verify the correct camera is selected. Update drivers if needed. Use the webcam test to verify the device is working correctly. Follow the step-by-step guide above for detailed instructions."
  },
  {
    "question": "How do I test if my camera is working?",
    "answer": "Use the online webcam test to check if your device is detected and working. The test provides real-time feedback and helps identify any remaining issues."
  },
  {
    "question": "What causes webcam not working in zoom?",
    "answer": "Common causes include privacy settings blocking access, outdated drivers, incorrect device selection, or another application using the camera. Check permissions first, then verify device selection and update drivers."
  },
  {
    "question": "Can I fix webcam not working in zoom without technical knowledge?",
    "answer": "Yes. Most camera issues can be fixed by checking permissions in Zoom settings and ensuring the correct device is selected. Follow the step-by-step guide above for detailed instructions."
  }
]

export default function IssuePage() {
  const articleSchema = generateArticleSchema(
    'Webcam Not Working in Zoom - Complete Fix Guide',
    'Fix webcam not working in zoom. Step-by-step troubleshooting guide.',
    '/issues/webcam-not-working-zoom',
    new Date().toISOString(),
    new Date().toISOString()
  )

  const breadcrumbItems = [{"name":"Home","path":"/"},{"name":"Issues","path":"/issues"},{"name":"Zoom issues","path":"/hubs/zoom-issues"},{"name":"Webcam Not Working in Zoom","path":"/issues/webcam-not-working-zoom"}]
  const breadcrumbs = generateBreadcrumbListSchema(breadcrumbItems)

  const faqSchema = generateFAQPageSchema(faqs)
  const howToSchema = generateHowToSchema({
    url: 'https://devicecheck.io/issues/webcam-not-working-zoom',
    name: 'Webcam Not Working in Zoom',
    description: 'Fix webcam not working in zoom with clear steps for Zoom covering permissions, device selection, and drivers.',
    steps: [{"title":"Check Zoom video settings","description":"Check Zoom video settings"},{"title":"Verify camera permissions","description":"Verify camera permissions"},{"title":"Select correct camera in","description":"Select correct camera in Zoom"},{"title":"Test camera in Zoom","description":"Test camera in Zoom settings"},{"title":"Update Zoom application","description":"Update Zoom application"}]
  })

  const steps = [{"title":"Check Zoom video settings","description":"Check Zoom video settings"},{"title":"Verify camera permissions","description":"Verify camera permissions"},{"title":"Select correct camera in","description":"Select correct camera in Zoom"},{"title":"Test camera in Zoom","description":"Test camera in Zoom settings"},{"title":"Update Zoom application","description":"Update Zoom application"}]

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
            { name: 'Webcam Not Working in Zoom', path: '/issues/webcam-not-working-zoom' }
          ]} />
          
          <div className="mb-4">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Webcam Not Working in Zoom</h1>
            <div className="text-xl text-gray-600 max-w-3xl space-y-3">
              <p>Black tile, “no camera,” or wrong picture in Zoom almost always means selection, a lock from another app, or OS privacy scoped to the Zoom binary—not generic “broken hardware.”</p>
              <p>
                Run a{' '}
                <Link href="/webcam" className="text-blue-600 hover:text-blue-800">
                  webcam test
                </Link>{' '}
                to confirm the issue is Zoom-specific before you chase drivers.
              </p>
            </div>
          </div>

          <ZoomWhatThisUsuallyMeans
            causes={[
              {
                title: 'Zoom is pointed at the wrong camera',
                text: 'Virtual cameras, old USB entries, and “default” after dock changes leave Zoom bound to a device name that no longer captures. The preview stays black even though a real camera exists elsewhere in the list.'
              },
              {
                title: 'Another app is holding the camera open',
                text: 'Teams, OBS, other Zoom sessions, or a browser tab with live preview can keep an exclusive capture session. Zoom then shows in use, no device, or a frozen last frame depending on the OS.'
              },
              {
                title: 'OS privacy allows the browser but blocks desktop Zoom',
                text: 'Windows and macOS store permissions per app. A green light in Chrome does not prove the installed Zoom client is allowed; updates can replace the executable path and silently revoke access.'
              },
              {
                title: 'Browser Zoom works; the desktop app does not',
                text: 'Web Zoom uses the browser’s permission and device list. The desktop app uses native capture and its own privacy toggles—so one path can work while the other fails on the same machine.'
              },
              {
                title: 'Stale enumeration after sleep or USB changes',
                text: 'After reconnecting a dock or waking from sleep, the OS may remount the camera with a new identity. Zoom keeps the old selection until you restart the client or re-pick the device.'
              }
            ]}
          />

          <ZoomCheckThisFirst
            items={[
              'Zoom → Settings → Video: select your physical camera (not a dead “default”).',
              'Confirm preview works in our webcam test so you know the OS still exposes the device.',
              'Quit other video apps, OBS, and browser tabs that might preview the camera.',
              'Fully restart Zoom after permission or hardware changes.',
              'If you use Zoom in the browser too, compare once: same symptom in both places narrows OS vs client.'
            ]}
          />

          <div className="mb-4 rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-700">
            <p className="mb-2">
              This page is part of the Zoom device cluster. Use the hub for triage across camera, mic, and audio.
            </p>
            <p>
              <Link href="/hubs/zoom-issues" className="text-blue-600 hover:text-blue-800 font-medium">
                Zoom issues hub →
              </Link>
            </p>
          </div>


          <IssueDiagnostic device="webcam" mode="defer" />

          <IssueLinksPanel issue={{ slug: "webcam-not-working-zoom", deviceType: "webcam", platform: "Zoom", title: "Webcam Not Working in Zoom" }} allIssues={issuesData} />

          <div className="text-gray-600">
            <StepsBlock steps={steps} />
          </div>

          <article id="article-content" className="prose prose-slate max-w-none bg-white p-8 md:p-12 rounded-2xl border border-gray-200 mt-8">
            <QuickAnswerBox 
              problem="Webcam not showing or detected in Zoom"
              platform="Zoom"
              deviceType="webcam"
            />

            <TOCAccordion contentId="article-content" summaryText="On this page" />

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Quick Fix Summary</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Confirm the correct camera in Zoom → Settings → Video</li>
              <li>Allow camera for the Zoom app in system privacy (not only the browser)</li>
              <li>Release locks: quit other capture apps, then restart Zoom</li>
              <li>Verify hardware with a webcam test outside Zoom</li>
              <li>Update Zoom after major OS upgrades and re-check privacy toggles</li>
            </ul>

            <p className="text-sm text-gray-500 mt-4 mb-2">
              <Link href="/meeting-check" className="text-blue-600 hover:text-blue-800">
                Run full meeting check
              </Link>{' '}
              before an important call.
            </p>
            <p className="text-sm text-gray-500 mb-6">
              If audio is also wrong, use the{' '}
              <Link href="/mic" className="text-blue-600 hover:text-blue-800">
                microphone test
              </Link>{' '}
              to separate input problems from video.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Why It Works Outside Zoom</h2>
            <p className="text-gray-700 mb-4">
              A browser tab proves the sensor and USB path can work, but it uses the browser’s permission prompt and media stack. Desktop Zoom is a different executable with its own row in macOS Privacy & Security or Windows camera settings—deny that row and Chrome can still show a picture while Zoom stays black.
            </p>
            <p className="text-gray-700 mb-4">
              For symptom-based routing across Zoom camera, mic, and delay issues, use the{' '}
              <Link href="/hubs/zoom-issues" className="text-blue-600 hover:text-blue-800">
                Zoom issues hub
              </Link>
              .
            </p>
            <p className="text-gray-700 mb-4">
              If video fails but people can hear you, treat audio as confirmed and focus on capture locks and device selection; if both fail, fix mic and camera permission entries separately—start with{' '}
              <Link href="/issues/microphone-not-working-zoom" className="text-blue-600 hover:text-blue-800">
                microphone not working in Zoom
              </Link>
              .
            </p>
            <p className="text-gray-700 mb-6">
              Many cameras allow only one exclusive reader. A background meeting, virtual camera, or OS privacy preview can hold that session open so Zoom never gets a fresh open—even when a quick test in another app “works.”
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Why This Happens</h2>
            <p className="text-gray-700 mb-4">
              Zoom does not talk to the camera directly; it asks the OS for a device handle. Anything that breaks enumeration, permission, or exclusive access surfaces inside Zoom as missing video—not always with a clear error string.
            </p>
            <p className="text-gray-700 mb-6">
              Virtual cameras and conferencing tools multiply device entries. Zoom’s list shows names, not health, so a plausible wrong pick looks like a hardware failure until you re-select or remove the middle layer.
            </p>

            <TroubleshootingMatrix issue={{ deviceType: 'webcam', platform: "Zoom", slug: 'webcam-not-working-zoom' }} />

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Step-by-Step Fix Guide</h2>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Step 1: Check Permissions and Settings</h3>
            <p className="text-gray-700 mb-4">
              Zoom requires explicit permission for camera access. Verify permissions are enabled in system settings.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Open Zoom settings or preferences</li>
              <li>Navigate to Privacy or Security settings</li>
              <li>Find Camera permissions</li>
              <li>Ensure access is enabled</li>
              <li>Check that your application is listed and allowed</li>
              <li>Restart your computer if needed</li>
            </ul>
            <p className="text-gray-700 mb-6">
              Open Zoom → Settings → Video. Under Camera, select your device. Preview your video to verify. If not detected, check system camera permissions. On Windows, go to Settings → Privacy & Security → Camera.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Step 2: Verify Device Selection</h3>
            <p className="text-gray-700 mb-4">
              Zoom may be using the wrong camera or no device at all. Verify the correct device is selected.
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
              If automatic search doesn't find drivers, visit your computer or camera manufacturer's website. Download the latest drivers for Zoom and install them manually.
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
            
            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Zoom</h3>
            <p className="text-gray-700 mb-4">
              Zoom has specific settings for camera access. Follow these detailed steps for Zoom.
            </p>
            <p className="text-gray-700 mb-4">
              Open Zoom → Settings → Video. Under Camera, select your device. Preview your video to verify. If not detected, check system camera permissions. On Windows, go to Settings → Privacy & Security → Camera.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Verify settings are saved correctly</li>
              <li>Restart the application after changing settings</li>
              <li>Test the camera to confirm it works</li>
              <li>Check for Zoom updates</li>
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
              Keep Zoom updated. System updates often include driver updates that can fix camera issues.
            </p>
            <p className="text-gray-700 mb-4">
              Don't disable camera access in privacy settings unless necessary. Zoom remembers your choice and may block access to new applications.
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

            <RelatedGuides
              guides={[
                { title: 'Microphone Not Working in Zoom', href: '/issues/microphone-not-working-zoom' },
                { title: 'Zoom Microphone Delay or Lag', href: '/issues/zoom-audio-delay-microphone' },
                { title: 'Webcam Not Working on Windows 11', href: '/issues/webcam-not-working-windows-11' }
              ]}
            />

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
