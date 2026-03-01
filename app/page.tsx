import { Metadata } from 'next'
import { generateMetadata as genMeta } from '@/lib/seo/metadata'
import JsonLdScript from '@/components/JsonLdScript'
import { generateWebSiteSchema, generateOrganizationSchema } from '@/lib/seo/jsonLd'
import { getTranslation, type Locale } from '@/i18n/getTranslation'
import { localizePathIfSupported } from '@/lib/i18n/routeLocaleSupport'
import Link from 'next/link'
import { Camera, Mic, Keyboard, Monitor, Video, ArrowRight } from 'lucide-react'

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
  
  const platformHubs = [
    { name: 'Zoom', path: localizePathIfSupported('/hubs/zoom-issues', locale), description: 'Fix Zoom mic and camera issues for meetings.' },
    { name: 'Teams', path: localizePathIfSupported('/hubs/teams-issues', locale), description: 'Fix Microsoft Teams audio and video problems.' },
    { name: 'Windows', path: localizePathIfSupported('/hubs/windows-device-issues', locale), description: 'Fix Windows 10/11 device and permission issues.' },
    { name: 'Mac', path: localizePathIfSupported('/hubs/mac-device-issues', locale), description: 'Fix macOS and MacBook device issues.' },
    { name: 'Chrome', path: localizePathIfSupported('/hubs/chrome-permissions-issues', locale), description: 'Unblock camera and mic in Chrome and browsers.' },
    { name: 'Discord', path: localizePathIfSupported('/hubs/discord-issues', locale), description: 'Fix Discord voice and video not working.' },
    { name: 'Laptop', path: localizePathIfSupported('/hubs/laptop-device-troubleshooting', locale), description: 'Laptop mic, webcam, and keyboard fixes.' },
  ]

  const tools = [
    {
      name: t.webcam_test,
      path: localizePathIfSupported('/webcam', locale),
      description: 'Test your camera resolution, frame rate, and framing. Perfect for Zoom, Teams, and Google Meet.',
      icon: <Camera size={32} />,
      color: 'blue'
    },
    {
      name: t.microphone_test,
      path: localizePathIfSupported('/mic', locale),
      description: 'Check mic input levels, audio quality, and record playback. Verify your microphone works perfectly.',
      icon: <Mic size={32} />,
      color: 'green'
    },
    {
      name: t.keyboard_test,
      path: localizePathIfSupported('/keyboard', locale),
      description: 'Test all keys, detect stuck keys, and check for keyboard ghosting. Essential for gaming and work.',
      icon: <Keyboard size={32} />,
      color: 'purple'
    },
    {
      name: t.screen_test,
      path: localizePathIfSupported('/screen', locale),
      description: 'Check for dead pixels, stuck pixels, and color accuracy. Test monitor quality instantly.',
      icon: <Monitor size={32} />,
      color: 'orange'
    },
    {
      name: t.meeting_check,
      path: localizePathIfSupported('/meeting-check', locale),
      description: 'Test network connectivity, camera, and microphone before video calls. Ensure everything works.',
      icon: <Video size={32} />,
      color: 'red'
    }
  ]

  const websiteSchema = generateWebSiteSchema()
  const organizationSchema = generateOrganizationSchema()

  return (
    <>
      <JsonLdScript data={websiteSchema} />
      <JsonLdScript data={organizationSchema} />
      
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8 max-w-6xl">
          {/* 1) H1 — problem-first */}
          <div className="mb-4">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Fix Webcam, Microphone, Keyboard &amp; Screen Issues Instantly
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl">
              Run free, browser-based diagnostics to find and fix device problems before your next call or session.
            </p>
          </div>

          {/* 2) Primary Action Row — single dominant CTA */}
          <div className="mb-6">
            <Link
              href={localizePathIfSupported('/meeting-check', locale)}
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Run Full Meeting Check
            </Link>
            <p className="mt-2 text-sm text-gray-500">
              Or <Link href="#tools" className="text-blue-600 hover:text-blue-800">test individual devices</Link>
            </p>
          </div>

          {/* Fix problems by platform — hub cards */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-3">Fix problems by platform</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {platformHubs.map((hub) => (
                <Link
                  key={hub.path}
                  href={hub.path}
                  className="group bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-sm transition-all flex items-start justify-between gap-3"
                >
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">{hub.name}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{hub.description}</p>
                  </div>
                  <ArrowRight size={18} className="text-slate-400 group-hover:text-blue-600 shrink-0 mt-0.5" />
                </Link>
              ))}
            </div>
          </div>

          {/* 3) Supporting — tool grid */}
          <div id="tools" className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8 scroll-mt-8">
            {tools.map((tool) => (
              <Link
                key={tool.path}
                href={tool.path}
                className="group bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-sm transition-all"
              >
                <div className={`w-12 h-12 rounded-lg bg-${tool.color}-100 text-${tool.color}-600 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform`}>
                  {tool.icon}
                </div>
                <h2 className="text-lg font-semibold mb-1 text-gray-900 group-hover:text-blue-600 transition-colors">
                  {tool.name}
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {tool.description}
                </p>
              </Link>
            ))}
          </div>

          {/* 4) Authority Block — how/why it works */}
          <div className="rounded-xl border border-gray-200 bg-white p-4 md:p-6 mb-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-2">How it works</h2>
            <p className="text-gray-700 text-sm leading-relaxed">
              All diagnostics run in your browser using standard device APIs. No installs, no sign-up. Your camera, microphone, keyboard, and screen are tested locally—nothing is sent to our servers. If a test passes here, your device will work in Zoom, Teams, Meet, and other apps that use the same permissions.
            </p>
          </div>

          {/* 5) Deep Content Section */}
          <article className="prose prose-slate max-w-none bg-white p-8 md:p-12 rounded-2xl border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Device testing by type</h2>
            
            <p className="text-lg text-gray-700 mb-6">
              DeviceCheck.io provides comprehensive, free online tools to test your devices directly in your web browser. Whether you're preparing for an important video call, troubleshooting hardware issues, or checking device quality, our instant testing tools help ensure everything works perfectly—no software installation or account creation required.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Online Webcam Test</h3>
            <p className="text-gray-700 mb-4">
              Our <Link href={localizePathIfSupported("/webcam", locale)} className="text-blue-600 hover:text-blue-800 font-semibold">online webcam test</Link> helps you verify your camera works correctly before video calls on Zoom, Microsoft Teams, Google Meet, or any video conferencing platform. The tool automatically detects your camera's resolution, provides a live preview with optional grid overlay for better framing, and includes mirror toggle functionality. Test your webcam instantly to avoid embarrassing moments during important calls.
            </p>
            <p className="text-gray-700 mb-6">
              Common webcam issues include black screens (usually permission-related), low resolution, poor lighting, and incorrect framing. Our webcam test helps identify these issues quickly, with step-by-step troubleshooting guides for fixing camera problems. All testing happens locally in your browser—no video data is sent to our servers or stored.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Online Microphone Test</h3>
            <p className="text-gray-700 mb-4">
              Test your microphone instantly with our <Link href={localizePathIfSupported("/mic", locale)} className="text-blue-600 hover:text-blue-800 font-semibold">free online microphone test</Link>. The tool provides real-time volume level visualization, allows you to record and play back a 5-second test clip, and includes speaker/headset testing functionality. Perfect for verifying your microphone works before important calls, podcast recordings, or live streams.
            </p>
            <p className="text-gray-700 mb-6">
              Microphone problems often include no sound (permission or mute issues), low volume, echo or feedback, and wrong input device selection. Our microphone test helps identify these issues with clear visual feedback and comprehensive troubleshooting guides. All audio processing happens locally—your voice is never sent to our servers.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Online Keyboard Test</h3>
            <p className="text-gray-700 mb-4">
              Our <Link href={localizePathIfSupported("/keyboard", locale)} className="text-blue-600 hover:text-blue-800 font-semibold">keyboard test tool</Link> helps you verify all keys work correctly, detect stuck or non-responsive keys, and test for keyboard ghosting (when multiple simultaneous key presses don't register). Essential for gamers, typists, and anyone who relies on their keyboard for work or play.
            </p>
            <p className="text-gray-700 mb-6">
              Keyboard issues include stuck keys (often caused by debris or spills), non-responsive keys (hardware or driver problems), keyboard ghosting (common in cheaper keyboards), and wrong characters appearing (layout or modifier key issues). Our keyboard test provides instant visual feedback for every key press, making it easy to identify problems.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Dead Pixel Test & Screen Test</h3>
            <p className="text-gray-700 mb-4">
              Test your screen for dead pixels, stuck pixels, and color accuracy with our <Link href={localizePathIfSupported("/screen", locale)} className="text-blue-600 hover:text-blue-800 font-semibold">free screen test tool</Link>. The tool includes fullscreen mode for accurate testing, multiple test modes (solid colors, gradients, grid, pixel check), and auto-cycling through colors. Perfect for checking monitor quality before purchase or troubleshooting display issues.
            </p>
            <p className="text-gray-700 mb-6">
              Screen issues include dead pixels (permanently black), stuck pixels (permanently lit in one color), backlight bleeding, color uniformity problems, and color accuracy issues. Our screen test helps identify these problems with comprehensive testing modes and clear instructions for documenting issues for warranty claims.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Meeting Check - Video Call Preparation</h3>
            <p className="text-gray-700 mb-4">
              Our <Link href={localizePathIfSupported("/meeting-check", locale)} className="text-blue-600 hover:text-blue-800 font-semibold">meeting check tool</Link> tests your entire setup before video calls. It checks network connectivity (ping and jitter), camera access, and microphone functionality—everything you need for successful video calls on Zoom, Teams, Google Meet, and other platforms.
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

            {/* 6) Soft Next Step */}
            <p className="text-gray-600 mt-8 pt-6 border-t border-gray-200">
              Run the <Link href={localizePathIfSupported('/meeting-check', locale)} className="text-blue-600 hover:text-blue-800 font-medium">full meeting check</Link> to verify your setup in one go, or pick a tool above to test a single device.
            </p>
          </article>
        </div>
      </div>
    </>
  )
}
