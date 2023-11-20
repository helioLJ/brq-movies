/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brqNeutral: "#16171B",
        brqTertiary: "#2E2F33",
        brqOrange: "#EC8B00",
      },
    },
  },
  plugins: [],
};
