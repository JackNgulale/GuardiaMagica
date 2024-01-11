/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.{tsx,ts}",
    "./src/app/**/*.{tsx,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary500: "#f43f5e",
        primary400: "#fb7185",
        primary300: "#fda4af",
        primary100: "#fecdd3",
        primary50: "#fff1f2",
        primary40: "#efb9d975",
        green400: "#a3e635"
      },
      fontFamily:{
        Baloo: ['BalooBold'],
        BalooVariable: ['BalooVariable'],
        Poppins: ['Poppins'],
        Balsamiq: ['Balsamiq'],
      }
    },
  },
  plugins: [],
}

