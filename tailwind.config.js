/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'xs': '320px',

      'sm': '648px',

      'md': '768px',

      'lg': '1024px',

      'xl': '1280px',
    }
  },
  plugins: [],
}


