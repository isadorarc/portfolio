module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-green": "#CBF3D2",
        "secondary-green": "#26E247",
        secondary: "#CBF3D2",
        danger: "#e3342f",
      },
      width: {
        "40vw": "40vw",
        "50vw": "50vw",
        "60vw": "60vw",
        "70vw": "70vw",
        "80vw": "80vw",
        "90vw": "90vw",
        "100vw": "100vw",
      },
      height: {
        "50vh": "50vh",
        "60vh": "60vh",
        "70vh": "70vh",
        "80vh": "80vh",
        "90vh": "90vh",
        "100vh": "100vh",
      },
    },
    fontFamily: {
      roboto: ["Roboto, sans-serif"],
      robotomono: ["Roboto Mono, monospace"],
      robotocondensed: ["Roboto Condensed, sans-serif"],
      robotoitalic: ["Roboto, sans-serif italic"],
      sourcecode: ["Source Code Pro, monospace"],
      montserrat: ["Montserrat, sans-serif"],
      lato: ["Lato, sans-serif"],
      poppins: ["Poppins, sans-serif"],
      mono: ["ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas"],
    },
    container: {
      center: true,
      padding: ".1rem",
    },
    screens: {
      sm: "640px",
      md: "768px",
    },
  },

  plugins: [],
};
