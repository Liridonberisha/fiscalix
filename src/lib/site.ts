/**
 * Business details used across the website.
 * Taken from the existing Fiscalix project — edit here only.
 */
export const site = {
  name: 'Fiscalix',
  legalName: 'Fiscalix SH.P.K.',
  url: (process.env.NEXT_PUBLIC_SITE_URL || 'https://fiscalix.com').replace(/\/$/, ''),
  email: 'info@fiscalix.com',
  whatsapp: {
    display: '+383 43 81 31 21',
    number: '38343813121',
  },
  office: {
    street: 'Rruga e Gjimnazit 81',
    city: 'Klinë',
    country: 'Kosovo',
    countryCode: 'XK',
  },
  registry: {
    nui: '812445890',
    registeredAddress: 'Rr. Ymer Berisha 81, 32000 Klinë, Kosovo',
    registry: 'ARBK',
  },
  timeZone: 'Europe/Belgrade',
} as const

export function whatsappLink(text?: string) {
  const base = `https://wa.me/${site.whatsapp.number}`
  return text ? `${base}?text=${encodeURIComponent(text)}` : base
}
