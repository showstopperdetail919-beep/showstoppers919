/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: '#0A0A0A',
          gold: '#D4AF37',
          'gold-light': '#E8C868',
          'gold-dark': '#B8941F',
          charcoal: '#1A1A1A',
          gray: '#2A2A2A',
          'gray-light': '#8A8A8A',
          white: '#FAFAFA',
        }
      },
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
