interface Rating {
  rate: number;
  count: number;
}

export interface Product {
  id: number;
  title: string;
  price: number;
  description?: string;
  category?: string;
  image?: string;
  rating?: Rating;
}

export interface ProductsState {
  products: Product[];
  productsCart: Product[]
  totalPriceCart: number
  countToCart: number
}

export interface User {
  firstName: string
  lastName: string
  address: string
  phone: string
}

export interface Balance {
  usd: number
  coins: number
}