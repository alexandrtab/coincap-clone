import { render, screen } from "@testing-library/react";

import { Modal } from "./Modal";
import "@testing-library/jest-dom";

describe("Modal", () => {
	render(
		<Modal active={ true } setActive={ () => {} }>
			<h1>Active Modal!</h1>
		</Modal>
	);
	test("should render correct", () => {

		const modal = screen.getByTestId("modal");
		const content = screen.getByTestId("modal-content");
		const children = screen.getByText("Active Modal!");

		expect(modal).toHaveClass("modal-active");
		expect(modal).toHaveClass("modal");
		expect(content).toHaveClass("modal__content-active");
		expect(content).toHaveClass("modal__content");
		expect(children).toBeInTheDocument();
	});
});
