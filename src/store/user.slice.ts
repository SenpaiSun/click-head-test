import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Product, ProductsState, User } from './types'

const initialState: User = {
  firstName: '',
  lastName: '',
  address: '',
  phone: '',
  added: false,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setFirstName: (state, action: PayloadAction<string>) => {
      state.firstName = action.payload
    },
    setLastName: (state, action: PayloadAction<string>) => {
      state.lastName = action.payload
    },
    setAddress: (state, action: PayloadAction<string>) => {
      state.address = action.payload
    },
    setPhone: (state, action: PayloadAction<string>) => {
      state.phone = action.payload
    },
    setAdded: (state, action: PayloadAction<boolean>) => {
      state.added = action.payload
    },
    setClearUser: (state) => {
      state = initialState
    },
  },
})

export const userActions = userSlice.actions
export default userSlice.reducer
