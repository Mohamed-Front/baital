# Bait Al Salam – Vue 3 + Tailwind 4 + PrimeVue

npm install vue-router primevue @primeuix/themes primeicons
npm install tailwindcss @tailwindcss/vite

vite.config.js:
  import tailwindcss from '@tailwindcss/vite'
  plugins: [vue(), tailwindcss()]

main.js already imports everything; also add this line to src/main.js top:
  import 'primeicons/primeicons.css'
