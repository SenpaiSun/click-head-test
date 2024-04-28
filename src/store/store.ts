import { configureStore } from "@reduxjs/toolkit";
import { productsSlice } from "./products.slice";
import userSlice from "./user.slice";
import balanceSlice from "./balance.slice";

export const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
    user: userSlice,
    balance: balanceSlice
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
