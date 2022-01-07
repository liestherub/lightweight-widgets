const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/client/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      ...colors,
      primary: colors.indigo,
      success: colors.green,
      danger: colors.red,
      warning: colors.amber,
      info: colors.blue,
    }
  },
  plugins: []
}
