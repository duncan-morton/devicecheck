import * as fs from 'fs'
import * as path from 'path'
import type { Locale } from './getTranslation'

const CONTENT_DIR = path.join(process.cwd(), 'content')

export interface ContentData {
  title: string
  description: string
  content: string
  meta?: {
    keywords?: string[]
    lastModified?: string
  }
}

export function getContent(
  locale: Locale,
  type: 'guides' | 'issues',
  slug: string
): ContentData | null {
  try {
    const filePath = path.join(CONTENT_DIR, locale, type, `${slug}.md`)
    
    if (!fs.existsSync(filePath)) {
      // Fallback to English if translation doesn't exist
      if (locale !== 'en') {
        return getContent('en', type, slug)
      }
      return null
    }
    
    const fileContent = fs.readFileSync(filePath, 'utf-8')
    
    // Parse frontmatter if present
    const frontmatterMatch = fileContent.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/)
    
    if (frontmatterMatch) {
      const frontmatter = frontmatterMatch[1]
      const content = frontmatterMatch[2]
      
      const titleMatch = frontmatter.match(/title:\s*(.+)/)
      const descMatch = frontmatter.match(/description:\s*(.+)/)
      const keywordsMatch = frontmatter.match(/keywords:\s*\[(.*?)\]/)
      const lastModMatch = frontmatter.match(/lastModified:\s*(.+)/)
      
      return {
        title: titleMatch ? titleMatch[1].trim().replace(/^["']|["']$/g, '') : '',
        description: descMatch ? descMatch[1].trim().replace(/^["']|["']$/g, '') : '',
        content,
        meta: {
          keywords: keywordsMatch ? keywordsMatch[1].split(',').map(k => k.trim().replace(/^["']|["']$/g, '')) : undefined,
          lastModified: lastModMatch ? lastModMatch[1].trim().replace(/^["']|["']$/g, '') : undefined
        }
      }
    }
    
    // No frontmatter, return raw content
    return {
      title: '',
      description: '',
      content: fileContent
    }
  } catch (error) {
    console.error(`Error reading content for ${locale}/${type}/${slug}:`, error)
    
    // Fallback to English
    if (locale !== 'en') {
      return getContent('en', type, slug)
    }
    
    return null
  }
}

export function getAllContentSlugs(type: 'guides' | 'issues'): string[] {
  try {
    const enDir = path.join(CONTENT_DIR, 'en', type)
    
    if (!fs.existsSync(enDir)) {
      return []
    }
    
    const files = fs.readdirSync(enDir)
    return files
      .filter(file => file.endsWith('.md'))
      .map(file => file.replace('.md', ''))
  } catch (error) {
    console.error(`Error reading content slugs for ${type}:`, error)
    return []
  }
}



