/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./src/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        red: "hsl(1, 90%, 64%)",
        blue: "hsl(219, 85%, 26%)",
        neutral: {
          100: "hsl(210, 60%, 98%)",
          200: "hsl(211, 68%, 94%)",
          300: "hsl(205, 33%, 90%)",
          400: "hsl(219, 14%, 63%)",
          500: "hsl(219, 12%, 42%)",
          600: "hsl(224, 21%, 14%)",
        },
      },
      fontFamily: {
        overpass: ["Plus Jakarta Sans", "sans-serif"],
      },
      fontWeight: {
        extralight: 200,
        light: 300,
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
      },
    },
  },
  plugins: [],
};