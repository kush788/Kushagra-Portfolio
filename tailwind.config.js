export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        glow: "glow 3s ease-in-out infinite",
      },
      keyframes: {
        glow: {
          "0%, 100%": { opacity: 0.6, filter: "blur(30px)" },
          "50%": { opacity: 1, filter: "blur(50px)" },
        },
      },
    },
  },
  plugins: [],
}
