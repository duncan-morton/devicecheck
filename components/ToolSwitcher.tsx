'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { getLocaleFromPath, getPathWithoutLocale, type Locale } from '@/i18n/getTranslation'
import { localizePathIfSupported } from '@/lib/i18n/routeLocaleSupport'
import { CheckCircle2, Camera, Mic, Keyboard, Monitor, Video, AlertCircle, ChevronDown } from 'lucide-react'
import AdBanner from '@/components/AdBanner'

const adsEnabled = process.env.NEXT_PUBLIC_ADSENSE_ENABLED === '1'

const tools = [
  { path: '/meeting-check', label: 'Full Check', icon: CheckCircle2 },
  { path: '/webcam', label: 'Webcam', icon: Camera },
  { path: '/mic', label: 'Mic', icon: Mic },
  { path: '/keyboard', label: 'Keyboard', icon: Keyboard },
  { path: '/screen', label: 'Screen', icon: Monitor },
]

const platformHubs = [
  { path: '/hubs/zoom-issues', label: 'Zoom' },
  { path: '/hubs/teams-issues', label: 'Teams' },
  { path: '/hubs/discord-issues', label: 'Discord' },
  { path: '/hubs/windows-device-issues', label: 'Windows' },
  { path: '/hubs/mac-device-issues', label: 'Mac' },
  { path: '/hubs/chrome-permissions-issues', label: 'Chrome' },
  { path: '/hubs/laptop-device-troubleshooting', label: 'Laptop' },
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
  const [platformsOpen, setPlatformsOpen] = useState(false)
  
  // Don't render on embed routes
  if (isEmbedRoute(pathname)) {
    return null
  }
  
  const locale = getLocaleFromPath(pathname)
  const homePath = localizePathIfSupported('/', locale)
  const isHubsActive = pathname != null && getPathWithoutLocale(pathname).startsWith('/hubs/')
  
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
          
          {/* Tool Links + Platforms + Issues */}
          <div className="flex items-center gap-1 flex-nowrap justify-end">
            {/* Platforms dropdown: desktop hover, mobile collapsible */}
            <div className="relative group">
              <button
                type="button"
                onClick={() => setPlatformsOpen((o) => !o)}
                aria-expanded={platformsOpen}
                aria-haspopup="true"
                className={
                  isHubsActive
                    ? 'px-3 py-1.5 rounded-md text-slate-900 font-medium bg-slate-100 transition-colors text-sm flex items-center gap-0.5'
                    : 'px-3 py-1.5 rounded-md text-slate-500 hover:text-slate-900 hover:bg-slate-50 transition-colors text-sm flex items-center gap-0.5'
                }
              >
                <span className="hidden sm:inline">Platforms</span>
                <ChevronDown size={14} className={`sm:ml-0.5 ${platformsOpen ? 'rotate-180' : ''} transition-transform md:rotate-0`} />
              </button>
              {/* Desktop: hover dropdown */}
              <div className="hidden md:block absolute top-full left-0 pt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity z-50 w-48 pointer-events-none group-hover:pointer-events-auto">
                <div className="bg-white rounded-lg border border-slate-200 shadow-lg py-1">
                  {platformHubs.map((hub) => (
                    <Link
                      key={hub.path}
                      href={localizePathIfSupported(hub.path, locale)}
                      className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                    >
                      {hub.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            {/* Mobile: collapsible list */}
            {platformsOpen && (
            <div className="md:hidden fixed left-0 right-0 top-14 bg-white border-b border-slate-200 shadow-lg z-50 max-h-[70vh] overflow-y-auto">
              <div className="max-w-6xl mx-auto px-4 py-2">
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">Platforms</p>
                <div className="flex flex-col gap-0.5">
                  {platformHubs.map((hub) => (
                    <Link
                      key={hub.path}
                      href={localizePathIfSupported(hub.path, locale)}
                      onClick={() => setPlatformsOpen(false)}
                      className="px-3 py-2 rounded-md text-sm text-slate-700 hover:bg-slate-50"
                    >
                      {hub.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            )}

            {tools.map((tool) => {
              const Icon = tool.icon
              const toolPath = localizePathIfSupported(tool.path, locale)
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
              href={localizePathIfSupported(issuesPath, locale)}
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

