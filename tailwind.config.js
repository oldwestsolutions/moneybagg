/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': 'var(--dark-bg)',
        'card-bg': 'var(--card-bg)',
        primary: {
          DEFAULT: 'rgb(var(--primary-rgb))',
          dark: 'rgb(var(--primary-dark-rgb))',
        },
        secondary: 'var(--secondary)',
        accent: 'var(--accent)',
      },
      boxShadow: {
        'primary-sm': '0 1px 2px 0 rgb(var(--primary-rgb) / 0.05)',
        'primary': '0 1px 3px 0 rgb(var(--primary-rgb) / 0.1), 0 1px 2px -1px rgb(var(--primary-rgb) / 0.1)',
        'primary-md': '0 4px 6px -1px rgb(var(--primary-rgb) / 0.1), 0 2px 4px -2px rgb(var(--primary-rgb) / 0.1)',
        'primary-lg': '0 10px 15px -3px rgb(var(--primary-rgb) / 0.1), 0 4px 6px -4px rgb(var(--primary-rgb) / 0.1)',
        'primary-xl': '0 20px 25px -5px rgb(var(--primary-rgb) / 0.1), 0 8px 10px -6px rgb(var(--primary-rgb) / 0.1)',
      },
    },
  },
  plugins: [],
}; 