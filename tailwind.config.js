/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Classic Facebook colors
        'fb-blue': '#1877F2',
        'fb-dark': '#0A66C2',
        'fb-light': '#E7F3FF',
        'fb-gray': '#F0F2F5',
        'fb-gray-dark': '#CED0D4',
        'fb-text': '#050505',
        'fb-text-light': '#65676B',
      },
      fontFamily: {
        'sans': ['Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
