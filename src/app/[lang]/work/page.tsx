import type { Metadata } from 'next'
import { isLocale, type Locale } from '@/i18n/config'
import { getDictionary } from '@/i18n/get-dictionary'
import { pageMetadata } from '@/lib/metadata'
import { CtaBand, PageIntro } from '@/components/sections'
import { WorkShowcase } from '@/components/work-showcase'

type Props = { params: Promise<{ lang: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params
  if (!isLocale(lang)) return {}
  const dict = await getDictionary(lang)
  return pageMetadata(lang, '/work', dict.meta.work)
}

export default async function WorkPage({ params }: Props) {
  const { lang } = await params
  const locale = lang as Locale
  const dict = await getDictionary(locale)

  return (
    <>
      <PageIntro title={dict.work.title} lead={dict.work.intro}>
        <ul className="mt-4 flex flex-wrap gap-2">
          {dict.work.projects.map((p) => (
            <li key={p.id}>
              <a href={`#${p.id}`} className="chip border border-white/15 text-white/75 transition-colors hover:border-white/40 hover:text-white">
                {p.title}
              </a>
            </li>
          ))}
        </ul>
      </PageIntro>
      <section className="bg-paper pb-20 sm:pb-28" aria-label={dict.work.title}>
        <div className="container-site [&>div]:mt-0">
          <WorkShowcase locale={locale} dict={dict} detailed />
        </div>
      </section>
      <CtaBand locale={locale} dict={dict} />
    </>
  )
}
