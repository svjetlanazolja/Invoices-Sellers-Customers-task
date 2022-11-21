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
  },
});

export const { changeCustomers, setRowInfo } = customersSlice.actions;

export default customersSlice.reducer;
