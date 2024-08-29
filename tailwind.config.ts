import type { Config } from "tailwindcss";
const { fontFamily } = require("tailwindcss/defaultTheme")


const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
         "bg-img-1" : "url('/pic2.jpg')",
      },
       screens: {
        'tablet': '640px',  
        'desktop': '1024px',  
        
      },
      height: {
        hero: '800px',
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
export default config;
