import type { Metadata } from 'next'
import { isLocale, type Locale } from '@/i18n/config'
import { getDictionary } from '@/i18n/get-dictionary'
import { pageMetadata } from '@/lib/metadata'
import { ContactSection } from '@/components/contact-section'

type Props = { params: Promise<{ lang: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params
  if (!isLocale(lang)) return {}
  const dict = await getDictionary(lang)
  return pageMetadata(lang, '/contact', dict.meta.contact)
}

export default async function ContactPage({ params }: Props) {
  const { lang } = await params
  const locale = lang as Locale
  const dict = await getDictionary(locale)
  return <ContactSection locale={locale} dict={dict} headingLevel="h1" bare />
}
