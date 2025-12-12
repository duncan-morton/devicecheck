interface Step {
  title: string
  description: string
}

interface StepsBlockProps {
  title: string
  steps: Step[]
}

export default function StepsBlock({ title, steps }: StepsBlockProps) {
  if (!steps.length) return null

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-7 shadow-sm mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">{title}</h2>
      <ol className="list-decimal pl-5 space-y-3 text-gray-700">
        {steps.map((step, idx) => (
          <li key={idx}>
            <p className="font-semibold text-gray-900">{step.title}</p>
            <p className="text-gray-700">{step.description}</p>
          </li>
        ))}
      </ol>
    </div>
  )
}

