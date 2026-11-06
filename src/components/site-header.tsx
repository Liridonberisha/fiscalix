'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AnimatePresence, m } from 'framer-motion'
import { useCallback, useEffect, useRef, useState } from 'react'
import { localeCookie, localeNames, locales, type Locale } from '@/i18n/config'
import { Wordmark } from './wordmark'
import { EASE } from './motion'
import { site, whatsappLink } from '@/lib/site'

type NavLabels = {
  home: string
  services: string
  solutions: string
  work: string
  about: string
  contact: string
  menu: string
  close: string
  language: string
  main: string
}

export function switchLocalePath(pathname: string, target: Locale) {
  const parts = pathname.split('/')
  parts[1] = target
  return parts.join('/') || `/${target}`
}

function rememberLocale(locale: Locale) {
  try {
    document.cookie = `${localeCookie}=${locale}; path=/; max-age=31536000; samesite=lax`
  } catch {
    /* cookies disabled — the URL still carries the language */
  }
}

export function SiteHeader({ locale, nav, cta }: { locale: Locale; nav: NavLabels; cta: string }) {
  const pathname = usePathname() || `/${locale}`
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [open, setOpen] = useState(false)
  const lastY = useRef(0)
  const menuButton = useRef<HTMLButtonElement>(null)

  const links = [
    { href: `/${locale}`, label: nav.home },
    { href: `/${locale}/services`, label: nav.services },
    { href: `/${locale}/solutions`, label: nav.solutions },
    { href: `/${locale}/work`, label: nav.work },
    { href: `/${locale}/about`, label: nav.about },
    { href: `/${locale}/contact`, label: nav.contact },
  ]
  const isActive = (href: string) => pathname === href || pathname === `${href}/`

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 24)
      // Hide while reading downwards, reveal as soon as the visitor scrolls up
      const delta = y - lastY.current
      if (y < 200) setHidden(false)
      else if (delta > 6) setHidden(true)
      else if (delta < -6) setHidden(false)
      if (Math.abs(delta) > 6 || y < 200) lastY.current = y
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close the menu on navigation
  useEffect(() => setOpen(false), [pathname])

  const close = useCallback(() => {
    setOpen(false)
    menuButton.current?.focus()
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && close()
    document.addEventListener('keydown', onKey)
    document.documentElement.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.documentElement.style.overflow = ''
    }
  }, [open, close])

  return (
    <>
      <header
        className={[
          'fixed inset-x-0 top-0 z-50 transition-[transform,background-color,border-color] duration-500 ease-out',
          hidden && !open ? '-translate-y-full' : 'translate-y-0',
          scrolled && !open ? 'border-b border-white/10 bg-ink/85 backdrop-blur-xl' : 'border-b border-transparent',
        ].join(' ')}
      >
        <div className="container-site flex h-[var(--header-h)] items-center justify-between gap-6">
          <Link href={`/${locale}`} className="relative z-10 text-white" aria-label={`Fiscalix — ${nav.home}`}>
            <Wordmark className="h-[1.35rem] w-auto" />
          </Link>

          <nav aria-label={nav.main} className="hidden xl:block">
            <ul className="flex items-center gap-1">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={isActive(link.href) ? 'page' : undefined}
                    className={[
                      'relative block rounded-full px-3.5 py-2 text-[0.9375rem] transition-colors duration-300',
                      isActive(link.href) ? 'text-white' : 'text-white/65 hover:text-white',
                    ].join(' ')}
                  >
                    {isActive(link.href) && (
                      <m.span
                        layoutId="nav-active"
                        className="absolute inset-0 -z-0 rounded-full bg-white/[0.08]"
                        transition={{ duration: 0.5, ease: EASE }}
                      />
                    )}
                    <span className="relative">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="relative z-10 flex items-center gap-2 sm:gap-3">
            <LanguageMenu locale={locale} pathname={pathname} label={nav.language} />
            <Link href={`/${locale}/contact`} className="btn btn-primary btn-sm hidden sm:inline-flex">
              {cta}
            </Link>
            <button
              ref={menuButton}
              type="button"
              className="group inline-flex h-11 items-center gap-2.5 rounded-full px-3 text-[0.9375rem] text-white xl:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((v) => !v)}
            >
              <span className="hidden sm:inline">{open ? nav.close : nav.menu}</span>
              <span className="sr-only sm:hidden">{open ? nav.close : nav.menu}</span>
              <span aria-hidden className="relative block h-3 w-5">
                <span
                  className={[
                    'absolute left-0 block h-[1.5px] w-5 bg-current transition-transform duration-500 ease-out',
                    open ? 'top-[5px] rotate-45' : 'top-0',
                  ].join(' ')}
                />
                <span
                  className={[
                    'absolute left-0 block h-[1.5px] bg-current transition-all duration-500 ease-out',
                    open ? 'top-[5px] w-5 -rotate-45' : 'top-[10px] w-3.5 group-hover:w-5',
                  ].join(' ')}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <m.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label={nav.menu}
            className="fixed inset-0 z-40 flex flex-col overflow-y-auto bg-ink pt-[var(--header-h)] text-white xl:hidden"
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <nav aria-label={nav.main} className="container-site flex-1 pt-6">
              <ul className="flex flex-col">
                {links.map((link, i) => (
                  <li key={link.href} className="border-b border-white/10">
                    <m.span
                      className="block"
                      initial={{ opacity: 0, y: 24 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.15 + i * 0.05, duration: 0.6, ease: EASE }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setOpen(false)}
                        aria-current={isActive(link.href) ? 'page' : undefined}
                        className={[
                          'flex items-center justify-between py-4 t-h2 !text-[clamp(1.9rem,7vw,3rem)]',
                          isActive(link.href) ? 'text-violet-300' : 'text-white',
                        ].join(' ')}
                      >
                        {link.label}
                      </Link>
                    </m.span>
                  </li>
                ))}
              </ul>
            </nav>
            <m.div
              className="container-site flex flex-col gap-6 pb-10 pt-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45, duration: 0.5 }}
            >
              <Link href={`/${locale}/contact`} onClick={() => setOpen(false)} className="btn btn-primary w-full sm:w-auto sm:self-start">
                {cta}
              </Link>
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-white/60 t-small">
                <a href={`mailto:${site.email}`} className="link-draw hover:text-white">
                  {site.email}
                </a>
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="link-draw hover:text-white">
                  WhatsApp {site.whatsapp.display}
                </a>
              </div>
              <div className="flex gap-2" aria-label={nav.language} role="group">
                {locales.map((l) => (
                  <Link
                    key={l}
                    href={switchLocalePath(pathname, l)}
                    hrefLang={l}
                    lang={l}
                    onClick={() => rememberLocale(l)}
                    aria-current={l === locale ? 'true' : undefined}
                    className={[
                      'chip border transition-colors',
                      l === locale ? 'border-violet-400 text-white' : 'border-white/15 text-white/60 hover:text-white',
                    ].join(' ')}
                  >
                    {localeNames[l]}
                  </Link>
                ))}
              </div>
            </m.div>
          </m.div>
        )}
      </AnimatePresence>
    </>
  )
}

function LanguageMenu({ locale, pathname, label }: { locale: Locale; pathname: string; label: string }) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const onDown = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('mousedown', onDown)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onDown)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        aria-haspopup="true"
        aria-expanded={open}
        aria-label={`${label}: ${localeNames[locale]}`}
        onClick={() => setOpen((v) => !v)}
        className="inline-flex h-11 items-center gap-1.5 rounded-full px-3 text-[0.9375rem] uppercase text-white/75 transition-colors hover:text-white"
      >
        <svg aria-hidden viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.4">
          <circle cx="10" cy="10" r="7.5" />
          <path d="M2.5 10h15M10 2.5c2 2.1 3 4.6 3 7.5s-1 5.4-3 7.5c-2-2.1-3-4.6-3-7.5s1-5.4 3-7.5Z" />
        </svg>
        {locale}
      </button>
      <AnimatePresence>
        {open && (
          <m.ul
            initial={{ opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.98 }}
            transition={{ duration: 0.25, ease: EASE }}
            className="absolute right-0 top-[calc(100%+0.5rem)] w-44 origin-top-right overflow-hidden rounded-xl border border-white/10 bg-graphite p-1.5 shadow-2xl shadow-black/40"
          >
            {locales.map((l) => (
              <li key={l}>
                <Link
                  href={switchLocalePath(pathname, l)}
                  hrefLang={l}
                  lang={l}
                  aria-current={l === locale ? 'true' : undefined}
                  onClick={() => {
                    rememberLocale(l)
                    setOpen(false)
                  }}
                  className={[
                    'flex items-center justify-between rounded-lg px-3 py-2.5 text-[0.9375rem] transition-colors',
                    l === locale ? 'bg-white/[0.07] text-white' : 'text-white/70 hover:bg-white/[0.05] hover:text-white',
                  ].join(' ')}
                >
                  {localeNames[l]}
                  <span className="text-xs uppercase text-white/40">{l}</span>
                </Link>
              </li>
            ))}
          </m.ul>
        )}
      </AnimatePresence>
    </div>
  )
}
