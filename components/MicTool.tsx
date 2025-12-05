'use client'

import { useState, useEffect, useRef } from 'react'
import { getMediaStream } from '@/lib/diagnostics'
import { playLeft, playRight, playStereoSweep } from '@/lib/audioGenerator'
import VolumeMeter from '@/components/VolumeMeter'
import { Mic, Square, Play, RefreshCw, AlertTriangle, CheckCircle2, ArrowLeft, ArrowRight, MoveHorizontal } from 'lucide-react'

export default function MicTool() {
  const [stream, setStream] = useState<MediaStream | null>(null)
  const [error, setError] = useState<string>('')
  const [isRecording, setIsRecording] = useState(false)
  const [playbackUrl, setPlaybackUrl] = useState<string | null>(null)
  
  const mediaRecorderRef = useRef<MediaRecorder | null>(null)
  const chunksRef = useRef<Blob[]>([])

  useEffect(() => {
    getMediaStream(false, true)
      .then(s => setStream(s))
      .catch(e => setError('Microphone access denied. Please check your browser permissions.'))

    return () => {
      if (stream) {
        stream.getTracks().forEach(t => t.stop())
      }
      if (playbackUrl) {
        URL.revokeObjectURL(playbackUrl)
      }
    }
  }, [])

  const startRecording = () => {
    if (!stream) return
    
    chunksRef.current = []
    setPlaybackUrl(null)
    
    const types = [
      "audio/webm;codecs=opus",
      "audio/webm",
      "audio/mp4",
      "audio/ogg",
      ""
    ]
    
    let selectedType = ""
    for (const type of types) {
      if (type === "" || MediaRecorder.isTypeSupported(type)) {
        selectedType = type
        break
      }
    }

    try {
      const options = selectedType ? { mimeType: selectedType } : undefined
      const recorder = new MediaRecorder(stream, options)
      mediaRecorderRef.current = recorder

      recorder.ondataavailable = (e) => {
        if (e.data.size > 0) {
          chunksRef.current.push(e.data)
        }
      }

      recorder.onstop = () => {
        const type = recorder.mimeType || selectedType || 'audio/webm'
        const blob = new Blob(chunksRef.current, { type })
        const url = URL.createObjectURL(blob)
        setPlaybackUrl(url)
        setIsRecording(false)
      }

      recorder.start()
      setIsRecording(true)

      setTimeout(() => {
        if (recorder.state === 'recording') {
          recorder.stop()
        }
      }, 5000)
    } catch (err) {
      console.error("Recorder error:", err)
      setError("Could not start recording. Your browser might not support this feature.")
    }
  }

  const stopRecording = () => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state === 'recording') {
      mediaRecorderRef.current.stop()
    }
  }

  return (
    <div className="mb-12">
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Test Area */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="bg-gray-50 px-6 py-4 border-b border-gray-100 flex justify-between items-center">
              <h2 className="font-semibold text-gray-800">Input Visualizer</h2>
              <div className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide flex items-center gap-1.5 ${stream ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                {stream ? <><CheckCircle2 size={14}/> Active</> : <><Mic size={14}/> Inactive</>}
              </div>
            </div>

            <div className="p-8">
              {error ? (
                <div className="bg-red-50 border border-red-200 text-red-700 p-6 rounded-xl flex items-start gap-3">
                  <AlertTriangle className="shrink-0 mt-0.5" /> 
                  <div>
                    <p className="font-bold">Access Denied</p>
                    <p className="text-sm mt-1">{error}</p>
                  </div>
                </div>
              ) : (
                <>
                  <div className="mb-8">
                    <VolumeMeter stream={stream} isActive={true} />
                  </div>
                  
                  <p className="text-sm text-gray-500 mb-2 font-medium">Test Recording (Max 5s)</p>
                  <div className="bg-gray-50 rounded-xl p-6 flex flex-col items-center justify-center border border-gray-200">
                    {!playbackUrl ? (
                      <div className="flex flex-col items-center gap-3">
                        <button 
                          onClick={isRecording ? stopRecording : startRecording}
                          className={`w-20 h-20 rounded-full flex items-center justify-center transition-all shadow-lg hover:shadow-xl hover:scale-105 ${isRecording ? 'bg-red-500 animate-pulse' : 'bg-blue-600 hover:bg-blue-700'}`}
                        >
                          {isRecording ? <Square size={32} className="text-white fill-current" /> : <Mic size={32} className="text-white" />}
                        </button>
                        <span className="text-sm font-semibold text-gray-600">
                          {isRecording ? 'Recording... Say "Testing 1, 2, 3"' : 'Tap mic to record'}
                        </span>
                      </div>
                    ) : (
                      <div className="w-full">
                        <div className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                          <button 
                            onClick={() => {
                              const audio = document.querySelector('audio')
                              audio?.play()
                            }}
                            className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 text-blue-700 hover:bg-blue-200"
                          >
                            <Play size={20} fill="currentColor" className="ml-1"/>
                          </button>
                          <audio src={playbackUrl} controls className="flex-1 h-10" />
                          <button 
                            onClick={() => { 
                              setPlaybackUrl(null)
                              chunksRef.current = []
                            }} 
                            className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-full transition-colors"
                            title="Record Again"
                          >
                            <RefreshCw size={20} />
                          </button>
                        </div>
                        <p className="text-center text-xs text-gray-400 mt-3">Did you hear yourself clearly?</p>
                      </div>
                    )}
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Speaker Test */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
            <h2 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
              🔊 Speaker & Headset Check
            </h2>
            <p className="text-sm text-gray-500 mb-4">Click buttons below to verify your output device.</p>
            <div className="grid grid-cols-3 gap-4">
              <button 
                onClick={() => playLeft()}
                className="flex flex-col items-center justify-center gap-2 p-4 rounded-xl bg-gray-50 hover:bg-blue-50 hover:text-blue-600 transition-all border border-gray-100"
              >
                <ArrowLeft size={24} />
                <span className="font-medium text-sm">Left</span>
              </button>
              <button 
                onClick={() => playRight()}
                className="flex flex-col items-center justify-center gap-2 p-4 rounded-xl bg-gray-50 hover:bg-blue-50 hover:text-blue-600 transition-all border border-gray-100"
              >
                <ArrowRight size={24} />
                <span className="font-medium text-sm">Right</span>
              </button>
              <button 
                onClick={() => playStereoSweep()}
                className="flex flex-col items-center justify-center gap-2 p-4 rounded-xl bg-gray-50 hover:bg-blue-50 hover:text-blue-600 transition-all border border-gray-100"
              >
                <MoveHorizontal size={24} />
                <span className="font-medium text-sm">Sweep</span>
              </button>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h3 className="font-bold text-gray-900 mb-3">Troubleshooting</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex gap-2">
                <span className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-500 shrink-0">1</span>
                Check browser permissions in the URL bar (lock icon).
              </li>
              <li className="flex gap-2">
                <span className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-500 shrink-0">2</span>
                Ensure your physical mute switch is off.
              </li>
              <li className="flex gap-2">
                <span className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-500 shrink-0">3</span>
                Check System Settings.
              </li>
            </ul>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
            <h3 className="font-bold text-blue-900 mb-2">Privacy Note</h3>
            <p className="text-sm text-blue-800/80 leading-relaxed">
              Your audio is processed locally within your browser. No audio data is sent to our servers or stored.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}


