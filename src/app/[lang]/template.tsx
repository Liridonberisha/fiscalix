'use client'

import { m } from 'framer-motion'
import { useEffect, type ReactNode } from 'react'
import { EASE } from '@/components/motion'

// The first page load renders statically so content is visible before JavaScript runs.
// After hydration, every client-side navigation fades the new page in.
let hydrated = false

export default function Template({ children }: { children: ReactNode }) {
  const animate = hydrated
  useEffect(() => {
    hydrated = true
  }, [])
  return (
    <m.div
      initial={animate ? { opacity: 0, y: 10 } : false}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: EASE }}
    >
      {children}
    </m.div>
  )
}
