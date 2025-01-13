import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
  theme: {
    extend: {
      screens: {
        tab: '768px',
        lap: '1024px',
        desk: '1366px',
        max: '1600px',
      },
      colors: {
        pageBg: '#28282a',
        fontColor: '#f5f5f5',
      },
      fontFamily: {
        base: ['Roboto', 'sans-serif'],
      },
      fontWeight: {
        300: '300',
        400: '400',
        500: '500',
      },
    },
  },
  plugins: [],
} satisfies Config;
