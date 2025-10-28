/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Jakarta': ['Plus Jakarta Sans', 'sans-serif'],
        'Figtree': ['Figtree', 'serif'],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
