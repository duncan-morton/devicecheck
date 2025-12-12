import { Metadata } from 'next'
import MicTool from '@/components/MicTool'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Embed Microphone Test',
  description: 'Embeddable microphone test widget',
  robots: {
    index: false,
    follow: true
  },
  alternates: {
    canonical: 'https://devicecheck.io/mic'
  }
}

export default function EmbedMicPage({
  searchParams,
}: {
  searchParams: { ref?: string }
}) {
  const refParam = searchParams?.ref ? `?ref=${searchParams.ref}` : '?ref=embed'
  
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="w-full max-w-[900px] bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        {/* Top bar */}
        <div className="border-b border-gray-200 px-4 py-3 bg-white">
          <div className="flex items-center justify-between">
            <h1 className="text-lg font-semibold text-gray-900">Microphone Test</h1>
            <span className="text-xs text-gray-500">Runs locally in your browser</span>
          </div>
        </div>

        {/* Tool content */}
        <div className="p-4 md:p-6">
          <MicTool variant="embed" />
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-200 px-4 py-3 bg-gray-50 flex items-center justify-between">
          <Link
            href="/mic"
            className="text-sm text-gray-600 hover:text-gray-900"
          >
            Powered by <span className="font-semibold">DeviceCheck.io</span>
          </Link>
          <Link
            href={`/mic${refParam}`}
            className="text-sm text-blue-600 hover:text-blue-800 font-medium"
          >
            Open full test →
          </Link>
        </div>
      </div>
    </div>
  )
}

