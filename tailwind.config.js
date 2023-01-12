/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./public/**/*.{html,js}",
    './node_modules/tw-elements/dist/js/**/*.js'
  ],
  theme: {
    fontSize: {
      xs: '12px',
      sm: '14px',
      base: '15px',
      body1: '17px',
      body2: '18px',
      xl: '20px',
      '2xl': '24px',
      '3xl': '28px',
      '4xl': '32px',
      '5xl': '36px',
      '6xl': '40px',
      '7xl': '45px',
      '8xl': '50px',
      '9xl': '54px',
     
    },
    extend: {
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        think: ["Think", "sans-serif"],
        hey: ["Hey-November", "sans-serif"],
        viner: ["Viner", "sans-serif"],
        modern: ["modern20", "sans-serif"],
        gloucester: ["Gloucester", "sans-serif"],

      },
      colors: {
        primary: {
          100: '#cffafe',
          200: '#a5f3fc',
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
          700: '#0e7490',
          800: '#155e75',
          900: '#164e63',
        },
        secondary: {
          100: '#cffafe',
          200: '#a5f3fc',
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
          700: '#0e7490',
          800: '#155e75',
          900: '#164e63',
        },
        red: {
          light: "#F73434",
          dark: "#F83635",
        },
        green: {
          light: "#DFF6DD",
          dark: "#34c67a",
        },
        yellow: {
          light: "#FED9CC",
          dark: "#F3E45D",
        },
        blue: {
          light: "#E3EFF9",
          dark: "#1890FF",
        },
        purple: {
          light: "#F7F7F7",
          dark: "#5142FC",
        },
       
      },
    },
    screens: {
      sm:'0',
      tablet: "768px",
      md: "992px",
      lg: "1200px",
      xl: "1500px",
      xxl: "1700px",
    },
    container: {
      center: true,
    },
  },
  plugins: [
    require("tw-elements/dist/plugin"),
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
}

