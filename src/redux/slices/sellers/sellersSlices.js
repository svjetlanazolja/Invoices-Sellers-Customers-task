import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

export const sellersSlice = createSlice({
  name: "sellers",
  initialState,
  reducers: {
    changeInvoices: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { changeInvoices } = sellersSlice.actions;

export default sellersSlice.reducer;
