<script setup>
defineProps({ title: String, text: String })
</script>
<template>
  <section class="bg-petrol text-white">
    <div class="mx-auto max-w-7xl px-5 py-16 md:py-24">
      <h1 class="max-w-3xl text-4xl font-bold md:text-6xl">{{ title }}</h1>
      <p v-if="text" class="mt-5 max-w-xl text-lg text-white/75">{{ text }}</p>
    </div>
  </section>
</template>
