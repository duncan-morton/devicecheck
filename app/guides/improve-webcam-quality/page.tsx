import { Metadata } from 'next'
import { generateMetadata as genMeta } from '@/lib/seo/metadata'
import Breadcrumbs from '@/components/Breadcrumbs'

export const revalidate = 86400

export const metadata: Metadata = genMeta({
  title: 'Improve Webcam Quality',
  description: 'Quick, practical tips to make your webcam look sharper and clearer in Zoom, Teams, and other video apps.',
  path: '/guides/improve-webcam-quality',
})

export default function ImproveWebcamQualityPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Breadcrumbs
          items={[
            { name: 'Guides', path: '/guides' },
            { name: 'Improve Webcam Quality', path: '/guides/improve-webcam-quality' },
          ]}
        />

        <article className="prose prose-slate max-w-none bg-white p-8 md:p-12 rounded-2xl border border-gray-200">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Improve Webcam Quality</h1>
          <p className="text-lg text-gray-700 mb-6">
            If your webcam looks soft, noisy, or low-resolution, you can often fix it with a few quick checks. Start
            with lighting and device selection before assuming the camera is the problem.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-6 mb-3">1. Pick the right camera in your meeting app</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
            <li>Open the video settings in Zoom, Teams, Meet, or your chosen app.</li>
            <li>Look for a camera dropdown and select the device you expect to use.</li>
            <li>If you have multiple cameras, try each one and compare quality.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-6 mb-3">2. Close apps that might be limiting resolution</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
            <li>Quit background apps that use the camera (Zoom, Teams, Discord, OBS, browser tabs).</li>
            <li>Re-open only the app you actually want to use for the call.</li>
            <li>Re-run the webcam test to see if resolution improves.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-6 mb-3">3. Improve your lighting</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
            <li>Place a soft light source in front of you, not behind you.</li>
            <li>Avoid strong backlight from windows directly behind you.</li>
            <li>Even a basic desk lamp angled toward a wall can help.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-6 mb-3">4. Use native resolution where possible</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
            <li>In your meeting app, check for HD or 1080p options and enable them if available.</li>
            <li>Make sure your internet connection is stable; some apps lower quality on slow links.</li>
            <li>If you use a USB hub, try plugging the webcam directly into your computer.</li>
          </ul>

          <p className="text-gray-700 mt-6">
            After making these changes, return to the{' '}
            <a href="/webcam" className="text-blue-600 hover:text-blue-800 font-semibold">
              webcam test
            </a>{' '}
            to verify that your resolution and image quality have improved.
          </p>
        </article>
      </div>
    </div>
  )
}

