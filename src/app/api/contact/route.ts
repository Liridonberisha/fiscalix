import { NextResponse } from 'next/server'
import { contactSchema } from '@/lib/contact-schema'
import { site } from '@/lib/site'

export const runtime = 'nodejs'

// Best-effort rate limit per server instance: 5 enquiries per 10 minutes per IP
const WINDOW_MS = 10 * 60 * 1000
const LIMIT = 5
const hits = new Map<string, number[]>()

function rateLimited(ip: string) {
  const now = Date.now()
  const recent = (hits.get(ip) || []).filter((t) => now - t < WINDOW_MS)
  recent.push(now)
  hits.set(ip, recent)
  if (hits.size > 5000) hits.clear()
  return recent.length > LIMIT
}

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c] as string)
}

export async function POST(request: Request) {
  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ ok: false, error: 'invalid' }, { status: 400 })
  }

  const parsed = contactSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: 'invalid', fields: parsed.error.issues.map((i) => i.path[0]) },
      { status: 400 },
    )
  }
  const data = parsed.data

  // Bots fill the hidden field — accept silently, send nothing
  if (data.website) return NextResponse.json({ ok: true })

  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown'
  if (rateLimited(ip)) {
    return NextResponse.json({ ok: false, error: 'rate_limited' }, { status: 429 })
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.warn('[contact] RESEND_API_KEY is not set — enquiry not delivered')
    return NextResponse.json({ ok: false, error: 'not_configured' }, { status: 503 })
  }

  const to = process.env.CONTACT_TO_EMAIL || site.email
  const from = process.env.CONTACT_FROM_EMAIL || 'Fiscalix Website <onboarding@resend.dev>'

  const rows: [string, string][] = [
    ['Name', data.name],
    ['Email', data.email],
    ['Company', data.company || '—'],
    ['Country', data.country],
    ['Project type', data.projectType],
    ['Budget', data.budget || '—'],
    ['Language', data.locale],
  ]
  const text = `${rows.map(([k, v]) => `${k}: ${v}`).join('\n')}\n\n${data.description}`
  const html = `<table cellpadding="6" style="font-family:system-ui,sans-serif;font-size:14px;border-collapse:collapse">${rows
    .map(([k, v]) => `<tr><td style="color:#625C6E">${k}</td><td><strong>${escapeHtml(v)}</strong></td></tr>`)
    .join('')}</table><p style="font-family:system-ui,sans-serif;font-size:15px;line-height:1.6;white-space:pre-wrap">${escapeHtml(
    data.description,
  )}</p>`

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: data.email,
        subject: `New project enquiry: ${data.name}${data.company ? ` (${data.company})` : ''}`,
        text,
        html,
      }),
    })
    if (!res.ok) {
      console.error('[contact] Resend error', res.status, await res.text().catch(() => ''))
      return NextResponse.json({ ok: false, error: 'send_failed' }, { status: 502 })
    }
  } catch (error) {
    console.error('[contact] Network error', error)
    return NextResponse.json({ ok: false, error: 'send_failed' }, { status: 502 })
  }

  return NextResponse.json({ ok: true })
}
