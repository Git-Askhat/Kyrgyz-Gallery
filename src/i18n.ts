import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

import * as en from './locales/en/translation.json'
import * as kg from './locales/kg/translation.json'
import * as ru from './locales/ru/translation.json'
// don't want to use this?
// have a look at the Quick start guide
// for passing in lng and translations on init

i18n
  .use(Backend)
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: {
      en: { translation: en },
      kg: { translation: kg },
      ru: { translation: ru },
    },
    fallbackLng: 'en',
    
    debug: true,
    lng: 'en',

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },

    // backend: {
    //   loadPath: '/src/locales/{{lng}}/translation.json',
    // },
    // react: { useSuspense: false },
  });

export default i18n;
