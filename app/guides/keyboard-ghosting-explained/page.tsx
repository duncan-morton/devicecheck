import { Metadata } from 'next'
import { generateMetadata as genMeta } from '@/lib/seo/metadata'
import JsonLdScript from '@/components/JsonLdScript'
import { generateArticleSchema, generateBreadcrumbListSchema, generateFAQPageSchema } from '@/lib/seo/jsonLd'
import Breadcrumbs from '@/components/Breadcrumbs'
import Link from 'next/link'

export const revalidate = 86400

export const metadata: Metadata = genMeta({
  title: 'Keyboard Ghosting Explained - What It Is and How to Fix It',
  description: 'Learn what keyboard ghosting is, why it happens, and how to fix it. Complete guide to key rollover, anti-ghosting, and keyboard limitations.',
  path: '/guides/keyboard-ghosting-explained',
  keywords: [
    'keyboard ghosting',
    'keyboard ghosting explained',
    'what is keyboard ghosting',
    'key rollover',
    'anti-ghosting keyboard',
    'keyboard not registering keys'
  ]
})

const faqs = [
  {
    question: 'What is keyboard ghosting?',
    answer: 'Keyboard ghosting occurs when pressing multiple keys simultaneously causes some keys to not register. This happens because keyboards have limited key rollover, meaning they can only detect a certain number of keys pressed at once.'
  },
  {
    question: 'Why does keyboard ghosting happen?',
    answer: 'Keyboards use a matrix circuit to detect key presses. This matrix has limitations on how many keys can be detected simultaneously. When you press more keys than the keyboard can handle, some keys don\'t register, creating ghosting.'
  },
  {
    question: 'How do I know if my keyboard has ghosting?',
    answer: 'Test your keyboard by pressing multiple keys at once. Use the online keyboard test to press several keys simultaneously. If some keys don\'t register when pressed together, your keyboard has ghosting limitations.'
  },
  {
    question: 'What is key rollover?',
    answer: 'Key rollover is the number of keys a keyboard can detect simultaneously. 2-key rollover (2KRO) means only 2 keys work at once. 6-key rollover (6KRO) means 6 keys work. N-key rollover (NKRO) means unlimited keys work simultaneously.'
  },
  {
    question: 'What is anti-ghosting?',
    answer: 'Anti-ghosting is a feature that prevents keyboard ghosting. Keyboards with anti-ghosting use better circuit designs that allow more keys to be detected simultaneously. Look for "anti-ghosting" or "NKRO" when buying keyboards.'
  },
  {
    question: 'Can I fix keyboard ghosting?',
    answer: 'You can\'t fix ghosting on keyboards that don\'t support anti-ghosting. The limitation is hardware-based. You can work around it by pressing fewer keys at once, or upgrade to a keyboard with anti-ghosting or NKRO support.'
  },
  {
    question: 'Do all keyboards have ghosting?',
    answer: 'Most basic keyboards have some ghosting limitations. Gaming keyboards and mechanical keyboards often have anti-ghosting or NKRO to prevent this. USB keyboards typically have better rollover than older PS/2 keyboards.'
  }
]

export default function KeyboardGhostingExplainedPage() {
  const articleSchema = generateArticleSchema(
    'Keyboard Ghosting Explained - What It Is and How to Fix It',
    'Learn what keyboard ghosting is, why it happens, and how to fix it. Complete guide to key rollover, anti-ghosting, and keyboard limitations.',
    '/guides/keyboard-ghosting-explained',
    new Date().toISOString(),
    new Date().toISOString()
  )

  const breadcrumbs = generateBreadcrumbListSchema([
    { name: 'Home', path: '/' },
    { name: 'Guides', path: '/guides' },
    { name: 'Keyboard Ghosting Explained', path: '/guides/keyboard-ghosting-explained' }
  ])

  const faqSchema = generateFAQPageSchema(faqs)

  return (
    <>
      <JsonLdScript data={articleSchema} />
      <JsonLdScript data={breadcrumbs} />
      <JsonLdScript data={faqSchema} />
      
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <Breadcrumbs items={[
            { name: 'Guides', path: '/guides' },
            { name: 'Keyboard Ghosting Explained', path: '/guides/keyboard-ghosting-explained' }
          ]} />
          
          <article className="prose prose-slate max-w-none bg-white p-8 md:p-12 rounded-2xl border border-gray-200">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Keyboard Ghosting Explained</h1>
            
            <p className="text-lg text-gray-700 mb-8">
              Keyboard ghosting occurs when pressing multiple keys causes some keys to not register. This guide explains what ghosting is, why it happens, and how to work around or fix it.
            </p>

            <p className="text-gray-700 mb-6">
              You can use the <Link href="/keyboard" className="text-blue-600 hover:text-blue-800">online keyboard test</Link> to check if your keyboard has ghosting issues.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Quick Fix Summary</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Test your keyboard to identify ghosting patterns</li>
              <li>Press fewer keys simultaneously to avoid ghosting</li>
              <li>Upgrade to a keyboard with anti-ghosting or NKRO</li>
              <li>Use USB connection instead of PS/2 if available</li>
              <li>Check keyboard specifications for rollover capabilities</li>
              <li>Gaming keyboards typically have better rollover</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Why This Happens</h2>
            <p className="text-gray-700 mb-4">
              Keyboards use a matrix circuit to detect key presses. This matrix connects keys in rows and columns to reduce the number of wires needed. When you press multiple keys, the keyboard scans the matrix to detect which keys are pressed.
            </p>
            <p className="text-gray-700 mb-4">
              The matrix design has limitations. Certain key combinations create electrical conflicts that prevent detection. When you press keys that form a rectangle in the matrix, the keyboard can't determine which specific keys are pressed, causing ghosting.
            </p>
            <p className="text-gray-700 mb-4">
              Cost considerations drive basic keyboard designs. Cheaper keyboards use simpler matrices that are more prone to ghosting. More expensive keyboards use better designs that prevent these conflicts.
            </p>
            <p className="text-gray-700 mb-6">
              Connection type affects rollover. USB keyboards typically support better rollover than older PS/2 keyboards, though both can have ghosting issues depending on design.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Step-by-Step Understanding</h2>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">What Is Keyboard Ghosting?</h3>
            <p className="text-gray-700 mb-4">
              Keyboard ghosting is when pressing multiple keys simultaneously causes some keys to not register, even though you're pressing them. The keyboard detects some keys but misses others due to matrix limitations.
            </p>
            <p className="text-gray-700 mb-4">
              Ghosting is different from keys simply not working. With ghosting, keys work individually but fail when pressed in certain combinations. The specific combinations that cause ghosting depend on the keyboard's matrix design.
            </p>
            <p className="text-gray-700 mb-6">
              Test your keyboard using the online keyboard test. Press multiple keys at once and see which ones register. If some keys don't register in specific combinations, you're experiencing ghosting.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Understanding Key Rollover</h3>
            <p className="text-gray-700 mb-4">
              Key rollover refers to how many keys a keyboard can detect simultaneously. This is measured as KRO (key rollover) with a number indicating the limit.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li><strong>2KRO (2-key rollover):</strong> Only 2 keys can be detected at once</li>
              <li><strong>6KRO (6-key rollover):</strong> Up to 6 keys can be detected simultaneously</li>
              <li><strong>NKRO (N-key rollover):</strong> Unlimited keys can be detected at once</li>
            </ul>
            <p className="text-gray-700 mb-4">
              Most basic keyboards have 2KRO or 6KRO. This means if you press more keys than the limit, some won't register. Gaming keyboards often have NKRO to prevent this limitation.
            </p>
            <p className="text-gray-700 mb-6">
              Rollover limitations affect gaming and fast typing. If you press W, A, S, D, Shift, and Space simultaneously (common in gaming), a 6KRO keyboard might miss one of these keys.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">How Keyboard Matrix Works</h3>
            <p className="text-gray-700 mb-4">
              Keyboards use a matrix of rows and columns to detect key presses. Each key sits at the intersection of a row and column. When you press a key, it connects its row and column, allowing the keyboard to detect which key was pressed.
            </p>
            <p className="text-gray-700 mb-4">
              The matrix design creates limitations. If you press four keys that form a rectangle in the matrix, the keyboard can't determine which specific keys are pressed. It sees connections at all four corners but can't tell which are actual key presses versus electrical artifacts.
            </p>
            <p className="text-gray-700 mb-4">
              This is why certain key combinations cause ghosting. The specific combinations depend on how the keyboard manufacturer arranged the matrix. Different keyboards have different ghosting patterns.
            </p>
            <p className="text-gray-700 mb-6">
              Better keyboards use diodes on each key switch to prevent reverse current flow. This prevents the electrical conflicts that cause ghosting, allowing NKRO.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Testing for Ghosting</h3>
            <p className="text-gray-700 mb-4">
              You can test your keyboard for ghosting using the online keyboard test or manual testing methods.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Use the online keyboard test to press multiple keys simultaneously</li>
              <li>Watch which keys highlight and which don't</li>
              <li>Try common gaming combinations like W+A+S+D+Shift+Space</li>
              <li>Test modifier key combinations like Ctrl+Alt+Shift+Letter</li>
              <li>Note which specific combinations cause ghosting</li>
            </ul>
            <p className="text-gray-700 mb-4">
              The keyboard test shows real-time highlighting, making it easy to see which keys register. Try different combinations to map out your keyboard's ghosting patterns.
            </p>
            <p className="text-gray-700 mb-6">
              Understanding your keyboard's ghosting patterns helps you work around limitations during gaming or fast typing.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Anti-Ghosting Technology</h3>
            <p className="text-gray-700 mb-4">
              Anti-ghosting is a feature that prevents keyboard ghosting. Keyboards with anti-ghosting use better circuit designs that allow more keys to be detected simultaneously.
            </p>
            <p className="text-gray-700 mb-4">
              The most common anti-ghosting solution is adding diodes to each key switch. Diodes prevent reverse current flow in the matrix, eliminating the electrical conflicts that cause ghosting. This allows NKRO (N-key rollover).
            </p>
            <p className="text-gray-700 mb-4">
              Some keyboards advertise "anti-ghosting" but only protect certain key combinations, typically WASD and surrounding keys for gaming. True NKRO protects all keys.
            </p>
            <p className="text-gray-700 mb-6">
              When shopping for keyboards, look for "NKRO" or "anti-ghosting" in specifications. Gaming keyboards and mechanical keyboards often include these features.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Working Around Ghosting</h3>
            <p className="text-gray-700 mb-4">
              If your keyboard has ghosting, you can work around it by adjusting your typing or gaming style.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Press fewer keys simultaneously</li>
              <li>Avoid key combinations that cause ghosting on your keyboard</li>
              <li>Release keys before pressing new ones when possible</li>
              <li>Use keyboard shortcuts that don't require many simultaneous keys</li>
              <li>Test your keyboard to learn which combinations work</li>
            </ul>
            <p className="text-gray-700 mb-4">
              For gaming, this might mean adjusting your play style. Some games require many simultaneous key presses, which can trigger ghosting on basic keyboards.
            </p>
            <p className="text-gray-700 mb-6">
              If ghosting significantly impacts your work or gaming, consider upgrading to a keyboard with anti-ghosting or NKRO.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Upgrading to Prevent Ghosting</h3>
            <p className="text-gray-700 mb-4">
              If ghosting is a problem, upgrading to a keyboard with anti-ghosting or NKRO is the best solution.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>Look for keyboards advertised with "NKRO" or "anti-ghosting"</li>
              <li>Gaming keyboards typically have better rollover</li>
              <li>Mechanical keyboards often include NKRO</li>
              <li>Check keyboard specifications before purchasing</li>
              <li>USB keyboards typically have better rollover than PS/2</li>
            </ul>
            <p className="text-gray-700 mb-4">
              Mechanical keyboards with individual switches often include diodes on each switch, providing true NKRO. Membrane keyboards are more likely to have ghosting issues.
            </p>
            <p className="text-gray-700 mb-6">
              Test new keyboards before committing if possible. Use the online keyboard test to verify NKRO or anti-ghosting claims.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Connection Type and Ghosting</h2>

            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">USB vs PS/2</h3>
            <p className="text-gray-700 mb-4">
              Connection type can affect keyboard rollover, though design is more important than connection.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>USB keyboards typically support better rollover</li>
              <li>PS/2 keyboards can support NKRO but often don't</li>
              <li>USB has bandwidth advantages for multiple key detection</li>
              <li>Design matters more than connection type</li>
            </ul>
            <p className="text-gray-700 mb-6">
              Modern keyboards are almost exclusively USB. If you have a PS/2 keyboard with ghosting issues, upgrading to USB may help, but the keyboard's matrix design is the primary factor.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How to Prevent the Problem in Future</h2>
            <p className="text-gray-700 mb-4">
              When buying keyboards, check specifications for NKRO or anti-ghosting. These features prevent ghosting issues.
            </p>
            <p className="text-gray-700 mb-4">
              Test keyboards before purchasing if possible. Use the online keyboard test to verify rollover capabilities.
            </p>
            <p className="text-gray-700 mb-4">
              Understand your keyboard's limitations. If you know which combinations cause ghosting, you can work around them.
            </p>
            <p className="text-gray-700 mb-4">
              Consider your use case. For gaming or fast typing, invest in keyboards with NKRO. For basic typing, standard keyboards may be sufficient.
            </p>
            <p className="text-gray-700 mb-6">
              Regular testing helps identify ghosting patterns. Use the online keyboard test periodically to check for issues.
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

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 my-8">
              <h3 className="font-semibold text-blue-900 mb-2">Related Guides</h3>
              <ul className="space-y-2 text-sm text-blue-800">
                <li><Link href="/guides/keyboard-not-working" className="hover:text-blue-600 underline">Keyboard Not Working</Link></li>
                <li><Link href="/guides/keyboard-keys-not-working" className="hover:text-blue-600 underline">Keyboard Keys Not Working</Link></li>
                <li><Link href="/guides/keys-not-registering" className="hover:text-blue-600 underline">Keys Not Registering</Link></li>
              </ul>
            </div>

            <p className="text-gray-700 mb-6 mt-8">
              Use the <Link href="/keyboard" className="text-blue-600 hover:text-blue-800">online keyboard test</Link> to check for ghosting issues.
            </p>
          </article>
        </div>
      </div>
    </>
  )
}
