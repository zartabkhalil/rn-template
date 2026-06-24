/**
 * useLocale
 *
 * Hook to manage app language at runtime.
 * Changing language updates all translations instantly.
 * Note: RTL change (Arabic) requires app restart to apply.
 *
 * ─── Usage ──────────────────────────────────────────────────────
 *  import useLocale from '@/hooks/useLocale'
 *
 *  const { language, changeLanguage, isRTL } = useLocale()
 *
 *  changeLanguage('ar')  → switch to Arabic + enable RTL
 *  changeLanguage('en')  → switch to English + disable RTL
 *  changeLanguage('fr')  → switch to French
 *
 * ─── Supported languages ────────────────────────────────────────
 *  'en' → English (LTR)
 *  'ar' → Arabic  (RTL)
 *  'fr' → French  (LTR)
 */

import { useTranslation } from 'react-i18next';
import { I18nManager } from 'react-native';

export type Language = 'en' | 'ar' | 'fr';

const useLocale = () => {
  const { i18n } = useTranslation();

  const changeLanguage = async (lang: Language) => {
    await i18n.changeLanguage(lang);
    const isRTL = lang === 'ar';
    I18nManager.forceRTL(isRTL);
  };

  return {
    language: i18n.language as Language,
    changeLanguage,
    isRTL: I18nManager.isRTL,
  };
};

export default useLocale;
