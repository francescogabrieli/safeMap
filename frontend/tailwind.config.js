/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      dropShadow: {
        glow: "0 0 15px rgba(0, 255, 255, 0.8)",  // Glow per SafeMap
      },
      backgroundSize: {
        '200%': '200% 200%',  // Permette l'animazione più fluida
      },
      animation: {
        gradient: "gradientBG 5s ease infinite",
      },
      keyframes: {
        gradientBG: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
    },
  },
  plugins: [],
};
