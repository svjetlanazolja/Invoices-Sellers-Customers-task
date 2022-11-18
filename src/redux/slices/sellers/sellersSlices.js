import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  activeId: null,
};

export const sellersSlice = createSlice({
  name: "sellers",
  initialState,
  reducers: {
    changeSellers: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { changeSellers } = sellersSlice.actions;

export default sellersSlice.reducer;
