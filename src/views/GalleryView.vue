<script setup>
import Image from 'primevue/image'
import PageHero from '../components/PageHero.vue'
import { gallery } from '../data/site'
</script>
<template>
  <PageHero title="Gallery" />
  <section class="mx-auto max-w-7xl columns-1 gap-5 px-5 py-16 sm:columns-2 lg:columns-3">
    <Image v-for="(src, i) in gallery" :key="i" :src="src" preview alt="Bait Al Salam"
           class="mb-5 block break-inside-avoid" image-class="w-full rounded-2xl" />
  </section>
</template>
