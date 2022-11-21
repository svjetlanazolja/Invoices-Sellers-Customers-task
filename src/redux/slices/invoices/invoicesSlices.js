import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  activeId: null,
  rowInfo: {
    sellerName: "",
    customerName: "",
    date: "",
    amount: "",
  },
};

export const invoicesSlice = createSlice({
  name: "invoice",
  initialState,
  reducers: {
    changeInvoices: (state, action) => {
      state.data = action.payload;
    },
    setRowInfo: (state, action) => {
      state.rowInfo = action.payload;
    },
  },
});

export const { changeInvoices, setRowInfo } = invoicesSlice.actions;

export default invoicesSlice.reducer;
