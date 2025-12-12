'use client'

import Link from 'next/link'
import { Mic, Video, Keyboard } from 'lucide-react'
import { useState } from 'react'

const EMBED_CODE_BASE = 'https://devicecheck.io/embed'

const widgets = [
  {
    id: 'mic',
    title: 'Microphone Test',
    description: 'Test microphone input levels and audio quality',
    icon: Mic,
    href: '/embed/mic',
    defaultWidth: 700,
    defaultHeight: 520
  },
  {
    id: 'webcam',
    title: 'Webcam Test',
    description: 'Test webcam resolution, preview, and functionality',
    icon: Video,
    href: '/embed/webcam',
    defaultWidth: 700,
    defaultHeight: 520
  },
  {
    id: 'keyboard',
    title: 'Keyboard Test',
    description: 'Test keyboard keys, layout, and ghosting',
    icon: Keyboard,
    href: '/embed/keyboard',
    defaultWidth: 700,
    defaultHeight: 520
  }
]

export default function EmbedLandingClient() {
  const [copiedId, setCopiedId] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Embed free device test tools on your site
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Add diagnostic widgets to your help pages, documentation, or support articles. No tracking. Runs locally in the visitor's browser.
          </p>
        </div>

        <div className="space-y-12 mb-12">
          {widgets.map((widget) => {
            const Icon = widget.icon
            const iframeCode = `<iframe
  src="${EMBED_CODE_BASE}${widget.href}"
  width="${widget.defaultWidth}"
  height="${widget.defaultHeight}"
  style="border:1px solid #e5e7eb;border-radius:16px;overflow:hidden"
  loading="lazy"
  referrerpolicy="no-referrer"
></iframe>`

            return (
              <div key={widget.id} className="bg-white rounded-2xl border border-gray-200 p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Icon className="text-blue-600" size={24} />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">{widget.title}</h2>
                    <p className="text-gray-600">{widget.description}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h3 className="text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wide">Live Preview</h3>
                    <div className="border border-gray-200 rounded-xl overflow-hidden bg-slate-50" style={{ aspectRatio: `${widget.defaultWidth}/${widget.defaultHeight}` }}>
                      <iframe
                        src={`${EMBED_CODE_BASE}${widget.href}`}
                        className="w-full h-full"
                        style={{ border: 'none' }}
                        title={`${widget.title} Preview`}
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wide">Embed Code</h3>
                    <textarea
                      readOnly
                      value={iframeCode}
                      className="w-full h-32 p-3 font-mono text-sm border border-gray-300 rounded-lg bg-gray-50 resize-none"
                      onClick={(e) => e.currentTarget.select()}
                    />
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(iframeCode)
                        setCopiedId(widget.id)
                        setTimeout(() => setCopiedId(null), 2000)
                      }}
                      className="mt-3 w-full px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
                    >
                      {copiedId === widget.id ? 'Copied!' : 'Copy Embed Code'}
                    </button>
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-500 mb-2">No tracking. Runs locally in the visitor's browser.</p>
                  <Link
                    href={widget.href.replace('/embed', '')}
                    className="text-sm text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Open full {widget.title.toLowerCase()} →
                  </Link>
                </div>
              </div>
            )
          })}
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Sizing Tips</h2>
          <div className="space-y-4 text-gray-700">
            <div>
              <h3 className="font-semibold mb-2">Recommended Sizes</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Mobile: 360px width × 560px height</li>
                <li>Desktop: 700px width × 520px height (default)</li>
                <li>Large: 900px width × 600px height</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Responsive Option</h3>
              <p className="text-sm mb-2">For full-width responsive embeds, use:</p>
              <code className="block p-3 bg-gray-50 rounded border border-gray-200 text-xs font-mono">
                width="100%" height="520"
              </code>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

