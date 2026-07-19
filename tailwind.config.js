/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        coral: '#FF6B6B',
        teal: '#4ECDC4',
        sunny: '#FFE66D',
        purple: '#A855F7',
        sky: '#38BDF8',
      },
    },
  },
  plugins: [],
};
