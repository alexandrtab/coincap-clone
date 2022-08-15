import { render, screen } from "@testing-library/react";

import { CurrencyPrice } from "./CurrencyPrice";
import "@testing-library/jest-dom";

describe("", () => {
	render(
		<CurrencyPrice currencySymbol={ "" } priceSize={ 0 } priceColor={ "" } price={ "" }/>
	);
	test("", () => {
		const divElem = screen.getByTestId("currency-price-block");

		expect(divElem).toHaveStyle({ display: "flex", justifyContent: "center" });
	});
});
