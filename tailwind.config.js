const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/client/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      ...colors,
      primary: colors.cyan,
    },
    cursor: {
      "col-resize": "col-resize",
    }
  },
  plugins: []
}
