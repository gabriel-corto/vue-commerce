<script setup lang="ts">
import ProductCard from '@/components/product-card.vue'
import ProductsService from '@/services/products'
import type { ProductItem } from '@/types/schema'

import { onMounted, ref } from 'vue'

const products = ref<ProductItem[] | null>(null)

onMounted(async () => {
  const data = await ProductsService.getProducts()
  products.value = data
})
</script>

<template>
  <div class="mt-10 grid grid-cols-3 gap-8">
    <ProductCard v-for="product in products" :key="product.id" :product="product" />
  </div>
</template>
