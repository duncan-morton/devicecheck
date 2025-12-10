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
  title: 'Webcam Not Detected in Chrome - Complete Fix Guide',
  description: 'Fix webcam not detected in Chrome. Step-by-step guide to enable camera permissions, troubleshoot detection issues, and get your webcam working in Chrome browser.',
  path: '/guides/webcam-not-detected-chrome',
  keywords: [
    'webcam not detected chrome',
    'camera not working chrome',
    'chrome webcam not working',
    'webcam permission chrome',
    'camera access chrome',
    'chrome camera not detected'
  ]
})

const faqs = [
  {
    question: 'Why is my webcam not detected in Chrome?',
    answer: 'Chrome webcam detection issues are usually caused by denied camera permissions, another application using the webcam, incorrect device selection, or system privacy settings blocking access. Check Chrome permissions first, then verify system settings.'
  },
  {
    question: 'How do I enable webcam in Chrome?',
    answer: 'Click the lock or camera icon in Chrome\'s address bar. Set Camera permission to "Allow". If the icon isn\'t visible, go to chrome://settings/content/camera and ensure camera access isn\'t blocked globally. Refresh the page after changing permissions.'
  },
  {
    question: 'Chrome says "camera not detected" but it works in other apps. Why?',
    answer: 'Chrome has separate camera permissions from other applications. Even if your webcam works in other apps, Chrome needs explicit permission. Check chrome://settings/content/camera and ensure the site is allowed. Also verify no other browser tab is using the camera.'
  },
  {
    question: 'How do I test if my webcam works in Chrome?',
    answer: 'Use the online webcam test to check if Chrome can access your camera. The test shows a live preview if permissions are granted. You can also go to chrome://settings/content/camera and click "Test" next to your webcam device.'
  },
  {
    question: 'Chrome webcam permission keeps getting denied. How do I fix it?',
    answer: 'Go to chrome://settings/content/camera and remove the site from blocked list. Clear Chrome cache and cookies for the site. Restart Chrome completely. Check Windows or Mac privacy settings to ensure Chrome has camera access at system level.'
  },
  {
    question: 'Can other browser tabs block webcam access in Chrome?',
    answer: 'Yes. Only one Chrome tab can access the webcam at a time. Close other tabs that might be using the camera. Check for tabs with camera icons in the address bar. Close those tabs and try again.'
  },
  {
    question: 'My webcam works in Chrome but not in specific websites. Why?',
    answer: 'Some websites have additional security requirements or use different camera APIs. Check the website\'s requirements. Ensure you\'re using HTTPS (not HTTP) as Chrome blocks camera access on insecure connections. Update Chrome to latest version.'
  }
]

export default function WebcamNotDetectedChromePage() {
  const articleSchema = generateArticleSchema(
    'Webcam Not Detected in Chrome - Complete Fix Guide',
    'Fix webcam not detected in Chrome. Step-by-step guide to enable camera permissions, troubleshoot detection issues, and get your webcam working in Chrome browser.',
    '/guides/webcam-not-detected-chrome',
    new Date().toISOString(),
    new Date().toISOString()
  )

  const breadcrumbs = generateBreadcrumbListSchema([
    { name: 'Home', path: '/' },
    { name: 'Guides', path: '/guides' },
    { name: 'Webcam Not Detected in Chrome', path: '/guides/webcam-not-detected-chrome' }
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
            { name: 'Webcam Not Detected in Chrome', path: '/guides/webcam-not-detected-chrome' }
          ]} />
          
          <TOC contentId="article-content" />
          
          <article id="article-content" className="prose prose-slate max-w-none bg-white p-8 md:p-12 rounded-2xl border border-gray-200">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Webcam Not Detected in Chrome</h1>
            
            <p className="text-lg text-gray-700 mb-8">
              Chrome requires explicit permission to access your webcam. This guide covers how to enable camera permissions, troubleshoot detection issues, and get your webcam working in Chrome browser.
            </p>

            <p className="text-gray-700 mb-6">
              You can use the <Link href="/webcam" className="text-blue-600 hover:text-blue-800">online webcam test</Link> to confirm whether your device is working.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Quick Fix Summary</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Click lock icon in Chrome address bar and allow camera access</li>
              <li>Go to chrome://settings/content/camera and enable permissions</li>
              <li>Close other browser tabs using the camera</li>
              <li>Enable camera permissions in Windows or Mac system settings</li>
              <li>Restart Chrome after changing permissions</li>
              <li>Clear Chrome cache and cookies</li>
              <li>Update Chrome to latest version</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Why This Happens</h2>
            <p className="text-gray-700 mb-4">
              Chrome requires explicit permission for each website to access your webcam. These permissions are separate from system-level camera access and must be granted individually.
            </p>
            <p className="text-gray-700 mb-4">
              Only one Chrome tab can access the webcam at a time. Other tabs or applications using the camera will block Chrome's access, even if you granted permission.
            </p>
            <p className="text-gray-700 mb-4">
              System privacy settings can override Chrome permissions. Windows and Mac have separate camera privacy controls that can block Chrome even when browser permissions are enabled.
            </p>
            <p className="text-gray-700 mb-6">
              Chrome blocks camera access on insecure HTTP connections. Websites must use HTTPS for Chrome to allow camera access, which prevents malicious sites from accessing your webcam.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Step-by-Step Fix Guide</h2>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Step 1: Enable Camera Permission in Chrome Address Bar</h3>
            <p className="text-gray-700 mb-4">
              Chrome shows camera permission status in the address bar. Use this to quickly grant or deny access.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Look for a lock icon or camera icon in Chrome's address bar</li>
              <li>Click the icon to open site permissions</li>
              <li>Find "Camera" in the permissions list</li>
              <li>Change it from "Block" or "Ask" to "Allow"</li>
              <li>Refresh the page after changing permission</li>
            </ul>
            <p className="text-gray-700 mb-4">
              If you don't see a camera icon, Chrome may not have requested permission yet. Try accessing a website that needs the camera, or use the online webcam test to trigger the permission request.
            </p>
            <p className="text-gray-700 mb-6">
              After granting permission, refresh the page. Chrome applies permission changes immediately after refresh.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Step 2: Check Chrome Camera Settings</h3>
            <p className="text-gray-700 mb-4">
              Chrome has global camera settings that can block access even if site-specific permissions are enabled.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Type chrome://settings/content/camera in the address bar</li>
              <li>Press Enter to open camera settings</li>
              <li>Check if camera access is blocked globally</li>
              <li>If blocked, click "Clear" or remove the site from blocked list</li>
              <li>Ensure "Ask before accessing" or "Sites can ask to access your camera" is enabled</li>
              <li>Scroll down to see site-specific permissions</li>
            </ul>
            <p className="text-gray-700 mb-4">
              Find your website in the list and ensure it's set to "Allow". If it's blocked, click the trash icon to remove it, then refresh the website to request permission again.
            </p>
            <p className="text-gray-700 mb-6">
              Chrome remembers permission decisions. If you previously denied access, you need to remove the site from the blocked list before it can request permission again.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Step 3: Close Other Tabs Using Camera</h3>
            <p className="text-gray-700 mb-4">
              Only one Chrome tab can access the webcam at a time. Other tabs will block access even if they're in the background.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Look for camera icons in other Chrome tabs</li>
              <li>Close tabs that show camera activity</li>
              <li>Check for minimized windows with camera access</li>
              <li>Close other browser windows if you have multiple open</li>
              <li>Restart Chrome completely if unsure which tab is using the camera</li>
            </ul>
            <p className="text-gray-700 mb-4">
              Chrome shows a camera icon in the address bar when a tab is actively using the webcam. Look for this icon across all your tabs.
            </p>
            <p className="text-gray-700 mb-6">
              After closing other tabs, refresh your current page and try accessing the camera again.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Step 4: Enable System Camera Permissions</h3>
            <p className="text-gray-700 mb-4">
              Windows and Mac have system-level camera privacy settings that can block Chrome even when browser permissions are enabled.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Windows 10/11:</strong> Settings → Privacy & Security → Camera. Turn on "Camera access" and "Let desktop apps access your camera". Ensure Chrome is listed in allowed applications. Restart your computer after changing these settings.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Mac:</strong> System Preferences → Security & Privacy → Privacy → Camera. Check the box next to Chrome to allow camera access. You may need to enter your password.
            </p>
            <p className="text-gray-700 mb-6">
              System privacy settings override browser permissions. Chrome cannot access your webcam if system settings block it.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Step 5: Select Correct Camera Device</h3>
            <p className="text-gray-700 mb-4">
              Chrome may be trying to use the wrong camera if you have multiple webcams connected.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Go to chrome://settings/content/camera</li>
              <li>Look for "Camera" device selection</li>
              <li>Click the dropdown to see available cameras</li>
              <li>Select your webcam from the list</li>
              <li>If only one camera appears, Chrome should use it automatically</li>
            </ul>
            <p className="text-gray-700 mb-4">
              Some websites let you choose the camera in their own settings. Check the website's camera selection menu if available.
            </p>
            <p className="text-gray-700 mb-6">
              If your webcam doesn't appear in Chrome's device list, it may not be detected by the system. See Step 7 for hardware troubleshooting.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Step 6: Clear Chrome Cache and Cookies</h3>
            <p className="text-gray-700 mb-4">
              Corrupted cache or cookies can prevent Chrome from accessing the camera properly.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Press Ctrl + Shift + Delete (Windows) or Cmd + Shift + Delete (Mac)</li>
              <li>Select "Cached images and files" and "Cookies and other site data"</li>
              <li>Choose "All time" from the time range</li>
              <li>Click "Clear data"</li>
              <li>Restart Chrome completely</li>
              <li>Try accessing the camera again</li>
            </ul>
            <p className="text-gray-700 mb-6">
              Clearing cache removes stored permission data. You'll need to grant camera permission again after clearing cache.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Step 7: Check Webcam Hardware</h3>
            <p className="text-gray-700 mb-4">
              If Chrome still can't detect your webcam, the problem may be hardware-related rather than permission-related.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Test the webcam in another application like Zoom or Teams</li>
              <li>If it works elsewhere, the issue is Chrome-specific</li>
              <li>If it doesn't work anywhere, check USB connections</li>
              <li>Unplug and reconnect USB webcams</li>
              <li>Try a different USB port</li>
              <li>Check for physical covers or shutters on the webcam</li>
            </ul>
            <p className="text-gray-700 mb-4">
              Built-in laptop webcams should work automatically. If they don't, check system settings or update drivers.
            </p>
            <p className="text-gray-700 mb-6">
              Use the online webcam test in a different browser to see if the problem is Chrome-specific or affects all browsers.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Step 8: Update Chrome</h3>
            <p className="text-gray-700 mb-4">
              Outdated Chrome versions may have camera access bugs or compatibility issues.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Click the three dots menu in Chrome</li>
              <li>Hover over "Help"</li>
              <li>Click "About Google Chrome"</li>
              <li>Chrome will check for updates automatically</li>
              <li>Install any available updates</li>
              <li>Restart Chrome after updating</li>
            </ul>
            <p className="text-gray-700 mb-6">
              Chrome updates include security fixes and camera compatibility improvements. Keeping Chrome updated prevents many webcam access issues.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Browser and OS Specific Fixes</h2>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Windows 10 and Windows 11</h3>
            <p className="text-gray-700 mb-4">
              Windows privacy settings are the most common cause of Chrome webcam issues.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Settings → Privacy & Security → Camera → Enable all toggles</li>
              <li>Ensure Chrome is listed in allowed applications</li>
              <li>Restart computer after changing privacy settings</li>
            </ul>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">macOS</h3>
            <p className="text-gray-700 mb-4">
              Mac camera permissions are simpler but must be enabled for Chrome.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>System Preferences → Security & Privacy → Privacy → Camera</li>
              <li>Check box next to Chrome</li>
              <li>Enter password if prompted</li>
            </ul>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">HTTPS Requirement</h3>
            <p className="text-gray-700 mb-4">
              Chrome blocks camera access on insecure HTTP connections.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Ensure websites use HTTPS, not HTTP</li>
              <li>Look for lock icon in address bar indicating secure connection</li>
              <li>Local development sites may need special configuration</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How to Prevent the Problem in Future</h2>
            <p className="text-gray-700 mb-4">
              Grant camera permission when Chrome first asks. Denying permission and trying to enable it later can cause issues.
            </p>
            <p className="text-gray-700 mb-4">
              Close camera-using tabs when done. Background tabs can block camera access for new tabs.
            </p>
            <p className="text-gray-700 mb-4">
              Don't disable camera access in system privacy settings unless necessary. These settings affect all applications.
            </p>
            <p className="text-gray-700 mb-4">
              Keep Chrome updated. Updates include camera compatibility improvements and security fixes.
            </p>
            <p className="text-gray-700 mb-6">
              Use the online webcam test regularly to verify Chrome can access your camera. This helps catch permission issues early.
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
              { title: 'Webcam Not Working', href: '/guides/webcam-not-working' },
              { title: 'Webcam Test for Zoom', href: '/guides/webcam-test-for-zoom' },
              { title: 'How to Enable Camera in Browser', href: '/guides/how-to-enable-camera-browser' }
            ]} />

            <p className="text-gray-700 mb-6 mt-8">
              Use the <Link href="/webcam" className="text-blue-600 hover:text-blue-800">online webcam test</Link> to confirm everything is working.
            </p>
          </article>

          <HelpfulWidget />
          <DeviceNavigation />
        </div>
      </div>
      <StickyActionBar toolName="Webcam Test" toolHref="/webcam" />
    </>
  )
}
