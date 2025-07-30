<script setup lang="ts">
import { useCartStore } from '@/stores/cart'
import { priceFormatter } from '@/utils/formatter'

import { Trash, X } from 'lucide-vue-next'

const cartStore = useCartStore()
</script>

<template>
  <Transition name="slide">
    <div
      v-if="cartStore.cartSidebar"
      class="fixed right-0 top-0 h-full w-96 bg-white shadow-2xl z-50 p-6 flex flex-col"
    >
      <div class="flex items-center justify-between mb-6">
        <h2 class="text-xl font-bold">Carrinho</h2>
        <X class="w-6 h-6 cursor-pointer text-neutral-600" @click="cartStore.closeCart" />
      </div>

      <div v-if="cartStore.cart" class="flex-1 space-y-4 overflow-y-auto">
        <div
          class="border-b border-neutral-200 pb-3 flex items-center justify-between"
          v-for="item in cartStore.cart"
          v-if="cartStore.totalCart > 0"
        >
          <div class="">
            <h3 class="font-semibold">{{ item.name }}</h3>

            <p class="text-sm text-neutral-500 mt-3">{{ priceFormatter.format(item.price) }}</p>
          </div>

          <div class="flex flex-col items-center justify-center">
            <span class="font-bold">{{ item.quantity }}</span>
            <Trash
              class="w-5 h-5 mt-3 cursor-pointer text-rose-400"
              @click="cartStore.removeFromCart(item)"
            />
          </div>
        </div>
      </div>

      <div
        v-if="!cartStore.totalCart"
        class="flex-1 flex items-center justify-center text-neutral-400"
      >
        Seu carrinho está vazio.
      </div>

      <div class="mt-6 border-t pt-4 border-neutral-200">
        <p class="flex justify-between text-lg font-semibold">
          <span>Total:</span>
          <span
            >AKZ
            {{
              priceFormatter.format(
                cartStore.cart.reduce((total, item) => total + item.price * item.quantity, 0),
              )
            }}</span
          >
        </p>
        <button
          class="mt-4 w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded-lg transition"
        >
          Finalizar Compra
        </button>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}
.slide-enter-from {
  transform: translateX(100%);
}
.slide-leave-to {
  transform: translateX(100%);
}
</style>
