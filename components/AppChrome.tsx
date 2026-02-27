'use client'

import { usePathname } from 'next/navigation'
import ToolSwitcher from '@/components/ToolSwitcher'

function isEmbedRoute(pathname: string): boolean {
  return pathname.startsWith('/embed')
}

export default function AppChrome({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  if (isEmbedRoute(pathname ?? '')) {
    return <>{children}</>
  }

  return (
    <>
      <header className="sticky top-0 z-40 w-full flex items-center bg-white/90 backdrop-blur-sm border-b border-slate-200/80 shadow-sm">
        <ToolSwitcher />
      </header>
      <main className="min-h-0 pt-16">
        {children}
      </main>
    </>
  )
}
