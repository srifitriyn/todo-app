/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT";

export default withMT ({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        winterBlue: {
          1: "#eaf4f7",
          2: "#AFDDFA",
          3: "#4C9CCC",
          4: "#195790"
        },
        winterGray: {
          1: "#9bb0bf",
          2: "#839bb0",
          3: "#6791B2",
          4: "#56728F"
        }
      },
      screens: {
        'desktop' : {max: '1440px'},
        'tablet' : {max: '920px'},
        'phone' : {max: '572px'},
      },
      }
  },
  plugins: [],
});