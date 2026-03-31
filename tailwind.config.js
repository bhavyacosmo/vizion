/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: '#FFD700',
        dim: '#b0b0b0',
        dark: '#030303',
      }
    },
  },
  plugins: [],
}
