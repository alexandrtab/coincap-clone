import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { CurrencyPrice } from "./CurrencyPrice";
import "../../app/styles/globals.scss";

export default {
	title: "Currency price",
	component: CurrencyPrice,
	argTypes: {
		currencySymbol: {
			type: "string",
			description: "Символ валюты",
			defaultValue: "$"
		},
		priceSize: {
			type: "number",
			description: "Размер текста цены валюты",
			defaultValue: "1",
		},
		priceColor: {
			type: "string",
			description: "Цвет текста цены валюты",
			defaultValue: "black",
			control: {
				type: "color",
			}
		},
		price: {
			type: "string",
			description: "Цена валюты",
			defaultValue: "23853.39",
			control: {
				type: "number",
			}
		},
	}
} as ComponentMeta<typeof CurrencyPrice>;

const Template: ComponentStory<typeof CurrencyPrice> = (args) => <CurrencyPrice { ...args } />;

export const Primary = Template.bind({});

Primary.args = {
	currencySymbol: "$",
	priceSize: 1.2,
	priceColor: "black",
	price: "23853.39",
};
