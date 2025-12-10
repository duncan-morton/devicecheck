import * as fs from 'fs'
import * as path from 'path'

const APP_DIR = path.join(process.cwd(), 'app')
const LOCALES = ['en', 'es', 'pt', 'de', 'fr', 'hi'] as const

interface PageInfo {
  relativePath: string
  isDirectory: boolean
}

function getAllPages(dir: string, basePath: string = ''): PageInfo[] {
  const pages: PageInfo[] = []
  const entries = fs.readdirSync(dir, { withFileTypes: true })

  for (const entry of entries) {
    const relativePath = path.join(basePath, entry.name)
    const fullPath = path.join(dir, entry.name)

    // Skip route groups, node_modules, and other special directories
    if (entry.name.startsWith('(') || entry.name === 'node_modules' || entry.name === '.next') {
      continue
    }

    if (entry.isDirectory()) {
      pages.push({ relativePath, isDirectory: true })
      // Recursively get pages from subdirectories
      pages.push(...getAllPages(fullPath, relativePath))
    } else if (entry.name === 'page.tsx' || entry.name === 'layout.tsx') {
      pages.push({ relativePath, isDirectory: false })
    }
  }

  return pages
}

function copyFileWithLocale(
  sourcePath: string,
  targetPath: string,
  locale: string,
  isLayout: boolean = false
) {
  if (!fs.existsSync(sourcePath)) {
    console.warn(`Source file not found: ${sourcePath}`)
    return
  }

  // Ensure target directory exists
  const targetDir = path.dirname(targetPath)
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true })
  }

  let content = fs.readFileSync(sourcePath, 'utf-8')

  // For page.tsx files, we'll need to update imports and add locale support
  // For now, just copy as-is - we'll update them in a separate step
  if (isLayout && locale !== 'en') {
    // Update lang attribute in layout
    content = content.replace(/lang="en"/g, `lang="${locale}"`)
    content = content.replace(/lang='en'/g, `lang='${locale}'`)
  }

  fs.writeFileSync(targetPath, content, 'utf-8')
}

function setupLocaleStructure() {
  console.log('Setting up i18n route structure...')

  // Get all existing pages (excluding route groups)
  const existingPages = getAllPages(APP_DIR)

  // Create route groups for each locale
  for (const locale of LOCALES) {
    const routeGroup = locale === 'en' ? '(en)' : `(${locale})`
    const routeGroupPath = path.join(APP_DIR, routeGroup)

    if (!fs.existsSync(routeGroupPath)) {
      fs.mkdirSync(routeGroupPath, { recursive: true })
      console.log(`Created route group: ${routeGroup}`)
    }

    // Copy all pages to the route group
    for (const page of existingPages) {
      const sourcePath = path.join(APP_DIR, page.relativePath)
      const targetPath = path.join(routeGroupPath, page.relativePath)

      // Skip if it's already in a route group
      if (page.relativePath.includes('(')) {
        continue
      }

      if (page.isDirectory) {
        // Create directory
        if (!fs.existsSync(targetPath)) {
          fs.mkdirSync(targetPath, { recursive: true })
        }
      } else {
        // Copy file
        const isLayout = page.relativePath.includes('layout.tsx')
        copyFileWithLocale(sourcePath, targetPath, locale, isLayout)
      }
    }
  }

  console.log('Route structure setup complete!')
  console.log('\nNext steps:')
  console.log('1. Update all page.tsx files to use locale from params')
  console.log('2. Update metadata generation to use locale')
  console.log('3. Update sitemap to include all locales')
}

setupLocaleStructure()



