/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        cursive: ['"Great Vibes"', 'cursive'],
        alex: ['"Alex Brush"', 'cursive'],
        cinzel: ['"Cinzel Decorative"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        sanskrit: ['"Rozha One"', 'serif'],
      },
      colors: {
        cream: {
          50: '#FDFBF7',
          100: '#FAF6EF',
          200: '#F5EFE3',
          300: '#ECE2CF',
        },
        gold: {
          50: '#FCF9EE',
          100: '#F8F1D6',
          200: '#EEDDA9',
          300: '#E4C779',
          400: '#D5AD46',
          500: '#C09325',
          600: '#9E7417',
          700: '#7E5A13',
          800: '#644514',
          900: '#4D3412',
        },
        maroon: {
          50: '#FCF2F4',
          100: '#F9E4E7',
          200: '#F4CBD1',
          300: '#EAA3AD',
          400: '#DC7181',
          500: '#C54357',
          600: '#A4273C',
          700: '#7F192B',
          800: '#5F101F',
          900: '#480B16',
          950: '#2C050C',
        },
      },
      boxShadow: {
        'gold-soft': '0 10px 25px -5px rgba(192, 147, 37, 0.2), 0 8px 10px -6px rgba(192, 147, 37, 0.15)',
        'maroon-deep': '0 20px 30px -10px rgba(44, 5, 12, 0.4)',
        'polaroid': '0 12px 28px -4px rgba(74, 21, 28, 0.15), 0 4px 10px -2px rgba(74, 21, 28, 0.1)',
        'wax-seal': 'inset 0 2px 4px rgba(255, 255, 255, 0.4), 0 6px 16px rgba(138, 38, 20, 0.45), 0 0 25px rgba(212, 175, 55, 0.3)',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s infinite linear',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-10px) rotate(2deg)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.8', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.04)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
}
