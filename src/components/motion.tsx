'use client'

import { LazyMotion, MotionConfig, domMax, m, type Variants } from 'framer-motion'
import { createElement, type ElementType, type ReactNode } from 'react'

export const EASE = [0.22, 1, 0.36, 1] as const

export function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <LazyMotion features={domMax} strict>
      <MotionConfig reducedMotion="user" transition={{ ease: EASE }}>
        {children}
      </MotionConfig>
    </LazyMotion>
  )
}

/** Fades content in once it enters the viewport. Used sparingly: key visuals and groups. */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 18,
  as = 'div',
  amount = 0.25,
}: {
  children: ReactNode
  className?: string
  delay?: number
  y?: number
  as?: 'div' | 'li' | 'section' | 'p' | 'figure'
  amount?: number
}) {
  const Comp = m[as]
  return (
    <Comp
      data-reveal
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.8, delay, ease: EASE }}
    >
      {children}
    </Comp>
  )
}

const wordVariants: Variants = {
  hidden: { y: '108%' },
  show: ({ i, base }: { i: number; base: number }) => ({
    y: '0%',
    transition: { duration: 0.85, ease: EASE, delay: base + i * 0.045 },
  }),
}

/**
 * Line-mask text reveal: each word rises out of its own clipping box.
 * `trigger="load"` animates on mount (hero), `"view"` when scrolled into view.
 */
export function RevealText({
  text,
  as = 'h2',
  className,
  trigger = 'view',
  delay = 0,
  id,
}: {
  text: string
  id?: string
  as?: ElementType
  className?: string
  trigger?: 'load' | 'view'
  delay?: number
}) {
  // Reduced motion is handled globally by <MotionConfig reducedMotion="user">,
  // which makes these transform animations instant without changing the markup.
  const words = text.split(' ')
  const animateProps =
    trigger === 'load'
      ? { initial: 'hidden', animate: 'show' }
      : { initial: 'hidden', whileInView: 'show', viewport: { once: true, amount: 0.6 } }

  return createElement(
    as,
    { className, id, 'aria-label': text },
    <m.span className="block" aria-hidden {...animateProps}>
      {words.map((word, i) => (
        <span key={`${word}-${i}`}>
          <span className="inline-block overflow-hidden pb-[0.12em] -mb-[0.12em] align-top">
            <m.span data-reveal className="inline-block will-change-transform" variants={wordVariants} custom={{ i, base: delay }}>
              {word}
            </m.span>
          </span>
          {i < words.length - 1 ? ' ' : null}
        </span>
      ))}
    </m.span>,
  )
}
