// i18n.ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { destacadasData as destacadasDataEN } from "../data/en";
import { destacadasData as destacadasDataES } from "../data/es";

const resources = {
  en: {
    translation: {
      destacadasData: destacadasDataEN,
      navData: {
        logo: "Peru Travel",
        idData: [
          {
            title: "Home",
            hrefId: "#",
          },
          {
            title: "Locations",
            hrefId: "#recommendations",
          },
          {
            title: "Stays",
            hrefId: "#trendings",
          },
          {
            title: "FAQs",
            hrefId: "#faqs",
          },
          {
            title: "About Us",
            hrefId: "#footer",
          },
        ],
      },
      bannerData:{
        title: "Find more locations like this",
        button: "Explore More",
        search: "Search",
        subtitle1:"Our Recommendations",
        subtitle2:"Trending Stays",
        subtitle3:"FAQs",
        subtitle4:"About Us",
      }
    },
  },
  es: {
    translation: {
      destacadasData: destacadasDataES,
      navData: {
        logo: "Perú Viajes",
        idData: [
          {
            title: "Inicio",
            hrefId: "#",
          },
          {
            title: "Locaciones",
            hrefId: "#recommendations",
          },
          {
            title: "Tendencias",
            hrefId: "#trendings",
          },
          {
            title: "FAQs",
            hrefId: "#faqs",
          },
          {
            title: "Nosotros",
            hrefId: "#footer",
          },
        ],
      },
      bannerData:{
        title: "Encuentra más ubicaciones como esta",
        button: "Explora más",
        search: "Buscar",
        subtitle1:"Recomendados",
        subtitle2:"Estancias destacadas",
        subtitle3:"FAQs",
        subtitle4:"Acerca de",
      }
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "es",
  fallbackLng: "es",
  returnObjects: true,
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
});

export default i18n;
