'use client'

import { useState, useRef, useEffect } from 'react'

export default function MicrophoneTest() {
  const [isTesting, setIsTesting] = useState(false)
  const [volume, setVolume] = useState(0)
  const [error, setError] = useState('')
  
  const audioContextRef = useRef<AudioContext | null>(null)
  const analyserRef = useRef<AnalyserNode | null>(null)
  const streamRef = useRef<MediaStream | null>(null)
  const animationFrameRef = useRef<number | undefined>(undefined)

  const startTest = async () => {
    try {
      setError('')
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      streamRef.current = stream

      const audioContext = new AudioContext()
      audioContextRef.current = audioContext

      const analyser = audioContext.createAnalyser()
      analyser.fftSize = 256
      analyserRef.current = analyser

      const source = audioContext.createMediaStreamSource(stream)
      source.connect(analyser)

      setIsTesting(true)
      updateVolume()
    } catch (err) {
      setError('Could not access microphone. Please check permissions.')
      console.error(err)
    }
  }

  const stopTest = () => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current)
    }
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop())
    }
    if (audioContextRef.current) {
      audioContextRef.current.close()
    }
    setIsTesting(false)
    setVolume(0)
  }

  const updateVolume = () => {
    if (!analyserRef.current) return

    const dataArray = new Uint8Array(analyserRef.current.frequencyBinCount)
    analyserRef.current.getByteFrequencyData(dataArray)

    const average = dataArray.reduce((a, b) => a + b) / dataArray.length
    setVolume(Math.min(100, (average / 255) * 100 * 2))

    animationFrameRef.current = requestAnimationFrame(updateVolume)
  }

  useEffect(() => {
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop())
      }
      if (audioContextRef.current) {
        audioContextRef.current.close()
      }
    }
  }, [])

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8 mb-16">
      {!isTesting ? (
        <button
          onClick={startTest}
          className="w-full bg-blue-600 text-white text-xl font-semibold py-4 px-8 rounded-lg hover:bg-blue-700 transition"
        >
          Start Test
        </button>
      ) : (
        <>
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-700 font-medium">Volume Level</span>
              <span className="text-gray-900 font-bold">{Math.round(volume)}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-8 overflow-hidden">
              <div
                className="bg-green-500 h-full transition-all duration-75"
                style={{ width: `${volume}%` }}
              />
            </div>
          </div>

          <p className="text-center text-gray-600 mb-6">
            Speak into your microphone to see the volume meter react
          </p>

          <button
            onClick={stopTest}
            className="w-full bg-red-600 text-white text-xl font-semibold py-4 px-8 rounded-lg hover:bg-red-700 transition"
          >
            Stop Test
          </button>
        </>
      )}

      {error && (
        <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-800">{error}</p>
        </div>
      )}
    </div>
  )
}