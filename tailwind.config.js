module.exports = {
  purge: [], // use this during development state
  // purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'], // use this during production state
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'xs': { 'min': '360px', 'max': '414px' },
      // => @media (min-width: 640px) { ... }

      'sm': { 'min': '414px', 'max': '640px' },
      // => @media (min-width: 1024px) { ... }

      'md': { 'min': '640px', 'max': '1024px' },
      // => @media (min-width: 640px) { ... }

      'lg': { 'min': '1024px', 'max': '1280px' },
      // => @media (min-width: 1024px) { ... }

      'xl': { 'min': '1280px' },
      // => @media (min-width: 1280px) { ... }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
