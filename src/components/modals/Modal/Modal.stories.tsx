import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Modal } from "./Modal";
import "../../../app/styles/globals.scss";

export default {
	title: "Modal",
	component: Modal,
	argTypes: {
		active: {
			type: "boolean",
			description: "Проверка, является ли модальное окно активным",
		},
		children: {
			type: "function",
			description: "Дочерний элемент модального окна",
		},
		setActive: {
			type: "function",
			description: "Функция, отвечающая за активацию модального окна ",
		},
	}
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal { ...args }/>;

export const Primary = Template.bind({});
Primary.args = {
	active: true,
};
