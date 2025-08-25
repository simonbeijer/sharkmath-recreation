import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#80D11D',
        'primary-dark': '#4F9000',
        'text-primary': '#042C51',
        'text-secondary': '#6F7D8C',
        'text-tertiary': '#ACB7C2',
        stroke: '#E8EDE3',
        // Social colors
        'google-blue': '#4285F4',
        'google-green': '#34A853',
        'google-yellow': '#FBBC05',
        'google-red': '#EB4335',
        facebook: '#1877F2',
      },
      fontFamily: {
        heading: ['Abhaya Libre ExtraBold', 'serif'],
        body: ['Roboto', 'sans-serif'],
      },
      spacing: {
        '8.5': '8.48px', // Specific header gap
      },
      boxShadow: {
        'button-primary': '0px 3px 0px #4F9000',
        'button-secondary': '0px 3px 0px #E8EDE3',
      },
      letterSpacing: {
        'tight-4': '-0.04em', // -4% for headings
      },
    },
  },
  plugins: [],
}

export default config
