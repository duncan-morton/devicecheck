'use client'

import { useEffect, useState } from 'react'
import { ArrowUp, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

interface StickyActionBarProps {
  toolName: string
  toolHref: string
}

export default function StickyActionBar({ toolName, toolHref }: StickyActionBarProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      setIsVisible(scrollPercentage > 30)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check on mount

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between max-w-4xl mx-auto">
          <Link
            href={toolHref}
            className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to {toolName}</span>
          </Link>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors font-medium"
          >
            <span>Scroll to Top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}

