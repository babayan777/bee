// eslint-disable-next-line no-undef
const { fontFamily } = require( 'tailwindcss/defaultTheme' )

module.exports = {
  purge: [ './src/**/*.{js,jsx,ts,tsx}', './public/index.html' ],
  darkMode: false,
  theme: {
    important: true,
    screens: {
      'xs': '370px',
      'xm': '560px', // rotate size
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      boxShadow: {
        '3xl': '0px -1px 40px rgba(23, 23, 23, 0.12)',
      },
      zIndex: {
        '-1': -1,
        100: 100,
        200: 200,
      },
      inset: {
        '0.5/10': '5%',
        '1.5/10': '15%',
        '3/10': '30%',
        '6/10': '60%',
      },
      fontFamily: {
        sans: [ "Montserrat arm", ...fontFamily.sans ],
      },
      maxWidth: {
        '8xl': '88rem',
      },
      fontSize: {
        'smm': '0.85rem',
        '1.5xl': '1.375rem',
      },
      height: {
        '4.5': '1.125rem',
        '11': '2.75rem',
        '18': '4.5rem',
        '22': '5.5rem',
        '70': '17.5rem',
        '76': '19rem',
        '84': '21rem',
        '92': '23rem',
      },
      width: {
        '7.5': '1.875rem',
        '15.5': '4.375rem',
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '100': '61rem',
      },
      margin: {
        '4.25': '1.063rem',
      },
      letterSpacing: {
        widest: '0.03rem',
      },
      backgroundColor: {
        gray: {
          10: '#f2f2f2',
        },
      },
      colors: {
        green: {
          DEFAULT: '#20AFA2',
        },
        blue: {
          DEFAULT: '#11517E',
          light: '#2074AF',
        },
        yellow: {
          DEFAULT: '#F2CB51',
        },
        gray: {
          darkest: '#2C2C2C',
          darker: '#444444',
          dark: '#4F4F4F',
          DEFAULT: '#828282',
          light: '#B4B4B4',
        },

      },
      maxHeight: {
        "100xl": "33rem",
      },
    },
  },
  variants: {
    extend: { borderColor: [ 'active', 'hover' ], backgroundColor: [ 'active' ] },
  },
  plugins: [],
}
