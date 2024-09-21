import { text } from "stream/consumers";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class', // pour activer le mode sombre
  theme: {
    extend: {
      colors: {
        main: "var(--main-color)",
        secondary: "var(--secondary-color)",
        text: {
          primary: "var(--text-color)",
          primaryActive: "var(--text-color-active)",
          primaryHover: "var(--couleur-texte-hover)",
          primaryDarkMode: "var(--text-color-dark-mode)",
        },

      },
      padding: {
        "main-clamp": "clamp(1rem,5vw,10em) clamp(1rem,6vw,10em)",
        // "main-clamp": "40px",
        "main-x-clamp": "clamp(1rem,6vw,10rem)",
        "main-y-clamp": "clamp(1rem,5vw,10rem)",
      },
      screens: {
        xs: '504px'
      }
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
