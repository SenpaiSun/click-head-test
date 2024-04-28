import { configureStore } from "@reduxjs/toolkit";
import { productsSlice } from "./products.slice";
import userSlice from "./user.slice";

export const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
    user: userSlice
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
