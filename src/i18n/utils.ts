const defaultLang = "en";

const translations = {
  en: {
    common: () => import("../locales/en/common.json"),
    hero: () => import("../locales/en/hero.json"),
    services: () => import("../locales/en/services.json"),
    about: () => import("../locales/en/about.json"),
    contact: () => import("../locales/en/contact.json"),
  },
  tr: {
    common: () => import("../locales/tr/common.json"),
    hero: () => import("../locales/tr/hero.json"),
    services: () => import("../locales/tr/services.json"),
    about: () => import("../locales/tr/about.json"),
    contact: () => import("../locales/tr/contact.json"),
  },
  zh: {
    common: () => import("../locales/zh/common.json"),
    hero: () => import("../locales/zh/hero.json"),
    services: () => import("../locales/zh/services.json"),
    about: () => import("../locales/zh/about.json"),
    contact: () => import("../locales/zh/contact.json"),
  },
};

export async function getTranslations(lang: string = defaultLang) {
  const locale = lang as keyof typeof translations;
  const localeTranslations = translations[locale] || translations[defaultLang];

  const [common, hero, services, about, contact] = await Promise.all([
    localeTranslations.common(),
    localeTranslations.hero(),
    localeTranslations.services(),
    localeTranslations.about(),
    localeTranslations.contact(),
  ]);

  return {
    common: common.default,
    hero: hero.default,
    services: services.default,
    about: about.default,
    contact: contact.default,
  };
}

export function getLocalizedPath(path: string, locale: string): string {
  if (locale === defaultLang) {
    return path;
  }
  return `/${locale}${path}`;
}
