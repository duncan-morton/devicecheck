import JsonLdScript from '@/components/JsonLdScript'
import TOC from '@/components/TOC'
import HelpfulWidget from '@/components/HelpfulWidget'
import RelatedGuides from '@/components/RelatedGuides'
import QuickAnswerBox from '@/components/QuickAnswerBox'
import StepsBlock from '@/components/StepsBlock'
import Link from 'next/link'
import { generateArticleSchema, generateBreadcrumbListSchema, generateFAQPageSchema, generateHowToSchema } from '@/lib/seo/jsonLd'
import { groupIssues, hubFilters, guideSets, toolSets, type IssueGroup } from '@/lib/hubs'
import { getLocalizedPath } from '@/i18n/getTranslation'

export type HubKey = 'windows' | 'mac' | 'chrome' | 'zoom' | 'teams' | 'discord' | 'laptop'

export interface HubPageConfig {
  title: string
  description: string
  path: string
  hubKey: HubKey
  intro: string
  /** Primary CTA: e.g. { label: 'Run Zoom Meeting Check', href: '/meeting-check' } */
  primaryCta?: { label: string; href: string }
  /** Link to authority guide: e.g. { label: 'How device access works', href: '/guides/how-to-enable-camera-browser' } */
  authorityGuideLink?: { label: string; href: string }
  quickAnswer: { problem: string; platform: string; deviceType: 'mic' | 'webcam' | 'keyboard' | 'screen' }
  quickSummary: string[]
  why: string[]
  steps: string[]
  permissions: string[]
  advanced: string[]
  prevention: string[]
  faqs: Array<{ question: string; answer: string }>
}

const DEVICE_LABELS: Record<'mic' | 'webcam' | 'keyboard' | 'screen', string> = {
  mic: 'Microphone',
  webcam: 'Webcam',
  keyboard: 'Keyboard',
  screen: 'Screen'
}

const DEVICE_ORDER: Array<'mic' | 'webcam' | 'keyboard' | 'screen'> = ['mic', 'webcam', 'keyboard', 'screen']

function renderIssueGroups(group: IssueGroup) {
  return DEVICE_ORDER.map(device => {
    const list = group[device]
    if (!list.length) return null
    return (
      <div key={device} className="mb-6">
        <h4 className="text-lg font-semibold text-gray-900 mb-2">{DEVICE_LABELS[device]} issues</h4>
        <ul className="list-disc pl-5 space-y-1 text-gray-700">
          {list.map(item => (
            <li key={item.slug}>
              <Link href={getLocalizedPath(`/issues/${item.slug}`, 'en')} className="text-blue-600 hover:text-blue-800">
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    )
  })
}

export default function HubPage({
  config
}: {
  config: HubPageConfig
}) {
  const issues = groupIssues(hubFilters[config.hubKey])
  const guides = guideSets[config.hubKey] || []
  const tools = toolSets[config.hubKey] || []

  const articleSchema = generateArticleSchema(
    `${config.title}`,
    config.description,
    config.path,
    new Date().toISOString(),
    new Date().toISOString(),
    'en'
  )

  const breadcrumbs = generateBreadcrumbListSchema(
    [
      { name: 'Home', path: '/' },
      { name: 'Hubs', path: '/hubs' },
      { name: config.title, path: config.path }
    ],
    'en'
  )

  const faqSchema = generateFAQPageSchema(config.faqs, 'en')
  const howToSchema = generateHowToSchema({
    url: `https://devicecheck.io${config.path}`,
    name: config.title,
    description: config.description,
    steps: config.steps.map(step => ({ title: step, description: step }))
  })

  return (
    <>
      <JsonLdScript data={articleSchema} />
      <JsonLdScript data={breadcrumbs} />
      <JsonLdScript data={faqSchema} />
      <JsonLdScript data={howToSchema} />

      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8 max-w-6xl">
          <div className="mb-4">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{config.title}</h1>
            {config.primaryCta && (
              <div className="mb-4">
                <Link
                  href={config.primaryCta.href}
                  className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  {config.primaryCta.label}
                </Link>
              </div>
            )}
            <p className="text-xl text-gray-600 max-w-3xl">{config.intro}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8 rounded-xl border border-gray-200 bg-white p-4 md:p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-3 md:col-span-2">Top issues</h2>
            {renderIssueGroups(issues)}
          </div>

          <div className="flex flex-wrap items-center gap-4 mb-6 text-sm">
            {config.authorityGuideLink && (
              <Link href={config.authorityGuideLink.href} className="text-blue-600 hover:text-blue-800 font-medium">
                {config.authorityGuideLink.label} →
              </Link>
            )}
            <span className="text-gray-500">Related devices:</span>
            {tools.map(tool => (
              <Link
                key={tool.href}
                href={getLocalizedPath(tool.href, 'en')}
                className="text-gray-700 hover:text-blue-600"
              >
                {tool.title}
              </Link>
            ))}
          </div>

          <div className="mb-6">
            <TOC contentId="hub-content" />
          </div>

          <article id="hub-content" className="prose prose-slate max-w-none bg-white p-8 md:p-12 rounded-2xl border border-gray-200">
            <QuickAnswerBox
              problem={config.quickAnswer.problem}
              platform={config.quickAnswer.platform}
              deviceType={config.quickAnswer.deviceType}
            />
            <StepsBlock steps={config.steps.map(step => ({ title: step, description: step }))} />

            <h2 className="text-2xl font-bold text-gray-900 mt-2 mb-3">Quick Diagnosis Summary</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-6">
              {config.quickSummary.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-3">Why These Issues Happen</h2>
            {config.why.map((p, idx) => (
              <p key={idx} className="text-gray-700 mb-4">
                {p}
              </p>
            ))}

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-3">Step-by-Step Fix Checklist</h2>
            <ol className="list-decimal pl-5 space-y-2 text-gray-700 mb-6">
              {config.steps.map((step, idx) => (
                <li key={idx}>{step}</li>
              ))}
            </ol>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-3">Browser/OS Permission Fixes</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-6">
              {config.permissions.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-3">Advanced Troubleshooting</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-6">
              {config.advanced.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-3">Prevention Tips</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-6">
              {config.prevention.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-3">FAQs</h2>
            <div className="space-y-5 mb-6">
              {config.faqs.map((faq, idx) => (
                <div key={idx} className="border-b border-gray-200 pb-4 last:border-0">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              ))}
            </div>
          </article>

          <HelpfulWidget />
          <RelatedGuides guides={guides} />
        </div>
      </div>
    </>
  )
}

