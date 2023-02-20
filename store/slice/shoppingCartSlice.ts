import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { StoreNfts } from '../../types/types'
import { addCookie, setCookie } from '../../utils/useCookie'

export interface shoppingCartData {
  data: StoreNfts[]
}

const initialState: shoppingCartData = {
  data: [],
}

export const shoppingCartSlice = createSlice({
  name: 'shoppingCart',
  initialState,
  reducers: {
    setShoppingCarts: (state, action: PayloadAction<StoreNfts[]>) => {
      state.data = action.payload
      console.log('I am getting action', action.payload)
      setCookie(action.payload)
      return state
    },
    addShoppingCart: (state, action: PayloadAction<StoreNfts>) => {
      let _data = [...state.data]
      _data.push(action.payload)
      state.data = _data
      console.log(state.data)

      addCookie(action.payload)

      return state
    },
    removeShoppingCart: (state, action: PayloadAction<number>) => {
      console.log(action.payload)
      let _data = [...state.data].filter((nft, ind) => {
        return ind !== action.payload
      })
      setCookie(_data)
      state.data = _data
      console.log(state.data)
      return state
    },
  },
})

export const { setShoppingCarts, addShoppingCart, removeShoppingCart } =
  shoppingCartSlice.actions

export default shoppingCartSlice.reducer
