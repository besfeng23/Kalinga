/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "kalinga-bg": "#FAF8F2",
        "kalinga-surface": "#FFFFFF",
        "kalinga-green": "#1F5C43",
        "kalinga-deep": "#123B2D",
        "kalinga-tan": "#E8D7B9",
        "kalinga-blue": "#6B9FB5",
        "kalinga-gold": "#F2B84B",
        "kalinga-text": "#1D1D1B",
        "kalinga-muted": "#66706A",
        border: "#E5E0D5",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
      },
      boxShadow: {
        soft: "0 24px 80px rgba(18, 59, 45, 0.12)",
      },
    },
  },
  plugins: [],
};
