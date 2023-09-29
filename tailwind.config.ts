import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      sans: ['Montserrat Variable', 'sans-serif'],
    },
    extend: {
      colors: {
        blue: '#4835D4',
        gray: {
          '900': '#1E1E2E',
        },
      },
      backgroundImage: {
        'orange-gradient':
          'linear-gradient(273deg, #FFC543 4.95%, #FF8412 93.62%)',
        'blue-gradient':
          'linear-gradient(273deg, #686DE0 4.95%, #4834D4 93.62%)',
        'light-blue':
          'linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, #E5F1FB 100%)',
        'light-gray': 'linear-gradient(273deg, #EDEBFB 4.95%, #F0F0FC 93.62%)',
        'popup-bg': 'linear-gradient(180deg, #4936D4 0%, #6835D4 100%)',
      },
      boxShadow: {
        footerShadow: '0px -5px 20px 0px rgba(0, 0, 0, 0.10)',
      },
    },
  },
  plugins: [],
}
export default config
