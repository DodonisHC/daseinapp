import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ptBR from './locales/pt-BR.json';
import en from './locales/en.json';
import {
  LOCALE_STORAGE_KEY,
} from '../storageKeys.js';

/** @typedef {'pt-BR' | 'en'} AppLanguage */

/** @type {readonly AppLanguage[]} */
export const SUPPORTED_LANGUAGES = Object.freeze(['pt-BR', 'en']);

/** @returns {AppLanguage} */
export function normalizeLanguage(lng) {
  if (!lng || typeof lng !== 'string') return 'pt-BR';
  const l = lng.toLowerCase();
  if (l.startsWith('en')) return 'en';
  if (l.startsWith('pt')) return 'pt-BR';
  return 'pt-BR';
}

/** @returns {AppLanguage} */
function resolveInitialLanguage() {
  if (typeof window === 'undefined' || typeof window.localStorage === 'undefined') {
    return 'pt-BR';
  }
  try {
    const saved = window.localStorage.getItem(LOCALE_STORAGE_KEY);
    if (saved === 'pt-BR' || saved === 'en') return saved;
  } catch {
    /* ignore */
  }
  const navLang = typeof navigator !== 'undefined' ? navigator.language : '';
  return normalizeLanguage(navLang);
}

function applyDocumentLang(lng) {
  if (typeof document === 'undefined') return;
  document.documentElement.lang =
    lng === 'pt-BR' ? 'pt-BR'
    : 'en';
}

const initialLng = typeof window !== 'undefined' ? resolveInitialLanguage() : 'pt-BR';

i18n.use(initReactI18next).init({
  resources: {
    'pt-BR': { translation: ptBR },
    en: { translation: en },
  },
  lng: initialLng,
  fallbackLng: 'pt-BR',
  supportedLngs: [...SUPPORTED_LANGUAGES],
  interpolation: {
    escapeValue: false,
  },
});

applyDocumentLang(i18n.language);
i18n.on('languageChanged', applyDocumentLang);

export default i18n;
