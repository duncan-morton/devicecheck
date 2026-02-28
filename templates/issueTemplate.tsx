import { Metadata } from 'next'
import { generateMetadata as genMeta } from '@/lib/seo/metadata'
import JsonLdScript from '@/components/JsonLdScript'
import { generateArticleSchema, generateBreadcrumbListSchema, generateFAQPageSchema, generateHowToSchema } from '@/lib/seo/jsonLd'
import { buildLocalizedUrl } from '@/lib/seo/urls'
import { SUPPORTED_LOCALES, type Locale } from '@/i18n/getTranslation'
import Breadcrumbs from '@/components/Breadcrumbs'
import TOCAccordion from '@/components/TOCAccordion'
import RelatedGuides from '@/components/RelatedGuides'
import HelpfulWidget from '@/components/HelpfulWidget'
import StepsBlock from '@/components/StepsBlock'
import QuickAnswerBox from '@/components/QuickAnswerBox'
import IssueDiagnostic from '@/components/IssueDiagnostic'
import IssueLinksPanel from '@/components/IssueLinksPanel'
import { getHubForPlatform } from '@/components/IssueLinksPanel'
import TroubleshootingMatrix from '@/components/TroubleshootingMatrix'
import Link from 'next/link'
import issuesData from '@/data/issues.json'

const BASE_URL = 'https://devicecheck.io'

export interface IssueData {
  slug: string
  title: string
  deviceType: 'mic' | 'webcam' | 'keyboard' | 'screen'
  platform: string
  problem: string
  keywords: string[]
}

export interface IssuePageProps {
  issue: IssueData
  siblingIssues: IssueData[]
}

const DEVICE_HUBS: Record<string, { href: string; name: string; testName: string }> = {
  mic: { href: '/mic', name: 'Microphone Test', testName: 'Microphone Test' },
  webcam: { href: '/webcam', name: 'Webcam Test', testName: 'Webcam Test' },
  keyboard: { href: '/keyboard', name: 'Keyboard Test', testName: 'Keyboard Test' },
  screen: { href: '/screen', name: 'Screen Test', testName: 'Screen Test' }
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
      'Windows 11': [
        'Enable camera in Windows 11 Privacy settings',
        'Check camera permissions',
        'Update camera drivers',
        'Verify camera is not disabled',
        'Run Windows troubleshooter'
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
      Firefox: [
        'Enable camera in Firefox settings',
        'Check browser permissions',
        'Verify system camera access',
        'Clear Firefox cache',
        'Update Firefox to latest version'
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
        'Check display settings',
        'Update macOS',
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
      ]
    }
  }

  const deviceFixes = fixes[deviceType] || fixes.mic
  return deviceFixes[platform] || deviceFixes.default || []
}

function generateFAQs(issue: IssueData): Array<{ question: string; answer: string }> {
  const { title, deviceType, platform, problem } = issue
  const hub = DEVICE_HUBS[deviceType]

  const baseFAQs = [
    {
      question: `Why is ${title.toLowerCase()}?`,
      answer: `${problem}. This usually happens due to permission settings, driver issues, or conflicts with other applications. Start by checking system permissions and ensuring the correct device is selected.`
    },
    {
      question: `How do I fix ${title.toLowerCase()}?`,
      answer: `First, check ${platform} permissions and settings. Verify the correct ${deviceType === 'mic' ? 'microphone' : deviceType === 'webcam' ? 'camera' : deviceType} is selected. Update drivers if needed. Use the ${hub.name.toLowerCase()} to verify the device is working correctly.`
    },
    {
      question: `How do I test if my ${deviceType === 'mic' ? 'microphone' : deviceType === 'webcam' ? 'camera' : deviceType} is working?`,
      answer: `Use the online ${hub.name.toLowerCase()} to check if your device is detected and working. The test provides real-time feedback and helps identify any remaining issues.`
    }
  ]

  const platformSpecificFAQs: Record<string, Array<{ question: string; answer: string }>> = {
    Chrome: [
      {
        question: `How do I enable ${deviceType === 'mic' ? 'microphone' : 'camera'} in Chrome?`,
        answer: `Click the lock icon in Chrome's address bar, then set ${deviceType === 'mic' ? 'Microphone' : 'Camera'} to "Allow". You can also go to chrome://settings/content/${deviceType === 'mic' ? 'microphone' : 'camera'} for global settings.`
      }
    ],
    'Windows 11': [
      {
        question: `How do I enable ${deviceType === 'mic' ? 'microphone' : 'camera'} in Windows 11?`,
        answer: `Open Settings → Privacy & Security → ${deviceType === 'mic' ? 'Microphone' : 'Camera'}. Ensure access is turned on and "Let desktop apps access your ${deviceType === 'mic' ? 'microphone' : 'camera'}" is enabled. Restart your computer after changing these settings.`
      }
    ],
    macOS: [
      {
        question: `How do I enable ${deviceType === 'mic' ? 'microphone' : 'camera'} on Mac?`,
        answer: `Open System Preferences → Security & Privacy → Privacy → ${deviceType === 'mic' ? 'Microphone' : 'Camera'}. Check the box next to the applications that need access. You may need to restart applications after granting permission.`
      }
    ]
  }

  const platformFAQs = platformSpecificFAQs[platform] || []
  return [...baseFAQs, ...platformFAQs].slice(0, 7)
}

export function generateIssueMetadata(issue: IssueData): Metadata {
  const description = `Fix ${issue.title.toLowerCase()}. Step-by-step troubleshooting guide covering ${issue.platform} settings, permissions, drivers, and solutions for ${issue.problem.toLowerCase()}.`
  const path = `/issues/${issue.slug}`
  const base = genMeta({
    title: `${issue.title} - Complete Fix Guide`,
    description,
    path,
    keywords: issue.keywords
  })
  const languages: Record<string, string> = {}
  for (const loc of SUPPORTED_LOCALES) {
    languages[loc] = buildLocalizedUrl(path, loc as Locale)
  }
  languages['x-default'] = `${BASE_URL}${path}`
  return {
    ...base,
    alternates: {
      canonical: `${BASE_URL}${path}`,
      languages,
    },
  }
}

const NEXT_CHECKS_OTHER: Record<string, { href: string; label: string }> = {
  webcam: { href: '/mic', label: 'Microphone test' },
  mic: { href: '/webcam', label: 'Webcam test' },
  keyboard: { href: '/webcam', label: 'Webcam test' },
  screen: { href: '/webcam', label: 'Webcam test' },
}

export function generateIssuePage(issue: IssueData, siblingIssues: IssueData[]) {
  const hub = DEVICE_HUBS[issue.deviceType]
  const nextChecksOtherLink = NEXT_CHECKS_OTHER[issue.deviceType]
  const quickFixes = generateQuickFixes(issue.deviceType, issue.platform)
  const faqs = generateFAQs(issue)
  const steps = quickFixes.slice(0, 6).map((fix) => {
    // Extract title and description from fix text
    const colonIndex = fix.indexOf(':')
    if (colonIndex > 0) {
      return {
        title: fix.substring(0, colonIndex).trim(),
        description: fix.substring(colonIndex + 1).trim()
      }
    }
    // If no colon, use first few words as title
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
  
  // Generate clean intro without duplicate platform/device text
  const deviceName = issue.deviceType === 'mic' ? 'microphone' : issue.deviceType === 'webcam' ? 'camera' : issue.deviceType
  const problemLower = issue.problem.toLowerCase()
  const platformLower = issue.platform.toLowerCase()
  
  // Build intro sentence 1 - avoid duplicating platform if already in problem
  let introSentence1 = issue.problem.charAt(0).toUpperCase() + issue.problem.slice(1)
  
  // Check if platform is already mentioned in the problem
  const platformWords = issue.platform.split(' ')
  const hasPlatformInProblem = platformWords.some(word => 
    problemLower.includes(word.toLowerCase())
  )
  
  // Only add platform if not already mentioned
  if (!hasPlatformInProblem) {
    introSentence1 += ` on ${issue.platform}`
  }
  
  const introSentence2 = `This guide covers all solutions, from permissions to driver updates.`
  
  const articleSchema = generateArticleSchema(
    `${issue.title} - Complete Fix Guide`,
    `Fix ${issue.title.toLowerCase()}. Step-by-step troubleshooting guide.`,
    `/issues/${issue.slug}`,
    new Date().toISOString(),
    new Date().toISOString()
  )

  const hubForBreadcrumb = getHubForPlatform(issue.platform)
  const breadcrumbItems = [
    { name: 'Home', path: '/' },
    { name: 'Issues', path: '/issues' },
    ...(hubForBreadcrumb ? [{ name: hubForBreadcrumb.name, path: hubForBreadcrumb.path }] : []),
    { name: issue.title, path: `/issues/${issue.slug}` },
  ]
  const breadcrumbs = generateBreadcrumbListSchema(breadcrumbItems)

  const faqSchema = generateFAQPageSchema(faqs)
  
  // Only generate HowTo schema if we have at least 3 steps
  const howToSchema = steps.length >= 3 ? generateHowToSchema({
    url: `https://devicecheck.io/issues/${issue.slug}`,
    name: issue.title,
    description: `Fix ${issue.title.toLowerCase()} with clear steps for ${issue.platform} covering permissions, device selection, and drivers.`,
    steps: steps.map(s => ({ title: s.title, description: s.description }))
  }) : null

  const relatedGuides = siblingIssues.slice(0, 3).map(sibling => ({
    title: sibling.title,
    href: `/issues/${sibling.slug}`
  }))

  return {
    metadata: generateIssueMetadata(issue),
    component: (
      <>
        <JsonLdScript data={articleSchema} />
        <JsonLdScript data={breadcrumbs} />
        <JsonLdScript data={faqSchema} />
        {howToSchema && <JsonLdScript data={howToSchema} />}
        
        <div className="min-h-screen bg-gray-50">
          <div className="container mx-auto px-4 py-8 max-w-6xl">
            <Breadcrumbs items={[
              { name: 'Issues', path: '/issues' },
              { name: issue.title, path: `/issues/${issue.slug}` }
            ]} />
            
            <div className="mb-4">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{issue.title}</h1>
              <p className="text-xl text-gray-600 max-w-3xl">
                {introSentence1}. {introSentence2}
              </p>
            </div>

            {hubForBreadcrumb && (
              <div className="mb-4 rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-700">
                This is a {issue.platform} device issue.{' '}
                <Link href={hubForBreadcrumb.path} className="text-blue-600 hover:text-blue-800 font-medium">
                  See all {hubForBreadcrumb.name} →
                </Link>
              </div>
            )}

            <IssueDiagnostic device={issue.deviceType} mode="defer" />

            <IssueLinksPanel issue={issue} allIssues={issuesData as IssueData[]} />

            <div className="text-gray-600">
              <StepsBlock steps={steps} />
            </div>

            <article id="article-content" className="prose prose-slate max-w-none bg-white p-8 md:p-12 rounded-2xl border border-gray-200 mt-8">
              <QuickAnswerBox
                problem={issue.problem}
                platform={issue.platform}
                deviceType={issue.deviceType}
              />

              <TOCAccordion contentId="article-content" summaryText="On this page" />

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Quick Fix Summary</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                {quickFixes.map((fix, index) => (
                  <li key={index}>{fix}</li>
                ))}
              </ul>

              <p className="text-sm text-gray-500 mt-4 mb-6">
                Next: <Link href="/meeting-check" className="text-blue-600 hover:text-blue-800">Run full meeting check</Link>
                {nextChecksOtherLink && (
                  <> · <Link href={nextChecksOtherLink.href} className="text-blue-600 hover:text-blue-800">{nextChecksOtherLink.label}</Link></>
                )}
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Why This Happens</h2>
              <p className="text-gray-700 mb-4">
                {issue.platform} includes strict privacy controls that can block {issue.deviceType === 'mic' ? 'microphone' : issue.deviceType === 'webcam' ? 'camera' : issue.deviceType} access. The system requires explicit permission for applications to use your {issue.deviceType === 'mic' ? 'microphone' : issue.deviceType === 'webcam' ? 'camera' : issue.deviceType}, and these settings can be reset after updates or changed accidentally.
              </p>
              <p className="text-gray-700 mb-4">
                Driver issues are another common cause. {issue.platform} may not automatically install the correct drivers for your {issue.deviceType === 'mic' ? 'microphone' : issue.deviceType === 'webcam' ? 'camera' : issue.deviceType}, especially for USB devices or specialized equipment. Outdated drivers can cause detection problems or poor performance.
              </p>
              <p className="text-gray-700 mb-4">
                System conflicts occur when multiple applications try to access the {issue.deviceType === 'mic' ? 'microphone' : issue.deviceType === 'webcam' ? 'camera' : issue.deviceType} simultaneously. {issue.platform} allows only one application to use the {issue.deviceType === 'mic' ? 'microphone' : issue.deviceType === 'webcam' ? 'camera' : issue.deviceType} at a time, so background apps or previous sessions can block access.
              </p>
              <p className="text-gray-700 mb-6">
                Hardware problems include loose connections, damaged cables, or {issue.deviceType === 'mic' ? 'microphone' : issue.deviceType === 'webcam' ? 'camera' : issue.deviceType} hardware failure. Physical issues are less common but should be checked if software solutions don't work.
              </p>

              <TroubleshootingMatrix issue={{ deviceType: issue.deviceType, platform: issue.platform, slug: issue.slug }} />

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Step-by-Step Fix Guide</h2>

              <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Step 1: Check Permissions and Settings</h3>
              <p className="text-gray-700 mb-4">
                {issue.platform} requires explicit permission for {issue.deviceType === 'mic' ? 'microphone' : issue.deviceType === 'webcam' ? 'camera' : issue.deviceType} access. Verify permissions are enabled in system settings.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                <li>Open {issue.platform} settings or preferences</li>
                <li>Navigate to Privacy or Security settings</li>
                <li>Find {issue.deviceType === 'mic' ? 'Microphone' : issue.deviceType === 'webcam' ? 'Camera' : issue.deviceType} permissions</li>
                <li>Ensure access is enabled</li>
                <li>Check that your application is listed and allowed</li>
                <li>Restart your computer if needed</li>
              </ul>

              <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Step 2: Verify Device Selection</h3>
              <p className="text-gray-700 mb-4">
                {issue.platform} may be using the wrong {issue.deviceType === 'mic' ? 'microphone' : issue.deviceType === 'webcam' ? 'camera' : issue.deviceType} or no device at all. Verify the correct device is selected.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                <li>Open system sound or camera settings</li>
                <li>Check the list of available devices</li>
                <li>Select the correct {issue.deviceType === 'mic' ? 'microphone' : issue.deviceType === 'webcam' ? 'camera' : issue.deviceType}</li>
                <li>Test the device to confirm it works</li>
                <li>Set it as the default if available</li>
              </ul>

              <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Step 3: Update Drivers</h3>
              <p className="text-gray-700 mb-4">
                Outdated or missing drivers prevent {issue.deviceType === 'mic' ? 'microphone' : issue.deviceType === 'webcam' ? 'camera' : issue.deviceType} detection. Update drivers through system settings or Device Manager.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                <li>Open Device Manager or system settings</li>
                <li>Find {issue.deviceType === 'mic' ? 'Audio inputs' : issue.deviceType === 'webcam' ? 'Cameras' : issue.deviceType} section</li>
                <li>Right-click your device and select Update driver</li>
                <li>Choose automatic driver search</li>
                <li>Restart your computer after updating</li>
              </ul>

              <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Step 4: Close Conflicting Applications</h3>
              <p className="text-gray-700 mb-4">
                Only one application can access your {issue.deviceType === 'mic' ? 'microphone' : issue.deviceType === 'webcam' ? 'camera' : issue.deviceType} at a time. Other apps may be blocking access.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                <li>Close other applications using the {issue.deviceType === 'mic' ? 'microphone' : issue.deviceType === 'webcam' ? 'camera' : issue.deviceType}</li>
                <li>Check system tray for background apps</li>
                <li>End processes in Task Manager if needed</li>
                <li>Restart your browser if using web applications</li>
              </ul>

              <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Step 5: Check Physical Connections</h3>
              <p className="text-gray-700 mb-4">
                Loose or damaged connections prevent device detection. Verify all physical connections are secure.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                <li>Unplug USB devices and firmly reconnect them</li>
                <li>Try a different USB port if available</li>
                <li>Check cables for visible damage</li>
                <li>Test the device on another computer if possible</li>
                <li>Check for physical mute switches if applicable</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Platform-Specific Fixes</h2>
              
              <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">{issue.platform}</h3>
              <p className="text-gray-700 mb-4">
                {issue.platform} has specific settings for {issue.deviceType === 'mic' ? 'microphone' : issue.deviceType === 'webcam' ? 'camera' : issue.deviceType} access. Follow these steps for {issue.platform}.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                <li>Open {issue.platform} settings</li>
                <li>Navigate to Privacy or Security section</li>
                <li>Enable {issue.deviceType === 'mic' ? 'microphone' : issue.deviceType === 'webcam' ? 'camera' : issue.deviceType} access</li>
                <li>Grant permission to your application</li>
                <li>Restart the application after changing settings</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Advanced Troubleshooting</h2>
              <p className="text-gray-700 mb-4">
                If basic fixes don't work, try these advanced troubleshooting steps.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                <li>Run system troubleshooter for {issue.deviceType === 'mic' ? 'audio' : issue.deviceType === 'webcam' ? 'camera' : issue.deviceType} issues</li>
                <li>Reset {issue.deviceType === 'mic' ? 'audio' : issue.deviceType === 'webcam' ? 'camera' : issue.deviceType} settings to defaults</li>
                <li>Check for system updates</li>
                <li>Reinstall {issue.deviceType === 'mic' ? 'audio' : issue.deviceType === 'webcam' ? 'camera' : issue.deviceType} drivers</li>
                <li>Test in safe mode if available</li>
              </ul>
              <p className="text-gray-700 mb-6">
                If none of these steps work, the issue may be hardware-related. Test your {issue.deviceType === 'mic' ? 'microphone' : issue.deviceType === 'webcam' ? 'camera' : issue.deviceType} on another computer to confirm.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Prevention Tips</h2>
              <p className="text-gray-700 mb-4">
                Keep {issue.platform} updated. System updates often include driver updates that can fix {issue.deviceType === 'mic' ? 'microphone' : issue.deviceType === 'webcam' ? 'camera' : issue.deviceType} issues.
              </p>
              <p className="text-gray-700 mb-4">
                Don't disable {issue.deviceType === 'mic' ? 'microphone' : issue.deviceType === 'webcam' ? 'camera' : issue.deviceType} access in privacy settings unless necessary. {issue.platform} remembers your choice and may block access to new applications.
              </p>
              <p className="text-gray-700 mb-4">
                Close applications properly instead of just minimizing them. Background apps can hold {issue.deviceType === 'mic' ? 'microphone' : issue.deviceType === 'webcam' ? 'camera' : issue.deviceType} access and prevent other applications from using it.
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

              {relatedGuides.length > 0 && (
                <RelatedGuides guides={relatedGuides} />
              )}

              <p className="text-gray-700 mb-6 mt-8">
                Use the <Link href={hub.href} className="text-blue-600 hover:text-blue-800">online {hub.name.toLowerCase()}</Link> to confirm everything is working.
              </p>
            </article>

            <HelpfulWidget />
          </div>
        </div>
      </>
    )
  }
}

