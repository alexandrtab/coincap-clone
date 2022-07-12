import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  portfolioCurrencies: null,
  activeCurrency: null,
  currenciesData: null,
};

export const currencySlice = createSlice({
  name: "currency",
  initialState,
  reducers: {
    setPortfolioCurrencies: (state, action) => {
      state.portfolioCurrencies = action.payload;
    },
    setActiveCurrency: (state, action) => {
      state.activeCurrency = action.payload;
    },
    setCurrenciesData: (state, action) => {
      state.currenciesData = action.payload;
    },
  },
});

export const { setPortfolioCurrencies, setActiveCurrency, setCurrenciesData } =
	currencySlice.actions;
