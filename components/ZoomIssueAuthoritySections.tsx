import Link from 'next/link'

const cardClass = 'mb-4 rounded-xl border border-gray-200 bg-white p-4 md:p-6'

export interface ZoomUsualCause {
  title: string
  text: string
}

export function ZoomWhatThisUsuallyMeans({ causes }: { causes: ZoomUsualCause[] }) {
  return (
    <section className={cardClass} aria-labelledby="zoom-what-usually-means">
      <h2 id="zoom-what-usually-means" className="text-xl font-bold text-gray-900 mb-4">
        What This Usually Means
      </h2>
      <div className="space-y-4">
        {causes.map((c, i) => (
          <div key={i}>
            <h3 className="text-base font-semibold text-gray-900">{c.title}</h3>
            <p className="text-gray-700 mt-1">{c.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export function ZoomCheckThisFirst({ items }: { items: string[] }) {
  return (
    <section className={cardClass} aria-labelledby="zoom-check-first">
      <h2 id="zoom-check-first" className="text-xl font-bold text-gray-900 mb-3">
        Check This First (30 seconds)
      </h2>
      <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-4">
        {items.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ul>
      <p className="text-gray-700">
        <Link href="/meeting-check" className="text-blue-600 hover:text-blue-800 font-medium">
          Run full meeting check →
        </Link>
      </p>
    </section>
  )
}
