/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')


module.exports = {
  content: ["./src/**/*.{html,js,jsx}", "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"],
  theme: {
    daisyui: {
      themes: [
        {
          light: {
            ...require("daisyui/src/colors/themes")["[data-theme=light]"],
            primary: "#180F70",
            "primary-focus": "#3626A7",
          },
        },
      ]
    },
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require("daisyui"),
    require('flowbite/plugin'),
  ],
}
