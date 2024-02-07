import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false
};

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    sidebarOpen: state => {
      state.isOpen = true;
    },
    sidebarClose: state => {
      state.isOpen = false;
    }
  }
});

export const { sidebarOpen, sidebarClose } = sidebarSlice.actions;

export default sidebarSlice.reducer;
