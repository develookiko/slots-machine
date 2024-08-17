import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { Locale } from '@/types';
import translationEN from './en/translation.json';
import translationPT from './pt/translation.json';
import translationRU from './ru/translation.json';

const resources = {
  en: {
    translation: translationEN,
  },
  pt: {
    translation: translationPT,
  },
  ru: {
    translation: translationRU,
  },
};


i18n.use(initReactI18next).init({
  resources,
  nonExplicitSupportedLngs: true,
  lng: Locale.RU,
  fallbackLng: "ru",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
