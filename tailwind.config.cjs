/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    fontSize: {
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xlg: 24,
      "2xl": 32,
    },
    colors: {
      "gray-900": "#222226",
      "gray-800": "#34343A",
      "gray-400": "#7C7C8A",
      "orange-800": "#FF9000",
      "orange-900": "#E1781A",
    },
    extend: {
      fontFamily: {
        sans: "Inter, sans-serif",
      },
    },
  },
  plugins: [],
};
