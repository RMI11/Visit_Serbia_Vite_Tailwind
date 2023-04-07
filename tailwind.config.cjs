/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        desktop:
          "linear-gradient(rgba(0,0,0, .4), rgba(0,0,0, .4)),url('./assets/hero.jpg')",
        hero: "linear-gradient(rgba(0,0,0, .4), rgba(0,0,0, .4)),url('./assets/autum.jpg')",
        hero1:
          "linear-gradient(rgba(0,0,0, .4), rgba(0,0,0, .4)),url('./assets/summer.jpg')",
      }),
      cursor: {
        default: "url(./assets/favicon50x50.png), default",
      },
    },
    screens: {
      xs: {'min': '200px', 'max': '480px'},
      ss: {'min': '481px', 'max': '620px'},
      sm: {'min': '621px', 'max': '768px'},
      md: {'min': '769px', 'max': '1060px'},
      lg: {'min': '1061px', 'max': '1200px'},
      xlg: {'min': '1201px', 'max': '2560px'},
    },
  },
  plugins: [],
};
