import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'DeviceCheck.io — Free Online Device Testing Tools'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background: 'linear-gradient(135deg, #1e3a8a 0%, #2563eb 60%, #3b82f6 100%)',
          color: '#ffffff',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', fontSize: 40, fontWeight: 700 }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 72,
              height: 72,
              borderRadius: 18,
              background: 'rgba(255,255,255,0.15)',
              border: '3px solid rgba(255,255,255,0.6)',
              fontSize: 44,
            }}
          >
            ✓
          </div>
          DeviceCheck.io
        </div>
        <div style={{ marginTop: 40, fontSize: 72, fontWeight: 800, lineHeight: 1.1, maxWidth: 900 }}>
          Free online device testing tools
        </div>
        <div style={{ marginTop: 28, fontSize: 34, color: 'rgba(255,255,255,0.85)' }}>
          Test your webcam, microphone, keyboard &amp; screen — right in your browser.
        </div>
      </div>
    ),
    { ...size }
  )
}
