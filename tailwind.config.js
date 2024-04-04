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
      primary: "#F68E1E",
      secondary: "#8FA206",
      tertiary: "#CC2D4A",
    },
    fontFamily: {
      Roboto: ["Roboto", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        machupichu: "url('../assets/machupichu.jpg')",
        catarata: "url('../assets/catarata.jpg')",
        cuscocatedral: "url('../assets/cuscocatedral.jpg')",
        huacachinalaguna: "url('../assets/huacachinalaguna.jpg')",
        limaplaza: "url('../assets/limaplaza.jpg')",
      },
      backgroundColor: (theme) => ({
        ...theme("colors"),
        primary: "#F68E1E",
        secondary: "#8FA206",
        tertiary: "#CC2D4A",
      }),
      textColor: {
        primary: "#F68E1E",
        secondary: "#8FA206",
        tertiary: "#CC2D4A",
      },
    }
  },
  plugins: [],
}

