/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        themeRed: "#E01D1D",
      },
      animation: {
        "float-slow": "float 3s ease-in-out infinite",
        shimmer: "shimmer 2s infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { left: "-100%" },
          "100%": { left: "100%" },
        },
      },
    },
  },
  plugins: [],
};
