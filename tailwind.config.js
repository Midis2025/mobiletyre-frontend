/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-orange': '#FB7E10',
        'brand-green': '#4ADE80',
        'brand-dark': '#0F172A',
      },
    },
  },
  plugins: [],
}
