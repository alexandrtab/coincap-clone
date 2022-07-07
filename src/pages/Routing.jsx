import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { Currency } from "./Currency";
import { Notfoundpage } from "./Notfoundpage";
import { setPortfolioCurrencies } from "../entities/currency/model";
import { Header } from "../widgets/header";

export const Routing = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(
			setPortfolioCurrencies(JSON.parse(localStorage.getItem("currencies")))
		);
	}, []);
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/currency" element={<Currency />} />
				<Route path="*" element={<Notfoundpage />} />
			</Routes>
		</>
	);
};
