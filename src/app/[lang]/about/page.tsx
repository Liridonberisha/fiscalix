import type { Metadata } from 'next'
import { isLocale, type Locale } from '@/i18n/config'
import { getDictionary } from '@/i18n/get-dictionary'
import { pageMetadata } from '@/lib/metadata'
import { CtaBand, InternationalSection, PageIntro, TechSection, WhySection } from '@/components/sections'
import { Reveal } from '@/components/motion'

type Props = { params: Promise<{ lang: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params
  if (!isLocale(lang)) return {}
  const dict = await getDictionary(lang)
  return pageMetadata(lang, '/about', dict.meta.about)
}

export default async function AboutPage({ params }: Props) {
  const { lang } = await params
  const locale = lang as Locale
  const dict = await getDictionary(locale)
  const { about } = dict

  return (
    <>
      <PageIntro title={about.title} lead={about.lead} />

      <section className="section bg-paper" aria-labelledby="story-title">
        <div className="container-site">
          <div className="grid-site gap-y-10">
            <h2 id="story-title" className="sr-only">
              {dict.nav.about}
            </h2>
            <div className="col-span-12 space-y-6 lg:col-span-7">
              {about.story.map((paragraph, i) => (
                <p key={i} className={i === 0 ? 't-h3 !font-[480] text-ink' : 't-lead text-ink/70'}>
                  {paragraph}
                </p>
              ))}
            </div>
            <aside className="col-span-12 lg:col-span-4 lg:col-start-9">
              <h3 className="t-label text-muted">{about.factsTitle}</h3>
              <dl className="mt-4 border-t border-ink/[0.12]">
                {about.facts.map((f) => (
                  <div key={f.label} className="flex justify-between gap-6 border-b border-ink/[0.12] py-3.5 t-small">
                    <dt className="text-muted">{f.label}</dt>
                    <dd className="text-right text-ink">{f.value}</dd>
                  </div>
                ))}
              </dl>
            </aside>
          </div>

          <h2 className="t-h2 mt-24 max-w-[16ch] text-ink">{about.principlesTitle}</h2>
          <ul className="mt-12 grid gap-px overflow-hidden rounded-[22px] bg-ink/10 sm:grid-cols-2">
            {about.principles.map((p, i) => (
              <Reveal as="li" key={p.title} delay={(i % 2) * 0.08} className="bg-paper p-7 sm:p-9">
                <h3 className="t-h3 text-ink">{p.title}</h3>
                <p className="t-body mt-3 max-w-[44ch] text-muted">{p.text}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <WhySection locale={locale} dict={dict} />
      <TechSection locale={locale} dict={dict} />
      <InternationalSection locale={locale} dict={dict} />
      <CtaBand locale={locale} dict={dict} />
    </>
  )
}
