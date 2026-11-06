import type { Metadata } from 'next'
import { isLocale, type Locale } from '@/i18n/config'
import { getDictionary } from '@/i18n/get-dictionary'
import { pageMetadata } from '@/lib/metadata'
import { PageIntro } from '@/components/sections'
import { site, whatsappLink } from '@/lib/site'

type Props = { params: Promise<{ lang: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params
  if (!isLocale(lang)) return {}
  const dict = await getDictionary(lang)
  return pageMetadata(lang, '/legal', dict.meta.legal)
}

export default async function LegalPage({ params }: Props) {
  const { lang } = await params
  const locale = lang as Locale
  const { legal } = await getDictionary(locale)
  const c = legal.company

  const rows: [string, React.ReactNode][] = [
    [c.name, site.legalName],
    [c.nui, site.registry.nui],
    [c.address, site.registry.registeredAddress],
    [c.registry, c.registryValue],
    [
      c.email,
      <a key="e" href={`mailto:${site.email}`} className="link-under">
        {site.email}
      </a>,
    ],
    [
      c.phone,
      <a key="p" href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="link-under tabular">
        {site.whatsapp.display}
      </a>,
    ],
  ]

  return (
    <>
      <PageIntro title={legal.title} />
      <section className="section bg-paper">
        <div className="container-site">
          <div className="grid-site gap-y-16">
            <div className="col-span-12 lg:col-span-5">
              <h2 className="t-h3 text-ink">{legal.companyTitle}</h2>
              <dl className="mt-6 border-t border-ink/[0.12]">
                {rows.map(([label, value]) => (
                  <div key={label} className="grid gap-1 border-b border-ink/[0.12] py-4 t-small sm:grid-cols-[12rem_1fr] sm:gap-6">
                    <dt className="text-muted">{label}</dt>
                    <dd className="text-ink">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div id="privacy" className="col-span-12 scroll-mt-28 lg:col-span-6 lg:col-start-7">
              <h2 className="t-h3 text-ink">{legal.privacyTitle}</h2>
              <div className="mt-6 space-y-5">
                {legal.privacy.map((p, i) => (
                  <p key={i} className="t-body max-w-[62ch] text-ink/80">
                    {p.split('{email}').map((part, j, arr) => (
                      <span key={j}>
                        {part}
                        {j < arr.length - 1 && (
                          <a href={`mailto:${site.email}`} className="link-under text-ink">
                            {site.email}
                          </a>
                        )}
                      </span>
                    ))}
                  </p>
                ))}
              </div>
              <p className="t-small mt-8 text-muted">{legal.updated}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
