export function roundPrice(value: number, currency: string) {
  if (currency === "USD" || currency === "EUR") {
    return Math.round(value / 10) * 10 - 1;
  }

  if (currency === "AED") {
    return Math.round(value / 50) * 50;
  }

  if (currency === "KWD") {
    return Math.round(value);
  }

  return Math.round(value);
}
