/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html'],
  theme: {
    extend: {
      colors: {
        'custom-bg': '#110e27',
        'custom-card-bg': '#0f172a',
        'custom-border': '#1e293b',
        'custom-accent': '#814BF6',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require("tailwindcss-inner-border"),
  ],
}
