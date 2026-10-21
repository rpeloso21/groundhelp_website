/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: '#8ce03f',
          greenHover: '#7ecc34',
          greenLight: '#f2fce2',
          greenDeep: '#28581c',
          dark: '#141f17',
          darkSoft: '#1e2b21',
          darkMuted: '#2a3a2f',
          surface: '#f8faf8',
          cardBorder: '#d4edcc',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(20, 31, 23, 0.06), 0 2px 6px -1px rgba(20, 31, 23, 0.04)',
        'float': '0 20px 35px -5px rgba(20, 31, 23, 0.12), 0 10px 15px -5px rgba(20, 31, 23, 0.04)',
        'card': '0 8px 30px rgba(0, 0, 0, 0.04)',
      }
    },
  },
  plugins: [],
}
