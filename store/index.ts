import { configureStore } from '@reduxjs/toolkit'
import shoppingCartReducer from './slice/shoppingCartSlice'
import metaDataReducer from './slice/metaDataSlice'

export const store = configureStore({
  reducer: {
    shoppingCartSlicer: shoppingCartReducer,
    metaDataSlicer: metaDataReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
