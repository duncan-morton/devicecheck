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
  title: 'Laptop Camera Not Working - Complete Troubleshooting Guide',
  description: 'Fix laptop camera not working. Step-by-step guide covering permissions, drivers, privacy settings, and hardware troubleshooting for built-in laptop cameras.',
  path: '/guides/laptop-camera-not-working',
  keywords: [
    'laptop camera not working',
    'built-in camera not working',
    'laptop webcam not working',
    'camera not detected laptop',
    'laptop camera fix',
    'internal camera not working'
  ]
})

const faqs = [
  {
    question: 'Why is my laptop camera not working?',
    answer: 'Laptop camera issues are usually caused by privacy settings blocking access, disabled camera in BIOS, outdated drivers, another application using the camera, or physical camera covers. Check privacy settings first, then verify drivers and hardware.'
  },
  {
    question: 'How do I enable my laptop camera?',
    answer: 'Enable camera access in Windows Settings → Privacy & Security → Camera, or Mac System Preferences → Security & Privacy → Privacy → Camera. Check that camera isn\'t disabled in BIOS settings. Update camera drivers through Device Manager or System Preferences.'
  },
  {
    question: 'My laptop camera is disabled in Device Manager. How do I enable it?',
    answer: 'Open Device Manager → Cameras or Imaging devices. Right-click your camera → Enable device. If the camera doesn\'t appear, it may be disabled in BIOS. Restart your computer and enter BIOS settings to enable the camera.'
  },
  {
    question: 'How do I test if my laptop camera is working?',
    answer: 'Use the online webcam test to check if your camera is detected and working. The test shows a live preview if permissions are granted. You can also test in Windows Camera app or other applications like Zoom.'
  },
  {
    question: 'Laptop camera works in one app but not another. Why?',
    answer: 'Each application needs separate permission to access the camera. Check application-specific permissions in Windows Privacy settings or Mac Security settings. Ensure the app is listed in allowed applications.'
  },
  {
    question: 'Can a physical camera cover block laptop camera access?',
    answer: 'Physical covers don\'t block software access, but they block the camera lens physically. If you have a camera cover, slide it open. Some laptops have camera kill switches that disable the camera hardware - check for these switches.'
  },
  {
    question: 'How do I update laptop camera drivers?',
    answer: 'Windows: Device Manager → Cameras → Right-click camera → Update driver → Search automatically. Mac: System Preferences → Software Update. Visit your laptop manufacturer\'s website for specific camera drivers if automatic updates don\'t work.'
  }
]

export default function LaptopCameraNotWorkingPage() {
  const articleSchema = generateArticleSchema(
    'Laptop Camera Not Working - Complete Troubleshooting Guide',
    'Fix laptop camera not working. Step-by-step guide covering permissions, drivers, privacy settings, and hardware troubleshooting for built-in laptop cameras.',
    '/guides/laptop-camera-not-working',
    new Date().toISOString(),
    new Date().toISOString()
  )

  const breadcrumbs = generateBreadcrumbListSchema([
    { name: 'Home', path: '/' },
    { name: 'Guides', path: '/guides' },
    { name: 'Laptop Camera Not Working', path: '/guides/laptop-camera-not-working' }
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
            { name: 'Laptop Camera Not Working', path: '/guides/laptop-camera-not-working' }
          ]} />
          
          <TOC contentId="article-content" />
          
          <article id="article-content" className="prose prose-slate max-w-none bg-white p-8 md:p-12 rounded-2xl border border-gray-200">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Laptop Camera Not Working</h1>
            
            <p className="text-lg text-gray-700 mb-8">
              Built-in laptop cameras can stop working due to privacy settings, driver issues, or hardware problems. This guide covers all solutions for laptop camera issues across Windows and Mac systems.
            </p>

            <p className="text-gray-700 mb-6">
              You can use the <Link href="/webcam" className="text-blue-600 hover:text-blue-800">online webcam test</Link> to confirm whether your device is working.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Quick Fix Summary</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Enable camera access in Windows or Mac privacy settings</li>
              <li>Check for physical camera covers or kill switches</li>
              <li>Update camera drivers through Device Manager or System Preferences</li>
              <li>Enable camera in BIOS if disabled</li>
              <li>Close other applications using the camera</li>
              <li>Restart your computer after changing settings</li>
              <li>Test camera in Windows Camera app or other applications</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Why This Happens</h2>
            <p className="text-gray-700 mb-4">
              Privacy settings in Windows and Mac can block camera access. These settings are designed to protect privacy but can prevent legitimate applications from using the camera.
            </p>
            <p className="text-gray-700 mb-4">
              Camera drivers can become outdated or corrupted, especially after system updates. Windows and Mac rely on drivers to communicate with the camera hardware.
            </p>
            <p className="text-gray-700 mb-4">
              Some laptops have physical camera covers or kill switches that disable the camera at the hardware level. These features are designed for privacy but can be accidentally activated.
            </p>
            <p className="text-gray-700 mb-6">
              BIOS settings can disable the camera. Some laptops allow you to disable the camera in BIOS for security, which prevents all software from accessing it.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Step-by-Step Fix Guide</h2>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Step 1: Check Physical Camera Cover or Kill Switch</h3>
            <p className="text-gray-700 mb-4">
              Many laptops have physical camera covers or kill switches that disable the camera. Check these first before troubleshooting software.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Look for a sliding cover over the camera lens</li>
              <li>Slide the cover open if present</li>
              <li>Check for camera kill switches on the keyboard or side of laptop</li>
              <li>Toggle kill switches to enable the camera</li>
              <li>Some laptops use function key combinations to toggle camera</li>
              <li>Consult your laptop manual for specific camera controls</li>
            </ul>
            <p className="text-gray-700 mb-4">
              Physical covers block the lens but don't prevent software access. If software shows the camera is working but you see black video, check for covers.
            </p>
            <p className="text-gray-700 mb-6">
              Kill switches disable the camera at the hardware level. If enabled, no software can access the camera until the switch is toggled.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Step 2: Enable Camera in Privacy Settings</h3>
            <p className="text-gray-700 mb-4">
              Windows and Mac have privacy settings that control camera access. These must be enabled for applications to use the camera.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Windows 10/11:</strong> Settings → Privacy & Security → Camera. Turn on "Camera access" and "Let desktop apps access your camera". Ensure your applications are listed and enabled. Restart your computer after changing these settings.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Mac:</strong> System Preferences → Security & Privacy → Privacy → Camera. Check the boxes next to applications that need camera access. You may need to enter your password.
            </p>
            <p className="text-gray-700 mb-6">
              Privacy settings override application permissions. Even if an app requests camera access, system settings can block it.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Step 3: Enable Camera in Device Manager</h3>
            <p className="text-gray-700 mb-4">
              The camera may be disabled in Device Manager. Enable it to restore functionality.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Press Windows key + X and select "Device Manager"</li>
              <li>Expand "Cameras" or "Imaging devices" section</li>
              <li>Look for your camera in the list</li>
              <li>If you see a down arrow or disabled icon, right-click the camera</li>
              <li>Select "Enable device"</li>
              <li>Restart your computer if prompted</li>
            </ul>
            <p className="text-gray-700 mb-4">
              If the camera doesn't appear in Device Manager, it may be disabled in BIOS or have a driver problem. See Step 4 for driver troubleshooting.
            </p>
            <p className="text-gray-700 mb-6">
              After enabling the camera, test it in Windows Camera app or other applications.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Step 4: Update Camera Drivers</h3>
            <p className="text-gray-700 mb-4">
              Outdated or corrupted camera drivers prevent the camera from working. Update drivers to restore functionality.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Windows:</strong> Device Manager → Cameras → Right-click your camera → Update driver → Search automatically for drivers. Windows will download and install the latest drivers. Restart your computer after updating.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Mac:</strong> System Preferences → Software Update → Install any available updates. macOS updates include camera driver improvements.
            </p>
            <p className="text-gray-700 mb-4">
              If automatic updates don't work, visit your laptop manufacturer's website. Download camera drivers specific to your laptop model and operating system. Install them manually.
            </p>
            <p className="text-gray-700 mb-6">
              Driver updates often fix camera issues that appear after system updates or software installations.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Step 5: Check BIOS Settings</h3>
            <p className="text-gray-700 mb-4">
              Some laptops allow you to disable the camera in BIOS. This setting prevents all software from accessing the camera.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Restart your computer</li>
              <li>Press the BIOS key during startup (usually F2, F10, F12, or Delete)</li>
              <li>Navigate to Security or Advanced settings</li>
              <li>Look for camera or webcam settings</li>
              <li>Ensure camera is enabled</li>
              <li>Save changes and exit BIOS</li>
              <li>Restart your computer</li>
            </ul>
            <p className="text-gray-700 mb-4">
              BIOS settings vary by manufacturer. Consult your laptop manual for specific BIOS navigation instructions.
            </p>
            <p className="text-gray-700 mb-6">
              Only change BIOS settings if you're comfortable doing so. Incorrect BIOS settings can cause other problems.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Step 6: Close Conflicting Applications</h3>
            <p className="text-gray-700 mb-4">
              Only one application can access the camera at a time. Other apps may be blocking access.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Close Zoom, Teams, Skype, or other communication apps</li>
              <li>Close browser tabs that might be using the camera</li>
              <li>Check system tray for background apps using the camera</li>
              <li>Press Ctrl + Shift + Esc (Windows) or Cmd + Option + Esc (Mac) to open Task Manager</li>
              <li>End any processes that might be using the camera</li>
            </ul>
            <p className="text-gray-700 mb-6">
              After closing other applications, test the camera again. If it works now, one of those apps was blocking access.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Step 7: Test Camera in Windows Camera App</h3>
            <p className="text-gray-700 mb-4">
              Windows includes a built-in Camera app that can test if your camera hardware is working.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Press Windows key and type "Camera"</li>
              <li>Open the Camera app</li>
              <li>Grant permission if prompted</li>
              <li>You should see a live preview if the camera is working</li>
              <li>If the app shows an error, the camera has a hardware or driver problem</li>
            </ul>
            <p className="text-gray-700 mb-6">
              The Camera app helps isolate whether the problem is hardware-related or application-specific. If the Camera app works, other apps should work too after granting permissions.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Step 8: Reinstall Camera Drivers</h3>
            <p className="text-gray-700 mb-4">
              If updating drivers doesn't work, try uninstalling and reinstalling them completely.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Device Manager → Cameras → Right-click your camera</li>
              <li>Select "Uninstall device"</li>
              <li>Check "Delete the driver software for this device" if available</li>
              <li>Click "Uninstall"</li>
              <li>Restart your computer</li>
              <li>Windows will reinstall the camera driver automatically</li>
              <li>Test the camera after restart</li>
            </ul>
            <p className="text-gray-700 mb-6">
              Reinstalling drivers can fix corrupted driver files that prevent the camera from working.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Browser and OS Specific Fixes</h2>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Windows 10 and Windows 11</h3>
            <p className="text-gray-700 mb-4">
              Windows privacy settings are the most common cause of laptop camera issues.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Settings → Privacy & Security → Camera → Enable all toggles</li>
              <li>Ensure applications are listed in allowed apps</li>
              <li>Restart computer after changing privacy settings</li>
              <li>Test in Windows Camera app first</li>
            </ul>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">macOS</h3>
            <p className="text-gray-700 mb-4">
              Mac camera permissions are simpler but must be enabled for each application.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>System Preferences → Security & Privacy → Privacy → Camera</li>
              <li>Check boxes next to applications that need access</li>
              <li>Enter password if prompted</li>
            </ul>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Chrome Browser</h3>
            <p className="text-gray-700 mb-4">
              Chrome requires browser permissions in addition to system permissions.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Click lock icon in Chrome address bar</li>
              <li>Set Camera permission to "Allow"</li>
              <li>Go to chrome://settings/content/camera for global settings</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How to Prevent the Problem in Future</h2>
            <p className="text-gray-700 mb-4">
              Don't disable camera access in privacy settings unless necessary. Windows and Mac remember your choice and may block new applications.
            </p>
            <p className="text-gray-700 mb-4">
              Keep camera drivers updated. System updates can reset driver settings, so check drivers after major updates.
            </p>
            <p className="text-gray-700 mb-4">
              Close applications properly instead of just minimizing them. Background apps can hold camera access.
            </p>
            <p className="text-gray-700 mb-4">
              Be careful with physical camera covers. Ensure covers are open when you need the camera, and don't accidentally activate kill switches.
            </p>
            <p className="text-gray-700 mb-6">
              Test your camera regularly using the online webcam test. Catching issues early prevents problems during important calls.
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
              { title: 'Webcam Not Detected in Chrome', href: '/guides/webcam-not-detected-chrome' },
              { title: 'Webcam Test for Zoom', href: '/guides/webcam-test-for-zoom' }
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

