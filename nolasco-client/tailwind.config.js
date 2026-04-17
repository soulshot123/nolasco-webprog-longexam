export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'dark-gold': {
          50: '#fdf4e8',
          100: '#fce8c7',
          200: '#f8d68a',
          300: '#f4c34d',
          400: '#f0b024',
          500: '#ec9e0b',
          600: '#d97706',
          700: '#b55f00',
          800: '#994a00',
          900: '#7d3c00'
        },
        'dark-blue': {
          50: '#f0f7ff',
          100: '#e1eeff',
          200: '#c7dffe',
          300: '#a8c9fd',
          400: '#8eb2fa',
          500: '#649df5',
          600: '#4680eb',
          700: '#2563d6',
          800: '#1a4db8',
          900: '#0f3a99'
        },
        gold: {
          50: '#fdf8e8',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309'
        }
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      }
    }
  },
  plugins: [],
};
