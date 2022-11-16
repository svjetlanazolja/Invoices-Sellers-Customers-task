import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  activeId: null,
};

export const invoicesSlice = createSlice({
  name: "invoice",
  initialState,
  reducers: {
    changeInvoices: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { changeInvoices } = invoicesSlice.actions;

export default invoicesSlice.reducer;
