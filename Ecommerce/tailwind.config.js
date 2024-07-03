/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'max-xl': {'max': '1280px'}, 
        'screen-ipadPro':{'max':'1024px'},
        'screen-ipad':{'max':'912px'},
        'screen-product':{'max':'780px'},
        'screen-mobile':{'max':'640px'},
        'screen-tele':{'max':'500px'}
      },
    },
  },
  plugins: [],
}

