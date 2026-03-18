export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#081526",
          navy: "#102845",
          navySoft: "#1C3557",
          gold: "#C9A45C",
          goldSoft: "#E0C68A",
          silver: "#D9DEE7",
          light: "#F5F7FB",
          line: "rgba(201, 164, 92, 0.18)",
        },
      },
      boxShadow: {
        soft: "0 10px 30px rgba(8, 21, 38, 0.12)",
        gold: "0 10px 30px rgba(201, 164, 92, 0.18)",
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #081526 0%, #102845 100%)",
        "gold-gradient": "linear-gradient(135deg, #E0C68A 0%, #C9A45C 100%)",
      },
    },
  },
  plugins: [],
};