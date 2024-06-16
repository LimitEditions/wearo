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
      },
      fontFamily: {
        'sf-pro': ['"SF Pro Text"'],
      },
    },
  },
  plugins: [],
}