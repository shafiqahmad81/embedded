/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./**/*.{js}"],
  theme: {
    fontFamily: {
      body: ["'Plus Jakarta Sans', sans-serif;"],
    },
    container: {
      center: true,
      screens: {
        "3xl": "1920px",
      },
    },

    extend: {
      colors: {
        primary: "rgb(var(--color-primary) / <alpha-value>)",
        secondary: "rgb(var(--color-secondary) / <alpha-value>)",
        danger: "rgb(var(--color-danger) / <alpha-value>)",
        gray: "rgb(var(--color-gray) / <alpha-value>)",
        gray_primary: "rgb(var(--color-gray-primary) / <alpha-value>)",
        gray_secondary: "rgb(var(--color-gray-secondary) / <alpha-value>)",
        card_border: "rgb(var(--color-border) / <alpha-value>)",
      },
      fontSize: {
        "7.5xl": "5rem", //80px
      },
      borderRadius: {
        "2lg": "0.675rem",
      },
    },
  },
  plugins: [],
};
