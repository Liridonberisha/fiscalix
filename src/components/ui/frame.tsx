import type { ReactNode } from 'react'

/** Window chrome shared by the interface mockups. */
export function WindowFrame({
  children,
  title,
  tone = 'light',
  className = '',
  bodyClassName = '',
}: {
  children: ReactNode
  title?: string
  tone?: 'light' | 'dark'
  className?: string
  bodyClassName?: string
}) {
  const dark = tone === 'dark'
  return (
    <div className={`${dark ? 'ui-frame-dark' : 'ui-frame'} overflow-hidden ${className}`}>
      <div
        className={`flex h-8 items-center gap-1.5 border-b px-3 ${
          dark ? 'border-white/[0.07] bg-[#18151E]' : 'border-black/[0.06] bg-[#F4F3F6]'
        }`}
      >
        <span className={`h-2 w-2 rounded-full ${dark ? 'bg-white/15' : 'bg-black/15'}`} />
        <span className={`h-2 w-2 rounded-full ${dark ? 'bg-white/15' : 'bg-black/15'}`} />
        <span className={`h-2 w-2 rounded-full ${dark ? 'bg-white/15' : 'bg-black/15'}`} />
        {title && (
          <span
            className={`ml-2 truncate rounded px-2 py-0.5 text-[10px] ${
              dark ? 'bg-white/[0.06] text-white/45' : 'bg-white text-black/45'
            }`}
          >
            {title}
          </span>
        )}
      </div>
      <div className={bodyClassName}>{children}</div>
    </div>
  )
}

export function Dot({ className = '' }: { className?: string }) {
  return <span className={`inline-block h-1.5 w-1.5 rounded-full ${className}`} />
}

/** Rounded bar standing in for a line of text inside small mockups. */
export function Bar({ w, className = '' }: { w: string; className?: string }) {
  return <span className={`block h-[5px] rounded-full ${className}`} style={{ width: w }} />
}
