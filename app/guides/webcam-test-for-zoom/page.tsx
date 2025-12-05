import { Metadata } from 'next'
import { generateMetadata as genMeta } from '@/lib/seo/metadata'
import JsonLdScript from '@/components/JsonLdScript'
import { generateArticleSchema, generateBreadcrumbListSchema, generateFAQPageSchema } from '@/lib/seo/jsonLd'
import Breadcrumbs from '@/components/Breadcrumbs'
import Link from 'next/link'

export const revalidate = 86400

export const metadata: Metadata = genMeta({
  title: 'Webcam Test for Zoom - Complete Setup and Troubleshooting Guide',
  description: 'Test and fix webcam for Zoom. Step-by-step guide to configure camera settings, troubleshoot issues, and ensure clear video in Zoom meetings.',
  path: '/guides/webcam-test-for-zoom',
  keywords: [
    'webcam test zoom',
    'zoom webcam test',
    'zoom camera not working',
    'zoom webcam setup',
    'test webcam zoom',
    'zoom video test'
  ]
})

const faqs = [
  {
    question: 'How do I test my webcam in Zoom?',
    answer: 'Open Zoom → Settings → Video. You\'ll see a live preview of your webcam. Select your camera from the Camera dropdown if multiple cameras are available. Adjust video settings like brightness and contrast. The preview shows exactly how you appear to others.'
  },
  {
    question: 'Why is my webcam not working in Zoom?',
    answer: 'Zoom webcam issues are usually caused by wrong camera selection, camera permissions denied, another application using the webcam, or system privacy settings blocking access. Check Zoom video settings first, then verify system permissions.'
  },
  {
    question: 'How do I enable webcam in Zoom?',
    answer: 'Open Zoom → Settings → Video. Select your webcam from the Camera dropdown. Ensure "Turn off my video when joining a meeting" is disabled if you want video on by default. Test the camera in settings to see the preview.'
  },
  {
    question: 'Zoom webcam is too dark or grainy. How do I fix it?',
    answer: 'In Zoom Settings → Video, adjust brightness and contrast sliders. Improve lighting in your room. Move closer to a light source. Clean your webcam lens. Some webcams have hardware settings for exposure and gain. See the guide on webcam quality improvement for detailed solutions.'
  },
  {
    question: 'Can I test my webcam before joining a Zoom meeting?',
    answer: 'Yes. Open Zoom → Settings → Video. The preview window shows your webcam feed. You can adjust settings and see changes in real-time before joining any meeting. You can also use the online webcam test to verify your device works outside of Zoom.'
  },
  {
    question: 'Zoom webcam works in settings but not in meetings. Why?',
    answer: 'You may have video disabled in the meeting. Click the camera icon in Zoom meeting controls to start video. Check that you\'re not set to join with video off. Verify no other application is using the webcam.'
  },
  {
    question: 'How do I fix webcam lag or low FPS in Zoom?',
    answer: 'Close other applications using the webcam. Reduce Zoom video quality in Settings → Video → Advanced. Disable HD video if enabled. Check your internet connection speed. Update Zoom to latest version. Close other browser tabs or applications consuming system resources.'
  }
]

export default function WebcamTestForZoomPage() {
  const articleSchema = generateArticleSchema(
    'Webcam Test for Zoom - Complete Setup and Troubleshooting Guide',
    'Test and fix webcam for Zoom. Step-by-step guide to configure camera settings, troubleshoot issues, and ensure clear video in Zoom meetings.',
    '/guides/webcam-test-for-zoom',
    new Date().toISOString(),
    new Date().toISOString()
  )

  const breadcrumbs = generateBreadcrumbListSchema([
    { name: 'Home', path: '/' },
    { name: 'Guides', path: '/guides' },
    { name: 'Webcam Test for Zoom', path: '/guides/webcam-test-for-zoom' }
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
            { name: 'Webcam Test for Zoom', path: '/guides/webcam-test-for-zoom' }
          ]} />
          
          <article className="prose prose-slate max-w-none bg-white p-8 md:p-12 rounded-2xl border border-gray-200">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Webcam Test for Zoom</h1>
            
            <p className="text-lg text-gray-700 mb-8">
              Testing your webcam before Zoom meetings ensures clear video. This guide covers how to test your webcam in Zoom, configure settings, and troubleshoot common problems.
            </p>

            <p className="text-gray-700 mb-6">
              You can use the <Link href="/webcam" className="text-blue-600 hover:text-blue-800">online webcam test</Link> to confirm whether your device is working.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Quick Fix Summary</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Test webcam in Zoom Settings → Video</li>
              <li>Select correct camera from dropdown</li>
              <li>Enable camera permissions in Windows or Mac</li>
              <li>Start video in meeting controls</li>
              <li>Close other applications using the webcam</li>
              <li>Adjust brightness and contrast in Zoom settings</li>
              <li>Update Zoom to latest version</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Why This Happens</h2>
            <p className="text-gray-700 mb-4">
              Zoom requires both system permissions and application-specific settings to access your webcam. Missing permissions or incorrect device selection prevents Zoom from using your webcam.
            </p>
            <p className="text-gray-700 mb-4">
              Only one application can access the webcam at a time. Other applications or browser tabs using the camera will block Zoom's access, even if permissions are granted.
            </p>
            <p className="text-gray-700 mb-4">
              System-level privacy settings can override Zoom permissions. Windows and Mac have separate camera privacy controls that can block Zoom even when application settings appear correct.
            </p>
            <p className="text-gray-700 mb-6">
              Video quality settings in Zoom can affect performance. HD video requires more processing power and bandwidth, which can cause lag or connection issues on slower systems.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Step-by-Step Fix Guide</h2>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Step 1: Test Webcam in Zoom Settings</h3>
            <p className="text-gray-700 mb-4">
              Zoom includes a built-in webcam test that shows a live preview of your camera feed.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Open Zoom application</li>
              <li>Click your profile picture or initials in top right</li>
              <li>Select "Settings" from the dropdown menu</li>
              <li>Click "Video" in the left sidebar</li>
              <li>You'll see a live preview of your webcam</li>
              <li>Check that the preview shows your image clearly</li>
            </ul>
            <p className="text-gray-700 mb-4">
              The preview window shows exactly how you appear to others in Zoom meetings. Use this to adjust positioning, lighting, and settings before joining.
            </p>
            <p className="text-gray-700 mb-6">
              If the preview is black or shows an error, your webcam isn't working. Continue with the following steps to troubleshoot.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Step 2: Select Correct Camera in Zoom</h3>
            <p className="text-gray-700 mb-4">
              Zoom may be using the wrong camera or no camera at all. Verify the correct device is selected.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>In Zoom Settings → Video, find the "Camera" dropdown</li>
              <li>Click the dropdown to see available cameras</li>
              <li>Select your webcam from the list</li>
              <li>If your webcam doesn't appear, it may not be detected by the system</li>
              <li>Watch the preview update after selecting a camera</li>
            </ul>
            <p className="text-gray-700 mb-4">
              If multiple cameras are available, test each one to find which works best. Built-in laptop webcams may have different names than external USB webcams.
            </p>
            <p className="text-gray-700 mb-6">
              After selecting a camera, check the preview to ensure it's working correctly.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Step 3: Enable Camera Permissions</h3>
            <p className="text-gray-700 mb-4">
              Windows and Mac require explicit permission for applications to access your webcam. These permissions must be enabled for Zoom to work.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Windows 10/11:</strong> Settings → Privacy & Security → Camera. Turn on "Camera access" and "Let desktop apps access your camera". Ensure Zoom is listed and enabled. Restart your computer after changing these settings.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Mac:</strong> System Preferences → Security & Privacy → Privacy → Camera. Check the box next to Zoom to allow camera access. You may need to enter your password.
            </p>
            <p className="text-gray-700 mb-6">
              After enabling permissions, restart Zoom and test the webcam again in settings.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Step 4: Start Video in Zoom Meeting</h3>
            <p className="text-gray-700 mb-4">
              Zoom meetings have separate video controls that override settings. Ensure video is enabled in the meeting.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Look for the camera icon in Zoom meeting controls</li>
              <li>If the icon has a red slash, video is disabled</li>
              <li>Click the camera icon to start video</li>
              <li>Check that your video appears in the meeting</li>
              <li>Hosts can disable participant video, so ask the host if needed</li>
            </ul>
            <p className="text-gray-700 mb-4">
              Some Zoom settings allow you to join meetings with video off by default. Check Settings → Video → "Turn off my video when joining a meeting" and disable it if you want video on by default.
            </p>
            <p className="text-gray-700 mb-6">
              If video works in settings but not in meetings, the issue is with meeting controls or host settings.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Step 5: Close Conflicting Applications</h3>
            <p className="text-gray-700 mb-4">
              Only one application can access your webcam at a time. Other apps may be blocking Zoom's access.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Close Teams, Skype, Discord, or other communication apps</li>
              <li>Close browser tabs that might be using the camera</li>
              <li>Check system tray for background apps using the webcam</li>
              <li>Press Ctrl + Shift + Esc (Windows) or Cmd + Option + Esc (Mac) to open Task Manager</li>
              <li>End any processes that might be using the webcam</li>
            </ul>
            <p className="text-gray-700 mb-6">
              After closing other applications, restart Zoom and test the webcam again.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Step 6: Adjust Video Quality Settings</h3>
            <p className="text-gray-700 mb-4">
              Zoom video quality settings affect performance and appearance. Adjust these to optimize your video feed.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>In Zoom Settings → Video, find video quality options</li>
              <li>Disable "HD" video if experiencing lag or connection issues</li>
              <li>Adjust brightness and contrast sliders to improve appearance</li>
              <li>Enable "Touch up my appearance" for soft focus if desired</li>
              <li>Go to Advanced settings for more options</li>
            </ul>
            <p className="text-gray-700 mb-4">
              Lower quality settings reduce bandwidth and processing requirements, which can improve performance on slower systems or connections.
            </p>
            <p className="text-gray-700 mb-6">
              Test different quality settings to find the balance between appearance and performance.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Step 7: Improve Lighting and Positioning</h3>
            <p className="text-gray-700 mb-4">
              Poor lighting and positioning can make your webcam appear dark or grainy, even when settings are correct.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Position yourself facing a light source</li>
              <li>Avoid backlighting that creates silhouettes</li>
              <li>Use natural light from windows when possible</li>
              <li>Add desk lamps or ring lights for better illumination</li>
              <li>Position webcam at eye level for better angles</li>
              <li>Clean webcam lens with microfiber cloth</li>
            </ul>
            <p className="text-gray-700 mb-4">
              Good lighting reduces the need for high gain settings, which can cause graininess. See the guide on <Link href="/guides/webcam-quality-improve" className="text-blue-600 hover:text-blue-800">webcam quality improvement</Link> for detailed lighting and positioning tips.
            </p>
            <p className="text-gray-700 mb-6">
              Test your webcam in Zoom settings after adjusting lighting to see the improvement.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Step 8: Update Zoom and Camera Drivers</h3>
            <p className="text-gray-700 mb-4">
              Outdated Zoom versions or camera drivers can cause webcam problems. Update both to ensure compatibility.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Open Zoom → Click your profile picture → Check for Updates</li>
              <li>Install any available Zoom updates</li>
              <li>Restart Zoom after updating</li>
              <li>Update camera drivers through Device Manager (Windows) or System Preferences (Mac)</li>
              <li>Restart your computer after updating drivers</li>
            </ul>
            <p className="text-gray-700 mb-6">
              Zoom updates often include webcam compatibility improvements. Keeping Zoom updated prevents many video issues.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Browser and OS Specific Fixes</h2>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Zoom Web Client</h3>
            <p className="text-gray-700 mb-4">
              Zoom's web client requires browser permissions in addition to system permissions.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Click the lock icon in your browser's address bar</li>
              <li>Set Camera permission to "Allow"</li>
              <li>Refresh the Zoom web page after changing permissions</li>
              <li>Test webcam in Zoom web client settings</li>
            </ul>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Windows 10 and Windows 11</h3>
            <p className="text-gray-700 mb-4">
              Windows privacy settings are the most common cause of Zoom webcam issues.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Settings → Privacy & Security → Camera → Enable all toggles</li>
              <li>Ensure Zoom is listed in allowed applications</li>
              <li>Restart computer after changing privacy settings</li>
            </ul>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">macOS</h3>
            <p className="text-gray-700 mb-4">
              Mac camera permissions are simpler but must be enabled for Zoom.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>System Preferences → Security & Privacy → Privacy → Camera</li>
              <li>Check box next to Zoom</li>
              <li>Enter password if prompted</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How to Prevent the Problem in Future</h2>
            <p className="text-gray-700 mb-4">
              Test your webcam in Zoom settings before important meetings. The preview window lets you verify everything works ahead of time.
            </p>
            <p className="text-gray-700 mb-4">
              Keep Zoom updated. Updates include webcam compatibility improvements and bug fixes.
            </p>
            <p className="text-gray-700 mb-4">
              Don't disable camera permissions in system settings. Windows and Mac remember your choice and may block Zoom access.
            </p>
            <p className="text-gray-700 mb-4">
              Close other applications before joining Zoom meetings. Background apps can hold webcam access and prevent Zoom from using it.
            </p>
            <p className="text-gray-700 mb-6">
              Use the online webcam test regularly to verify your device works outside of Zoom. This helps identify whether problems are Zoom-specific or system-wide.
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
                <li><Link href="/guides/webcam-not-working" className="hover:text-blue-600 underline">Webcam Not Working</Link></li>
                <li><Link href="/guides/webcam-quality-improve" className="hover:text-blue-600 underline">Webcam Quality Improvement</Link></li>
                <li><Link href="/guides/webcam-not-detected-chrome" className="hover:text-blue-600 underline">Webcam Not Detected in Chrome</Link></li>
              </ul>
            </div>

            <p className="text-gray-700 mb-6 mt-8">
              Use the <Link href="/webcam" className="text-blue-600 hover:text-blue-800">online webcam test</Link> to confirm everything is working.
            </p>
          </article>
        </div>
      </div>
    </>
  )
}

