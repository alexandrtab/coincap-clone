import { configureStore } from "@reduxjs/toolkit";
import { currencySlice } from "../entities/currency/model/currencySlice";

export const store = configureStore({
  reducer: {
    currency: currencySlice.reducer,
  },
});
