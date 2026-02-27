'use client'

import { useState } from 'react'
import WebcamTool from '@/components/WebcamTool'
import StepsBlock from '@/components/StepsBlock'
import type { WebcamDiagnostic } from '@/lib/deviceStatus/webcamStatus'

interface Step {
  title: string
  description: string
}

const ERROR_STATUSES_OPEN_BY_DEFAULT: Array<WebcamDiagnostic['status']> = [
  'permission_denied',
  'no_device',
  'in_use_elsewhere',
  'blocked_by_browser',
  'unknown_error',
]

interface WebcamToolWithQuickChecksProps {
  steps: Step[]
}

export default function WebcamToolWithQuickChecks({ steps }: WebcamToolWithQuickChecksProps) {
  const [diagnostic, setDiagnostic] = useState<WebcamDiagnostic | null>(null)
  const showQuickChecks = diagnostic != null && diagnostic.status !== 'ok'
  const defaultOpen =
    diagnostic != null && ERROR_STATUSES_OPEN_BY_DEFAULT.includes(diagnostic.status)

  return (
    <div className="mb-6">
      <div id="test" className="scroll-mt-6">
        <WebcamTool onDiagnosticChange={setDiagnostic} />
      </div>
      {showQuickChecks && (
        <details
          className="group border border-slate-200 rounded-xl overflow-hidden mt-6"
          open={defaultOpen}
        >
          <summary className="cursor-pointer list-none py-3 px-4 bg-slate-50 hover:bg-slate-100 text-sm font-semibold text-gray-900 flex items-center gap-2 [&::-webkit-details-marker]:hidden">
            <span className="group-open:rotate-90 transition-transform">›</span>
            Quick checks (30 seconds)
          </summary>
          <div className="border-t border-slate-200">
            <StepsBlock steps={steps} hideTitle />
          </div>
        </details>
      )}
    </div>
  )
}
