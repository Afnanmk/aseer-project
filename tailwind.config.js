/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["Titillium Web", "sans-serif"]
      },
      backgroundImage: {
        'hero-pattern': "url('/public/Assets/images/asser-1.jpg')",

      },
      gridTemplateColumns: {
        '16': 'repeat(auto-fill, minmax(200px, 1fr))'
      }
    },
  },
  plugins: [],
}

