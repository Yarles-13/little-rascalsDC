import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        fiestaRed: '#E63946',
        cactusGreen: '#2A9D8F',
        sunYellow: '#F4A261',
        terracotta: '#E76F51',
        papelPink: '#FF5E78',
        indigoBlue: '#264653',
      },
      animation: {
        'fade-in': 'fadeIn 1.5s ease-in-out forwards',
        'fade-in-delay': 'fadeIn 2s ease-in-out forwards',
        'bounce': 'bounce 1s infinite',
        'wiggle': 'wiggle 1.5s cubic-bezier(0.25, 1, 0.5, 1) forwards',
        'crawl': 'crawl 2s ease-in-out forwards',
        'jump': 'jump 1.5s ease-in-out infinite',
        'cozy': 'cozy 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '15%': { transform: 'rotate(3deg)' },
          '30%': { transform: 'rotate(-3deg)' },
          '45%': { transform: 'rotate(2deg)' },
          '60%': { transform: 'rotate(-2deg)' },
          '75%': { transform: 'rotate(1deg)' },
          '90%': { transform: 'rotate(-1deg)' },
        },
        crawl: {
          '0%': { transform: 'translateX(-10px)' },
          '50%': { transform: 'translateX(10px)' },
          '100%': { transform: 'translateX(0)' },
        },
        jump: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        cozy: {
          '0%, 100%': { transform: 'translateX(0)' },
          '20%': { transform: 'translateX(-6px)' },
          '40%': { transform: 'translateX(6px)' },
          '60%': { transform: 'translateX(-4px)' },
          '80%': { transform: 'translateX(4px)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
