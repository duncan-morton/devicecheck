import { Metadata } from 'next'
import HubPage from '@/components/HubPage'
import { generateMetadata as genMeta } from '@/lib/seo/metadata'

const title = 'Laptop Device Troubleshooting – Complete Hub'
const description =
  'Fix laptop microphone, webcam, keyboard, and screen issues across Windows and macOS. Step-by-step checks and common problems.'
const path = '/hubs/laptop-device-troubleshooting'

export const metadata: Metadata = genMeta({
  title,
  description,
  path,
  keywords: [
    'laptop microphone not working',
    'laptop webcam not working',
    'laptop keyboard not working',
    'laptop screen issues',
    'laptop troubleshooting'
  ]
})

export default function Page() {
  return (
    <HubPage
      config={{
        title,
        description,
        path,
        hubKey: 'laptop',
        intro:
          'A single hub for laptop device issues on Windows and macOS. Fix microphones, webcams, keyboards, and screens with clear steps for both platforms.',
        quickAnswer: {
          problem: 'Laptop permissions or drivers blocking devices',
          platform: 'Windows/macOS',
          deviceType: 'mic'
        },
        quickSummary: [
          'Enable microphone and camera in system privacy settings',
          'Update audio, camera, keyboard, and graphics drivers',
          'Close apps holding the camera or mic, then restart the laptop',
          'Test with online tools to confirm detection after each change'
        ],
        why: [
          'Laptop privacy settings often block microphone and camera after updates. Permissions must be re-enabled per app.',
          'Driver mismatches or OEM utilities can break audio, camera, keyboard, or display performance.',
          'Thermal or power-saving modes can throttle USB ports, cameras, or keyboards, leading to lag or disconnects.',
          'Only one app can hold the camera or mic. Background conferencing apps may lock the device.'
        ],
        steps: [
          'Enable microphone and camera in Windows/macOS privacy settings',
          'Select the correct input/output devices in system sound settings',
          'Close Zoom, Teams, Discord, and other apps that may lock devices',
          'Restart the laptop to clear locks and reload drivers',
          'Update audio, camera, keyboard, and graphics drivers (OEM support site preferred)',
          'Test mic and webcam with the online tools in the browser',
          'For USB devices, connect directly and avoid unpowered hubs',
          'Disable noise suppression if voice sounds muffled or clipped',
          'Check display refresh rate and scaling if the screen flickers or scales incorrectly',
          'Disable aggressive power-saving that suspends USB or display outputs',
          'Run built-in troubleshooters for audio, keyboard, and display',
          'If problems persist, test hardware on another system to confirm device health'
        ],
        permissions: [
          'Windows/macOS: allow Microphone and Camera for desktop apps',
          'Browser: lock icon → allow mic and camera for test pages',
          'Conferencing apps: pick the correct device after system permissions are granted',
          'Ensure laptop power modes are not disabling USB or display outputs'
        ],
        advanced: [
          'Update BIOS/firmware if devices disconnect randomly',
          'Disable USB selective suspend if microphones or webcams drop',
          'Reset SMC/NVRAM on Mac laptops if power or display is unstable',
          'Remove OEM audio effects that distort or mute input',
          'Check for hardware faults: loose hinges, damaged cables, or worn ports'
        ],
        prevention: [
          'Keep OS, drivers, and conferencing apps updated',
          'Avoid chaining hubs; plug cameras and mics directly into the laptop',
          'Use wired networking and headsets for stability',
          'Run a quick mic and camera test before meetings',
          'Check power settings after major updates to avoid aggressive device sleep'
        ],
        faqs: [
          {
            question: 'Why does my laptop mic work in some apps but not others?',
            answer: 'Permissions may be per-app. Allow the app in system privacy settings and select the correct mic inside each app.'
          },
          {
            question: 'Why does my laptop webcam keep disconnecting?',
            answer: 'USB power saving or other apps holding the camera can cause drops. Disable USB power saving, close other apps, and reconnect the camera.'
          },
          {
            question: 'Why is my laptop keyboard lagging?',
            answer: 'High CPU load, accessibility filters, or outdated drivers can cause lag. Disable filters, update drivers, and close heavy apps.'
          },
          {
            question: 'How do I fix laptop screen flicker?',
            answer: 'Update graphics drivers, match refresh rate to the panel, and disable adaptive brightness or aggressive power saving.'
          },
          {
            question: 'Which test should I run first?',
            answer: 'Use the online microphone and webcam tests to confirm detection. If they fail, recheck permissions and drivers.'
          },
          {
            question: 'Can overheating cause device drops?',
            answer: 'Yes. Thermal throttling can disrupt USB and display stability. Improve cooling and reduce load if devices disconnect.'
          }
        ]
      }}
    />
  )
}

