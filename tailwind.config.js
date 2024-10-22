/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html', 
    './journey.html', 
    './guide.html', 
  ],
  theme: {
    extend: {
      colors: {
        background: '#EBF4F6',
        primary: '#16325B',
        secondary: '#088395',
        third: '#37B7C3',
      },
      fontFamily: {
        poppins: ['Poppins'],
      },
    },
  },
  plugins: [],
}

