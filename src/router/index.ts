import { createRouter, createWebHistory } from 'vue-router'

import AppLayout from '@/layouts/app.vue'
import HomeView from '@/views/home.vue'
import ProductDetailsView from '@/views/product-details.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: AppLayout,
      children: [
        {
          path: '',
          name: 'home',
          component: HomeView,
        },
        {
          path: '/products/:id',
          name: 'product-details',
          component: ProductDetailsView,
        },
      ],
    },
  ],
})

export default router
