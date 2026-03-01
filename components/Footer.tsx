'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { getLocaleFromPath } from '@/i18n/getTranslation'
import { localizePathIfSupported } from '@/lib/i18n/routeLocaleSupport'

export default function Footer() {
  const pathname = usePathname()
  if (pathname.startsWith('/embed')) return null

  const locale = getLocaleFromPath(pathname)
  const year = new Date().getFullYear()

  return (
    <footer className="bg-white border-t border-slate-200 py-8 mt-auto">
      <div className="max-w-6xl mx-auto px-4">
        <nav className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-1">
            <Link
              href={localizePathIfSupported('/privacy', locale)}
              className="text-slate-500 hover:text-slate-900 text-sm transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href={localizePathIfSupported('/terms', locale)}
              className="text-slate-500 hover:text-slate-900 text-sm transition-colors"
            >
              Terms
            </Link>
            <Link
              href={localizePathIfSupported('/contact', locale)}
              className="text-slate-500 hover:text-slate-900 text-sm transition-colors"
            >
              Contact
            </Link>
          </div>
        </nav>
        <p className="text-slate-500 text-sm mt-4">
          DeviceCheck.io © {year}
        </p>
        <p className="text-slate-400 text-xs mt-1">
          All tests run locally in your browser.
        </p>
      </div>
    </footer>
  )
}
