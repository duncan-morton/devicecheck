import { Metadata } from 'next'
import { generateMetadata as genMeta } from '@/lib/seo/metadata'
import JsonLdScript from '@/components/JsonLdScript'
import { generateArticleSchema, generateBreadcrumbListSchema } from '@/lib/seo/jsonLd'
import Breadcrumbs from '@/components/Breadcrumbs'
import TOC from '@/components/TOC'
import RelatedGuides from '@/components/RelatedGuides'
import HelpfulWidget from '@/components/HelpfulWidget'
import Link from 'next/link'

export const revalidate = 86400

const title = 'How Camera, Microphone & Device Access Works in Your Browser'
const description =
  'Understand the four layers of device access: hardware, OS permissions, browser permissions, and app selection. Why devices fail even when they work, and how DeviceCheck tests these layers.'
const path = '/guides/how-device-access-works'

export const metadata: Metadata = genMeta({
  title,
  description,
  path,
  keywords: [
    'browser device permissions',
    'camera permission browser',
    'microphone permission',
    'how device access works',
    'browser camera access',
    'browser microphone access'
  ]
})

export default function HowDeviceAccessWorksPage() {
  const articleSchema = generateArticleSchema(
    title,
    'Browser device permissions: how camera, microphone, and device access work across hardware, OS, browser, and application layers. Educational guide for troubleshooting device detection and permission issues.',
    path,
    new Date().toISOString(),
    new Date().toISOString(),
    'en'
  )

  const breadcrumbs = generateBreadcrumbListSchema([
    { name: 'Home', path: '/' },
    { name: 'Guides', path: '/guides' },
    { name: title, path }
  ])

  return (
    <>
      <JsonLdScript data={articleSchema} />
      <JsonLdScript data={breadcrumbs} />

      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <Breadcrumbs items={[{ name: 'Guides', path: '/guides' }, { name: title, path }]} />

          <TOC contentId="article-content" />

          <article id="article-content" className="prose prose-slate max-w-none bg-white p-8 md:p-12 rounded-2xl border border-gray-200">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">{title}</h1>

            <p className="text-lg text-gray-700 mb-8">
              Camera, microphone, and other device access in the browser depends on several layers. When something fails, the cause is usually at one of these layers. This page explains how they work and why devices sometimes fail even when they work elsewhere.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">The 4 Layers of Device Access</h2>

            <p className="text-gray-700 mb-2">
              <strong>Hardware layer.</strong> The physical device (camera, microphone, keyboard) must be connected, powered, and recognized by the operating system. If the OS does not list the device, nothing above can use it.
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Operating system permissions.</strong> Windows and macOS have privacy settings that control which apps can use the camera and microphone. These apply to both desktop apps and browsers. If the OS blocks access, the browser or app will not see the device.
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Browser permissions.</strong> When a website requests camera or microphone access, the browser asks the user to allow or block it. This is separate from the OS layer. A site can be allowed in the browser but still blocked by the OS, or the other way around.
            </p>
            <p className="text-gray-700 mb-6">
              <strong>Application or device selection.</strong> The app or site must then choose which device to use when several are available. Wrong or default selection leads to “no picture” or “no sound” even when permissions are correct.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Why Devices Fail Even When They Work</h2>

            <p className="text-gray-700 mb-3">
              A camera or microphone can work in one app and not in another because each layer can be configured differently per app or per site. Permission conflicts occur when the user has allowed access in one place but blocked it in another, or when the OS and browser disagree.
            </p>
            <p className="text-gray-700 mb-3">
              Device locking is another cause: many systems allow only one process to use the camera or microphone at a time. If another app or browser tab is holding the device, the next app will get “not detected” or a black screen.
            </p>
            <p className="text-gray-700 mb-6">
              Wrong selection is common when multiple devices exist (e.g. built-in mic and USB headset). The app may default to a device that is muted, disconnected, or not the one the user expects. Fixing this usually means opening the app’s or OS’s device settings and choosing the correct input or output.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How Different Apps Use Devices</h2>

            <p className="text-gray-700 mb-2">
              <strong>Zoom, Teams, Discord (desktop).</strong> These apps use OS-level device access. They respect Windows and macOS privacy settings and their own in-app device selection. If the OS blocks the app, the app cannot see the device. They do not use browser permissions unless you use the web client.
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Browsers (Chrome, Firefox, Safari, Edge).</strong> Web pages use the browser’s permission model. The user must allow the site to use the camera or microphone; the browser then uses OS access on the user’s behalf. So both browser and OS permissions must allow access for a web tool to work.
            </p>
            <p className="text-gray-700 mb-6">
              <strong>Zoom/Teams/Meet in the browser.</strong> When you join a meeting from the browser, the same browser and OS rules apply. The meeting app is just a website; it cannot bypass the browser’s permission prompt or the OS privacy settings.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Common Failure Patterns</h2>

            <p className="text-gray-700 mb-2">
              <strong>Not detected.</strong> The app or site reports no camera or microphone. Usually the device is blocked at the OS or browser layer, or another app is holding it. Check OS privacy settings and browser site permissions, and close other apps that might be using the device.
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Wrong device.</strong> The app uses a different camera or mic than the user expects. Fix by selecting the correct device in the app’s settings or in the system sound/camera settings.
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Permission blocked.</strong> The user previously denied access or reset permissions. Re-open the browser or OS permission screen and set the site or app to Allow, then reload or restart the app.
            </p>
            <p className="text-gray-700 mb-6">
              <strong>Poor quality.</strong> The device is detected but video or audio is bad. This is often hardware, driver, or network related rather than permission related. Updating drivers, changing the physical device, or reducing load on the system can help.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How DeviceCheck Tests These Layers</h2>

            <p className="text-gray-700 mb-3">
              DeviceCheck’s microphone and webcam tools run in the browser. When you run a test, the browser requests access to the device; that request hits the browser permission layer first (allow/block for this site), then the OS layer (allow/block for this browser). If both allow, the tool receives a stream and can show levels or video.
            </p>
            <p className="text-gray-700 mb-3">
              So a successful test here means the hardware is present, the OS allows your browser to use it, and the browser has permission for this site. If the test fails, the failure is at one of those layers. The keyboard and screen tools do not use camera or microphone permissions; they only need input focus and display access.
            </p>
            <p className="text-gray-700 mb-6">
              Using the tools before a call or recording helps confirm that the permission and device stack are correct before you open Zoom, Teams, or another app. If the browser test works, the same device and permissions will usually work in browser-based meeting apps; for desktop apps, you still need to check OS and in-app device selection.
            </p>

            <RelatedGuides
              guides={[
                { title: 'How to enable camera in browser', href: '/guides/how-to-enable-camera-browser' },
                { title: 'How to enable microphone in Chrome', href: '/guides/how-to-enable-microphone-chrome' },
                { title: 'Webcam not working', href: '/guides/webcam-not-working' },
                { title: 'Microphone not working', href: '/guides/microphone-not-working' }
              ]}
            />
          </article>

          <HelpfulWidget />
        </div>
      </div>
    </>
  )
}
