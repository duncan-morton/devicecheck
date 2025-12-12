'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { getLocaleFromPath, getLocalizedPath, getPathWithoutLocale, type Locale } from '@/i18n/getTranslation'
import { CheckCircle2, Camera, Mic, Keyboard, Monitor, Video, AlertCircle } from 'lucide-react'

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
    <nav className="border-b border-slate-200 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex items-center justify-between h-14">
          {/* Logo / Home */}
          <Link
            href={homePath}
            aria-label="DeviceCheck home"
            className="flex items-center gap-2 px-2 py-2 text-slate-700 hover:text-slate-900 transition-colors"
          >
            <CheckCircle2 size={18} className="text-blue-600" />
            <span className="text-sm font-medium">DeviceCheck.io</span>
          </Link>
          
          {/* Tool Links */}
          <div className="flex items-center gap-1 flex-wrap justify-end">
            {tools.map((tool) => {
              const Icon = tool.icon
              const toolPath = getLocalizedPath(tool.path, locale)
              const isActive = isActiveRoute(pathname, tool.path)
              
              return (
                <Link
                  key={tool.path}
                  href={toolPath}
                  className={`
                    px-3 py-1.5 text-sm rounded-md transition-colors
                    ${isActive 
                      ? 'bg-slate-100 text-slate-900 font-medium' 
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                    }
                  `}
                >
                  <span className="hidden sm:inline">{tool.label}</span>
                  <Icon size={16} className="sm:hidden" />
                </Link>
              )
            })}
            
            {/* Issues link (lighter emphasis) */}
            <Link
              href={getLocalizedPath(issuesPath, locale)}
              className={`
                px-3 py-1.5 text-sm rounded-md transition-colors
                ${isActiveRoute(pathname, issuesPath)
                  ? 'bg-slate-100 text-slate-900 font-medium'
                  : 'text-slate-500 hover:text-slate-700 hover:bg-slate-50'
                }
              `}
            >
              <span className="hidden sm:inline">Issues</span>
              <AlertCircle size={16} className="sm:hidden" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

