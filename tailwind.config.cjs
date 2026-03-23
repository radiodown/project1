/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ivory: "rgb(var(--color-ivory) / <alpha-value>)",
        sand: "rgb(var(--color-sand) / <alpha-value>)",
        rosewood: "rgb(var(--color-rosewood) / <alpha-value>)",
        clay: "rgb(var(--color-clay) / <alpha-value>)",
        sage: "rgb(var(--color-sage) / <alpha-value>)",
        ink: "rgb(var(--color-ink) / <alpha-value>)",
        surface: "rgb(var(--color-surface) / <alpha-value>)",
        "surface-soft": "rgb(var(--color-surface-soft) / <alpha-value>)",
        "surface-tint": "rgb(var(--color-surface-tint) / <alpha-value>)",
        line: "rgb(var(--color-line) / <alpha-value>)",
        "line-strong": "rgb(var(--color-line-strong) / <alpha-value>)"
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
