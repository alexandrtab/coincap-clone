import React from "react";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import { store } from "./app/store";
import "./app/styles/globals.scss";
import { Routing } from "./pages/Routing";

const rootElem = document.getElementById("root");

if (rootElem) {
	const root = createRoot(rootElem);

	root.render(
		<React.StrictMode>
			<Provider store={ store }>
				<BrowserRouter>
					<Routing />
				</BrowserRouter>
			</Provider>
		</React.StrictMode>
	);
}
