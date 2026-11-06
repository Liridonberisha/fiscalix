import type { Locale } from '@/i18n/config'
import type { Dictionary } from '@/i18n/dictionaries/en'
import { eur } from '@/lib/format'

export const SCREEN_W = 1180
export const SCREEN_H = 700

type AppMock = Dictionary['mock']['app']

const WEEKS = [38, 44, 41, 52, 49, 58, 55, 63, 61, 70, 68, 79]

const ROWS = [
  { id: '#2041', customer: 'Dardania Market', branch: 'Klinë', status: 'paid', total: 1240 },
  { id: '#2040', customer: 'Rugova Foods', branch: 'Pejë', status: 'pending', total: 860.5 },
  { id: '#2039', customer: 'Arta Studio', branch: 'Prishtinë', status: 'ready', total: 2315 },
  { id: '#2038', customer: 'Kodra Print', branch: 'Klinë', status: 'paid', total: 412.8 },
  { id: '#2037', customer: 'Ilir Auto', branch: 'Gjakovë', status: 'pending', total: 1975 },
] as const

const STOCK = [
  { name: 'PVC 5 mm', qty: '12', pct: 18 },
  { name: 'Dibond 3 mm', qty: '4', pct: 8 },
  { name: 'Vinyl 1.37 m', qty: '2', pct: 5 },
  { name: 'Acrylic 3 mm', qty: '9', pct: 14 },
]

/** The finished software: a light operations dashboard. Fixed 1180×700 canvas. */
export function AppScreen({ mock, low, locale }: { mock: AppMock; low: string; locale: Locale }) {
  const statusStyle: Record<string, string> = {
    paid: 'bg-[#E6F4EE] text-[#2C7A5B]',
    pending: 'bg-[#FBF1DE] text-[#93681C]',
    ready: 'bg-violet-50 text-violet-700',
  }
  return (
    <div
      className="flex h-full w-full overflow-hidden rounded-[18px] bg-white text-[13px] text-ink shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_40px_80px_-40px_rgba(0,0,0,0.8)]"
      style={{ width: SCREEN_W, height: SCREEN_H }}
    >
      {/* Sidebar */}
      <aside className="flex w-[208px] shrink-0 flex-col border-r border-black/[0.06] bg-[#F7F6F9] px-4 py-5">
        <div className="flex items-center gap-2.5 px-2">
          <span className="grid h-7 w-7 place-items-center rounded-lg bg-ink text-[12px] font-semibold text-violet-300">K</span>
          <div className="leading-tight">
            <p className="text-[13px] font-semibold">Kodra Group</p>
            <p className="text-[11px] text-black/45">Klinë HQ</p>
          </div>
        </div>
        <nav className="mt-7 space-y-1">
          {mock.nav.map((item, i) => (
            <div
              key={item}
              className={`flex items-center gap-2.5 rounded-lg px-2.5 py-2 ${i === 0 ? 'bg-white font-medium shadow-[0_1px_2px_rgba(0,0,0,0.06)]' : 'text-black/55'}`}
            >
              <span className={`h-3.5 w-3.5 rounded-[4px] ${i === 0 ? 'bg-violet-600' : 'border border-black/20'}`} />
              {item}
            </div>
          ))}
        </nav>
      </aside>

      {/* Main */}
      <div className="flex min-w-0 flex-1 flex-col">
        <div className="flex h-[60px] items-center gap-4 border-b border-black/[0.06] px-6">
          <p className="text-[15px] font-semibold">{mock.nav[0]}</p>
          <div className="ml-4 flex h-9 w-[280px] items-center gap-2 rounded-lg border border-black/[0.08] px-3 text-black/35">
            <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.6">
              <circle cx="7" cy="7" r="4.5" />
              <path d="m10.5 10.5 3 3" />
            </svg>
            {mock.search}
          </div>
          <div className="ml-auto flex items-center gap-3">
            <span className="flex items-center gap-1.5 rounded-full bg-[#E6F4EE] px-2.5 py-1 text-[11px] font-medium text-[#2C7A5B]">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#3FA37C] opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#3FA37C]" />
              </span>
              {mock.live}
            </span>
            <span className="rounded-lg bg-violet-600 px-3.5 py-2 text-[12px] font-medium text-white">+ {mock.newOrder}</span>
          </div>
        </div>

        <div className="flex flex-1 flex-col gap-4 bg-[#FBFBFC] p-6">
          {/* KPIs */}
          <div className="grid grid-cols-3 gap-4">
            <Kpi label={mock.kpis[0]} value="128" note="+12" noteClass="text-[#2C7A5B]" />
            <Kpi label={mock.kpis[1]} value={eur(48210, locale, 0)} spark />
            <Kpi label={mock.kpis[2]} value="7" note={low} noteClass="text-[#93681C]" />
          </div>

          {/* Chart + stock */}
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-7 rounded-xl border border-black/[0.06] bg-white p-5">
              <div className="flex items-baseline justify-between">
                <p className="font-medium">{mock.chart}</p>
                <p className="text-[11px] text-black/40">12 w</p>
              </div>
              <div className="mt-4 flex h-[118px] items-end gap-2.5">
                {WEEKS.map((h, i) => (
                  <span
                    key={i}
                    className={`flex-1 rounded-t-[4px] ${i === WEEKS.length - 1 ? 'bg-violet-600' : 'bg-violet-200'}`}
                    style={{ height: `${h + 20}%`, maxHeight: '100%' }}
                  />
                ))}
              </div>
            </div>
            <div className="col-span-5 rounded-xl border border-black/[0.06] bg-white p-5">
              <p className="font-medium">{mock.nav[2]}</p>
              <ul className="mt-3 space-y-2.5">
                {STOCK.map((s) => (
                  <li key={s.name} className="grid grid-cols-[1fr_auto] items-center gap-x-3 gap-y-1">
                    <span className="text-black/70">{s.name}</span>
                    <span className="tabular text-[12px] text-black/45">{s.qty}</span>
                    <span className="col-span-2 h-1 overflow-hidden rounded-full bg-black/[0.06]">
                      <span className="block h-full rounded-full bg-[#C9932E]" style={{ width: `${s.pct * 3}%` }} />
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Table */}
          <div className="flex-1 rounded-xl border border-black/[0.06] bg-white">
            <p className="px-5 pb-2 pt-4 font-medium">{mock.table}</p>
            <table className="w-full text-left">
              <thead>
                <tr className="text-[11px] text-black/40">
                  {mock.cols.map((c, i) => (
                    <th key={c} className={`px-5 py-1.5 font-normal ${i === 4 ? 'text-right' : ''}`}>
                      {c}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {ROWS.map((r) => (
                  <tr key={r.id} className="border-t border-black/[0.05]">
                    <td className="tabular px-5 py-[7px] text-black/50">{r.id}</td>
                    <td className="px-5 py-[7px] font-medium">{r.customer}</td>
                    <td className="px-5 py-[7px] text-black/60">{r.branch}</td>
                    <td className="px-5 py-[7px]">
                      <span className={`rounded-md px-2 py-0.5 text-[11px] font-medium ${statusStyle[r.status]}`}>
                        {mock.status[r.status]}
                      </span>
                    </td>
                    <td className="tabular px-5 py-[7px] text-right">{eur(r.total, locale)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

function Kpi({ label, value, note, noteClass, spark }: { label: string; value: string; note?: string; noteClass?: string; spark?: boolean }) {
  return (
    <div className="rounded-xl border border-black/[0.06] bg-white px-5 py-4">
      <p className="text-[12px] text-black/50">{label}</p>
      <div className="mt-1.5 flex items-end justify-between">
        <p className="tabular text-[26px] font-semibold tracking-[-0.02em]" style={{ fontStretch: '108%' }}>
          {value}
        </p>
        {note && <span className={`mb-1 text-[12px] font-medium ${noteClass}`}>{note}</span>}
        {spark && (
          <svg viewBox="0 0 90 28" className="mb-1 h-7 w-[90px]" fill="none">
            <path d="M1 22 L12 18 L23 20 L34 13 L45 15 L56 9 L67 11 L78 5 L89 3" stroke="#6D28D9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </div>
    </div>
  )
}

/** The idea: the same screen as a marker sketch on paper, with sticky notes. */
export function SketchScreen({ notes }: { notes: string[] }) {
  const line = 'stroke-[#15121B]/55'
  return (
    <div
      className="relative overflow-hidden rounded-[18px] bg-porcelain"
      style={{
        width: SCREEN_W,
        height: SCREEN_H,
        backgroundImage: 'radial-gradient(rgba(21,18,27,0.13) 1px, transparent 1px)',
        backgroundSize: '22px 22px',
      }}
    >
      <svg viewBox={`0 0 ${SCREEN_W} ${SCREEN_H}`} className="absolute inset-0 h-full w-full" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <g className={line} strokeWidth="2" strokeDasharray="7 7">
          {/* sidebar */}
          <rect x="14" y="14" width="186" height="672" rx="14" />
          {/* top bar */}
          <path d="M222 66 H1164" />
          {/* KPIs */}
          <rect x="230" y="86" width="296" height="92" rx="12" />
          <rect x="544" y="86" width="296" height="92" rx="12" />
          <rect x="858" y="86" width="296" height="92" rx="12" />
          {/* chart */}
          <rect x="230" y="196" width="534" height="196" rx="12" />
          {/* stock */}
          <rect x="782" y="196" width="372" height="196" rx="12" />
          {/* table */}
          <rect x="230" y="410" width="924" height="270" rx="12" />
        </g>
        <g className={line} strokeWidth="2.4">
          {/* sidebar scribbles */}
          <path d="M40 50 h40" />
          <path d="M40 110 c18 -3 40 3 70 0 M40 150 c22 2 44 -2 58 0 M40 190 c18 -2 52 2 76 0 M40 230 c20 2 38 -2 50 0 M40 270 c24 -1 40 2 62 0" />
          {/* top bar */}
          <path d="M240 38 c20 -2 50 2 70 0" />
          <rect x="350" y="24" width="250" height="28" rx="8" strokeDasharray="5 6" />
          <rect x="1040" y="22" width="110" height="32" rx="9" />
          <path d="M1062 38 h66" />
          {/* KPI content */}
          <path d="M250 112 c20 -2 40 2 64 0 M564 112 c22 2 44 -2 70 0 M878 112 c18 -1 34 2 52 0" />
          <path d="M250 150 c12 -8 24 8 36 0 s24 -8 36 0 M564 150 c14 -8 26 8 40 0 s24 -8 40 0 s24 -8 34 0 M878 150 c10 -8 20 8 28 0" strokeWidth="3.2" />
          {/* chart: hand-drawn bars */}
          <path d="M262 370 V320 M300 370 V306 M338 370 V312 M376 370 V290 M414 370 V296 M452 370 V276 M490 370 V282 M528 370 V262 M566 370 V266 M604 370 V246 M642 370 V250 M680 370 V228 M720 370 V222" strokeWidth="9" className="stroke-[#15121B]/25" />
          <path d="M250 372 H744" />
          <path d="M250 222 c20 -2 50 2 80 0" />
          {/* stock rows */}
          <path d="M802 230 c20 -2 40 2 60 0 M802 272 c22 2 42 -2 70 0 M802 314 c18 -2 34 2 54 0 M802 356 c20 2 44 -2 66 0" />
          <path d="M802 248 h300 M802 290 h300 M802 332 h300 M802 374 h300" className="stroke-[#15121B]/20" strokeWidth="4" />
          {/* table rows */}
          <path d="M250 440 c20 -2 50 2 90 0" />
          {[480, 522, 564, 606, 648].map((y) => (
            <path key={y} d={`M250 ${y} h40 M330 ${y} c20 -2 60 2 110 0 M520 ${y} c16 -1 30 1 50 0 M680 ${y} h56 M1060 ${y} h70`} />
          ))}
          {/* arrows from notes */}
          <path d="M1000 470 C 990 430, 960 410, 900 420" strokeWidth="2" />
          <path d="M904 410 l-8 10 l12 4" strokeWidth="2" />
          <path d="M620 168 C 640 196, 690 200, 720 186" strokeWidth="2" />
          <path d="M714 180 l8 6 l-9 6" strokeWidth="2" />
        </g>
      </svg>

      {/* Sticky notes */}
      <Note className="left-[420px] top-[498px] -rotate-[3deg]">{notes[0]}</Note>
      <Note className="left-[470px] top-[118px] rotate-[2.5deg]">{notes[1]}</Note>
      <Note className="left-[900px] top-[440px] -rotate-[2deg]">{notes[2]}</Note>
      <Note className="left-[36px] top-[420px] rotate-[3deg] !w-[150px]">{notes[3]}</Note>
    </div>
  )
}

function Note({ children, className = '' }: { children: string; className?: string }) {
  return (
    <p
      className={`absolute w-[176px] rounded-[3px] bg-violet-100 px-4 pb-5 pt-4 text-[17px] font-medium leading-snug text-ink shadow-[0_10px_20px_-10px_rgba(21,18,27,0.35)] ${className}`}
      style={{ fontStretch: '86%' }}
    >
      {children}
    </p>
  )
}
