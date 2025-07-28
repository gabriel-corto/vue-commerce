import { api } from '@/libs/axios'
import type { ProductItem } from '@/types/schema'

async function getProducts() {
  const response = await api.get('/products')
  const data = response.data

  return data as ProductItem[]
}

async function getSingleProduct(productId: string) {
  const response = await api.get(`/products/${productId}`)
  const data = response.data

  return data as ProductItem
}

export default { getProducts, getSingleProduct }
