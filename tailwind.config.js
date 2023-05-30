/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        EuclidMedium: ['Euclid Medium', 'san-serif'],
        EuclidLight: ['Euclid Light', 'san-serif'],
      },
      fontWeight: {
        light: '300',
        normal: '400',
        medium: '500',
        bold: '700',
      },
    },
  },
  plugins: [],
}
