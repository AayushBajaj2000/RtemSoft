/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      main: ["Poppins", "sans-serif"],
    },
    screens: {
      xs: "400px",
      // => @media (min-width: 400px) { ... },

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      mmd: "900px",
      // => @media (min-width: 900px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1400px",
      // => @media (min-width: 1536px) { ... }
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      primary: {
        lighter: "#f5f5f5",
        default: "#f5f5f5",
        dark: "#f5f5f5",
      },
      secondary: {
        lighter: "#f5f5f5",
        default: "#f5f5f5",
        dark: "#f5f5f5",
      },
      highlight: {
        lighter: "#f5f5f5",
        default: "#f5f5f5",
        dark: "#f5f5f5",
      },
    },
  },
  plugins: [],
};
