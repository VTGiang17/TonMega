const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Poppins", ...defaultTheme.fontFamily.serif],
      },
    },
    colors: {
      white: "#FBF9F1",
      black: "rgba(17, 17, 17, 1)",
    },
  },
  plugins: [],
};
