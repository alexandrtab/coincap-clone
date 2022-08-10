import { createSlice } from "@reduxjs/toolkit";

import { ICurrency } from "../../../pages/Currency/types";

const initialState = {
	portfolioCurrencies: null as ICurrency[] | null,
	activeCurrency: null as ICurrency | null,
	currenciesData: [],
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
