<script setup>
import PageHero from '../components/PageHero.vue'
import { gallery } from '../data/site'
</script>
<template>
  <PageHero title="Gallery" />
  <section class="mx-auto max-w-7xl columns-1 gap-5 px-5 py-16 sm:columns-2 lg:columns-3">
    <img v-for="(src, i) in gallery" :key="i" :src="src" alt="Bait Al Salam"
         class="mb-5 block w-full break-inside-avoid rounded-2xl" />
  </section>
</template>
