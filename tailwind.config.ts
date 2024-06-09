import { text } from "stream/consumers";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'selector', // pour activer le mode sombre
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
        "main-clamp": "clamp(1em,5vw,10em) clamp(1em,6vw,10em)",
        "main-x-clamp": "clamp(1em,6vw,10em)",
        "main-y-clamp": "clamp(1em,5vw,10em)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
