import { NsKey } from '@common/enums/NsKey';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const translationFiles = import.meta.glob('../public/locales/**/*.json', {
  eager: true,
});
const resources: Record<string, Record<string, unknown>> = {};

Object.entries(translationFiles).forEach(([path, module]) => {
  const matches = path.match(/\/locales\/(\w+)\/(\w+)\.json$/);
  if (matches) {
    const [, lang, namespace] = matches;
    if (!resources[lang]) {
      resources[lang] = {};
    }
    resources[lang][namespace] = (module as { default: unknown }).default;
  }
});

i18n.use(initReactI18next).init({
  fallbackLng: 'en',
  supportedLngs: ['en', 'fr'],
  defaultNS: NsKey.Common,
  ns: Object.values(NsKey),
  debug: false,
  interpolation: {
    escapeValue: false,
  },
  resources,
});

export default i18n;
