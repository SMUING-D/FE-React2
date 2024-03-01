import { createSlice } from '@reduxjs/toolkit'

import { MyPageState } from '../../types/types'

const initialState: MyPageState = {
  index: 0,
}

const myPageSlice = createSlice({
  name: 'myPage',
  initialState,
  reducers: {
    setIndex(state, action) {
      state.index = action.payload
    },
  },
})

export const { setIndex } = myPageSlice.actions
export default myPageSlice.reducer
