import { Metadata } from 'next'
import { generateMetadata as genMeta } from '@/lib/seo/metadata'
import JsonLdScript from '@/components/JsonLdScript'
import { generateWebSiteSchema, generateOrganizationSchema } from '@/lib/seo/jsonLd'
import { getTranslation, getLocalizedPath, type Locale } from '@/i18n/getTranslation'
import Link from 'next/link'
import { Camera, Mic, Keyboard, Monitor, Video, CheckCircle2 } from 'lucide-react'

export const revalidate = 86400 // ISR: Revalidate every 24 hours

const locale: Locale = 'en' // Root page is English
const t = getTranslation(locale)

export const metadata: Metadata = genMeta({
  title: t.home_title,
  description: t.home_description,
  path: '/',
  locale: 'en',
  keywords: [
    'online webcam test',
    'online microphone test',
    'online mic test',
    'online keyboard test',
    'dead pixel test',
    'screen test',
    'device check',
    'meeting check',
    'audio test online',
    'camera test',
    'hardware test',
    'device diagnostics'
  ]
})

export default function Home() {
  const locale: Locale = 'en'
  const t = getTranslation(locale)
  
  const tools = [
    {
      name: t.webcam_test,
      path: getLocalizedPath('/webcam', locale),
      description: 'Test your camera resolution, frame rate, and framing. Perfect for Zoom, Teams, and Google Meet.',
      icon: <Camera size={32} />,
      color: 'blue'
    },
    {
      name: t.microphone_test,
      path: getLocalizedPath('/mic', locale),
      description: 'Check mic input levels, audio quality, and record playback. Verify your microphone works perfectly.',
      icon: <Mic size={32} />,
      color: 'green'
    },
    {
      name: t.keyboard_test,
      path: getLocalizedPath('/keyboard', locale),
      description: 'Test all keys, detect stuck keys, and check for keyboard ghosting. Essential for gaming and work.',
      icon: <Keyboard size={32} />,
      color: 'purple'
    },
    {
      name: t.screen_test,
      path: getLocalizedPath('/screen', locale),
      description: 'Check for dead pixels, stuck pixels, and color accuracy. Test monitor quality instantly.',
      icon: <Monitor size={32} />,
      color: 'orange'
    },
    {
      name: t.meeting_check,
      path: getLocalizedPath('/meeting-check', locale),
      description: 'Test network connectivity, camera, and microphone before video calls. Ensure everything works.',
      icon: <Video size={32} />,
      color: 'red'
    }
  ]

  const features = [
    '100% Free - No signup required',
    'Works in any modern browser',
    'All tests run locally - complete privacy',
    'Instant results - no waiting',
    'No software installation needed',
    'Mobile-friendly testing tools'
  ]

  const websiteSchema = generateWebSiteSchema()
  const organizationSchema = generateOrganizationSchema()

  return (
    <>
      <JsonLdScript data={websiteSchema} />
      <JsonLdScript data={organizationSchema} />
      
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-16 max-w-7xl">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              DeviceCheck.io
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Free Online Device Testing Tools - Test Your Webcam, Microphone, Keyboard, Screen & More
            </p>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-8">
              Instantly test your devices in your browser. No downloads, no signups, complete privacy. Perfect for preparing for video calls, troubleshooting hardware, or checking device quality.
            </p>
          </div>

          {/* Tools Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {tools.map((tool) => (
              <Link
                key={tool.path}
                href={tool.path}
                className="group bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all border border-gray-200 hover:border-blue-300"
              >
                <div className={`w-16 h-16 rounded-lg bg-${tool.color}-100 text-${tool.color}-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  {tool.icon}
                </div>
                <h2 className="text-2xl font-semibold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">
                  {tool.name}
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {tool.description}
                </p>
              </Link>
            ))}
          </div>

          {/* Features */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 md:p-12 mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Use DeviceCheck.io?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="text-green-600 shrink-0 mt-1" size={24} />
                  <p className="text-gray-700 font-medium">{feature}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Comprehensive SEO Content */}
          <article className="prose prose-slate max-w-none bg-white p-8 md:p-12 rounded-2xl border border-gray-200">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Free Online Device Testing Tools</h2>
            
            <p className="text-lg text-gray-700 mb-6">
              DeviceCheck.io provides comprehensive, free online tools to test your devices directly in your web browser. Whether you're preparing for an important video call, troubleshooting hardware issues, or checking device quality, our instant testing tools help ensure everything works perfectly—no software installation or account creation required.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Online Webcam Test</h3>
            <p className="text-gray-700 mb-4">
              Our <Link href={getLocalizedPath("/webcam", locale)} className="text-blue-600 hover:text-blue-800 font-semibold">online webcam test</Link> helps you verify your camera works correctly before video calls on Zoom, Microsoft Teams, Google Meet, or any video conferencing platform. The tool automatically detects your camera's resolution, provides a live preview with optional grid overlay for better framing, and includes mirror toggle functionality. Test your webcam instantly to avoid embarrassing moments during important calls.
            </p>
            <p className="text-gray-700 mb-6">
              Common webcam issues include black screens (usually permission-related), low resolution, poor lighting, and incorrect framing. Our webcam test helps identify these issues quickly, with step-by-step troubleshooting guides for fixing camera problems. All testing happens locally in your browser—no video data is sent to our servers or stored.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Online Microphone Test</h3>
            <p className="text-gray-700 mb-4">
              Test your microphone instantly with our <Link href={getLocalizedPath("/mic", locale)} className="text-blue-600 hover:text-blue-800 font-semibold">free online microphone test</Link>. The tool provides real-time volume level visualization, allows you to record and play back a 5-second test clip, and includes speaker/headset testing functionality. Perfect for verifying your microphone works before important calls, podcast recordings, or live streams.
            </p>
            <p className="text-gray-700 mb-6">
              Microphone problems often include no sound (permission or mute issues), low volume, echo or feedback, and wrong input device selection. Our microphone test helps identify these issues with clear visual feedback and comprehensive troubleshooting guides. All audio processing happens locally—your voice is never sent to our servers.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Online Keyboard Test</h3>
            <p className="text-gray-700 mb-4">
              Our <Link href={getLocalizedPath("/keyboard", locale)} className="text-blue-600 hover:text-blue-800 font-semibold">keyboard test tool</Link> helps you verify all keys work correctly, detect stuck or non-responsive keys, and test for keyboard ghosting (when multiple simultaneous key presses don't register). Essential for gamers, typists, and anyone who relies on their keyboard for work or play.
            </p>
            <p className="text-gray-700 mb-6">
              Keyboard issues include stuck keys (often caused by debris or spills), non-responsive keys (hardware or driver problems), keyboard ghosting (common in cheaper keyboards), and wrong characters appearing (layout or modifier key issues). Our keyboard test provides instant visual feedback for every key press, making it easy to identify problems.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Dead Pixel Test & Screen Test</h3>
            <p className="text-gray-700 mb-4">
              Test your screen for dead pixels, stuck pixels, and color accuracy with our <Link href={getLocalizedPath("/screen", locale)} className="text-blue-600 hover:text-blue-800 font-semibold">free screen test tool</Link>. The tool includes fullscreen mode for accurate testing, multiple test modes (solid colors, gradients, grid, pixel check), and auto-cycling through colors. Perfect for checking monitor quality before purchase or troubleshooting display issues.
            </p>
            <p className="text-gray-700 mb-6">
              Screen issues include dead pixels (permanently black), stuck pixels (permanently lit in one color), backlight bleeding, color uniformity problems, and color accuracy issues. Our screen test helps identify these problems with comprehensive testing modes and clear instructions for documenting issues for warranty claims.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Meeting Check - Video Call Preparation</h3>
            <p className="text-gray-700 mb-4">
              Our <Link href={getLocalizedPath("/meeting-check", locale)} className="text-blue-600 hover:text-blue-800 font-semibold">meeting check tool</Link> tests your entire setup before video calls. It checks network connectivity (ping and jitter), camera access, and microphone functionality—everything you need for successful video calls on Zoom, Teams, Google Meet, and other platforms.
            </p>
            <p className="text-gray-700 mb-6">
              Network issues can ruin video calls. High ping causes delay, high jitter causes choppy video and audio, and camera/microphone permission problems prevent participation. Our meeting check identifies these issues before you join calls, with clear guidance on fixing problems and optimizing your setup.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Privacy & Security</h3>
            <p className="text-gray-700 mb-4">
              Your privacy is our top priority. All device testing happens entirely in your browser:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>No video or audio data is sent to our servers</li>
              <li>No recordings are stored or saved</li>
              <li>No cookies or tracking for device access</li>
              <li>All processing happens locally on your device</li>
              <li>Camera and microphone access stops when you close the page</li>
            </ul>
            <p className="text-gray-700 mb-6">
              We don't require accounts, signups, or personal information. Simply visit our tools and start testing. Everything is designed to work instantly with maximum privacy protection.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Browser Compatibility</h3>
            <p className="text-gray-700 mb-4">
              Our device testing tools work on all modern browsers that support the Web APIs we use:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Google Chrome:</strong> Full support, recommended for best experience</li>
              <li><strong>Mozilla Firefox:</strong> Full support for all tools</li>
              <li><strong>Microsoft Edge:</strong> Full support, excellent performance</li>
              <li><strong>Apple Safari:</strong> Full support on macOS and iOS</li>
              <li><strong>Opera:</strong> Full support for all testing tools</li>
            </ul>
            <p className="text-gray-700 mb-6">
              All tools work on desktop and mobile devices. Mobile browsers may have different permission prompts, but functionality remains the same.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Common Use Cases</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Before Video Calls:</strong> Test webcam, microphone, and network before important Zoom, Teams, or Meet calls</li>
              <li><strong>Hardware Troubleshooting:</strong> Identify device problems quickly without installing diagnostic software</li>
              <li><strong>Quality Checking:</strong> Verify monitor quality, keyboard functionality, and device performance</li>
              <li><strong>Gaming Setup:</strong> Test keyboard for ghosting and ensure all keys work for gaming</li>
              <li><strong>Professional Setup:</strong> Verify equipment works before important presentations or recordings</li>
              <li><strong>Device Purchase:</strong> Test new devices immediately after purchase to identify defects early</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Getting Started</h3>
            <p className="text-gray-700 mb-4">
              Using DeviceCheck.io is simple:
            </p>
            <ol className="list-decimal pl-6 space-y-2 text-gray-700 mb-6">
              <li>Choose the device test you need from our homepage</li>
              <li>Click "Run Test" or allow permissions when prompted</li>
              <li>Follow the on-screen instructions</li>
              <li>Review results and troubleshooting guides if issues are found</li>
            </ol>
            <p className="text-gray-700 mb-6">
              Most tests complete in seconds. No waiting, no loading, instant results. If you encounter any issues, comprehensive troubleshooting guides are available on each test page.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Why Choose DeviceCheck.io?</h3>
            <p className="text-gray-700 mb-4">
              DeviceCheck.io stands out from other device testing tools:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Completely Free:</strong> All tools are free forever, no premium tiers or hidden costs</li>
              <li><strong>No Signup Required:</strong> Start testing immediately without creating accounts</li>
              <li><strong>Privacy First:</strong> All processing happens locally—we never see your data</li>
              <li><strong>Comprehensive Guides:</strong> Detailed troubleshooting and how-to guides on every page</li>
              <li><strong>Mobile Friendly:</strong> Works perfectly on phones, tablets, and desktops</li>
              <li><strong>Fast & Reliable:</strong> Optimized for speed and performance</li>
              <li><strong>Regular Updates:</strong> Tools are continuously improved based on user feedback</li>
            </ul>

            <p className="text-lg text-gray-700 mt-8">
              Ready to test your devices? Choose a tool above to get started. Whether you need to test your webcam for a video call, check your keyboard for gaming, or verify your screen quality, DeviceCheck.io provides instant, free, and private device testing tools for all your needs.
            </p>
          </article>
        </div>
      </div>
    </>
  )
}
