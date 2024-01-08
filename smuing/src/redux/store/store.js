import { configureStore } from '@reduxjs/toolkit';
import sidebarReducer from '../slices/sidebarSlice';
import memberTabReducer from '../slices/memberTabSlice';

export const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    memberTab: memberTabReducer
  }
});
