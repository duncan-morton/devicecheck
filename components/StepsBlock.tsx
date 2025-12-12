import { Wrench } from 'lucide-react'

interface Step {
  title: string
  description: string
}

interface StepsBlockProps {
  title?: string
  steps: Step[]
  collapsedCount?: number
  summaryLabel?: string
}

export default function StepsBlock({ 
  title = "Quick checks (30 seconds)",
  steps,
  collapsedCount = 3,
  summaryLabel = "More checks"
}: StepsBlockProps) {
  if (!steps.length) return null

  const visibleSteps = steps.slice(0, collapsedCount)
  const hiddenSteps = steps.slice(collapsedCount)
  const useTwoColumns = steps.length >= 6

  return (
    <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 md:p-5 mb-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
        <Wrench size={18} className="text-slate-500" />
        {title}
      </h2>
      <ol className={`space-y-2.5 ${useTwoColumns ? 'md:grid md:grid-cols-2 md:gap-x-6 md:gap-y-2.5' : ''}`}>
        {visibleSteps.map((step, idx) => (
          <li key={idx} className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold flex items-center justify-center mt-0.5">
              {idx + 1}
            </span>
            <div className="flex-1 min-w-0">
              <p className="font-medium text-gray-900 text-sm leading-snug">{step.title}</p>
              <p className="text-sm text-slate-600 mt-0.5 leading-relaxed">{step.description}</p>
            </div>
          </li>
        ))}
        {hiddenSteps.length > 0 && (
          <li className={`${useTwoColumns ? 'md:col-span-2' : ''}`}>
            <details className="group">
              <summary className="cursor-pointer text-sm font-medium text-blue-600 hover:text-blue-700 flex items-center gap-2 list-none">
                <span>{summaryLabel}</span>
                <span className="text-xs text-slate-500">({hiddenSteps.length} more)</span>
              </summary>
              <ol className={`space-y-2.5 mt-3 ${useTwoColumns ? 'md:grid md:grid-cols-2 md:gap-x-6 md:gap-y-2.5' : ''}`}>
                {hiddenSteps.map((step, idx) => (
                  <li key={idx + collapsedCount} className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold flex items-center justify-center mt-0.5">
                      {idx + collapsedCount + 1}
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-gray-900 text-sm leading-snug">{step.title}</p>
                      <p className="text-sm text-slate-600 mt-0.5 leading-relaxed">{step.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </details>
          </li>
        )}
      </ol>
    </div>
  )
}

