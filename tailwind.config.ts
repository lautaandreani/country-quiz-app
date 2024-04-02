import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'dark-blue': 'var(--dark-blue)',
      'light-blue': 'var(--light-blue)',
      'navy-blue': 'var(--navy-blue)',
      'cyan-blue': 'var(--cyan-blue)',
      red: 'var(--red)',
      gray: 'var(--gray)',
      'light-yellow': 'var(--light-yellow)',
    },
    backgroundImage: {
      'gradient-radial': 'linear-gradient(90deg, #E65895, #BC6BE8)',
    },
    animation: {
      'fade-in-left': 'fade-in-left 0.35s ease-in-out',
    },
    keyframes: {
      'fade-in-left': {
        '0%': {
          opacity: '0',
          transform: 'translateX(20px)',
        },
        '100%': {
          opacity: '1',
          transform: 'translateX(0)',
        },
      },
    },
  },
  plugins: [],
}
export default config
