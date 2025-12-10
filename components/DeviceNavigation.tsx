'use client'

import Link from 'next/link'
import { Camera, Mic, Keyboard, Monitor, Video } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { getLocaleFromPath, getLocalizedPath, getTranslation, type Locale } from '@/i18n/getTranslation'

const tools = [
  {
    href: '/webcam',
    icon: Camera,
    title_key: 'webcam_test',
    description: 'Test your camera and check video quality'
  },
  {
    href: '/mic',
    icon: Mic,
    title_key: 'microphone_test',
    description: 'Check mic input levels and audio quality'
  },
  {
    href: '/keyboard',
    icon: Keyboard,
    title_key: 'keyboard_test',
    description: 'Test all keys and check for ghosting'
  },
  {
    href: '/screen',
    icon: Monitor,
    title_key: 'screen_test',
    description: 'Check for dead pixels and screen quality'
  },
  {
    href: '/meeting-check',
    icon: Video,
    title_key: 'meeting_check',
    description: 'Test connection for video calls'
  }
]

export default function DeviceNavigation() {
  const pathname = usePathname()
  const locale = getLocaleFromPath(pathname)
  const t = getTranslation(locale)
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 md:p-8 my-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">{t.test_another_device}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {tools.map((tool) => {
          const Icon = tool.icon
          return (
            <Link
              key={tool.href}
              href={getLocalizedPath(tool.href, locale)}
              className="group flex flex-col items-center p-4 rounded-lg border border-gray-200 hover:border-blue-500 hover:shadow-md transition-all duration-200 bg-white"
            >
              <div className="w-12 h-12 rounded-full bg-blue-50 group-hover:bg-blue-100 flex items-center justify-center mb-3 transition-colors">
                <Icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1 text-center group-hover:text-blue-600 transition-colors">
                {t[tool.title_key as keyof typeof t]}
              </h3>
              <p className="text-sm text-gray-600 text-center">{tool.description}</p>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

