'use client'

import type React from 'react'

import { m } from 'framer-motion'
import type { Locale } from '@/i18n/config'
import type { Dictionary } from '@/i18n/dictionaries/en'
import { eur } from '@/lib/format'
import { EASE } from './motion'

type Svc = Dictionary['mock']['svc']
type Props = { svc: Svc; active: boolean; locale: Locale }

export const serviceVisuals: Record<string, (p: Props) => React.JSX.Element> = {
  custom: CustomVisual,
  web: WebVisual,
  mobile: MobileVisual,
  management: ManagementVisual,
  internal: InternalVisual,
  websites: WebsitesVisual,
  automation: AutomationVisual,
}

const box = 'absolute rounded-xl border px-3.5 py-2.5 text-[0.8125rem] font-medium'

/** Architecture: interface, API, data and integrations wired together. */
function CustomVisual({ svc, active }: Props) {
  const [ui, api, db, integrations, roles] = svc.layers
  return (
    <div className="relative h-full w-full">
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full" fill="none">
        {[
          'M50 22 V44',
          'M50 56 C 50 66, 26 66, 26 76',
          'M50 56 C 50 66, 74 66, 74 76',
        ].map((d) => (
          <path
            key={d}
            d={d}
            stroke="#9B7BF7"
            strokeOpacity="0.7"
            strokeWidth="0.5"
            strokeDasharray="1.6 1.6"
            vectorEffect="non-scaling-stroke"
            style={{ strokeWidth: 1.5 }}
            className={active ? 'animate-dash' : ''}
          />
        ))}
      </svg>
      <div className={`${box} left-1/2 top-[10%] -translate-x-1/2 border-white/15 bg-white/[0.04] text-white`}>{ui}</div>
      <m.div
        className={`${box} left-1/2 top-[44%] -translate-x-1/2 -translate-y-1/2 border-violet-400/60 bg-violet-500/15 text-white`}
        animate={active ? { boxShadow: ['0 0 0 0 rgba(155,123,247,0)', '0 0 0 10px rgba(155,123,247,0.12)', '0 0 0 0 rgba(155,123,247,0)'] } : {}}
        transition={{ duration: 2.4, repeat: Infinity }}
      >
        {api}
      </m.div>
      <span className="absolute left-1/2 top-[54%] -translate-x-1/2 rounded-md bg-white/[0.06] px-2 py-1 text-[0.6875rem] text-white/55">
        {roles}
      </span>
      <div className={`${box} left-[26%] top-[76%] -translate-x-1/2 border-white/15 bg-white/[0.04] text-white`}>{db}</div>
      <div className={`${box} left-[74%] top-[76%] -translate-x-1/2 border-white/15 bg-white/[0.04] text-white`}>{integrations}</div>
    </div>
  )
}

/** A browser app with a cursor that goes to work. */
function WebVisual({ active }: Props) {
  return (
    <div className="relative grid h-full w-full place-items-center px-[8%]">
      <div className="w-full overflow-hidden rounded-xl bg-white shadow-2xl shadow-black/40">
        <div className="flex h-7 items-center gap-1.5 border-b border-black/[0.06] bg-[#F4F3F6] px-3">
          <span className="h-2 w-2 rounded-full bg-black/15" />
          <span className="h-2 w-2 rounded-full bg-black/15" />
          <span className="h-2 w-2 rounded-full bg-black/15" />
          <span className="ml-3 rounded bg-white px-2 py-0.5 text-[10px] text-black/40">app.yourcompany.com</span>
        </div>
        <div className="flex h-[190px]">
          <div className="w-[22%] space-y-2 border-r border-black/[0.06] bg-[#F7F6F9] p-3">
            <span className="block h-2 w-3/4 rounded-full bg-violet-500/70" />
            {[60, 70, 50, 65].map((w) => (
              <span key={w} className="block h-1.5 rounded-full bg-black/10" style={{ width: `${w}%` }} />
            ))}
          </div>
          <div className="flex-1 space-y-3 p-3">
            <div className="flex items-center justify-between">
              <span className="block h-2 w-1/3 rounded-full bg-black/20" />
              <m.span
                className="block h-5 w-16 rounded-md bg-violet-600"
                animate={active ? { scale: [1, 1, 0.92, 1] } : { scale: 1 }}
                transition={{ duration: 2.8, times: [0, 0.55, 0.62, 0.7], repeat: Infinity, repeatDelay: 0.4 }}
              />
            </div>
            <div className="grid grid-cols-3 gap-2">
              {[0, 1, 2].map((i) => (
                <div key={i} className="rounded-lg border border-black/[0.06] p-2">
                  <span className="block h-1.5 w-1/2 rounded-full bg-black/10" />
                  <span className="mt-2 block h-2.5 w-2/3 rounded-full bg-black/25" />
                </div>
              ))}
            </div>
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="flex gap-3 border-t border-black/[0.05] pt-2">
                <span className="block h-1.5 w-[18%] rounded-full bg-black/10" />
                <span className="block h-1.5 w-[34%] rounded-full bg-black/15" />
                <span className="ml-auto block h-1.5 w-[14%] rounded-full bg-black/10" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <m.svg
        viewBox="0 0 24 24"
        className="absolute h-6 w-6 drop-shadow-lg"
        style={{ left: '55%', top: '70%' }}
        animate={active ? { left: ['55%', '78%', '78%', '55%'], top: ['70%', '36%', '36%', '70%'] } : {}}
        transition={{ duration: 2.8, times: [0, 0.5, 0.75, 1], ease: 'easeInOut', repeat: Infinity, repeatDelay: 0.4 }}
        aria-hidden
      >
        <path d="M4 3 L19 12 L12 13.5 L9 20 Z" fill="#15121B" stroke="white" strokeWidth="1.4" strokeLinejoin="round" />
      </m.svg>
    </div>
  )
}

/** Phone with today's tasks; a new one arrives. */
function MobileVisual({ svc, active }: Props) {
  return (
    <div className="relative grid h-full w-full place-items-center">
      <div className="relative h-[84%] max-h-[440px] w-auto overflow-hidden rounded-[30px] border-[6px] border-[#2b2732] bg-[#F7F6F9] shadow-2xl shadow-black/50" style={{ aspectRatio: '9 / 18.5' }}>
        <div className="mx-auto mt-2 h-4 w-16 rounded-full bg-[#2b2732]" />
        <div className="px-3.5 pt-3">
          <p className="text-[0.95rem] font-semibold text-ink" style={{ fontStretch: '108%' }}>
            {svc.today}
          </p>
          <div className="mt-3 space-y-2">
            {svc.tasks.map((t, i) => (
              <div key={t} className="flex items-center gap-2 rounded-xl bg-white p-2.5 shadow-[0_1px_2px_rgba(0,0,0,0.06)]">
                <span className={`grid h-4 w-4 shrink-0 place-items-center rounded-full border ${i === 0 ? 'border-violet-600 bg-violet-600' : 'border-black/25'}`}>
                  {i === 0 && (
                    <svg viewBox="0 0 12 12" className="h-2.5 w-2.5" fill="none" stroke="white" strokeWidth="2">
                      <path d="m2.5 6 2.5 2.5 4.5-5" />
                    </svg>
                  )}
                </span>
                <span className={`text-[0.6875rem] leading-tight ${i === 0 ? 'text-black/40 line-through' : 'text-ink'}`}>{t}</span>
              </div>
            ))}
          </div>
        </div>
        <m.div
          className="absolute inset-x-2 top-7 flex items-center gap-2 rounded-2xl bg-ink/95 p-2.5 text-white shadow-xl"
          initial={{ y: -90, opacity: 0 }}
          animate={active ? { y: [-90, 0, 0, -90], opacity: [0, 1, 1, 0] } : { y: -90, opacity: 0 }}
          transition={{ duration: 3.6, times: [0, 0.15, 0.8, 1], repeat: Infinity, repeatDelay: 0.8, ease: EASE }}
        >
          <span className="grid h-6 w-6 shrink-0 place-items-center rounded-lg bg-violet-500 text-[10px] font-semibold">F</span>
          <span className="text-[0.6875rem] leading-tight">{svc.newTask}</span>
        </m.div>
      </div>
    </div>
  )
}

/** An invoice with VAT and a stock card behind it. */
function ManagementVisual({ svc, active, locale }: Props) {
  const lines = [
    { name: 'Dibond 3 mm', qty: 6, price: 38 },
    { name: 'PVC 5 mm', qty: 10, price: 14.5 },
    { name: 'Banner 300×100', qty: 2, price: 45 },
    { name: 'CNC 2h', qty: 1, price: 80 },
  ]
  const sub = lines.reduce((s, l) => s + l.qty * l.price, 0)
  const vat = sub * 0.18
  return (
    <div className="relative h-full w-full">
      <div className="absolute right-[8%] top-[12%] w-[38%] rounded-xl border border-white/10 bg-white/[0.04] p-3">
        <span className="block h-1.5 w-1/2 rounded-full bg-white/25" />
        {[78, 46, 22, 64].map((w, i) => (
          <div key={i} className="mt-3">
            <span className="block h-1 w-full rounded-full bg-white/10">
              <m.span
                className={`block h-full rounded-full ${w < 30 ? 'bg-[#C9932E]' : 'bg-violet-400'}`}
                initial={false}
                animate={{ width: active ? `${w}%` : '12%' }}
                transition={{ duration: 1, delay: i * 0.08, ease: EASE }}
              />
            </span>
          </div>
        ))}
      </div>
      <m.div
        className="absolute left-[8%] top-[9%] w-[62%] rounded-lg bg-white p-4 text-ink shadow-2xl shadow-black/50"
        initial={false}
        animate={{ rotate: active ? 0 : -3, y: active ? 0 : 8 }}
        transition={{ duration: 0.8, ease: EASE }}
      >
        <div className="flex items-baseline justify-between">
          <p className="text-[0.95rem] font-semibold" style={{ fontStretch: '110%' }}>
            {svc.invoice}
          </p>
          <p className="tabular text-[0.625rem] text-black/40">INV-2026-0142</p>
        </div>
        <div className="mt-3 space-y-1.5 text-[0.6875rem]">
          {lines.map((l) => (
            <div key={l.name} className="flex justify-between gap-2 border-b border-black/[0.05] pb-1.5">
              <span className="truncate text-black/70">
                {l.qty} × {l.name}
              </span>
              <span className="tabular">{eur(l.qty * l.price, locale)}</span>
            </div>
          ))}
        </div>
        <div className="mt-2 space-y-1 text-[0.6875rem]">
          <div className="flex justify-between text-black/50">
            <span>{svc.subtotal}</span>
            <span className="tabular">{eur(sub, locale)}</span>
          </div>
          <div className="flex justify-between text-black/50">
            <span>{svc.vat}</span>
            <span className="tabular">{eur(vat, locale)}</span>
          </div>
          <div className="flex justify-between pt-1 text-[0.8125rem] font-semibold">
            <span>{svc.total}</span>
            <span className="tabular text-violet-700">{eur(sub + vat, locale)}</span>
          </div>
        </div>
      </m.div>
    </div>
  )
}

/** Who can do what: a role and permission matrix. */
function InternalVisual({ svc, active }: Props) {
  const grid = [
    [1, 1, 1, 1],
    [1, 1, 1, 0],
    [1, 1, 0, 0],
    [0, 0, 1, 0],
  ]
  return (
    <div className="grid h-full w-full place-items-center px-[7%]">
      <div className="w-full rounded-xl border border-white/10 bg-white/[0.03] p-4">
        <div className="grid grid-cols-[1.4fr_repeat(4,1fr)] gap-y-3 text-[0.75rem]">
          <span />
          {svc.perms.map((p) => (
            <span key={p} className="truncate text-center text-white/45">
              {p}
            </span>
          ))}
          {svc.roles.map((role, r) => (
            <div key={role} className="contents">
              <span className="truncate border-t border-white/[0.07] pt-3 text-white/85">{role}</span>
              {grid[r].map((on, c) => (
                <span key={c} className="grid place-items-center border-t border-white/[0.07] pt-3">
                  {on ? (
                    <m.span
                      className="grid h-5 w-5 place-items-center rounded-md bg-violet-500/20 text-violet-300"
                      initial={false}
                      animate={{ scale: active ? 1 : 0.6, opacity: active ? 1 : 0.35 }}
                      transition={{ duration: 0.4, delay: active ? (r * 4 + c) * 0.035 : 0, ease: EASE }}
                    >
                      <svg viewBox="0 0 12 12" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="m2.5 6 2.5 2.5 4.5-5" />
                      </svg>
                    </m.span>
                  ) : (
                    <span className="h-1 w-2.5 rounded-full bg-white/15" />
                  )}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

/** One website, laid out for desktop and phone. */
function WebsitesVisual({ svc, active }: Props) {
  return (
    <div className="relative h-full w-full">
      <div className="absolute left-[7%] top-[12%] w-[70%]">
        <div className="overflow-hidden rounded-xl bg-white shadow-2xl shadow-black/40">
          <div className="flex h-6 items-center gap-1.5 bg-[#F4F3F6] px-3">
            <span className="h-1.5 w-1.5 rounded-full bg-black/15" />
            <span className="h-1.5 w-1.5 rounded-full bg-black/15" />
            <span className="h-1.5 w-1.5 rounded-full bg-black/15" />
          </div>
          <div className="p-4">
            <div className="flex items-center justify-between">
              <span className="h-2 w-10 rounded-full bg-ink" />
              <span className="flex gap-2">
                {[0, 1, 2].map((i) => (
                  <span key={i} className="h-1.5 w-6 rounded-full bg-black/15" />
                ))}
              </span>
            </div>
            <div className="mt-5 grid grid-cols-5 gap-3">
              <div className="col-span-3 space-y-1.5">
                <span className="block h-3 w-full rounded bg-ink" />
                <span className="block h-3 w-4/5 rounded bg-ink" />
                <span className="mt-3 block h-1.5 w-11/12 rounded-full bg-black/15" />
                <span className="block h-1.5 w-3/4 rounded-full bg-black/15" />
                <span className="mt-3 block h-4 w-16 rounded-full bg-violet-600" />
              </div>
              <div className="col-span-2 rounded-lg bg-[linear-gradient(140deg,#5B21B6,#9B7BF7)]" />
            </div>
            <div className="mt-4 grid grid-cols-3 gap-2">
              {[0, 1, 2].map((i) => (
                <span key={i} className="h-8 rounded-md bg-black/[0.05]" />
              ))}
            </div>
          </div>
        </div>
        <p className="mt-2 text-[0.6875rem] text-white/40">{svc.desktop}</p>
      </div>
      <m.div
        className="absolute right-[7%] top-[26%] w-[22%]"
        initial={false}
        animate={{ y: active ? 0 : 14, opacity: active ? 1 : 0.85 }}
        transition={{ duration: 0.8, ease: EASE }}
      >
        <div className="overflow-hidden rounded-[18px] border-[4px] border-[#2b2732] bg-white p-2.5 shadow-2xl shadow-black/50">
          <span className="block h-1.5 w-8 rounded-full bg-ink" />
          <span className="mt-3 block h-2.5 w-full rounded bg-ink" />
          <span className="mt-1 block h-2.5 w-4/5 rounded bg-ink" />
          <span className="mt-2 block h-12 rounded-md bg-[linear-gradient(140deg,#5B21B6,#9B7BF7)]" />
          <span className="mt-2 block h-1.5 w-full rounded-full bg-black/15" />
          <span className="mt-1 block h-1.5 w-2/3 rounded-full bg-black/15" />
          <span className="mt-2 block h-3.5 w-12 rounded-full bg-violet-600" />
        </div>
        <p className="mt-2 text-[0.6875rem] text-white/40">{svc.mobile}</p>
      </m.div>
    </div>
  )
}

const DIM_BORDER = 'rgba(255,255,255,0.1)'
const LIT_BORDER = 'rgba(155,123,247,0.85)'
const DIM_TEXT = 'rgba(255,255,255,0.75)'
const LIT_TEXT = 'rgba(255,255,255,1)'

/** A workflow: a signal travels from step to step. */
function AutomationVisual({ svc, active }: Props) {
  return (
    <div className="grid h-full w-full place-items-center">
      <div className="relative w-[78%]">
        <span className="absolute bottom-6 left-[19px] top-6 w-px bg-white/15" />
        {active && (
          <m.span
            className="absolute left-[15px] h-[9px] w-[9px] rounded-full bg-violet-400 shadow-[0_0_14px_3px_rgba(155,123,247,0.7)]"
            initial={{ top: '8%' }}
            animate={{ top: ['8%', '88%'] }}
            transition={{ duration: 2.7, repeat: Infinity, ease: 'linear' }}
          />
        )}
        <ol className="relative space-y-4">
          {svc.flow.map((step, i) => (
            <li key={step} className="flex items-center gap-4">
              <span className="relative z-10 grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-white/15 bg-graphite text-[0.75rem] text-white/70">
                {i + 1}
              </span>
              <m.span
                className="flex-1 rounded-xl border px-4 py-3 text-[0.875rem]"
                initial={false}
                animate={
                  active
                    ? {
                        borderColor: [DIM_BORDER, DIM_BORDER, LIT_BORDER, DIM_BORDER, DIM_BORDER],
                        color: [DIM_TEXT, DIM_TEXT, LIT_TEXT, DIM_TEXT, DIM_TEXT],
                      }
                    : { borderColor: DIM_BORDER, color: DIM_TEXT }
                }
                // Each step lights up as the signal passes it
                transition={
                  active
                    ? { duration: 2.7, times: [0, i * 0.24 + 0.02, i * 0.24 + 0.1, i * 0.24 + 0.24, 1], repeat: Infinity, ease: 'linear' }
                    : { duration: 0.3 }
                }
              >
                {step}
              </m.span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}
