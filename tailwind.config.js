/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lineBorder: "rgb(36, 41, 63)",
        buttonBorder: "rgb(36, 41, 63)",
        inputBorder: "rgb(47, 90, 255)",
      },
      backgroundImage: {
        'pokeball-svg': "url('/background-pokeball.svg')",
       }
    },
  },
  plugins: [],
};
