<script setup>
import { company } from '../data/site'
</script>
<template>
  <footer class="mt-24 bg-petrol text-white/80">
    <div class="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-3">
      <div>
        <p class="font-display text-2xl font-bold text-white">{{ company.name }}</p>
        <p class="mt-3 max-w-xs text-sm">Laminated sheets and building materials, from Sharjah to the whole UAE.</p>
      </div>
      <ul class="space-y-2 text-sm">
        <li><RouterLink to="/products" class="hover:text-white">Products</RouterLink></li>
        <li><RouterLink to="/gallery" class="hover:text-white">Gallery</RouterLink></li>
        <li><RouterLink to="/about" class="hover:text-white">About</RouterLink></li>
        <li><RouterLink to="/contact" class="hover:text-white">Contact</RouterLink></li>
      </ul>
      <ul class="space-y-2 text-sm">
        <li><i class="pi pi-map-marker mr-2 text-brass"></i>{{ company.address }}</li>
        <li><i class="pi pi-envelope mr-2 text-brass"></i><a :href="`mailto:${company.email}`">{{ company.email }}</a></li>
        <li><i class="pi pi-phone mr-2 text-brass"></i>{{ company.landline }}</li>
        <li><i class="pi pi-mobile mr-2 text-brass"></i>{{ company.phone }}</li>
      </ul>
    </div>
    <p class="border-t border-white/10 py-5 text-center text-xs">© {{ new Date().getFullYear() }} Bait Al Salam. All rights reserved.</p>
  </footer>
</template>
