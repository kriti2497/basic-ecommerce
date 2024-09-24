/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0242e8",
        secondary: "#2059eb",
        baseText: "#a2a4a6",
        mainBg: "#F9F9F9",
        mainText: "#333333",
        accent: "#FFC107",
        link: "#0275D8",
        icon: "#72bfbc",
      },
    },
  },
  plugins: [],
};
