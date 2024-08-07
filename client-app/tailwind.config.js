/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        adMoving: {
          "0%": { bottom: "-48em" },
          "100%": { bottom: "0px" },
          // "0%": { backgroundColor: "red", bottom: "-48em" },
          // "100%": { backgroundColor: "yellow", bottom: "0px" },
        },
      },
      animation: {
        "ad-moving": "adMoving 3s",
        "bounce-inf": "bounce 1s infinite",
        "bounce-stop": "bounce 1.5s 1",
        wiggle: "wiggle 1s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
