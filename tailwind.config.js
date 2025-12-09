/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx,js,jsx}",
    "./pages/**/*.{ts,tsx,js,jsx}",
    "./components/**/*.{ts,tsx,js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f9fafb',
          900: '#0f172a'
        }
      },
      boxShadow: {
        'soft': '0 20px 40px rgba(15,23,42,0.06)'
      },
      fontFamily: {
        poppins: ['var(--font-poppins)'],
        inter: ['var(--font-inter)'],
        roboto: ['var(--font-roboto)']
      }
    },
  },
  plugins: [],
}
