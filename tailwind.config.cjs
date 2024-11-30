const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './components/**/*.jsx',
    './*.jsx'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', 'sans-serif']
      },
      colors: {
        'very-dark-grayish-blue': '#48556A',
        'desaturated-dark-blue': '#6D7F97',
        'grayish-blue': '#9EAFC2',
        'light-grayish-blue': '#ECF2F8'
      },
      fontSize: {
        sm: '0.8125rem'
      },
      spacing: {
        18: '4.5rem',
        50: '12.5rem'
      },
      boxShadow: {
        card: '0 25px 25px 0 rgba(0, 0, 0, 0.08)'
      },
      letterSpacing: {
        widest: '5px'
      },
      maxWidth: {
        card: '730px'
      }
    },
  },
  plugins: [
    plugin(({ addVariant }) => {
      addVariant('is-active', ['.is-active &', '&.is-active']);
      addVariant('group-is-active', [':merge(.group).is-active &', ':merge(.group)&.is-active']);      
    })
  ],
}
