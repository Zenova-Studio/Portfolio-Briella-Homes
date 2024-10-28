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
        "smoky-black": "#0d0d0d",
        "eerie-black": "#1e1e1e",
        "dark-liver": "#4d4d4d",
        "philippine-silver": "#b3b3b3",
        "platinum": "#e1e1e2",
        "heliotrope-gray": "#ad9b9b",
        "crayola-blue": "#2463eb",
        "pale-pink": "#f7dddd",
        "teal-deer": "#85efac",
      },
    },
  },
  plugins: [],
};
export default config;
