/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./404.html",
    "./index-script.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      animation: {
        'fadeInUp': 'fadeInUp 1s ease',
        'slideInLeft': 'slideInLeft 1s ease',
        'slideInRight': 'slideInRight 1s ease',
        'slideUp': 'slideUp 15s linear infinite',
      },
      keyframes: {
        fadeInUp: {
          'from': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          'to': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        slideInLeft: {
          'from': {
            opacity: '0',
            transform: 'translateX(-50px)',
          },
          'to': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        slideInRight: {
          'from': {
            opacity: '0',
            transform: 'translateX(50px)',
          },
          'to': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        slideUp: {
          'from': {
            backgroundPosition: '0 100%',
          },
          'to': {
            backgroundPosition: '0 0',
          },
        },
      },
    },
  },
  plugins: [],
}