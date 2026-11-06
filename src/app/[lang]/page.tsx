import type { Metadata } from 'next'
import Link from 'next/link'
import { isLocale, type Locale } from '@/i18n/config'
import { getDictionary } from '@/i18n/get-dictionary'
import { pageMetadata } from '@/lib/metadata'
import { Hero } from '@/components/hero'
import { SectionHeading } from '@/components/section-heading'
import { ServicesIndex } from '@/components/services-index'
import { SolutionsGallery } from '@/components/solutions-gallery'
import { WorkShowcase } from '@/components/work-showcase'
import { InternationalSection, ProcessSection, TechSection, WhySection } from '@/components/sections'
import { ContactSection } from '@/components/contact-section'

type Props = { params: Promise<{ lang: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params
  if (!isLocale(lang)) return {}
  const dict = await getDictionary(lang)
  return pageMetadata(lang, '', dict.meta.home)
}

export default async function HomePage({ params }: Props) {
  const { lang } = await params
  const locale = lang as Locale
  const dict = await getDictionary(locale)

  return (
    <>
      <Hero locale={locale} dict={dict} />

      <section id="services" className="section bg-porcelain" aria-labelledby="services-title">
        <div className="container-site">
          <SectionHeading id="services-title" title={dict.services.title} intro={dict.services.intro}>
            <Link href={`/${locale}/services`} className="link-under mt-6 inline-block text-[0.9375rem] font-medium text-ink">
              {dict.cta.allServices}
            </Link>
          </SectionHeading>
          <ServicesIndex locale={locale} dict={dict} />
        </div>
      </section>

      <section id="solutions" className="section bg-ink text-white" aria-labelledby="solutions-title">
        <div className="container-site">
          <SectionHeading id="solutions-title" title={dict.solutions.title} intro={dict.solutions.intro} tone="dark" />
          <SolutionsGallery locale={locale} dict={dict} limit={6} />
        </div>
      </section>

      <section id="work" className="section bg-paper" aria-labelledby="work-title">
        <div className="container-site">
          <SectionHeading id="work-title" title={dict.work.homeTitle} intro={dict.work.intro}>
            <Link href={`/${locale}/work`} className="link-under mt-6 inline-block text-[0.9375rem] font-medium text-ink">
              {dict.cta.allWork}
            </Link>
          </SectionHeading>
          <WorkShowcase locale={locale} dict={dict} ids={['exchange', 'printing', 'platform']} />
        </div>
      </section>

      <ProcessSection locale={locale} dict={dict} />
      <WhySection locale={locale} dict={dict} />
      <TechSection locale={locale} dict={dict} />
      <InternationalSection locale={locale} dict={dict} />
      <ContactSection locale={locale} dict={dict} tone="graphite" />
    </>
  )
}
