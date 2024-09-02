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
        gray: "rgb(var(--color-gray) / <alpha-value>)",
        danger: "rgb(var(--color-danger) / <alpha-value>)",
      },
    },
  },
  plugins: [],
};
