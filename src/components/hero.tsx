'use client'

import Link from 'next/link'
import {
  animate,
  m,
  useMotionValue,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion'
import { useEffect, useRef, useState, type KeyboardEvent, type PointerEvent } from 'react'
import type { Locale } from '@/i18n/config'
import type { Dictionary } from '@/i18n/dictionaries/en'
import { AppScreen, SCREEN_H, SCREEN_W, SketchScreen } from './hero-screens'
import { EASE, RevealText } from './motion'

const REST = 64 // where the autoplay sweep settles (percent built)
const MIN_SCALE = 0.52 // 364px tall on phones

export function Hero({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const { hero, cta } = dict
  const section = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: section, offset: ['start start', 'end start'] })
  const visualY = useTransform(scrollYProgress, [0, 1], [0, -80])

  return (
    <section ref={section} className="relative overflow-hidden bg-ink pb-16 pt-[calc(var(--header-h)+3.5rem)] text-white sm:pb-24 lg:pt-[calc(var(--header-h)+5rem)]">
      {/* Fine construction grid — a nod to engineering drawings */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)',
          backgroundSize: '96px 96px',
          maskImage: 'radial-gradient(ellipse 80% 60% at 30% 20%, black 30%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 30% 20%, black 30%, transparent 75%)',
        }}
      />

      <div className="container-site relative">
        <div className="grid-site gap-y-8">
          <RevealText
            as="h1"
            trigger="load"
            delay={0.1}
            text={hero.headline}
            className="t-display col-span-12 max-w-[17ch] lg:col-span-11"
          />
          <m.div
            className="col-span-12 md:col-span-7 lg:col-span-5"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.9, ease: EASE }}
          >
            <p className="t-lead max-w-[46ch] text-white/70">{hero.lead}</p>
          </m.div>
          <m.div
            className="col-span-12 flex flex-col items-start gap-5 md:col-span-5 md:items-end md:justify-end lg:col-span-7"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.9, ease: EASE }}
          >
            <div className="flex flex-wrap gap-3">
              <Link href={`/${locale}/contact`} className="btn btn-primary">
                {cta.start}
              </Link>
              <Link href={`/${locale}/work`} className="btn btn-ghost-dark">
                {cta.explore}
              </Link>
            </div>
            <p className="t-small text-white/45 md:text-right">{hero.markets}</p>
          </m.div>
        </div>

        <m.div style={{ y: visualY }} className="mt-14 sm:mt-20">
          <Scrubber locale={locale} dict={dict} />
        </m.div>
      </div>
    </section>
  )
}

function Scrubber({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const { hero, mock } = dict
  const box = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(1)
  const [now, setNow] = useState(0)
  const pos = useMotionValue(0)
  const reduce = useReducedMotion()
  const dragging = useRef(false)
  const autoplay = useRef<ReturnType<typeof animate> | null>(null)

  const clip = useTransform(pos, (v) => `inset(0 ${100 - v}% 0 0)`)
  const left = useTransform(pos, (v) => `${v}%`)
  const builtOpacity = useTransform(pos, [8, 22], [0, 1])
  const ideaOpacity = useTransform(pos, [80, 94], [1, 0])
  useMotionValueEvent(pos, 'change', (v) => setNow(Math.round(v)))

  // Fit the fixed 1180×700 canvas to the available width. Small screens keep
  // a minimum scale and show the left part of the interface.
  useEffect(() => {
    const el = box.current
    if (!el) return
    const ro = new ResizeObserver(([entry]) => {
      const w = entry.contentRect.width
      setScale(window.innerWidth < 768 ? MIN_SCALE : w / SCREEN_W)
    })
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  useEffect(() => {
    if (reduce) {
      pos.set(REST)
      return
    }
    autoplay.current = animate(pos, REST, { delay: 1.1, duration: 2.6, ease: [0.65, 0, 0.35, 1] })
    return () => autoplay.current?.stop()
  }, [pos, reduce])

  const setFromPointer = (clientX: number) => {
    const rect = box.current?.getBoundingClientRect()
    if (!rect) return
    const v = ((clientX - rect.left) / rect.width) * 100
    pos.set(Math.min(100, Math.max(0, v)))
  }

  const onPointerDown = (e: PointerEvent<HTMLDivElement>) => {
    autoplay.current?.stop()
    dragging.current = true
    e.currentTarget.setPointerCapture(e.pointerId)
    setFromPointer(e.clientX)
  }
  const onPointerMove = (e: PointerEvent<HTMLDivElement>) => {
    if (dragging.current) setFromPointer(e.clientX)
  }
  const onPointerUp = () => {
    dragging.current = false
  }

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const step = e.shiftKey ? 20 : 5
    const map: Record<string, number> = {
      ArrowLeft: pos.get() - step,
      ArrowDown: pos.get() - step,
      ArrowRight: pos.get() + step,
      ArrowUp: pos.get() + step,
      Home: 0,
      End: 100,
    }
    if (e.key in map) {
      e.preventDefault()
      autoplay.current?.stop()
      animate(pos, Math.min(100, Math.max(0, map[e.key])), { duration: 0.35, ease: EASE })
    }
  }

  return (
    <figure className="relative">
      <div
        ref={box}
        // Height comes from CSS so the server render already reserves the right space:
        // a fixed crop on phones, the canvas ratio from tablets up.
        className="relative h-[364px] cursor-ew-resize touch-pan-y select-none overflow-hidden rounded-[18px] md:aspect-[1180/700] md:h-auto"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
      >
        {/* Idea layer (always underneath) */}
        <div aria-hidden className="absolute left-0 top-0 origin-top-left" style={{ transform: `scale(${scale})` }}>
          <SketchScreen notes={hero.notes} />
        </div>

        {/* Software layer, revealed left of the handle */}
        <m.div className="absolute inset-0" style={{ clipPath: clip, WebkitClipPath: clip }}>
          <div className="absolute left-0 top-0 origin-top-left" style={{ transform: `scale(${scale})` }}>
            <AppScreen mock={mock.app} low={mock.words.low} locale={locale} />
          </div>
        </m.div>

        {/* Handle */}
        <m.div className="pointer-events-none absolute inset-y-0 z-10 -translate-x-1/2" style={{ left }}>
          <div className="mx-auto h-full w-[2px] bg-violet-400 shadow-[0_0_24px_4px_rgba(155,123,247,0.55)]" />
          <div
            role="slider"
            tabIndex={0}
            aria-label={hero.sliderLabel}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={now}
            aria-valuetext={`${now}%`}
            onKeyDown={onKeyDown}
            className="pointer-events-auto absolute left-1/2 top-1/2 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 cursor-grab place-items-center rounded-full border border-white/20 bg-ink text-white shadow-[0_8px_30px_rgba(0,0,0,0.5)] transition-transform hover:scale-105 active:cursor-grabbing"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="m9 7-5 5 5 5M15 7l5 5-5 5" />
            </svg>
          </div>
        </m.div>

        {/* Layer labels */}
        <m.span
          style={{ opacity: builtOpacity }}
          className="pointer-events-none absolute bottom-4 left-4 z-10 rounded-full bg-ink/85 px-3.5 py-1.5 text-[0.8125rem] text-white backdrop-blur"
        >
          {hero.built}
        </m.span>
        <m.span
          style={{ opacity: ideaOpacity }}
          className="pointer-events-none absolute bottom-4 right-4 z-10 rounded-full bg-white/85 px-3.5 py-1.5 text-[0.8125rem] text-ink backdrop-blur"
        >
          {hero.idea}
        </m.span>
      </div>
      <figcaption className="sr-only">{hero.sliderLabel}</figcaption>
    </figure>
  )
}
