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
      animation: {
        enter: "enter .2s ease-out",
        leave: "leave .15s ease-in forwards",
      },
      keyframes: {
        enter: {
          from: { transform: "scale(.9)", opacity: 0 },
          to: { transform: "scale(1)", opacity: 1 },
        },
        leave: {
          from: { transform: "scale(1)", opacity: 1 },
          to: { transform: "scale(.9)", opacity: 0 },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
