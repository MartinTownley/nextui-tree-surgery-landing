import { heroui } from "@heroui/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    borderWidth: {
      DEFAULT: "1px",
      0: "0",
      2: "2px",

      3: "3px",
      4: "4px",

      6: "6px",

      8: "8px",
      10: "10px",
      12: "12px",
      14: "14px",
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
        imbue: ["var(--font-imbue)"],
        roboto: ["var(--font-roboto)"],
      },
      gridTemplateColumns: {
        gallery: "repeat(auto-fit, minmax(250px, 1fr))",
      },
      screens: { "lg-custom": "950px" },
      height: {
        "vh-minus-navbar": "calc(100vh - var(--navbar-height))",
      },
      colors: {
        "main-green": "var(--main-green-color)",
        "secondary-orange": "var(--secondary-orange-color)",
        "brighter-orange": "var(--brighter-orange-color)",
      },
    },
  },
  darkMode: "class",
  plugins: [
    require("@tailwindcss/forms")({ strategy: "class" }),
    heroui({
      themes: {
        dark: {
          colors: {
            "custom-orange": "#f09905",
          },
        },
      },
    }),
  ],
};
