import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  activeId: null,
  rowInfo: {
    companyName: "",
    hqAddress: "",
    isActive: "",
  },
};

export const sellersSlice = createSlice({
  name: "sellers",
  initialState,
  reducers: {
    changeSellers: (state, action) => {
      state.data = action.payload;
    },
    setRowInfo: (state, action) => {
      state.rowInfo = action.payload;
    },
  },
});

export const { changeSellers, setRowInfo } = sellersSlice.actions;

export default sellersSlice.reducer;
