'use client'

import { useState, useEffect, useRef, useMemo, useCallback } from 'react'
import { getMediaStream } from '@/lib/diagnostics'
import { Grid, AlertCircle, FlipHorizontal } from 'lucide-react'
import { deriveWebcamDiagnostic, type WebcamDiagnostic } from '@/lib/deviceStatus/webcamStatus'
import WebcamResultGuidance from '@/components/WebcamResultGuidance'
import SetupProgress from '@/components/SetupProgress'

interface WebcamToolProps {
  variant?: 'full' | 'embed'
  /** Called when diagnostic updates (e.g. for conditional layout below the tool) */
  onDiagnosticChange?: (diagnostic: WebcamDiagnostic) => void
}

export default function WebcamTool({ variant = 'full', onDiagnosticChange }: WebcamToolProps) {
  const [stream, setStream] = useState<MediaStream | null>(null)
  const [error, setError] = useState<string>('')
  const [showGrid, setShowGrid] = useState(false)
  const [isMirrored, setIsMirrored] = useState(true)
  const [resolution, setResolution] = useState<{ w: number; h: number } | null>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [errorName, setErrorName] = useState<string>('')
  const [isVideoActive, setIsVideoActive] = useState(false)
  const streamRef = useRef<MediaStream | null>(null)

  // Keep ref in sync so cleanup can stop stream without effect re-running when stream changes
  useEffect(() => {
    streamRef.current = stream
  }, [stream])

  const stopWebcam = useCallback(() => {
    if (stream) {
      stream.getTracks().forEach(track => track.stop())
    }
    setStream(null)
    setIsVideoActive(false)
  }, [stream])

  const startWebcam = useCallback(async () => {
    // Stop any existing stream (use ref so we don't depend on stream in deps)
    const existing = streamRef.current
    if (existing) {
      existing.getTracks().forEach(track => track.stop())
    }
    setStream(null)
    setIsVideoActive(false)
    setError('')
    setErrorName('')
    setResolution(null)

    try {
      const s = await getMediaStream(true, false)
      streamRef.current = s
      setStream(s)

      const track = s.getVideoTracks()[0]
      if (track) {
        const settings = track.getSettings()
        if (settings.width && settings.height) {
          setResolution({ w: settings.width, h: settings.height })
        }
      }
    } catch (e: any) {
      console.error('Camera error:', e)
      const name = e?.name ?? ''
      setErrorName(name)

      if (name === 'NotAllowedError' || name === 'PermissionDeniedError') {
        setError('Camera access denied. Please check browser permissions and allow camera access.')
      } else if (name === 'NotFoundError' || name === 'DevicesNotFoundError') {
        setError('No camera found. Please connect a camera and try again.')
      } else if (name === 'NotReadableError' || name === 'TrackStartError') {
        setError('Camera is already in use by another application. Please close other apps using the camera.')
      } else {
        setError('Failed to access camera. Please check permissions and try again.')
      }
    }
  }, [])

  useEffect(() => {
    // Auto-start once on mount; cleanup stops current stream via ref
    startWebcam()
    return () => {
      const s = streamRef.current
      if (s) s.getTracks().forEach(track => track.stop())
      streamRef.current = null
    }
  }, [startWebcam])

  useEffect(() => {
    if (!videoRef.current || !stream) return

    const video = videoRef.current
    video.srcObject = stream

    const handlePlaying = () => setIsVideoActive(true)
    const handlePause = () => setIsVideoActive(false)
    const handleError = () => setIsVideoActive(false)
    const handleLoadedMetadata = async () => {
      if (!videoRef.current) return
      setResolution({
        w: videoRef.current.videoWidth,
        h: videoRef.current.videoHeight,
      })
      try {
        await videoRef.current.play()
        setIsVideoActive(true)
      } catch {
        // ignore play errors (autoplay restrictions, etc.)
      }
    }

    video.onplaying = handlePlaying
    video.onpause = handlePause
    video.onerror = handleError
    video.onloadedmetadata = handleLoadedMetadata

    return () => {
      video.onplaying = null
      video.onpause = null
      video.onerror = null
      video.onloadedmetadata = null
    }
  }, [stream])

  const baseDiagnostic = useMemo(
    () =>
      deriveWebcamDiagnostic({
        error: errorName || error || null,
        stream,
        resolution,
      }),
    [errorName, error, stream, resolution],
  )

  const diagnostic = useMemo(() => {
    if (baseDiagnostic.status === 'ok' && !isVideoActive) {
      return { ...baseDiagnostic, status: 'unknown_error' as const }
    }
    return baseDiagnostic
  }, [baseDiagnostic, isVideoActive])

  useEffect(() => {
    onDiagnosticChange?.(diagnostic)
  }, [diagnostic, onDiagnosticChange])

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

  const cardClass = 'rounded-xl border border-neutral-200 bg-white shadow-sm'

  return (
    <div className="mb-12">
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 p-6 rounded-xl flex items-center gap-3 mb-6">
          <AlertCircle /> {error}
        </div>
      )}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
        {/* LEFT: Preview + live output */}
        <div className="lg:col-span-3 space-y-0">
          <div className="relative bg-black rounded-xl overflow-hidden shadow-lg border border-neutral-200 aspect-video group">
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
        </div>

        {/* RIGHT: Diagnostic sidebar (sticky on desktop only) */}
        <div className="lg:col-span-2 space-y-3 lg:sticky lg:top-20">
          <WebcamResultGuidance diagnostic={diagnostic} onRetry={startWebcam} />
          <SetupProgress />
          <div className={`${cardClass} p-4 md:p-5`}>
            <h3 className="text-sm font-semibold text-gray-800 mb-2">Detected Camera Info</h3>
            <dl className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
              <dt className="text-gray-500">Aspect Ratio</dt>
              <dd className="text-gray-900 font-mono">
                {resolution ? (resolution.w / resolution.h).toFixed(2) : '--'}
              </dd>
              <dt className="text-gray-500">Resolution</dt>
              <dd className="text-gray-900 font-mono">
                {resolution ? `${resolution.w}×${resolution.h}` : '--'}
              </dd>
            </dl>
          </div>
          <div className={`${cardClass} p-4 md:p-5`}>
            <h3 className="text-sm font-semibold text-gray-800 mb-2">Quick checks</h3>
            <ul className="space-y-1.5 text-sm text-gray-600 list-disc list-inside">
              <li>Light in front of you</li>
              <li>Camera at eye level</li>
              <li>Use grid for framing</li>
            </ul>
          </div>
          <div className={`${cardClass} p-4 md:p-5`}>
            <p className="text-sm text-neutral-600">
              Video is processed locally. Nothing is recorded or sent to our servers.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}


