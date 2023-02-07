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
      white: colors.white,
      themeyellow: {
        100: "#FFDB57",
        200: "#FFCB05"
      },
      themeblue: {
        100: "#11296B",
        200: "#00274C"
      },
    },
    height: {
      SHeight1: '200px',
      SHeight2: '400px',
      SHeight3: '600px'
    },
    extend: {
      blur: {
        xs: '2px',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
