'use client'

import { useEffect, useState } from 'react'

interface TOCProps {
  contentId?: string
}

export default function TOC({ contentId = 'article-content' }: TOCProps) {
  const [headings, setHeadings] = useState<Array<{ id: string; text: string; level: number }>>([])
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    // Wait for DOM to be ready
    const timer = setTimeout(() => {
      const contentElement = document.getElementById(contentId) || document
      const headingElements = contentElement.querySelectorAll('h2, h3')

      const headingData = Array.from(headingElements).map((heading, index) => {
        let id = heading.id
        if (!id) {
          // Generate ID from text content
          id = `heading-${heading.textContent?.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || index}`
          heading.id = id
        }
        return {
          id,
          text: heading.textContent || '',
          level: parseInt(heading.tagName.charAt(1))
        }
      })

      setHeadings(headingData)
    }, 100)

    return () => clearTimeout(timer)
  }, [contentId])

  useEffect(() => {
    const handleScroll = () => {
      const headingElements = headings.map(h => document.getElementById(h.id)).filter(Boolean) as HTMLElement[]
      
      if (headingElements.length === 0) return

      let current = ''
      for (let i = headingElements.length - 1; i >= 0; i--) {
        const rect = headingElements[i].getBoundingClientRect()
        if (rect.top <= 100) {
          current = headings[i].id
          break
        }
      }

      setActiveId(current || headings[0]?.id || '')
    }

    if (headings.length > 0) {
      window.addEventListener('scroll', handleScroll)
      handleScroll() // Check on mount

      return () => window.removeEventListener('scroll', handleScroll)
    }
  }, [headings])

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 100
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  if (headings.length === 0) return null

  return (
    <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
      <h2 className="text-lg font-semibold text-blue-900 mb-4">Table of Contents</h2>
      <nav className="space-y-2">
        {headings.map((heading) => (
          <button
            key={heading.id}
            onClick={() => scrollToHeading(heading.id)}
            className={`block w-full text-left px-3 py-2 rounded-lg transition-colors ${
              heading.level === 3 ? 'pl-6 text-sm' : 'font-medium'
            } ${
              activeId === heading.id
                ? 'bg-blue-100 text-blue-900'
                : 'text-blue-700 hover:bg-blue-100 hover:text-blue-900'
            }`}
          >
            {heading.text}
          </button>
        ))}
      </nav>
    </div>
  )
}

