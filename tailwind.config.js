module.exports = {
  mode: "jit",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", "./public/index.html",
  ],
  theme: {
    extend: {
      backgroundColor: theme => ({
        "brand-color": "#5d3ebc"
      })
    },
  },
  plugins: [],
}
