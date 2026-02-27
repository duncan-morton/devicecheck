'use client'

import Link from 'next/link'
import { Check, Circle } from 'lucide-react'

const steps = [
  { label: 'Webcam Test', href: null, done: true },
  { label: 'Microphone Test', href: '/mic', done: false },
  { label: 'Speaker Check', href: '/mic', done: false },
  { label: 'Full Meeting Check', href: '/meeting-check', done: false },
] as const

export default function SetupProgress() {
  return (
    <div className="rounded-xl border border-neutral-200 bg-white shadow-sm p-4 md:p-5">
      <h3 className="text-sm font-semibold text-gray-800 mb-3">Setup Progress</h3>
      <ul className="space-y-2">
        {steps.map((step, i) => (
          <li key={i} className="flex items-center gap-2 text-sm">
            {step.done ? (
              <Check className="shrink-0 text-green-600" size={16} />
            ) : (
              <Circle className="shrink-0 text-gray-300" size={16} strokeWidth={2} />
            )}
            {step.href ? (
              <Link
                href={step.href}
                className="text-gray-600 hover:text-blue-600 hover:underline"
              >
                {step.label}
              </Link>
            ) : (
              <span className="text-gray-800 font-medium">{step.label}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}
