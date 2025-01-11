/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "320px",
      sm: "768px",
      md: "1152px",
      lg: "1400px",
      xl: "1920px",
    },

    extend: {
      fontFamily: {
        Inter: ["Inter", "serif"],
      },
      colors: {
        "primary-color": "#043873",
        "primary-light": "#4F9CF9",
        "secondary-light": "#FFE492",
        "secondary-color": "#A7CEFC",
        "secondary-dark": "#212529",
      },
    },
  },
  plugins: [],
};
