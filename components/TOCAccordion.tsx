'use client'

import TOC from '@/components/TOC'

interface TOCAccordionProps {
  contentId?: string
  summaryText?: string
}

export default function TOCAccordion({ contentId = 'article-content', summaryText = 'On this page' }: TOCAccordionProps) {
  return (
    <details className="group mt-6 mb-6 bg-gray-50 border border-gray-200 rounded-xl overflow-hidden">
      <summary className="flex items-center justify-between list-none cursor-pointer px-4 py-3 text-sm font-semibold text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors [&::-webkit-details-marker]:hidden">
        <span>{summaryText}</span>
        <span className="text-gray-400 group-open:rotate-180 transition-transform" aria-hidden>▼</span>
      </summary>
      <div className="px-4 pb-4 pt-2 border-t border-gray-200">
        <TOC contentId={contentId} />
      </div>
    </details>
  )
}
