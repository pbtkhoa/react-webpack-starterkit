import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import transEn from "@src/lang/en";

const resources = {
  en: {
    translation: transEn
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
