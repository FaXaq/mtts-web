const {
  COLORS,
  EXTENDED
} = require('./src/assets/colors');
const {
  colors
} = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    colors: {
      ...colors,
      ...COLORS
    },
    extend: {
      colors: {
        ...EXTENDED
      }
    }
  },
  variants: {},
  plugins: [
    require('tailwindcss-transitions')()
  ]
}