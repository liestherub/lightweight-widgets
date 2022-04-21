import { themes } from '@storybook/theming';
import "tailwindcss/tailwind.css";
import faker from 'faker';

faker.setLocale("zh_CN");

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
  darkMode: {
    stylePreview: true,
    dark: {
      ...themes.dark,
      appContentBg: "black"
    },
  }
}