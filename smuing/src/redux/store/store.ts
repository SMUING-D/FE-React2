import { configureStore } from '@reduxjs/toolkit'

import myPageSlice from '../slices/myPageSlice'
import sidebarSlice from '../slices/sidebarSlice'

export const store = configureStore({
  reducer: {
    sidebar: sidebarSlice,
    myPage: myPageSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
