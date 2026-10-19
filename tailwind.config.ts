import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: {
          DEFAULT: "#1C1917",
          deep: "#141210",
          soft: "#26221F",
        },
        bronze: {
          DEFAULT: "#9E7B56",
          light: "#DDBEA0",
          pale: "#F3E7D8",
          dark: "#7C5E3F",
        },
        cream: {
          DEFAULT: "#FAF8F5",
          warm: "#F4EFE8",
          card: "#FFFFFF",
        },
      },
      fontFamily: {
        sans: ["var(--font-outfit)", "sans-serif"],
        display: ["var(--font-syne)", "sans-serif"],
        script: ["var(--font-script)", "cursive"],
      },
    },
  },
  plugins: [],
};
export default config;

