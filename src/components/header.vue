<script setup lang="ts">
import { useCartStore } from '@/stores/cart'
import { ShoppingBag } from 'lucide-vue-next'
import CartSidebar from '@/components/cart-sidebar.vue'

const cartStore = useCartStore()
</script>

<template>
  <header class="flex items-center justify-between py-6">
    <h1 class="text-xl font-black text-amber-600">.vue-commerce</h1>

    <div class="relative flex items-center gap-4 cursor-pointer" @click="cartStore.toggleCart">
      <ShoppingBag class="w-6 h-6 text-neutral-800" />
      <span
        class="absolute flex items-center justify-center font-black text-white -top-2 -right-2 w-5 h-5 text-xs bg-red-500 rounded-full"
      >
        {{ cartStore.totalCart || 0 }}
      </span>
    </div>

    <CartSidebar />
  </header>
</template>
