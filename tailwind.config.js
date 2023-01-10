module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './containers/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        violet: {
          dark: '#231841',
          light: '#441F84',
          DEFAULT: '#8E52F5',
        },
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
}
