import { ICurrency } from "../../pages/Currency/types";

export const getTopCurrencies = (currencies: ICurrency[]) => {
	if (currencies?.length) {
		return currencies.slice(0, 3);
	}
};
