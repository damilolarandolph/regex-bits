module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Roboto"]
    },
    extend: {
      colors: {
        ui: {
          black: "#353535",
          ming: "#3C6E71",
          white: "#FFFFFF",
          grey: "#D9D9D9",
          indigo: "#284B63"
        },
        syntax: {
          yellow: "#f9c80e",
          orange: "#f86624",
          red: "#ea3546",
          purple: "#662e9b",
          blue: "#43bccd"
        }
      }
    },
  },
  variants: {
    extend: {

    },
  },
  plugins: [],
}
