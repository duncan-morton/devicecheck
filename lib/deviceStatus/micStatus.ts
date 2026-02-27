export type MicStatus =
  | 'ok'
  | 'permission_denied'
  | 'no_device'
  | 'input_muted'
  | 'no_audio_detected'
  | 'in_use_elsewhere'
  | 'blocked_by_browser'
  | 'unknown_error'

export interface MicDiagnostic {
  status: MicStatus
  level?: number // average audio level (0–1)
}

interface DeriveArgs {
  error: string | null
  stream: MediaStream | null
  audioLevel: number
  trackEnabled: boolean
}

export function deriveMicDiagnostic({
  error,
  stream,
  audioLevel,
  trackEnabled,
}: DeriveArgs): MicDiagnostic {
  if (stream && audioLevel > 0.05) {
    return { status: 'ok', level: audioLevel }
  }

  const normalized = error || ''

  if (
    normalized.includes('NotAllowedError') ||
    normalized.includes('PermissionDeniedError')
  ) {
    return { status: 'permission_denied' }
  }

  if (
    normalized.includes('NotFoundError') ||
    normalized.includes('DevicesNotFoundError')
  ) {
    return { status: 'no_device' }
  }

  if (
    normalized.includes('NotReadableError') ||
    normalized.includes('TrackStartError')
  ) {
    return { status: 'in_use_elsewhere' }
  }

  if (normalized.includes('SecurityError')) {
    return { status: 'blocked_by_browser' }
  }

  if (stream && trackEnabled === false) {
    return { status: 'input_muted' }
  }

  if (stream && audioLevel <= 0.02) {
    return { status: 'no_audio_detected', level: audioLevel }
  }

  if (error) {
    return { status: 'unknown_error' }
  }

  return { status: 'unknown_error' }
}
