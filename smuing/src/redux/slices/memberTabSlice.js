import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isClicked: true
};

const memberTabSlice = createSlice({
  name: 'memberTab',
  initialState,
  reducers: {
    clickMemberActive(state) {
      state.isClicked = true;
    },
    clickMemberAll(state) {
      state.isClicked = false;
    }
  }
});

export const { clickMemberActive, clickMemberAll } = memberTabSlice.actions;

export default memberTabSlice.reducer;
