/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", // entry HTML
    "./src/**/*.{js,jsx,ts,tsx}", // all files inside src
  ],
  theme: {
    extend: {
      scrollMargin: {
        24: "6rem", // enables scroll-mt-24
      },
    },
  },
  plugins: [],
};
