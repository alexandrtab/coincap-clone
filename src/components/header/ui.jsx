import { useState, useMemo, useEffect } from "react";
import Portfolio from "../../shared/assets/portfolio.png";
import { PortfolioModal, Modal } from "../modals/ui";
import { getTopCurrencies } from "./lib";
import { useSelector } from "react-redux";

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
	const handleOpenPortfolio = () => {
		setModalActive(true);
		document.body.classList.toggle("active");
	};
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
				<p key={id} className="top-currency">
					{name}: ${parseFloat(priceUsd).toFixed(2)}
				</p>
			))}
			<p className="top-currency">
				Portfolio: {parseFloat(portfolioPrice).toFixed(2)} USD
			</p>
			<button
				className="btn btn__portfolio"
				onClick={() => handleOpenPortfolio()}
			>
				<img
					src={Portfolio}
					alt="portfolio"
					style={{ width: "40px", height: "40px" }}
				/>
			</button>
			<Modal active={modalActive} setActive={setModalActive}>
				<PortfolioModal />
			</Modal>
		</header>
	);
};
