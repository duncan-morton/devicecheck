import { Metadata } from 'next'
import { generateMetadata as genMeta } from '@/lib/seo/metadata'
import JsonLdScript from '@/components/JsonLdScript'
import { generateArticleSchema, generateBreadcrumbListSchema, generateFAQPageSchema } from '@/lib/seo/jsonLd'
import Breadcrumbs from '@/components/Breadcrumbs'
import Link from 'next/link'

export const revalidate = 86400

export const metadata: Metadata = genMeta({
  title: 'Webcam Too Dark or Grainy, How to Fix',
  description: 'Fix webcam video that is too dark or grainy. Adjust lighting, camera settings, and exposure to improve video quality.',
  path: '/guides/webcam-too-dark-grainy',
  keywords: [
    'webcam too dark',
    'webcam grainy',
    'webcam low light',
    'webcam quality',
    'webcam exposure'
  ]
})

const faqs = [
  {
    question: 'Why is my webcam so dark?',
    answer: 'Dark webcam video is usually caused by insufficient lighting, low exposure settings, or camera positioned against a light source. Improve room lighting, adjust camera exposure settings, and ensure you\'re facing the light source, not away from it.'
  },
  {
    question: 'How do I fix grainy webcam video?',
    answer: 'Grainy video is caused by low light forcing the camera to use high ISO settings. Improve room lighting, reduce digital zoom, and adjust camera exposure settings. Some webcams have low-light modes that can help.'
  }
]

export default function WebcamTooDarkGrainyPage() {
  const articleSchema = generateArticleSchema(
    'Webcam Too Dark or Grainy, How to Fix',
    'Fix webcam video that is too dark or grainy. Adjust lighting, camera settings, and exposure to improve video quality.',
    '/guides/webcam-too-dark-grainy',
    new Date().toISOString(),
    new Date().toISOString()
  )

  const breadcrumbs = generateBreadcrumbListSchema([
    { name: 'Home', path: '/' },
    { name: 'Guides', path: '/guides' },
    { name: 'Webcam Too Dark or Grainy', path: '/guides/webcam-too-dark-grainy' }
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
            { name: 'Webcam Too Dark or Grainy', path: '/guides/webcam-too-dark-grainy' }
          ]} />
          
          <article className="prose prose-slate max-w-none bg-white p-8 md:p-12 rounded-2xl border border-gray-200">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Webcam Too Dark or Grainy</h1>
            
            <p className="text-lg text-gray-700 mb-8">
              Dark or grainy webcam video makes you hard to see in video calls. This page shows how to improve webcam quality by adjusting lighting and camera settings. Start with room lighting, then adjust camera exposure.
            </p>

            <p className="text-gray-700 mb-6">
              If you need to check your camera quickly, <Link href="/webcam" className="text-blue-600 hover:text-blue-800">run the webcam test</Link>.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Improve Room Lighting</h2>
            <p className="text-gray-700 mb-4">
              Proper lighting is the most important factor for webcam quality. Position lights correctly.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Face a light source, not away from it</li>
              <li>Use natural light from a window when possible</li>
              <li>Add a desk lamp or ring light in front of you</li>
              <li>Avoid backlighting that creates silhouettes</li>
              <li>Use multiple light sources to reduce shadows</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Adjust Camera Exposure Settings</h2>
            <p className="text-gray-700 mb-4">
              Many webcams have exposure settings that can brighten dark video.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Check your video app's camera settings</li>
              <li>Look for exposure, brightness, or gain controls</li>
              <li>Increase exposure to brighten dark video</li>
              <li>Test different settings to find optimal brightness</li>
              <li>Some apps have auto-exposure that adjusts automatically</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Reduce Digital Zoom</h2>
            <p className="text-gray-700 mb-4">
              Digital zoom reduces image quality and can make video appear grainy.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Check video app settings for zoom level</li>
              <li>Reduce or disable digital zoom</li>
              <li>Move closer to the camera instead of using zoom</li>
              <li>Position camera at optimal distance</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Clean Camera Lens</h2>
            <p className="text-gray-700 mb-4">
              Dirty camera lenses can reduce image quality and make video appear darker.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Gently clean camera lens with a microfiber cloth</li>
              <li>Remove fingerprints and smudges</li>
              <li>Check for dust or debris on the lens</li>
              <li>Test video quality after cleaning</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Adjust Camera Position</h2>
            <p className="text-gray-700 mb-4">
              Camera angle and position affect how light hits your face.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Position camera at eye level or slightly above</li>
              <li>Angle camera to face light source</li>
              <li>Avoid positioning camera against windows or bright backgrounds</li>
              <li>Test different positions to find best lighting</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Use Camera Software Settings</h2>
            <p className="text-gray-700 mb-4">
              Some webcams have software that provides additional quality controls.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Check if your webcam has manufacturer software</li>
              <li>Look for low-light mode or night mode settings</li>
              <li>Adjust white balance and color settings</li>
              <li>Enable image stabilization if available</li>
              <li>Test different quality presets</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Test Webcam Quality</h2>
            <p className="text-gray-700 mb-6">
              After making adjustments, use the <Link href="/webcam" className="text-blue-600 hover:text-blue-800 font-semibold">online webcam test</Link> to verify video quality. The test shows live video feed and helps you see the effects of lighting and settings changes.
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 my-8">
              <h3 className="font-semibold text-blue-900 mb-2">Related Guides</h3>
              <ul className="space-y-2 text-sm text-blue-800">
                <li><Link href="/guides/webcam-lagging-low-fps" className="hover:text-blue-600 underline">Webcam Lagging or Low FPS</Link></li>
                <li><Link href="/guides/webcam-not-working" className="hover:text-blue-600 underline">Webcam Not Working</Link></li>
                <li><Link href="/guides/webcam-test-zoom" className="hover:text-blue-600 underline">Webcam Test for Zoom</Link></li>
              </ul>
            </div>

            <p className="text-gray-700 mb-6 mt-8">
              <Link href="/webcam" className="text-blue-600 hover:text-blue-800">Run the webcam test</Link> to verify your camera setup.
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

            <div className="mt-8 p-6 bg-gray-50 rounded-xl border border-gray-200">
              <p className="text-gray-700 mb-4">
                <strong>Next step:</strong> Test your webcam to check video quality.
              </p>
              <Link 
                href="/webcam" 
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Run Webcam Test →
              </Link>
            </div>
          </article>
        </div>
      </div>
    </>
  )
}

