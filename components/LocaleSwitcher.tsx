'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { getLocaleFromPath, getPathWithoutLocale, SUPPORTED_LOCALES, LOCALE_NAMES, type Locale } from '@/i18n/getTranslation'
import { localizePathIfSupported } from '@/lib/i18n/routeLocaleSupport'

export default function LocaleSwitcher() {
  const pathname = usePathname()
  const currentLocale = getLocaleFromPath(pathname)
  const pathWithoutLocale = getPathWithoutLocale(pathname)

  return (
    <div className="relative inline-block">
      <select
        value={currentLocale}
        onChange={(e) => {
          const newLocale = e.target.value as Locale
          const newPath = localizePathIfSupported(pathWithoutLocale, newLocale)
          window.location.href = newPath
        }}
        className="appearance-none bg-white border border-gray-300 rounded px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 cursor-pointer"
        aria-label="Select language"
      >
        {SUPPORTED_LOCALES.map((locale) => (
          <option key={locale} value={locale}>
            {LOCALE_NAMES[locale]}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </div>
    </div>
  )
}

export function LocaleSwitcherLinks() {
  const pathname = usePathname()
  const currentLocale = getLocaleFromPath(pathname)
  const pathWithoutLocale = getPathWithoutLocale(pathname)

  return (
    <div className="flex items-center gap-2 flex-wrap">
      {SUPPORTED_LOCALES.map((locale) => {
        const isActive = locale === currentLocale
        const href = localizePathIfSupported(pathWithoutLocale, locale)
        
        return (
          <Link
            key={locale}
            href={href}
            className={`px-3 py-1 text-sm font-medium rounded transition-colors ${
              isActive
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {LOCALE_NAMES[locale]}
          </Link>
        )
      })}
    </div>
  )
}



