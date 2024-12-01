/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", // Include your Vite `index.html` file
    "./src/**/*.{js,jsx,ts,tsx}", // Match React components
  ],
  theme: {
    extend: {
      colors: {
        primary: "#040d12",
        secondary: "#183d3d",
        tertiary: "#699484",
        quaternary: "#93b1a6",
        warning: {
          DEFAULT: "#eeb200b0",
          dark: "#d19d00",
        },
        danger: {
          DEFAULT: "#b40012aa",
          light: "#d10015",
        },
      },
      fontFamily: {
        koh: ["Poppins", "sans-serif"],
      },
    }, // Customize here if needed
  },
  plugins: [],
};
