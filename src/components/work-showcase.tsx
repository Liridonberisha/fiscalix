import Link from 'next/link'
import type { Locale } from '@/i18n/config'
import type { Dictionary } from '@/i18n/dictionaries/en'
import { MOCK_H, MOCK_W, projectMockups } from './project-mockups'
import { Reveal } from './motion'
import { ScaleToFit } from './ui/scale-to-fit'

// Each project gets its own stage so the list never reads as a row of identical cards
const stage: Record<string, string> = {
  exchange: 'bg-graphite',
  printing: 'bg-violet-800',
  platform: 'bg-[#DAD6E1]',
  cosmetics: 'bg-violet-100',
}

const statusTone: Record<string, string> = {
  exchange: 'bg-[#3FA37C]',
  printing: 'bg-[#C9932E]',
  platform: 'bg-violet-500',
  cosmetics: 'bg-ink/40',
}

export function WorkShowcase({
  locale,
  dict,
  ids,
  detailed = false,
}: {
  locale: Locale
  dict: Dictionary
  ids?: string[]
  detailed?: boolean
}) {
  const { work, mock, cta } = dict
  const projects = ids ? work.projects.filter((p) => ids.includes(p.id)) : work.projects

  return (
    <div className="mt-14 lg:mt-20">
      {projects.map((p, i) => {
        const Mock = projectMockups[p.id]
        const flip = i % 2 === 1
        return (
          <article
            key={p.id}
            id={p.id}
            className="grid-site scroll-mt-28 gap-y-8 border-t border-ink/10 py-12 lg:py-16"
            aria-labelledby={`project-${p.id}`}
          >
            <Reveal className={`col-span-12 lg:col-span-7 ${flip ? 'lg:order-2 lg:col-start-6' : ''}`}>
              <div className={`overflow-hidden rounded-[22px] ${stage[p.id]}`}>
                <ScaleToFit width={MOCK_W} height={MOCK_H}>
                  <Mock mock={mock} locale={locale} />
                </ScaleToFit>
              </div>
            </Reveal>

            <div className={`col-span-12 flex flex-col lg:col-span-5 ${flip ? 'lg:order-1 lg:col-start-1 lg:pr-6' : 'lg:pl-6'}`}>
              <p className="flex items-center gap-2 t-label text-ink/70">
                <span className={`h-2 w-2 rounded-full ${statusTone[p.id]}`} aria-hidden />
                <span className="sr-only">{work.labels.status}: </span>
                {p.status}
              </p>
              <h3 id={`project-${p.id}`} className="t-h3 mt-4 max-w-[24ch] text-ink">
                {p.title}
              </h3>
              <dl className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3 border-y border-ink/10 py-4 t-small">
                <div>
                  <dt className="text-muted">{work.labels.industry}</dt>
                  <dd className="text-ink">{p.industry}</dd>
                </div>
                <div>
                  <dt className="text-muted">{work.labels.location}</dt>
                  <dd className="text-ink">{p.location}</dd>
                </div>
                <div className="col-span-2">
                  <dt className="text-muted">{work.labels.type}</dt>
                  <dd className="text-ink">{p.type}</dd>
                </div>
              </dl>
              <p className="t-body mt-5 text-ink/75">{p.summary}</p>

              {detailed ? (
                <>
                  <h4 className="t-label mt-7 text-muted">{work.labels.features}</h4>
                  <ul className="mt-3 space-y-2">
                    {p.features.map((f) => (
                      <li key={f} className="flex gap-3 t-small text-ink/85">
                        <span aria-hidden className="mt-[0.6em] h-px w-3 shrink-0 bg-violet-600" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  {p.stack.length > 0 && (
                    <>
                      <h4 className="t-label mt-7 text-muted">{work.labels.stack}</h4>
                      <ul className="mt-3 flex flex-wrap gap-1.5">
                        {p.stack.map((s) => (
                          <li key={s} className="chip border border-ink/10 bg-white/60 text-ink/75">
                            {s}
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                  <Link href={`/${locale}/contact`} className="link-under mt-8 self-start text-[0.9375rem] font-medium text-violet-700">
                    {cta.discuss}
                  </Link>
                </>
              ) : (
                <ul className="mt-5 space-y-2">
                  {p.features.slice(0, 3).map((f) => (
                    <li key={f} className="flex gap-3 t-small text-ink/85">
                      <span aria-hidden className="mt-[0.6em] h-px w-3 shrink-0 bg-violet-600" />
                      {f}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </article>
        )
      })}
      <p className="t-small border-t border-ink/10 pt-6 text-muted">{work.note}</p>
    </div>
  )
}
