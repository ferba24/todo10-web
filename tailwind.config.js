module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        wordpress: 'var(--color-wordpress)',
        blue: 'var(--color-blue)',
      },
      backgroundColor: {
        orange: 'var(--color-orange)',
        blue: 'var(--color-blue)',
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
