module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#04283A',
        wordpress: '#4A50AE',
        blue: '#37395B'
      },
      backgroundColor: {
        orange: '#FF6043',
        blue: '#37395B'
      },
      boxShadow: {
        xl: '0 0px 25px 0px rgba(0, 0, 0, 0.1), 0 0px 10px 0px rgba(0, 0, 0, 0.04)'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
