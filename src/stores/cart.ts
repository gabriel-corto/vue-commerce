import type { CartProps, ProductItem } from '@/types/schema'
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state() {
    return {
      cart: [] as CartProps[],
      cartSidebar: false,
    }
  },
  actions: {
    addToCart(product: ProductItem) {
      const productAlreadyExist = this.cart.find((item) => item.id === product.id)

      if (productAlreadyExist) {
        productAlreadyExist.quantity++
      } else {
        this.cart.push({ ...product, quantity: 1 })
      }
    },
    removeFromCart(product: ProductItem) {
      this.cart = this.cart.filter((item) => item.id !== product.id)
    },
    toggleCart() {
      this.cartSidebar = !this.cartSidebar
    },
    closeCart() {
      this.cartSidebar = false
    },
  },
  getters: {
    totalCart: (state) => state.cart.length,
  },
})
