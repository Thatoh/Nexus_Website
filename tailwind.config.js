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
        'nexusbyte-accent-green': '#10B981', // Example: Emerald 500
        'primary': '#10B981', // Emerald 500
        'primary-dark': '#059669', // Emerald 600
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