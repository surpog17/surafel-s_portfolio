/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sora: ["Sora", "sans-serif"],
      },
      colors: {
        day: "#ffffff", // white background
        night: "#1a202c", // dark background
        textColor: "#2d3748", // text color
      },
    },
  },
  plugins: [],
};
