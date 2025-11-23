/** @type {import('tailwindcss').Config} */
const config = {
  // CRITICAL: Tells Tailwind to generate the dark: utility variants
  darkMode: "class", 
  
  // CRITICAL: Tells Tailwind where to find your utility classes
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./utils/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("flowbite/plugin") 
  ],
}

module.exports = config