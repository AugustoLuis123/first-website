/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '19.5px'],
      lg: ['18px', '21.94px'],
      xl: ['20px', '24.38px'],
      '2xl': ['24px', '29.26px'],
      '3xl': ['28px', '50px'],
      '4xl': ['48px', '58px'],
      '8xl': ['96px', '106px']
    },
    extend: {
      fontFamily: {
        palanquin: ['Palanquin', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        nunito: ['Nunito', 'sans-serif'],
      },
      colors: {
        'primary': "#ECEEFF",
        "dark-gray": "#121212",
        "coral-red": "#FF6452",
        "coral-orange": "#FFC36D",
        "slate-gray": "#6D6D6D",
        "pale-blue": "#F5F6FF",
        "hero1": '#FEE580',
        "hero2": '#FEDB62',
        "hero3": '#DF740C',
        "white-400": "rgba(255, 255, 255, 0.80)",
      
        'hob': ['#f4f4f4', '#a1a1a1', '#383838'],
        'thursday': ['#66a5b7', '#d74c39','#feed00'],
        'echoes': ['#a61e22', '#650c0c', '#30110f'],
        'kissland': ['#7ffcc2', '#40df90', '#119457'],
        'bbtm': ['#eee9e3','#f2e847', '#f4e12f'],
        'starboy': ['#041641', '#d8052c', '#ebbe08'],
        'melancholy': ['#b0451b', '#883413', '#3f1d09'],
        'afterhours': ['#c3290b', '#931e01', '#101908'],
        'dawnfm': ['#4a8397', '#0a4a63', '#2a383f'],
      },

      boxShadow: {
        '3xl': '0 10px 40px rgba(0, 0, 0, 0.1)'
      },
      backgroundImage: {
        'hero': "url('assets/images/collection-background.svg')",
        'card': "url('assets/images/thumbnail-background.svg')",
      },
      screens: {
        "wide": "1440px"
      }
    },
  },
  plugins: [],
}