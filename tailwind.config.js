/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#04283A',
        wordpress: '#4A50AE',
        blue: '#37395B',
        orange: '#FF6043'
      },
      boxShadow: {
        xl: '0 0px 25px 0px rgba(0, 0, 0, 0.1), 0 0px 10px 0px rgba(0, 0, 0, 0.06)'
      },
      fontFamily: {
        'quicksand': ['Quicksand', 'system-ui'],
        'montserrat': ['Montserrat', 'arial']
      }
    }
  },
  plugins: [],
}
