/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      aspectRatio: {
        "13/7": "13 / 7",
        "4/2": "4 / 2",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
