/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      ...colors,
      primary: "#F68E1E"
    },
    fontFamily: {
      Roboto: ["Roboto", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        machupichu: "url('../assets/machupichu.jpg')",
      },
      backgroundColor: (theme) => ({
        ...theme("colors"),
        primary: "#F68E1E"
      }),
      textColor: {
        primary: "#F68E1E"
      },
    }
  },
  plugins: [],
}

