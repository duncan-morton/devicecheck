'use client'

import { useState } from 'react'
import { ThumbsUp, ThumbsDown } from 'lucide-react'

export default function HelpfulWidget() {
  const [feedback, setFeedback] = useState<'yes' | 'no' | null>(null)
  const [reason, setReason] = useState<string | null>(null)
  const [submitted, setSubmitted] = useState(false)

  const handleFeedback = (value: 'yes' | 'no') => {
    setFeedback(value)
    if (value === 'yes') {
      setSubmitted(true)
    }
  }

  const handleReason = (value: string) => {
    setReason(value)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-6 my-8 text-center">
        <p className="text-green-800 font-medium">Thank you for your feedback!</p>
      </div>
    )
  }

  return (
    <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 my-8">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Was this helpful?</h3>
      <div className="flex items-center gap-4">
        <button
          onClick={() => handleFeedback('yes')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
            feedback === 'yes'
              ? 'bg-green-100 text-green-800 border-2 border-green-300'
              : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
          }`}
        >
          <ThumbsUp className="w-4 h-4" />
          <span>Yes</span>
        </button>
        <button
          onClick={() => handleFeedback('no')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
            feedback === 'no'
              ? 'bg-red-100 text-red-800 border-2 border-red-300'
              : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
          }`}
        >
          <ThumbsDown className="w-4 h-4" />
          <span>No</span>
        </button>
      </div>

      {feedback === 'no' && (
        <div className="mt-4 pt-4 border-t border-gray-300">
          <p className="text-sm text-gray-700 mb-3">What was the issue?</p>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => handleReason("Didn't solve my issue")}
              className="px-3 py-1.5 text-sm rounded-lg bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 transition-colors"
            >
              Didn't solve my issue
            </button>
            <button
              onClick={() => handleReason('Hard to follow')}
              className="px-3 py-1.5 text-sm rounded-lg bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 transition-colors"
            >
              Hard to follow
            </button>
            <button
              onClick={() => handleReason('Something else')}
              className="px-3 py-1.5 text-sm rounded-lg bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 transition-colors"
            >
              Something else
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

