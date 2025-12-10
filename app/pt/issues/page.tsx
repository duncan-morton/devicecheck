import { Metadata } from 'next'
import { generateMetadata as genMeta } from '@/lib/seo/metadata'
import JsonLdScript from '@/components/JsonLdScript'
import { generateWebSiteSchema } from '@/lib/seo/jsonLd'
import Link from 'next/link'
import { Mic, Camera, Keyboard, Monitor, ArrowRight } from 'lucide-react'
import * as fs from 'fs'
import * as path from 'path'

export const revalidate = 86400 // ISR: Revalidate every 24 hours

interface IssueData {
  slug: string
  title: string
  deviceType: 'mic' | 'webcam' | 'keyboard' | 'screen'
  platform: string
  problem: string
  keywords: string[]
}

function getIssuesData(): IssueData[] {
  const filePath = path.join(process.cwd(), 'data', 'issues.json')
  const fileContent = fs.readFileSync(filePath, 'utf-8')
  return JSON.parse(fileContent) as IssueData[]
}

const deviceIcons = {
  mic: Mic,
  webcam: Camera,
  keyboard: Keyboard,
  screen: Monitor
}

const deviceNames = {
  mic: 'Microphone',
  webcam: 'Webcam',
  keyboard: 'Keyboard',
  screen: 'Screen'
}

const deviceHubs = {
  mic: '/mic',
  webcam: '/webcam',
  keyboard: '/keyboard',
  screen: '/screen'
}

export const metadata: Metadata = genMeta({
  title: 'Device Troubleshooting Guides - Fix Common Issues',
  description: 'Step-by-step troubleshooting guides for microphone, webcam, keyboard, and screen issues. Fix common problems on Windows, Mac, Chrome, Firefox, and more.',
  path: '/issues',
  keywords: [
    'microphone not working',
    'webcam not working',
    'keyboard not working',
    'screen issues',
    'device troubleshooting',
    'fix microphone',
    'fix webcam',
    'fix keyboard',
    'device problems'
  ]
})

export default function IssuesPage() {
  const issues = getIssuesData()
  
  // Group issues by device type
  const groupedIssues = issues.reduce((acc, issue) => {
    if (!acc[issue.deviceType]) {
      acc[issue.deviceType] = []
    }
    acc[issue.deviceType].push(issue)
    return acc
  }, {} as Record<string, IssueData[]>)

  const websiteSchema = generateWebSiteSchema()

  return (
    <>
      <JsonLdScript data={websiteSchema} />
      
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-12 max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Device Troubleshooting Guides
            </h1>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Step-by-step guides to fix common device issues. Find solutions for microphone, webcam, keyboard, and screen problems across different platforms and applications.
            </p>
          </div>

          {Object.entries(groupedIssues).map(([deviceType, deviceIssues]) => {
            const Icon = deviceIcons[deviceType as keyof typeof deviceIcons]
            const deviceName = deviceNames[deviceType as keyof typeof deviceNames]
            const hubPath = deviceHubs[deviceType as keyof typeof deviceHubs]

            return (
              <div key={deviceType} className="mb-12">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <Icon size={32} className="text-blue-600" />
                    <h2 className="text-3xl font-bold text-gray-900">{deviceName} Issues</h2>
                  </div>
                  <Link
                    href={hubPath}
                    className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-2"
                  >
                    Test {deviceName}
                    <ArrowRight size={16} />
                  </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {deviceIssues.map((issue) => (
                    <Link
                      key={issue.slug}
                      href={`/issues/${issue.slug}`}
                      className="block p-6 bg-white rounded-xl border border-gray-200 hover:border-blue-400 hover:shadow-md transition-all duration-200 group"
                    >
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-700">
                        {issue.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-3">{issue.problem}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                          {issue.platform}
                        </span>
                        <ArrowRight size={16} className="text-gray-400 group-hover:text-blue-600 transition-colors" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )
          })}

          <div className="mt-12 bg-blue-50 p-8 rounded-2xl border border-blue-200 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Can't find your issue?
            </h2>
            <p className="text-gray-700 mb-6">
              Use our free online device tests to diagnose problems with your microphone, webcam, keyboard, or screen.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/mic"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Test Microphone
              </Link>
              <Link
                href="/webcam"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Test Webcam
              </Link>
              <Link
                href="/keyboard"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Test Keyboard
              </Link>
              <Link
                href="/screen"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Test Screen
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

