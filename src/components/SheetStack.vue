<script setup>
defineProps({ src: String, ratio: { type: String, default: 'aspect-[4/5]' } })
</script>
<template>
  <div class="relative">
    <div class="absolute inset-0 translate-x-6 translate-y-6 rounded-3xl bg-sand"></div>
    <div class="absolute inset-0 translate-x-3 translate-y-3 rounded-3xl bg-brass/70"></div>
    <img :src="src" alt="" :class="['relative w-full rounded-3xl object-cover', ratio]" />
  </div>
</template>
