module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'formImg': "url('/form.jpg')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
      colors: {
        'formdowncolor1': '#000000d2',
        'formdowncolor2': '#000000b3',
      },
    },
  },
  plugins: [],
}