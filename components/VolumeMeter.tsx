'use client'

import { useEffect, useRef, useState } from 'react'

interface VolumeMeterProps {
  stream: MediaStream | null
  isActive: boolean
}

export default function VolumeMeter({ stream, isActive }: VolumeMeterProps) {
  const [volume, setVolume] = useState(0)
  const audioContextRef = useRef<AudioContext | null>(null)
  const analyserRef = useRef<AnalyserNode | null>(null)
  const animationFrameRef = useRef<number | undefined>(undefined)

  useEffect(() => {
    if (!stream || !isActive) {
      setVolume(0)
      return
    }

    const audioContext = new AudioContext()
    const analyser = audioContext.createAnalyser()
    analyser.fftSize = 256

    const source = audioContext.createMediaStreamSource(stream)
    source.connect(analyser)

    audioContextRef.current = audioContext
    analyserRef.current = analyser

    const updateVolume = () => {
      if (!analyserRef.current) return

      const dataArray = new Uint8Array(analyserRef.current.frequencyBinCount)
      analyserRef.current.getByteFrequencyData(dataArray)

      const average = dataArray.reduce((a, b) => a + b) / dataArray.length
      const normalizedVolume = Math.min(100, (average / 255) * 100 * 2)
      
      setVolume(normalizedVolume)
      animationFrameRef.current = requestAnimationFrame(updateVolume)
    }

    updateVolume()

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
      if (audioContextRef.current && audioContextRef.current.state !== 'closed') {
        audioContextRef.current.close()
      }
    }
  }, [stream, isActive])

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-gray-700">Volume Level</span>
        <span className="text-sm font-bold text-gray-900">{Math.round(volume)}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-8 overflow-hidden">
        <div
          className="bg-green-500 h-full transition-all duration-75"
          style={{ width: `${volume}%` }}
        />
      </div>
    </div>
  )
}