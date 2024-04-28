import {createSlice} from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Balance } from "./types";

const initialState: Balance = {
  usd: 0,
  coins: 0
}

export const balanceSlice = createSlice({
  name: 'balance',
  initialState,
  reducers: {
    setUsd: (state, action: PayloadAction<number>) => {
      state.usd = action.payload
    },
    setCoins: (state, action: PayloadAction<number>) => {
      state.coins = action.payload
    }
  }
})

export const balanceActions = balanceSlice.actions;
export default balanceSlice.reducer