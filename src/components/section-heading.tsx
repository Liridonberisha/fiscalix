import type { ReactNode } from 'react'
import { RevealText } from './motion'

/** Title on the left, supporting text aligned to the right columns. */
export function SectionHeading({
  title,
  intro,
  tone = 'light',
  children,
  as = 'h2',
  titleClass = 't-h2',
  id,
}: {
  title: string
  intro?: string
  tone?: 'light' | 'dark'
  children?: ReactNode
  as?: 'h1' | 'h2'
  titleClass?: string
  id?: string
}) {
  const muted = tone === 'dark' ? 'text-white/65' : 'text-muted'
  return (
    <div className="grid-site gap-y-6">
      <RevealText as={as} id={id} text={title} className={`${titleClass} col-span-12 max-w-[18ch] lg:col-span-7`} />
      {(intro || children) && (
        <div className="col-span-12 self-end lg:col-span-4 lg:col-start-9">
          {intro && <p className={`t-lead ${muted}`}>{intro}</p>}
          {children}
        </div>
      )}
    </div>
  )
}
