import { createI18n } from "vue-i18n";
import en from "./locales/en.json";
import ar from "./locales/ar.json";
import ukFlag from "./assets/img/home/en-lang.svg";
import jordanFlag from "./assets/img/home/ar-lang.svg";

function loadLocalMessages() {
  const locales = [
    { en: en, flag: ukFlag },
    { ar: ar, flag: jordanFlag },
  ];
  const messages = {};
  locales.forEach((lang) => {
    const key = Object.keys(lang)[0];
    messages[key] = lang[key];
  });
  return messages;
}

export default createI18n({
  locale: "en",
  fallbackLocale: "en",
  messages: loadLocalMessages(),
});
