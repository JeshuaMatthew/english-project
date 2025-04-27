/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}", // Make sure it scans your source files
    ],
    theme: {
      extend: {
        colors: {
          // Dark & Glossy Palette Example
          'primary-dark': '#1a1a1a', // Very dark background
          'secondary-dark': '#242424', // Slightly lighter dark for elements
          'accent-glow': '#646cff', // A glossy accent (Vite's default, adjust as needed)
          'accent-glow-hover': '#535bf2',
          'text-primary': '#e0e0e0', // Light gray for primary text
          'text-secondary': '#a0a0a0', // Dimmer text
        },
        boxShadow: {
          'glow-sm': '0 0 5px rgba(100, 108, 255, 0.3)',
          'glow-md': '0 0 15px rgba(100, 108, 255, 0.4)',
        },
        backgroundImage: {
          'glossy-gradient': 'linear-gradient(to bottom, rgba(255,255,255,0.05), rgba(0,0,0,0.1))',
        },
        // Add custom animation/keyframes if needed via extend: {}
      },
    },
    plugins: [
      require('@tailwindcss/typography'), // For styling markdown
    ],
  }