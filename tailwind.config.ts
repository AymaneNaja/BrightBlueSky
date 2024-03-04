import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        'logo': ['helvetica'],
        'handwritten-1': ['Monotype Corsiva'],
        'handwritten-2': ['Comic Sans MS'],
        'handwritten-3': ['Bradley Hand ITC '],
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  }

};
export default config;
