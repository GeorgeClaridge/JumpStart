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
      'lightred': '#EFBEA2',
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
      animation: {
        marquee: 'marquee 25s linear infinite',
        marquee2: 'marquee2 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
    },
  },
  plugins: [],
}

