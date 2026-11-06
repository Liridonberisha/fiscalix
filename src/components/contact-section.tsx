import type { Locale } from '@/i18n/config'
import type { Dictionary } from '@/i18n/dictionaries/en'
import { site, whatsappLink } from '@/lib/site'
import { ContactForm } from './contact-form'
import { RevealText } from './motion'

export function ContactSection({
  locale,
  dict,
  headingLevel = 'h2',
  bare = false,
  tone = 'ink',
}: {
  locale: Locale
  dict: Dictionary
  headingLevel?: 'h1' | 'h2'
  bare?: boolean
  tone?: 'ink' | 'graphite'
}) {
  const { contact } = dict
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className={`relative ${tone === 'ink' ? 'bg-ink' : 'bg-graphite'} text-white ${bare ? 'pb-20 pt-[calc(var(--header-h)+4rem)] sm:pb-28 lg:pt-[calc(var(--header-h)+6rem)]' : 'section'}`}
    >
      <div className="container-site">
        <div className="grid-site gap-y-12">
          <div className="col-span-12 lg:col-span-5">
            <RevealText
              as={headingLevel}
              id="contact-title"
              trigger={bare ? 'load' : 'view'}
              text={contact.title}
              className={`${headingLevel === 'h1' ? 't-h1' : 't-h2'} max-w-[13ch]`}
            />
            <p className="t-lead mt-8 max-w-[40ch] text-white/65">{contact.lead}</p>

            <h3 className="t-label mt-12 text-white/45">{contact.next.title}</h3>
            <ol className="mt-4 space-y-3">
              {contact.next.steps.map((step, i) => (
                <li key={step} className="flex gap-4 t-small text-white/80">
                  <span className="tabular w-5 shrink-0 text-violet-300">{i + 1}</span>
                  {step}
                </li>
              ))}
            </ol>

            <h3 className="t-label mt-12 text-white/45">{contact.direct.title}</h3>
            <dl className="mt-4 divide-y divide-white/10 border-y border-white/10">
              <div className="flex items-baseline justify-between gap-4 py-3.5">
                <dt className="t-small text-white/50">{contact.direct.email}</dt>
                <dd>
                  <a href={`mailto:${site.email}`} className="link-draw text-white hover:text-violet-200">
                    {site.email}
                  </a>
                </dd>
              </div>
              <div className="flex items-baseline justify-between gap-4 py-3.5">
                <dt className="t-small text-white/50">{contact.direct.whatsapp}</dt>
                <dd>
                  <a
                    href={whatsappLink(contact.form.whatsappIntro)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-draw tabular text-white hover:text-violet-200"
                  >
                    {site.whatsapp.display}
                  </a>
                </dd>
              </div>
              <div className="flex items-baseline justify-between gap-4 py-3.5">
                <dt className="t-small text-white/50">{contact.direct.office}</dt>
                <dd className="text-right text-white">
                  {site.office.street}, {site.office.city}, {site.office.country}
                </dd>
              </div>
            </dl>
          </div>

          <div className="col-span-12 lg:col-span-7 lg:col-start-6 xl:col-span-6 xl:col-start-7">
            <ContactForm locale={locale} form={contact.form} />
          </div>
        </div>
      </div>
    </section>
  )
}
