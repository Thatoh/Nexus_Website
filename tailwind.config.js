/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'nexusbyte-primary-dark': '#111827', // Example: Gray 900
        'nexusbyte-accent-green': '#a8b545', // Custom green color
        'primary': '#a8b545', // Custom green color
        'primary-dark': '#8a9a3a', // Darker shade of custom green
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 40s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
};