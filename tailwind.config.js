/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#0D1117',
        'bg-card': '#161B22',
        'bg-elevated': '#1C2333',
        'bg-highlight': '#21262D',
        'border-default': '#30363D',
        'border-active': '#00D4FF',
        'cyan': '#00D4FF',
        'cyan-dim': '#0A8DA8',
        'green': '#00FF41',
        'green-dim': '#238636',
        'purple': '#7C3AED',
        'purple-dim': '#553098',
        'orange': '#F0883E',
        'red': '#F85149',
        'text-primary': '#E6EDF3',
        'text-secondary': '#8B949E',
        'text-muted': '#484F58',
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', 'Consolas', 'monospace'],
        heading: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      animation: {
        'blink': 'blink 1s step-end infinite',
        'typing': 'typing 3s steps(30) forwards',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'scan': 'scan 4s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'fade-up': 'fadeUp 0.8s ease forwards',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        typing: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
        glow: {
          '0%': { textShadow: '0 0 5px #00D4FF, 0 0 10px #00D4FF' },
          '100%': { textShadow: '0 0 10px #00D4FF, 0 0 30px #00D4FF, 0 0 50px #0A8DA8' },
        },
        scan: {
          '0%, 100%': { transform: 'translateY(-100%)' },
          '50%': { transform: 'translateY(100%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
