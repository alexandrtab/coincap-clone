import React from "react";

import { ICurrencyPriceProps } from "./types";

export const CurrencyPrice: React.FC<ICurrencyPriceProps> = ({
	currencySymbol,
	price,
	priceSize,
	priceColor,
}) => {
	return (
		<div style={ { display: "flex", justifyContent: "center", fontSize: `${priceSize}rem`, } }>
			<span className="currency-symbol">{currencySymbol}</span>
			<p style={ { color: priceColor, marginLeft: "5px" } }>{price}</p>
		</div>
	);
};
