/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#212121",
        lightDark: "#181818",
        lightWhite: "#F9F9F9",
        blackFont: "#231F20",
        grayFont: "#606060",
      },
    },
  },
  plugins: [],
};
