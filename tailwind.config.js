/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors:{
            'principal': 'hsl(292, 16%, 49%)'
        }
    },
  },
  plugins: [],
}