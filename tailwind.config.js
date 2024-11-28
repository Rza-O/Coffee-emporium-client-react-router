/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'navBar': "url('/src/assets/images/more/15.jpg')",
        'banner': "url('/src/assets/images/more/3.png')",
        'addCoffee': "url('/src/assets/images/more/11.png')"
      },
      fontFamily: {
        railway: "Raleway",
        rancho: "Rancho"
      }
    },
  },
  plugins: [
    require('daisyui')
  ],
}

