// i18n.ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import {
  destacadasData as destacadasDataEN,
  navData as navDataEN,
  recomendacionesData as recomendacionesDataEN,
} from "../data/en";
import {
  destacadasData as destacadasDataES,
  navData as navDataES,
  recomendacionesData as recomendacionesDataES,
} from "../data/es";

const resources = {
  en: {
    translation: {
      destacadasData: destacadasDataEN,
      navData: navDataEN,
      bannerData: {
        title: "Find more locations like this",
        button: "Explore More",
        search: "Search",
        subtitle1: "Our Recommendations",
        subtitle2: "Trending Stays",
        subtitle3: "FAQs",
        subtitle4: "About Us",
      },
      recomendacionesData: recomendacionesDataEN,
    },
  },
  es: {
    translation: {
      destacadasData: destacadasDataES,
      navData: navDataES,
      bannerData: {
        title: "Encuentra más ubicaciones como esta",
        button: "Explora más",
        search: "Buscar",
        subtitle1: "Recomendados",
        subtitle2: "Estancias destacadas",
        subtitle3: "FAQs",
        subtitle4: "Acerca de",
      },
      recomendacionesData: recomendacionesDataES,
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
