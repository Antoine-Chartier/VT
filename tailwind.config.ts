import { text } from "stream/consumers";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // darkMode: 'class', // pour activer le mode sombre
  theme: {
    extend: {
      colors: {
        main: "var(--main-color)",
        secondary: "var(--secondary-color)",
        text: {
          primary: "#161f15",
          primaryHover: "var(--couleur-texte-hover)",
        },
        // colors for light theme
        // light: {
        //   main: "var(--foreground-color)",
        //   secondary: "var(--secondary-color)",
        //   text: {
        //     primary: '#161f15',
        //     primaryHover: '#536c50',
        //   },
        //   // other colors...
        // },
        // // colors for dark theme
        // dark: {
        //   main: "var(--foreground-color)",
        //   secondary: "var(--background-color)",
        //   text: {
        //     primary: '#f7fafc',
        //     primaryHover: '#a0aec0',
        //   },
        //   // other colors...
        // },
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
