import { Metadata } from 'next'
import { generateMetadata as genMeta } from '@/lib/seo/metadata'
import JsonLdScript from '@/components/JsonLdScript'
import { generateArticleSchema, generateBreadcrumbListSchema } from '@/lib/seo/jsonLd'
import Breadcrumbs from '@/components/Breadcrumbs'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export const revalidate = 86400 // ISR: Revalidate every 24 hours

interface Guide {
  slug: string
  title: string
  description: string
  content: string
  keywords: string[]
}

const guides: Guide[] = [
  {
    slug: 'webcam-not-working-fix',
    title: 'Webcam Not Working? Complete Fix Guide',
    description: 'Step-by-step guide to fix webcam not working issues. Troubleshoot camera problems for Zoom, Teams, and Google Meet.',
    keywords: ['webcam not working', 'camera not working', 'webcam fix', 'camera troubleshooting'],
    content: `
      <h2>Why Is My Webcam Not Working?</h2>
      <p>Webcam issues are common and usually easy to fix. This comprehensive guide covers all solutions for webcam not working problems.</p>
      
      <h3>1. Check Browser Permissions</h3>
      <p>Most webcam issues are caused by denied browser permissions. Click the lock icon in your browser's address bar and ensure "Camera" is set to "Allow".</p>
      
      <h3>2. Close Other Applications</h3>
      <p>Only one application can use your camera at a time. Close Zoom, Teams, Skype, or any other apps using the camera, then try again.</p>
      
      <h3>3. Check Physical Privacy Covers</h3>
      <p>Many laptops have sliding privacy covers over the camera. Ensure the cover is open and not blocking the lens.</p>
      
      <h3>4. Restart Your Browser</h3>
      <p>Browser processes can get stuck. Close all browser windows completely and reopen to reset camera access.</p>
      
      <h3>5. Update Camera Drivers</h3>
      <p>Outdated drivers can cause camera issues. Update drivers through Windows Device Manager or Mac System Preferences.</p>
      
      <h3>6. Test in Another Browser</h3>
      <p>If the camera works in one browser but not another, the issue is browser-specific. Try Chrome, Firefox, or Edge.</p>
      
      <h3>7. Check System Settings</h3>
      <p>On Windows: Settings → Privacy → Camera → Ensure "Allow apps to access your camera" is enabled.</p>
      <p>On Mac: System Preferences → Security & Privacy → Camera → Check the box for your browser.</p>
    `
  },
  {
    slug: 'test-webcam-for-zoom',
    title: 'How to Test Your Webcam for Zoom',
    description: 'Learn how to test your webcam before Zoom meetings. Step-by-step guide to ensure your camera works perfectly.',
    keywords: ['test webcam zoom', 'zoom camera test', 'zoom webcam check'],
    content: `
      <h2>Testing Your Webcam for Zoom</h2>
      <p>Before joining important Zoom meetings, test your webcam to avoid technical issues. Here's how.</p>
      
      <h3>Method 1: Use Our Online Webcam Test</h3>
      <p>Visit our <a href="/webcam" className="text-blue-600 hover:text-blue-800">webcam test page</a> and click "Allow" when prompted. If the camera works here, it will work in Zoom.</p>
      
      <h3>Method 2: Test Within Zoom</h3>
      <p>Open Zoom → Settings → Video → You'll see a preview of your camera. If you see yourself, your camera works.</p>
      
      <h3>Common Zoom Camera Issues</h3>
      <ul>
        <li>Black screen: Check permissions and close other apps</li>
        <li>Wrong camera selected: Choose correct camera in Zoom settings</li>
        <li>Low quality: Check camera resolution in settings</li>
      </ul>
    `
  },
  {
    slug: 'microphone-not-working-fix',
    title: 'Microphone Not Working? Complete Fix Guide',
    description: 'Step-by-step solutions for microphone not working issues. Fix mic problems for video calls and recordings.',
    keywords: ['microphone not working', 'mic not working', 'microphone fix'],
    content: `
      <h2>Why Is My Microphone Not Working?</h2>
      <p>Microphone issues can be frustrating. This guide covers all solutions.</p>
      
      <h3>1. Check Browser Permissions</h3>
      <p>Click the lock icon in your browser's address bar and ensure "Microphone" is set to "Allow".</p>
      
      <h3>2. Check Physical Mute Switches</h3>
      <p>Many headsets and laptops have physical mute buttons. Ensure your mic isn't physically muted.</p>
      
      <h3>3. Verify Input Device</h3>
      <p>Check system settings to ensure the correct microphone is selected as your input device.</p>
      
      <h3>4. Close Other Applications</h3>
      <p>Only one app can use your microphone at a time. Close Zoom, Teams, or other apps using the mic.</p>
      
      <h3>5. Check System Volume</h3>
      <p>Ensure your microphone isn't muted in system settings and input volume is turned up.</p>
    `
  },
  {
    slug: 'keyboard-test-online-guide',
    title: 'Complete Guide to Online Keyboard Testing',
    description: 'Learn how to test your keyboard online. Detect stuck keys, ghosting, and keyboard problems.',
    keywords: ['keyboard test', 'test keyboard online', 'keyboard testing guide'],
    content: `
      <h2>How to Test Your Keyboard Online</h2>
      <p>Our keyboard test tool helps you verify all keys work correctly.</p>
      
      <h3>Using the Keyboard Test</h3>
      <p>Visit our <a href="/keyboard" className="text-blue-600 hover:text-blue-800">keyboard test page</a> and press keys. Each key will light up when pressed.</p>
      
      <h3>What to Look For</h3>
      <ul>
        <li>Stuck keys that don't release</li>
        <li>Non-responsive keys</li>
        <li>Keyboard ghosting (multiple keys not registering)</li>
        <li>Wrong characters appearing</li>
      </ul>
      
      <h3>Fixing Keyboard Issues</h3>
      <p>Clean with compressed air, check connections, update drivers, or replace the keyboard if needed.</p>
    `
  },
  {
    slug: 'dead-pixel-test-guide',
    title: 'Dead Pixel Test - Complete Guide',
    description: 'How to test for dead pixels and stuck pixels. Identify screen defects and warranty claims.',
    keywords: ['dead pixel test', 'stuck pixel test', 'pixel test guide'],
    content: `
      <h2>How to Test for Dead Pixels</h2>
      <p>Dead pixels are permanently black dots on your screen. Here's how to test for them.</p>
      
      <h3>Using Our Screen Test</h3>
      <p>Visit our <a href="/screen" className="text-blue-600 hover:text-blue-800">screen test page</a>, enter fullscreen mode, and cycle through solid colors.</p>
      
      <h3>What Are Dead Pixels?</h3>
      <p>Dead pixels are permanently black and don't respond to signals. They cannot be fixed.</p>
      
      <h3>What Are Stuck Pixels?</h3>
      <p>Stuck pixels are permanently lit in one color (red, green, or blue). They can sometimes be fixed.</p>
      
      <h3>Warranty Information</h3>
      <p>Most manufacturers allow 1-3 dead pixels. Check your warranty policy for specific requirements.</p>
    `
  }
]

export async function generateStaticParams() {
  return guides.map((guide) => ({
    slug: guide.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const guide = guides.find(g => g.slug === params.slug)
  
  if (!guide) {
    return genMeta({
      title: 'Guide Not Found',
      description: 'The requested guide could not be found.',
      path: `/guides/${params.slug}`,
      noindex: true
    })
  }

  return genMeta({
    title: guide.title,
    description: guide.description,
    path: `/guides/${guide.slug}`,
    keywords: guide.keywords
  })
}

export default function GuidePage({ params }: { params: { slug: string } }) {
  const guide = guides.find(g => g.slug === params.slug)

  if (!guide) {
    notFound()
  }

  const articleSchema = generateArticleSchema(
    guide.title,
    guide.description,
    `/guides/${guide.slug}`,
    new Date().toISOString(),
    new Date().toISOString()
  )

  const breadcrumbs = generateBreadcrumbListSchema([
    { name: 'Home', path: '/' },
    { name: 'Guides', path: '/guides' },
    { name: guide.title, path: `/guides/${guide.slug}` }
  ])

  return (
    <>
      <JsonLdScript data={articleSchema} />
      <JsonLdScript data={breadcrumbs} />
      
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <Breadcrumbs items={[
            { name: 'Guides', path: '/guides' },
            { name: guide.title, path: `/guides/${guide.slug}` }
          ]} />
          
          <article className="prose prose-slate max-w-none bg-white p-8 md:p-12 rounded-2xl border border-gray-200">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">{guide.title}</h1>
            <div 
              className="text-gray-700"
              dangerouslySetInnerHTML={{ __html: guide.content }}
            />
          </article>

          <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-6">
            <h3 className="font-semibold text-blue-900 mb-2">Related Tools</h3>
            <p className="text-sm text-blue-800 mb-4">
              Test your devices with our free online tools:
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/webcam" className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">
                Webcam Test
              </Link>
              <Link href="/mic" className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">
                Microphone Test
              </Link>
              <Link href="/keyboard" className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">
                Keyboard Test
              </Link>
              <Link href="/screen" className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">
                Screen Test
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

