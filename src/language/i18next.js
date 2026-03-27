import i18n from "i18next";
import { initReactI18next } from "react-i18next"
import en from "./i18n/en.json"
import sv from "./i18n/sv.json"

i18n
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    resources: {
      en: { translation: en },
      sv: { translation: sv },
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n