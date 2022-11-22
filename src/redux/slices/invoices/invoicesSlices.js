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
  reqSent: 1,
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
    setReqState: (state) => {
      state.reqSent = state.reqSent + 1;
    },
  },
});

export const { changeInvoices, setRowInfo, addRowInfo, setReqState } =
  invoicesSlice.actions;

export default invoicesSlice.reducer;
