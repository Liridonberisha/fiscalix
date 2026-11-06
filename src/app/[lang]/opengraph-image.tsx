import { ImageResponse } from 'next/og'
import { isLocale, locales } from '@/i18n/config'
import { getDictionary } from '@/i18n/get-dictionary'
import { WORDMARK_PATHS, WORDMARK_VIEWBOX } from '@/components/wordmark'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export const alt = 'Fiscalix — Custom software development studio'

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }))
}

export default async function OpenGraphImage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const dict = await getDictionary(isLocale(lang) ? lang : 'sq')

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#15121B',
          color: '#ffffff',
          padding: '72px 80px',
        }}
      >
        <svg viewBox={WORDMARK_VIEWBOX} width={250} height={56} fill="#ffffff">
          {WORDMARK_PATHS.map((d) => (
            <path key={d.slice(0, 16)} d={d} />
          ))}
        </svg>
        <div style={{ display: 'flex', fontSize: 68, lineHeight: 1.04, letterSpacing: '-0.035em', fontWeight: 600, maxWidth: 980 }}>
          {dict.hero.headline}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 26, color: 'rgba(255,255,255,0.6)' }}>
          <span>{dict.meta.home.title.split('—')[1]?.trim() ?? ''}</span>
          <span style={{ display: 'flex', width: 140, height: 10, borderRadius: 999, background: '#7C3AED' }} />
        </div>
      </div>
    ),
    size,
  )
}
