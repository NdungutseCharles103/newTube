/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {},
    colors: {
      ...colors,
      ytred: '#ff0000',
      blackGray: '#282828',
      blackie: '#070515',
      darkb: '#0f0c25',
      whitish: '#f3f5f7',
      trueWhite: '#ffffff',
      ytGray: '#d9d9d9',
    }
  },
  plugins: [],
};
