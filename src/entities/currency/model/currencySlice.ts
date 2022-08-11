import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ICurrency } from "../../../pages/Currency/types";

const initialState = {
	portfolioCurrencies: null as ICurrency[] | null,
	activeCurrency: null as ICurrency | null,
	currenciesData: null as ICurrency[] | null,
};

export const currencySlice = createSlice({
	name: "currency",
	initialState,
	reducers: {
		setPortfolioCurrencies: (state, action: PayloadAction<ICurrency[] | null >) => {
			state.portfolioCurrencies = action.payload;
		},
		setActiveCurrency: (state, action: PayloadAction<ICurrency>) => {
			state.activeCurrency = action.payload;
		},
		setCurrenciesData: (state, action: PayloadAction<ICurrency[]>) => {
			state.currenciesData = action.payload;
		},
	},
});

export const { setPortfolioCurrencies, setActiveCurrency, setCurrenciesData } =
	currencySlice.actions;
