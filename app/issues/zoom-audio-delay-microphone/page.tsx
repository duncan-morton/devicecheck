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

const issuePath = '/issues/zoom-audio-delay-microphone'
export const metadata: Metadata = { ...genMeta({
  title: 'Zoom Microphone Delay or Lag - Complete Fix Guide',
  description: 'Fix zoom microphone delay or lag. Step-by-step troubleshooting guide covering Zoom settings, permissions, drivers, and solutions for delay or lag in zoom audio input.',
  path: issuePath,
  keywords: ["zoom microphone delay","zoom audio lag","zoom mic latency"]
}) }

const faqs = [
  {
    "question": "Why is zoom microphone delay or lag?",
    "answer": "Delay or lag in Zoom audio input. This usually happens due to permission settings, driver issues, or conflicts with other applications. Start by checking system permissions and ensuring the correct device is selected."
  },
  {
    "question": "How do I fix zoom microphone delay or lag?",
    "answer": "First, check Zoom permissions and settings. Verify the correct microphone is selected. Update drivers if needed. Use the microphone test to verify the device is working correctly. Follow the step-by-step guide above for detailed instructions."
  },
  {
    "question": "How do I test if my microphone is working?",
    "answer": "Use the online microphone test to check if your device is detected and working. The test provides real-time feedback and helps identify any remaining issues."
  },
  {
    "question": "What causes zoom microphone delay or lag?",
    "answer": "Common causes include privacy settings blocking access, outdated drivers, incorrect device selection, or another application using the microphone. Check permissions first, then verify device selection and update drivers."
  },
  {
    "question": "Can I fix zoom microphone delay or lag without technical knowledge?",
    "answer": "Yes. Most microphone issues can be fixed by checking permissions in Zoom settings and ensuring the correct device is selected. Follow the step-by-step guide above for detailed instructions."
  }
]

export default function IssuePage() {
  const articleSchema = generateArticleSchema(
    'Zoom Microphone Delay or Lag - Complete Fix Guide',
    'Fix zoom microphone delay or lag. Step-by-step troubleshooting guide.',
    '/issues/zoom-audio-delay-microphone',
    new Date().toISOString(),
    new Date().toISOString()
  )

  const breadcrumbItems = [{"name":"Home","path":"/"},{"name":"Issues","path":"/issues"},{"name":"Zoom issues","path":"/hubs/zoom-issues"},{"name":"Zoom Microphone Delay or Lag","path":"/issues/zoom-audio-delay-microphone"}]
  const breadcrumbs = generateBreadcrumbListSchema(breadcrumbItems)

  const faqSchema = generateFAQPageSchema(faqs)
  const howToSchema = generateHowToSchema({
    url: 'https://devicecheck.io/issues/zoom-audio-delay-microphone',
    name: 'Zoom Microphone Delay or Lag',
    description: 'Fix zoom microphone delay or lag with clear steps for Zoom covering permissions, device selection, and drivers.',
    steps: [{"title":"Check Zoom audio settings","description":"Check Zoom audio settings"},{"title":"Verify microphone permissions","description":"Verify microphone permissions"},{"title":"Select correct microphone in","description":"Select correct microphone in Zoom"},{"title":"Test microphone in Zoom","description":"Test microphone in Zoom settings"},{"title":"Update Zoom application","description":"Update Zoom application"}]
  })

  const steps = [{"title":"Check Zoom audio settings","description":"Check Zoom audio settings"},{"title":"Verify microphone permissions","description":"Verify microphone permissions"},{"title":"Select correct microphone in","description":"Select correct microphone in Zoom"},{"title":"Test microphone in Zoom","description":"Test microphone in Zoom settings"},{"title":"Update Zoom application","description":"Update Zoom application"}]

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
            { name: 'Zoom Microphone Delay or Lag', path: '/issues/zoom-audio-delay-microphone' }
          ]} />
          
          <div className="mb-4">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Zoom Microphone Delay or Lag</h1>
            <div className="text-xl text-gray-600 max-w-3xl space-y-3">
              <p>Noticeable lag, garbled syllables, or “underwater” voice in Zoom is usually buffer and routing: Bluetooth profiles, virtual cables, CPU load, or Zoom’s own processing fighting your speaker path—not a vague “slow internet” alone.</p>
              <p>
                Use the{' '}
                <Link href="/mic" className="text-blue-600 hover:text-blue-800">
                  microphone test
                </Link>{' '}
                to hear your raw input latency outside Zoom, then compare inside a Zoom test meeting.
              </p>
            </div>
          </div>

          <ZoomWhatThisUsuallyMeans
            causes={[
              {
                title: 'Bluetooth hands-free profile is throttling audio',
                text: 'The HFP/HSP path trades quality and latency for duplex voice. Zoom may be on that narrowband node while another app used the high-quality stereo profile—so “fine elsewhere, awful in Zoom” is expected until you switch device or use wired audio.'
              },
              {
                title: 'Speaker sound is feeding back into the mic path',
                text: 'Echo cancellation and gain riding add delay while they hunt the loop. Headphones break the acoustic path; without them, Zoom keeps adjusting and you hear latency or pumping.'
              },
              {
                title: 'Virtual audio or “listen to this device” doubles the buffer',
                text: 'OBS, VoiceMeeter, loopback drivers, or Windows monitoring insert extra stages. Each stage adds milliseconds; stacked virtual devices blow past what feels real-time in Zoom.'
              },
              {
                title: 'CPU or network contention starves encoding',
                text: 'When the machine is saturated, audio frames wait in queue. Video offloads often steal time from audio scheduling, so heavy tabs or uploads can lag voice before bandwidth is “officially” the problem.'
              },
              {
                title: 'Wrong mic selected with heavy processing',
                text: 'Zoom on a far-field or inactive input still runs noise suppression and AGC on garbage—adding delay without fixing clarity. Correct selection comes first; processing second.'
              }
            ]}
          />

          <ZoomCheckThisFirst
            items={[
              'Switch to wired headphones (or wired mic) for one call and see if lag disappears.',
              'Zoom → Settings → Audio: pick the physical input you are actually speaking into.',
              'Turn off “Listen to this device” and other OS monitoring paths while testing.',
              'Quit virtual audio apps and heavy browser tabs; restart Zoom.',
              'Run a short test call after a clean restart before changing advanced audio flags.'
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


          <IssueDiagnostic device="mic" mode="defer" />

          <IssueLinksPanel issue={{ slug: "zoom-audio-delay-microphone", deviceType: "mic", platform: "Zoom", title: "Zoom Microphone Delay or Lag" }} allIssues={issuesData} />

          <div className="text-gray-600">
            <StepsBlock steps={steps} />
          </div>

          <article id="article-content" className="prose prose-slate max-w-none bg-white p-8 md:p-12 rounded-2xl border border-gray-200 mt-8">
            <QuickAnswerBox 
              problem="Delay or lag in Zoom audio input"
              platform="Zoom"
              deviceType="mic"
            />

            <TOCAccordion contentId="article-content" summaryText="On this page" />

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Quick Fix Summary</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Use wired headphones to kill speaker-to-mic loops</li>
              <li>Prefer wired or high-quality Bluetooth mode over hands-free when possible</li>
              <li>Remove virtual audio layers and OS “listen” paths while testing</li>
              <li>Lower CPU load from tabs and uploads during calls</li>
              <li>Confirm the correct mic in Zoom before toggling advanced audio options</li>
            </ul>

            <p className="text-sm text-gray-500 mt-4 mb-2">
              <Link href="/meeting-check" className="text-blue-600 hover:text-blue-800">
                Run full meeting check
              </Link>{' '}
              to stress mic, speaker, and network in one pass.
            </p>
            <p className="text-sm text-gray-500 mb-6">
              If video stutters with audio, run a{' '}
              <Link href="/webcam" className="text-blue-600 hover:text-blue-800">
                webcam test
              </Link>{' '}
              to see whether CPU or bandwidth is overloaded.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Why It Works Outside Zoom</h2>
            <p className="text-gray-700 mb-4">
              A browser recorder or simple voice app often opens a single low-latency path with minimal processing. Zoom runs acoustic echo cancellation, packet loss concealment, and often pairs with video encode—each adds buffer budget that shows up as lip-sync drift or late consonants.
            </p>
            <p className="text-gray-700 mb-4">
              Teams and Meet use their own stacks and defaults; “fine in Teams, laggy in Zoom” usually means profile, device mode, or processing differ—not that Zoom is uniquely broken on your hardware.
            </p>
            <p className="text-gray-700 mb-4">
              Tie delay back to selection and silence issues with{' '}
              <Link href="/issues/microphone-not-working-zoom" className="text-blue-600 hover:text-blue-800">
                microphone not working in Zoom
              </Link>{' '}
              when the wrong input is in play.
            </p>
            <p className="text-gray-700 mb-4">
              Return to the{' '}
              <Link href="/hubs/zoom-issues" className="text-blue-600 hover:text-blue-800">
                Zoom issues hub
              </Link>{' '}
              if you need to separate delay from no-audio or camera failures.
            </p>
            <p className="text-gray-700 mb-6">
              Device locking still matters: another app can leave the Bluetooth chip in a mode that forces Zoom onto the narrowband profile even after the other app closes, until you reset the radio or reconnect.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Why This Happens</h2>
            <p className="text-gray-700 mb-4">
              Latency is cumulative across capture, OS mixing, optional virtual devices, encoder queues, and network jitter buffers. Zoom hides most of that behind “automatic” audio—when any stage runs hot, voice arrives late before packet loss is obvious.
            </p>
            <p className="text-gray-700 mb-6">
              Fixing delay is about shortening the chain: fewer virtual devices, a closed acoustic loop, and a profile that is not fighting full-duplex on a single Bluetooth channel.
            </p>

            <TroubleshootingMatrix issue={{ deviceType: 'mic', platform: "Zoom", slug: 'zoom-audio-delay-microphone' }} />

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Step-by-Step Fix Guide</h2>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Step 1: Check Permissions and Settings</h3>
            <p className="text-gray-700 mb-4">
              Zoom requires explicit permission for microphone access. Verify permissions are enabled in system settings.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Open Zoom settings or preferences</li>
              <li>Navigate to Privacy or Security settings</li>
              <li>Find Microphone permissions</li>
              <li>Ensure access is enabled</li>
              <li>Check that your application is listed and allowed</li>
              <li>Restart your computer if needed</li>
            </ul>
            <p className="text-gray-700 mb-6">
              Open Zoom → Settings → Audio. Under Microphone, select your device. Click "Test Speaker & Microphone" to verify. If not detected, check system microphone permissions. On Windows, go to Settings → Privacy & Security → Microphone.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Step 2: Verify Device Selection</h3>
            <p className="text-gray-700 mb-4">
              Zoom may be using the wrong microphone or no device at all. Verify the correct device is selected.
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
              If automatic search doesn't find drivers, visit your computer or microphone manufacturer's website. Download the latest drivers for Zoom and install them manually.
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
            
            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Zoom</h3>
            <p className="text-gray-700 mb-4">
              Zoom has specific settings for microphone access. Follow these detailed steps for Zoom.
            </p>
            <p className="text-gray-700 mb-4">
              Open Zoom → Settings → Audio. Under Microphone, select your device. Click "Test Speaker & Microphone" to verify. If not detected, check system microphone permissions. On Windows, go to Settings → Privacy & Security → Microphone.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Verify settings are saved correctly</li>
              <li>Restart the application after changing settings</li>
              <li>Test the microphone to confirm it works</li>
              <li>Check for Zoom updates</li>
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
              Keep Zoom updated. System updates often include driver updates that can fix microphone issues.
            </p>
            <p className="text-gray-700 mb-4">
              Don't disable microphone access in privacy settings unless necessary. Zoom remembers your choice and may block access to new applications.
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

            <RelatedGuides
              guides={[
                { title: 'Microphone Not Working in Zoom', href: '/issues/microphone-not-working-zoom' },
                { title: 'Webcam Not Working in Zoom', href: '/issues/webcam-not-working-zoom' },
                { title: 'Microphone Not Working in Chrome', href: '/issues/microphone-not-working-chrome' }
              ]}
            />

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
