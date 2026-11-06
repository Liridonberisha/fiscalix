'use client'

import { useEffect, useState } from 'react'

const zones = ['Europe/Belgrade', 'Europe/Berlin', 'Europe/Zurich', 'Europe/Vienna']

function timeIn(zone: string) {
  try {
    return new Intl.DateTimeFormat('en-GB', { hour: '2-digit', minute: '2-digit', hour12: false, timeZone: zone }).format(new Date())
  } catch {
    return '--:--'
  }
}

/**
 * Four clocks that always agree — the point being made.
 * Times are filled in after mount so server and browser markup match.
 */
export function LocalClocks({ label, cities }: { label: string; cities: string[] }) {
  const [times, setTimes] = useState<string[] | null>(null)

  useEffect(() => {
    const tick = () => setTimes(zones.map(timeIn))
    tick()
    const id = window.setInterval(tick, 15_000)
    return () => window.clearInterval(id)
  }, [])

  return (
    <div className="mt-6 flex flex-col gap-4 rounded-[22px] border border-white/10 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-7">
      <p className="t-label text-white/50">{label}</p>
      <ul className="grid grid-cols-2 gap-x-10 gap-y-4 sm:flex sm:gap-12">
        {cities.map((city, i) => (
          <li key={city} className="flex flex-col">
            <span className="t-small text-white/55">{city}</span>
            <time className="tabular text-[1.75rem] font-semibold leading-none tracking-[-0.02em]" style={{ fontStretch: '110%' }} aria-live="off">
              {times ? times[i] : '--:--'}
            </time>
          </li>
        ))}
      </ul>
    </div>
  )
}
