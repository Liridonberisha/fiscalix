import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        // Dark surfaces — charcoal tinted toward the brand violet
        ink: '#15121B',
        graphite: '#211D29',
        smoke: '#332E3D',
        // Light surfaces — cool porcelain, never cream
        porcelain: '#ECEAF0',
        paper: '#F8F7FA',
        line: '#D8D4DF',
        // Text
        muted: '#625C6E',
        mist: '#A59FB1',
        // Fiscalix violet
        violet: {
          50: '#F4F0FE',
          100: '#EAE2FD',
          200: '#D5C6FB',
          300: '#B9A1F8',
          400: '#9B7BF7',
          500: '#7C3AED',
          600: '#6D28D9',
          700: '#5B21B6',
          800: '#4C1D95',
          900: '#2E1065',
        },
        ok: '#3FA37C',
        warn: '#C9932E',
      },
      fontFamily: {
        sans: ['var(--font-mona)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        site: '88rem',
      },
      transitionTimingFunction: {
        out: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      keyframes: {
        dash: { to: { strokeDashoffset: '-24' } },
        blink: { '50%': { opacity: '0' } },
        float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-4px)' } },
      },
      animation: {
        dash: 'dash 1.2s linear infinite',
        blink: 'blink 1s step-end infinite',
        float: 'float 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

export default config
