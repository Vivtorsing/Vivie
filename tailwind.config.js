/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'pink-primary': '#FF69B4',
        'pink-secondary': '#FFB6C1',
        'dark-bg': '#1A1A2E',
        'dark-text': '#E0E0E0',
      },
      fontFamily: {
        'anime': ['"Comic Sans MS"', 'cursive'],
      },
    },
  },
  plugins: [],
}