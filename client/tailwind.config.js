import { Lightbulb } from "lucide-react"

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./postcss.config.js",
    "./tsconfig.json",
    "node_modules/preline/dist/*.js",
  ],

  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        spaceMono: ["Space Mono", "monospace"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        dark: "#181f07",
        grayish: "#475240",
        backgroundWhite: "#fafbf9",
        background: "#f8fcf0",
        primary: "#7ba848",
        secondary: "#45691c",
        accent: "#66b017",
        lightBlue: "#87e4b5",
        oilyBlue: "#60dbd1",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [require("preline/plugin")],
}
