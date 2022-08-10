import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";

import { Home } from "./Home/Home";
import { Currency } from "./Currency/Currency";
import { Notfoundpage } from "./Notfoundpage/Notfoundpage";
import { setPortfolioCurrencies } from "../entities/currency/model";
import { Header } from "../components/header";

export const Routing: React.FC= () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(
			setPortfolioCurrencies(JSON.parse(localStorage.getItem("currencies") || "{}"))
		);
	}, []);

	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={ <Home /> } />
				<Route path="/currency" element={ <Currency /> } />
				<Route path="*" element={ <Notfoundpage /> } />
			</Routes>
		</>
	);
};
