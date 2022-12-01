import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  activeId: null,
  rowInfo: {
    name: "",
    surname: "",
    address: "",
    age: "",
  },
  reqSent: 1,
};

export const customersSlice = createSlice({
  name: "customers",
  initialState,
  reducers: {
    changeCustomers: (state, action) => {
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

export const { changeCustomers, setRowInfo, setReqState, changeActiveId } =
  customersSlice.actions;

export default customersSlice.reducer;
