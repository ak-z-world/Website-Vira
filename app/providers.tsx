"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { basePriceINR, manualCountryPricing } from "@/lib/pricing";
import { formatCurrency } from "@/lib/currency";
import { getTranslator } from "@/lib/i18n";

type GlobalContextType = {
  language: string;
  setLanguage: (lang: string) => void;
  currency: string;
  setCurrency: (cur: string) => void;
  price: string;
  originalPrice: string;
  t: (key: string) => string;
};

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export function GlobalProvider({ children }: { children: React.ReactNode }) {

  const [language, setLanguage] = useState("en");
  const [currency, setCurrency] = useState("INR");
  const [rates, setRates] = useState<any>(null);

  const [price, setPrice] = useState("");
  const [originalPrice, setOriginalPrice] = useState(""); // CORRECT LOCATION

  const [t, setT] = useState(() => getTranslator("en"));

  // Fetch exchange rates
  useEffect(() => {
    fetch("/api/currency")
      .then(res => res.json())
      .then(setRates)
      .catch(() => console.warn("Currency API failed"));
  }, []);

  // Update translator
  useEffect(() => {
    setT(() => getTranslator(language));
  }, [language]);

  // Detect country
  useEffect(() => {
    async function detectCountry() {
      try {
        const res = await fetch("/api/location");
        const data = await res.json();
        const country = data.country;
        console.log("Selected currency:", currency);

        if (manualCountryPricing[country]) {

          const config = manualCountryPricing[country];

          setCurrency(config.currency);

          setPrice(
            formatCurrency(config.price, config.currency)
          );

          setOriginalPrice(
            formatCurrency(config.originalPrice, config.currency)
          );

        }

      } catch {
        console.warn("Location detection failed");
      }
    }

    detectCountry();

  }, []);

  // Convert currency
  useEffect(() => {

    // Find matching manual pricing by currency
    const countryEntry = Object.values(manualCountryPricing)
      .find((entry) => entry.currency === currency);
    
    if (countryEntry) {

      // Set both prices ALWAYS
      setPrice(
        formatCurrency(countryEntry.price, currency)
      );

      setOriginalPrice(
        formatCurrency(countryEntry.originalPrice, currency)
      );

      return;
    }


    // fallback to INR
    setPrice(formatCurrency(basePriceINR, "INR"));
    setOriginalPrice(formatCurrency(40000, "INR"));

  }, [currency]);

  return (

    <GlobalContext.Provider
      value={{
        language,
        setLanguage,
        currency,
        setCurrency,
        price,
        originalPrice, // ✅ exposed
        t,
      }}
    >

      {children}

    </GlobalContext.Provider>

  );

}

export function useGlobal() {

  const context = useContext(GlobalContext);

  if (!context) {
    throw new Error("useGlobal must be used inside GlobalProvider.");
  }

  return context;

}
