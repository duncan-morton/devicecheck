'use client'

import { useState, useEffect, useRef } from 'react'
import { Monitor, Maximize2 } from 'lucide-react'

type TestMode = 'solid' | 'gradient' | 'grid' | 'pixel'

const colors = [
  { name: 'Black', value: '#000000' },
  { name: 'White', value: '#FFFFFF' },
  { name: 'Red', value: '#FF0000' },
  { name: 'Green', value: '#00FF00' },
  { name: 'Blue', value: '#0000FF' },
  { name: 'Yellow', value: '#FFFF00' },
  { name: 'Cyan', value: '#00FFFF' },
  { name: 'Magenta', value: '#FF00FF' },
]

interface ScreenToolProps {
  variant?: 'full' | 'embed'
}

export default function ScreenTool({ variant = 'full' }: ScreenToolProps) {
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [testMode, setTestMode] = useState<TestMode>('solid')
  const [currentColor, setCurrentColor] = useState(0)
  const [isAutoCycling, setIsAutoCycling] = useState(false)
  const fullscreenRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement)
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && document.fullscreenElement) {
        if (document.exitFullscreen) {
          document.exitFullscreen()
        } else if ((document as any).webkitExitFullscreen) {
          (document as any).webkitExitFullscreen()
        } else if ((document as any).mozCancelFullScreen) {
          (document as any).mozCancelFullScreen()
        } else if ((document as any).msExitFullscreen) {
          (document as any).msExitFullscreen()
        }
      }
    }

    document.addEventListener('fullscreenchange', handleFullscreenChange)
    document.addEventListener('keydown', handleKeyDown)
    
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  useEffect(() => {
    if (isAutoCycling && testMode === 'solid') {
      const interval = setInterval(() => {
        setCurrentColor((prev) => (prev + 1) % colors.length)
      }, 2000)
      return () => clearInterval(interval)
    }
  }, [isAutoCycling, testMode])

  const enterFullscreen = async () => {
    const elem = fullscreenRef.current
    if (!elem) return
    
    try {
      if (elem.requestFullscreen) {
        await elem.requestFullscreen()
      } else if ((elem as any).webkitRequestFullscreen) {
        await (elem as any).webkitRequestFullscreen()
      } else if ((elem as any).mozRequestFullScreen) {
        await (elem as any).mozRequestFullScreen()
      } else if ((elem as any).msRequestFullscreen) {
        await (elem as any).msRequestFullscreen()
      }
    } catch (err) {
      console.error('Fullscreen error:', err)
    }
  }

  const exitFullscreen = async () => {
    try {
      if (document.exitFullscreen) {
        await document.exitFullscreen()
      } else if ((document as any).webkitExitFullscreen) {
        await (document as any).webkitExitFullscreen()
      } else if ((document as any).mozCancelFullScreen) {
        await (document as any).mozCancelFullScreen()
      } else if ((document as any).msExitFullscreen) {
        await (document as any).msExitFullscreen()
      }
    } catch (err) {
      console.error('Exit fullscreen error:', err)
    }
  }

  const getBackgroundStyle = () => {
    switch (testMode) {
      case 'solid':
        return { backgroundColor: colors[currentColor].value }
      case 'gradient':
        return {
          background: `linear-gradient(45deg, ${colors[currentColor].value}, ${colors[(currentColor + 1) % colors.length].value})`
        }
      case 'grid':
        return {
          backgroundImage: `
            linear-gradient(#000 1px, transparent 1px),
            linear-gradient(90deg, #000 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px',
          backgroundColor: '#FFFFFF'
        }
      case 'pixel':
        return {
          backgroundImage: `
            repeating-linear-gradient(0deg, #000 0px, #000 1px, transparent 1px, transparent 2px),
            repeating-linear-gradient(90deg, #000 0px, #000 1px, transparent 1px, transparent 2px)
          `,
          backgroundSize: '2px 2px',
          backgroundColor: '#FFFFFF'
        }
      default:
        return { backgroundColor: '#FFFFFF' }
    }
  }

  if (variant === 'embed') {
    return (
      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          {(['solid', 'gradient', 'grid', 'pixel'] as const).map((mode) => (
            <button
              key={mode}
              onClick={() => setTestMode(mode)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                testMode === mode
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {mode === 'solid' ? 'Solid' : mode === 'gradient' ? 'Gradient' : mode === 'grid' ? 'Grid' : 'Pixel'}
            </button>
          ))}
        </div>
        {testMode === 'solid' && (
          <div className="flex flex-wrap gap-1.5">
            {colors.map((color, index) => (
              <button
                key={index}
                onClick={() => setCurrentColor(index)}
                className={`w-8 h-8 rounded border-2 transition-all ${
                  currentColor === index ? 'border-blue-600 ring-1 ring-blue-300' : 'border-gray-300 hover:border-gray-400'
                }`}
                style={{ backgroundColor: color.value }}
                title={color.name}
              />
            ))}
            <button
              onClick={() => setIsAutoCycling(!isAutoCycling)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium ${
                isAutoCycling ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {isAutoCycling ? 'Stop' : 'Auto'}
            </button>
          </div>
        )}
        <div
          ref={fullscreenRef}
          className={`${isFullscreen ? 'fixed inset-0 w-screen h-screen' : 'rounded-lg overflow-hidden aspect-video min-h-[240px]'} relative`}
          style={getBackgroundStyle()}
        >
          {!isFullscreen && testMode === 'solid' && (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="bg-black/50 text-white px-3 py-1.5 rounded text-sm font-medium">
                {colors[currentColor].name}
              </span>
            </div>
          )}
        </div>
        {!isFullscreen && (
          <button
            onClick={enterFullscreen}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
          >
            <Maximize2 size={16} />
            Fullscreen
          </button>
        )}
      </div>
    )
  }

  return (
    <div className="mb-12">
      {!isFullscreen && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <h3 className="font-semibold text-gray-800 flex items-center gap-2">
              <Monitor size={20} className="text-blue-600" />
              Screen Test Mode
            </h3>
            <div className="flex gap-2 flex-wrap">
              <button
                onClick={() => setTestMode('solid')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  testMode === 'solid'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Solid Colors
              </button>
              <button
                onClick={() => setTestMode('gradient')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  testMode === 'gradient'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Gradient
              </button>
              <button
                onClick={() => setTestMode('grid')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  testMode === 'grid'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Grid
              </button>
              <button
                onClick={() => setTestMode('pixel')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  testMode === 'pixel'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Pixel Check
              </button>
            </div>
          </div>

          {testMode === 'solid' && (
            <div className="mb-4">
              <div className="flex flex-wrap gap-2 mb-3">
                {colors.map((color, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentColor(index)}
                    className={`w-12 h-12 rounded-lg border-2 transition-all ${
                      currentColor === index
                        ? 'border-blue-600 ring-2 ring-blue-300'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                    style={{ backgroundColor: color.value }}
                    title={color.name}
                  />
                ))}
              </div>
              <button
                onClick={() => setIsAutoCycling(!isAutoCycling)}
                className={`px-4 py-2 rounded-lg text-sm font-medium ${
                  isAutoCycling
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {isAutoCycling ? 'Stop Auto Cycle' : 'Start Auto Cycle'}
              </button>
            </div>
          )}

          <div className="flex items-center gap-4">
            <button
              onClick={enterFullscreen}
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              <Maximize2 size={20} />
              Enter Fullscreen Mode
            </button>
            <p className="text-sm text-gray-600">Press ESC to exit fullscreen</p>
          </div>
        </div>
      )}

      <div
        ref={fullscreenRef}
        className={`${isFullscreen ? 'fixed inset-0 w-screen h-screen' : 'rounded-xl overflow-hidden shadow-2xl aspect-video min-h-[400px]'} relative`}
        style={getBackgroundStyle()}
      >
        {!isFullscreen && testMode === 'solid' && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-black/50 text-white px-6 py-3 rounded-lg backdrop-blur-sm">
              <p className="text-2xl font-bold">{colors[currentColor].name}</p>
              <p className="text-sm opacity-90">{colors[currentColor].value}</p>
            </div>
          </div>
        )}
      </div>

      {!isFullscreen && (
        <div className="mt-6 bg-blue-50 border border-blue-200 rounded-xl p-6">
          <h4 className="font-semibold text-blue-900 mb-2">How to Check for Dead Pixels</h4>
          <ol className="list-decimal pl-6 space-y-2 text-sm text-blue-800">
            <li>Click "Enter Fullscreen Mode" for best results</li>
            <li>Cycle through solid colors (especially black, white, red, green, blue)</li>
            <li>Look for pixels that don't change color or appear stuck</li>
            <li>Use the pixel check mode to see individual pixels clearly</li>
            <li>Dead pixels appear as black dots on colored backgrounds</li>
            <li>Stuck pixels appear as colored dots on black/white backgrounds</li>
          </ol>
        </div>
      )}
    </div>
  )
}


