import React from "react";

import { ICurrencyPriceProps } from "./types";

export const CurrencyPrice: React.FC<ICurrencyPriceProps> = ({
	currencySymbol,
	price,
	priceSize,
	priceColor,
}) => {
	return (
		<div data-testid="currency-price-block" style={ { display: "flex", justifyContent: "center", fontSize: `${priceSize}rem`, } }>
			<span data-testid="currency-symbol" className="currency-symbol">{currencySymbol}</span>
			<p data-testid="currency-price" style={ { color: priceColor, marginLeft: "5px" } }>{price}</p>
		</div>
	);
};
