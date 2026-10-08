/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        vouch: {
          dark: '#202322',
          charcoal: '#202322',
          teal: '#173F4F',
          forest: '#173F4F',
          forestDark: '#173F4F',
          forestMuted: '#173F4F',
          emerald: '#3E6B52',
          greenLight: '#EDF4F0',
          greenConfirmed: '#EDF4F0',
          canvas: '#F4F0E6',
          stone: '#F4F0E6',
          card: '#FFDFF7',
          border: '#E2DDD2',
          borderSubtle: '#EBE7DC',
          mutedText: '#737A75',
          accent: '#C45B3C',
          copper: '#C45B3C',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
