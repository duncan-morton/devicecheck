import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'
import JsonLdScript from '@/components/JsonLdScript'
import { generateBreadcrumbListSchema } from '@/lib/seo/jsonLd'
import { getLocalizedPath, type Locale } from '@/i18n/getTranslation'

interface BreadcrumbItem {
  name: string
  path: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
  locale?: Locale
}

export default function Breadcrumbs({ items, locale = 'en' }: BreadcrumbsProps) {
  const homePath = locale === 'en' ? '/' : `/${locale}`
  const allItems = [
    { name: 'Home', path: homePath },
    ...items.map(item => ({ ...item, path: getLocalizedPath(item.path, locale) }))
  ]

  const jsonLd = generateBreadcrumbListSchema(allItems, locale)

  return (
    <>
      <JsonLdScript data={jsonLd} />
      <nav aria-label="Breadcrumb" className="mb-6">
        <ol className="flex items-center gap-2 text-sm text-gray-600 flex-wrap">
          {allItems.map((item, index) => {
            const isLast = index === allItems.length - 1
            
            return (
              <li key={item.path} className="flex items-center gap-2">
                {index === 0 ? (
                  <Link 
                    href={item.path}
                    className="hover:text-gray-900 transition-colors flex items-center gap-1"
                  >
                    <Home size={16} />
                    <span className="sr-only">Home</span>
                  </Link>
                ) : (
                  <>
                    <ChevronRight size={16} className="text-gray-400" />
                    {isLast ? (
                      <span className="text-gray-900 font-medium" aria-current="page">
                        {item.name}
                      </span>
                    ) : (
                      <Link 
                        href={item.path}
                        className="hover:text-gray-900 transition-colors"
                      >
                        {item.name}
                      </Link>
                    )}
                  </>
                )}
              </li>
            )
          })}
        </ol>
      </nav>
    </>
  )
}

