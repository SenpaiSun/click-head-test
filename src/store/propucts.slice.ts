import {createSlice} from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Product, ProductsState } from "./types";

const initialState: ProductsState = {
  products: [],
  productsCart: [],
  totalPriceCart: 0,
  countToCart: 0
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload
    },
    setCountToCart: (state, action: PayloadAction<number>) => {
      state.countToCart = action.payload
    },
    setProductsCart: (state, action: PayloadAction<Product[]>) => {
      state.productsCart = action.payload
      state.totalPriceCart = state.productsCart.reduce((acc: number, item: Product) => acc + item.price, 0)
    }
  }
})

export const productsActions = productsSlice.actions;
export default productsSlice.reducer