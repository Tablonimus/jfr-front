/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "420px",

      md: "650px",

      lg: "1000px",

      xl: "1360px",

      "2xl": "1650px",
    },
    extend: {
      colors:{
        whiteCustom:"#F2F0E4",
      },
      fontFamily: {
        title: ["Ubuntu", "sans-serif"],
        text: ["Inter", "serif"],
      },
    },
  },
  plugins: [],
};