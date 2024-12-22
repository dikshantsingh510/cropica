/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        text_primary: "#1c2024",
        text_secondary: "#4F4F4F",
        bg_primary: "#fff",
        bg_secondary: "#D7E89A",
        bg_tertiary: "#DEE8CE",
        accent: "#364423",
      },
      fontFamily: {
        bricolage_gratesque: ["var(--font-bricolage-grotesque)"],
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: { marquee: "marquee 10s linear infinite" },
    },
  },
  plugins: [],
};

export default config;
