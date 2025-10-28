/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'timor-red': '#DC241F',
        'timor-yellow': '#FFC726',
        'timor-black': '#000000',
        'timor-white': '#FFFFFF',
      },
    },
  },
  plugins: [],
}
