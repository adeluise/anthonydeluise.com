module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class', // This enables dark mode
  theme: {
    extend: {
      colors: {
        'ecru': '#FFFAEE',
        'cornflower': '#6495ED',
        'near-black': '#1A1A1A',
        'off-white': '#E8E8E8',
      },
      fontFamily: {
        'heading': ['Bricolage Grotesque', 'sans-serif'],
        'body': ['Geist', 'sans-serif'],
      },
    },
  },
  plugins: [],
}