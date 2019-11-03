const { COLORS, EXTENDED } = require('./src/assets/colors');

module.exports = {
  theme: {
    colors: {
      ...COLORS
    },
    extend: {
      colors: {
        ...EXTENDED
      }
    }
  },
  variants: {},
  plugins: []
}
