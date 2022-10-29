/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
    extend: {},
  },
  daisyui: {
    //TODO: add dark mode
    themes: ["garden", "forest"],
  },
  plugins: [
    require("daisyui"),
    require('@tailwindcss/typography'),
  ],
}