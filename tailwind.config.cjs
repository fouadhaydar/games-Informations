/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
  "./src/component/*.jsx"
],
  theme: {
    extend: {},
    screens: {
      'esm':'300px',
      'sm': '500px',
      'md': '770px',
      'lg': '1200px',
      'xl': '1440px'
    },
  },
  plugins: [],
}
