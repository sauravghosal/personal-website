const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");
const colors = require("./node_modules/tailwindcss/colors");

const fontFamily = defaultTheme.fontFamily;
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: fontFamily,
    extend: {
      colors: {
        skyBlue: "#8BCDE9",
        pastelOrange: "#EDA486",
        orange: colors.orange,
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        heading: ["Open Sans", "sans-serif"],
      },
      animation: {
        blob: "blob 7s infinite",
        fade: "fade ease",
      },
      keyframes: {
        blob: {
          "0%": { transform: "translate(0px, 0px) scale(1.0)" },
          "33%": { transform: "translate(20px, -20px) scale(1.1)" },
          "66%": { transform: "translate(20px, -20px) scale(0.9)" },
          "100%": { transform: "translate(0x, 0px) scale(1)" },
        },
        fade: {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
      },
    },
  },

  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        h1: {
          fontSize: theme("fontSize.3xl"),
          fontWeight: theme("fontWeight.bold"),
          fontFamily: theme("fontFamily.heading"),
        },
        h2: {
          fontSize: theme("fontSize.2xl"),
          fontFamily: theme("fontFamily.heading"),
        },
        h3: {
          fontSize: theme("fontSize.xl"),
          fontFamily: theme("fontFamily.heading"),
        },
        h4: {
          fontSize: theme("fontSize.lg"),
          fontFamily: theme("fontFamily.heading"),
        },
        h5: {
          fontSize: theme("fontSize.lg"),
          fontFamily: theme("fontFamily.heading"),
        },
        h6: {
          fontSize: theme("fontSize.lg"),
          fontFamily: theme("fontFamily.heading"),
        },
      });
    }),
  ],
};
