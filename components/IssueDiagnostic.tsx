'use client'

import { useState } from 'react'
import Link from 'next/link'
import WebcamTool from '@/components/WebcamTool'
import MicTool from '@/components/MicTool'
import KeyboardTool from '@/components/KeyboardTool'
import ScreenTool from '@/components/ScreenTool'

const DEVICE_LABELS: Record<string, string> = {
  webcam: 'webcam',
  mic: 'microphone',
  microphone: 'microphone',
  keyboard: 'keyboard',
  screen: 'screen',
}

export interface IssueDiagnosticProps {
  /** Device type: webcam, mic/microphone, keyboard, or screen. Other values render nothing. */
  device: 'webcam' | 'mic' | 'microphone' | 'keyboard' | 'screen' | string
  /** auto: mount tool immediately. defer: show Start diagnostic card first, mount tool on click. */
  mode?: 'auto' | 'defer'
}

export default function IssueDiagnostic({ device, mode = 'auto' }: IssueDiagnosticProps) {
  const [started, setStarted] = useState(false)
  const normalized = typeof device === 'string' ? device.toLowerCase().trim() : ''
  const deviceLabel = DEVICE_LABELS[normalized] || 'device'

  const isDefer = mode === 'defer'
  const showCard = isDefer && !started

  let tool: React.ReactNode = null
  if (normalized === 'webcam') {
    tool = <WebcamTool variant="embed" autoStart={isDefer ? false : true} />
  } else if (normalized === 'mic' || normalized === 'microphone') {
    tool = <MicTool variant="embed" />
  } else if (normalized === 'keyboard') {
    tool = <KeyboardTool variant="embed" />
  } else if (normalized === 'screen') {
    tool = <ScreenTool variant="embed" />
  }

  if (tool == null) return null

  if (showCard) {
    return (
      <section className="mt-4 mb-4" aria-labelledby="issue-diagnostic-heading">
        <div className="bg-white rounded-xl border border-gray-200 p-4 md:p-6">
          <h2 id="issue-diagnostic-heading" className="text-xl font-semibold text-gray-900 mb-1">
            Run a quick diagnostic
          </h2>
          <p className="text-sm text-gray-600 mb-4">This runs locally in your browser.</p>
          <button
            type="button"
            onClick={() => setStarted(true)}
            className="px-5 py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Start {deviceLabel} diagnostic
          </button>
          <p className="mt-3">
            <Link
              href="/meeting-check"
              className="text-sm text-gray-500 hover:text-gray-700"
            >
              Run full meeting check →
            </Link>
          </p>
        </div>
      </section>
    )
  }

  return (
    <section className="mt-4 mb-4" aria-labelledby="issue-diagnostic-heading">
      <h2 id="issue-diagnostic-heading" className="text-xl font-semibold text-gray-900 mb-1">
        Run a quick diagnostic
      </h2>
      <p className="text-sm text-gray-600 mb-4">This runs locally in your browser.</p>
      <div className="bg-white rounded-xl border border-gray-200 p-4 md:p-6">
        {tool}
      </div>
    </section>
  )
}
