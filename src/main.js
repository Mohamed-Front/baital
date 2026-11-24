import 'primeicons/primeicons.css'
import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura'
import { definePreset } from '@primeuix/themes'
import App from './App.vue'
import router from './router'
import './style.css'

const Petrol = definePreset(Aura, {
  semantic: {
    primary: {
      50: '#eef6f8', 100: '#d5e9ee', 200: '#a9d1db', 300: '#74b2c1', 400: '#3f8ea1',
      500: '#1f6e82', 600: '#165463', 700: '#0F3A45', 800: '#0c2e37', 900: '#091f26', 950: '#06151a',
    },
  },
})
createApp(App).use(router).use(PrimeVue, {
  theme: { preset: Petrol, options: { darkModeSelector: '.never', cssLayer: { name: 'primevue', order: 'theme, base, primevue' } } },
}).mount('#app')
