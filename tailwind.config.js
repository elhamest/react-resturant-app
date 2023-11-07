/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        darkPrimaryColor: "#1d965c", //"#00796b",
        primaryColor: "#32bb78", //"#009688"
        lightPrimaryColor: "#b2dfdb",
        accentColor: "#ffc107",
        primaryText: "#212121",
        secondaryText: "#757575",
        thirdText: "#99a5a3",
        deviderColor: "#bdbdbd",
        textIconColor: "#ffffff",
      },
      screens:{
        sm: "500px",

      }
    },
    //screens: {
      //sm: "640px",
      // => @media (min-width: 640px) { ... }

      //md: "768px",
      // => @media (min-width: 768px) { ... }

      //lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      //xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      //"2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    //},
  },
  plugins: [],
};
