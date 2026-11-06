import type React from 'react'
import type { Locale } from '@/i18n/config'
import type { Dictionary } from '@/i18n/dictionaries/en'
import { eur } from '@/lib/format'

type W = Dictionary['mock']['words']
type P = { w: W; locale: Locale }

const card = 'rounded-lg border border-black/[0.06] bg-white'
const t = 'text-[10.5px] leading-tight'

function Head({ title, right }: { title: string; right?: React.ReactNode }) {
  return (
    <div className="mb-2.5 flex items-center justify-between">
      <span className="text-[11.5px] font-semibold text-ink" style={{ fontStretch: '106%' }}>
        {title}
      </span>
      {right}
    </div>
  )
}

function Inventory({ w }: P) {
  const rows = [
    { n: 'A4 80 g', q: 240, p: 82 },
    { n: 'Toner TN-2420', q: 6, p: 12 },
    { n: 'Etiketa 50×30', q: 1800, p: 64 },
    { n: 'Karton 40×30', q: 14, p: 18 },
  ]
  return (
    <div>
      <Head
        title={w.inStock}
        right={
          <span className="flex gap-1">
            <span className="rounded bg-ink px-1.5 py-0.5 text-[9.5px] text-white">Klinë</span>
            <span className="rounded bg-black/[0.05] px-1.5 py-0.5 text-[9.5px] text-black/50">Pejë</span>
          </span>
        }
      />
      <div className="space-y-2">
        {rows.map((r) => (
          <div key={r.n} className={`grid grid-cols-[1fr_44px_56px] items-center gap-2 ${t}`}>
            <span className="truncate text-black/75">{r.n}</span>
            <span className="tabular text-right text-black/50">{r.q}</span>
            <span className={`rounded px-1.5 py-0.5 text-center text-[9.5px] ${r.p < 20 ? 'bg-[#FBF1DE] text-[#93681C]' : 'bg-[#E6F4EE] text-[#2C7A5B]'}`}>
              {r.p < 20 ? w.low : w.inStock}
            </span>
            <span className="col-span-3 h-1 overflow-hidden rounded-full bg-black/[0.06]">
              <span className={`block h-full rounded-full ${r.p < 20 ? 'bg-[#C9932E]' : 'bg-violet-500'}`} style={{ width: `${r.p}%` }} />
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

function Finance({ w, locale }: P) {
  return (
    <div>
      <div className="grid grid-cols-2 gap-2">
        <div className={`${card} p-2`}>
          <p className={`${t} text-black/45`}>{w.income}</p>
          <p className="tabular mt-1 text-[13px] font-semibold text-ink">{eur(32480, locale, 0)}</p>
        </div>
        <div className={`${card} p-2`}>
          <p className={`${t} text-black/45`}>{w.expenses}</p>
          <p className="tabular mt-1 text-[13px] font-semibold text-ink">{eur(19215, locale, 0)}</p>
        </div>
      </div>
      <div className={`${card} mt-2 p-2`}>
        <p className={`${t} text-black/45`}>{w.cash}</p>
        <svg viewBox="0 0 200 60" className="mt-1 h-[62px] w-full" fill="none">
          <path d="M0 48 C20 44 30 30 50 34 S80 20 100 24 S140 10 160 14 S190 6 200 4" stroke="#6D28D9" strokeWidth="2" />
          <path d="M0 52 C20 50 40 46 60 48 S100 40 120 42 S170 36 200 34" stroke="#C9932E" strokeWidth="1.6" strokeDasharray="4 3" />
        </svg>
      </div>
    </div>
  )
}

function Crm({ w }: P) {
  const cols = [
    { h: w.leads, n: 3 },
    { h: w.offers, n: 2 },
    { h: w.won, n: 2 },
  ]
  return (
    <div className="grid grid-cols-3 gap-2">
      {cols.map((c, ci) => (
        <div key={c.h} className="rounded-lg bg-black/[0.035] p-1.5">
          <p className={`${t} mb-1.5 font-medium text-black/60`}>{c.h}</p>
          <div className="space-y-1.5">
            {Array.from({ length: c.n }).map((_, i) => (
              <div key={i} className={`${card} p-1.5`}>
                <span className="block h-1.5 w-4/5 rounded-full bg-black/20" />
                <span className="mt-1.5 block h-1 w-1/2 rounded-full bg-black/10" />
                {ci === 2 && <span className="mt-1.5 block h-1 w-1/3 rounded-full bg-[#3FA37C]" />}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

const weekdays: Record<Locale, string[]> = {
  en: ['Mo', 'Tu', 'We', 'Th', 'Fr'],
  de: ['Mo', 'Di', 'Mi', 'Do', 'Fr'],
  sq: ['Hë', 'Ma', 'Më', 'En', 'Pr'],
}

function Employees({ w, locale }: P) {
  const days = weekdays[locale]
  const shifts = [
    [1, 1, 0, 1, 1],
    [0, 1, 1, 1, 0],
    [1, 0, 1, 0, 1],
  ]
  return (
    <div>
      <div className="grid grid-cols-[36px_repeat(5,1fr)] gap-1">
        <span />
        {days.map((d, i) => (
          <span key={i} className={`${t} text-center text-black/40`}>
            {d}
          </span>
        ))}
        {['Arta', 'Blerim', 'Drita'].map((n, r) => (
          <div key={n} className="contents">
            <span className={`${t} self-center text-black/70`}>{n}</span>
            {shifts[r].map((on, c) => (
              <span key={c} className={`h-5 rounded ${on ? (r === 1 ? 'bg-violet-300' : 'bg-violet-500') : 'bg-black/[0.04]'}`} />
            ))}
          </div>
        ))}
      </div>
      <div className={`${card} mt-2.5 flex items-center justify-between p-2`}>
        <span className={`${t} text-black/70`}>{w.leave}</span>
        <span className="rounded bg-[#E6F4EE] px-1.5 py-0.5 text-[9.5px] text-[#2C7A5B]">{w.approved}</span>
      </div>
    </div>
  )
}

function Booking({ w }: P) {
  const slots = [
    { c: 0, top: 6, h: 26, v: true },
    { c: 0, top: 44, h: 20 },
    { c: 1, top: 18, h: 30, v: true },
    { c: 2, top: 4, h: 18 },
    { c: 2, top: 30, h: 34, v: true },
  ]
  return (
    <div>
      <Head title={w.today} right={<span className={`${t} text-black/40`}>09:00–17:00</span>} />
      <div className="relative grid h-[110px] grid-cols-3 gap-1.5">
        {[0, 1, 2].map((c) => (
          <div key={c} className="relative rounded-md bg-black/[0.03]">
            {slots
              .filter((s) => s.c === c)
              .map((s, i) => (
                <span
                  key={i}
                  className={`absolute inset-x-1 rounded ${s.v ? 'bg-violet-500' : 'border border-violet-300 bg-violet-50'}`}
                  style={{ top: `${s.top}%`, height: `${s.h}%` }}
                />
              ))}
          </div>
        ))}
      </div>
    </div>
  )
}

function Healthcare({ w }: P) {
  const rows = [
    { n: 'A. Krasniqi', time: '09:20', s: 'done' },
    { n: 'L. Berisha', time: '09:40', s: 'room' },
    { n: 'E. Gashi', time: '10:00', s: 'wait' },
    { n: 'F. Hoxha', time: '10:20', s: 'wait' },
  ]
  const style: Record<string, [string, string]> = {
    done: [w.done, 'bg-black/[0.05] text-black/45'],
    room: [w.inRoom, 'bg-violet-100 text-violet-700'],
    wait: [w.waiting, 'bg-[#FBF1DE] text-[#93681C]'],
  }
  return (
    <div className="space-y-1.5">
      {rows.map((r) => (
        <div key={r.n} className={`${card} grid grid-cols-[34px_1fr_auto] items-center gap-2 px-2 py-1.5 ${t}`}>
          <span className="tabular text-black/40">{r.time}</span>
          <span className="truncate text-black/80">{r.n}</span>
          <span className={`rounded px-1.5 py-0.5 text-[9.5px] ${style[r.s][1]}`}>{style[r.s][0]}</span>
        </div>
      ))}
    </div>
  )
}

function Retail({ w, locale }: P) {
  return (
    <div className="grid grid-cols-[1fr_78px] gap-2">
      <div>
        <div className={`${card} mb-1.5 flex items-center gap-1.5 px-2 py-1 ${t} text-black/40`}>
          <svg viewBox="0 0 16 16" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M2 3v10M5 3v10M7 3v10M10 3v10M12 3v10M14 3v10" />
          </svg>
          {w.scan}
        </div>
        <div className="grid grid-cols-3 gap-1.5">
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i} className={`h-[34px] rounded-md ${i === 1 ? 'bg-violet-100 ring-1 ring-violet-400' : 'bg-black/[0.04]'}`} />
          ))}
        </div>
      </div>
      <div className={`${card} flex flex-col p-1.5`}>
        {[2.4, 1.2, 5.9].map((p, i) => (
          <span key={i} className={`tabular flex justify-between ${t} text-black/60`}>
            <span className="h-1 w-6 self-center rounded-full bg-black/15" />
            {eur(p, locale)}
          </span>
        ))}
        <span className="mt-auto pt-1 text-[11px] font-semibold text-ink">{eur(9.5, locale)}</span>
        <span className="mt-1 rounded bg-violet-600 py-1 text-center text-[9.5px] text-white">{w.pay}</span>
      </div>
    </div>
  )
}

function Printing({ w }: P) {
  const stages = [w.design, w.cnc, w.print, w.install]
  const jobs = [
    { n: 'Banner 6×2 m', s: 3 },
    { n: 'Totem LED', s: 2 },
    { n: 'Dibond ×12', s: 1 },
  ]
  return (
    <div>
      <div className="mb-2 grid grid-cols-[1fr_repeat(4,22px)] gap-1">
        <span />
        {stages.map((s) => (
          <span key={s} className="truncate text-center text-[8.5px] text-black/40" title={s}>
            {s.slice(0, 3)}
          </span>
        ))}
      </div>
      <div className="space-y-2">
        {jobs.map((j) => (
          <div key={j.n} className={`grid grid-cols-[1fr_repeat(4,22px)] items-center gap-1 ${t}`}>
            <span className="truncate text-black/75">{j.n}</span>
            {stages.map((_, i) => (
              <span key={i} className="grid place-items-center">
                <span className={`h-2.5 w-2.5 rounded-full ${i < j.s ? 'bg-violet-600' : i === j.s ? 'border-2 border-violet-500 bg-white' : 'bg-black/10'}`} />
              </span>
            ))}
          </div>
        ))}
      </div>
      <div className={`${card} mt-2.5 flex items-center justify-between px-2 py-1.5 ${t}`}>
        <span className="text-black/60">{stages[3]}</span>
        <span className="text-black/40">14:30</span>
      </div>
    </div>
  )
}

function Exchange({ w }: P) {
  const rates = [
    ['USD', '0.9180', '0.9310'],
    ['CHF', '1.0550', '1.0720'],
    ['GBP', '1.1640', '1.1820'],
  ]
  return (
    <div>
      <div className={`grid grid-cols-[1fr_1fr_1fr] gap-1 pb-1.5 ${t} text-black/40`}>
        <span />
        <span className="text-right">{w.buy}</span>
        <span className="text-right">{w.sell}</span>
      </div>
      {rates.map(([c, b, s]) => (
        <div key={c} className={`tabular grid grid-cols-[1fr_1fr_1fr] gap-1 border-t border-black/[0.05] py-1.5 ${t}`}>
          <span className="font-semibold text-ink">{c}</span>
          <span className="text-right text-black/70">{b}</span>
          <span className="text-right text-black/70">{s}</span>
        </div>
      ))}
      <div className="mt-2 rounded-md bg-ink py-1.5 text-center text-[10px] text-white">{w.closing}</div>
    </div>
  )
}

function Dashboards({ w, locale }: P) {
  return (
    <div className="grid grid-cols-[1fr_64px] gap-2">
      <div className={`${card} p-2`}>
        <p className={`${t} text-black/45`}>{w.revenue}</p>
        <p className="tabular text-[13px] font-semibold text-ink">{eur(128400, locale, 0)}</p>
        <div className="mt-2 flex h-[54px] items-end gap-1">
          {[30, 45, 38, 60, 52, 70, 64, 82].map((h, i) => (
            <span key={i} className={`flex-1 rounded-t-sm ${i === 7 ? 'bg-violet-600' : 'bg-violet-200'}`} style={{ height: `${h}%` }} />
          ))}
        </div>
      </div>
      <div className={`${card} grid place-items-center p-1`}>
        <svg viewBox="0 0 36 36" className="h-12 w-12 -rotate-90">
          <circle cx="18" cy="18" r="14" fill="none" stroke="rgba(0,0,0,0.06)" strokeWidth="5" />
          <circle cx="18" cy="18" r="14" fill="none" stroke="#6D28D9" strokeWidth="5" strokeDasharray="58 88" />
          <circle cx="18" cy="18" r="14" fill="none" stroke="#C4B5FD" strokeWidth="5" strokeDasharray="18 88" strokeDashoffset="-58" />
        </svg>
      </div>
    </div>
  )
}

function Internal({ w }: P) {
  const rows = [
    { n: 'Laptop, IT', s: 'pending' },
    { n: 'Berlin, 12.11.', s: 'approved' },
    { n: 'Dibond 3 mm ×40', s: 'pending' },
  ]
  return (
    <div className="space-y-1.5">
      {rows.map((r) => (
        <div key={r.n} className={`${card} flex items-center justify-between gap-2 px-2 py-1.5 ${t}`}>
          <span className="flex min-w-0 flex-col">
            <span className="text-[9px] text-black/40">{w.request}</span>
            <span className="truncate text-black/80">{r.n}</span>
          </span>
          {r.s === 'pending' ? (
            <span className="shrink-0 rounded bg-violet-600 px-1.5 py-0.5 text-[9.5px] text-white">{w.approve}</span>
          ) : (
            <span className="shrink-0 rounded bg-[#E6F4EE] px-1.5 py-0.5 text-[9.5px] text-[#2C7A5B]">{w.approved}</span>
          )}
        </div>
      ))}
    </div>
  )
}

function Mobile({ w }: P) {
  return (
    <div className="flex justify-center gap-3">
      <div className="h-[132px] w-[72px] overflow-hidden rounded-[14px] border-[3px] border-ink bg-[#F7F6F9] p-1.5">
        <span className="mx-auto block h-1 w-6 rounded-full bg-ink/80" />
        <span className="mt-2 block h-1.5 w-3/4 rounded-full bg-ink/70" />
        <span className="mt-2 block h-10 rounded-md bg-[linear-gradient(140deg,#C4B5FD,#9B7BF7)]" />
        <span className="mt-1.5 block h-1 w-full rounded-full bg-black/15" />
        <span className="mt-1 block h-1 w-2/3 rounded-full bg-black/15" />
        <svg viewBox="0 0 60 16" className="mt-1.5 h-3 w-full" fill="none">
          <path d="M2 12 C 10 2, 14 14, 22 6 S 34 12, 40 5 S 52 10, 58 4" stroke="#15121B" strokeWidth="1.4" />
        </svg>
      </div>
      <div className="flex flex-col justify-center gap-1.5">
        <span className="rounded bg-[#E6F4EE] px-1.5 py-0.5 text-[9.5px] text-[#2C7A5B]">{w.synced}</span>
        <span className="rounded bg-black/[0.05] px-1.5 py-0.5 text-[9.5px] text-black/55">{w.offline}</span>
      </div>
    </div>
  )
}

export const miniUis: Record<string, (p: P) => React.JSX.Element> = {
  inventory: Inventory,
  finance: Finance,
  crm: Crm,
  employees: Employees,
  booking: Booking,
  healthcare: Healthcare,
  retail: Retail,
  printing: Printing,
  exchange: Exchange,
  dashboards: Dashboards,
  internal: Internal,
  mobile: Mobile,
}
