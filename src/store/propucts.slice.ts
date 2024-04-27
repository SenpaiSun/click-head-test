import {createSlice} from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Product, ProductsState } from "./types";

const initialState: ProductsState = {
  products: [],
  countToCart: 0
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<any>) => {
      state.products = action.payload
    },
    setCountToCart: (state, action: PayloadAction<number>) => {
      state.countToCart = action.payload
    }
  }
})

export const productsActions = productsSlice.actions;
export default productsSlice.reducer