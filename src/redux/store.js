import { configureStore } from "@reduxjs/toolkit";
import invoicesReducer from "./slices/invoices/invoicesSlices";
import customersReducer from "./slices/customers/customersSlices";
import sellersReducer from "./slices/sellers/sellersSlices";

export const store = configureStore({
  reducer: {
    invoices: invoicesReducer,
    customers: customersReducer,
    sellers: sellersReducer,
  },
});
