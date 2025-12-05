import { Metadata } from 'next'
import { generateMetadata as genMeta } from '@/lib/seo/metadata'
import JsonLdScript from '@/components/JsonLdScript'
import { generateArticleSchema, generateBreadcrumbListSchema, generateFAQPageSchema } from '@/lib/seo/jsonLd'
import Breadcrumbs from '@/components/Breadcrumbs'
import Link from 'next/link'

export const revalidate = 86400

export const metadata: Metadata = genMeta({
  title: 'Microphone Test for Zoom - Complete Setup and Troubleshooting Guide',
  description: 'Test and fix microphone for Zoom. Step-by-step guide to configure microphone settings, troubleshoot issues, and ensure clear audio in Zoom meetings.',
  path: '/guides/mic-test-for-zoom',
  keywords: [
    'microphone test zoom',
    'zoom microphone test',
    'zoom mic not working',
    'zoom microphone setup',
    'test microphone zoom',
    'zoom audio test'
  ]
})

const faqs = [
  {
    question: 'How do I test my microphone in Zoom?',
    answer: 'Open Zoom → Settings → Audio. Click "Test Speaker & Microphone" button. Speak into your microphone and listen to playback. Adjust microphone volume slider if needed. The test shows real-time input levels.'
  },
  {
    question: 'Why is my microphone not working in Zoom?',
    answer: 'Zoom microphone issues are usually caused by wrong device selection, muted microphone, low volume settings, or Windows/Mac privacy settings blocking access. Check Zoom audio settings first, then verify system permissions.'
  },
  {
    question: 'How do I enable microphone in Zoom?',
    answer: 'Open Zoom → Settings → Audio. Select your microphone from the Microphone dropdown. Ensure microphone volume slider is not at zero. Enable "Automatically adjust microphone volume" if needed. Test the microphone in settings.'
  },
  {
    question: 'Zoom microphone is too quiet. How do I fix it?',
    answer: 'In Zoom Settings → Audio, increase the microphone volume slider. Disable "Automatically adjust microphone volume" if it\'s reducing your levels. Also check system microphone volume in Windows or Mac sound settings. Enable microphone boost if available.'
  },
  {
    question: 'Can I test my microphone before joining a Zoom meeting?',
    answer: 'Yes. Open Zoom → Settings → Audio → Test Speaker & Microphone. This lets you test and adjust settings before joining a meeting. You can also use the online microphone test to verify your device works outside of Zoom.'
  },
  {
    question: 'Zoom microphone works in settings but not in meetings. Why?',
    answer: 'You may have muted yourself in the meeting. Click the microphone icon in the Zoom meeting controls to unmute. Check that you\'re not muted at the system level. Verify no other application is using the microphone.'
  },
  {
    question: 'How do I fix microphone static or crackling in Zoom?',
    answer: 'Reduce microphone boost in system sound settings. Check USB connections for USB microphones. Move away from electrical interference sources. Update audio drivers. In Zoom settings, disable "Suppress background noise" if it\'s causing artifacts.'
  }
]

export default function MicTestForZoomPage() {
  const articleSchema = generateArticleSchema(
    'Microphone Test for Zoom - Complete Setup and Troubleshooting Guide',
    'Test and fix microphone for Zoom. Step-by-step guide to configure microphone settings, troubleshoot issues, and ensure clear audio in Zoom meetings.',
    '/guides/mic-test-for-zoom',
    new Date().toISOString(),
    new Date().toISOString()
  )

  const breadcrumbs = generateBreadcrumbListSchema([
    { name: 'Home', path: '/' },
    { name: 'Guides', path: '/guides' },
    { name: 'Microphone Test for Zoom', path: '/guides/mic-test-for-zoom' }
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
            { name: 'Microphone Test for Zoom', path: '/guides/mic-test-for-zoom' }
          ]} />
          
          <article className="prose prose-slate max-w-none bg-white p-8 md:p-12 rounded-2xl border border-gray-200">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Microphone Test for Zoom</h1>
            
            <p className="text-lg text-gray-700 mb-8">
              Testing your microphone before Zoom meetings ensures clear audio. This guide covers how to test your microphone in Zoom, configure settings, and troubleshoot common problems.
            </p>

            <p className="text-gray-700 mb-6">
              You can use the <Link href="/mic" className="text-blue-600 hover:text-blue-800">online microphone test</Link> to confirm whether your device is working.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Quick Fix Summary</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Test microphone in Zoom Settings → Audio</li>
              <li>Select correct microphone from dropdown</li>
              <li>Adjust microphone volume slider</li>
              <li>Enable microphone permissions in Windows or Mac</li>
              <li>Unmute microphone in meeting controls</li>
              <li>Close other applications using the microphone</li>
              <li>Update Zoom to latest version</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Why This Happens</h2>
            <p className="text-gray-700 mb-4">
              Zoom requires both system permissions and application-specific settings to access your microphone. Missing permissions or incorrect device selection prevents Zoom from using your microphone.
            </p>
            <p className="text-gray-700 mb-4">
              Zoom's automatic volume adjustment can reduce microphone levels if it detects background noise. This feature sometimes works too aggressively, making your voice too quiet.
            </p>
            <p className="text-gray-700 mb-4">
              System-level muting or low volume settings affect Zoom even when application settings appear correct. Windows and Mac have separate volume controls that override application settings.
            </p>
            <p className="text-gray-700 mb-6">
              Multiple applications trying to access the microphone simultaneously can cause conflicts. Only one application can use the microphone at a time, so background apps can block Zoom's access.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Step-by-Step Fix Guide</h2>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Step 1: Test Microphone in Zoom Settings</h3>
            <p className="text-gray-700 mb-4">
              Zoom includes a built-in microphone test that lets you verify your device works before joining meetings.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Open Zoom application</li>
              <li>Click your profile picture or initials in top right</li>
              <li>Select "Settings" from the dropdown menu</li>
              <li>Click "Audio" in the left sidebar</li>
              <li>Click "Test Speaker & Microphone" button</li>
              <li>Follow the test prompts</li>
              <li>Speak into your microphone and listen to playback</li>
            </ul>
            <p className="text-gray-700 mb-4">
              The test shows real-time input levels. Green bars indicate good levels. If you see no activity or very low levels, your microphone isn't working or volume is too low.
            </p>
            <p className="text-gray-700 mb-6">
              If the test doesn't work, continue with the following steps to troubleshoot.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Step 2: Select Correct Microphone in Zoom</h3>
            <p className="text-gray-700 mb-4">
              Zoom may be using the wrong microphone or no microphone at all. Verify the correct device is selected.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>In Zoom Settings → Audio, find the "Microphone" dropdown</li>
              <li>Click the dropdown to see available microphones</li>
              <li>Select your microphone from the list</li>
              <li>If your microphone doesn't appear, it may not be detected by the system</li>
              <li>Test the microphone after selecting it</li>
            </ul>
            <p className="text-gray-700 mb-4">
              If multiple microphones are available, test each one to find which works best. Built-in laptop microphones may have different names than external USB microphones.
            </p>
            <p className="text-gray-700 mb-6">
              After selecting a microphone, use the test function again to verify it works.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Step 3: Adjust Microphone Volume in Zoom</h3>
            <p className="text-gray-700 mb-4">
              Zoom has its own microphone volume control that can override system settings. Adjust this slider to optimize audio levels.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>In Zoom Settings → Audio, find the microphone volume slider</li>
              <li>Move the slider to adjust input volume</li>
              <li>Speak normally while adjusting</li>
              <li>Watch the input level indicator respond</li>
              <li>Find the level where your voice is clear but not distorted</li>
            </ul>
            <p className="text-gray-700 mb-4">
              Disable "Automatically adjust microphone volume" if it's reducing your levels too much. This feature can make your voice too quiet in quiet environments.
            </p>
            <p className="text-gray-700 mb-6">
              Test the microphone after adjusting volume. Use the test function to hear how you sound to others.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Step 4: Enable Microphone Permissions</h3>
            <p className="text-gray-700 mb-4">
              Windows and Mac require explicit permission for applications to access your microphone. These permissions must be enabled for Zoom to work.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Windows 10/11:</strong> Settings → Privacy & Security → Microphone. Turn on "Microphone access" and "Let desktop apps access your microphone". Ensure Zoom is listed and enabled. Restart your computer after changing these settings.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Mac:</strong> System Preferences → Security & Privacy → Privacy → Microphone. Check the box next to Zoom to allow microphone access. You may need to enter your password.
            </p>
            <p className="text-gray-700 mb-6">
              After enabling permissions, restart Zoom and test the microphone again.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Step 5: Check System Microphone Settings</h3>
            <p className="text-gray-700 mb-4">
              System-level microphone settings affect Zoom even when application settings appear correct. Verify these settings are configured properly.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Windows:</strong> Settings → System → Sound → Input. Select your microphone and ensure volume is not at zero. Test the microphone using the "Test your microphone" button. Check that the microphone is not muted.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Mac:</strong> System Preferences → Sound → Input. Select your microphone and increase input volume if needed. Watch the input level indicator respond when you speak.
            </p>
            <p className="text-gray-700 mb-6">
              If system settings show the microphone working but Zoom doesn't, the issue is with Zoom permissions or settings.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Step 6: Unmute in Zoom Meeting</h3>
            <p className="text-gray-700 mb-4">
              Zoom meetings have separate mute controls that override all other settings. Ensure you're not muted in the meeting.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Look for the microphone icon in Zoom meeting controls</li>
              <li>If the icon has a red slash, you're muted</li>
              <li>Click the microphone icon to unmute</li>
              <li>Check that your name doesn't show "Muted" in the participant list</li>
              <li>Hosts can mute participants, so ask the host to unmute you if needed</li>
            </ul>
            <p className="text-gray-700 mb-6">
              Some Zoom settings allow you to join meetings muted by default. Check Settings → Audio → "Mute microphone when joining a meeting" and disable it if you want to join unmuted.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Step 7: Close Conflicting Applications</h3>
            <p className="text-gray-700 mb-4">
              Only one application can access your microphone at a time. Other apps may be blocking Zoom's access.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Close Teams, Skype, Discord, or other communication apps</li>
              <li>Check system tray for background apps using the microphone</li>
              <li>Restart your browser if you have web apps open</li>
              <li>Press Ctrl + Shift + Esc (Windows) or Cmd + Option + Esc (Mac) to open Task Manager</li>
              <li>End any processes that might be using the microphone</li>
            </ul>
            <p className="text-gray-700 mb-6">
              After closing other applications, restart Zoom and test the microphone again.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Step 8: Update Zoom and Audio Drivers</h3>
            <p className="text-gray-700 mb-4">
              Outdated Zoom versions or audio drivers can cause microphone problems. Update both to ensure compatibility.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Open Zoom → Click your profile picture → Check for Updates</li>
              <li>Install any available Zoom updates</li>
              <li>Restart Zoom after updating</li>
              <li>Update audio drivers through Device Manager (Windows) or System Preferences (Mac)</li>
              <li>Restart your computer after updating drivers</li>
            </ul>
            <p className="text-gray-700 mb-6">
              Zoom updates often include microphone compatibility improvements. Keeping Zoom updated prevents many audio issues.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Browser and OS Specific Fixes</h2>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Zoom Web Client</h3>
            <p className="text-gray-700 mb-4">
              Zoom's web client requires browser permissions in addition to system permissions.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Click the lock icon in your browser's address bar</li>
              <li>Set Microphone permission to "Allow"</li>
              <li>Refresh the Zoom web page after changing permissions</li>
              <li>Test microphone in Zoom web client settings</li>
            </ul>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Windows 10 and Windows 11</h3>
            <p className="text-gray-700 mb-4">
              Windows privacy settings are the most common cause of Zoom microphone issues.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Settings → Privacy & Security → Microphone → Enable all toggles</li>
              <li>Ensure Zoom is listed in allowed applications</li>
              <li>Restart computer after changing privacy settings</li>
            </ul>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">macOS</h3>
            <p className="text-gray-700 mb-4">
              Mac microphone permissions are simpler but must be enabled for Zoom.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>System Preferences → Security & Privacy → Privacy → Microphone</li>
              <li>Check box next to Zoom</li>
              <li>Enter password if prompted</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How to Prevent the Problem in Future</h2>
            <p className="text-gray-700 mb-4">
              Test your microphone in Zoom settings before important meetings. The built-in test function lets you verify everything works ahead of time.
            </p>
            <p className="text-gray-700 mb-4">
              Keep Zoom updated. Updates include microphone compatibility improvements and bug fixes.
            </p>
            <p className="text-gray-700 mb-4">
              Don't disable microphone permissions in system settings. Windows and Mac remember your choice and may block Zoom access.
            </p>
            <p className="text-gray-700 mb-4">
              Close other applications before joining Zoom meetings. Background apps can hold microphone access and prevent Zoom from using it.
            </p>
            <p className="text-gray-700 mb-6">
              Use the online microphone test regularly to verify your device works outside of Zoom. This helps identify whether problems are Zoom-specific or system-wide.
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

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 my-8">
              <h3 className="font-semibold text-blue-900 mb-2">Related Guides</h3>
              <ul className="space-y-2 text-sm text-blue-800">
                <li><Link href="/guides/microphone-not-working" className="hover:text-blue-600 underline">Microphone Not Working</Link></li>
                <li><Link href="/guides/mic-too-quiet" className="hover:text-blue-600 underline">Microphone Too Quiet</Link></li>
                <li><Link href="/guides/mic-static-or-crackling" className="hover:text-blue-600 underline">Microphone Static or Crackling</Link></li>
              </ul>
            </div>

            <p className="text-gray-700 mb-6 mt-8">
              Use the <Link href="/mic" className="text-blue-600 hover:text-blue-800">online microphone test</Link> to confirm everything is working.
            </p>
          </article>
        </div>
      </div>
    </>
  )
}

