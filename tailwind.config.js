/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'bot-bg': '#f4f5f9',
        'bot-primary': '#7c3aed',
        'bot-primary-light': '#ede9fe',
      },
      boxShadow: {
        'neo-flat': '6px 6px 12px #d1d5db, -6px -6px 12px #ffffff',
        'neo-pressed': 'inset 6px 6px 12px #d1d5db, inset -6px -6px 12px #ffffff',
        'neo-sm': '3px 3px 6px #d1d5db, -3px -3px 6px #ffffff',
      }
    },
  },
  plugins: [],
}