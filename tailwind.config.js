/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html'],
  theme: {
    extend: {
      colors: {
        'custom-bg': 'black',
        'custom-card-bg': '#0f172a',
        'custom-border': '#1e293b',
        'custom-accent': '#6366f1',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require("tailwindcss-inner-border"),
  ],
}
