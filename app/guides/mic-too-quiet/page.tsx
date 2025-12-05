import { Metadata } from 'next'
import { generateMetadata as genMeta } from '@/lib/seo/metadata'
import JsonLdScript from '@/components/JsonLdScript'
import { generateArticleSchema, generateBreadcrumbListSchema, generateFAQPageSchema } from '@/lib/seo/jsonLd'
import Breadcrumbs from '@/components/Breadcrumbs'
import Link from 'next/link'

export const revalidate = 86400

export const metadata: Metadata = genMeta({
  title: 'Microphone Too Quiet - How to Increase Volume and Fix Low Input',
  description: 'Fix microphone too quiet issues. Increase input volume, enable microphone boost, adjust positioning, and improve audio levels for clear recordings and calls.',
  path: '/guides/mic-too-quiet',
  keywords: [
    'microphone too quiet',
    'mic too quiet',
    'microphone volume low',
    'increase microphone volume',
    'microphone boost',
    'mic input too low'
  ]
})

const faqs = [
  {
    question: 'Why is my microphone too quiet?',
    answer: 'Microphone volume can be too quiet due to low system input volume settings, microphone positioned too far away, disabled microphone boost, or hardware limitations. Start by increasing system input volume, then enable microphone boost if available.'
  },
  {
    question: 'How do I increase microphone volume in Windows?',
    answer: 'Open Settings → System → Sound → Input. Raise the volume slider for your microphone. Click "Device properties" → "Levels" tab to access microphone boost settings. Enable boost and increase the level if available.'
  },
  {
    question: 'How do I increase microphone volume on Mac?',
    answer: 'Open System Preferences → Sound → Input. Select your microphone and increase the input volume slider. Some microphones have a "Use ambient noise reduction" option that can affect volume levels.'
  },
  {
    question: 'What is microphone boost and should I use it?',
    answer: 'Microphone boost amplifies the input signal beyond normal levels. Use it when your microphone is too quiet even at maximum volume. Start with low boost levels and increase gradually. High boost can increase background noise.'
  },
  {
    question: 'My microphone is still too quiet after increasing volume. What else can I try?',
    answer: 'Move the microphone closer to your mouth (6-12 inches is ideal). Check for physical volume controls on USB microphones. Test the microphone on another computer to rule out hardware issues. Consider using a different microphone if available.'
  },
  {
    question: 'How do I test if my microphone volume is adequate?',
    answer: 'Use the online microphone test to check input levels. The test shows real-time volume meters. Green or yellow bars indicate good levels. If bars stay in the red or show minimal activity, your microphone is too quiet.'
  },
  {
    question: 'Can application settings affect microphone volume?',
    answer: 'Yes. Video conferencing apps like Zoom, Teams, and Google Meet have their own microphone volume controls. Check app-specific settings and adjust microphone volume sliders within each application.'
  }
]

export default function MicTooQuietPage() {
  const articleSchema = generateArticleSchema(
    'Microphone Too Quiet - How to Increase Volume and Fix Low Input',
    'Fix microphone too quiet issues. Increase input volume, enable microphone boost, adjust positioning, and improve audio levels for clear recordings and calls.',
    '/guides/mic-too-quiet',
    new Date().toISOString(),
    new Date().toISOString()
  )

  const breadcrumbs = generateBreadcrumbListSchema([
    { name: 'Home', path: '/' },
    { name: 'Guides', path: '/guides' },
    { name: 'Microphone Too Quiet', path: '/guides/mic-too-quiet' }
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
            { name: 'Microphone Too Quiet', path: '/guides/mic-too-quiet' }
          ]} />
          
          <article className="prose prose-slate max-w-none bg-white p-8 md:p-12 rounded-2xl border border-gray-200">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Microphone Too Quiet</h1>
            
            <p className="text-lg text-gray-700 mb-8">
              A quiet microphone makes your voice hard to hear in calls and recordings. This guide shows how to increase microphone volume, enable boost settings, and improve input levels across all systems and applications.
            </p>

            <p className="text-gray-700 mb-6">
              You can use the <Link href="/mic" className="text-blue-600 hover:text-blue-800">online microphone test</Link> to confirm whether your device is working.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Quick Fix Summary</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Increase system input volume in Sound settings</li>
              <li>Enable microphone boost in device properties</li>
              <li>Move microphone closer to your mouth (6-12 inches)</li>
              <li>Check application-specific volume controls</li>
              <li>Adjust microphone positioning for better pickup</li>
              <li>Check for physical volume controls on USB microphones</li>
              <li>Update audio drivers if volume controls don't respond</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Why This Happens</h2>
            <p className="text-gray-700 mb-4">
              System input volume settings control how loud your microphone signal is before it reaches applications. These settings are often set too low by default or reduced after system updates.
            </p>
            <p className="text-gray-700 mb-4">
              Microphone positioning significantly affects volume. Distance from your mouth, angle, and obstructions all reduce the signal strength. Even a few inches of extra distance can make a noticeable difference.
            </p>
            <p className="text-gray-700 mb-4">
              Some microphones have hardware limitations that prevent them from reaching adequate volume levels. Built-in laptop microphones are particularly prone to this issue due to their small size and placement.
            </p>
            <p className="text-gray-700 mb-6">
              Application settings can override system volume. Video conferencing apps often have their own microphone volume controls that can reduce levels even when system settings are correct.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Step-by-Step Fix Guide</h2>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Step 1: Increase System Input Volume</h3>
            <p className="text-gray-700 mb-4">
              System volume settings are the primary control for microphone input levels. Increase these settings first before trying other solutions.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Windows:</strong> Open Settings → System → Sound → Input. Find your microphone in the list and raise the volume slider. Ensure the microphone is not muted. Click "Device properties" to access additional volume controls.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Mac:</strong> Open System Preferences → Sound → Input. Select your microphone and increase the input volume slider. Speak into the microphone and watch the input level indicator respond.
            </p>
            <p className="text-gray-700 mb-6">
              Test the microphone after adjusting volume. Use the online microphone test to see real-time volume levels. Green or yellow bars indicate good levels. Red or minimal activity means you need to increase volume further.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Step 2: Enable Microphone Boost</h3>
            <p className="text-gray-700 mb-4">
              Microphone boost amplifies the input signal beyond normal maximum levels. Not all microphones support this feature, but it's essential for quiet microphones.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Windows:</strong> In Settings → System → Sound → Input, click "Device properties" for your microphone. Go to the "Levels" tab. You'll see a "Microphone" slider and a "Microphone boost" slider. Increase the boost slider gradually, starting at +10 dB and increasing if needed.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Mac:</strong> Microphone boost is less common on Mac. Some USB microphones have built-in gain controls instead. Check your microphone's manual or manufacturer website for Mac-specific boost options.
            </p>
            <p className="text-gray-700 mb-4">
              Start with low boost levels and test. High boost can increase background noise and cause distortion. Find the balance between volume and quality.
            </p>
            <p className="text-gray-700 mb-6">
              If boost isn't available, your microphone may not support it. Consider repositioning the microphone or using a different device.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Step 3: Adjust Microphone Positioning</h3>
            <p className="text-gray-700 mb-4">
              Distance and angle dramatically affect microphone volume. Position the microphone correctly to maximize signal strength.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Keep the microphone 6 to 12 inches from your mouth</li>
              <li>Position it directly in front of you, not to the side</li>
              <li>Avoid covering the microphone with your hand or clothing</li>
              <li>For headset microphones, position the boom near your mouth</li>
              <li>Point the microphone toward your mouth, not away from it</li>
              <li>Test different positions to find the best volume</li>
            </ul>
            <p className="text-gray-700 mb-4">
              Built-in laptop microphones are particularly sensitive to positioning. Adjust your laptop screen angle to change microphone position relative to your mouth.
            </p>
            <p className="text-gray-700 mb-6">
              Use the online microphone test while adjusting position. Watch the volume meter respond in real-time to find the optimal placement.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Step 4: Check Hardware Gain Controls</h3>
            <p className="text-gray-700 mb-4">
              Many USB microphones and audio interfaces have physical volume or gain controls on the device itself. These controls override software settings.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Look for volume dials or buttons on USB microphones</li>
              <li>Check inline controls on headset cables</li>
              <li>Verify external audio interfaces have gain knobs turned up</li>
              <li>Consult your microphone's manual for control locations</li>
              <li>Test the microphone after adjusting hardware controls</li>
            </ul>
            <p className="text-gray-700 mb-6">
              Some professional microphones have gain switches on the device. Ensure these are set to appropriate levels for your use case.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Step 5: Adjust Application-Specific Settings</h3>
            <p className="text-gray-700 mb-4">
              Video conferencing applications have their own microphone volume controls that can reduce levels even when system settings are correct.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Zoom:</strong> Open Zoom → Settings → Audio. Find the microphone volume slider and increase it. Disable "Automatically adjust microphone volume" if it's reducing your levels. Test the microphone in Zoom settings.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Microsoft Teams:</strong> Open Teams → Settings → Devices. Adjust the microphone volume slider in the Audio Devices section. Test the microphone to hear playback.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Google Meet:</strong> During a meeting, click the three dots menu → Settings → Audio. Adjust the microphone input volume slider. Google Meet shows real-time volume levels.
            </p>
            <p className="text-gray-700 mb-6">
              Check each application you use regularly. Some apps remember volume settings separately from system settings.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Step 6: Test Different Microphones</h3>
            <p className="text-gray-700 mb-4">
              If volume remains low after all adjustments, the microphone hardware may be the limitation. Test with a different microphone to confirm.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Test with a different microphone if available</li>
              <li>Compare built-in laptop mic with external USB microphone</li>
              <li>Check if the microphone works better on another computer</li>
              <li>Some microphones have lower sensitivity by design</li>
              <li>Professional microphones typically have better gain capabilities</li>
            </ul>
            <p className="text-gray-700 mb-6">
              If a different microphone works at adequate volume, the original microphone may have hardware limitations or damage.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Browser and OS Specific Fixes</h2>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Windows 10 and Windows 11</h3>
            <p className="text-gray-700 mb-4">
              Windows provides multiple levels of volume control. Check all of them for maximum volume.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Settings → System → Sound → Input → Volume slider</li>
              <li>Device properties → Levels tab → Microphone slider</li>
              <li>Device properties → Levels tab → Microphone boost slider</li>
              <li>Right-click speaker icon → Open Sound settings → Input</li>
            </ul>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">macOS</h3>
            <p className="text-gray-700 mb-4">
              Mac volume controls are simpler but may have fewer boost options.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>System Preferences → Sound → Input → Volume slider</li>
              <li>Some USB microphones have Mac-specific control software</li>
              <li>Check microphone manufacturer's website for Mac drivers</li>
            </ul>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Chrome Browser</h3>
            <p className="text-gray-700 mb-4">
              Chrome respects system volume settings but may have additional controls.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Chrome uses system microphone volume by default</li>
              <li>Some web applications have their own volume controls</li>
              <li>Check browser permissions to ensure microphone access is allowed</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How to Prevent the Problem in Future</h2>
            <p className="text-gray-700 mb-4">
              Set microphone volume to an appropriate level and leave it there. Constantly adjusting volume can cause confusion about what settings are active.
            </p>
            <p className="text-gray-700 mb-4">
              Position your microphone correctly from the start. Establish a consistent setup so you don't need to adjust volume frequently.
            </p>
            <p className="text-gray-700 mb-4">
              Use the same USB port for USB microphones. Windows can treat different ports as different devices, resetting volume settings.
            </p>
            <p className="text-gray-700 mb-4">
              Check volume settings after system updates. Updates can reset audio settings to defaults.
            </p>
            <p className="text-gray-700 mb-6">
              Test your microphone regularly using the online microphone test. Catching volume issues early prevents problems during important calls.
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
                <li><Link href="/guides/microphone-not-working" className="hover:text-blue-600 underline">Microphone Not Working</Link></li>
                <li><Link href="/guides/mic-static-or-crackling" className="hover:text-blue-600 underline">Microphone Static or Crackling</Link></li>
                <li><Link href="/guides/mic-test-for-zoom" className="hover:text-blue-600 underline">Microphone Test for Zoom</Link></li>
              </ul>
            </div>

            <p className="text-gray-700 mb-6 mt-8">
              Use the <Link href="/mic" className="text-blue-600 hover:text-blue-800">online microphone test</Link> to confirm everything is working.
            </p>
          </article>
        </div>
      </div>
    </>
  )
}

