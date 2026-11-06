'use client'

import Link from 'next/link'
import { AnimatePresence, m } from 'framer-motion'
import { useState } from 'react'
import type { Locale } from '@/i18n/config'
import type { Dictionary } from '@/i18n/dictionaries/en'
import { EASE } from './motion'
import { serviceVisuals } from './service-visuals'

// Service id → project type preselected in the contact form
export const serviceToType: Record<string, string> = {
  custom: 'custom',
  web: 'web',
  mobile: 'mobile',
  management: 'management',
  internal: 'internal',
  websites: 'website',
  automation: 'automation',
}

/**
 * Home page services: an index of names on the left and a live preview on the right.
 * Hover, focus or tap a service to bring up its visual. On phones each row expands in place.
 */
export function ServicesIndex({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const { services, mock, cta } = dict
  const [active, setActive] = useState(0)
  const current = services.items[active]
  const Visual = serviceVisuals[current.id]

  return (
    <div className="grid-site mt-14 gap-y-10 lg:mt-20">
      <ul className="col-span-12 border-b border-ink/10 lg:col-span-6">
        {services.items.map((s, i) => {
          const isActive = i === active
          const V = serviceVisuals[s.id]
          return (
            <li key={s.id} className="border-t border-ink/10">
              <button
                type="button"
                aria-expanded={isActive}
                aria-controls={`svc-${s.id}`}
                onClick={() => setActive(i)}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                className="group flex w-full items-center gap-4 py-5 text-left sm:py-6"
              >
                <span
                  aria-hidden
                  className={`h-[2px] shrink-0 bg-violet-600 transition-all duration-500 ease-out ${isActive ? 'w-8' : 'w-0 group-hover:w-3'}`}
                />
                <span
                  className={`t-h3 transition-colors duration-300 ${isActive ? 'text-ink' : 'text-ink/45 group-hover:text-ink/80'}`}
                >
                  {s.name}
                </span>
              </button>
              <AnimatePresence initial={false}>
                {isActive && (
                  <m.div
                    id={`svc-${s.id}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: EASE }}
                    // Desktop shows these details in the preview panel instead, so rows never move under the cursor
                    className="overflow-hidden lg:hidden"
                  >
                    <div className="pb-7 pl-12">
                      <p className="t-body max-w-[48ch] text-muted">{s.summary}</p>
                      <div className="mt-6 aspect-[5/4] overflow-hidden rounded-2xl bg-graphite">
                        <V svc={mock.svc} active locale={locale} />
                      </div>
                      <Link
                        href={`/${locale}/contact?type=${serviceToType[s.id]}`}
                        className="link-under mt-5 inline-block text-[0.9375rem] font-medium text-violet-700"
                      >
                        {cta.discuss}
                      </Link>
                    </div>
                  </m.div>
                )}
              </AnimatePresence>
            </li>
          )
        })}
      </ul>

      <div className="relative col-span-12 hidden lg:col-span-6 lg:block">
        <div className="sticky top-28">
          <div className="relative aspect-[5/4] overflow-hidden rounded-[22px] bg-graphite">
            <div
              aria-hidden
              className="absolute inset-0 opacity-60"
              style={{
                backgroundImage: 'radial-gradient(rgba(255,255,255,0.09) 1px, transparent 1px)',
                backgroundSize: '20px 20px',
              }}
            />
            <AnimatePresence mode="wait">
              <m.div
                key={current.id}
                className="absolute inset-0"
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.45, ease: EASE }}
              >
                <Visual svc={mock.svc} active locale={locale} />
              </m.div>
            </AnimatePresence>
          </div>
          <AnimatePresence mode="wait">
            <m.div
              key={current.id}
              className="mt-7 grid grid-cols-[1fr_auto] items-start gap-x-8 gap-y-5"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, ease: EASE }}
            >
              <p className="t-body max-w-[46ch] text-ink/80">{current.summary}</p>
              <Link
                href={`/${locale}/contact?type=${serviceToType[current.id]}`}
                className="btn btn-ghost-light btn-sm"
              >
                {cta.discuss}
              </Link>
              <ul className="col-span-2 flex flex-wrap gap-2" aria-label={services.typical}>
                {current.includes.map((item) => (
                  <li key={item} className="chip border border-ink/10 bg-paper text-ink/70">
                    {item}
                  </li>
                ))}
              </ul>
            </m.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
