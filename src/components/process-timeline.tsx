'use client'

import { m, useMotionValueEvent, useScroll, useSpring } from 'framer-motion'
import { useRef, useState } from 'react'
import type { Dictionary } from '@/i18n/dictionaries/en'

/** Five steps on a line that fills as the visitor scrolls through them. */
export function ProcessTimeline({ steps }: { steps: Dictionary['process']['steps'] }) {
  const ref = useRef<HTMLOListElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 85%', 'end 55%'] })
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 })
  const [reached, setReached] = useState(0)
  useMotionValueEvent(scrollYProgress, 'change', (v) => setReached(Math.floor(v * steps.length + 0.15)))

  return (
    <ol ref={ref} className="relative mt-14 grid gap-10 pl-10 lg:mt-20 lg:grid-cols-5 lg:gap-8 lg:pl-0 lg:pt-12">
      {/* Track + fill: vertical on phones, horizontal from large screens */}
      <span aria-hidden className="absolute bottom-2 left-[7px] top-2 w-px bg-white/[0.12] lg:hidden" />
      <m.span aria-hidden className="absolute left-[7px] top-2 h-[calc(100%-1rem)] w-px origin-top bg-violet-400 lg:hidden" style={{ scaleY: progress }} />
      <span aria-hidden className="absolute left-0 right-0 top-[7px] hidden h-px bg-white/[0.12] lg:block" />
      <m.span aria-hidden className="absolute left-0 right-0 top-[7px] hidden h-px origin-left bg-violet-400 lg:block" style={{ scaleX: progress }} />

      {steps.map((step, i) => {
        const on = i < reached
        return (
          <li key={step.name} className="relative">
            <span
              aria-hidden
              className={`absolute -left-10 top-1 h-[15px] w-[15px] rounded-full border-2 transition-colors duration-500 lg:-top-12 lg:left-0 ${
                on ? 'border-violet-400 bg-violet-400' : 'border-white/25 bg-graphite'
              }`}
            />
            <p className={`t-h3 transition-colors duration-500 ${on ? 'text-violet-300' : 'text-white/30'}`}>
              {String(i + 1).padStart(2, '0')}
            </p>
            <h3 className="t-h4 mt-3 text-white">{step.name}</h3>
            <p className="t-small mt-2 max-w-[34ch] text-white/60">{step.text}</p>
          </li>
        )
      })}
    </ol>
  )
}
