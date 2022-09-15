/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'my_bg_image' : "url('../public/images/img2.jpeg')",
        'my_bg_image2' : "url('../public/images/img1.jpeg')",
      }
    },
  },
  plugins: [],
}
