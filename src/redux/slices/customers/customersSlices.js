import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

export const customersSlice = createSlice({
  name: "invoice",
  initialState,
  reducers: {
    changeInvoices: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { changeInvoices } = customersSlice.actions;

export default customersSlice.reducer;
