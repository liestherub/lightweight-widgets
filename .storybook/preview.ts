import "tailwindcss/tailwind.css";

export const parameters = {
  options: {
    enableShortcuts: false,
  },
  actions: {
    argTypesRegex: "^on[A-Z].*",
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}