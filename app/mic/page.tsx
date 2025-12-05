import { Metadata } from 'next'
import { generateMetadata as genMeta } from '@/lib/seo/metadata'
import JsonLdScript from '@/components/JsonLdScript'
import { generateWebApplicationSchema, generateBreadcrumbListSchema, generateFAQPageSchema } from '@/lib/seo/jsonLd'
import MicTool from '@/components/MicTool'
import Breadcrumbs from '@/components/Breadcrumbs'
import RelatedTools from '@/components/RelatedTools'
import Link from 'next/link'

export const revalidate = 86400 // ISR: Revalidate every 24 hours

export const metadata: Metadata = genMeta({
  title: 'Online Microphone Test – Free Mic Test Tool',
  description: 'Test your microphone online instantly. Check mic input levels, audio quality, and record playback with our free browser-based microphone test. Perfect for Zoom, Teams, and Google Meet.',
  path: '/mic',
  keywords: [
    'online microphone test',
    'online mic test',
    'microphone test',
    'mic test online',
    'test microphone for zoom',
    'microphone not working',
    'mic test browser',
    'audio test online',
    'microphone check'
  ]
})

const faqs = [
  {
    question: 'How do I test my microphone online?',
    answer: 'Click "Allow" when prompted for microphone access. Speak into your mic and watch the volume meter respond. You can record a 5-second test clip and play it back to verify audio quality.'
  },
  {
    question: 'Why is my microphone not working?',
    answer: 'Common causes include denied browser permissions, physical mute switches, wrong input device selected, or driver issues. Check browser permissions first, then verify system settings and ensure no other apps are using the microphone.'
  },
  {
    question: 'Can I test my microphone for Zoom or Teams?',
    answer: 'Yes! If our microphone test works, your mic will work in Zoom, Microsoft Teams, Google Meet, and other video conferencing platforms. Test here first to avoid issues during important calls.'
  },
  {
    question: 'Is my microphone data secure?',
    answer: 'Absolutely. All audio processing happens locally in your browser. No audio data is sent to our servers, recorded, stored, or shared with anyone. Your privacy is completely protected.'
  },
  {
    question: 'What should the volume meter show?',
    answer: 'The meter should show green/yellow bars when you speak normally. If it stays red or shows no activity, check your mic volume settings, ensure you\'re not muted, and verify the correct input device is selected.'
  }
]

export default function MicTestPage() {
  const webAppSchema = generateWebApplicationSchema(
    'Online Microphone Test',
    'Test your microphone online instantly. Check mic input levels, audio quality, and record playback.',
    '/mic'
  )

  const breadcrumbs = generateBreadcrumbListSchema([
    { name: 'Home', path: '/' },
    { name: 'Microphone Test', path: '/mic' }
  ])

  const faqSchema = generateFAQPageSchema(faqs)

  return (
    <>
      <JsonLdScript data={webAppSchema} />
      <JsonLdScript data={breadcrumbs} />
      <JsonLdScript data={faqSchema} />
      
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8 max-w-6xl">
          <Breadcrumbs items={[{ name: 'Microphone Test', path: '/mic' }]} />
          
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Online Microphone Test – Free Mic Test Tool
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl">
              Test your microphone instantly with our free online tool. Check input levels, verify audio quality, and ensure your mic works perfectly before important video calls or recordings.
            </p>
          </div>

          <div className="mb-8">
            <Link 
              href="#test"
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
            >
              Run Microphone Test →
            </Link>
          </div>

          <div id="test" className="scroll-mt-8">
            <MicTool />
          </div>

          <RelatedTools currentPath="/mic" />

          {/* Comprehensive SEO Content */}
          <article className="prose prose-slate max-w-none bg-white p-8 md:p-12 rounded-2xl border border-gray-200 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Test Your Microphone Online</h2>
            
            <p className="text-lg text-gray-700 mb-6">
              Testing your microphone before a video call, podcast recording, or live stream is crucial for professional audio quality. Our <strong>free online microphone test</strong> provides instant feedback on your mic's functionality, input levels, and audio clarity—all without installing software or creating accounts.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Why Test Your Microphone?</h3>
            <p className="text-gray-700 mb-4">
              Microphone issues can ruin important calls and recordings. By testing beforehand, you can:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Verify your microphone is detected and working</li>
              <li>Check input volume levels and adjust if needed</li>
              <li>Test audio quality and clarity</li>
              <li>Ensure browser permissions are correctly configured</li>
              <li>Identify hardware issues before important calls</li>
              <li>Test speaker/headset output for complete audio setup</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Step-by-Step Microphone Testing Guide</h3>
            <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-6">
              <li>
                <strong>Grant Microphone Permissions:</strong> When you visit our microphone test page, your browser will ask for microphone access. Click "Allow" to proceed. If you don't see a prompt, look for a microphone icon in your browser's address bar.
              </li>
              <li>
                <strong>Check the Volume Meter:</strong> Once permissions are granted, speak into your microphone. You should see the volume meter respond with green, yellow, or red bars indicating your input level. Green/yellow is ideal; red means you're too loud.
              </li>
              <li>
                <strong>Record a Test Clip:</strong> Click the microphone button to record a 5-second test. Say "Testing 1, 2, 3" or count aloud. The recording will stop automatically after 5 seconds.
              </li>
              <li>
                <strong>Play Back Your Recording:</strong> After recording, click play to hear how you sound. This helps identify issues like echo, distortion, background noise, or low volume.
              </li>
              <li>
                <strong>Test Your Speakers:</strong> Use the speaker test buttons (Left, Right, Sweep) to verify your output device works correctly and is properly configured for stereo audio.
              </li>
            </ol>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Common Microphone Problems and Solutions</h3>

            <h4 className="text-xl font-bold text-gray-900 mt-6 mb-3">Microphone Not Working or No Sound</h4>
            <p className="text-gray-700 mb-4">
              If your microphone shows no activity:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>
                <strong>Check Browser Permissions:</strong> Click the lock icon in your browser's address bar and ensure "Microphone" is set to "Allow". In Chrome, go to Settings → Privacy and Security → Site Settings → Microphone.
              </li>
              <li>
                <strong>Check Physical Mute Switch:</strong> Many headsets and laptops have physical mute buttons or switches. Ensure your mic isn't physically muted.
              </li>
              <li>
                <strong>Verify Input Device:</strong> In Windows, go to Settings → System → Sound → Input and ensure the correct microphone is selected. On Mac, go to System Preferences → Sound → Input.
              </li>
              <li>
                <strong>Close Other Applications:</strong> Only one app can access your microphone at a time. Close Zoom, Teams, Discord, or other apps using the mic, then refresh this page.
              </li>
              <li>
                <strong>Check System Volume:</strong> Ensure your microphone isn't muted in system settings and the input volume is turned up.
              </li>
            </ul>

            <h4 className="text-xl font-bold text-gray-900 mt-6 mb-3">Microphone Too Quiet or Low Volume</h4>
            <p className="text-gray-700 mb-4">
              If the volume meter shows low activity:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Increase microphone input volume in system settings (Windows: Settings → Sound → Input; Mac: System Preferences → Sound → Input)</li>
              <li>Enable microphone boost if available (Windows Sound Settings)</li>
              <li>Move closer to the microphone or adjust positioning</li>
              <li>Check if your microphone has a gain control dial or switch</li>
              <li>Test with a different microphone to rule out hardware issues</li>
            </ul>

            <h4 className="text-xl font-bold text-gray-900 mt-6 mb-3">Echo, Feedback, or Distortion</h4>
            <p className="text-gray-700 mb-4">
              Audio quality issues can be caused by:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Speaker Feedback:</strong> Lower speaker volume or use headphones to prevent microphone picking up speaker output</li>
              <li><strong>Room Acoustics:</strong> Reduce echo by adding soft furnishings, rugs, or curtains to your room</li>
              <li><strong>Microphone Position:</strong> Keep the mic away from speakers and at a consistent distance from your mouth</li>
              <li><strong>Background Noise:</strong> Close windows, turn off fans, and minimize background noise sources</li>
              <li><strong>Driver Issues:</strong> Update your audio drivers (Windows Device Manager or Mac System Preferences)</li>
            </ul>

            <h4 className="text-xl font-bold text-gray-900 mt-6 mb-3">Wrong Microphone Selected</h4>
            <p className="text-gray-700 mb-4">
              If the wrong microphone is being used:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Check system sound settings to see which input device is active</li>
              <li>Disconnect and reconnect USB microphones</li>
              <li>In Windows, right-click the speaker icon → Open Sound Settings → Choose your input device</li>
              <li>On Mac, go to System Preferences → Sound → Input and select the correct device</li>
              <li>Some browsers allow you to choose the input device—check browser settings</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Testing Microphone for Video Conferencing</h3>

            <h4 className="text-xl font-bold text-gray-900 mt-6 mb-3">Zoom Microphone Test</h4>
            <p className="text-gray-700 mb-4">
              Before joining a Zoom meeting, test your microphone here first. If our tool works, your mic will work in Zoom. You can also test in Zoom by going to Settings → Audio → Test Speaker & Microphone, but our browser test is faster and doesn't require the Zoom app.
            </p>

            <h4 className="text-xl font-bold text-gray-900 mt-6 mb-3">Microsoft Teams Mic Test</h4>
            <p className="text-gray-700 mb-4">
              Teams users should test their microphone here before joining meetings. In Teams, you can test by going to Settings → Devices → Audio Devices, but our online test works from any browser without installing Teams.
            </p>

            <h4 className="text-xl font-bold text-gray-900 mt-6 mb-3">Google Meet Microphone Check</h4>
            <p className="text-gray-700 mb-4">
              Google Meet uses your browser's microphone access. If our test works, Meet will work too. You can also test in Meet by joining a test meeting and checking your audio settings before others join.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Understanding Microphone Input Levels</h3>
            <p className="text-gray-700 mb-4">
              The volume meter shows your microphone's input level:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>
                <strong>Green Bars:</strong> Optimal input level. Your voice is clear and at a good volume.
              </li>
              <li>
                <strong>Yellow Bars:</strong> Good level, but approaching maximum. Still acceptable for most use cases.
              </li>
              <li>
                <strong>Red Bars:</strong> Too loud—you're clipping or distorting. Lower your input volume or move further from the mic.
              </li>
              <li>
                <strong>No Activity:</strong> Microphone not detected, muted, or volume too low. Check permissions and settings.
              </li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Browser Microphone Permissions Guide</h3>
            <p className="text-gray-700 mb-4">
              Each browser handles microphone permissions slightly differently:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>
                <strong>Chrome:</strong> Click the lock icon in the address bar → Site Settings → Microphone → Allow. Or go to chrome://settings/content/microphone
              </li>
              <li>
                <strong>Firefox:</strong> Click the microphone icon in the address bar → Allow. Or go to Preferences → Privacy & Security → Permissions → Microphone
              </li>
              <li>
                <strong>Edge:</strong> Similar to Chrome. Click the lock icon → Permissions → Microphone → Allow
              </li>
              <li>
                <strong>Safari:</strong> Safari → Preferences → Websites → Microphone → Allow for this website
              </li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Privacy and Security</h3>
            <p className="text-gray-700 mb-4">
              Your audio privacy is paramount. Our microphone test:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Processes all audio data locally in your browser</li>
              <li>Does not send audio to our servers</li>
              <li>Does not store or record your voice</li>
              <li>Does not share data with third parties</li>
              <li>Stops microphone access when you close the page</li>
            </ul>
            <p className="text-gray-700 mb-6">
              All audio processing happens in real-time on your device. Recordings are stored temporarily in your browser's memory and are deleted when you refresh or close the page.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Troubleshooting Guides</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><Link href="/guides/microphone-not-working" className="text-blue-600 hover:text-blue-800">Microphone not working</Link></li>
              <li><Link href="/guides/microphone-too-quiet" className="text-blue-600 hover:text-blue-800">Microphone too quiet</Link></li>
              <li><Link href="/guides/microphone-static-crackling" className="text-blue-600 hover:text-blue-800">Static or crackling sound</Link></li>
              <li><Link href="/guides/microphone-test-zoom" className="text-blue-600 hover:text-blue-800">Test microphone for Zoom</Link></li>
              <li><Link href="/guides/microphone-test-microsoft-teams" className="text-blue-600 hover:text-blue-800">Test microphone for Microsoft Teams</Link></li>
              <li><Link href="/guides/microphone-not-detected-windows-11" className="text-blue-600 hover:text-blue-800">Microphone not detected (Windows 11)</Link></li>
              <li><Link href="/guides/how-to-enable-microphone-chrome" className="text-blue-600 hover:text-blue-800">Enable microphone in Chrome</Link></li>
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

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Tips for Better Audio Quality</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li><strong>Use Headphones:</strong> Prevents echo and feedback by keeping speaker audio out of your microphone</li>
              <li><strong>Position Your Mic:</strong> Keep the microphone 6-12 inches from your mouth for optimal clarity</li>
              <li><strong>Reduce Background Noise:</strong> Close windows, turn off fans, and minimize ambient sounds</li>
              <li><strong>Speak Clearly:</strong> Enunciate and speak at a consistent volume</li>
              <li><strong>Test Before Important Calls:</strong> Always test your microphone before important meetings or recordings</li>
              <li><strong>Check Your Environment:</strong> Soft furnishings reduce echo; hard surfaces create reverb</li>
            </ul>

            <p className="text-lg text-gray-700 mt-8">
              Ready to test your microphone? <Link href="#test" className="text-blue-600 hover:text-blue-800 font-semibold">Scroll up and click "Run Microphone Test"</Link> to verify your mic is working perfectly for your next video call or recording.
            </p>
          </article>
        </div>
      </div>
    </>
  )
}

