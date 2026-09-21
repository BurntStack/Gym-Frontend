/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#FBF8F3',
        sand: '#F3EEE6',
        ink: {
          DEFAULT: '#1A1A1F',
          soft: '#3d3d45',
          muted: '#71717a',
        },
        accent: {
          DEFAULT: '#E23A2E',
          soft: '#FDECEA',
          600: '#c62f24',
        },
      },
      fontFamily: {
        display: ['Oswald', 'Arial Narrow', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      letterSpacing: {
        wider2: '0.16em',
      },
      boxShadow: {
        soft: '0 12px 40px -18px rgba(26,26,31,0.25)',
        card: '0 4px 24px -12px rgba(26,26,31,0.18)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.5s ease-out both',
      },
    },
  },
  plugins: [],
}
