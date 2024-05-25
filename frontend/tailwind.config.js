/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: "tw-",
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        kaushan: ["Kaushan Script", "sans-serif"],
        lato: ["Lato", "sans-serif"],
      },
      colors: {
        primary: "#2d4877",
        secondary: "#fdfaf3",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["hover"],
      scale: ["active"],
    },
  },
  plugins: [],
};
