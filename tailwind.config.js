/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sora: ['Sora', 'sans-serif'],
        manrope: ['Manrope', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        dm: ['DM Sans', 'sans-serif'],
      },
      colors: {
        orange: {
          50: '#FFF7F2',
          100: '#FFEDE0',
          200: '#FFDBB8',
          300: '#FFC085',
          400: '#FFA050',
          500: '#F97316',
          600: '#EA6A0A',
          700: '#C2540A',
          800: '#9A420C',
          900: '#7C360D',
        },
      },
      borderRadius: {
        '2xl': '16px',
        '3xl': '20px',
        '4xl': '28px',
        '5xl': '36px',
      },
      boxShadow: {
        'card': '0 4px 24px rgba(0,0,0,0.06)',
        'card-hover': '0 12px 40px rgba(0,0,0,0.12)',
        'orange': '0 8px 30px rgba(249,115,22,0.4)',
      },
    },
  },
  plugins: [],
};
