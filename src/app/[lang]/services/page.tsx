import type { Metadata } from 'next'
import Link from 'next/link'
import { isLocale, type Locale } from '@/i18n/config'
import { getDictionary } from '@/i18n/get-dictionary'
import { pageMetadata } from '@/lib/metadata'
import { CtaBand, PageIntro, ProcessSection } from '@/components/sections'
import { InViewServiceVisual } from '@/components/in-view-visual'
import { Reveal } from '@/components/motion'
import { serviceToType } from '@/components/services-index'

type Props = { params: Promise<{ lang: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params
  if (!isLocale(lang)) return {}
  const dict = await getDictionary(lang)
  return pageMetadata(lang, '/services', dict.meta.services)
}

export default async function ServicesPage({ params }: Props) {
  const { lang } = await params
  const locale = lang as Locale
  const dict = await getDictionary(locale)
  const { services, cta, mock } = dict

  return (
    <>
      <PageIntro title={services.title} lead={services.intro}>
        <nav aria-label={dict.nav.services} className="mt-4">
          <ul className="flex flex-wrap gap-2">
            {services.items.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className="chip border border-white/15 text-white/75 transition-colors hover:border-white/40 hover:text-white">
                  {s.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </PageIntro>

      <section className="bg-porcelain">
        <div className="container-site py-8 sm:py-12">
          {services.items.map((s, i) => {
            const flip = i % 2 === 1
            return (
              <article key={s.id} id={s.id} className="grid-site scroll-mt-24 gap-y-8 border-b border-ink/10 py-14 last:border-b-0 lg:py-20" aria-labelledby={`${s.id}-title`}>
                <div className={`col-span-12 flex flex-col justify-center lg:col-span-5 ${flip ? 'lg:order-2 lg:col-start-8' : ''}`}>
                  <h2 id={`${s.id}-title`} className="t-h2 !text-[clamp(1.85rem,1.3rem+1.8vw,3rem)] max-w-[16ch] text-ink">
                    {s.name}
                  </h2>
                  <p className="t-lead mt-5 text-ink/80">{s.summary}</p>
                  <p className="t-body mt-4 text-muted">{s.detail}</p>
                  <h3 className="t-label mt-8 text-muted">{services.typical}</h3>
                  <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                    {s.includes.map((item) => (
                      <li key={item} className="flex gap-3 t-small text-ink/85">
                        <span aria-hidden className="mt-[0.6em] h-px w-3 shrink-0 bg-violet-600" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <Link href={`/${locale}/contact?type=${serviceToType[s.id]}`} className="btn btn-ghost-light btn-sm">
                      {cta.discuss}
                    </Link>
                  </div>
                </div>
                <Reveal className={`col-span-12 lg:col-span-7 ${flip ? 'lg:order-1 lg:col-start-1' : 'lg:col-start-6'}`}>
                  <InViewServiceVisual id={s.id} svc={mock.svc} locale={locale} />
                </Reveal>
              </article>
            )
          })}
        </div>
      </section>

      <ProcessSection locale={locale} dict={dict} />
      <CtaBand locale={locale} dict={dict} />
    </>
  )
}
