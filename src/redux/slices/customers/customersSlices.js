import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  activeId: null,
};

export const customersSlice = createSlice({
  name: "customers",
  initialState,
  reducers: {
    changeCustomers: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { changeCustomers } = customersSlice.actions;

export default customersSlice.reducer;
