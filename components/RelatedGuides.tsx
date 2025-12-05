'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface RelatedGuide {
  title: string
  href: string
}

interface RelatedGuidesProps {
  guides: RelatedGuide[]
}

export default function RelatedGuides({ guides }: RelatedGuidesProps) {
  if (guides.length === 0) return null

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 my-8">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">Related Fixes</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {guides.map((guide) => (
          <Link
            key={guide.href}
            href={guide.href}
            className="group flex items-center justify-between p-4 rounded-lg border border-gray-200 hover:border-blue-500 hover:shadow-md transition-all duration-200 bg-white"
          >
            <span className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
              {guide.title}
            </span>
            <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
          </Link>
        ))}
      </div>
    </div>
  )
}

