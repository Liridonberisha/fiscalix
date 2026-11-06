import Link from 'next/link'
import type { Locale } from '@/i18n/config'
import type { Dictionary } from '@/i18n/dictionaries/en'
import { Reveal, RevealText } from './motion'
import { SectionHeading } from './section-heading'
import { ProcessTimeline } from './process-timeline'
import { LocalClocks } from './local-clocks'

type S = { locale: Locale; dict: Dictionary }

export function ProcessSection({ dict, compact = false }: S & { compact?: boolean }) {
  return (
    <section id="process" className="section bg-graphite text-white" aria-labelledby="process-title">
      <div className="container-site">
        <SectionHeading id="process-title" title={dict.process.title} intro={compact ? undefined : dict.process.intro} tone="dark" />
        <ProcessTimeline steps={dict.process.steps} />
      </div>
    </section>
  )
}

export function WhySection({ dict }: S) {
  const { why } = dict
  return (
    <section className="section bg-porcelain" aria-labelledby="why-title">
      <div className="container-site">
        <div className="grid-site gap-y-12">
          <div className="col-span-12 lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <RevealText as="h2" id="why-title" text={why.title} className="t-h2 max-w-[14ch] text-ink" />
              <p className="t-lead mt-8 max-w-[34ch] text-ink/70">{why.statement}</p>
            </div>
          </div>
          <ul className="col-span-12 grid gap-x-10 sm:grid-cols-2 lg:col-span-6 lg:col-start-7">
            {why.items.map((item, i) => (
              <Reveal as="li" key={item.title} delay={(i % 2) * 0.08} className="border-t border-ink/[0.12] py-7">
                <h3 className="t-h4 text-ink">{item.title}</h3>
                <p className="t-small mt-2 text-muted">{item.text}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export function TechSection({ dict }: S) {
  const { tech } = dict
  return (
    <section className="section bg-paper" aria-labelledby="tech-title">
      <div className="container-site">
        <SectionHeading id="tech-title" title={tech.title} intro={tech.intro} />

        <div className="mt-14 lg:mt-20">
          {tech.layers.map((layer, i) => (
            <Reveal key={layer.name} delay={i * 0.06}>
              <div className="grid-site items-start gap-y-4 border-t border-ink/[0.12] py-7 lg:py-8">
                <div className="col-span-12 flex items-baseline gap-4 md:col-span-4 lg:col-span-3">
                  {/* Stacked-layer glyph: the filled slab marks this layer's position in the system */}
                  <svg viewBox="0 0 22 26" className="h-6 w-5 shrink-0 self-center" aria-hidden>
                    {[0, 1, 2, 3].map((j) => (
                      <rect
                        key={j}
                        x="1"
                        y={1 + j * 6.5}
                        width="20"
                        height="4.5"
                        rx="1.2"
                        className={j === i ? 'fill-violet-600' : 'fill-ink/[0.12]'}
                      />
                    ))}
                  </svg>
                  <h3 className="t-h4 text-ink">{layer.name}</h3>
                </div>
                <p className="t-small col-span-12 text-muted md:col-span-8 lg:col-span-3">{layer.text}</p>
                <ul className="col-span-12 flex flex-wrap gap-1.5 lg:col-span-6">
                  {layer.items.map((item) => (
                    <li key={item} className="chip border border-ink/10 bg-white text-ink/80">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 rounded-[22px] bg-ink p-7 text-white sm:p-10">
          <h3 className="t-h4">{tech.practicesTitle}</h3>
          <ul className="mt-6 grid gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-4">
            {tech.practices.map((p) => (
              <li key={p} className="flex items-start gap-3 t-small text-white/80">
                <svg viewBox="0 0 16 16" className="mt-0.5 h-4 w-4 shrink-0 text-violet-300" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
                  <path d="M8 1.5 13.5 4v4c0 3.2-2.3 5.7-5.5 6.5C4.8 13.7 2.5 11.2 2.5 8V4Z" />
                  <path d="m5.5 8 1.8 1.8L10.8 6.3" />
                </svg>
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export function InternationalSection({ dict }: S) {
  const { international: intl } = dict
  return (
    <section className="section relative overflow-hidden bg-ink text-white" aria-labelledby="intl-title">
      <div className="container-site">
        <div className="grid-site gap-y-12">
          <div className="col-span-12 lg:col-span-6">
            <RevealText as="h2" id="intl-title" text={intl.title} className="t-h2 max-w-[16ch]" />
            <p className="t-lead mt-8 max-w-[44ch] text-white/65">{intl.text}</p>
          </div>
          <div className="col-span-12 lg:col-span-5 lg:col-start-8">
            <ul className="border-b border-white/10">
              {intl.markets.map((market, i) => (
                <Reveal as="li" key={market} delay={i * 0.05} className="flex items-baseline justify-between border-t border-white/10 py-4">
                  <span className="t-h3">{market}</span>
                  {i === 0 && <span aria-hidden className="h-2 w-2 rounded-full bg-violet-400" />}
                </Reveal>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-[22px] bg-white/10 sm:grid-cols-2 lg:mt-24 lg:grid-cols-4">
          {intl.points.map((p) => (
            <div key={p.title} className="bg-ink p-7">
              <h3 className="t-h4">{p.title}</h3>
              <p className="t-small mt-2 text-white/60">{p.text}</p>
            </div>
          ))}
        </div>

        <LocalClocks label={intl.clockLabel} cities={intl.cities} />
      </div>
    </section>
  )
}

export function PageIntro({
  title,
  lead,
  children,
}: {
  title: string
  lead?: string
  children?: React.ReactNode
}) {
  return (
    <section className="relative overflow-hidden bg-ink pb-20 pt-[calc(var(--header-h)+4rem)] text-white sm:pb-28 lg:pt-[calc(var(--header-h)+6rem)]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.3]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)',
          backgroundSize: '96px 96px',
          maskImage: 'radial-gradient(ellipse 70% 80% at 20% 0%, black 30%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(ellipse 70% 80% at 20% 0%, black 30%, transparent 75%)',
        }}
      />
      <div className="container-site relative">
        <div className="grid-site gap-y-8">
          <RevealText as="h1" trigger="load" text={title} className="t-h1 col-span-12 max-w-[18ch] lg:col-span-10" />
          {lead && <p className="t-lead col-span-12 max-w-[50ch] text-white/65 lg:col-span-6">{lead}</p>}
          {children && <div className="col-span-12">{children}</div>}
        </div>
      </div>
    </section>
  )
}

/** Closing call to action used at the end of inner pages. */
export function CtaBand({ locale, dict }: S) {
  return (
    <section className="bg-violet-700 text-white">
      <div className="container-site flex flex-col gap-8 py-16 sm:py-20 lg:flex-row lg:items-end lg:justify-between">
        <RevealText as="h2" text={dict.contact.title} className="t-h2 max-w-[16ch]" />
        <div className="flex flex-wrap gap-3">
          <Link href={`/${locale}/contact`} className="btn bg-white text-ink before:bg-ink hover:text-white">
            {dict.cta.start}
          </Link>
          <Link href={`/${locale}/contact?type=consultation`} className="btn btn-ghost-dark">
            {dict.cta.consult}
          </Link>
        </div>
      </div>
    </section>
  )
}
