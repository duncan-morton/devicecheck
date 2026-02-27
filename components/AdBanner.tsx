'use client'

import { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'

const adsEnabled = process.env.NEXT_PUBLIC_ADSENSE_ENABLED === '1'

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

function checkFilled(el: HTMLElement | null): boolean {
  if (!el) return false
  const status = el.getAttribute('data-ad-status')
  if (status === 'filled') return true
  if (el.offsetHeight > 0) return true
  return false
}

export default function AdBanner({ placement, className = '' }: AdBannerProps) {
  const insRef = useRef<HTMLModElement | null>(null)
  const [isFilled, setIsFilled] = useState(false)
  const pathname = usePathname()

  if (!adsEnabled) {
    return null
  }

  const isEmbedRoute = /^\/([a-z]{2}\/)?embed(\/|$)/.test(pathname)
  if (isEmbedRoute) {
    return null
  }

  useEffect(() => {
    const el = insRef.current
    if (!el || el.dataset.loaded === 'true') return

    try {
      ;(window.adsbygoogle = window.adsbygoogle || []).push({})
      el.dataset.loaded = 'true'
    } catch (err) {
      console.warn('Automated AdSense render skipped', err)
    }
  }, [])

  useEffect(() => {
    const timeouts: ReturnType<typeof setTimeout>[] = []
    const delays = [300, 800, 1500]

    delays.forEach((delay) => {
      const id = setTimeout(() => {
        if (checkFilled(insRef.current)) {
          setIsFilled(true)
        }
      }, delay)
      timeouts.push(id)
    })

    return () => {
      timeouts.forEach((id) => clearTimeout(id))
    }
  }, [])

  return (
    <div
      className={
        isFilled
          ? `w-full mx-auto ${CONTAINER_CLASSES[placement]} ${className}`.trim()
          : 'h-0 min-h-0 overflow-hidden'
      }
    >
      <ins
        ref={insRef}
        className="adsbygoogle block w-full h-full"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-1784695246771462"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  )
}
