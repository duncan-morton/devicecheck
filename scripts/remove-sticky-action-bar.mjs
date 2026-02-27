import fs from 'fs'
import path from 'path'

function walk(dir, list) {
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  for (const e of entries) {
    const full = path.join(dir, e.name)
    if (e.name === 'node_modules' || e.name === '.next') continue
    if (e.isDirectory()) walk(full, list)
    else if (e.name.endsWith('.tsx') || e.name.endsWith('.ts')) list.push(full)
  }
}

const files = []
walk('.', files)
let done = 0
const importRe = /import StickyActionBar from '@\/components\/StickyActionBar'\r?\n/g
// Match line that contains <StickyActionBar ... /> (any props)
const componentRe = /\r?\n\s*<StickyActionBar[^>]*\/>\s*\r?\n/g

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8')
  if (!content.includes('StickyActionBar')) continue
  const before = content
  content = content.replace(importRe, '')
  content = content.replace(componentRe, '\n')
  if (content !== before) {
    fs.writeFileSync(file, content)
    done++
  }
}
console.log('Updated', done, 'files')
