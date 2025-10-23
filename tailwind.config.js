module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors:{
        'primary': "#5f6fff"
      },
      gridTemplateColumns:{
      'auto':'repeat(auto-fill, minmax(200px,1fr))'
       }
    },
  },
  plugins: [],
}
