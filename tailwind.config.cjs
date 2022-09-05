const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,jsx,tsx}'],
  theme: {
    colors: {
      gray: colors.zinc,
      orange: colors.orange,
      red: colors.red,
      blue: colors.blue,
      current: 'currentColor',
    },
  },
  plugins: [],
};
