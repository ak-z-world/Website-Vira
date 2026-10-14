// Kural Chatbot - i18n localization engine
// V1: ENGLISH ONLY. All texts loaded from en.json via t().
// V2: Add hi.json, ta.json, te.json, ml.json, kn.json, bn.json etc. for multi-language support.

import en from "./locales/en.json";

export type Locale = "en"; // V2: | "hi" | "ta" | "te" | "ml" | "kn" | "bn"

export interface CourseItem {
  id: string;
  name: string;
  badge?: string;
  shortDesc: string;
  tags: string[];
  level: string;
}

// Registry of locale dictionaries
const dictionaries: Record<Locale, typeof en> = {
  en,
  // V2: hi: hiJson,
  // V2: ta: taJson,
};

let currentLocale: Locale = "en";

export function setLocale(locale: Locale) {
  if (dictionaries[locale]) {
    currentLocale = locale;
  }
}

export function getLocale(): Locale {
  return currentLocale;
}

/**
 * Retrieve a localized string by dot-notation key and replace {params}.
 * e.g. t("messages.askPhone", { name: "Rahul", course: "Python + Agentic AI" })
 */
export function t(
  key: string,
  params?: Record<string, string | number | undefined | null>,
  locale: Locale = currentLocale
): string {
  const dict = dictionaries[locale] || dictionaries.en;
  const parts = key.split(".");
  let current: any = dict;

  for (const part of parts) {
    if (current && typeof current === "object" && part in current) {
      current = current[part];
    } else {
      // Fallback to English if missing in target locale
      let fallback: any = dictionaries.en;
      for (const fbPart of parts) {
        if (fallback && typeof fallback === "object" && fbPart in fallback) {
          fallback = fallback[fbPart];
        } else {
          return key; // return key as ultimate fallback
        }
      }
      current = fallback;
      break;
    }
  }

  if (typeof current !== "string") {
    if (Array.isArray(current)) {
      return current.join(", ");
    }
    return key;
  }

  if (!params) {
    return current;
  }

  return current.replace(/\{(\w+)\}/g, (_, match) => {
    const val = params[match];
    return val !== undefined && val !== null ? String(val) : `{${match}}`;
  });
}

/**
 * Retrieve an array of localized strings (e.g. options list).
 */
export function tArray(key: string, locale: Locale = currentLocale): string[] {
  const dict = dictionaries[locale] || dictionaries.en;
  const parts = key.split(".");
  let current: any = dict;

  for (const part of parts) {
    if (current && typeof current === "object" && part in current) {
      current = current[part];
    } else {
      return [];
    }
  }

  return Array.isArray(current) ? (current as string[]) : [];
}

/**
 * Retrieve the localized course catalog.
 */
export function getCourses(locale: Locale = currentLocale): CourseItem[] {
  const dict = dictionaries[locale] || dictionaries.en;
  return (dict.courses as CourseItem[]) || (dictionaries.en.courses as CourseItem[]);
}
