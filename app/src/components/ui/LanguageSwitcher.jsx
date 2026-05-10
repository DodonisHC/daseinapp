import { useTranslation } from 'react-i18next';
import { LOCALE_STORAGE_KEY } from '../../storageKeys.js';

const LanguageSwitcher = ({ className = '' }) => {
  const { t, i18n } = useTranslation();

  const setLang = (lng) => {
    i18n.changeLanguage(lng);
    try {
      window.localStorage.setItem(LOCALE_STORAGE_KEY, lng);
    } catch {
      /* ignore */
    }
  };

  return (
    <div
      className={`language-switcher ${className}`.trim()}
      role="group"
      aria-label={t('a11y.languageSelect')}
    >
      <button
        type="button"
        className={i18n.resolvedLanguage === 'pt-BR' ? 'lang-btn active' : 'lang-btn'}
        onClick={() => setLang('pt-BR')}
        aria-pressed={i18n.resolvedLanguage === 'pt-BR'}
      >
        {t('chrome.langPt')}
      </button>
      <button
        type="button"
        className={i18n.resolvedLanguage === 'en' ? 'lang-btn active' : 'lang-btn'}
        onClick={() => setLang('en')}
        aria-pressed={i18n.resolvedLanguage === 'en'}
      >
        {t('chrome.langEn')}
      </button>
    </div>
  );
};

export default LanguageSwitcher;
