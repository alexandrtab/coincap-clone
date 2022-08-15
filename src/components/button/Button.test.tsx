import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";
import { Button } from "./Button";

describe("Button", () => {
	render(
		<Button
			text= "button"
			type= "button"
			onClickButton={ () => {} }
			isSubmit={ false }
			className={ "" }
		/>
	);
	test("should render with text", () => {
		const input = screen.queryByRole("input");
		const button = screen.getByRole("button");

		expect(input).not.toBeInTheDocument();
		expect(button).toBeInTheDocument();
		expect(button).toMatchSnapshot();
		expect(input).toMatchSnapshot();

	});
});
