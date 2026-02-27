'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { getLocaleFromPath, getLocalizedPath, getPathWithoutLocale, type Locale } from '@/i18n/getTranslation'
import { CheckCircle2, Camera, Mic, Keyboard, Monitor, Video, AlertCircle } from 'lucide-react'
import AdBanner from '@/components/AdBanner'

const adsEnabled = process.env.NEXT_PUBLIC_ADSENSE_ENABLED === '1'

const tools = [
  { path: '/meeting-check', label: 'Full Check', icon: CheckCircle2 },
  { path: '/webcam', label: 'Webcam', icon: Camera },
  { path: '/mic', label: 'Mic', icon: Mic },
  { path: '/keyboard', label: 'Keyboard', icon: Keyboard },
  { path: '/screen', label: 'Screen', icon: Monitor },
]

const issuesPath = '/issues'

function isEmbedRoute(pathname: string): boolean {
  return pathname.startsWith('/embed')
}

function isActiveRoute(currentPath: string, targetPath: string): boolean {
  const currentBase = getPathWithoutLocale(currentPath)
  const targetBase = targetPath
  
  // Exact match
  if (currentBase === targetBase) return true
  
  // For /issues, match any path starting with /issues
  if (targetBase === '/issues' && currentBase.startsWith('/issues')) return true
  
  return false
}

export default function ToolSwitcher() {
  const pathname = usePathname()
  
  // Don't render on embed routes
  if (isEmbedRoute(pathname)) {
    return null
  }
  
  const locale = getLocaleFromPath(pathname)
  const homePath = getLocalizedPath('/', locale)
  
  return (
    <nav className="bg-transparent w-full">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Logo / Home */}
          <Link
            href={homePath}
            aria-label="DeviceCheck home"
            className="flex items-center gap-2 px-2 py-2 text-slate-700 hover:text-slate-900 transition-colors rounded-md"
          >
            <CheckCircle2 size={18} className="text-blue-600" />
            <span className="text-sm font-medium">DeviceCheck.io</span>
          </Link>
          
          {/* Tool Links */}
          <div className="flex items-center gap-1 flex-nowrap justify-end">
            {tools.map((tool) => {
              const Icon = tool.icon
              const toolPath = getLocalizedPath(tool.path, locale)
              const isActive = isActiveRoute(pathname, tool.path)
              
              return (
                <Link
                  key={tool.path}
                  href={toolPath}
                  aria-current={isActive ? 'page' : undefined}
                  className={
                    isActive
                      ? 'px-3 py-1.5 rounded-md text-slate-900 font-medium bg-slate-100 transition-colors text-sm'
                      : 'px-3 py-1.5 rounded-md text-slate-500 hover:text-slate-900 hover:bg-slate-50 transition-colors text-sm'
                  }
                >
                  <span className="hidden sm:inline">{tool.label}</span>
                  <Icon size={16} className="sm:hidden" />
                </Link>
              )
            })}
            
            {/* Issues link (lighter emphasis) */}
            <Link
              href={getLocalizedPath(issuesPath, locale)}
              aria-current={isActiveRoute(pathname, issuesPath) ? 'page' : undefined}
              className={
                isActiveRoute(pathname, issuesPath)
                  ? 'px-3 py-1.5 rounded-md text-slate-900 font-medium bg-slate-100 transition-colors text-sm'
                  : 'px-3 py-1.5 rounded-md text-slate-500 hover:text-slate-900 hover:bg-slate-50 transition-colors text-sm'
              }
            >
              <span className="hidden sm:inline">Issues</span>
              <AlertCircle size={16} className="sm:hidden" />
            </Link>
          </div>
        </div>
        {adsEnabled && (
          <div className="pb-4 pt-1">
            <AdBanner placement="header" />
          </div>
        )}
      </div>
    </nav>
  )
}

