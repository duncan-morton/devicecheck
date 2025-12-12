'use client'

import { useState, useEffect } from 'react'
import { Keyboard, Settings, Globe } from 'lucide-react'

type LanguageLayout = 'US' | 'UK' | 'DE' | 'FR' | 'ES' | 'IT'

interface KeyLayout {
  code: string
  label: string
  width?: string
}

const layouts: Record<LanguageLayout, Record<string, string>> = {
  US: {
    Backquote: '`',
    Digit1: '1', Digit2: '2', Digit3: '3', Digit4: '4', Digit5: '5',
    Digit6: '6', Digit7: '7', Digit8: '8', Digit9: '9', Digit0: '0',
    Minus: '-', Equal: '=',
    KeyQ: 'Q', KeyW: 'W', KeyE: 'E', KeyR: 'R', KeyT: 'T',
    KeyY: 'Y', KeyU: 'U', KeyI: 'I', KeyO: 'O', KeyP: 'P',
    BracketLeft: '[', BracketRight: ']', Backslash: '\\',
    KeyA: 'A', KeyS: 'S', KeyD: 'D', KeyF: 'F', KeyG: 'G',
    KeyH: 'H', KeyJ: 'J', KeyK: 'K', KeyL: 'L',
    Semicolon: ';', Quote: "'",
    KeyZ: 'Z', KeyX: 'X', KeyC: 'C', KeyV: 'V', KeyB: 'B',
    KeyN: 'N', KeyM: 'M', Comma: ',', Period: '.', Slash: '/'
  },
  UK: {
    Backquote: '`',
    Digit1: '1', Digit2: '2', Digit3: '3', Digit4: '4', Digit5: '5',
    Digit6: '6', Digit7: '7', Digit8: '8', Digit9: '9', Digit0: '0',
    Minus: '-', Equal: '=',
    KeyQ: 'Q', KeyW: 'W', KeyE: 'E', KeyR: 'R', KeyT: 'T',
    KeyY: 'Y', KeyU: 'U', KeyI: 'I', KeyO: 'O', KeyP: 'P',
    BracketLeft: '[', BracketRight: ']',
    KeyA: 'A', KeyS: 'S', KeyD: 'D', KeyF: 'F', KeyG: 'G',
    KeyH: 'H', KeyJ: 'J', KeyK: 'K', KeyL: 'L',
    Semicolon: ';', Quote: "'", Backslash: '#',
    KeyZ: 'Z', KeyX: 'X', KeyC: 'C', KeyV: 'V', KeyB: 'B',
    KeyN: 'N', KeyM: 'M', Comma: ',', Period: '.', Slash: '/'
  },
  DE: {
    Backquote: '^',
    Digit1: '1', Digit2: '2', Digit3: '3', Digit4: '4', Digit5: '5',
    Digit6: '6', Digit7: '7', Digit8: '8', Digit9: '9', Digit0: '0',
    Minus: 'ß', Equal: '´',
    KeyQ: 'Q', KeyW: 'W', KeyE: 'E', KeyR: 'R', KeyT: 'T',
    KeyZ: 'Z', KeyU: 'U', KeyI: 'I', KeyO: 'O', KeyP: 'P',
    BracketLeft: 'Ü', BracketRight: '+', Backslash: '#',
    KeyA: 'A', KeyS: 'S', KeyD: 'D', KeyF: 'F', KeyG: 'G',
    KeyH: 'H', KeyJ: 'J', KeyK: 'K', KeyL: 'L',
    Semicolon: 'Ö', Quote: 'Ä',
    KeyY: 'Y', KeyX: 'X', KeyC: 'C', KeyV: 'V', KeyB: 'B',
    KeyN: 'N', KeyM: 'M', Comma: ',', Period: '.', Slash: '-'
  },
  FR: {
    Backquote: '²',
    Digit1: '&', Digit2: 'é', Digit3: '"', Digit4: "'", Digit5: '(',
    Digit6: '-', Digit7: 'è', Digit8: '_', Digit9: 'ç', Digit0: 'à',
    Minus: ')', Equal: '=',
    KeyQ: 'A', KeyW: 'Z', KeyE: 'E', KeyR: 'R', KeyT: 'T',
    KeyY: 'Y', KeyU: 'U', KeyI: 'I', KeyO: 'O', KeyP: 'P',
    BracketLeft: '^', BracketRight: '$', Backslash: '*',
    KeyA: 'Q', KeyS: 'S', KeyD: 'D', KeyF: 'F', KeyG: 'G',
    KeyH: 'H', KeyJ: 'J', KeyK: 'K', KeyL: 'L',
    Semicolon: 'M', Quote: 'ù',
    KeyZ: 'W', KeyX: 'X', KeyC: 'C', KeyV: 'V', KeyB: 'B',
    KeyN: 'N', KeyM: ',', Comma: ';', Period: ':', Slash: '!'
  },
  ES: {
    Backquote: 'º',
    Digit1: '1', Digit2: '2', Digit3: '3', Digit4: '4', Digit5: '5',
    Digit6: '6', Digit7: '7', Digit8: '8', Digit9: '9', Digit0: '0',
    Minus: "'", Equal: '¡',
    KeyQ: 'Q', KeyW: 'W', KeyE: 'E', KeyR: 'R', KeyT: 'T',
    KeyY: 'Y', KeyU: 'U', KeyI: 'I', KeyO: 'O', KeyP: 'P',
    BracketLeft: '`', BracketRight: '+', Backslash: 'ç',
    KeyA: 'A', KeyS: 'S', KeyD: 'D', KeyF: 'F', KeyG: 'G',
    KeyH: 'H', KeyJ: 'J', KeyK: 'K', KeyL: 'L',
    Semicolon: 'ñ', Quote: '´',
    KeyZ: 'Z', KeyX: 'X', KeyC: 'C', KeyV: 'V', KeyB: 'B',
    KeyN: 'N', KeyM: 'M', Comma: ',', Period: '.', Slash: '-'
  },
  IT: {
    Backquote: '\\',
    Digit1: '1', Digit2: '2', Digit3: '3', Digit4: '4', Digit5: '5',
    Digit6: '6', Digit7: '7', Digit8: '8', Digit9: '9', Digit0: '0',
    Minus: "'", Equal: 'ì',
    KeyQ: 'Q', KeyW: 'W', KeyE: 'E', KeyR: 'R', KeyT: 'T',
    KeyY: 'Y', KeyU: 'U', KeyI: 'I', KeyO: 'O', KeyP: 'P',
    BracketLeft: 'è', BracketRight: '+', Backslash: 'ù',
    KeyA: 'A', KeyS: 'S', KeyD: 'D', KeyF: 'F', KeyG: 'G',
    KeyH: 'H', KeyJ: 'J', KeyK: 'K', KeyL: 'L',
    Semicolon: 'ò', Quote: 'à',
    KeyZ: 'Z', KeyX: 'X', KeyC: 'C', KeyV: 'V', KeyB: 'B',
    KeyN: 'N', KeyM: 'M', Comma: ',', Period: '.', Slash: '-'
  }
}

interface KeyboardToolProps {
  variant?: 'full' | 'embed'
}

export default function KeyboardTool({ variant = 'full' }: KeyboardToolProps) {
  const [pressedKeys, setPressedKeys] = useState<Set<string>>(new Set())
  const [testedKeys, setTestedKeys] = useState<Set<string>>(new Set())
  const [keyHistory, setKeyHistory] = useState<string[]>([])
  const [languageLayout, setLanguageLayout] = useState<LanguageLayout>('US')
  const [showSettings, setShowSettings] = useState(false)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      e.preventDefault()
      const key = e.code
      
      setPressedKeys(prev => new Set(prev).add(key))
      setTestedKeys(prev => new Set(prev).add(key))
      setKeyHistory(prev => [e.key, ...prev].slice(0, 10))
    }

    const handleKeyUp = (e: KeyboardEvent) => {
      e.preventDefault()
      const key = e.code
      
      setPressedKeys(prev => {
        const newSet = new Set(prev)
        newSet.delete(key)
        return newSet
      })
    }

    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('keyup', handleKeyUp)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('keyup', handleKeyUp)
    }
  }, [])

  const Key = ({ code, label, width = 'w-12' }: { code: string, label: string, width?: string }) => {
    const isPressed = pressedKeys.has(code)
    const isTested = testedKeys.has(code)
    const displayLabel = layouts[languageLayout][code] || label
    
    return (
      <div
        className={`
          ${width} h-12 rounded-md flex items-center justify-center text-xs font-semibold
          transition-all duration-75 select-none cursor-default
          ${isPressed 
            ? 'bg-green-500 text-white scale-[0.95] shadow-lg ring-2 ring-green-400 z-10' 
            : isTested
            ? 'bg-blue-100 text-blue-800 border-2 border-blue-400 shadow-sm'
            : 'bg-white text-gray-800 border-2 border-gray-300 hover:border-gray-400 hover:shadow-sm'
          }
        `}
      >
        <span className="text-center leading-tight">{displayLabel}</span>
      </div>
    )
  }

  const keyboardRows: KeyLayout[][] = [
    // Function keys
    [
      { code: 'Escape', label: 'Esc', width: 'w-14' },
      { code: 'F1', label: 'F1' },
      { code: 'F2', label: 'F2' },
      { code: 'F3', label: 'F3' },
      { code: 'F4', label: 'F4' },
      { code: 'F5', label: 'F5' },
      { code: 'F6', label: 'F6' },
      { code: 'F7', label: 'F7' },
      { code: 'F8', label: 'F8' },
      { code: 'F9', label: 'F9' },
      { code: 'F10', label: 'F10' },
      { code: 'F11', label: 'F11' },
      { code: 'F12', label: 'F12' },
    ],
    // Number row
    [
      { code: 'Backquote', label: '`' },
      { code: 'Digit1', label: '1' },
      { code: 'Digit2', label: '2' },
      { code: 'Digit3', label: '3' },
      { code: 'Digit4', label: '4' },
      { code: 'Digit5', label: '5' },
      { code: 'Digit6', label: '6' },
      { code: 'Digit7', label: '7' },
      { code: 'Digit8', label: '8' },
      { code: 'Digit9', label: '9' },
      { code: 'Digit0', label: '0' },
      { code: 'Minus', label: '-' },
      { code: 'Equal', label: '=' },
      { code: 'Backspace', label: 'Bksp', width: 'w-20' },
    ],
    // QWERTY row
    [
      { code: 'Tab', label: 'Tab', width: 'w-16' },
      { code: 'KeyQ', label: 'Q' },
      { code: 'KeyW', label: 'W' },
      { code: 'KeyE', label: 'E' },
      { code: 'KeyR', label: 'R' },
      { code: 'KeyT', label: 'T' },
      { code: 'KeyY', label: 'Y' },
      { code: 'KeyU', label: 'U' },
      { code: 'KeyI', label: 'I' },
      { code: 'KeyO', label: 'O' },
      { code: 'KeyP', label: 'P' },
      { code: 'BracketLeft', label: '[' },
      { code: 'BracketRight', label: ']' },
      { code: 'Backslash', label: '\\', width: 'w-16' },
    ],
    // ASDF row
    [
      { code: 'CapsLock', label: 'Caps', width: 'w-20' },
      { code: 'KeyA', label: 'A' },
      { code: 'KeyS', label: 'S' },
      { code: 'KeyD', label: 'D' },
      { code: 'KeyF', label: 'F' },
      { code: 'KeyG', label: 'G' },
      { code: 'KeyH', label: 'H' },
      { code: 'KeyJ', label: 'J' },
      { code: 'KeyK', label: 'K' },
      { code: 'KeyL', label: 'L' },
      { code: 'Semicolon', label: ';' },
      { code: 'Quote', label: "'" },
      { code: 'Enter', label: 'Enter', width: 'w-24' },
    ],
    // ZXCV row
    [
      { code: 'ShiftLeft', label: 'Shift', width: 'w-24' },
      { code: 'KeyZ', label: 'Z' },
      { code: 'KeyX', label: 'X' },
      { code: 'KeyC', label: 'C' },
      { code: 'KeyV', label: 'V' },
      { code: 'KeyB', label: 'B' },
      { code: 'KeyN', label: 'N' },
      { code: 'KeyM', label: 'M' },
      { code: 'Comma', label: ',' },
      { code: 'Period', label: '.' },
      { code: 'Slash', label: '/' },
      { code: 'ShiftRight', label: 'Shift', width: 'w-28' },
    ],
    // Bottom row
    [
      { code: 'ControlLeft', label: 'Ctrl', width: 'w-16' },
      { code: 'MetaLeft', label: 'Win', width: 'w-14' },
      { code: 'AltLeft', label: 'Alt', width: 'w-14' },
      { code: 'Space', label: 'Space', width: 'flex-1' },
      { code: 'AltRight', label: 'Alt', width: 'w-14' },
      { code: 'MetaRight', label: 'Win', width: 'w-14' },
      { code: 'ControlRight', label: 'Ctrl', width: 'w-16' },
    ],
  ]

  const totalKeys = 87
  const testedCount = testedKeys.size
  const progress = Math.min(100, Math.round((testedCount / totalKeys) * 100))

  if (variant === 'embed') {
    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between text-sm">
          <span className="font-medium text-gray-700">Keys Tested: {testedCount} ({progress}%)</span>
          <button
            onClick={() => setShowSettings(!showSettings)}
            className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded text-xs font-medium transition-colors"
          >
            <Settings size={14} className="inline mr-1" />
            Layout
          </button>
        </div>
        {showSettings && (
          <div className="bg-gray-50 p-3 rounded-lg border border-gray-200">
            <select
              value={languageLayout}
              onChange={(e) => setLanguageLayout(e.target.value as LanguageLayout)}
              className="w-full px-2 py-1 border border-gray-300 rounded text-xs font-medium bg-white"
            >
              <option value="US">US (QWERTY)</option>
              <option value="UK">UK (QWERTY)</option>
              <option value="DE">German (QWERTZ)</option>
              <option value="FR">French (AZERTY)</option>
              <option value="ES">Spanish (QWERTY)</option>
              <option value="IT">Italian (QWERTY)</option>
            </select>
          </div>
        )}
        <div className="bg-gray-200 rounded-full h-2 overflow-hidden">
          <div
            className="bg-blue-500 h-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="bg-gray-800 rounded-lg p-3 border border-gray-700">
          <div className="space-y-1 max-w-2xl mx-auto">
            {keyboardRows.slice(1, 5).map((row, rowIndex) => (
              <div key={rowIndex} className="flex gap-1 justify-center">
                {row.map((key) => (
                  <Key
                    key={key.code}
                    code={key.code}
                    label={key.label}
                    width={key.width}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
        {keyHistory.length > 0 && (
          <div className="text-xs text-gray-600">
            Recent: {keyHistory.slice(0, 5).map(k => k === ' ' ? 'Space' : k).join(', ')}
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="mb-12">
      {/* Controls */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 mb-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <button
            onClick={() => setShowSettings(!showSettings)}
            className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm font-medium transition-colors"
          >
            <Settings size={16} />
            Settings
          </button>

          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-gray-700">Keys Tested:</span>
            <span className="text-sm font-bold text-gray-900">{testedCount} ({progress}%)</span>
          </div>
        </div>

        {showSettings && (
          <div className="mt-4 pt-4 border-t border-gray-200">
            <div className="flex items-center gap-2">
              <Globe size={16} className="text-gray-500" />
              <span className="text-sm font-medium text-gray-700">Keyboard Layout:</span>
              <select
                value={languageLayout}
                onChange={(e) => setLanguageLayout(e.target.value as LanguageLayout)}
                className="px-3 py-1 border border-gray-300 rounded text-sm font-medium bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="US">US (QWERTY)</option>
                <option value="UK">UK (QWERTY)</option>
                <option value="DE">German (QWERTZ)</option>
                <option value="FR">French (AZERTY)</option>
                <option value="ES">Spanish (QWERTY)</option>
                <option value="IT">Italian (QWERTY)</option>
              </select>
            </div>
          </div>
        )}
      </div>

      {/* Progress Bar */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 mb-6">
        <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
          <div
            className="bg-gradient-to-r from-blue-500 to-blue-600 h-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Keyboard */}
      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl shadow-2xl p-6 md:p-8 mb-6 border border-gray-700">
        <div className="space-y-2 max-w-5xl mx-auto">
          {keyboardRows.map((row, rowIndex) => (
            <div key={rowIndex} className="flex gap-1.5 justify-center">
              {rowIndex === 0 && <div className="w-14" />}
              {row.map((key) => (
                <Key
                  key={key.code}
                  code={key.code}
                  label={key.label}
                  width={key.width}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Key History */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
          <Keyboard size={20} className="text-blue-600" />
          Recent Key Presses
        </h3>
        <div className="flex gap-2 flex-wrap">
          {keyHistory.length > 0 ? (
            keyHistory.map((key, index) => (
              <span
                key={index}
                className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-md text-sm font-mono border border-blue-200"
              >
                {key === ' ' ? 'Space' : key}
              </span>
            ))
          ) : (
            <span className="text-gray-400 text-sm">Press any key to begin testing...</span>
          )}
        </div>
      </div>
    </div>
  )
}