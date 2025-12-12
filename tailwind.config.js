/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,md,mdx}"],
  theme: {
    extend: {
      colors: {
        rataalada: "hsl(240, 100%, 50%)",
        "rataalada-semi": "hsl(240, 50%, 50%)",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
