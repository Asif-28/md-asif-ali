import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    colors: {
      lightblue: "#9DCCFF",
      darkblue: "#2F327D",
      greenish: "#49BBBD",
      violet: "#252641",
    },
  },
  plugins: [],
};
export default config;
