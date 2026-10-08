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
          dark: '#111827',
          charcoal: '#1E232A',
          teal: '#0D5C75',
          forest: '#233B31',
          forestDark: '#1E3B2B',
          forestMuted: '#2D4539',
          emerald: '#059669',
          greenLight: '#EBF6EE',
          greenConfirmed: '#E9F6ED',
          canvas: '#FAF8F5',
          stone: '#F8FAFC',
          card: '#FFFFFF',
          border: '#ECEBE8',
          borderSubtle: '#EAE9E4',
          mutedText: '#717A88',
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
