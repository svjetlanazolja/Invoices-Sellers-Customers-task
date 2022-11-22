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
};

export const customersSlice = createSlice({
  name: "customers",
  initialState,
  reducers: {
    changeCustomers: (state, action) => {
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

export const { changeCustomers, setRowInfo, setReqState } =
  customersSlice.actions;

export default customersSlice.reducer;
