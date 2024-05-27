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
      height: {
        24: "6rem",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["hover", "active"],
      scale: ["hover", "active"],
    },
  },
  plugins: [],
};
