const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      transparent: "transparent",
      current: "currentColor",

      myt_bg: "#2B2B2B",
      myt_blue: "#14213D",
      myt_yellow: "#FCA311",
      myt_platinum: "#E5E5E5",
      myt_ghostwhite: "#F8F8FF",
    },
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
