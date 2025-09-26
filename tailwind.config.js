/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        gms: "#3b5ba6",
        ev: "#0c3c4d",
        "ev-green": "#227349",
        "dark-blue": "#2f4b94"
      },
      fontFamily: {
        "chianti": ["chianti-bt", "sans-serif"],
        "text": ["IBM Plex Sans", "sans-serif"],
        "bs": ["Bahnschrift Regular", "sans-serif"]
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography')
  ],
}
