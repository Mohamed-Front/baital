<script setup>
import { reactive } from 'vue'
import InputText from 'primevue/inputtext'
import Textarea from 'primevue/textarea'
import Button from 'primevue/button'
import PageHero from '../components/PageHero.vue'
import { company, wa } from '../data/site'

const f = reactive({ first: '', last: '', email: '', phone: '', address: '', message: '' })
function send() {
  const text = `Hello Bait Al Salam,\n\nName: ${f.first} ${f.last}\nEmail: ${f.email}\nPhone: ${f.phone}\nAddress: ${f.address}\n\n${f.message}`
  window.open(wa(text), '_blank', 'noopener')
}
</script>



<template>
  <PageHero title="Contact Us" text="Send us your request and it opens straight in WhatsApp." />
  <section class="mx-auto grid max-w-7xl gap-14 px-5 py-20 md:grid-cols-5">
    <ul class="space-y-6 md:col-span-2">
      <li class="flex gap-4"><i class="pi pi-map-marker mt-1 text-xl text-brass"></i><span>{{ company.address }}</span></li>
      <li class="flex gap-4"><i class="pi pi-envelope mt-1 text-xl text-brass"></i><a :href="`mailto:${company.email}`">{{ company.email }}</a></li>
      <li class="flex gap-4"><i class="pi pi-phone mt-1 text-xl text-brass"></i><a :href="`tel:${company.landline}`">{{ company.landline }}</a></li>
      <li class="flex gap-4"><i class="pi pi-mobile mt-1 text-xl text-brass"></i><a :href="`tel:${company.phone}`">{{ company.phone }}</a></li>
    </ul>
    <form class="grid gap-4 rounded-3xl bg-white p-6 ring-1 ring-sand sm:grid-cols-2 md:col-span-3 md:p-10" @submit.prevent="send">
      <InputText v-model="f.first" placeholder="First Name" required fluid />
      <InputText v-model="f.last" placeholder="Last Name" fluid />
      <InputText v-model="f.email" type="email" placeholder="Email" fluid />
      <InputText v-model="f.phone" type="tel" placeholder="Phone" fluid />
      <InputText v-model="f.address" placeholder="Address" class="sm:col-span-2" fluid />
      <Textarea v-model="f.message" rows="5" placeholder="Your message" required class="sm:col-span-2" fluid />
      <Button type="submit" label="Send on WhatsApp" icon="pi pi-whatsapp" class="sm:col-span-2" size="large" />
    </form>
  </section>
</template>
