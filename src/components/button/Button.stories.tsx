import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "./Button";
import "./button.scss";
import PortfolioIcon from "../../shared/assets/portfolio.png";

export default {
	title: "Button",
	component: Button,
	argTypes: {
		text: {
			type: "string",
			description: "Конетнт кнопки",
		},
		isSubmit: {
			type: "boolean",
			description: "Проверка является ли кнопка элементом формы",
			defaultValue: "Submit",
		},
		type: {
			type: "string",
			description: "Тип кнокпи",
			defaultValue: "button",
			options: ["button", "submit", "input"],
			control: {
				type: "radio",
			}
		},
		className: {
			type: "string",
			description: "Стили кнопки",
			defaultValue: "btn",
			options: ["btn", "btn-big", "btn-remove", "btn-add", "btn-portfolio"],
			control: {
				type: "radio",
			}
		},
	}
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button { ...args } />;

export const Primary = Template.bind({});

Primary.args = {
	isSubmit: false,
	text: "Button",
	type: "button",
	className: "btn",
};

export const Add = Template.bind({});

Add.args = {
	isSubmit: false,
	text: "+",
	type: "button",
	className: "btn-add",
};

export const Remove = Template.bind({});

Remove.args = {
	isSubmit: false,
	text: "-",
	type: "button",
	className: "btn-remove",
};

export const Portfolio = Template.bind({});

Portfolio.args = {
	isSubmit: false,
	type: "button",
	className: "btn-portfolio",
	children: <><img
		src={ PortfolioIcon }
		alt="portfolio"
		style={ { width: "40px", height: "40px" } }
	/></>
};
export const Submit = Template.bind({});

Submit.args = {
	isSubmit: true,
	text: "Submit",
	type: "submit",
	className: "btn-big",
};
