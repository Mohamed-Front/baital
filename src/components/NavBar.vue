<script setup>
import { ref } from 'vue'
import { img } from '../data/site'
const open = ref(false)
const links = [['Home', '/'], ['About', '/about'], ['Products', '/products'], ['Gallery', '/gallery'], ['Contact', '/contact']]
</script>
<template>
  <header class="sticky top-0 z-40 border-b border-sand bg-bone/90 backdrop-blur">
    <nav class="mx-auto flex h-16 max-w-7xl items-center justify-between px-5">
      <RouterLink to="/" class="flex items-center gap-3 font-display text-xl font-bold text-petrol">
        <img :src="img.logo" alt="" class="h-9 w-auto" /> Bait Al Salam
      </RouterLink>
      <ul class="hidden items-center gap-8 md:flex">
        <li v-for="[t, to] in links" :key="to">
          <RouterLink :to="to" class="text-ink/70 transition hover:text-ink" exact-active-class="!text-petrol font-semibold underline decoration-brass decoration-2 underline-offset-8">{{ t }}</RouterLink>
        </li>
      </ul>
      <button class="text-2xl text-petrol md:hidden" aria-label="Menu" @click="open = !open"><i :class="open ? 'pi pi-times' : 'pi pi-bars'"></i></button>
    </nav>
    <ul v-if="open" class="flex flex-col gap-1 border-t border-sand bg-bone px-5 py-3 md:hidden">
      <li v-for="[t, to] in links" :key="to"><RouterLink :to="to" class="block py-2 text-lg" @click="open = false">{{ t }}</RouterLink></li>
    </ul>
  </header>
</template>
