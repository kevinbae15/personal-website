/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        'glass-bg': '#f0f0f5',
        'text-primary': '#1c1c1e',
        'text-secondary': '#3a3a3c',
        'text-muted': '#6e6e73',
        'text-faint': '#aeaeb2',
        'accent': '#6366f1',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
