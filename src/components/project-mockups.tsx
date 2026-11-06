import type React from 'react'
import type { Locale } from '@/i18n/config'
import type { Dictionary } from '@/i18n/dictionaries/en'
import { eur } from '@/lib/format'
import { WindowFrame } from './ui/frame'

export const MOCK_W = 640
export const MOCK_H = 460

type Mock = Dictionary['mock']
type P = { mock: Mock; locale: Locale }

const lock = (
  <svg viewBox="0 0 12 12" className="h-2.5 w-2.5" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden>
    <rect x="2.5" y="5.5" width="7" height="5" rx="1" />
    <path d="M4 5.5V4a2 2 0 0 1 4 0v1.5" />
  </svg>
)

/** Currency exchange: rates per branch, permanent ledger, daily closing. */
function ExchangeMock({ mock, locale }: P) {
  const w = mock.words
  const tx = [
    ['10:42', w.sell, '500 CHF', 535.5],
    ['10:38', w.buy, '1 200 USD', 1101.6],
    ['10:31', w.buy, '300 GBP', 349.2],
    ['10:24', w.sell, '2 000 CHF', 2144],
    ['10:12', w.buy, '150 USD', 137.7],
  ] as const
  return (
    <div className="absolute inset-0 p-6">
      <WindowFrame title="Klinë — 2" className="h-full" bodyClassName="flex h-[calc(100%-2rem)] text-[11px] text-ink">
        <div className="w-[220px] shrink-0 border-r border-black/[0.06] bg-[#F7F6F9] p-4">
          <div className="flex gap-1">
            <span className="rounded-md bg-ink px-2 py-1 text-[10px] text-white">{mock.app.branch} 1</span>
            <span className="rounded-md bg-black/[0.05] px-2 py-1 text-[10px] text-black/55">{mock.app.branch} 2</span>
          </div>
          <div className="mt-4 grid grid-cols-3 text-[10px] text-black/40">
            <span />
            <span className="text-right">{w.buy}</span>
            <span className="text-right">{w.sell}</span>
          </div>
          {[
            ['USD', '0.9180', '0.9310'],
            ['CHF', '1.0550', '1.0720'],
            ['GBP', '1.1640', '1.1820'],
            ['TRY', '0.0262', '0.0281'],
          ].map(([c, b, s]) => (
            <div key={c} className="tabular grid grid-cols-3 border-t border-black/[0.06] py-2">
              <span className="font-semibold">{c}</span>
              <span className="text-right text-black/70">{b}</span>
              <span className="text-right text-black/70">{s}</span>
            </div>
          ))}
          <div className="mt-4 rounded-lg border border-black/[0.06] bg-white p-3">
            <p className="text-[10px] text-black/45">{w.closing}</p>
            {[
              ['EUR', '0,00'],
              ['CHF', '+5,00'],
              ['USD', '0,00'],
            ].map(([c, d]) => (
              <div key={c} className="mt-1.5 flex justify-between">
                <span>{c}</span>
                <span className={`tabular ${d.startsWith('+') ? 'text-[#93681C]' : 'text-black/50'}`}>{d}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-1 flex-col p-4">
          <div className="flex items-center justify-between">
            <p className="text-[12.5px] font-semibold">{w.today}</p>
            <span className="rounded-full bg-black/[0.05] px-2 py-0.5 text-[10px] text-black/55">{w.offline}</span>
          </div>
          <div className="mt-3 space-y-1.5">
            {tx.map(([time, type, amount, total]) => (
              <div key={time} className="grid grid-cols-[38px_52px_1fr_auto_14px] items-center gap-2 rounded-md border border-black/[0.05] px-2.5 py-2">
                <span className="tabular text-black/40">{time}</span>
                <span className={`rounded px-1.5 py-0.5 text-center text-[9.5px] ${type === w.buy ? 'bg-violet-50 text-violet-700' : 'bg-[#E6F4EE] text-[#2C7A5B]'}`}>{type}</span>
                <span className="tabular font-medium">{amount}</span>
                <span className="tabular text-black/60">{eur(total, locale)}</span>
                <span className="text-black/35">{lock}</span>
              </div>
            ))}
          </div>
          <div className="mt-auto flex items-center justify-between rounded-lg bg-ink px-3 py-2.5 text-white">
            <span className="text-[10.5px] text-white/60">EUR</span>
            <span className="tabular text-[13px] font-semibold">{eur(86240, locale)}</span>
          </div>
        </div>
      </WindowFrame>
    </div>
  )
}

/** Production company: jobs through stages, with the accountant's own area. */
function PrintingMock({ mock, locale }: P) {
  const w = mock.words
  const cols = [
    { h: w.design, cards: ['Totem LED 2 m', 'Logo 3D'] },
    { h: w.cnc, cards: ['Dibond ×12', 'Acrylic 3 mm'] },
    { h: w.print, cards: ['Banner 6×2 m'] },
    { h: w.install, cards: ['Fasadë — Pejë'] },
  ]
  return (
    <div className="absolute inset-0 p-6">
      <WindowFrame title={mock.app.nav[1]} className="h-full" bodyClassName="grid h-[calc(100%-2rem)] grid-cols-[1fr_170px] text-[11px] text-ink">
        <div className="grid grid-cols-4 gap-2 p-4">
          {cols.map((c, ci) => (
            <div key={c.h} className="rounded-lg bg-black/[0.035] p-2">
              <p className="mb-2 flex items-center justify-between text-[10.5px] font-medium text-black/60">
                {c.h}
                <span className="text-black/35">{c.cards.length}</span>
              </p>
              <div className="space-y-2">
                {c.cards.map((card, i) => (
                  <div key={card} className="rounded-md border border-black/[0.06] bg-white p-2 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
                    <p className="font-medium leading-tight">{card}</p>
                    <span className="mt-2 block h-1 overflow-hidden rounded-full bg-black/[0.06]">
                      <span className="block h-full rounded-full bg-violet-500" style={{ width: `${30 + ci * 20 + i * 8}%` }} />
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="border-l border-black/[0.06] bg-[#F7F6F9] p-3">
          <p className="text-[10.5px] font-semibold">{w.accountant}</p>
          <div className="mt-3 space-y-1.5">
            {['INV-0142', 'INV-0141', 'INV-0140', 'EXP-0088', 'EXP-0087'].map((d, i) => (
              <div key={d} className="flex items-center justify-between rounded-md bg-white px-2 py-1.5">
                <span className="tabular">{d}</span>
                <span className="text-[9.5px] text-violet-700">PDF</span>
              </div>
            ))}
          </div>
          <div className="mt-3 rounded-md border border-black/[0.06] bg-white p-2">
            <p className="text-[9.5px] text-black/45">{w.revenue}</p>
            <p className="tabular text-[12.5px] font-semibold">{eur(24860, locale, 0)}</p>
          </div>
        </div>
      </WindowFrame>
    </div>
  )
}

/** Business platform: a sale at the till appears in the accountant's books. */
function PlatformMock({ mock, locale }: P) {
  const w = mock.words
  return (
    <div className="absolute inset-0 grid grid-cols-[1.15fr_1fr] gap-4 p-6">
      <WindowFrame title="POS" bodyClassName="p-3 text-[11px] text-ink">
        <div className="grid grid-cols-3 gap-1.5">
          {['Espresso', 'Macchiato', 'Çaj', 'Byrek', 'Ujë', 'Sallatë'].map((n, i) => (
            <span key={n} className={`rounded-md px-2 py-3 text-[10.5px] ${i === 1 ? 'bg-violet-100 ring-1 ring-violet-400' : 'bg-black/[0.04]'}`}>
              {n}
            </span>
          ))}
        </div>
        <div className="mt-3 space-y-1.5 border-t border-black/[0.06] pt-3">
          {[
            ['2 × Macchiato', 2.4],
            ['1 × Byrek', 1.5],
            ['1 × Ujë', 0.8],
          ].map(([n, p]) => (
            <div key={n as string} className="flex justify-between">
              <span className="text-black/70">{n}</span>
              <span className="tabular">{eur(p as number, locale)}</span>
            </div>
          ))}
        </div>
        <div className="mt-3 flex items-center justify-between rounded-md bg-violet-600 px-3 py-2 text-white">
          <span className="text-[10.5px]">{w.pay}</span>
          <span className="tabular font-semibold">{eur(4.7, locale)}</span>
        </div>
      </WindowFrame>
      <WindowFrame tone="dark" title={w.accountant} bodyClassName="p-3 text-[11px] text-white">
        <span className="flex w-fit items-center gap-1.5 rounded-full bg-[#3FA37C]/15 px-2 py-0.5 text-[10px] text-[#7FD3AE]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#3FA37C]" />
          {w.liveSync}
        </span>
        <div className="mt-3 space-y-1.5">
          {[
            ['13:02', eur(4.7, locale), true],
            ['12:58', eur(12.3, locale), false],
            ['12:51', eur(6.9, locale), false],
            ['12:44', eur(21.0, locale), false],
          ].map(([time, amount, fresh]) => (
            <div
              key={time as string}
              className={`flex justify-between rounded-md px-2 py-1.5 ${fresh ? 'bg-violet-500/20 ring-1 ring-violet-400/60' : 'bg-white/[0.04]'}`}
            >
              <span className="tabular text-white/50">{time}</span>
              <span className="tabular">{amount}</span>
            </div>
          ))}
        </div>
        <div className="mt-3 rounded-md bg-white/[0.04] p-2">
          <p className="text-[10px] text-white/45">{mock.svc.vat}</p>
          <p className="tabular text-[13px] font-semibold">{eur(1842.6, locale)}</p>
        </div>
      </WindowFrame>
    </div>
  )
}

/** Cosmetics retail: barcode checkout and price built up from cost. */
function CosmeticsMock({ mock, locale }: P) {
  const w = mock.words
  const build = [
    [w.buy, 6.4],
    [w.customs, 0.64],
    [w.margin, 3.2],
    [mock.svc.vat, 1.86],
  ] as const
  return (
    <div className="absolute inset-0 p-6">
      <WindowFrame title="POS" className="h-full" bodyClassName="grid h-[calc(100%-2rem)] grid-cols-[1fr_200px] text-[11px] text-ink">
        <div className="p-4">
          <div className="flex items-center gap-2 rounded-lg border-2 border-violet-500 px-3 py-2 text-black/50">
            <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
              <path d="M2 3v10M5 3v10M7 3v10M10 3v10M12 3v10M14 3v10" />
            </svg>
            <span className="tabular">3800123456781</span>
            <span className="ml-auto h-3 w-px animate-blink bg-violet-600" />
          </div>
          <div className="mt-3 space-y-1.5">
            {[
              ['Shampoo 250 ml', 1, 8.9],
              ['Conditioner 200 ml', 2, 12.5],
              ['Serum 30 ml', 1, 21.0],
              ['Lipstick', 3, 4.2],
            ].map(([n, q, p]) => (
              <div key={n as string} className="grid grid-cols-[1fr_28px_64px] items-center rounded-md border border-black/[0.05] px-2.5 py-2">
                <span>{n}</span>
                <span className="tabular text-black/45">×{q}</span>
                <span className="tabular text-right">{eur((q as number) * (p as number), locale)}</span>
              </div>
            ))}
          </div>
          <div className="mt-3 flex items-center justify-between rounded-lg bg-ink px-3 py-2.5 text-white">
            <span className="text-[10.5px] text-white/60">{w.total}</span>
            <span className="tabular text-[14px] font-semibold">{eur(67.5, locale)}</span>
          </div>
        </div>
        <div className="border-l border-black/[0.06] bg-[#F7F6F9] p-4">
          <p className="text-[10.5px] font-semibold">Serum 30 ml</p>
          <div className="mt-3 space-y-2">
            {build.map(([label, v]) => (
              <div key={label} className="flex justify-between">
                <span className="text-black/55">{label}</span>
                <span className="tabular">{eur(v, locale)}</span>
              </div>
            ))}
          </div>
          <div className="mt-3 flex justify-between border-t border-black/10 pt-2 text-[12px] font-semibold">
            <span>{mock.svc.total}</span>
            <span className="tabular text-violet-700">{eur(12.1, locale)}</span>
          </div>
          <div className="mt-4 rounded-md bg-white p-2 text-[10px] text-black/55">Excel → {w.accountant}</div>
        </div>
      </WindowFrame>
    </div>
  )
}

export const projectMockups: Record<string, (p: P) => React.JSX.Element> = {
  exchange: ExchangeMock,
  printing: PrintingMock,
  platform: PlatformMock,
  cosmetics: CosmeticsMock,
}
