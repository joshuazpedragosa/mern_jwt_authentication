/** @type {import('tailwindcss').Config} */
module.exports = {
  mode : 'jit',
  content: [
    "./public/index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode : false,
  theme: {
    extend: {},
  },
  plugins: [],
}

