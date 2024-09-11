/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./**/*.{js}"],
  theme: {
    fontFamily: {
      sans: "var(--font-sans)",
    },

    extend: {
      colors: {
        background: "rgb(var(--color-primary) / <alpha-value>)",
        forground: "rgb(var(--color-gray) / <alpha-value>)",
        secondary: "rgb(var(--color-secondary) / <alpha-value>)",
        "secondary-list": "rgb(var(--color-secondary-list) / <alpha-value>)",
        danger: "rgb(var(--color-danger) / <alpha-value>)",
        hover: "rgb(var(--color-hover) / <alpha-value>)",
        "gray-primary": "rgb(var(--color-gray-primary) / <alpha-value>)",
        "pink-primary": "rgb(var(--color-pink) / <alpha-value>)",
        "gray-secondary": "rgb(var(--color-gray-secondary) / <alpha-value>)",
        "gray-secondary-title":
          "rgb(var(--color-gray-secondary-title) / <alpha-value>)",
        "gray-secondary-before":
          "rgb(var(--color-gray-secondary-before) / <alpha-value>)",
        "gray-border": "rgb(var(--color-gray-border) / <alpha-value>)",
        "gray-border-service":
          "rgb(var(--color-gray-border-service) / <alpha-value>)",
        "card-border": "rgb(var(--color-border) / <alpha-value>)",
      },
      fontSize: {
        "7.5xl": "5rem", //80px
        h1: "96px", // 96px
        "h1-sm": "48px", // 96px,
        h2: "3.75rem", // 60px
        "h2-sm": "2rem", // 32px,
        h3: "2.5rem", // 40px
        "h3-sm": "1.25rem", // 20px
        h4: "2rem", // 32px
        "h4-sm": "1rem", // 16px
        h5: "1.25rem", // 20px
      },
      borderRadius: {
        "2lg": "0.675rem",
      },
      backgroundImage: {
        "brand-overlay":
          "linear-gradient(90deg, #1B1C36 6%, #FFFFFF 54.5%, #191A34 96.3%)",
      },

      animation: {
        "spin-slow": "autoRun 10s linear infinite",
      },
    },
  },
  plugins: [],
};
