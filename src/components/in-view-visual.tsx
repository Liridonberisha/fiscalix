'use client'

import { useInView } from 'framer-motion'
import { useRef } from 'react'
import type { Locale } from '@/i18n/config'
import type { Dictionary } from '@/i18n/dictionaries/en'
import { serviceVisuals } from './service-visuals'

/** Runs a service visual's animation only while it is on screen. */
export function InViewServiceVisual({ id, svc, locale }: { id: string; svc: Dictionary['mock']['svc']; locale: Locale }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { amount: 0.4 })
  const Visual = serviceVisuals[id]
  return (
    <div ref={ref} className="relative aspect-[5/4] overflow-hidden rounded-[22px] bg-graphite">
      <div
        aria-hidden
        className="absolute inset-0 opacity-60"
        style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.09) 1px, transparent 1px)', backgroundSize: '20px 20px' }}
      />
      <div className="absolute inset-0">
        <Visual svc={svc} active={inView} locale={locale} />
      </div>
    </div>
  )
}
