/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ivory: "#fbf5ef",
        sand: "#f2e6db",
        rosewood: "#7d5b52",
        clay: "#b48a78",
        sage: "#7f8c79",
        ink: "#352620"
      },
      fontFamily: {
        sans: ["'Noto Sans KR'", "system-ui", "sans-serif"],
        display: ["'Cormorant Garamond'", "serif"]
      },
      boxShadow: {
        card: "0 28px 60px -36px rgba(64, 36, 26, 0.34)"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" }
        },
        "fade-up": {
          "0%": { opacity: 0, transform: "translateY(18px)" },
          "100%": { opacity: 1, transform: "translateY(0)" }
        }
      },
      animation: {
        "float-slow": "float 7s ease-in-out infinite",
        "fade-up": "fade-up 0.7s ease-out both"
      }
    }
  },
  plugins: []
};

