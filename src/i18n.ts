import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import fr from './i18n/fr.json';
import en from './i18n/en.json';
import es from './i18n/es.json';

const STORAGE_KEY = 'little-aretha-language';

// Get saved language or default to French
const getSavedLanguage = (): string => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem(STORAGE_KEY) || 'fr';
  }
  return 'fr';
};

i18n.use(initReactI18next).init({
  resources: {
    fr: { translation: fr },
    en: { translation: en },
    es: { translation: es },
  },
  lng: getSavedLanguage(),
  fallbackLng: 'fr',
  interpolation: {
    escapeValue: false,
  },
});

// Save language preference when it changes
i18n.on('languageChanged', (lng) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(STORAGE_KEY, lng);
  }
});

export default i18n;

export const languages = [
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
] as const;

export type LanguageCode = (typeof languages)[number]['code'];
