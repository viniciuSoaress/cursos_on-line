import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    backgroundColor: {
      'primary' : '#151516',
      'second' : '#2a2a2a',
      'thee' : '#e2e2e4'
    },
    fontSize: {
      'min': '16px',
      'larg': '26px',
      'larg2': '32px'
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        'gray-1' : '#e2e2e4',
        'gray-2' : '#ebe7e7',
      },
      padding: {
        'p-container' : '50px 66px 30px',
      },
      width: {
        'w-container' : '1248px',
      },
      height: {
        'h-container' : '88vh'
      }
    },
  },
  plugins: [],
}
export default config
