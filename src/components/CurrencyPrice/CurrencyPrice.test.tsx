import { render, screen } from "@testing-library/react";

import { CurrencyPrice } from "./CurrencyPrice";
import "@testing-library/jest-dom";

describe("CurrencyPrice", () => {
	render(
		<CurrencyPrice currencySymbol={ "$" } priceSize={ 1 } priceColor={ "green" } price={ "" }/>
	);
	test("should render correct with all props and be equal to snapshot", () => {
		const divElem = screen.getByTestId("currency-price-block");
		const symbol = screen.getByTestId("currency-symbol");
		const price = screen.getByTestId("currency-price");

		expect(divElem).toHaveStyle({ display: "flex", justifyContent: "center", fontSize: "1rem" });
		expect(price).toHaveStyle({ color: "green", marginLeft: "5px" });
		expect(symbol).toHaveTextContent("$");
		expect(divElem).toMatchSnapshot();
		expect(price).toMatchSnapshot();
		expect(symbol).toMatchSnapshot();
	});
});
