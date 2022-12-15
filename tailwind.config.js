/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pry: '#1E1E1E',
        sec: '#6C99BC'
      }
    },
  },
  plugins: [],
}
