/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary" : "#5928e5",
        "primary-alt": "#6f4dcc",
        "secondary" : "#FF0013",
        "accent" : "#7b7484",
        "warning" : "#f44336",
      }
    },
  },
  plugins: [],
}
