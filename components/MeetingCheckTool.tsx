'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { runConnectivityTest, TestStatus } from '@/lib/diagnostics'
import { playStereoSweep } from '@/lib/audioGenerator'
import VolumeMeter from '@/components/VolumeMeter'
import {
  CheckCircle2,
  AlertTriangle,
  XCircle,
  Video,
  Mic,
  Wifi,
  Volume2,
  Loader2,
} from 'lucide-react'

type Check = 'pending' | 'pass' | 'warn' | 'fail'

interface NetStats {
  ping: number
  jitter: number
  status: TestStatus
}

interface DeviceOpt {
  deviceId: string
  label: string
}

const MIC_DETECT_THRESHOLD = 0.06 // normalized level that counts as "hearing you"

function statusToCheck(s: TestStatus): Check {
  if (s === TestStatus.SUCCESS) return 'pass'
  if (s === TestStatus.WARNING) return 'warn'
  return 'fail'
}

export default function MeetingCheckTool() {
  const [phase, setPhase] = useState<'idle' | 'requesting' | 'active'>('idle')
  const [permError, setPermError] = useState<string | null>(null)

  const [stream, setStream] = useState<MediaStream | null>(null)
  const videoRef = useRef<HTMLVideoElement | null>(null)

  const [cameras, setCameras] = useState<DeviceOpt[]>([])
  const [mics, setMics] = useState<DeviceOpt[]>([])
  const [camId, setCamId] = useState<string>('')
  const [micId, setMicId] = useState<string>('')

  const [cameraCheck, setCameraCheck] = useState<Check>('pending')
  const [micHeard, setMicHeard] = useState(false)
  const [micPeak, setMicPeak] = useState(0)

  const [net, setNet] = useState<NetStats | null>(null)
  const [netTesting, setNetTesting] = useState(false)

  const [speakerState, setSpeakerState] = useState<'idle' | 'playing' | 'asked'>('idle')
  const [speakerCheck, setSpeakerCheck] = useState<Check>('pending')

  // Keep the <video> wired to the active stream.
  useEffect(() => {
    if (videoRef.current && stream) {
      videoRef.current.srcObject = stream
    }
  }, [stream])

  // Stop everything on unmount.
  useEffect(() => {
    return () => {
      stream?.getTracks().forEach((t) => t.stop())
    }
  }, [stream])

  const acquire = useCallback(
    async (nextCamId?: string, nextMicId?: string) => {
      // tear down previous stream
      stream?.getTracks().forEach((t) => t.stop())
      const constraints: MediaStreamConstraints = {
        video: nextCamId ? { deviceId: { exact: nextCamId } } : true,
        audio: nextMicId ? { deviceId: { exact: nextMicId } } : true,
      }
      const s = await navigator.mediaDevices.getUserMedia(constraints)
      setStream(s)
      setCameraCheck(s.getVideoTracks().some((t) => t.readyState === 'live') ? 'pass' : 'fail')
      // reset mic detection for the new stream
      setMicHeard(false)
      setMicPeak(0)
      return s
    },
    [stream]
  )

  const start = useCallback(async () => {
    setPermError(null)
    setPhase('requesting')
    try {
      await acquire()
      // Label the devices now that we have permission.
      const list = await navigator.mediaDevices.enumerateDevices()
      const cams = list
        .filter((d) => d.kind === 'videoinput')
        .map((d, i) => ({ deviceId: d.deviceId, label: d.label || `Camera ${i + 1}` }))
      const ms = list
        .filter((d) => d.kind === 'audioinput')
        .map((d, i) => ({ deviceId: d.deviceId, label: d.label || `Microphone ${i + 1}` }))
      setCameras(cams)
      setMics(ms)
      setCamId(cams[0]?.deviceId ?? '')
      setMicId(ms[0]?.deviceId ?? '')
      setPhase('active')
      // Kick off the network test in parallel.
      setNetTesting(true)
      runConnectivityTest()
        .then(setNet)
        .catch(() => setNet({ ping: 999, jitter: 0, status: TestStatus.FAILURE }))
        .finally(() => setNetTesting(false))
    } catch (err) {
      const name = err instanceof DOMException ? err.name : ''
      setPermError(
        name === 'NotAllowedError' || name === 'SecurityError'
          ? 'Camera and microphone access was blocked. Click the camera/lock icon in your browser address bar, allow access, then run the check again.'
          : name === 'NotFoundError'
          ? 'No camera or microphone was found. Connect a device and run the check again.'
          : 'Could not access your camera and microphone. Close other apps using them (Zoom, Teams, etc.) and try again.'
      )
      setPhase('idle')
    }
  }, [acquire])

  const onSelectCamera = async (id: string) => {
    setCamId(id)
    try {
      await acquire(id, micId)
    } catch {
      setCameraCheck('fail')
    }
  }
  const onSelectMic = async (id: string) => {
    setMicId(id)
    try {
      await acquire(camId, id)
    } catch {
      /* handled by permError path on start */
    }
  }

  const handleLevel = useCallback((level: number) => {
    setMicPeak((p) => (level > p ? level : p * 0.95 + level * 0.05))
    if (level >= MIC_DETECT_THRESHOLD) setMicHeard(true)
  }, [])

  const testSpeaker = async () => {
    setSpeakerState('playing')
    try {
      await playStereoSweep()
    } catch {
      /* ignore */
    }
    setTimeout(() => setSpeakerState('asked'), 2100)
  }

  // Derived per-check states
  const micCheck: Check = phase !== 'active' ? 'pending' : micHeard ? 'pass' : 'warn'
  const netCheck: Check = net ? statusToCheck(net.status) : 'pending'

  const checks = [cameraCheck, micCheck, speakerCheck, netCheck]
  const allResolved = phase === 'active' && !netTesting && speakerCheck !== 'pending'
  const failCount = checks.filter((c) => c === 'fail').length
  const warnCount = checks.filter((c) => c === 'warn').length

  if (phase === 'idle') {
    return (
      <div className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8">
        <div className="flex flex-col items-center text-center">
          <div className="flex gap-3 mb-4 text-blue-600">
            <Video size={28} /> <Mic size={28} /> <Volume2 size={28} /> <Wifi size={28} />
          </div>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
            Check your camera, mic, speakers &amp; connection — in one click
          </h2>
          <p className="text-gray-600 max-w-xl mb-6">
            One permission prompt tests everything you need for Zoom, Teams, or Meet. Nothing is
            recorded or uploaded — it all runs in your browser.
          </p>
          <button
            onClick={start}
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Start meeting check
          </button>
          {permError && (
            <p className="mt-4 text-sm text-red-600 max-w-xl" role="alert">
              {permError}
            </p>
          )}
        </div>
      </div>
    )
  }

  if (phase === 'requesting') {
    return (
      <div className="rounded-2xl border border-gray-200 bg-white p-10 flex flex-col items-center text-center">
        <Loader2 className="animate-spin text-blue-600 mb-4" size={32} />
        <p className="text-gray-700 font-medium">Waiting for camera &amp; microphone permission…</p>
        <p className="text-gray-500 text-sm mt-1">Choose “Allow” in the browser prompt.</p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Verdict banner */}
      <div
        className={`rounded-2xl border p-5 md:p-6 ${
          !allResolved
            ? 'border-blue-200 bg-blue-50'
            : failCount > 0
            ? 'border-red-200 bg-red-50'
            : warnCount > 0
            ? 'border-yellow-200 bg-yellow-50'
            : 'border-green-200 bg-green-50'
        }`}
      >
        <div className="flex items-center gap-3">
          {!allResolved ? (
            <Loader2 className="animate-spin text-blue-600 shrink-0" size={28} />
          ) : failCount > 0 ? (
            <XCircle className="text-red-600 shrink-0" size={28} />
          ) : warnCount > 0 ? (
            <AlertTriangle className="text-yellow-600 shrink-0" size={28} />
          ) : (
            <CheckCircle2 className="text-green-600 shrink-0" size={28} />
          )}
          <div>
            <h2 className="text-lg md:text-xl font-bold text-gray-900">
              {!allResolved
                ? 'Running your meeting check…'
                : failCount > 0
                ? `${failCount} issue${failCount > 1 ? 's' : ''} to fix before your call`
                : warnCount > 0
                ? 'Almost ready — confirm the items below'
                : "You're ready for your call"}
            </h2>
            <p className="text-sm text-gray-600">
              {!allResolved
                ? 'Speak to test your mic and play the speaker test below.'
                : failCount > 0 || warnCount > 0
                ? 'See the highlighted cards for what to check.'
                : 'Camera, microphone, speakers and connection all look good.'}
            </p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Camera */}
        <CheckCard title="Camera" icon={<Video size={20} />} state={cameraCheck}>
          <div className="aspect-video w-full rounded-lg overflow-hidden bg-gray-900 mb-3">
            {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
            <video ref={videoRef} autoPlay muted playsInline className="w-full h-full object-cover" />
          </div>
          {cameras.length > 1 && (
            <DevicePicker label="Camera" value={camId} options={cameras} onChange={onSelectCamera} />
          )}
          <p className="text-sm text-gray-500 mt-2">
            {cameraCheck === 'pass' ? 'See yourself above? Your camera works.' : 'No camera image detected.'}
          </p>
        </CheckCard>

        {/* Microphone */}
        <CheckCard title="Microphone" icon={<Mic size={20} />} state={micCheck}>
          <VolumeMeter stream={stream} isActive={phase === 'active'} onLevelChange={handleLevel} />
          {mics.length > 1 && (
            <div className="mt-3">
              <DevicePicker label="Microphone" value={micId} options={mics} onChange={onSelectMic} />
            </div>
          )}
          <p className="text-sm mt-2">
            {micHeard ? (
              <span className="text-green-700 font-medium">We can hear you — mic is working.</span>
            ) : (
              <span className="text-gray-500">Say something — the bar should move.</span>
            )}
          </p>
        </CheckCard>

        {/* Speakers */}
        <CheckCard title="Speakers" icon={<Volume2 size={20} />} state={speakerCheck}>
          <p className="text-sm text-gray-500 mb-3">
            Play a sound that pans left to right. Turn your volume up.
          </p>
          <button
            onClick={testSpeaker}
            disabled={speakerState === 'playing'}
            className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 disabled:opacity-50 transition-colors"
          >
            {speakerState === 'playing' ? 'Playing…' : 'Play test sound'}
          </button>
          {speakerState === 'asked' && (
            <div className="mt-3">
              <p className="text-sm font-medium text-gray-800 mb-2">Did you hear the sound?</p>
              <div className="flex gap-2">
                <button
                  onClick={() => setSpeakerCheck('pass')}
                  className="flex-1 px-3 py-2 rounded-lg border border-green-300 bg-green-50 text-green-800 text-sm font-medium hover:bg-green-100"
                >
                  Yes, I heard it
                </button>
                <button
                  onClick={() => setSpeakerCheck('fail')}
                  className="flex-1 px-3 py-2 rounded-lg border border-red-300 bg-red-50 text-red-800 text-sm font-medium hover:bg-red-100"
                >
                  No
                </button>
              </div>
            </div>
          )}
          {speakerCheck === 'fail' && (
            <p className="text-sm text-red-600 mt-2">
              Check your output device and volume in system sound settings, then replay.
            </p>
          )}
        </CheckCard>

        {/* Network */}
        <CheckCard title="Connection" icon={<Wifi size={20} />} state={netCheck}>
          {netTesting || !net ? (
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <Loader2 className="animate-spin" size={16} /> Measuring ping &amp; jitter…
            </div>
          ) : (
            <div className="space-y-2">
              <Row label="Ping" value={net.ping >= 999 ? '—' : `${net.ping} ms`} />
              <Row label="Jitter" value={`${net.jitter} ms`} />
              <p className="text-sm text-gray-500">
                {net.status === TestStatus.SUCCESS
                  ? 'Stable enough for smooth video calls.'
                  : net.status === TestStatus.WARNING
                  ? 'Usable, but you may see occasional lag. Prefer wired Ethernet.'
                  : 'Weak connection — expect choppy audio/video. Try wired Ethernet or move closer to the router.'}
              </p>
            </div>
          )}
        </CheckCard>
      </div>

      {(failCount > 0 || warnCount > 0) && allResolved && (
        <div className="rounded-xl border border-gray-200 bg-white p-4 text-sm text-gray-600">
          Camera or mic still failing?{' '}
          <Link href="/issues/webcam-not-working-zoom" className="text-blue-600 hover:text-blue-800">
            Fix webcam
          </Link>{' '}
          ·{' '}
          <Link href="/issues/microphone-not-working-zoom" className="text-blue-600 hover:text-blue-800">
            Fix microphone
          </Link>{' '}
          — the same steps apply to Teams and Meet.
        </div>
      )}
    </div>
  )
}

function CheckCard({
  title,
  icon,
  state,
  children,
}: {
  title: string
  icon: React.ReactNode
  state: Check
  children: React.ReactNode
}) {
  const badge = {
    pending: { cls: 'bg-gray-100 text-gray-600', label: 'Testing' },
    pass: { cls: 'bg-green-100 text-green-700', label: 'Pass' },
    warn: { cls: 'bg-yellow-100 text-yellow-700', label: 'Check' },
    fail: { cls: 'bg-red-100 text-red-700', label: 'Fail' },
  }[state]
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-gray-800 flex items-center gap-2">
          <span className="text-blue-600">{icon}</span>
          {title}
        </h3>
        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${badge.cls}`}>{badge.label}</span>
      </div>
      {children}
    </div>
  )
}

function DevicePicker({
  label,
  value,
  options,
  onChange,
}: {
  label: string
  value: string
  options: DeviceOpt[]
  onChange: (id: string) => void
}) {
  return (
    <label className="block">
      <span className="sr-only">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full text-sm rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-800"
      >
        {options.map((o) => (
          <option key={o.deviceId} value={o.deviceId}>
            {o.label}
          </option>
        ))}
      </select>
    </label>
  )
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between items-center">
      <span className="text-sm text-gray-600">{label}</span>
      <span className="font-semibold text-gray-900">{value}</span>
    </div>
  )
}
