import { NextRequest, NextResponse } from 'next/server'
import { defaultLocale, isLocale, localeCookie, type Locale } from '@/i18n/config'

function detectLocale(request: NextRequest): Locale {
  const cookie = request.cookies.get(localeCookie)?.value
  if (isLocale(cookie)) return cookie

  const header = request.headers.get('accept-language') || ''
  const preferred = header
    .split(',')
    .map((part) => {
      const [tag, q] = part.trim().split(';q=')
      return { lang: tag.toLowerCase().split('-')[0], q: q ? parseFloat(q) : 1 }
    })
    .sort((a, b) => b.q - a.q)

  for (const { lang } of preferred) {
    if (isLocale(lang)) return lang
    // Swiss German browsers sometimes send "gsw"
    if (lang === 'gsw') return 'de'
  }
  return defaultLocale
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const first = pathname.split('/')[1]
  if (isLocale(first)) return NextResponse.next()

  const locale = detectLocale(request)
  const url = request.nextUrl.clone()
  url.pathname = `/${locale}${pathname === '/' ? '' : pathname}`
  return NextResponse.redirect(url, 307)
}

export const config = {
  // Skip Next internals, the API and any file with an extension (icons, images, sitemap, robots)
  matcher: ['/((?!_next|api|.*\\..*).*)'],
}
