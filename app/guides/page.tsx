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

const guides = [
  {
    slug: 'webcam-not-working-fix',
    title: 'Webcam Not Working? Complete Fix Guide',
    description: 'Step-by-step solutions for webcam not working issues'
  },
  {
    slug: 'test-webcam-for-zoom',
    title: 'How to Test Your Webcam for Zoom',
    description: 'Learn how to test your webcam before Zoom meetings'
  },
  {
    slug: 'microphone-not-working-fix',
    title: 'Microphone Not Working? Complete Fix Guide',
    description: 'Fix microphone problems for video calls and recordings'
  },
  {
    slug: 'keyboard-test-online-guide',
    title: 'Complete Guide to Online Keyboard Testing',
    description: 'Learn how to test your keyboard and detect problems'
  },
  {
    slug: 'dead-pixel-test-guide',
    title: 'Dead Pixel Test - Complete Guide',
    description: 'How to test for dead pixels and stuck pixels'
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

        <div className="grid md:grid-cols-2 gap-6">
          {guides.map((guide) => (
            <Link
              key={guide.slug}
              href={`/guides/${guide.slug}`}
              className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all"
            >
              <h2 className="text-xl font-semibold text-gray-900 mb-2 hover:text-blue-600 transition-colors">
                {guide.title}
              </h2>
              <p className="text-gray-600">{guide.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}


