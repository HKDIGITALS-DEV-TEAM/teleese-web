/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "usual-gray": "#F5F1F1",
        "usual-green": "#0FB74B",
        "usual-purple": "#4F3FF0",
        "dark-purple": "#30325E",
        "light-purple": "#E9E7FD",
        "dark-text": "#FFFFFF",
        "dark-color": "#30325E",
        "dark-bg-color": "#a8a2e2"
      }
    },
  },
  plugins: [],
}
