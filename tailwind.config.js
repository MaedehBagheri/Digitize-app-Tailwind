
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:"Vazir",
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy:"class",
    }),
  ],
};

