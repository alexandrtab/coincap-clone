import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";

import { Notfoundpage } from "./Notfoundpage";
import { Home } from "../Home/Home";
import { store } from "../../app/store";

describe("NotFound page", () => {
	test("should render and redirect to home page", () => {
		render(
			<Provider store={ store }>
				<MemoryRouter>
					<Notfoundpage />
					<Home/>
				</MemoryRouter>
			</Provider>);

		const notFound = screen.getByTestId("notFound-page");
		const homeLink = screen.getByTestId("notFound__home-link");

		expect(notFound).toBeInTheDocument();
		expect(notFound).toHaveClass("not-found");
		expect(homeLink).toHaveTextContent("HOME");

		userEvent.click(homeLink);
		expect(screen.getByTestId("home-page")).toBeInTheDocument();
	});
});
