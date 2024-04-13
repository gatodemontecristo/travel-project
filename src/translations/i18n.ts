// i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { destacadasData as destacadasDataEN }  from '../data/en';
import { destacadasData as destacadasDataES} from '../data';



const resources = {
  en: {
    translation: {
      destacadasData:destacadasDataEN
    },
    
  },
  es: {
    translation: {
      destacadasData:destacadasDataES
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    returnObjects:true,
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;