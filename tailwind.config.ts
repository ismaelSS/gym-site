import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
    },
    screens: {
      mmin: '390px',
      md: '768px',
      mfullHd: '1280px',
      mmax1: '1580px',
      mmax2: '2000px',
    },
  },
  plugins: [],
} satisfies Config
