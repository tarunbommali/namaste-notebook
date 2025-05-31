/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Brand Colors
        primary: {
          DEFAULT: "#0ea5e9", // Blue
          light: "#38bdf8",
          dark: "#0369a1",
        },
        secondary: {
          DEFAULT: "#a855f7", // Purple
          light: "#c084fc",
          dark: "#7c3aed",
        },
        accent: {
          DEFAULT: "#22c55e", // Green
          light: "#4ade80",
          dark: "#15803d",
        },

        // Semantic Colors
        success: "#10b981",
        warning: "#f59e0b",
        error: "#ef4444",

        // Neutral/Gray
        gray: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },

        // Text
        text: {
          light: "#0f172a",
          dark: "#f8fafc",
          muted: "#64748b",
        },

        // Backgrounds
        background: {
          light: "#ffffff",
          dark: "#030712",
          "light-alt": "#f8fafc",
          "dark-alt": "#1e293b",
        },

        // Border Colors
        border: {
          light: "#e2e8f0",
          dark: "#1e212b",
        },
      },

      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },

      borderRadius: {
        DEFAULT: '0.5rem',
        lg: '1rem',
        xl: '1.5rem',
      },

      boxShadow: {
        card: '0 4px 12px rgba(0,0,0,0.05)',
        hover: '0 10px 20px rgba(0,0,0,0.1)',
      },

      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      }
    },
  },
  plugins: [],
};
