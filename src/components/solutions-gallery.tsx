'use client'

import Link from 'next/link'
import { AnimatePresence, LayoutGroup, m } from 'framer-motion'
import { useState } from 'react'
import type { Locale } from '@/i18n/config'
import type { Dictionary } from '@/i18n/dictionaries/en'
import { EASE } from './motion'
import { miniUis } from './mini-uis'

type Filter = 'all' | 'operations' | 'finance' | 'people' | 'industry'

/**
 * A filterable catalogue of example systems, each with a miniature interface.
 * `limit` shows a subset on the home page.
 */
export function SolutionsGallery({ locale, dict, limit }: { locale: Locale; dict: Dictionary; limit?: number }) {
  const { solutions, mock, cta } = dict
  const [filter, setFilter] = useState<Filter>('all')
  const filters = Object.entries(solutions.filters) as [Filter, string][]
  const all = filter === 'all' ? solutions.items : solutions.items.filter((s) => s.category === filter)
  const items = limit && filter === 'all' ? all.slice(0, limit) : all

  return (
    <div className="mt-12 lg:mt-16">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <LayoutGroup id="solution-filters">
          <div role="group" aria-label={solutions.filterLabel} className="no-scrollbar -mx-1 flex gap-1 overflow-x-auto px-1">
            {filters.map(([key, label]) => (
              <button
                key={key}
                type="button"
                aria-pressed={filter === key}
                onClick={() => setFilter(key)}
                className={`relative shrink-0 rounded-full px-4 py-2 text-[0.9375rem] transition-colors duration-300 ${
                  filter === key ? 'text-ink' : 'text-white/60 hover:text-white'
                }`}
              >
                {filter === key && (
                  <m.span layoutId="filter-pill" className="absolute inset-0 rounded-full bg-porcelain" transition={{ duration: 0.45, ease: EASE }} />
                )}
                <span className="relative">{label}</span>
              </button>
            ))}
          </div>
        </LayoutGroup>
        <p className="t-small text-white/45">{solutions.disclaimer}</p>
      </div>

      <m.ul layout className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout" initial={false}>
          {items.map((item) => {
            const Ui = miniUis[item.id]
            return (
              <m.li
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.45, ease: EASE }}
                className="group relative flex flex-col overflow-hidden rounded-[18px] border border-white/[0.08] bg-white/[0.03] transition-colors duration-500 hover:border-white/20 hover:bg-white/[0.05]"
              >
                <div className="relative h-[196px] overflow-hidden px-6 pt-6">
                  <div
                    aria-hidden
                    className="h-full rounded-t-xl bg-[#FBFBFC] p-3.5 shadow-[0_-1px_0_rgba(255,255,255,0.1)] transition-transform duration-700 ease-out group-hover:-translate-y-1.5"
                  >
                    <Ui w={mock.words} locale={locale} />
                  </div>
                </div>
                <div className="flex flex-1 flex-col border-t border-white/[0.08] p-6">
                  <h3 className="t-h4 text-white">{item.name}</h3>
                  <p className="t-small mt-2 text-white/55">{item.text}</p>
                </div>
              </m.li>
            )
          })}
        </AnimatePresence>
      </m.ul>

      {limit && (
        <div className="mt-10 flex justify-center">
          <Link href={`/${locale}/solutions`} className="btn btn-ghost-dark">
            {cta.allSolutions}
          </Link>
        </div>
      )}
    </div>
  )
}
