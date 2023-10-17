/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'red': '#ED6D48',
      'blue': '#5174C7',
      'lightblue': '#A2B9EF',
      'white': '#FFFCF9',
      'black': '#000000',

    },
    extend: {
      fontFamily: {
        'space': ['Space Grotesk', 'sans-serif'],
        'open': ['Open Sans', 'sans-serif']
      },
    },
  },
  plugins: [],
}

