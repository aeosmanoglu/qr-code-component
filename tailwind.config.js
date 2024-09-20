/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      boxShadow: {
        'card': '0px 25px 25px 0px rgba(0, 0, 0, 0.0477)',
      },
      fontSize: {
        'body': ['15px', '21px'],
        'title': ['22px', '26.4px'],
      },
      fontFamily: {
        'outfit': ['Outfit', 'sans-serif'],
      },
      colors: {
        'slate-300': '#D5E1EF',
        'slate-500': '#68778D',
        'slate-900': '#1F314F',
      }
    },
  },
  plugins: [],
}
