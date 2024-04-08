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
        ancash: "url('../assets/ancash.jpg')",
        cuzco: "url('../assets/cuzco.jpg')",
        sanmartincanoa: "url('../assets/sanmartincanoa.jpg')",
        cuzco: "url('../assets/cuzco.jpg')",
        loreto: "url('../assets/loreto.jpg')",
        madrededios: "url('../assets/madrededios.jpg')",
        moquegua: "url('../assets/moquegua.jpg')",
        sitiocuzco: "url('../assets/sitiocuzco.jpg')",
        carnaval: "url('../assets/destacados/carnaval.jpg')",
        cordillera: "url('../assets/destacados/cordillera.jpg')",
        lalibertad: "url('../assets/destacados/lalibertad.jpg')",
        parquemanu: "url('../assets/destacados/parquemanu.jpg')",
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

