<script setup>
import PageHero from '../components/PageHero.vue'
import SheetStack from '../components/SheetStack.vue'
import { img, aboutText, why, company } from '../data/site'
</script>
<template>
  <PageHero title="High-Quality affordable Laminated Sheets" :text="aboutText" />
  <section class="mx-auto grid max-w-7xl items-center gap-14 px-5 py-20 md:grid-cols-2">
    <div class="pr-6 pb-6"><SheetStack :src="img.side" ratio="aspect-[5/4]" /></div>
    <div>
      <h2 class="text-3xl font-bold text-petrol">Why Choose Us</h2>
      <div class="mt-8 space-y-7">
        <div v-for="w in why" :key="w.t" class="border-l-4 border-brass pl-5">
          <h3 class="text-xl font-bold">{{ w.t }}</h3>
          <p class="mt-1 text-ink/70">{{ w.d }}</p>
        </div>
      </div>
      <p class="mt-10 text-ink/70">Located in Sharjah &amp; Dubai and distributed throughout the UAE. Visit us at {{ company.address }}.</p>
    </div>
  </section>
</template>
