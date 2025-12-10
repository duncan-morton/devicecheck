// This script generates the search_replace commands for updating locale pages
// Run this to see what needs to be updated, then apply manually

const tools = ['webcam', 'keyboard', 'screen', 'meeting-check']
const locales = ['es', 'pt', 'de', 'fr', 'hi']

console.log('Pattern for updating locale pages:')
console.log('1. Update imports to include getTranslation')
console.log('2. Set locale constant')
console.log('3. Update metadata path and locale')
console.log('4. Update function to use locale and translations')
console.log('5. Update breadcrumbs paths')
console.log('6. Update all text strings to use t.*')
console.log('7. Update StickyActionBar href')

// This is just a reference - actual updates done via search_replace

