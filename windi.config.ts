/* eslint-disable @typescript-eslint/no-var-requires */
import { defineConfig } from 'vite-plugin-windicss';

export default defineConfig({
  darkMode: 'class',
  plugins: [
    require('windicss/plugin/typography')({
      // Turns text color to light, when dark mode enabled. Default = false
      dark: true,
      // Right-to-left mode (e.g. for Arabic, Uyghur languages). Default = false
      // rtl: true,
      // Classname for typography plugin. Default = 'prose'
      // className: 'my-prose',
      // Additional modifiers
      modifiers: ['sm', 'lg'],
    }),
  ],
});
