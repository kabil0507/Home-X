/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-red': '#D32F2F', // Vibrant but professional red
        'brand-dark': '#0B1120', // Very deep slate/blue for a modern tech/architectural feel
        'brand-gray': '#F8FAFC', // Slate 50
        'brand-light': '#FFFFFF',
        'brand-muted': '#64748B', // Slate 500 for secondary text
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        display: ['"Outfit"', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 20px 40px -15px rgba(0, 0, 0, 0.05)',
        'premium': '0 4px 20px -2px rgba(0, 0, 0, 0.1)',
        'glow': '0 0 20px rgba(211, 47, 47, 0.3)',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      }
    },
  },
  plugins: [],
}
