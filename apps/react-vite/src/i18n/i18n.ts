import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import http from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

i18n
  .use(http)
  .use(LanguageDetector) // Automatically detect user's language
  .use(initReactI18next) // Bind React-i18next
  .init({
    lng: 'en', // Default language
    fallbackLng: 'en', // Fallback language
    interpolation: {
      escapeValue: false, // React already escapes values
      // Our interpolations are wrapped in underscores (the default
      // is now double curly braces)
      prefix: '__',
      suffix: '__',
    },
    backend: {
      loadPath: '/locales/__lng__.json',
    },
    debug: true, // Enable for debugging
  });

export default i18n;
