import { Metadata } from 'next'
import { generateMetadata as genMeta } from '@/lib/seo/metadata'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'

export const revalidate = 86400

export const metadata: Metadata = genMeta({
  title: 'Device Testing Guides & Tutorials',
  description: 'Comprehensive guides for testing and troubleshooting webcams, microphones, keyboards, screens, and more.',
  path: '/guides',
  keywords: ['device testing guides', 'troubleshooting guides', 'hardware guides']
})

const guideCategories = [
  {
    category: 'Microphone Guides',
    guides: [
      { slug: 'microphone-not-working', title: 'Microphone Not Working', description: 'Fix a microphone that is not working in your browser or apps' },
      { slug: 'microphone-too-quiet', title: 'Microphone Too Quiet', description: 'Increase microphone volume and improve audio levels' },
      { slug: 'microphone-static-crackling', title: 'Microphone Static or Crackling', description: 'Fix microphone static, crackling, or distortion' },
      { slug: 'microphone-test-zoom', title: 'Microphone Test for Zoom', description: 'Test your microphone before Zoom meetings' },
      { slug: 'microphone-test-microsoft-teams', title: 'Microphone Test for Microsoft Teams', description: 'Test your microphone before Teams meetings' },
      { slug: 'microphone-test-google-meet', title: 'Microphone Test for Google Meet', description: 'Test your microphone before Google Meet calls' },
      { slug: 'how-to-enable-microphone-chrome', title: 'How to Enable Microphone in Chrome', description: 'Enable microphone access in Chrome browser' },
      { slug: 'how-to-enable-microphone-firefox', title: 'How to Enable Microphone in Firefox', description: 'Enable microphone access in Firefox browser' },
      { slug: 'how-to-enable-microphone-safari', title: 'How to Enable Microphone in Safari', description: 'Enable microphone access in Safari browser' },
      { slug: 'how-to-enable-microphone-edge', title: 'How to Enable Microphone in Edge', description: 'Enable microphone access in Microsoft Edge' },
      { slug: 'microphone-not-detected-windows-10', title: 'Microphone Not Detected on Windows 10', description: 'Fix microphone not detected on Windows 10' },
      { slug: 'microphone-not-detected-windows-11', title: 'Microphone Not Detected on Windows 11', description: 'Fix microphone not detected on Windows 11' },
      { slug: 'mac-microphone-not-working', title: 'Mac Microphone Not Working', description: 'Fix microphone not working on Mac' },
      { slug: 'chromebook-microphone-not-working', title: 'Chromebook Microphone Not Working', description: 'Fix microphone not working on Chromebook' },
      { slug: 'iphone-microphone-test', title: 'iPhone Microphone Test', description: 'Test your iPhone microphone to verify it works' },
      { slug: 'android-microphone-test', title: 'Android Microphone Test', description: 'Test your Android microphone to verify it works' }
    ]
  },
  {
    category: 'Webcam Guides',
    guides: [
      { slug: 'webcam-not-working', title: 'Webcam Not Working', description: 'Fix a webcam that is not working in your browser or apps' },
      { slug: 'webcam-not-detected-chrome', title: 'Webcam Not Detected in Chrome', description: 'Fix webcam not detected in Chrome browser' },
      { slug: 'webcam-not-detected-mac', title: 'Webcam Not Detected on Mac', description: 'Fix webcam not detected on Mac' },
      { slug: 'how-to-enable-camera-browser', title: 'How to Enable Camera in Browser', description: 'Enable camera access in your browser' },
      { slug: 'webcam-test-zoom', title: 'Webcam Test for Zoom', description: 'Test your webcam before Zoom meetings' },
      { slug: 'webcam-test-microsoft-teams', title: 'Webcam Test for Microsoft Teams', description: 'Test your webcam before Teams meetings' },
      { slug: 'webcam-test-google-meet', title: 'Webcam Test for Google Meet', description: 'Test your webcam before Google Meet calls' },
      { slug: 'webcam-too-dark-grainy', title: 'Webcam Too Dark or Grainy', description: 'Fix webcam video that is too dark or grainy' },
      { slug: 'webcam-lagging-low-fps', title: 'Webcam Lagging or Low FPS', description: 'Fix webcam video that is lagging or has low frame rate' },
      { slug: 'external-webcam-not-recognised', title: 'External Webcam Not Recognised', description: 'Fix external webcam not being recognized' }
    ]
  },
  {
    category: 'Keyboard Guides',
    guides: [
      { slug: 'keyboard-not-working', title: 'Keyboard Not Working', description: 'Fix a keyboard that is not working' },
      { slug: 'keys-not-registering', title: 'Keys Not Registering', description: 'Fix keyboard keys that are not registering when pressed' },
      { slug: 'how-to-test-keyboard-windows', title: 'How to Test Keyboard on Windows', description: 'Test your keyboard on Windows to check all keys work' },
      { slug: 'how-to-test-keyboard-mac', title: 'How to Test Keyboard on Mac', description: 'Test your keyboard on Mac to check all keys work' },
      { slug: 'chromebook-keyboard-test', title: 'Chromebook Keyboard Test', description: 'Test your Chromebook keyboard to check all keys work' },
      { slug: 'sticky-repeating-keys', title: 'Sticky or Repeating Keys', description: 'Fix keyboard keys that stick or repeat when pressed' },
      { slug: 'mechanical-keyboard-switch-test', title: 'Mechanical Keyboard Switch Test', description: 'Test mechanical keyboard switches to verify they work' },
      { slug: 'keyboard-ghosting-explained', title: 'Keyboard Ghosting Explained', description: 'Learn what keyboard ghosting is and how to test for it' }
    ]
  },
  {
    category: 'Screen Guides',
    guides: [
      { slug: 'dead-pixel-test-guide', title: 'Dead Pixel Test Guide', description: 'Test your screen for dead pixels and stuck pixels' },
      { slug: 'how-to-fix-stuck-pixels', title: 'How to Fix Stuck Pixels', description: 'Fix stuck pixels on your screen using repair methods' },
      { slug: 'screen-flickering', title: 'Screen Flickering', description: 'Fix screen flickering issues on monitors and laptops' },
      { slug: 'screen-looks-washed-out', title: 'Screen Looks Washed Out', description: 'Fix a screen that looks washed out or faded' },
      { slug: 'colour-calibration-basics', title: 'Colour Calibration Basics', description: 'Learn the basics of screen color calibration' }
    ]
  }
]

export default function GuidesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <Breadcrumbs items={[{ name: 'Guides', path: '/guides' }]} />
        
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Device Testing Guides & Tutorials
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Comprehensive guides for testing and troubleshooting your devices. Learn how to fix common problems and optimize your setup.
          </p>
        </div>

        {guideCategories.map((category) => (
          <div key={category.category} className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{category.category}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {category.guides.map((guide) => (
                <Link
                  key={guide.slug}
                  href={`/guides/${guide.slug}`}
                  className="bg-white p-5 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all"
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-blue-600 transition-colors">
                    {guide.title}
                  </h3>
                  <p className="text-sm text-gray-600">{guide.description}</p>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
