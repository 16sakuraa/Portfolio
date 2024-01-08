/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "bannerbg": "url('../public/Image/bgImage.jpg')"
      },
      fontFamily: {
        "jose": ['Josefin Sans'],
        "josebold": ['Josefin Sans Bold'],
        "itim": ['Itim']
      }
    },
  },
  plugins: [],
}

