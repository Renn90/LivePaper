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
        background: "var(--background)",
        foreground: "var(--foreground)",
        black: "#000000",
        white: "#ffffff",
        text: "#E1EAFD",
        dim: "#5B657A",
        primary: "#010C1E",
        secondary: "#3F8EFF",
      },
    },
  },
  plugins: [],
};
export default config;
