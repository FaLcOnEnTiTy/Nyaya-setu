import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#0A111C",
          900: "#101A28", // Deep institutional navy
          800: "#1B2A42", // Primary institutional navy
          700: "#263B5D",
          600: "#344F7A",
          100: "#EAF0F8",
          50: "#F4F7FB",
        },
        paper: {
          50: "#FFFFFF",
          100: "#FBFAF6", // Warm paper white
          200: "#F3EFE6", // Warm paper aged/card surface
          300: "#E7E2D6",
          400: "#D3CCBE",
        },
        brass: {
          300: "#D4B46E",
          400: "#C19A4B",
          500: "#AD873B", // Judicial Brass/Gold accent
          600: "#8C6A28",
          700: "#6B501B",
          50: "#FBF7EC",
        },
        brick: {
          400: "#BF4E3B",
          500: "#A03F2E", // Urgent Brick Red
          600: "#833122",
          50: "#FDF3F1",
        },
        liberty: {
          500: "#2E6F40", // Emerald release/compliance
          600: "#225631",
          50: "#F0F8F2",
        },
      },
      fontFamily: {
        serif: ["Lora", "Merriweather", "Georgia", "Cambria", "Times New Roman", "serif"],
        sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
      },
      boxShadow: {
        soft: "0 2px 8px -1px rgba(16, 26, 40, 0.06), 0 1px 3px -1px rgba(16, 26, 40, 0.04)",
        card: "0 4px 16px -2px rgba(16, 26, 40, 0.08), 0 2px 6px -2px rgba(16, 26, 40, 0.04)",
        elevated: "0 10px 25px -3px rgba(16, 26, 40, 0.12), 0 4px 10px -2px rgba(16, 26, 40, 0.06)",
      },
    },
  },
  plugins: [],
};

export default config;
