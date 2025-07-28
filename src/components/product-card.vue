<script setup lang="ts">
import { useCartStore } from '@/stores/cart'
import type { ProductItem } from '@/types/schema'
import { priceFormatter } from '@/utils/formatter'

const props = defineProps<{ product: ProductItem }>()
const cartStore = useCartStore()
</script>

<template>
  <div class="w-full bg-white">
    <RouterLink :to="`/products/${props.product.id}`">
      <div class="rounded-2xl border border-neutral-200 shadow-sm overflow-hidden">
        <img
          :src="props.product.url"
          class="w-full h-64 object-cover hover:scale-110 cursor-pointer duration-150"
          alt="Playstation 5"
        />
      </div>

      <div class="p-4 space-y-2">
        <h3 class="text-lg font-semibold text-neutral-800">{{ props.product.name }}</h3>
        <p class="text-xl text-amber-600 font-bold">
          {{ priceFormatter.format(props.product.price) }}
        </p>
      </div>
    </RouterLink>

    <button
      @click="cartStore.addToCart(props.product)"
      class="w-full mt-2 px-4 py-2 cursor-pointer bg-neutral-800 text-white rounded-lg hover:bg-neutral-700 transition-colors"
    >
      Adicionar ao Carrinho
    </button>
  </div>
</template>
