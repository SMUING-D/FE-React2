/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundColor: {
        'rgb-35-39-49': 'rgb(35, 39, 49)',
      },
      keyframes: {
        shakeAnimation: {
          '0%': { transform: 'translate(-5px, 0) rotate(-5deg)' },
          '25%': { transform: 'translate(5px, 0) rotate(5deg)' },
          '50%': { transform: 'translate(-5px, 0) rotate(-5deg)' },
          '75%': { transform: 'translate(5px, 0) rotate(5deg)' },
          '100%': { transform: 'translate(-5px, 0) rotate(-5deg)' },
        },
      },
      animation: {
        button: 'shakeAnimation 2s infinite',
        activeButton: 'shakeAnimation 4s ease infinite',
      },
    },
  },
  plugins: [],
}
