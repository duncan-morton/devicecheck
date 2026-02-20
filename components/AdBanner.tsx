'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'

declare global {
  interface Window {
    adsbygoogle?: unknown[]
  }
}

type AdPlacement = 'header' | 'tool' | 'guide' | 'footer'

const CONTAINER_CLASSES: Record<AdPlacement, string> = {
  header: 'max-w-[728px] min-h-[90px]',
  tool: 'max-w-[336px] min-h-[250px]',
  guide: 'max-w-[336px] min-h-[250px]',
  footer: 'max-w-[728px] min-h-[90px]',
}

interface AdBannerProps {
  placement: AdPlacement
  className?: string
}

export default function AdBanner({ placement, className = '' }: AdBannerProps) {
  const adRef = useRef<HTMLElement | null>(null)
  const pathname = usePathname()

  const isEmbedRoute = /^\/([a-z]{2}\/)?embed(\/|$)/.test(pathname)

  if (isEmbedRoute) {
    return null
  }

  useEffect(() => {
    if (!adRef.current || adRef.current.dataset.loaded === 'true') {
      return
    }

    try {
      ;(window.adsbygoogle = window.adsbygoogle || []).push({})
      adRef.current.dataset.loaded = 'true'
    } catch (err) {
      // Keep layout stable if ad blockers or delayed scripts prevent rendering.
      console.warn('Automated AdSense render skipped', err)
    }
  }, [])

  return (
    <div className={`w-full mx-auto ${CONTAINER_CLASSES[placement]} ${className}`}>
      <ins
        ref={adRef}
        className="adsbygoogle block w-full h-full"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-1784695246771462"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  )
}
