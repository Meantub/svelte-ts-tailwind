module.exports = {
  mode: 'jit',
  purge: [
    "./src/**/*.svelte",
    "./src/**/*.js",
    "./public/**/*.html",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
