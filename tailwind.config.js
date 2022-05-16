const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

const fontFamily = defaultTheme.fontFamily;
module.exports = {
  darkMode: "class",
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    screens: {
      xs: "475px",
      ...defaultTheme.screens,
    },
    fontFamily: fontFamily,
    extend: {
      fontFamily: {
        header: ["Poppins", "sans-serif"],
        sans: ["Open Sans", "sans-serif"],
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
          fontFamily: theme("fontFamily.header"),
        },
        h2: {
          fontSize: theme("fontSize.2xl"),
          fontFamily: theme("fontFamily.header"),
        },
        h3: {
          fontSize: theme("fontSize.xl"),
          fontFamily: theme("fontFamily.header"),
        },
        h4: {
          fontSize: theme("fontSize.lg"),
          fontFamily: theme("fontFamily.header"),
        },
        h5: {
          fontSize: theme("fontSize.lg"),
          fontFamily: theme("fontFamily.header"),
        },
        h6: {
          fontSize: theme("fontSize.lg"),
          fontFamily: theme("fontFamily.header"),
        },
      });
    }),
  ],
};
