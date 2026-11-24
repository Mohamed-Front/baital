<script setup>
import SheetStack from '../components/SheetStack.vue'
import { img, tagline, aboutText, why, products, wa } from '../data/site'
</script>
<template>
  <section class="mx-auto grid max-w-7xl items-center gap-14 px-5 py-14 md:grid-cols-2 md:py-24">
    <div>
      <h1 class="text-5xl font-bold leading-[1.05] text-petrol md:text-7xl">Laminated Sheets: Materials for a Strong Future</h1>
      <p class="mt-6 max-w-lg text-lg leading-relaxed text-ink/70">{{ tagline }}</p>
      <div class="mt-9 flex flex-wrap gap-3">
        <RouterLink to="/products" class="rounded-full bg-petrol px-7 py-3.5 font-semibold text-white transition hover:bg-ink">Our Products</RouterLink>
        <a :href="wa('Hello, I would like a quote for laminated sheets.')" target="_blank" rel="noopener" class="rounded-full border-2 border-petrol px-7 py-3.5 font-semibold text-petrol transition hover:bg-petrol hover:text-white">Chat on WhatsApp</a>
      </div>
    </div>
    <div class="pr-6 pb-6"><SheetStack :src="img.hero" ratio="aspect-[5/4] md:aspect-[4/5]" /></div>
  </section>

  <section class="bg-sand/60 py-20">
    <div class="mx-auto max-w-7xl px-5">
      <h2 class="text-3xl font-bold text-petrol md:text-4xl">Why Choose Us</h2>
      <div class="mt-10 grid gap-10 md:grid-cols-3">
        <div v-for="w in why" :key="w.t" class="border-l-4 border-brass pl-5">
          <h3 class="text-xl font-bold">{{ w.t }}</h3>
          <p class="mt-2 text-ink/70">{{ w.d }}</p>
        </div>
      </div>
    </div>
  </section>

  <section class="mx-auto grid max-w-7xl items-center gap-14 px-5 py-24 md:grid-cols-2">
    <div class="order-2 pr-6 pb-6 md:order-1"><SheetStack :src="img.about" ratio="aspect-[3/2]" /></div>
    <div class="order-1 md:order-2">
      <h2 class="text-3xl font-bold text-petrol md:text-4xl">High-Quality affordable Laminated Sheets</h2>
      <p class="mt-5 text-lg leading-relaxed text-ink/70">{{ aboutText }}</p>
      <RouterLink to="/about" class="mt-7 inline-block font-semibold text-petrol underline decoration-brass decoration-2 underline-offset-8">About Us</RouterLink>
    </div>
  </section>

  <section class="mx-auto max-w-7xl px-5">
    <div class="flex items-end justify-between">
      <h2 class="text-3xl font-bold text-petrol md:text-4xl">Our Products</h2>
      <RouterLink to="/products" class="font-semibold text-petrol underline decoration-brass decoration-2 underline-offset-8">View all</RouterLink>
    </div>
    <div class="mt-8 flex snap-x gap-4 overflow-x-auto pb-4">
      <RouterLink v-for="p in products" :key="p.name" to="/products" class="group relative h-80 w-64 shrink-0 snap-start overflow-hidden rounded-2xl">
        <img :src="p.img" :alt="p.name" class="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
        <span class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/85 to-transparent p-4 pt-12 font-display text-lg font-bold text-white">{{ p.name }}</span>
      </RouterLink>
    </div>
  </section>

  <section class="mx-auto mt-24 max-w-7xl px-5">
    <div class="flex flex-col items-start justify-between gap-6 rounded-3xl bg-petrol p-10 text-white md:flex-row md:items-center md:p-14">
      <h2 class="max-w-md text-3xl font-bold md:text-4xl">Need a quote? Message us on WhatsApp.</h2>
      <RouterLink to="/contact" class="rounded-full bg-brass px-8 py-4 font-semibold text-ink transition hover:bg-white">Contact Us</RouterLink>
    </div>
  </section>
</template>
