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
        background: "var(--background)",
        foreground: "var(--foreground)",
        jewelry: {
          gold: "#FFD700",
          silver: "#C0C0C0",
          rose: "#B76E79",
          sapphire: "#0F52BA",
          ruby: "#E0115F",
          emerald: "#50C878",
        },
      },
    },
  },
  plugins: [],
};
export default config;