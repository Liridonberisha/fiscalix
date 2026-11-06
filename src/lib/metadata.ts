import type { Metadata } from 'next'
import { defaultLocale, localeTags, locales, type Locale } from '@/i18n/config'
import { site } from './site'

export function pageMetadata(
  locale: Locale,
  route: string,
  { title, description }: { title: string; description: string },
): Metadata {
  const path = `/${locale}${route}`
  const languages: Record<string, string> = {}
  for (const l of locales) languages[localeTags[l].html] = `${site.url}/${l}${route}`
  languages['x-default'] = `${site.url}/${defaultLocale}${route}`

  return {
    title,
    description,
    alternates: { canonical: `${site.url}${path}`, languages },
    openGraph: {
      type: 'website',
      url: `${site.url}${path}`,
      siteName: site.name,
      title,
      description,
      locale: localeTags[locale].og,
      alternateLocale: locales.filter((l) => l !== locale).map((l) => localeTags[l].og),
    },
    twitter: { card: 'summary_large_image', title, description },
  }
}
