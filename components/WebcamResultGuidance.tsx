'use client'

import { useState } from 'react'
import Link from 'next/link'
import { CheckCircle2, AlertCircle, XCircle, Info, ChevronDown, ChevronUp } from 'lucide-react'
import type { WebcamDiagnostic } from '@/lib/deviceStatus/webcamStatus'

interface WebcamResultGuidanceProps {
  diagnostic: WebcamDiagnostic
  onRetry?: () => void
}

function resolutionLabel(quality: WebcamDiagnostic['quality']): string {
  switch (quality) {
    case 'full_hd':
      return 'Full HD'
    case 'hd':
      return 'HD (720p)'
    case 'low':
      return 'Low resolution'
    default:
      return 'Unknown'
  }
}

export default function WebcamResultGuidance({ diagnostic, onRetry }: WebcamResultGuidanceProps) {
  const { status, quality, width, height } = diagnostic
  const [showMoreTips, setShowMoreTips] = useState(false)

  const dimensionText = width && height ? `${width}×${height}` : undefined
  const resolutionNote = dimensionText ? `Detected: ${dimensionText} (${resolutionLabel(quality)})` : null

  if (status === 'ok') {
    const mainTips = [
      'Pick the correct camera in your meeting app.',
      'Close other apps that might force lower resolution.',
      'Improve lighting to avoid blur.',
    ]
    const extraTips = [
      'Use the grid to position eyes in the top third.',
      'Keep light in front of you, not behind.',
    ]
    return (
      <section className="mt-0">
        <div className="bg-green-50 border border-green-200 rounded-xl p-4 md:p-5 flex flex-col gap-4">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="text-green-600 mt-0.5 shrink-0" />
            <div className="min-w-0">
              <h3 className="font-semibold text-green-900">Camera Working</h3>
              {resolutionNote && (
                <p className="text-sm text-green-800 mt-0.5">{resolutionNote}</p>
              )}
              {quality === 'low' && (
                <>
                  <ul className="list-disc pl-5 text-sm text-green-800 space-y-0.5 mt-2">
                    {mainTips.map((tip, i) => (
                      <li key={i}>{tip}</li>
                    ))}
                    {showMoreTips && extraTips.map((tip, i) => (
                      <li key={`e-${i}`}>{tip}</li>
                    ))}
                  </ul>
                  <button
                    type="button"
                    onClick={() => setShowMoreTips(!showMoreTips)}
                    className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-green-800 hover:text-green-900"
                  >
                    {showMoreTips ? <>Less</> : <>More tips</>}
                    {showMoreTips ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                  </button>
                  <Link
                    href="/guides/improve-webcam-quality"
                    className="mt-2 inline-block text-xs font-medium text-green-800 hover:text-green-950"
                  >
                    Improve webcam quality →
                  </Link>
                </>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap">
            <Link
              href="/meeting-check"
              className="inline-flex items-center justify-center w-full sm:w-auto px-4 py-2.5 rounded-lg text-sm font-medium bg-green-600 text-white hover:bg-green-700 transition-colors"
            >
              Run Full Meeting Check
            </Link>
            <Link
              href="/mic"
              className="inline-flex items-center justify-center w-full sm:w-auto px-4 py-2.5 rounded-lg text-sm font-medium bg-white text-green-900 border border-green-300 hover:bg-green-100 transition-colors"
            >
              Test Microphone
            </Link>
          </div>
        </div>
      </section>
    )
  }

  if (status === 'permission_denied') {
    return (
      <section className="mt-0">
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 md:p-5 flex flex-col gap-4">
          <div className="flex items-start gap-3">
            <AlertCircle className="text-yellow-600 mt-0.5 shrink-0" />
            <div className="min-w-0">
              <h3 className="font-semibold text-yellow-900">Camera Blocked</h3>
              <ul className="list-disc pl-5 text-sm text-yellow-800 space-y-0.5 mt-1">
                <li>Click the lock icon in the address bar.</li>
                <li>Set Camera to <strong>Allow</strong> for this site.</li>
                <li>Reload the page and retry.</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            {onRetry ? (
              <button
                type="button"
                onClick={onRetry}
                className="inline-flex items-center justify-center w-full sm:w-auto px-4 py-2.5 rounded-lg text-sm font-medium bg-yellow-600 text-white hover:bg-yellow-700 transition-colors"
              >
                Retry webcam test
              </button>
            ) : (
              <a
                href="#test"
                className="inline-flex items-center justify-center w-full sm:w-auto px-4 py-2.5 rounded-lg text-sm font-medium bg-yellow-600 text-white hover:bg-yellow-700 transition-colors"
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
    const mainTips = ['Check that your webcam is plugged in or enabled.', 'Turn off any camera privacy switch on laptops.', 'Confirm the camera in system settings.']
    return (
      <section className="mt-0">
        <div className="bg-red-50 border border-red-200 rounded-xl p-4 md:p-5 flex flex-col gap-4">
          <div className="flex items-start gap-3">
            <XCircle className="text-red-600 mt-0.5 shrink-0" />
            <div className="min-w-0">
              <h3 className="font-semibold text-red-900">No Camera Detected</h3>
              <ul className="list-disc pl-5 text-sm text-red-800 space-y-0.5 mt-1">
                {mainTips.map((tip, i) => (
                  <li key={i}>{tip}</li>
                ))}
              </ul>
            </div>
          </div>
          <Link
            href="/guides/webcam-not-working"
            className="inline-flex items-center justify-center w-full sm:w-auto px-4 py-2.5 rounded-lg text-sm font-medium bg-white text-red-900 border border-red-300 hover:bg-red-50 transition-colors"
          >
            View troubleshooting guide
          </Link>
        </div>
      </section>
    )
  }

  if (status === 'in_use_elsewhere') {
    const mainTips = ['Close Zoom, Teams, Discord, or other video apps.', 'Close browser tabs using the camera.', 'Retry the test here.']
    return (
      <section className="mt-0">
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 md:p-5 flex flex-col gap-4">
          <div className="flex items-start gap-3">
            <AlertCircle className="text-amber-600 mt-0.5 shrink-0" />
            <div className="min-w-0">
              <h3 className="font-semibold text-amber-900">Camera In Use</h3>
              <ul className="list-disc pl-5 text-sm text-amber-800 space-y-0.5 mt-1">
                {mainTips.map((tip, i) => (
                  <li key={i}>{tip}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            {onRetry ? (
              <button
                type="button"
                onClick={onRetry}
                className="inline-flex items-center justify-center w-full sm:w-auto px-4 py-2.5 rounded-lg text-sm font-medium bg-amber-600 text-white hover:bg-amber-700 transition-colors"
              >
                Retry webcam test
              </button>
            ) : (
              <a
                href="#test"
                className="inline-flex items-center justify-center w-full sm:w-auto px-4 py-2.5 rounded-lg text-sm font-medium bg-amber-600 text-white hover:bg-amber-700 transition-colors"
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
    const mainTips = ['Check browser privacy settings for camera access.', 'Confirm camera access for browsers in Windows or macOS.', 'Security or corporate policy may block the camera.']
    return (
      <section className="mt-0">
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 md:p-5 flex flex-col gap-4">
          <div className="flex items-start gap-3">
            <AlertCircle className="text-slate-600 mt-0.5 shrink-0" />
            <div className="min-w-0">
              <h3 className="font-semibold text-slate-900">Camera Blocked</h3>
              <ul className="list-disc pl-5 text-sm text-slate-700 space-y-0.5 mt-1">
                {mainTips.map((tip, i) => (
                  <li key={i}>{tip}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            {onRetry ? (
              <button
                type="button"
                onClick={onRetry}
                className="inline-flex items-center justify-center w-full sm:w-auto px-4 py-2.5 rounded-lg text-sm font-medium bg-slate-900 text-white hover:bg-black transition-colors"
              >
                Retry webcam test
              </button>
            ) : (
              <a
                href="#test"
                className="inline-flex items-center justify-center w-full sm:w-auto px-4 py-2.5 rounded-lg text-sm font-medium bg-slate-900 text-white hover:bg-black transition-colors"
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
  const mainTips = ['Check browser and system camera permissions.', 'Update drivers (Windows) or macOS.', 'See the guide for step-by-step fixes.']
  return (
    <section className="mt-0">
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 md:p-5 flex flex-col gap-4">
        <div className="flex items-start gap-3">
          <Info className="text-slate-500 mt-0.5 shrink-0" />
          <div className="min-w-0">
            <h3 className="font-semibold text-slate-900">Camera Issue</h3>
            <ul className="list-disc pl-5 text-sm text-slate-700 space-y-0.5 mt-1">
              {mainTips.map((tip, i) => (
                <li key={i}>{tip}</li>
              ))}
            </ul>
          </div>
        </div>
        <Link
          href="/guides/webcam-not-working"
          className="inline-flex items-center justify-center w-full sm:w-auto px-4 py-2.5 rounded-lg text-sm font-medium bg-white text-slate-900 border border-slate-300 hover:bg-slate-100 transition-colors"
        >
          Open troubleshooting guide
        </Link>
      </div>
    </section>
  )
}

