/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/renderer/**/*.{js,ts,jsx,tsx,css}'],
  theme: {
    extend: {}
  },
  plugins: [require('@tailwindcss/typography')]
}
