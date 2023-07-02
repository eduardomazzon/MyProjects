/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true
    },
    screens: {
      sm: '600px',
      md: '728px',
      lg: '1024px',
      xl: '1240px'
    },
    extend: {},
  },
  plugins: [],
}