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
    },
  },
  variants: {
    extend: {},
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
