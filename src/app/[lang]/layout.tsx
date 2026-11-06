import type { Metadata, Viewport } from 'next'
import { notFound } from 'next/navigation'
import type { ReactNode } from 'react'
import '../globals.css'
import { mona, mono } from '../fonts'
import { isLocale, localeTags, locales, type Locale } from '@/i18n/config'
import { getDictionary } from '@/i18n/get-dictionary'
import { MotionProvider } from '@/components/motion'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { site } from '@/lib/site'

export const dynamicParams = false

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }))
}

export const viewport: Viewport = {
  themeColor: '#15121B',
  width: 'device-width',
  initialScale: 1,
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  if (!isLocale(lang)) return {}
  const dict = await getDictionary(lang)
  return {
    metadataBase: new URL(site.url),
    title: { default: dict.meta.home.title, template: '%s | Fiscalix' },
    description: dict.meta.home.description,
    applicationName: site.name,
    authors: [{ name: site.legalName }],
    creator: site.legalName,
    formatDetection: { telephone: false, email: false, address: false },
    robots: { index: true, follow: true },
  }
}

function organizationJsonLd(locale: Locale, description: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${site.url}/#organization`,
    name: site.name,
    legalName: site.legalName,
    url: `${site.url}/${locale}`,
    logo: `${site.url}/icon.svg`,
    description,
    email: site.email,
    telephone: `+${site.whatsapp.number}`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.office.street,
      addressLocality: site.office.city,
      addressCountry: site.office.countryCode,
    },
    areaServed: ['XK', 'DE', 'CH', 'AT', 'Europe'],
    knowsLanguage: ['sq', 'en', 'de'],
    serviceType: [
      'Custom software development',
      'Web application development',
      'Mobile application development',
      'Business management systems',
      'Website development',
      'Software integration and automation',
    ],
  }
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  if (!isLocale(lang)) notFound()
  const dict = await getDictionary(lang)

  return (
    <html lang={localeTags[lang].html} className={`${mona.variable} ${mono.variable}`}>
      <body id="top">
        <a
          href="#content"
          className="fixed left-4 top-3 z-[100] -translate-y-24 rounded-full bg-violet-600 px-4 py-2 text-sm text-white transition-transform focus:translate-y-0"
        >
          {dict.nav.skip}
        </a>
        <noscript>
          <style>{`[data-reveal]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <MotionProvider>
          <SiteHeader locale={lang} nav={dict.nav} cta={dict.cta.start} />
          <main id="content" tabIndex={-1} className="outline-none">
            {children}
          </main>
          <SiteFooter locale={lang} dict={dict} />
        </MotionProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd(lang, dict.meta.home.description)) }}
        />
      </body>
    </html>
  )
}
