import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { TokenListData } from '../../types/types'

export interface iMetaDataList {
  metaDataList: TokenListData[]
}

const initialState: iMetaDataList = {
  metaDataList: [],
}

export const metaDataSlice = createSlice({
  name: 'metaDataSlice',
  initialState,
  reducers: {
    addMetaData: (state, action: PayloadAction<TokenListData>) => {
      let _data = [...state.metaDataList]
      _data.push(action.payload)
      state.metaDataList = _data
      return state
    },
  },
})

export const { addMetaData } = metaDataSlice.actions

export default metaDataSlice.reducer
