import * as fs from 'fs'
import * as path from 'path'

interface IssueData {
  slug: string
  title: string
  deviceType: 'mic' | 'webcam' | 'keyboard' | 'screen'
  platform: string
  problem: string
  keywords: string[]
}

const ISSUES_DATA_PATH = path.join(process.cwd(), 'data', 'issues.json')
const ISSUES_OUTPUT_DIR = path.join(process.cwd(), 'app', 'issues')

function readIssuesData(): IssueData[] {
  const fileContent = fs.readFileSync(ISSUES_DATA_PATH, 'utf-8')
  return JSON.parse(fileContent) as IssueData[]
}

function getPlatformSpecificInstructions(deviceType: string, platform: string): string {
  const instructions: Record<string, Record<string, string>> = {
    mic: {
      Chrome: `Open Chrome and click the lock icon in the address bar. Set Microphone to "Allow". You can also go to chrome://settings/content/microphone for global settings. Ensure Windows microphone permissions are also enabled in Settings → Privacy & Security → Microphone.`,
      Safari: `Open Safari → Preferences → Websites → Microphone. Select "Ask" or "Allow" for the website. On macOS, also check System Preferences → Security & Privacy → Privacy → Microphone. Ensure Safari is listed and enabled.`,
      Firefox: `Click the lock icon in Firefox's address bar, then set Microphone to "Allow". Go to about:preferences#privacy and scroll to Permissions. Click Settings next to Microphone and ensure your site is allowed. Verify Windows microphone permissions are enabled.`,
      Edge: `Click the lock icon in Edge's address bar, then set Microphone to "Allow". Go to edge://settings/content/microphone for global settings. Ensure Windows microphone permissions are enabled in Settings → Privacy & Security → Microphone.`,
      'Microsoft Teams': `Open Teams → Settings → Devices. Under Microphone, select your device from the dropdown. Click "Test microphone" to verify it works. If not detected, check Windows Settings → Privacy & Security → Microphone and ensure Teams has permission.`,
      Zoom: `Open Zoom → Settings → Audio. Under Microphone, select your device. Click "Test Speaker & Microphone" to verify. If not detected, check system microphone permissions. On Windows, go to Settings → Privacy & Security → Microphone.`,
      'Discord Mobile': `Open your device Settings → Apps → Discord → Permissions. Enable Microphone permission. Open Discord and go to User Settings → Voice & Video. Select your microphone under Input Device. Test your microphone using the input sensitivity meter.`,
      'Windows 11': `Press Windows key + I → Privacy & Security → Microphone. Turn on "Microphone access" and "Let desktop apps access your microphone". Scroll down and ensure your application is listed and enabled. Restart your computer after changing these settings.`,
      'Windows 10': `Open Settings → Privacy → Microphone. Turn on "Allow apps to access your microphone" and "Allow desktop apps to access your microphone". Ensure your application is listed and enabled. Restart your computer if needed.`,
      macOS: `Open System Preferences → Security & Privacy → Privacy → Microphone. Check the box next to applications that need access. You may need to restart applications after granting permission. Some apps require admin approval.`
    },
    webcam: {
      Chrome: `Click the lock icon in Chrome's address bar, then set Camera to "Allow". Go to chrome://settings/content/camera for global settings. Ensure Windows camera permissions are enabled in Settings → Privacy & Security → Camera.`,
      Firefox: `Click the lock icon in Firefox's address bar, then set Camera to "Allow". Go to about:preferences#privacy and scroll to Permissions. Click Settings next to Camera and ensure your site is allowed. Verify Windows camera permissions are enabled.`,
      'Microsoft Teams': `Open Teams → Settings → Devices. Under Camera, select your device from the dropdown. Click "Test video" to verify it works. If not detected, check Windows Settings → Privacy & Security → Camera and ensure Teams has permission.`,
      Zoom: `Open Zoom → Settings → Video. Under Camera, select your device. Preview your video to verify. If not detected, check system camera permissions. On Windows, go to Settings → Privacy & Security → Camera.`,
      'Google Meet': `Click the camera icon in Google Meet. If prompted, allow camera access. Check browser permissions by clicking the lock icon in the address bar. Ensure Windows camera permissions are enabled in Settings → Privacy & Security → Camera.`,
      'Windows 11': `Press Windows key + I → Privacy & Security → Camera. Turn on "Camera access" and "Let desktop apps access your camera". Scroll down and ensure your application is listed and enabled. Restart your computer after changing these settings.`,
      'Windows 10': `Open Settings → Privacy → Camera. Turn on "Allow apps to access your camera" and "Allow desktop apps to access your camera". Ensure your application is listed and enabled. Restart your computer if needed.`,
      macOS: `Open System Preferences → Security & Privacy → Privacy → Camera. Check the box next to applications that need access. You may need to restart applications after granting permission.`
    },
    keyboard: {
      Windows: `Open Settings → Time & Language → Language & Region. Check your keyboard layout is correct. Go to Settings → Devices → Typing and verify keyboard settings. Open Device Manager and check for keyboard driver issues.`,
      macOS: `Open System Preferences → Keyboard. Check Input Sources and verify your keyboard layout. Go to System Preferences → Accessibility → Keyboard and check for any enabled features that might interfere. Reset keyboard preferences if needed.`,
      'Windows 11': `Open Settings → Time & Language → Language & Region. Verify keyboard layout. Go to Settings → Devices → Typing and check keyboard settings. Open Device Manager and update keyboard drivers if needed.`,
      'Windows 10': `Open Settings → Time & Language → Language. Check keyboard layout. Go to Settings → Devices and verify keyboard settings. Open Device Manager and check for driver issues.`
    },
    screen: {
      'MacBook Pro': `Open System Preferences → Displays. Check resolution and refresh rate settings. Update macOS to latest version. Reset NVRAM by holding Option + Command + P + R during startup. Run Apple Diagnostics if issues persist.`,
      Gaming: `Open your graphics card control panel. Check monitor response time settings and enable gaming mode if available. Update graphics drivers to latest version. Adjust in-game graphics settings. Test with different games to isolate the issue.`,
      Windows: `Open Settings → System → Display. Check resolution and refresh rate. Update graphics drivers through Device Manager or manufacturer website. Run Display troubleshooter from Settings → System → Troubleshoot.`,
      macOS: `Open System Preferences → Displays. Check resolution and color profile. Update macOS to latest version. Reset display settings if needed. Check for physical damage or loose connections.`
    }
  }

  const deviceInstructions = instructions[deviceType] || instructions.mic
  return deviceInstructions[platform] || `Open ${platform} settings and navigate to ${deviceType === 'mic' ? 'microphone' : deviceType === 'webcam' ? 'camera' : deviceType} permissions. Enable access for your application and restart if needed.`
}

function generateQuickFixes(deviceType: string, platform: string): string[] {
  const fixes: Record<string, Record<string, string[]>> = {
    mic: {
      default: [
        'Check microphone permissions in system settings',
        'Verify the correct microphone is selected',
        'Update audio drivers',
        'Close other applications using the microphone',
        'Check physical connections',
        'Restart your computer'
      ],
      Chrome: [
        'Enable microphone in Chrome settings',
        'Check browser permissions',
        'Verify Windows microphone access',
        'Clear browser cache',
        'Update Chrome to latest version'
      ],
      Safari: [
        'Enable microphone in Safari preferences',
        'Check macOS Privacy settings',
        'Verify microphone permissions',
        'Reset Safari permissions',
        'Update Safari to latest version'
      ],
      Firefox: [
        'Enable microphone in Firefox settings',
        'Check browser permissions',
        'Verify system microphone access',
        'Clear Firefox cache',
        'Update Firefox to latest version'
      ],
      Edge: [
        'Enable microphone in Edge settings',
        'Check browser permissions',
        'Verify Windows microphone access',
        'Clear Edge cache',
        'Update Edge to latest version'
      ],
      'Microsoft Teams': [
        'Check Teams microphone settings',
        'Verify Windows microphone permissions',
        'Select correct microphone in Teams',
        'Test microphone in Teams settings',
        'Restart Teams application'
      ],
      Zoom: [
        'Check Zoom audio settings',
        'Verify microphone permissions',
        'Select correct microphone in Zoom',
        'Test microphone in Zoom settings',
        'Update Zoom application'
      ],
      'Discord Mobile': [
        'Check Discord app permissions',
        'Enable microphone in device settings',
        'Grant microphone permission to Discord',
        'Restart Discord app',
        'Check device microphone settings'
      ],
      'Windows 11': [
        'Enable microphone in Windows 11 Privacy settings',
        'Check that the correct microphone is selected',
        'Update audio drivers through Device Manager',
        'Close other applications using the microphone',
        'Restart your computer after changing settings'
      ],
      'Windows 10': [
        'Enable microphone in Windows 10 Privacy settings',
        'Verify microphone is selected in Sound settings',
        'Update audio drivers',
        'Close conflicting applications',
        'Restart your computer'
      ],
      macOS: [
        'Check macOS Privacy settings for microphone',
        'Verify microphone is selected in Sound settings',
        'Update macOS to latest version',
        'Reset microphone permissions',
        'Restart your Mac'
      ]
    },
    webcam: {
      default: [
        'Check camera permissions in system settings',
        'Verify the correct camera is selected',
        'Update camera drivers',
        'Close other applications using the camera',
        'Check physical connections',
        'Restart your computer'
      ],
      Chrome: [
        'Enable camera in Chrome settings',
        'Check browser permissions',
        'Verify Windows camera access',
        'Clear browser cache',
        'Update Chrome to latest version'
      ],
      Firefox: [
        'Enable camera in Firefox settings',
        'Check browser permissions',
        'Verify system camera access',
        'Clear Firefox cache',
        'Update Firefox to latest version'
      ],
      'Microsoft Teams': [
        'Check Teams camera settings',
        'Verify Windows camera permissions',
        'Select correct camera in Teams',
        'Test camera in Teams settings',
        'Restart Teams application'
      ],
      Zoom: [
        'Check Zoom video settings',
        'Verify camera permissions',
        'Select correct camera in Zoom',
        'Test camera in Zoom settings',
        'Update Zoom application'
      ],
      'Google Meet': [
        'Check Google Meet camera settings',
        'Verify browser camera permissions',
        'Select correct camera in Google Meet',
        'Test camera in browser',
        'Update browser to latest version'
      ],
      'Windows 11': [
        'Enable camera in Windows 11 Privacy settings',
        'Check camera permissions',
        'Update camera drivers',
        'Verify camera is not disabled',
        'Run Windows troubleshooter'
      ],
      'Windows 10': [
        'Enable camera in Windows 10 Privacy settings',
        'Check camera permissions',
        'Update camera drivers',
        'Verify camera is selected',
        'Restart your computer'
      ],
      macOS: [
        'Check macOS Privacy settings for camera',
        'Verify camera is selected',
        'Update macOS to latest version',
        'Reset camera permissions',
        'Restart your Mac'
      ]
    },
    keyboard: {
      default: [
        'Check keyboard connections',
        'Test keyboard on another computer',
        'Update keyboard drivers',
        'Check for stuck keys',
        'Restart your computer',
        'Try a different USB port'
      ],
      Windows: [
        'Check keyboard language settings',
        'Verify keyboard layout',
        'Update keyboard drivers',
        'Check for Windows updates',
        'Run keyboard troubleshooter'
      ],
      'Windows 11': [
        'Check keyboard language settings in Settings',
        'Verify keyboard layout is correct',
        'Update keyboard drivers through Device Manager',
        'Check for Windows 11 updates',
        'Run keyboard troubleshooter'
      ],
      'Windows 10': [
        'Check keyboard language settings',
        'Verify keyboard layout',
        'Update keyboard drivers',
        'Check for Windows updates',
        'Run keyboard troubleshooter'
      ],
      macOS: [
        'Check keyboard settings in System Preferences',
        'Verify keyboard layout',
        'Reset keyboard preferences',
        'Check for macOS updates',
        'Test keyboard in different apps'
      ]
    },
    screen: {
      default: [
        'Check display connections',
        'Update graphics drivers',
        'Adjust display settings',
        'Check for physical damage',
        'Test with another display',
        'Restart your computer'
      ],
      'MacBook Pro': [
        'Check display settings in System Preferences',
        'Update macOS to latest version',
        'Reset NVRAM',
        'Check for hardware issues',
        'Run Apple Diagnostics'
      ],
      Gaming: [
        'Check monitor response time settings',
        'Update graphics drivers',
        'Adjust game graphics settings',
        'Check monitor refresh rate',
        'Test with different games'
      ],
      Windows: [
        'Update graphics drivers',
        'Check display settings',
        'Adjust color calibration',
        'Run display troubleshooter',
        'Check for Windows updates'
      ],
      'Windows 11': [
        'Update graphics drivers through Device Manager',
        'Check display settings in Settings',
        'Adjust color calibration',
        'Run display troubleshooter',
        'Check for Windows 11 updates'
      ],
      macOS: [
        'Check display settings in System Preferences',
        'Update macOS to latest version',
        'Reset display settings',
        'Check for physical damage',
        'Test with another display'
      ]
    }
  }

  const deviceFixes = fixes[deviceType] || fixes.mic
  return deviceFixes[platform] || deviceFixes.default || []
}

function generateFAQs(issue: IssueData, deviceName: string, hub: { href: string; name: string }): Array<{ question: string; answer: string }> {
  const { title, platform, problem } = issue

  const baseFAQs = [
    {
      question: `Why is ${title.toLowerCase()}?`,
      answer: `${problem}. This usually happens due to permission settings, driver issues, or conflicts with other applications. Start by checking system permissions and ensuring the correct device is selected.`
    },
    {
      question: `How do I fix ${title.toLowerCase()}?`,
      answer: `First, check ${platform} permissions and settings. Verify the correct ${deviceName} is selected. Update drivers if needed. Use the ${hub.name.toLowerCase()} to verify the device is working correctly. Follow the step-by-step guide above for detailed instructions.`
    },
    {
      question: `How do I test if my ${deviceName} is working?`,
      answer: `Use the online ${hub.name.toLowerCase()} to check if your device is detected and working. The test provides real-time feedback and helps identify any remaining issues.`
    },
    {
      question: `What causes ${title.toLowerCase()}?`,
      answer: `Common causes include privacy settings blocking access, outdated drivers, incorrect device selection, or another application using the ${deviceName}. Check permissions first, then verify device selection and update drivers.`
    },
    {
      question: `Can I fix ${title.toLowerCase()} without technical knowledge?`,
      answer: `Yes. Most ${deviceName} issues can be fixed by checking permissions in ${platform} settings and ensuring the correct device is selected. Follow the step-by-step guide above for detailed instructions.`
    }
  ]

  const platformSpecificFAQs: Record<string, Array<{ question: string; answer: string }>> = {
    Chrome: [
      {
        question: `How do I enable ${deviceName === 'microphone' ? 'microphone' : 'camera'} in Chrome?`,
        answer: `Click the lock icon in Chrome's address bar, then set ${deviceName === 'microphone' ? 'Microphone' : 'Camera'} to "Allow". You can also go to chrome://settings/content/${deviceName === 'microphone' ? 'microphone' : 'camera'} for global settings. Ensure system permissions are also enabled.`
      }
    ],
    Safari: [
      {
        question: `How do I enable ${deviceName === 'microphone' ? 'microphone' : 'camera'} in Safari?`,
        answer: `Open Safari → Preferences → Websites → ${deviceName === 'microphone' ? 'Microphone' : 'Camera'}. Select "Ask" or "Allow" for the website. Also check System Preferences → Security & Privacy → Privacy → ${deviceName === 'microphone' ? 'Microphone' : 'Camera'} to ensure Safari is enabled.`
      }
    ],
    Firefox: [
      {
        question: `How do I enable ${deviceName === 'microphone' ? 'microphone' : 'camera'} in Firefox?`,
        answer: `Click the lock icon in Firefox's address bar, then set ${deviceName === 'microphone' ? 'Microphone' : 'Camera'} to "Allow". Go to about:preferences#privacy and scroll to Permissions. Click Settings next to ${deviceName === 'microphone' ? 'Microphone' : 'Camera'} and ensure your site is allowed.`
      }
    ],
    Edge: [
      {
        question: `How do I enable ${deviceName === 'microphone' ? 'microphone' : 'camera'} in Edge?`,
        answer: `Click the lock icon in Edge's address bar, then set ${deviceName === 'microphone' ? 'Microphone' : 'Camera'} to "Allow". Go to edge://settings/content/${deviceName === 'microphone' ? 'microphone' : 'camera'} for global settings. Ensure system permissions are also enabled.`
      }
    ],
    'Windows 11': [
      {
        question: `How do I enable ${deviceName === 'microphone' ? 'microphone' : 'camera'} in Windows 11?`,
        answer: `Open Settings → Privacy & Security → ${deviceName === 'microphone' ? 'Microphone' : 'Camera'}. Ensure access is turned on and "Let desktop apps access your ${deviceName}" is enabled. Restart your computer after changing these settings.`
      }
    ],
    'Windows 10': [
      {
        question: `How do I enable ${deviceName === 'microphone' ? 'microphone' : 'camera'} in Windows 10?`,
        answer: `Open Settings → Privacy → ${deviceName === 'microphone' ? 'Microphone' : 'Camera'}. Turn on "Allow apps to access your ${deviceName}" and "Allow desktop apps to access your ${deviceName}". Ensure your application is listed and enabled.`
      }
    ],
    macOS: [
      {
        question: `How do I enable ${deviceName === 'microphone' ? 'microphone' : 'camera'} on Mac?`,
        answer: `Open System Preferences → Security & Privacy → Privacy → ${deviceName === 'microphone' ? 'Microphone' : 'Camera'}. Check the box next to the applications that need access. You may need to restart applications after granting permission.`
      }
    ]
  }

  const platformFAQs = platformSpecificFAQs[platform] || []
  return [...baseFAQs, ...platformFAQs].slice(0, 7)
}

function generatePageContent(issue: IssueData, siblingIssues: IssueData[]): string {
  const hubMap: Record<string, { href: string; name: string; testName: string }> = {
    mic: { href: '/mic', name: 'Microphone Test', testName: 'Microphone Test' },
    webcam: { href: '/webcam', name: 'Webcam Test', testName: 'Webcam Test' },
    keyboard: { href: '/keyboard', name: 'Keyboard Test', testName: 'Keyboard Test' },
    screen: { href: '/screen', name: 'Screen Test', testName: 'Screen Test' }
  }

  const hub = hubMap[issue.deviceType]
  const deviceName = issue.deviceType === 'mic' ? 'microphone' : issue.deviceType === 'webcam' ? 'camera' : issue.deviceType
  const quickFixes = generateQuickFixes(issue.deviceType, issue.platform)
  const faqs = generateFAQs(issue, deviceName, hub)
  const platformInstructions = getPlatformSpecificInstructions(issue.deviceType, issue.platform)

  const relatedGuides = siblingIssues.slice(0, 3).map(sibling => ({
    title: sibling.title,
    href: `/issues/${sibling.slug}`
  }))

  // Generate clean intro without duplicate platform text
  const problemLower = issue.problem.toLowerCase()
  const platformWords = issue.platform.split(' ')
  const hasPlatformInProblem = platformWords.some(word => 
    problemLower.includes(word.toLowerCase())
  )
  
  let introSentence1 = issue.problem.charAt(0).toUpperCase() + issue.problem.slice(1)
  if (!hasPlatformInProblem) {
    introSentence1 += ` on ${issue.platform}`
  }
  const introSentence2 = `This guide covers all solutions, from permissions to driver updates.`
  
  // Generate steps for StepsBlock
  const steps = quickFixes.slice(0, 6).map((fix) => {
    const colonIndex = fix.indexOf(':')
    if (colonIndex > 0) {
      return {
        title: fix.substring(0, colonIndex).trim(),
        description: fix.substring(colonIndex + 1).trim()
      }
    }
    const words = fix.split(' ')
    if (words.length > 4) {
      return {
        title: words.slice(0, 4).join(' '),
        description: fix
      }
    }
    return {
      title: fix,
      description: fix
    }
  })
  
  // Generate HowTo schema if we have at least 3 steps
  const hasHowTo = steps.length >= 3
  const howToSchemaCode = hasHowTo ? `  const howToSchema = generateHowToSchema({
    url: 'https://devicecheck.io/issues/${issue.slug}',
    name: '${issue.title}',
    description: 'Fix ${issue.title.toLowerCase()} with clear steps for ${issue.platform} covering permissions, device selection, and drivers.',
    steps: ${JSON.stringify(steps)}
  })` : ''
  
  const howToScript = hasHowTo ? `      <JsonLdScript data={howToSchema} />` : ''
  
  const nextChecksOther: Record<string, { href: string; label: string }> = {
    webcam: { href: '/mic', label: 'Microphone test' },
    mic: { href: '/webcam', label: 'Webcam test' },
    keyboard: { href: '/webcam', label: 'Webcam test' },
    screen: { href: '/webcam', label: 'Webcam test' },
  }
  const otherLink = nextChecksOther[issue.deviceType]

  function getHubForPlatform(platform: string): { path: string; name: string } | null {
    if (!platform?.trim()) return null
    const p = platform.trim().toLowerCase()
    if (/zoom/.test(p)) return { path: '/hubs/zoom-issues', name: 'Zoom issues' }
    if (/teams/.test(p)) return { path: '/hubs/teams-issues', name: 'Teams issues' }
    if (/discord/.test(p)) return { path: '/hubs/discord-issues', name: 'Discord issues' }
    if (/chrome|permission|browser/.test(p)) return { path: '/hubs/chrome-permissions-issues', name: 'Chrome & browser permission issues' }
    if (/windows/.test(p)) return { path: '/hubs/windows-device-issues', name: 'Windows device issues' }
    if (/mac|macos/.test(p)) return { path: '/hubs/mac-device-issues', name: 'Mac device issues' }
    if (/laptop/.test(p)) return { path: '/hubs/laptop-device-troubleshooting', name: 'Laptop device troubleshooting' }
    return null
  }
  const hubForBreadcrumb = getHubForPlatform(issue.platform)
  const breadcrumbItems = [
    { name: 'Home', path: '/' },
    { name: 'Issues', path: '/issues' },
    ...(hubForBreadcrumb ? [{ name: hubForBreadcrumb.name, path: hubForBreadcrumb.path }] : []),
    { name: issue.title, path: `/issues/${issue.slug}` },
  ]

  return `import { Metadata } from 'next'
import { generateMetadata as genMeta } from '@/lib/seo/metadata'
import JsonLdScript from '@/components/JsonLdScript'
import { generateArticleSchema, generateBreadcrumbListSchema, generateFAQPageSchema, generateHowToSchema } from '@/lib/seo/jsonLd'
import Breadcrumbs from '@/components/Breadcrumbs'
import TOCAccordion from '@/components/TOCAccordion'
import RelatedGuides from '@/components/RelatedGuides'
import HelpfulWidget from '@/components/HelpfulWidget'
import QuickAnswerBox from '@/components/QuickAnswerBox'
import StepsBlock from '@/components/StepsBlock'
import IssueDiagnostic from '@/components/IssueDiagnostic'
import IssueLinksPanel from '@/components/IssueLinksPanel'
import TroubleshootingMatrix from '@/components/TroubleshootingMatrix'
import Link from 'next/link'
import issuesData from '@/data/issues.json'

export const revalidate = 86400

const baseUrl = 'https://devicecheck.io'
const issuePath = '/issues/${issue.slug}'
const alternates = {
  canonical: baseUrl + issuePath,
  languages: { en: baseUrl + issuePath, de: baseUrl + '/de' + issuePath, es: baseUrl + '/es' + issuePath, fr: baseUrl + '/fr' + issuePath, pt: baseUrl + '/pt' + issuePath, hi: baseUrl + '/hi' + issuePath, 'x-default': baseUrl + issuePath },
}
export const metadata: Metadata = { ...genMeta({
  title: '${issue.title} - Complete Fix Guide',
  description: 'Fix ${issue.title.toLowerCase()}. Step-by-step troubleshooting guide covering ${issue.platform} settings, permissions, drivers, and solutions for ${issue.problem.toLowerCase()}.',
  path: issuePath,
  keywords: ${JSON.stringify(issue.keywords)}
}), alternates }

const faqs = ${JSON.stringify(faqs, null, 2)}

export default function IssuePage() {
  const articleSchema = generateArticleSchema(
    '${issue.title} - Complete Fix Guide',
    'Fix ${issue.title.toLowerCase()}. Step-by-step troubleshooting guide.',
    '/issues/${issue.slug}',
    new Date().toISOString(),
    new Date().toISOString()
  )

  const breadcrumbItems = ${JSON.stringify(breadcrumbItems)}
  const breadcrumbs = generateBreadcrumbListSchema(breadcrumbItems)

  const faqSchema = generateFAQPageSchema(faqs)
${howToSchemaCode}

  const steps = ${JSON.stringify(steps)}

  return (
    <>
      <JsonLdScript data={articleSchema} />
      <JsonLdScript data={breadcrumbs} />
      <JsonLdScript data={faqSchema} />
${howToScript}
      
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8 max-w-6xl">
          <Breadcrumbs items={[
            { name: 'Issues', path: '/issues' },
            { name: '${issue.title}', path: '/issues/${issue.slug}' }
          ]} />
          
          <div className="mb-4">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">${issue.title}</h1>
            <p className="text-xl text-gray-600 max-w-3xl">
              ${introSentence1}. ${introSentence2}
            </p>
          </div>

          <IssueDiagnostic device="${issue.deviceType}" mode="defer" />

          <IssueLinksPanel issue={{ slug: ${JSON.stringify(issue.slug)}, deviceType: ${JSON.stringify(issue.deviceType)}, platform: ${JSON.stringify(issue.platform)}, title: ${JSON.stringify(issue.title)} }} allIssues={issuesData} />

          <div className="text-gray-600">
            <StepsBlock steps={steps} />
          </div>

          <article id="article-content" className="prose prose-slate max-w-none bg-white p-8 md:p-12 rounded-2xl border border-gray-200 mt-8">
            <QuickAnswerBox 
              problem="${issue.problem}"
              platform="${issue.platform}"
              deviceType="${issue.deviceType}"
            />

            <TOCAccordion contentId="article-content" summaryText="On this page" />

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Quick Fix Summary</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
${quickFixes.map(fix => `              <li>${fix}</li>`).join('\n')}
            </ul>

            <p className="text-sm text-gray-500 mt-4 mb-6">
              Next: <Link href="/meeting-check" className="text-blue-600 hover:text-blue-800">Run full meeting check</Link>${otherLink ? ` · <Link href="${otherLink.href}" className="text-blue-600 hover:text-blue-800">${otherLink.label}</Link>` : ''}
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Why This Happens</h2>
            <p className="text-gray-700 mb-4">
              ${issue.platform} includes strict privacy controls that can block ${deviceName} access. The system requires explicit permission for applications to use your ${deviceName}, and these settings can be reset after updates or changed accidentally.
            </p>
            <p className="text-gray-700 mb-4">
              Driver issues are another common cause. ${issue.platform} may not automatically install the correct drivers for your ${deviceName}, especially for USB devices or specialized equipment. Outdated drivers can cause detection problems or poor performance.
            </p>
            <p className="text-gray-700 mb-4">
              System conflicts occur when multiple applications try to access the ${deviceName} simultaneously. ${issue.platform} allows only one application to use the ${deviceName} at a time, so background apps or previous sessions can block access.
            </p>
            <p className="text-gray-700 mb-6">
              Hardware problems include loose connections, damaged cables, or ${deviceName} hardware failure. Physical issues are less common but should be checked if software solutions don't work.
            </p>

            <TroubleshootingMatrix issue={{ deviceType: '${issue.deviceType}', platform: ${issue.platform != null ? JSON.stringify(issue.platform) : 'undefined'}, slug: '${issue.slug}' }} />

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Step-by-Step Fix Guide</h2>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Step 1: Check Permissions and Settings</h3>
            <p className="text-gray-700 mb-4">
              ${issue.platform} requires explicit permission for ${deviceName} access. Verify permissions are enabled in system settings.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Open ${issue.platform} settings or preferences</li>
              <li>Navigate to Privacy or Security settings</li>
              <li>Find ${deviceName.charAt(0).toUpperCase() + deviceName.slice(1)} permissions</li>
              <li>Ensure access is enabled</li>
              <li>Check that your application is listed and allowed</li>
              <li>Restart your computer if needed</li>
            </ul>
            <p className="text-gray-700 mb-6">
              ${platformInstructions}
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Step 2: Verify Device Selection</h3>
            <p className="text-gray-700 mb-4">
              ${issue.platform} may be using the wrong ${deviceName} or no device at all. Verify the correct device is selected.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Open system sound or camera settings</li>
              <li>Check the list of available devices</li>
              <li>Select the correct ${deviceName}</li>
              <li>Test the device to confirm it works</li>
              <li>Set it as the default if available</li>
            </ul>
            <p className="text-gray-700 mb-6">
              If your ${deviceName} doesn't appear in the list, it may not be detected. See Step 3 for driver troubleshooting.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Step 3: Update Drivers</h3>
            <p className="text-gray-700 mb-4">
              Outdated or missing drivers prevent ${deviceName} detection. Update drivers through system settings or Device Manager.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Open Device Manager or system settings</li>
              <li>Find ${deviceName === 'microphone' ? 'Audio inputs' : deviceName === 'camera' ? 'Cameras' : deviceName} section</li>
              <li>Right-click your device and select Update driver</li>
              <li>Choose automatic driver search</li>
              <li>Wait for the system to find and install drivers</li>
              <li>Restart your computer after updating</li>
            </ul>
            <p className="text-gray-700 mb-4">
              If your ${deviceName} doesn't appear in Device Manager, check other sections like "Sound, video and game controllers" or "Universal Serial Bus controllers" for USB devices.
            </p>
            <p className="text-gray-700 mb-6">
              If automatic search doesn't find drivers, visit your computer or ${deviceName} manufacturer's website. Download the latest drivers for ${issue.platform} and install them manually.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Step 4: Close Conflicting Applications</h3>
            <p className="text-gray-700 mb-4">
              Only one application can access your ${deviceName} at a time. Other apps may be blocking access.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Close other applications using the ${deviceName}</li>
              <li>Check system tray for background apps</li>
              <li>End processes in Task Manager if needed</li>
              <li>Restart your browser if using web applications</li>
              <li>Check for browser extensions that might block access</li>
            </ul>
            <p className="text-gray-700 mb-6">
              Some applications don't release ${deviceName} access when closed. Restart your computer to clear all ${deviceName} locks if needed.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Step 5: Check Physical Connections</h3>
            <p className="text-gray-700 mb-4">
              Loose or damaged connections prevent device detection. Verify all physical connections are secure.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Unplug USB devices and firmly reconnect them</li>
              <li>Try a different USB port if available</li>
              <li>Check cables for visible damage</li>
              <li>Test the device on another computer if possible</li>
              <li>Check for physical mute switches if applicable</li>
            </ul>
            <p className="text-gray-700 mb-6">
              If the ${deviceName} works on another computer, the issue is software-related. If it doesn't work anywhere, the ${deviceName} may be faulty.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Platform-Specific Fixes</h2>
            
            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">${issue.platform}</h3>
            <p className="text-gray-700 mb-4">
              ${issue.platform} has specific settings for ${deviceName} access. Follow these detailed steps for ${issue.platform}.
            </p>
            <p className="text-gray-700 mb-4">
              ${platformInstructions}
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Verify settings are saved correctly</li>
              <li>Restart the application after changing settings</li>
              <li>Test the ${deviceName} to confirm it works</li>
              <li>Check for ${issue.platform} updates</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Advanced Troubleshooting</h2>
            <p className="text-gray-700 mb-4">
              If basic fixes don't work, try these advanced troubleshooting steps.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Run system troubleshooter for ${deviceName} issues</li>
              <li>Reset ${deviceName} settings to defaults</li>
              <li>Check for system updates</li>
              <li>Reinstall ${deviceName} drivers</li>
              <li>Test in safe mode if available</li>
              <li>Check system logs for error messages</li>
            </ul>
            <p className="text-gray-700 mb-6">
              If none of these steps work, the issue may be hardware-related. Test your ${deviceName} on another computer to confirm. Contact the manufacturer if the device is under warranty.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Prevention Tips</h2>
            <p className="text-gray-700 mb-4">
              Keep ${issue.platform} updated. System updates often include driver updates that can fix ${deviceName} issues.
            </p>
            <p className="text-gray-700 mb-4">
              Don't disable ${deviceName} access in privacy settings unless necessary. ${issue.platform} remembers your choice and may block access to new applications.
            </p>
            <p className="text-gray-700 mb-4">
              Close applications properly instead of just minimizing them. Background apps can hold ${deviceName} access and prevent other applications from using it.
            </p>
            <p className="text-gray-700 mb-6">
              Regularly update drivers through system settings or Device Manager. Outdated drivers cause more problems after major system updates.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Frequently Asked Questions</h2>
            <div className="space-y-6 mt-6">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-200 pb-6 last:border-0">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{faq.question}</h3>
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              ))}
            </div>

${relatedGuides.length > 0 ? `            <RelatedGuides guides={${JSON.stringify(relatedGuides, null, 14)}} />` : ''}

            <p className="text-gray-700 mb-6 mt-8">
              Use the <Link href="${hub.href}" className="text-blue-600 hover:text-blue-800">online ${hub.name.toLowerCase()}</Link> to confirm everything is working.
            </p>
          </article>

          <HelpfulWidget />
        </div>
      </div>
    </>
  )
}
`
}

function ensureDirectoryExists(dirPath: string) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true })
  }
}

function generateIssuePages() {
  console.log('Reading issues data...')
  const issues = readIssuesData()
  console.log(`Found ${issues.length} issues to generate\n`)

  // Ensure output directory exists
  ensureDirectoryExists(ISSUES_OUTPUT_DIR)

  let successCount = 0
  let errorCount = 0

  for (const issue of issues) {
    try {
      // Get sibling issues (same deviceType)
      const siblingIssues = issues.filter(
        i => i.slug !== issue.slug && i.deviceType === issue.deviceType
      )

      // Generate page content
      const pageContent = generatePageContent(issue, siblingIssues)

      // Create directory for this issue
      const issueDir = path.join(ISSUES_OUTPUT_DIR, issue.slug)
      ensureDirectoryExists(issueDir)

      // Write page file
      const pagePath = path.join(issueDir, 'page.tsx')
      fs.writeFileSync(pagePath, pageContent, 'utf-8')

      console.log(`✓ Generated: /issues/${issue.slug}/page.tsx`)
      successCount++
    } catch (error) {
      console.error(`✗ Error generating ${issue.slug}:`, error)
      errorCount++
    }
  }

  console.log(`\n=== Generation Complete ===`)
  console.log(`Success: ${successCount}`)
  console.log(`Errors: ${errorCount}`)
  console.log(`Total: ${issues.length}`)
}

// Run the generator
generateIssuePages()
