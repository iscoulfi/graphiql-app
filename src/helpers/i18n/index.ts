import i18n from 'i18next';
import HttpBackend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

const saveLanguageToLocalStorage = (language: string) => {
  localStorage.setItem('language', language);
};

i18n
  .use(HttpBackend)
  .use(initReactI18next)
  .init({
    lng: localStorage.getItem('language') || 'en',
    fallbackLng: 'en',
    debug: false,
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
    interpolation: {
      escapeValue: false,
    },
  });

i18n.on('languageChanged', saveLanguageToLocalStorage);

export { i18n };
