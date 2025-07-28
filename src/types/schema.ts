export interface ProductItem {
  id: string
  name: string
  price: number
  url: string
  description: string
}

export interface CartProps extends ProductItem {
  quantity: number
}
