/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        supermarkt: "url('../src/images/supermarkt.jpg')",
        keuken: "url('../src/images/keuken.jpg')",
        school: "url('../src/images/school.jpg')",
      },
      colors: {
        card: "#F2F2F2",
        section: "#F2F2F2",
        niceGreen: "#46B92A",
      },
      fontFamily: {
        lato: ["Lato", "sans-serif"],
      },
    },
  },
  plugins: [],
};
