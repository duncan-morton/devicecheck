import { Metadata } from 'next'
import { generateMetadata as genMeta } from '@/lib/seo/metadata'
import JsonLdScript from '@/components/JsonLdScript'
import { generateWebApplicationSchema, generateBreadcrumbListSchema, generateFAQPageSchema } from '@/lib/seo/jsonLd'
import WebcamTool from '@/components/WebcamTool'
import Breadcrumbs from '@/components/Breadcrumbs'
import RelatedTools from '@/components/RelatedTools'
import Link from 'next/link'

export const revalidate = 86400 // ISR: Revalidate every 24 hours

export const metadata: Metadata = genMeta({
  title: 'Online Webcam Test – Instant Browser Device Check',
  description: 'Test your webcam online instantly. Check camera resolution, frame rate, lighting, and framing with our free browser-based webcam test tool. Perfect for Zoom, Teams, and Google Meet.',
  path: '/webcam',
  keywords: [
    'online webcam test',
    'webcam test',
    'camera test online',
    'test webcam for zoom',
    'webcam not working',
    'camera test browser',
    'webcam resolution test',
    'video call test',
    'meeting camera test'
  ]
})

const faqs = [
  {
    question: 'How do I test my webcam online?',
    answer: 'Click "Allow" when prompted for camera access, and your webcam feed will appear instantly. Our tool automatically detects your camera resolution and provides a live preview with optional grid overlay for better framing.'
  },
  {
    question: 'Why is my webcam showing a black screen?',
    answer: 'A black screen usually means camera permissions are denied, another app is using the camera, or there\'s a physical privacy cover. Check browser permissions in the address bar lock icon, close other apps using the camera, and ensure no physical cover is blocking the lens.'
  },
  {
    question: 'Can I test my webcam for Zoom or Teams?',
    answer: 'Yes! Our webcam test works in any browser and helps you verify your camera works before joining Zoom, Microsoft Teams, Google Meet, or any video conferencing platform. If it works here, it will work in those apps.'
  },
  {
    question: 'What webcam resolution should I use?',
    answer: 'Most modern webcams support 720p (1280x720) or 1080p (1920x1080). For video calls, 720p is usually sufficient and uses less bandwidth. For professional recordings, 1080p or 4K provides better quality.'
  },
  {
    question: 'Is my webcam data secure?',
    answer: 'Yes! All webcam testing happens entirely in your browser. No video data is sent to our servers, stored, or shared. Everything is processed locally on your device for complete privacy.'
  }
]

export default function WebcamTestPage() {
  const webAppSchema = generateWebApplicationSchema(
    'Online Webcam Test',
    'Test your webcam online instantly. Check camera resolution, frame rate, lighting, and framing.',
    '/webcam'
  )

  const breadcrumbs = generateBreadcrumbListSchema([
    { name: 'Home', path: '/' },
    { name: 'Webcam Test', path: '/webcam' }
  ])

  const faqSchema = generateFAQPageSchema(faqs)

  return (
    <>
      <JsonLdScript data={webAppSchema} />
      <JsonLdScript data={breadcrumbs} />
      <JsonLdScript data={faqSchema} />
      
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8 max-w-6xl">
          <Breadcrumbs items={[{ name: 'Webcam Test', path: '/webcam' }]} />
          
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Online Webcam Test – Instant Browser Device Check
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl">
              Test your webcam instantly with our free online tool. Check resolution, frame rate, lighting, and perfect your framing before important video calls on Zoom, Teams, or Google Meet.
            </p>
          </div>

          <div className="mb-8">
            <Link 
              href="#test"
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
            >
              Run Webcam Test →
            </Link>
          </div>

          <div id="test" className="scroll-mt-8">
            <WebcamTool />
          </div>

          <RelatedTools currentPath="/webcam" />

          {/* Comprehensive SEO Content */}
          <article className="prose prose-slate max-w-none bg-white p-8 md:p-12 rounded-2xl border border-gray-200 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Test Your Webcam Online</h2>
            
            <p className="text-lg text-gray-700 mb-6">
              Testing your webcam before an important video call or recording is essential. Our <strong>free online webcam test</strong> provides instant feedback on your camera's functionality, resolution, and quality—all without installing any software. Whether you're preparing for a Zoom meeting, Microsoft Teams call, or Google Meet session, this tool helps ensure your camera works perfectly.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Why Test Your Webcam Online?</h3>
            <p className="text-gray-700 mb-4">
              Many users discover camera issues only when joining a video call, leading to embarrassing moments and wasted time. By testing your webcam beforehand, you can:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Verify your camera is detected and working correctly</li>
              <li>Check your camera's resolution and frame rate</li>
              <li>Ensure proper lighting and framing</li>
              <li>Test camera permissions in your browser</li>
              <li>Identify hardware or driver issues early</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Step-by-Step Guide: Testing Your Webcam</h3>
            <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-6">
              <li>
                <strong>Grant Camera Permissions:</strong> When you first visit our webcam test page, your browser will prompt you to allow camera access. Click "Allow" to proceed. If you don't see a prompt, check your browser's address bar for a camera icon and click it to enable permissions.
              </li>
              <li>
                <strong>View Your Live Feed:</strong> Once permissions are granted, your webcam feed will appear instantly in the preview window. You should see yourself in real-time.
              </li>
              <li>
                <strong>Check Resolution:</strong> Look at the resolution badge displayed on the page. Common resolutions include 720p (1280x720), 1080p (1920x1080), or 4K (3840x2160). Higher resolutions provide better quality but require more bandwidth.
              </li>
              <li>
                <strong>Use Grid Overlay:</strong> Hover over the video preview and click the grid icon to enable the rule-of-thirds grid. Position your eyes along the top horizontal line for professional framing.
              </li>
              <li>
                <strong>Toggle Mirror Mode:</strong> Use the mirror toggle to see yourself as others see you (unmirrored) or as you see yourself in a mirror (mirrored). Choose what feels more natural.
              </li>
            </ol>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Common Webcam Issues and Solutions</h3>

            <h4 className="text-xl font-bold text-gray-900 mt-6 mb-3">Webcam Not Working or Showing Black Screen</h4>
            <p className="text-gray-700 mb-4">
              A black screen is one of the most common webcam issues. Here's how to troubleshoot:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>
                <strong>Check Browser Permissions:</strong> Click the lock icon in your browser's address bar and ensure "Camera" is set to "Allow". In Chrome, you can also go to Settings → Privacy and Security → Site Settings → Camera to manage permissions.
              </li>
              <li>
                <strong>Close Other Applications:</strong> Only one application can access your camera at a time. Close Zoom, Teams, Skype, or any other apps that might be using the camera, then refresh this page.
              </li>
              <li>
                <strong>Check Physical Privacy Covers:</strong> Many modern laptops have sliding privacy covers over the camera. Ensure the cover is open and not blocking the lens.
              </li>
              <li>
                <strong>Restart Your Browser:</strong> Sometimes browser processes can get stuck. Close all browser windows completely and reopen.
              </li>
              <li>
                <strong>Check System Settings:</strong> On Windows, go to Settings → Privacy → Camera and ensure "Allow apps to access your camera" is enabled. On Mac, go to System Preferences → Security & Privacy → Camera.
              </li>
            </ul>

            <h4 className="text-xl font-bold text-gray-900 mt-6 mb-3">Webcam Not Detected</h4>
            <p className="text-gray-700 mb-4">
              If your browser doesn't detect your webcam at all:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Check USB connections if using an external webcam</li>
              <li>Try unplugging and replugging USB webcams</li>
              <li>Update your camera drivers (Windows Device Manager or Mac System Preferences)</li>
              <li>Test the webcam in another browser (Chrome, Firefox, Edge, Safari)</li>
              <li>Check if the webcam works in other applications like the Camera app</li>
            </ul>

            <h4 className="text-xl font-bold text-gray-900 mt-6 mb-3">Poor Video Quality or Low Resolution</h4>
            <p className="text-gray-700 mb-4">
              If your webcam quality seems low:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Clean your camera lens with a microfiber cloth</li>
              <li>Improve lighting—position a light source in front of you, not behind</li>
              <li>Check if your camera supports higher resolutions in its settings</li>
              <li>Ensure you're not using a virtual camera or low-quality filter</li>
              <li>Update camera drivers for better performance</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Testing Webcam for Video Conferencing Platforms</h3>

            <h4 className="text-xl font-bold text-gray-900 mt-6 mb-3">Zoom Webcam Test</h4>
            <p className="text-gray-700 mb-4">
              Before joining a Zoom meeting, test your webcam here first. If our tool works, your webcam will work in Zoom. To test within Zoom itself, go to Settings → Video and you'll see a preview. However, our browser-based test is faster and doesn't require the Zoom app.
            </p>

            <h4 className="text-xl font-bold text-gray-900 mt-6 mb-3">Microsoft Teams Camera Test</h4>
            <p className="text-gray-700 mb-4">
              Teams users can verify their camera works by testing here before joining a meeting. In Teams, you can also test by going to Settings → Devices → Camera, but our online test works from any browser without installing Teams.
            </p>

            <h4 className="text-xl font-bold text-gray-900 mt-6 mb-3">Google Meet Camera Check</h4>
            <p className="text-gray-700 mb-4">
              Google Meet relies on your browser's camera access. If our test works, Meet will work too. You can also test in Meet by joining a test meeting and checking your video preview before others join.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Understanding Webcam Resolution</h3>
            <p className="text-gray-700 mb-4">
              Webcam resolution determines the clarity and detail of your video feed:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>
                <strong>480p (640x480):</strong> Standard definition, suitable for basic video calls but may appear pixelated on large screens.
              </li>
              <li>
                <strong>720p HD (1280x720):</strong> High definition, the standard for most built-in laptop cameras. Provides good quality for video calls with reasonable bandwidth usage.
              </li>
              <li>
                <strong>1080p Full HD (1920x1080):</strong> Full high definition, common in external webcams. Excellent quality for professional calls and recordings.
              </li>
              <li>
                <strong>4K UHD (3840x2160):</strong> Ultra-high definition, found in premium webcams. Requires significant bandwidth and processing power but provides exceptional quality.
              </li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Privacy and Security</h3>
            <p className="text-gray-700 mb-4">
              Your privacy is our priority. Our webcam test processes all video data locally in your browser. We do not:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Record or store any video footage</li>
              <li>Send video data to our servers</li>
              <li>Share your camera feed with third parties</li>
              <li>Use cookies or tracking for camera access</li>
            </ul>
            <p className="text-gray-700 mb-6">
              Everything happens in real-time on your device. Once you close the page, all camera access stops immediately.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Browser Compatibility</h3>
            <p className="text-gray-700 mb-4">
              Our webcam test works on all modern browsers that support the MediaDevices API:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Google Chrome:</strong> Full support, recommended for best experience</li>
              <li><strong>Mozilla Firefox:</strong> Full support</li>
              <li><strong>Microsoft Edge:</strong> Full support</li>
              <li><strong>Apple Safari:</strong> Full support on macOS and iOS</li>
              <li><strong>Opera:</strong> Full support</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Troubleshooting Guides</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><Link href="/guides/webcam-not-working" className="text-blue-600 hover:text-blue-800">Webcam not working</Link></li>
              <li><Link href="/guides/webcam-not-detected-chrome" className="text-blue-600 hover:text-blue-800">Webcam not detected in Chrome</Link></li>
              <li><Link href="/guides/webcam-test-zoom" className="text-blue-600 hover:text-blue-800">Test webcam for Zoom</Link></li>
              <li><Link href="/guides/webcam-too-dark-grainy" className="text-blue-600 hover:text-blue-800">Webcam too dark or grainy</Link></li>
              <li><Link href="/guides/webcam-lagging-low-fps" className="text-blue-600 hover:text-blue-800">Webcam lagging or low FPS</Link></li>
              <li><Link href="/guides/external-webcam-not-recognised" className="text-blue-600 hover:text-blue-800">External webcam not recognised</Link></li>
              <li><Link href="/guides/how-to-enable-camera-browser" className="text-blue-600 hover:text-blue-800">Enable camera in browser</Link></li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Frequently Asked Questions</h3>
            <div className="space-y-6 mt-6">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-200 pb-6 last:border-0">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{faq.question}</h4>
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Tips for Better Video Calls</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Lighting:</strong> Position your primary light source in front of you, not behind. Natural window light works great, or use a desk lamp.</li>
              <li><strong>Camera Height:</strong> Raise your laptop or webcam to eye level. Stack books under your laptop if needed. This creates a more professional, flattering angle.</li>
              <li><strong>Background:</strong> Use a clean, uncluttered background. Virtual backgrounds work, but a real tidy space looks more professional.</li>
              <li><strong>Eye Contact:</strong> Look at the camera lens, not the screen, when speaking. This creates the illusion of direct eye contact.</li>
              <li><strong>Frame Yourself:</strong> Use the grid overlay to position yourself in the center third of the frame, with your eyes on the top horizontal line.</li>
            </ul>

            <p className="text-lg text-gray-700 mt-8">
              Ready to test your webcam? <Link href="#test" className="text-blue-600 hover:text-blue-800 font-semibold">Scroll up and click "Run Webcam Test"</Link> to get started. The entire process takes just seconds, and you'll have complete confidence that your camera is ready for your next important video call.
            </p>
          </article>
        </div>
      </div>
    </>
  )
}

