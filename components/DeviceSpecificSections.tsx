'use client'

import { useEffect, useState, ReactNode } from 'react'
import { detectDevice } from '@/lib/utils/detectDevice'

interface DeviceSpecificSectionsProps {
  children: ReactNode
}

export default function DeviceSpecificSections({ children }: DeviceSpecificSectionsProps) {
  const [deviceInfo, setDeviceInfo] = useState<ReturnType<typeof detectDevice> | null>(null)

  useEffect(() => {
    setDeviceInfo(detectDevice())
  }, [])

  if (!deviceInfo) {
    return <>{children}</>
  }

  // This component doesn't actually reorder - it just provides device info
  // The reordering will be handled by moving sections in the guide pages themselves
  // This is a placeholder that can be used if needed for future enhancements
  return <>{children}</>
}

