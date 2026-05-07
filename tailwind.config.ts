import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-syne)', 'sans-serif'],
        mono: ['var(--font-dm-mono)', 'monospace'],
      },
      colors: {
        bg: {
          primary:   '#0a0a0b',
          secondary: '#111113',
          tertiary:  '#18181b',
          elevated:  '#222226',
        },
        accent: {
          DEFAULT: '#7c5cfc',
          light:   '#a78bfa',
          lighter: '#c4b5fd',
        },
        border: {
          subtle: 'rgba(255,255,255,0.07)',
          soft:   'rgba(255,255,255,0.12)',
          medium: 'rgba(255,255,255,0.18)',
        },
      },
      animation: {
        'aurora1': 'aurora1 8s ease-in-out infinite',
        'aurora2': 'aurora2 10s ease-in-out infinite',
        'aurora3': 'aurora3 12s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
        'float':   'float 5s ease-in-out infinite',
        'orbit':   'orbit 3s linear infinite',
        'glow-pulse': 'glow-pulse 2.5s ease-in-out infinite',
        'stripe-move': 'stripe-move 2s linear infinite',
        'fade-up': 'fade-up 0.4s ease forwards',
      },
      keyframes: {
        aurora1: {
          '0%,100%': { transform: 'translate(-20%,-20%) scale(1.2) rotate(0deg)' },
          '50%':      { transform: 'translate(10%,10%) scale(0.9) rotate(180deg)' },
        },
        aurora2: {
          '0%,100%': { transform: 'translate(20%,20%) scale(0.9) rotate(0deg)' },
          '50%':      { transform: 'translate(-10%,-5%) scale(1.3) rotate(-120deg)' },
        },
        aurora3: {
          '0%,100%': { transform: 'translate(0%,30%) scale(1.1)' },
          '50%':      { transform: 'translate(-20%,-10%) scale(0.8)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-400px 0' },
          '100%': { backgroundPosition: '400px 0' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0) translateX(0)' },
          '50%':      { transform: 'translateY(-18px) translateX(8px)' },
        },
        orbit: {
          from: { transform: 'rotate(0deg) translateX(50px) rotate(0deg)' },
          to:   { transform: 'rotate(360deg) translateX(50px) rotate(-360deg)' },
        },
        'glow-pulse': {
          '0%,100%': { boxShadow: '0 0 20px rgba(124,92,252,0.4)' },
          '50%':      { boxShadow: '0 0 40px rgba(124,92,252,0.8)' },
        },
        'stripe-move': {
          '0%':   { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '60px 60px' },
        },
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
