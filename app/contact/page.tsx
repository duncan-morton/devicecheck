import { Metadata } from 'next'
import { generateMetadata as genMeta } from '@/lib/seo/metadata'
import Breadcrumbs from '@/components/Breadcrumbs'

export const revalidate = 86400

export const metadata: Metadata = genMeta({
  title: 'Contact - DeviceCheck.io',
  description: 'Contact DeviceCheck.io with questions or feedback about our free online device testing tools.',
  path: '/contact',
})

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Breadcrumbs items={[{ name: 'Contact', path: '/contact' }]} />

        <article className="prose prose-slate max-w-none bg-white p-8 md:p-12 rounded-2xl border border-gray-200">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Contact</h1>

          <p className="text-lg text-gray-700 mb-4">
            Questions or feedback? We’d like to hear from you.
          </p>
          <p className="text-gray-700 mb-4">
            Email us at{' '}
            <a
              href="mailto:support@devicecheck.io"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              support@devicecheck.io
            </a>
            . We’ll do our best to get back to you soon.
          </p>
        </article>
      </div>
    </div>
  )
}
