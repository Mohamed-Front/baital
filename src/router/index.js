import { createRouter, createWebHistory } from 'vue-router'
export default createRouter({
  history: createWebHistory(),
  scrollBehavior: () => ({ top: 0 }),
  routes: [
    { path: '/', component: () => import('../views/HomeView.vue') },
    { path: '/about', component: () => import('../views/AboutView.vue') },
    { path: '/products', component: () => import('../views/ProductsView.vue') },
    { path: '/gallery', component: () => import('../views/GalleryView.vue') },
    { path: '/contact', component: () => import('../views/ContactView.vue') },
  ],
})
