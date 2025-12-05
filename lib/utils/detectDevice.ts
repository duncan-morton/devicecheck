'use client'

export interface DeviceInfo {
  os: 'Windows' | 'Mac' | 'Linux' | 'iOS' | 'Android' | 'Unknown'
  browser: 'Chrome' | 'Firefox' | 'Safari' | 'Edge' | 'Opera' | 'Unknown'
}

export function detectDevice(): DeviceInfo {
  if (typeof window === 'undefined') {
    return { os: 'Unknown', browser: 'Unknown' }
  }

  const userAgent = window.navigator.userAgent.toLowerCase()

  // Detect OS
  let os: DeviceInfo['os'] = 'Unknown'
  if (userAgent.includes('win')) {
    os = 'Windows'
  } else if (userAgent.includes('mac')) {
    os = 'Mac'
  } else if (userAgent.includes('linux')) {
    os = 'Linux'
  } else if (userAgent.includes('iphone') || userAgent.includes('ipad')) {
    os = 'iOS'
  } else if (userAgent.includes('android')) {
    os = 'Android'
  }

  // Detect Browser
  let browser: DeviceInfo['browser'] = 'Unknown'
  if (userAgent.includes('chrome') && !userAgent.includes('edg')) {
    browser = 'Chrome'
  } else if (userAgent.includes('firefox')) {
    browser = 'Firefox'
  } else if (userAgent.includes('safari') && !userAgent.includes('chrome')) {
    browser = 'Safari'
  } else if (userAgent.includes('edg')) {
    browser = 'Edge'
  } else if (userAgent.includes('opera') || userAgent.includes('opr')) {
    browser = 'Opera'
  }

  return { os, browser }
}

