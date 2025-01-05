/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        primaryColor: "#0A192F",
        designColor: "#64ffda",
        lightColor: "#ccd6f6",
        darktext: "#8892b0",
        hovarColor: "#64FFDA",
      },
      fontFamily:  {
        bodyFont: ["Montserrat", "sans-serif"],
      },
      backgroundImage: {
        "banner-bg": "url('/public/bannerBg.jpg')",
      },
    },
  },
  plugins: [daisyui],
};

