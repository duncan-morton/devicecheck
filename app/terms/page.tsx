import { Metadata } from 'next'
import { generateMetadata as genMeta } from '@/lib/seo/metadata'
import Breadcrumbs from '@/components/Breadcrumbs'

export const revalidate = 86400

export const metadata: Metadata = genMeta({
  title: 'Terms of Service - DeviceCheck.io',
  description: 'Terms of service for DeviceCheck.io. Read our terms and conditions.',
  path: '/terms'
})

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Breadcrumbs items={[{ name: 'Terms of Service', path: '/terms' }]} />
        
        <article className="prose prose-slate max-w-none bg-white p-8 md:p-12 rounded-2xl border border-gray-200">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Terms of Service</h1>
          
          <p className="text-lg text-gray-700 mb-6">
            <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Acceptance of Terms</h2>
          <p className="text-gray-700 mb-6">
            By accessing and using DeviceCheck.io, you accept and agree to be bound by these Terms of Service.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Use of Service</h2>
          <p className="text-gray-700 mb-4">
            DeviceCheck.io provides free online device testing tools. You agree to:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
            <li>Use the service only for lawful purposes</li>
            <li>Not attempt to harm or disrupt the service</li>
            <li>Respect browser permissions and privacy</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Disclaimer</h2>
          <p className="text-gray-700 mb-6">
            DeviceCheck.io is provided "as is" without warranties of any kind. We are not responsible for any damage to your devices or data resulting from use of our tools.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Limitation of Liability</h2>
          <p className="text-gray-700 mb-6">
            DeviceCheck.io shall not be liable for any indirect, incidental, or consequential damages arising from use of our service.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Changes to Terms</h2>
          <p className="text-gray-700 mb-6">
            We reserve the right to modify these terms at any time. Continued use of the service constitutes acceptance of modified terms.
          </p>
        </article>
      </div>
    </div>
  )
}


