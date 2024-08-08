/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '100px',
        'md': '760px',
        'lg': '1024px',
        'xl': '1335px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
}