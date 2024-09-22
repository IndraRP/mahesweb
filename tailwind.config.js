/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    // Tambahkan lokasi komponen Meraki UI jika diperlukan
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
     ],
};