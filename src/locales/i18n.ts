/**
 * i18n Configuration
 *
 * Initializes i18next with expo-localization for automatic
 * device language detection. Supports English, Arabic and French.
 * Arabic automatically enables RTL layout.
 *
 * ─── Adding a new language ──────────────────────────────────────
 *  1. Create a new folder under src/locales/ (e.g. src/locales/es/)
 *  2. Add common.json and auth.json translation files
 *  3. Import them here and add to resources object
 *  4. Add language code to supportedLanguages array
 *
 * ─── Adding a new namespace ─────────────────────────────────────
 *  1. Create a new JSON file in each language folder
 *  2. Import and add to each language in resources object
 *  3. Use it: const { t } = useTranslation('namespaceName')
 *
 * ─── Usage ──────────────────────────────────────────────────────
 *  import '@/locales/i18n' ← import once in app/_layout.tsx
 *
 *  import { useTranslation } from 'react-i18next'
 *  const { t } = useTranslation('common')
 *  const { t: tAuth } = useTranslation('auth')
 *
 *  t('actions.confirm')
 *  tAuth('login.title')
 *
 * ─── RTL ────────────────────────────────────────────────────────
 *  Arabic triggers RTL automatically via I18nManager.forceRTL()
 *  App restart required after language change for RTL to apply.
 */

import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import { getLocales } from 'expo-localization';
import { I18nManager } from 'react-native';

import enCommon from './en/common.json';
import enAuth from './en/auth.json';
import arCommon from './ar/common.json';
import arAuth from './ar/auth.json';
import frCommon from './fr/common.json';
import frAuth from './fr/auth.json';

const supportedLanguages = ['en', 'ar', 'fr'];

const deviceLanguage = getLocales()[0]?.languageCode ?? 'en';
const languageCode = supportedLanguages.includes(deviceLanguage)
  ? deviceLanguage
  : 'en';

const isRTL = languageCode === 'ar';
I18nManager.forceRTL(isRTL);

i18next
  .use(initReactI18next)
  .init({

    resources: {
      en: { common: enCommon, auth: enAuth },
      ar: { common: arCommon, auth: arAuth },
      fr: { common: frCommon, auth: frAuth },
    },
    lng: languageCode,
    fallbackLng: 'en',
    defaultNS: 'common',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18next;
