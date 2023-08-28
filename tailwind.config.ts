import plugin from "npm:tailwindcss@3.3.3/plugin.js";
import daisyui from "daisyui";

export default {
  content: ["./**/*.tsx"],
  theme: {
    container: { center: true },
    fontFamily: {
      "futura": ["futura-pt", "sans-serif"],
      "sans": ["roboto", "sans-serif"],
      "times": ["Times New Roman", "serif"],
    },
    colors: {
      gray: {
        10: "#F4F4F4",
        20: "#E2E2E2",
        30: "#C7C7C7",
        40: "#555555",
        50: "#666666",
        60: "#353535",
        70: "#4a4a4a",
        80: "#777777",
        90: "#F5F5F5",
        91: "#F1F1F1",
        92: "#6D6E70",
        93: "#fbf9f7",
        94: "#F8F5F1",
      },
      red: {
        10: "#FC4F63",
        20: "#C33E46",
      },
      creme: {
        10: "#F8F5F1",
        20: "#F4EBD9",
        30: "#EDE2CD",
        40: "#E1D1B1",
      },
      blue: "#009AFF",
      white: "#FFFFFF",
      black: "#121212",
      "gray-translucid": "rgba(0, 0, 0, 0.04)",
      "black-translucid": "#1212121a",
      "black-10": "#000000",
      "black-20": "#363636",
      "green-10": "#25D366",
      "green-20": "#1EBB59",
      "green-subscription": "#208778",
      "green-kitchen": "#475B35",
      "orange-kitchen": "#E28759",
      "orange-kitchen-bar": "#E3DF93",
    },
    extend: {
      screens: {
        "xs": "280px",
        "3xl": "1920px",
      },
      boxShadow: {
        "rounded": "0 0 0 3px #fff, 0 0 0 4px #e2e2e2",
        "large": "0 1px 5px 0 rgba(0, 0, 0, 0.1)",
        "selected": "0 0 0 3px #fff, 0 0 0 4px #000",
      },
    },
  },
  plugins: [
    daisyui,
    plugin(function ({ addVariant }) {
      addVariant("folded-header", "body.js-folded-header &");
      addVariant("is-kitchen", "body.js-is-kitchen &");
    }),
  ],
  daisyui: { themes: [], logs: false },
};
