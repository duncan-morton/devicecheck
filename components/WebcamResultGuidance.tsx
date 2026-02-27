'use client'

import Link from 'next/link'
import { CheckCircle2, AlertTriangle, XCircle, Info } from 'lucide-react'
import type { WebcamDiagnostic } from '@/lib/deviceStatus/webcamStatus'

interface WebcamResultGuidanceProps {
  diagnostic: WebcamDiagnostic
  onRetry?: () => void
}

function qualityLabel(quality: WebcamDiagnostic['quality']): string {
  switch (quality) {
    case 'full_hd':
      return 'Full HD (1080p or higher)'
    case 'hd':
      return 'HD (720p)'
    case 'low':
      return 'Lower resolution'
    default:
      return 'Resolution not detected'
  }
}

export default function WebcamResultGuidance({ diagnostic, onRetry }: WebcamResultGuidanceProps) {
  const { status, quality, width, height } = diagnostic

  const dimensionText =
    width && height ? `${width}×${height}` : undefined

  if (status === 'ok') {
    return (
      <section className="mt-6">
        <div className="bg-green-50 border border-green-200 rounded-xl p-4 md:p-5 flex flex-col md:flex-row gap-4 md:items-center">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="text-green-600 mt-0.5" />
            <div>
              <h3 className="font-semibold text-green-900 mb-1">Camera detected and streaming</h3>
              <p className="text-sm text-green-800">
                {qualityLabel(quality)}
                {dimensionText ? ` · ${dimensionText}` : ''}
              </p>
              {quality === 'low' && (
                <div className="mt-3 rounded-lg border border-yellow-200 bg-yellow-50 px-3 py-2">
                  <p className="text-xs md:text-sm text-yellow-900 font-medium mb-1">
                    Your camera is running at a low resolution. This can look blurry in Teams or Zoom.
                  </p>
                  <ul className="list-disc pl-5 text-xs md:text-sm text-yellow-900 space-y-1">
                    <li>In your meeting app, pick the correct camera from the device dropdown.</li>
                    <li>Close other apps that might be forcing a lower resolution.</li>
                    <li>Improve your lighting so the camera doesn’t downscale as aggressively.</li>
                  </ul>
                  <Link
                    href="/guides/improve-webcam-quality"
                    className="mt-2 inline-flex text-xs md:text-sm font-medium text-yellow-900 hover:text-yellow-950"
                  >
                    Read tips to improve webcam quality →
                  </Link>
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-wrap gap-3 md:ml-auto">
            <Link
              href="/mic"
              className="inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm font-medium bg-white text-green-900 border border-green-300 hover:bg-green-100 transition-colors"
            >
              Test Microphone
            </Link>
            <Link
              href="/meeting-check"
              className="inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm font-medium bg-green-600 text-white hover:bg-green-700 transition-colors"
            >
              Run Full Meeting Check
            </Link>
          </div>
        </div>
      </section>
    )
  }

  if (status === 'permission_denied') {
    return (
      <section className="mt-6">
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 md:p-5 flex flex-col gap-3">
          <div className="flex items-start gap-3">
            <AlertCircle className="text-yellow-600 mt-0.5" />
            <div>
              <h3 className="font-semibold text-yellow-900 mb-1">Camera access is blocked</h3>
              <p className="text-sm text-yellow-800 mb-2">
                Allow camera access in your browser, then reload this page.
              </p>
              <ul className="list-disc pl-5 text-sm text-yellow-800 space-y-1">
                <li>Click the lock icon in the address bar.</li>
                <li>Set Camera permissions to <strong>Allow</strong> for this site.</li>
                <li>Reload the page and run the test again.</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            {onRetry ? (
              <button
                type="button"
                onClick={onRetry}
                className="inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm font-medium bg-yellow-600 text-white hover:bg-yellow-700 transition-colors"
              >
                Retry webcam test
              </button>
            ) : (
              <a
                href="#test"
                className="inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm font-medium bg-yellow-600 text-white hover:bg-yellow-700 transition-colors"
              >
                Retry webcam test
              </a>
            )}
          </div>
        </div>
      </section>
    )
  }

  if (status === 'no_device') {
    return (
      <section className="mt-6">
        <div className="bg-red-50 border border-red-200 rounded-xl p-4 md:p-5 flex flex-col gap-3">
          <div className="flex items-start gap-3">
            <XCircle className="text-red-600 mt-0.5" />
            <div>
              <h3 className="font-semibold text-red-900 mb-1">No camera detected</h3>
              <p className="text-sm text-red-800 mb-2">
                Your browser cannot see a connected camera.
              </p>
              <ul className="list-disc pl-5 text-sm text-red-800 space-y-1">
                <li>Check that your webcam is plugged in or enabled.</li>
                <li>On laptops, make sure any camera privacy switch is turned off.</li>
                <li>Check system settings to confirm the camera is recognised.</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/guides/webcam-not-working"
              className="inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm font-medium bg-white text-red-900 border border-red-300 hover:bg-red-50 transition-colors"
            >
              View troubleshooting guide
            </Link>
          </div>
        </div>
      </section>
    )
  }

  if (status === 'in_use_elsewhere') {
    return (
      <section className="mt-6">
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 md:p-5 flex flex-col gap-3">
          <div className="flex items-start gap-3">
            <AlertCircle className="text-amber-600 mt-0.5" />
            <div>
              <h3 className="font-semibold text-amber-900 mb-1">Camera is in use by another app</h3>
              <p className="text-sm text-amber-800 mb-2">
                Another application is holding the camera.
              </p>
              <ul className="list-disc pl-5 text-sm text-amber-800 space-y-1">
                <li>Close Zoom, Teams, Discord, OBS, or other video apps.</li>
                <li>Close other browser tabs that might use the camera.</li>
                <li>Then come back here and retry the test.</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            {onRetry ? (
              <button
                type="button"
                onClick={onRetry}
                className="inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm font-medium bg-amber-600 text-white hover:bg-amber-700 transition-colors"
              >
                Retry webcam test
              </button>
            ) : (
              <a
                href="#test"
                className="inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm font-medium bg-amber-600 text-white hover:bg-amber-700 transition-colors"
              >
                Retry webcam test
              </a>
            )}
          </div>
        </div>
      </section>
    )
  }

  if (status === 'blocked_by_browser') {
    return (
      <section className="mt-6">
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 md:p-5 flex flex-col gap-3">
          <div className="flex items-start gap-3">
            <AlertCircle className="text-slate-600 mt-0.5" />
            <div>
              <h3 className="font-semibold text-slate-900 mb-1">Camera blocked by browser or security settings</h3>
              <p className="text-sm text-slate-700 mb-2">
                Browser or system security settings may be blocking camera access.
              </p>
              <ul className="list-disc pl-5 text-sm text-slate-700 space-y-1">
                <li>Check your browser privacy settings for camera access.</li>
                <li>On Windows or macOS, confirm camera access is allowed for browsers.</li>
                <li>Security software or corporate policies may also block the camera.</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            {onRetry ? (
              <button
                type="button"
                onClick={onRetry}
                className="inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm font-medium bg-slate-900 text-white hover:bg-black transition-colors"
              >
                Retry webcam test
              </button>
            ) : (
              <a
                href="#test"
                className="inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm font-medium bg-slate-900 text-white hover:bg-black transition-colors"
              >
                Retry webcam test
              </a>
            )}
          </div>
        </div>
      </section>
    )
  }

  // unknown_error or initial/edge cases
  return (
    <section className="mt-6">
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 md:p-5 flex flex-col gap-3">
        <div className="flex items-start gap-3">
          <Info className="text-slate-500 mt-0.5" />
          <div>
            <h3 className="font-semibold text-slate-900 mb-1">Having trouble with your camera?</h3>
            <p className="text-sm text-slate-700 mb-2">
              Something went wrong while accessing the camera. Follow our step-by-step guide to check permissions,
              drivers, and common issues.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/guides/webcam-not-working"
            className="inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm font-medium bg-white text-slate-900 border border-slate-300 hover:bg-slate-100 transition-colors"
          >
            Open webcam troubleshooting guide
          </Link>
        </div>
      </div>
    </section>
  )
}

