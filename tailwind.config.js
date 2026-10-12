/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#06101E',
          900: '#0A192F',
          850: '#0E223F',
          800: '#112A4D',
          700: '#1A3B66',
          600: '#234C80',
          500: '#2E5E99',
        },
        gold: {
          700: '#8A6D2C',
          600: '#A68434',
          500: '#C5A059',
          400: '#D4B36C',
          300: '#E4C785',
          200: '#F0DC9E',
          100: '#F9F1D8',
          50: '#FDFBF5',
        }
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'gold-glow': '0 0 25px -5px rgba(197, 160, 89, 0.3)',
        'navy-deep': '0 20px 40px -15px rgba(6, 16, 30, 0.7)',
      }
    },
  },
  plugins: [],
}
