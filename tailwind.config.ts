import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0B1D2D",
          light: "#122539",
          dark: "#070f18",
        },
        charcoal: {
          DEFAULT: "#1E2329",
          light: "#252c34",
        },
        offwhite: {
          DEFAULT: "#F5F4F0",
          warm: "#FAFAF8",
        },
        gold: {
          DEFAULT: "#C8A46E",
          light: "#D4B882",
          muted: "#a88850",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        jp: ["var(--font-noto)", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.25em",
        widest3: "0.35em",
      },
    },
  },
  plugins: [],
};

export default config;
