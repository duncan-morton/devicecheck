'use client'

import { useState, useEffect, useRef } from 'react'
import { getMediaStream } from '@/lib/diagnostics'
import { Camera, Grid, AlertCircle, FlipHorizontal } from 'lucide-react'

export default function WebcamTest() {
  const [stream, setStream] = useState<MediaStream | null>(null)
  const [error, setError] = useState<string>('')
  const [showGrid, setShowGrid] = useState(false)
  const [isMirrored, setIsMirrored] = useState(true)
  const [resolution, setResolution] = useState<{w: number, h: number} | null>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    getMediaStream(true, false)
      .then(s => {
        setStream(s)
        const track = s.getVideoTracks()[0]
        const settings = track.getSettings()
        if (settings.width && settings.height) {
          setResolution({ w: settings.width, h: settings.height })
        }
      })
      .catch(e => setError('Camera access denied. Please check permissions.'))

    return () => {
      if (stream) {
        stream.getTracks().forEach(t => t.stop())
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

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <a href="/" className="text-blue-600 hover:text-blue-800 mb-8 inline-block">
          ← Back to DeviceCheck
        </a>

        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Webcam Test</h1>
          <div className="flex gap-2">
            <div className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
              {resolution ? `${resolution.w} x ${resolution.h}` : 'Detecting...'}
            </div>
          </div>
        </div>

        {error ? (
          <div className="bg-red-50 border border-red-200 text-red-700 p-6 rounded-xl flex items-center gap-3 mb-12">
            <AlertCircle /> {error}
          </div>
        ) : (
          <div className="space-y-6 mb-16">
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

        {/* SEO Content */}
        <article className="prose prose-slate max-w-none bg-white p-8 rounded-2xl border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800">How to Test Your Webcam Online</h2>
          <p>
            Need to check your webcam before a Zoom meeting or video call? Our <strong>free online webcam test</strong> is the fastest way to verify your camera is working correctly.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mt-6">
            <div>
              <h3 className="text-lg font-bold text-gray-800">Why is my webcam black?</h3>
              <ul className="list-disc pl-5 space-y-2 mt-2 text-gray-600">
                <li><strong>Permissions:</strong> Click the lock icon in your URL bar and ensure "Camera" is allowed.</li>
                <li><strong>Another App:</strong> Only one app can use the camera at a time.</li>
                <li><strong>Privacy Covers:</strong> Check if your laptop has a physical sliding cover.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-800">Understanding Resolution</h3>
              <ul className="list-disc pl-5 space-y-2 mt-2 text-gray-600">
                <li><strong>720p (HD):</strong> 1280x720. Standard for most built-in laptop cameras.</li>
                <li><strong>1080p (Full HD):</strong> 1920x1080. Common in external webcams.</li>
                <li><strong>4K (UHD):</strong> 3840x2160. Professional grade quality.</li>
              </ul>
            </div>
          </div>
        </article>
      </div>
    </div>
  )
}