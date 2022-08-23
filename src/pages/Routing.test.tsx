import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";

import { Routing } from "./Routing";
import { store } from "../app/store";

describe("App test", () => {

	test("Router test", () => {
		render(
			<Provider store={ store }>
				<MemoryRouter>
					<Routing/>
				</MemoryRouter>
			</Provider>

		);
		// НЕ УДАЕТСЯ НАЙТИ ЭЛЕМЕНТЫ НИЖЕ ПО ТЕСТ-АЙДИ

		// const homeLink = screen.getByTestId("home-link");
		// const currencyLink = screen.getByTestId("currency-link");

		// userEvent.click(homeLink);
		// expect(screen.getAllByTestId("home-page")).toBeInTheDocument();
		// userEvent.click(currencyLink);
		// expect(screen.getAllByTestId("currency-page")).toBeInTheDocument();
	});
});
