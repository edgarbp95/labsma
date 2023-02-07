/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      screens: {
        '2xl': {'max': '1535px'},
        // => @media (max-width: 1535px) { ... }
  
        'xl': {'max': '1279px'},
        // => @media (max-width: 1279px) { ... }
  
        'lg': {'max': '1023px'},
        // => @media (max-width: 1023px) { ... }
  
        'md': {'min': '901px','max': '1400px'},
        // => @media (max-width: 767px) { ... }
  
        'sm': {'max': '900px'},
        // => @media (max-width: 639px) { ... }
        },colors:{
          turquoise:"#41a98e",
          grayl: "#7f8382",
          bluew: "#100e9f",
        }
    },
  },
  plugins: [],
}
