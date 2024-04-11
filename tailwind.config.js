/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const colors = require("tailwindcss/colors");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    colors: {
      ...colors,
      primary: "#F68E1E",
      secondary: "#8FA206",
      tertiary: "#CC2D4A",
      moonPrimary: "#111827",
      moonSecondary: "#FFF",
      moonCard1: "#374151",
      moonCard2: "#1f2937",
    },
    fontFamily: {
      Monserrat: ["Monserrat", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        machupichuM: "url('../assets/machupichuMovil.jpg')",
        machupichu: "url('../assets/machupichu.jpg')",
        catarata: "url('../assets/catarata.jpg')",
        cuscocatedral: "url('../assets/cuscocatedral.jpg')",
        huacachinalaguna: "url('../assets/huacachinalaguna.jpg')",
        limaplaza: "url('../assets/limaplaza.jpg')",
        ancash: "url('../assets/ancash.jpg')",
        cuzco: "url('../assets/cuzco.jpg')",
        sanmartincanoa: "url('../assets/sanmartincanoa.jpg')",
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
        moonPrimary: "#111827",
        moonSecondary: "#FFF",
        moonCard1: "#374151",
        moonCard2: "#1f2937",
      }),
      textColor: {
        primary: "#F68E1E",
        secondary: "#8FA206",
        tertiary: "#CC2D4A",
        moonPrimary: "#111827",
        moonSecondary: "#FFF",
        moonCard1: "#374151",
        moonCard2: "#1f2937",
      },
    },
  },
  plugins: [],
};
