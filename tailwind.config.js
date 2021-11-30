const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors,
    cursor: {
      "col-resize": "col-resize",
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms")
  ]
}
