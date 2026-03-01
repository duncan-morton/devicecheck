import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { type Locale } from '@/i18n/getTranslation'
import { localizePathIfSupported } from '@/lib/i18n/routeLocaleSupport'

const PLATFORM_HUBS = [
  { name: 'Zoom', path: '/hubs/zoom-issues', description: 'Fix Zoom mic and camera issues for meetings.' },
  { name: 'Microsoft Teams', path: '/hubs/teams-issues', description: 'Fix Microsoft Teams audio and video problems.' },
  { name: 'Windows', path: '/hubs/windows-device-issues', description: 'Fix Windows 10/11 device and permission issues.' },
  { name: 'Mac', path: '/hubs/mac-device-issues', description: 'Fix macOS and MacBook device issues.' },
  { name: 'Chrome', path: '/hubs/chrome-permissions-issues', description: 'Unblock camera and mic in Chrome and browsers.' },
  { name: 'Discord', path: '/hubs/discord-issues', description: 'Fix Discord voice and video not working.' },
  { name: 'Laptop', path: '/hubs/laptop-device-troubleshooting', description: 'Laptop mic, webcam, and keyboard fixes.' }
]

interface FixByPlatformSectionProps {
  locale?: Locale
}

export default function FixByPlatformSection({ locale = 'en' }: FixByPlatformSectionProps) {
  return (
    <section className="mb-8" aria-labelledby="fix-by-platform-heading">
      <h2 id="fix-by-platform-heading" className="text-lg font-semibold text-gray-900 mb-2">
        Fix device problems by platform
      </h2>
      <p className="text-gray-600 text-sm mb-4 max-w-2xl">
        Most device issues are caused by app, browser, or operating system conflicts. Choose your platform for targeted fixes.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {PLATFORM_HUBS.map((hub) => (
          <Link
            key={hub.path}
            href={localizePathIfSupported(hub.path, locale)}
            className="group bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-sm transition-all flex items-start justify-between gap-3"
          >
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                {hub.name}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">{hub.description}</p>
            </div>
            <ArrowRight size={18} className="text-slate-400 group-hover:text-blue-600 shrink-0 mt-0.5" />
          </Link>
        ))}
      </div>
    </section>
  )
}
