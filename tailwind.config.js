/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        primary: {
          DEFAULT: '#2563EB',
          50: '#eff6ff',
          100: '#dbeafe',
          500: '#2563EB',
          600: '#1d4ed8',
          700: '#1e40af',
        },
        navy: {
          DEFAULT: '#0F172A',
          50: '#f8fafc',
          100: '#f1f5f9',
          900: '#0F172A',
        },
        // Neutrals
        white: '#FFFFFF',
        'light-gray': '#F5F6F7',
        'cool-gray': '#64748B',
        // Secondary Accents
        emerald: {
          DEFAULT: '#059669',
          500: '#059669',
          600: '#047857',
        },
        terracotta: {
          DEFAULT: '#EA580C',
          500: '#EA580C',
          600: '#dc2626',
        },
      },
      fontFamily: {
        // Headings - Poppins
        heading: ['Poppins', 'system-ui', 'sans-serif'],
        // Body Text - Inter
        body: ['Inter', 'system-ui', 'sans-serif'],
        // Accent/Buttons - Poppins
        accent: ['Poppins', 'system-ui', 'sans-serif'],
        // Default sans fallback
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      screens: {
        'xs': '475px',
      },
    },
  },
  plugins: [],
}