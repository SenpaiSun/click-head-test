import {createSlice} from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Product, ProductsState } from "./types";

const initialState: ProductsState = {
  products: []
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload
    }
  }
})

export const productsActions = productsSlice.actions;
export default productsSlice.reducer