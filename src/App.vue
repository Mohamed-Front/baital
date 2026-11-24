<script setup>
import NavBar from './components/NavBar.vue'
import FooterBar from './components/FooterBar.vue'
import { wa } from './data/site'
</script>
<template>
  <NavBar />
  <main><RouterView /></main>
  <FooterBar />
  <a :href="wa('Hello, I would like to ask about your products.')" target="_blank" rel="noopener"
     class="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-[#1fa855] px-5 py-3 text-sm font-semibold text-white shadow-lg hover:bg-[#178a45] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-petrol">
    <i class="pi pi-whatsapp text-lg"></i> WhatsApp
  </a>
</template>
