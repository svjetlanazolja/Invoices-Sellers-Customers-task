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
    setReqState: (state) => {
      state.reqSent = state.reqSent + 1;
    },
  },
});

export const { changeSellers, setRowInfo, setReqState } = sellersSlice.actions;

export default sellersSlice.reducer;
