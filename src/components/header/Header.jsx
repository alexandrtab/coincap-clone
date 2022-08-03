import { useState, useMemo, useEffect } from "react";
import { useSelector } from "react-redux";

import Portfolio from "../../shared/assets/portfolio.png";
import { PortfolioModal, Modal } from "../modals/index";
import { getTopCurrencies } from "./lib";
import { Button } from "../button";

export const Header = () => {
	const { currenciesData, portfolioCurrencies } = useSelector(
		(store) => store.currency
	);
	const [modalActive, setModalActive] = useState(false);
	const [portfolioPrice, setPortfolioPrice] = useState(0);
	const topCurrency = useMemo(
		() => getTopCurrencies(currenciesData),
		[currenciesData]
	);

	function handleOpenPortfolio () {
		setModalActive(true);
		document.body.classList.toggle("active");
	}

	const calcPortfolioTotalPrice = () => {
		let priceResult = 0;

		portfolioCurrencies?.forEach(({ count }) => {
			priceResult += +count;
		});
		setPortfolioPrice(priceResult);
	};

	useEffect(() => {
		calcPortfolioTotalPrice();
	}, [portfolioCurrencies]);

	return (
		<header>
			{topCurrency?.map(({ id, name, priceUsd }) => (
				<p key={ id } className="top-currency">
					{name} : <span className="dollar-sign"> $ </span>
					{parseFloat(priceUsd).toFixed(2)}
				</p>
			))}
			<p className="top-currency">
				Portfolio : {parseFloat(portfolioPrice).toFixed(2)} USD
			</p>
			<Button
				className={ "btn-portfolio" }
				type="button"
				onClickButton={ () => handleOpenPortfolio() }
			>
				<img
					src={ Portfolio }
					alt="portfolio"
					style={ { width: "40px", height: "40px" } }
				/>
			</Button>
			<Modal active={ modalActive } setActive={ setModalActive }>
				<PortfolioModal />
			</Modal>
		</header>
	);
};
