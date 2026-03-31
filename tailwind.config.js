/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: '#ce9036',
        dim: '#666666',
        dark: '#ffffff',
      }
    },
  },
  plugins: [],
}
