'use client'

import Link from 'next/link'
import { AnimatePresence, m } from 'framer-motion'
import { useEffect, useId, useRef, useState, type FormEvent, type ReactNode } from 'react'
import type { Locale } from '@/i18n/config'
import type { Dictionary } from '@/i18n/dictionaries/en'
import { contactSchema, isProjectType, projectTypes, type ContactField } from '@/lib/contact-schema'
import { whatsappLink } from '@/lib/site'
import { EASE } from './motion'

type Form = Dictionary['contact']['form']
type Values = {
  name: string
  email: string
  company: string
  country: string
  projectType: string
  budget: string
  description: string
  website: string
}
const empty: Values = { name: '', email: '', company: '', country: '', projectType: '', budget: '', description: '', website: '' }
const fieldOrder: ContactField[] = ['name', 'email', 'country', 'projectType', 'description']

function validate(values: Values, locale: Locale) {
  const result = contactSchema.safeParse({ ...values, locale })
  const errors: Partial<Record<ContactField, true>> = {}
  if (!result.success) {
    for (const issue of result.error.issues) {
      const key = issue.path[0] as ContactField
      if (fieldOrder.includes(key)) errors[key] = true
    }
  }
  return errors
}

export function ContactForm({ locale, form }: { locale: Locale; form: Form }) {
  const [values, setValues] = useState<Values>(empty)
  const [errors, setErrors] = useState<Partial<Record<ContactField, true>>>({})
  const [submitted, setSubmitted] = useState(false)
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'failed'>('idle')
  const [sentTo, setSentTo] = useState('')
  const formRef = useRef<HTMLFormElement>(null)
  const resultRef = useRef<HTMLDivElement>(null)

  // Preselect the project type from links such as /contact?type=consultation
  useEffect(() => {
    const type = new URLSearchParams(window.location.search).get('type')
    if (isProjectType(type)) setValues((v) => ({ ...v, projectType: type }))
  }, [])

  useEffect(() => {
    if (status === 'sent' || status === 'failed') resultRef.current?.focus()
  }, [status])

  const set = (key: keyof Values) => (e: { target: { value: string } }) => {
    const next = { ...values, [key]: e.target.value }
    setValues(next)
    if (submitted) setErrors(validate(next, locale))
  }

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    const found = validate(values, locale)
    setErrors(found)
    const first = fieldOrder.find((f) => found[f])
    if (first) {
      formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus()
      return
    }
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...values, locale }),
      })
      if (!res.ok) throw new Error(String(res.status))
      setSentTo(values.email)
      setStatus('sent')
    } catch {
      setStatus('failed')
    }
  }

  // Same details, ready to paste into WhatsApp if email delivery fails
  const details = [
    `${form.name}: ${values.name}`,
    values.company ? `${form.company}: ${values.company}` : null,
    `${form.country}: ${values.country}`,
    isProjectType(values.projectType) ? `${form.projectType}: ${form.types[values.projectType]}` : null,
    values.budget ? `${form.budget}: ${values.budget}` : null,
  ].filter(Boolean)
  const whatsappText = [form.whatsappIntro, '', ...details, '', values.description].join('\n')

  const reset = () => {
    setValues(empty)
    setErrors({})
    setSubmitted(false)
    setStatus('idle')
  }

  const hasErrors = Object.keys(errors).length > 0

  return (
    <div className="relative rounded-[22px] bg-paper p-6 text-ink sm:p-9">
      <AnimatePresence mode="wait" initial={false}>
        {status === 'sent' ? (
          <m.div
            key="sent"
            ref={resultRef}
            tabIndex={-1}
            role="status"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="flex min-h-[28rem] flex-col items-start justify-center outline-none"
          >
            <m.span
              className="grid h-14 w-14 place-items-center rounded-full bg-violet-600 text-white"
              initial={{ scale: 0.6 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 260, damping: 18, delay: 0.1 }}
              aria-hidden
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <m.path d="m5 12.5 4.5 4.5L19 7.5" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.5, delay: 0.25 }} />
              </svg>
            </m.span>
            <h3 className="t-h3 mt-8 max-w-[22ch]">{form.success.title}</h3>
            <p className="t-body mt-3 max-w-[46ch] text-muted">{form.success.text.replace('{email}', sentTo)}</p>
            <button type="button" onClick={reset} className="btn btn-ghost-light btn-sm mt-8">
              {form.success.again}
            </button>
          </m.div>
        ) : (
          <m.form
            key="form"
            ref={formRef}
            noValidate
            onSubmit={onSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            aria-describedby={hasErrors ? 'form-error-summary' : undefined}
          >
            <h3 className="t-h4">{form.title}</h3>

            {hasErrors && (
              <p id="form-error-summary" role="alert" className="mt-4 rounded-lg bg-[#FBEDEE] px-4 py-3 t-small text-[#9B2335]">
                {form.errors.summary}
              </p>
            )}

            {status === 'failed' && (
              <div ref={resultRef} tabIndex={-1} role="alert" className="mt-4 rounded-xl border border-[#E8C7CB] bg-[#FBEDEE] p-5 outline-none">
                <p className="t-h4 text-[#7A1C2B]">{form.failure.title}</p>
                <p className="t-small mt-1.5 text-[#7A1C2B]/80">{form.failure.text}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <a href={whatsappLink(whatsappText)} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
                    {form.failure.whatsapp}
                  </a>
                  <button type="submit" className="btn btn-ghost-light btn-sm">
                    {form.failure.retry}
                  </button>
                </div>
              </div>
            )}

            <div className="mt-7 grid gap-x-5 gap-y-6 sm:grid-cols-2">
              <Field label={form.name} error={errors.name && form.errors.name} required>
                {(p) => <input {...p} name="name" autoComplete="name" placeholder={form.namePh} value={values.name} onChange={set('name')} />}
              </Field>
              <Field label={form.email} error={errors.email && form.errors.email} required>
                {(p) => (
                  <input {...p} name="email" type="email" inputMode="email" autoComplete="email" placeholder={form.emailPh} value={values.email} onChange={set('email')} />
                )}
              </Field>
              <Field label={form.company} optional={form.optional}>
                {(p) => <input {...p} name="company" autoComplete="organization" placeholder={form.companyPh} value={values.company} onChange={set('company')} />}
              </Field>
              <Field label={form.country} error={errors.country && form.errors.country} required>
                {(p) => (
                  <>
                    <input
                      {...p}
                      name="country"
                      autoComplete="country-name"
                      list="country-options"
                      placeholder={form.countryPh}
                      value={values.country}
                      onChange={set('country')}
                    />
                    <datalist id="country-options">
                      {form.countries.map((c) => (
                        <option key={c} value={c} />
                      ))}
                    </datalist>
                  </>
                )}
              </Field>
              <Field label={form.projectType} error={errors.projectType && form.errors.projectType} required>
                {(p) => (
                  <select {...p} name="projectType" value={values.projectType} onChange={set('projectType')} className={selectClass(p.className, values.projectType)} style={{ backgroundImage: chevron }}>
                    <option value="" disabled>
                      {form.choose}
                    </option>
                    {projectTypes.map((t) => (
                      <option key={t} value={t}>
                        {form.types[t]}
                      </option>
                    ))}
                  </select>
                )}
              </Field>
              <Field label={form.budget} optional={form.optional}>
                {(p) => (
                  <select {...p} name="budget" value={values.budget} onChange={set('budget')} className={selectClass(p.className, values.budget)} style={{ backgroundImage: chevron }}>
                    <option value="">{form.choose}</option>
                    {form.budgets.map((b) => (
                      <option key={b} value={b}>
                        {b}
                      </option>
                    ))}
                  </select>
                )}
              </Field>
              <div className="sm:col-span-2">
                <Field label={form.description} error={errors.description && form.errors.description} required>
                  {(p) => (
                    <textarea
                      {...p}
                      name="description"
                      rows={5}
                      placeholder={form.descriptionPh}
                      value={values.description}
                      onChange={set('description')}
                      className={`${p.className} min-h-[9rem] resize-y py-3`}
                    />
                  )}
                </Field>
              </div>
              {/* Honeypot */}
              <div aria-hidden className="absolute -left-[9999px] h-px w-px overflow-hidden">
                <label>
                  Website
                  <input tabIndex={-1} autoComplete="off" name="website" value={values.website} onChange={set('website')} />
                </label>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <p className="t-small max-w-[36ch] text-muted">
                {form.consent}{' '}
                <Link href={`/${locale}/legal#privacy`} className="link-under text-ink">
                  {form.consentLink}
                </Link>
                .
              </p>
              <button type="submit" disabled={status === 'sending'} className="btn btn-primary shrink-0 disabled:cursor-wait disabled:opacity-80">
                {status === 'sending' && (
                  <span aria-hidden className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                )}
                {status === 'sending' ? form.sending : form.submit}
              </button>
            </div>
          </m.form>
        )}
      </AnimatePresence>
    </div>
  )
}

const chevron =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='none' stroke='%2315121B' stroke-width='1.5'%3E%3Cpath d='m4 6 4 4 4-4'/%3E%3C/svg%3E\")"

function selectClass(base: string, value: string) {
  return `${base} appearance-none bg-[length:16px] bg-[right_1rem_center] bg-no-repeat pr-11 [&>option]:text-ink ${value ? '' : 'text-ink/40'}`
}

type FieldProps = {
  id: string
  className: string
  'aria-invalid'?: boolean
  'aria-describedby'?: string
  'aria-required'?: boolean
}

function Field({
  label,
  error,
  required,
  optional,
  children,
}: {
  label: string
  error?: string | false
  required?: boolean
  optional?: string
  children: (props: FieldProps) => ReactNode
}) {
  const id = useId()
  const errorId = `${id}-error`
  const className = [
    'w-full min-h-12 rounded-xl border bg-white px-4 text-[1rem] text-ink outline-none transition-[border-color,box-shadow] duration-300 placeholder:text-ink/35',
    'focus:border-violet-600 focus:shadow-[0_0_0_4px_rgba(124,58,237,0.14)]',
    error ? 'border-[#C2414F]' : 'border-ink/15 hover:border-ink/30',
  ].join(' ')

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="t-label text-ink/80">
        {label}
        {optional && <span className="font-normal text-ink/45"> ({optional})</span>}
      </label>
      {children({
        id,
        className,
        'aria-invalid': error ? true : undefined,
        'aria-describedby': error ? errorId : undefined,
        'aria-required': required || undefined,
      })}
      <AnimatePresence initial={false}>
        {error && (
          <m.p
            id={errorId}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="t-small text-[#B23A47]"
          >
            {error}
          </m.p>
        )}
      </AnimatePresence>
    </div>
  )
}
