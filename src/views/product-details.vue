<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

import { useCartStore } from '@/stores/cart'
import ProductsService from '@/services/products'
import { priceFormatter } from '@/utils/formatter'

import { ArrowLeft } from 'lucide-vue-next'
import type { ProductItem } from '@/types/schema'

const product = ref<ProductItem | null>(null)
const params = useRoute().params

onMounted(async () => {
  const data = await ProductsService.getSingleProduct(params.id as unknown as string)
  product.value = data
})

const cartStore = useCartStore()
</script>

<template>
  <div class="max-w-5xl mx-auto mt-10">
    <RouterLink to="/">
      <button class="flex items-center gap-2 text-neutral-500 text-sm font-semibold cursor-pointer">
        <ArrowLeft class="w-6 h-6" />
        <span>Voltar</span>
      </button>
    </RouterLink>

    <div class="mt-10" v-if="product">
      <h1 class="text-3xl font-bold text-neutral-800 mb-6">{{ product?.name }}</h1>

      <div class="flex flex-col md:flex-row gap-8">
        <div class="flex-1">
          <img
            :src="product?.url"
            :alt="product?.name"
            class="rounded-xl shadow-md object-cover w-full max-h-[500px]"
          />
        </div>

        <div class="flex-1 flex flex-col gap-4">
          <p class="text-lg text-neutral-700">
            {{ product?.description }}
          </p>

          <p class="text-2xl font-bold text-primary">
            {{ priceFormatter.format(product?.price) }}
          </p>

          <button
            @click="cartStore.addToCart(product!)"
            class="mt-4 w-full md:w-fit px-6 py-3 bg-neutral-800 text-white rounded-lg hover:bg-neutral-700 transition"
          >
            Adicionar ao Carrinho
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
