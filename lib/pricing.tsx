export const basePriceINR = 38000;

export type CountryPricing = {
  currency: string;
  price: number;
  originalPrice: number;
};

export const manualCountryPricing: Record<string, CountryPricing> = {
  US: { currency: "USD", price: 419, originalPrice: 599 },
  AE: { currency: "AED", price: 1549, originalPrice: 1999 },
  KW: { currency: "KWD", price: 129, originalPrice: 159 },
  IN: { currency: "INR", price: 35000, originalPrice: 40000 },
};

