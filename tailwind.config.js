/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      teal: colors.teal,
      amber: colors.amber,
      truegray: colors.trueGray,
      themeyellow: {
        100: "#FFDB57",
        200: "#FFCB05"
      },
      themeblue: {
        100: "#11296B",
        200: "#00274C"
      },


    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
