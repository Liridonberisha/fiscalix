import type { Metadata } from 'next'
import { isLocale, type Locale } from '@/i18n/config'
import { getDictionary } from '@/i18n/get-dictionary'
import { pageMetadata } from '@/lib/metadata'
import { CtaBand, PageIntro } from '@/components/sections'
import { SolutionsGallery } from '@/components/solutions-gallery'

type Props = { params: Promise<{ lang: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params
  if (!isLocale(lang)) return {}
  const dict = await getDictionary(lang)
  return pageMetadata(lang, '/solutions', dict.meta.solutions)
}

export default async function SolutionsPage({ params }: Props) {
  const { lang } = await params
  const locale = lang as Locale
  const dict = await getDictionary(locale)

  return (
    <>
      <PageIntro title={dict.solutions.title} lead={dict.solutions.intro} />
      <section className="bg-ink pb-24 text-white sm:pb-32" aria-label={dict.solutions.title}>
        <div className="container-site -mt-6">
          <SolutionsGallery locale={locale} dict={dict} />
        </div>
      </section>
      <CtaBand locale={locale} dict={dict} />
    </>
  )
}
