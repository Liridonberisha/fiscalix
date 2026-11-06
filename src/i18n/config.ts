export const locales = ['sq', 'en', 'de'] as const
export type Locale = (typeof locales)[number]

// Albanian is the existing Fiscalix default.
export const defaultLocale: Locale = 'sq'

export const localeCookie = 'NEXT_LOCALE'

export const localeNames: Record<Locale, string> = {
  sq: 'Shqip',
  en: 'English',
  de: 'Deutsch',
}

// BCP-47 tags for <html lang>, hreflang and Open Graph
export const localeTags: Record<Locale, { html: string; og: string }> = {
  sq: { html: 'sq', og: 'sq_AL' },
  en: { html: 'en', og: 'en_US' },
  de: { html: 'de', og: 'de_DE' },
}

export function isLocale(value: string | undefined | null): value is Locale {
  return !!value && (locales as readonly string[]).includes(value)
}

export const routes = ['', '/services', '/solutions', '/work', '/about', '/contact', '/legal'] as const
export type Route = (typeof routes)[number]

export function href(locale: Locale, route: Route | string = '') {
  return `/${locale}${route}`
}
