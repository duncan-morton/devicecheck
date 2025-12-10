import Link from 'next/link'
import { Camera, Mic, Keyboard, Monitor, Video } from 'lucide-react'
import { getLocalizedPath, type Locale } from '@/i18n/getTranslation'

interface Tool {
  name: string
  path: string
  description: string
  icon: React.ReactNode
}

const tools: Tool[] = [
  {
    name: 'Webcam Test',
    path: '/webcam',
    description: 'Test your camera resolution and framing',
    icon: <Camera size={24} />
  },
  {
    name: 'Microphone Test',
    path: '/mic',
    description: 'Check mic input levels and audio quality',
    icon: <Mic size={24} />
  },
  {
    name: 'Keyboard Test',
    path: '/keyboard',
    description: 'Test all keys and detect ghosting',
    icon: <Keyboard size={24} />
  },
  {
    name: 'Screen Test',
    path: '/screen',
    description: 'Check for dead pixels and color accuracy',
    icon: <Monitor size={24} />
  },
  {
    name: 'Meeting Check',
    path: '/meeting-check',
    description: 'Test connectivity for video calls',
    icon: <Video size={24} />
  }
]

interface RelatedToolsProps {
  currentPath: string
  title?: string
  locale?: Locale
}

export default function RelatedTools({ currentPath, title = 'Related Tools', locale = 'en' }: RelatedToolsProps) {
  const relatedTools = tools.filter(tool => tool.path !== currentPath)

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">{title}</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {relatedTools.map(tool => (
          <Link
            key={tool.path}
            href={getLocalizedPath(tool.path, locale)}
            className="group bg-white rounded-xl border border-gray-200 p-6 hover:border-blue-300 hover:shadow-lg transition-all"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-50 rounded-lg text-blue-600 group-hover:bg-blue-100 transition-colors">
                {tool.icon}
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                  {tool.name}
                </h3>
                <p className="text-sm text-gray-600">{tool.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}


