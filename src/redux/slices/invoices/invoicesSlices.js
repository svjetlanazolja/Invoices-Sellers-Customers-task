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
    changeActiveId: (state, action) => {
      state.activeId = action.payload;
    },
    setRowInfo: (state, action) => {
      state.rowInfo = action.payload;
    },
    setReqState: (state) => {
      state.reqSent = state.reqSent + 1;
    },
  },
});

export const { changeInvoices, setRowInfo, setReqState, changeActiveId } =
  invoicesSlice.actions;

export default invoicesSlice.reducer;
