'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { defaultLocale, isLocale, type Locale } from '@/i18n/config'

// Kept small on purpose so the 404 page does not load the full dictionaries
const copy: Record<Locale, { title: string; text: string; back: string }> = {
  sq: { title: 'Kjo faqe nuk ekziston.', text: 'Lidhja mund të jetë e prishur ose faqja është zhvendosur.', back: 'Kthehu te ballina' },
  en: { title: 'This page does not exist.', text: 'The link may be broken, or the page may have moved.', back: 'Back to the homepage' },
  de: { title: 'Diese Seite gibt es nicht.', text: 'Der Link ist möglicherweise fehlerhaft, oder die Seite wurde verschoben.', back: 'Zur Startseite' },
}

export default function NotFound() {
  const segment = usePathname()?.split('/')[1]
  const locale: Locale = isLocale(segment) ? segment : defaultLocale
  const t = copy[locale]
  return (
    <section className="flex min-h-[80vh] items-end bg-ink pb-24 pt-[calc(var(--header-h)+6rem)] text-white">
      <div className="container-site">
        <p className="tabular text-[clamp(5rem,18vw,14rem)] font-semibold leading-[0.85] tracking-[-0.05em] text-violet-400" style={{ fontStretch: '115%' }}>
          404
        </p>
        <h1 className="t-h2 mt-8 max-w-[18ch]">{t.title}</h1>
        <p className="t-lead mt-4 text-white/60">{t.text}</p>
        <Link href={`/${locale}`} className="btn btn-primary mt-10">
          {t.back}
        </Link>
      </div>
    </section>
  )
}
