/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "secondary": "#FBB002",
          "accent": "#FE6100",
          "neutral": "#3A1D16",
          "base-100": "#000000"
        },        
      },
      "dark",
      "cupcake",
    ],
  },
}

