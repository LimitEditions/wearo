/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#3447BC',
        'navy-blue': '#24316B',
        'medium-gray': '#797C8E',
        'light-gray': '#9095B5',
        'white-fon': '#F9F8FF',
      },
      fontFamily: {
        'sf-pro': ['"SF Pro Text"'],
      },
    },
  },
  plugins: [],
}