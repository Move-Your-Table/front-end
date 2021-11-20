const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {},
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      width: {
        fit: "fit-content",
      },
      height: {
        fit: "fit-content",
      },
      minWidth: {
        fit: "fit-content",
      },
    },
  },
  variants: {
    extend: {
      borderColor: ["focus-visible"],
      opacity: ["disabled"],
    },
  },
};
