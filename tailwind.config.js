/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: '#030014',
        secondary: '#FFD700',
        light : {
          100: '#F8F8F8',
          200: '#F0F0F0',
          300: '#E8E8E8',
        },
        dark: {
          100: '#333333',
          200: '#292929',
        },
        accent: '#FFD700'
      }
    },
  },
  plugins: [],
}