import localFont from 'next/font/local'
import { GeistMono } from 'geist/font/mono'

// Mona Sans variable: weight 200–900, width 75–125%.
// The Latin file covers Albanian (ë, ç) and German (ä, ö, ü, ß) as well as €.
export const mona = localFont({
  src: [{ path: './fonts/MonaSans-latin.woff2', weight: '200 900', style: 'normal' }],
  variable: '--font-mona',
  display: 'swap',
  declarations: [{ prop: 'font-stretch', value: '75% 125%' }],
  fallback: ['system-ui', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
})

// Used only inside code panels of the interface mockups
export const mono = GeistMono
