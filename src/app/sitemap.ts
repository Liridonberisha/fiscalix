import type { MetadataRoute } from 'next'
import { localeTags, locales, routes } from '@/i18n/config'
import { site } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date('2026-10-31')
  return routes.flatMap((route) =>
    locales.map((locale) => ({
      url: `${site.url}/${locale}${route}`,
      lastModified,
      changeFrequency: route === '' ? 'monthly' : 'yearly',
      priority: route === '' ? 1 : route === '/legal' ? 0.2 : 0.7,
      alternates: {
        languages: Object.fromEntries(locales.map((l) => [localeTags[l].html, `${site.url}/${l}${route}`])),
      },
    })),
  )
}
