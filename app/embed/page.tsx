import { Metadata } from 'next'
import { generateMetadata as genMeta } from '@/lib/seo/metadata'
import EmbedLandingClient from '@/components/EmbedLandingClient'

export const metadata: Metadata = genMeta({
  title: 'Embed Free Device Test Tools',
  description: 'Embed microphone, webcam, and keyboard test tools on your site. Free, no tracking, runs locally in the visitor\'s browser.',
  path: '/embed',
  keywords: ['embed microphone test', 'embed webcam test', 'embed keyboard test', 'device test widget']
})

export default function EmbedPage() {
  return <EmbedLandingClient />
}
