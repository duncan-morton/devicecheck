import * as fs from 'fs'
import * as path from 'path'

const locales = ['es', 'pt', 'de', 'fr', 'hi']
const appDir = path.join(process.cwd(), 'app')

// Move pages from route groups to actual locale folders
function restructureRoutes() {
  console.log('Restructuring routes...')
  
  for (const locale of locales) {
    const routeGroupDir = path.join(appDir, `(${locale})`)
    const localeDir = path.join(appDir, locale)
    
    if (!fs.existsSync(routeGroupDir)) {
      console.log(`Route group (${locale}) not found, skipping...`)
      continue
    }
    
    // Create locale directory
    if (!fs.existsSync(localeDir)) {
      fs.mkdirSync(localeDir, { recursive: true })
    }
    
    // Move all files except layout.tsx
    const items = fs.readdirSync(routeGroupDir, { withFileTypes: true })
    for (const item of items) {
      if (item.name === 'layout.tsx') continue
      
      const source = path.join(routeGroupDir, item.name)
      const dest = path.join(localeDir, item.name)
      
      if (fs.existsSync(dest)) {
        // Remove existing
        fs.rmSync(dest, { recursive: true, force: true })
      }
      
      if (item.isDirectory()) {
        fs.cpSync(source, dest, { recursive: true })
      } else {
        fs.copyFileSync(source, dest)
      }
    }
    
    console.log(`Moved pages from (${locale}) to ${locale}/`)
  }
  
  console.log('Route restructuring complete!\n')
}

// Update root layout to include locale switcher
function updateRootLayout() {
  const layoutPath = path.join(appDir, 'layout.tsx')
  if (!fs.existsSync(layoutPath)) return
  
  let content = fs.readFileSync(layoutPath, 'utf-8')
  
  // Check if LocaleSwitcher is already imported
  if (!content.includes('LocaleSwitcher')) {
    // Add import
    content = content.replace(
      "import { Analytics } from '@vercel/analytics/next';",
      "import { Analytics } from '@vercel/analytics/next';\nimport LocaleSwitcher from '@/components/LocaleSwitcher';"
    )
    
    // Add to body (before children)
    content = content.replace(
      '<body',
      '<body className="relative"'
    )
    
    // Add switcher after opening body tag
    content = content.replace(
      '<body',
      '<body>\n        <div className="fixed top-4 right-4 z-50">\n          <LocaleSwitcher />\n        </div>'
    )
  }
  
  fs.writeFileSync(layoutPath, content)
  console.log('Updated root layout with locale switcher')
}

restructureRoutes()
updateRootLayout()
console.log('\n✅ i18n structure complete!')
console.log('\nNext: Update individual pages to use translations and locale-aware metadata.')

