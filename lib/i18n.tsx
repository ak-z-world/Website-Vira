import en from "@/messages/en.json";
import ar from "@/messages/ar.json";

const messages: any = { en, ar };

export function getTranslator(lang: string) {
  return function t(key: string) {
    return key.split(".").reduce((obj, i) => obj?.[i], messages[lang]) || key;
  };
}
