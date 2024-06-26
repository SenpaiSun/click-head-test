import {createSlice} from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Balance } from "./types";

const initialState: Balance = {
  usd: 0,
  coins: 0,
  method: 'USD'
}

export const balanceSlice = createSlice({
  name: 'balance',
  initialState,
  reducers: {
    setUsd: (state, action: PayloadAction<number>) => {
        state.usd = parseFloat(action.payload.toFixed(2));
    },
    setCoins: (state, action: PayloadAction<number>) => {
      if (typeof action.payload === 'number') {
        state.coins = parseFloat(action.payload.toFixed(2));
      }
    },
    setMethod: (state, action: PayloadAction<'USD' | 'Coins'>) => {
      state.method = action.payload
    }
  }
})

export const balanceActions = balanceSlice.actions;
export default balanceSlice.reducer