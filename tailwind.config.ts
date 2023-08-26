import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      newColors: {
        'bg-primary' : '#151516',
        'gray-1' : '#e2e2e4',
        'bg-second' : '#2a2a2a',
        'gray-2' : '#ebe7e7',
        'p-container' : '50px 96px 40px',
        'w-container' : '1248px',
        'h-container' : '934px'
      }
    },
  },
  plugins: [],
}
export default config
