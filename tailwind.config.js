/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: '#9fc8e8',
          secondary: '#ffffff',
        },
      },
    },
    plugins: [],
  }