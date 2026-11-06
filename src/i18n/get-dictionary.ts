import type { Locale } from './config'
import type { Dictionary } from './dictionaries/en'

const loaders: Record<Locale, () => Promise<Dictionary>> = {
  sq: () => import('./dictionaries/sq').then((m) => m.default),
  en: () => import('./dictionaries/en').then((m) => m.default),
  de: () => import('./dictionaries/de').then((m) => m.default),
}

export function getDictionary(locale: Locale): Promise<Dictionary> {
  return loaders[locale]()
}

export type { Dictionary }
