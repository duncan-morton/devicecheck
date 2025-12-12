'use client'

import { useState, useEffect, useRef } from 'react'
import { getMediaStream } from '@/lib/diagnostics'
import { Grid, AlertCircle, FlipHorizontal } from 'lucide-react'

interface WebcamToolProps {
  variant?: 'full' | 'embed'
}

export default function WebcamTool({ variant = 'full' }: WebcamToolProps) {
  const [stream, setStream] = useState<MediaStream | null>(null)
  const [error, setError] = useState<string>('')
  const [showGrid, setShowGrid] = useState(false)
  const [isMirrored, setIsMirrored] = useState(true)
  const [resolution, setResolution] = useState<{w: number, h: number} | null>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    let currentStream: MediaStream | null = null

    getMediaStream(true, false)
      .then(s => {
        currentStream = s
        setStream(s)
        const track = s.getVideoTracks()[0]
        if (track) {
          const settings = track.getSettings()
          if (settings.width && settings.height) {
            setResolution({ w: settings.width, h: settings.height })
          }
        }
      })
      .catch(e => {
        console.error('Camera error:', e)
        if (e.name === 'NotAllowedError' || e.name === 'PermissionDeniedError') {
          setError('Camera access denied. Please check browser permissions and allow camera access.')
        } else if (e.name === 'NotFoundError' || e.name === 'DevicesNotFoundError') {
          setError('No camera found. Please connect a camera and try again.')
        } else if (e.name === 'NotReadableError' || e.name === 'TrackStartError') {
          setError('Camera is already in use by another application. Please close other apps using the camera.')
        } else {
          setError('Failed to access camera. Please check permissions and try again.')
        }
      })

    return () => {
      if (currentStream) {
        currentStream.getTracks().forEach(t => t.stop())
      }
    }
  }, [])

  useEffect(() => {
    if (videoRef.current && stream) {
      videoRef.current.srcObject = stream
      videoRef.current.onloadedmetadata = () => {
        if (videoRef.current) {
          setResolution({ 
            w: videoRef.current.videoWidth, 
            h: videoRef.current.videoHeight 
          })
        }
      }
    }
  }, [stream])

  if (variant === 'embed') {
    return (
      <div className="space-y-4">
        {error ? (
          <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-lg text-sm">
            {error}
          </div>
        ) : (
          <>
            <div className="relative bg-black rounded-lg overflow-hidden aspect-video">
              {showGrid && (
                <div className="absolute inset-0 pointer-events-none z-10 grid grid-cols-3 grid-rows-3">
                  <div className="border-r border-b border-white/30"></div>
                  <div className="border-r border-b border-white/30"></div>
                  <div className="border-b border-white/30"></div>
                  <div className="border-r border-b border-white/30"></div>
                  <div className="border-r border-b border-white/30"></div>
                  <div className="border-b border-white/30"></div>
                  <div className="border-r border-white/30"></div>
                  <div className="border-r border-white/30"></div>
                  <div></div>
                </div>
              )}
              <video 
                ref={videoRef}
                autoPlay 
                playsInline 
                muted
                className={`w-full h-full object-cover ${isMirrored ? 'scale-x-[-1]' : 'scale-x-100'}`}
              />
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2 bg-black/60 backdrop-blur-md p-1.5 rounded-full z-20">
                <button 
                  onClick={() => setShowGrid(!showGrid)}
                  className={`p-1.5 rounded-full transition-colors ${showGrid ? 'bg-blue-500 text-white' : 'text-white hover:bg-white/20'}`}
                  title="Toggle Grid"
                >
                  <Grid size={16} />
                </button>
                <button 
                  onClick={() => setIsMirrored(!isMirrored)}
                  className={`p-1.5 rounded-full transition-colors ${!isMirrored ? 'bg-blue-500 text-white' : 'text-white hover:bg-white/20'}`}
                  title="Mirror Video"
                >
                  <FlipHorizontal size={16} />
                </button>
              </div>
            </div>
            {resolution && (
              <div className="text-xs text-gray-600 text-center">
                Resolution: {resolution.w}×{resolution.h}
              </div>
            )}
          </>
        )}
      </div>
    )
  }

  return (
    <div className="mb-12">
      {error ? (
        <div className="bg-red-50 border border-red-200 text-red-700 p-6 rounded-xl flex items-center gap-3 mb-6">
          <AlertCircle /> {error}
        </div>
      ) : (
        <div className="space-y-6">
          <div className="relative bg-black rounded-xl overflow-hidden shadow-2xl aspect-video group">
            {/* Grid Overlay */}
            {showGrid && (
              <div className="absolute inset-0 pointer-events-none z-10 grid grid-cols-3 grid-rows-3">
                <div className="border-r border-b border-white/30"></div>
                <div className="border-r border-b border-white/30"></div>
                <div className="border-b border-white/30"></div>
                <div className="border-r border-b border-white/30"></div>
                <div className="border-r border-b border-white/30"></div>
                <div className="border-b border-white/30"></div>
                <div className="border-r border-white/30"></div>
                <div className="border-r border-white/30"></div>
                <div></div>
              </div>
            )}

            <video 
              ref={videoRef}
              autoPlay 
              playsInline 
              muted
              className={`w-full h-full object-cover transition-transform duration-300 ${isMirrored ? 'scale-x-[-1]' : 'scale-x-100'}`}
            />

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-4 bg-black/60 backdrop-blur-md p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-20">
              <button 
                onClick={() => setShowGrid(!showGrid)}
                className={`p-2 rounded-full transition-colors ${showGrid ? 'bg-blue-500 text-white' : 'text-white hover:bg-white/20'}`}
                title="Toggle Grid"
              >
                <Grid size={20} />
              </button>
              <button 
                onClick={() => setIsMirrored(!isMirrored)}
                className={`p-2 rounded-full transition-colors ${!isMirrored ? 'bg-blue-500 text-white' : 'text-white hover:bg-white/20'}`}
                title="Mirror Video"
              >
                <FlipHorizontal size={20} />
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="font-bold text-gray-800 mb-2">Tips for better video calls</h3>
              <ul className="space-y-2 text-sm text-gray-600 list-disc list-inside">
                <li>Keep your light source in front of you (not behind).</li>
                <li>Raise your camera to eye level to avoid unflattering angles.</li>
                <li>Use the grid tool to position your eyes at the top 1/3 line.</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="font-bold text-gray-800 mb-2">Detected Camera Info</h3>
              <dl className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                <dt className="text-gray-500">Aspect Ratio</dt>
                <dd className="text-gray-900 font-mono">
                  {resolution ? (resolution.w / resolution.h).toFixed(2) : '--'}
                </dd>
                <dt className="text-gray-500">Resolution</dt>
                <dd className="text-gray-900 font-mono">
                  {resolution ? `${resolution.w}x${resolution.h}` : '--'}
                </dd>
              </dl>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}


