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
        fiestaRed: '#E63946',  // Vibrant Red
        cactusGreen: '#2A9D8F',  // Cactus Green
        sunYellow: '#F4A261',  // Warm Yellow
        terracotta: '#E76F51',  // Terracotta Orange
        papelPink: '#FF5E78',  // Festive Pink
        indigoBlue: '#264653',  // Deep Blue
      },
      animation: {
        'fade-in': 'fadeIn 1.5s ease-in-out forwards',
        'fade-in-delay': 'fadeIn 2s ease-in-out forwards',
        'bounce': 'bounce 1s infinite',
        'wiggle': 'wiggle 1.5s cubic-bezier(0.25, 1, 0.5, 1) forwards',  // Updated to mimic spin slowdown
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        wiggle: {
          '0%': { transform: 'rotate(0deg)' },
          '15%': { transform: 'rotate(30deg)' },
          '30%': { transform: 'rotate(-25deg)' },
          '45%': { transform: 'rotate(20deg)' },
          '60%': { transform: 'rotate(-15deg)' },
          '75%': { transform: 'rotate(10deg)' },
          '90%': { transform: 'rotate(-5deg)' },
          '100%': { transform: 'rotate(0deg)' }, 
        }
      },
    },
  },
  plugins: [],
} satisfies Config;
