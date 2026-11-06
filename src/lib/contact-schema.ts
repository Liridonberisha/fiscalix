import { z } from 'zod'

export const projectTypes = [
  'custom',
  'web',
  'mobile',
  'management',
  'internal',
  'website',
  'automation',
  'consultation',
  'unsure',
] as const

export type ProjectType = (typeof projectTypes)[number]

export function isProjectType(value: string | null | undefined): value is ProjectType {
  return !!value && (projectTypes as readonly string[]).includes(value)
}

/** Shared by the form (client-side checks) and the API route (authoritative checks). */
export const contactSchema = z.object({
  name: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(200),
  company: z.string().trim().max(160).default(''),
  country: z.string().trim().min(2).max(80),
  projectType: z.enum(projectTypes),
  budget: z.string().trim().max(60).default(''),
  description: z.string().trim().min(20).max(5000),
  locale: z.enum(['sq', 'en', 'de']),
  // Honeypot: real visitors never see or fill this field
  website: z.string().max(200).default(''),
})

export type ContactInput = z.input<typeof contactSchema>
export type ContactField = 'name' | 'email' | 'country' | 'projectType' | 'description'
