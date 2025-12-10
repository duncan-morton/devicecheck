import { Metadata } from 'next'
import { generateMetadata as genMeta } from '@/lib/seo/metadata'
import Breadcrumbs from '@/components/Breadcrumbs'

export const revalidate = 86400

export const metadata: Metadata = genMeta({
  title: 'Privacy Policy - DeviceCheck.io',
  description: 'Privacy policy for DeviceCheck.io. Learn how we protect your privacy and handle your data.',
  path: '/privacy'
})

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Breadcrumbs items={[{ name: 'Privacy Policy', path: '/privacy' }]} />
        
        <article className="prose prose-slate max-w-none bg-white p-8 md:p-12 rounded-2xl border border-gray-200">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
          
          <p className="text-lg text-gray-700 mb-6">
            <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Your Privacy Matters</h2>
          <p className="text-gray-700 mb-6">
            DeviceCheck.io is committed to protecting your privacy. This privacy policy explains how we handle your data when you use our device testing tools.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Data Processing</h2>
          <p className="text-gray-700 mb-4">
            <strong>All device testing happens locally in your browser.</strong> We do not:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
            <li>Record or store video from your webcam</li>
            <li>Record or store audio from your microphone</li>
            <li>Send camera or microphone data to our servers</li>
            <li>Track your device usage</li>
            <li>Share your data with third parties</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Browser Permissions</h2>
          <p className="text-gray-700 mb-6">
            Our tools request camera and microphone permissions to enable device testing. These permissions are handled entirely by your browser. We never access your devices without your explicit permission, and you can revoke permissions at any time through your browser settings.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Analytics</h2>
          <p className="text-gray-700 mb-6">
            We may use privacy-focused analytics tools (such as Plausible) that don't use cookies or track personal information. These tools help us understand site usage without compromising your privacy.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Cookies</h2>
          <p className="text-gray-700 mb-6">
            We do not use cookies for tracking or advertising. Any cookies used are essential for site functionality only.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Third-Party Services</h2>
          <p className="text-gray-700 mb-6">
            We do not integrate third-party tracking or advertising services. Your device testing remains completely private.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Contact</h2>
          <p className="text-gray-700 mb-6">
            If you have questions about this privacy policy, please contact us through our contact page.
          </p>
        </article>
      </div>
    </div>
  )
}


