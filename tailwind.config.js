const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/client/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: colors.indigo,
      },
      cursor: {
        "col-resize": "col-resize",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("tailwindcss-animate"),
    require("tailwindcss-autofill"),
    require("tailwindcss-shadow-fill"),
    require("tailwindcss-text-fill"),
  ],
};
