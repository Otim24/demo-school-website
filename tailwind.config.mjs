/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'school-blue': '#0a1628',
        'school-blue-mid': '#1e3a5f',
        'school-blue-light': '#2d5986',
        'school-gold': '#c9a84c',
        'school-gold-light': '#e8c97a',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Georgia', 'serif'],
      },
    },
  },
  plugins: [],
};

