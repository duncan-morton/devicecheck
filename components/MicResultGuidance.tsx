'use client'

import Link from 'next/link'
import { CheckCircle2, AlertCircle, XCircle, Info } from 'lucide-react'
import type { MicDiagnostic } from '@/lib/deviceStatus/micStatus'

interface MicResultGuidanceProps {
  diagnostic: MicDiagnostic
  onRetry?: () => void
}

function levelLabel(level: number | undefined): string {
  if (level == null || level <= 0.02) return 'Low'
  if (level <= 0.2) return 'Medium'
  return 'Strong'
}

export default function MicResultGuidance({ diagnostic, onRetry }: MicResultGuidanceProps) {
  const { status, level } = diagnostic

  if (status === 'ok') {
    return (
      <section className="mt-6 min-h-[280px]">
        <div className="bg-green-50 border border-green-200 rounded-xl p-4 md:p-5 flex flex-col md:flex-row gap-4 md:items-start min-h-[280px]">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="text-green-600 mt-0.5 shrink-0" />
            <div>
              <h3 className="font-semibold text-green-900 mb-1">Microphone detected and picking up sound</h3>
              <p className="text-sm text-green-800">
                Signal: {levelLabel(level)}
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3 md:ml-auto">
            <Link
              href="/webcam"
              className="inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm font-medium bg-white text-green-900 border border-green-300 hover:bg-green-100 transition-colors"
            >
              Test Webcam
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
      <section className="mt-6 min-h-[280px]">
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 md:p-5 flex flex-col gap-3 min-h-[280px]">
          <div className="flex items-start gap-3">
            <AlertCircle className="text-yellow-600 mt-0.5 shrink-0" />
            <div>
              <h3 className="font-semibold text-yellow-900 mb-1">Microphone access is blocked</h3>
              <p className="text-sm text-yellow-800 mb-2">
                Allow microphone access in your browser, then reload this page.
              </p>
              <ul className="list-disc pl-5 text-sm text-yellow-800 space-y-1">
                <li>Click the lock icon in the address bar.</li>
                <li>Set Microphone permissions to <strong>Allow</strong> for this site.</li>
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
                Retry microphone test
              </button>
            ) : (
              <a
                href="#test"
                className="inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm font-medium bg-yellow-600 text-white hover:bg-yellow-700 transition-colors"
              >
                Retry microphone test
              </a>
            )}
          </div>
        </div>
      </section>
    )
  }

  if (status === 'no_device') {
    return (
      <section className="mt-6 min-h-[280px]">
        <div className="bg-red-50 border border-red-200 rounded-xl p-4 md:p-5 flex flex-col gap-3 min-h-[280px]">
          <div className="flex items-start gap-3">
            <XCircle className="text-red-600 mt-0.5 shrink-0" />
            <div>
              <h3 className="font-semibold text-red-900 mb-1">No microphone detected</h3>
              <p className="text-sm text-red-800 mb-2">
                Your browser cannot see an input device.
              </p>
              <ul className="list-disc pl-5 text-sm text-red-800 space-y-1">
                <li>Plug in a headset or external microphone.</li>
                <li>Check system sound settings and confirm the input device is selected.</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/guides/microphone-not-working"
              className="inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm font-medium bg-white text-red-900 border border-red-300 hover:bg-red-50 transition-colors"
            >
              Open troubleshooting guide
            </Link>
          </div>
        </div>
      </section>
    )
  }

  if (status === 'input_muted') {
    return (
      <section className="mt-6 min-h-[280px]">
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 md:p-5 flex flex-col gap-3 min-h-[280px]">
          <div className="flex items-start gap-3">
            <AlertCircle className="text-amber-600 mt-0.5 shrink-0" />
            <div>
              <h3 className="font-semibold text-amber-900 mb-1">Microphone is muted</h3>
              <p className="text-sm text-amber-800 mb-2">
                The input is muted or disabled.
              </p>
              <ul className="list-disc pl-5 text-sm text-amber-800 space-y-1">
                <li>Unmute any hardware mute switch on your headset or mic.</li>
                <li>Check OS input volume and mute in system settings.</li>
                <li>If you use Teams or Zoom, make sure the app mute toggle is off.</li>
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
                Retry microphone test
              </button>
            ) : (
              <a
                href="#test"
                className="inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm font-medium bg-amber-600 text-white hover:bg-amber-700 transition-colors"
              >
                Retry microphone test
              </a>
            )}
          </div>
        </div>
      </section>
    )
  }

  if (status === 'no_audio_detected') {
    return (
      <section className="mt-6 min-h-[280px]">
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 md:p-5 flex flex-col gap-3 min-h-[280px]">
          <div className="flex items-start gap-3">
            <AlertCircle className="text-amber-600 mt-0.5 shrink-0" />
            <div>
              <h3 className="font-semibold text-amber-900 mb-1">No sound detected</h3>
              <p className="text-sm text-amber-800 mb-2">
                The microphone is working but no audio is being picked up.
              </p>
              <ul className="list-disc pl-5 text-sm text-amber-800 space-y-1">
                <li>Speak a bit louder or move closer to the mic.</li>
                <li>Select the correct microphone in your system or browser.</li>
                <li>Check the input level in system sound settings.</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/guides/microphone-too-quiet"
              className="inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm font-medium bg-white text-amber-900 border border-amber-300 hover:bg-amber-50 transition-colors"
            >
              Improve mic volume guide
            </Link>
          </div>
        </div>
      </section>
    )
  }

  if (status === 'in_use_elsewhere') {
    return (
      <section className="mt-6 min-h-[280px]">
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 md:p-5 flex flex-col gap-3 min-h-[280px]">
          <div className="flex items-start gap-3">
            <AlertCircle className="text-amber-600 mt-0.5 shrink-0" />
            <div>
              <h3 className="font-semibold text-amber-900 mb-1">Microphone is in use by another app</h3>
              <p className="text-sm text-amber-800 mb-2">
                Zoom, Teams, Discord, or another application may be using the microphone.
              </p>
              <ul className="list-disc pl-5 text-sm text-amber-800 space-y-1">
                <li>Close or mute the mic in the other app, or close the app.</li>
                <li>Then retry the test here.</li>
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
                Retry microphone test
              </button>
            ) : (
              <a
                href="#test"
                className="inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm font-medium bg-amber-600 text-white hover:bg-amber-700 transition-colors"
              >
                Retry microphone test
              </a>
            )}
          </div>
        </div>
      </section>
    )
  }

  if (status === 'blocked_by_browser') {
    return (
      <section className="mt-6 min-h-[280px]">
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 md:p-5 flex flex-col gap-3 min-h-[280px]">
          <div className="flex items-start gap-3">
            <AlertCircle className="text-slate-600 mt-0.5 shrink-0" />
            <div>
              <h3 className="font-semibold text-slate-900 mb-1">Microphone blocked by browser or security</h3>
              <p className="text-sm text-slate-700 mb-2">
                Browser or system security settings may be blocking microphone access.
              </p>
              <ul className="list-disc pl-5 text-sm text-slate-700 space-y-1">
                <li>Check browser privacy settings for microphone access.</li>
                <li>On Windows or macOS, confirm microphone access is allowed for browsers.</li>
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
                Retry microphone test
              </button>
            ) : (
              <a
                href="#test"
                className="inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm font-medium bg-slate-900 text-white hover:bg-black transition-colors"
              >
                Retry microphone test
              </a>
            )}
          </div>
        </div>
      </section>
    )
  }

  // unknown_error
  return (
    <section className="mt-6 min-h-[280px]">
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 md:p-5 flex flex-col gap-3 min-h-[280px]">
        <div className="flex items-start gap-3">
          <Info className="text-slate-500 mt-0.5 shrink-0" />
          <div>
            <h3 className="font-semibold text-slate-900 mb-1">Having trouble with your microphone?</h3>
            <p className="text-sm text-slate-700 mb-2">
              Something went wrong. Follow our guide to check permissions, device selection, and common issues.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/guides/microphone-not-working"
            className="inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm font-medium bg-white text-slate-900 border border-slate-300 hover:bg-slate-100 transition-colors"
          >
            Open microphone troubleshooting guide
          </Link>
        </div>
      </div>
    </section>
  )
}
