import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: { DEFAULT: '#14243A', deep: '#203B57' },
        teal: { DEFAULT: '#58B8AE', muted: '#A8CBB7' },
        warm: { DEFAULT: '#F7F7F2', white: '#FFFFFF' },
        text: { primary: '#202D3B', secondary: '#657181' },
        border: '#E4E9E8',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
