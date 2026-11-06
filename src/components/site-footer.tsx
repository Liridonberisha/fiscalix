import Link from 'next/link'
import type { Dictionary } from '@/i18n/dictionaries/en'
import { localeNames, locales, type Locale } from '@/i18n/config'
import { site, whatsappLink } from '@/lib/site'
import { Wordmark } from './wordmark'

export function SiteFooter({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const { nav, footer } = dict
  const year = new Date().getFullYear()
  const studio = [
    { href: `/${locale}/services`, label: nav.services },
    { href: `/${locale}/solutions`, label: nav.solutions },
    { href: `/${locale}/work`, label: nav.work },
    { href: `/${locale}/about`, label: nav.about },
  ]

  return (
    <footer className="relative overflow-hidden bg-ink text-white">
      <div className="container-site pt-20 sm:pt-28">
        <div className="grid-site gap-y-12">
          <div className="col-span-12 lg:col-span-5">
            <p className="t-h3 max-w-[22ch] text-white">{footer.tagline}</p>
          </div>

          <nav aria-label={footer.studio} className="col-span-6 sm:col-span-4 lg:col-span-2 lg:col-start-7">
            <p className="t-label text-white/45">{footer.studio}</p>
            <ul className="mt-4 space-y-2.5">
              {studio.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="link-draw text-white/80 hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="col-span-6 sm:col-span-4 lg:col-span-2">
            <p className="t-label text-white/45">{footer.contact}</p>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a href={`mailto:${site.email}`} className="link-draw text-white/80 hover:text-white">
                  {site.email}
                </a>
              </li>
              <li>
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="link-draw text-white/80 hover:text-white">
                  WhatsApp
                </a>
              </li>
              <li className="text-white/55">
                {site.office.city}, {site.office.country}
              </li>
            </ul>
          </div>

          <div className="col-span-12 sm:col-span-4 lg:col-span-2">
            <p className="t-label text-white/45">{nav.language}</p>
            <ul className="mt-4 space-y-2.5">
              {locales.map((l) => (
                <li key={l}>
                  <Link
                    href={`/${l}`}
                    hrefLang={l}
                    lang={l}
                    aria-current={l === locale ? 'true' : undefined}
                    className={l === locale ? 'text-violet-300' : 'link-draw text-white/80 hover:text-white'}
                  >
                    {localeNames[l]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-4 border-t border-white/10 py-6 text-[0.875rem] text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.legalName} {footer.rights}
          </p>
          <div className="flex gap-6">
            <Link href={`/${locale}/legal`} className="link-draw hover:text-white">
              {footer.legal}
            </Link>
            <a href="#top" className="link-draw hover:text-white">
              {footer.backToTop}
            </a>
          </div>
        </div>
      </div>
      <div aria-hidden className="container-site pb-6">
        <Wordmark className="h-auto w-full text-white/[0.06]" title="" />
      </div>
    </footer>
  )
}
