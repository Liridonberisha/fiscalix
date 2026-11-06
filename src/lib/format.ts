import type { Locale } from '@/i18n/config'

/**
 * Deterministic euro formatting for mockups.
 * (Intl output differs slightly between Node and browsers, which would break hydration.)
 */
export function eur(value: number, locale: Locale, decimals = 2) {
  const fixed = Math.abs(value).toFixed(decimals)
  const [int, dec] = fixed.split('.')
  const group = locale === 'en' ? ',' : '.'
  const point = locale === 'en' ? '.' : ','
  const grouped = int.replace(/\B(?=(\d{3})+(?!\d))/g, group)
  const num = dec ? `${grouped}${point}${dec}` : grouped
  const sign = value < 0 ? '−' : ''
  return locale === 'en' ? `${sign}€${num}` : `${sign}${num} €`
}

export function num(value: number, locale: Locale, decimals = 0) {
  return eur(value, locale, decimals).replace(/\s?€/, '').replace('€', '')
}
