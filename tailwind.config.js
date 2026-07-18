/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['"Space Grotesk"', 'sans-serif'],
        display: ['"Playfair Display"', 'serif'],
      },
      colors: {
        'space': '#0A0E1A',
        'space-light': '#1A1F2E',
        'brass': '#C9A84C',
        'brass-light': '#D4AF37',
        'platinum': '#E8E6E3',
        'electric': '#00B4D8',
        'electric-dark': '#0096C7',
        'signal': '#E63946',
        'charcoal': '#1A1F2E',
        'titanium': '#2D3748',
        'pearl': '#F5F2EB',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'lens-flare': 'lensFlare 12s ease-in-out infinite',
      },
      keyframes: {
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(201, 168, 76, 0.2)' },
          '50%': { boxShadow: '0 0 40px rgba(201, 168, 76, 0.5)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        lensFlare: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(-20%, -20%) scale(1.2)' },
        },
      },
    },
  },
  plugins: [],
}