export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#050B14",
        primary: "#0A1F3C",
        neon: "#00D1FF",
        accent: "#4CC9F0",
        soft: "#0F172A",
      },
      boxShadow: {
        glow: "0 0 20px rgba(0, 209, 255, 0.5)",
      },
    },
  },
  plugins: [],
};