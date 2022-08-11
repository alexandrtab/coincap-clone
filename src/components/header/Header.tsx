import { useState, useMemo, useEffect } from "react";

import { useAppSelector } from "../../app/hooks/useRedux";
import Portfolio from "../../shared/assets/portfolio.png";
import { PortfolioModal, Modal } from "../modals/index";
import { getTopCurrencies } from "./lib";
import { Button } from "../button";

export const Header: React.FC = () => {
	const { currenciesData, portfolioCurrencies } = useAppSelector(
		(store) => store.currency
	);
	const [modalActive, setModalActive] = useState<boolean>(false);
	const [portfolioPrice, setPortfolioPrice] = useState<number>(0);
	const topCurrency = useMemo(
		() => currenciesData && getTopCurrencies(currenciesData),
		[currenciesData]
	);

	function handleOpenPortfolio () {
		setModalActive(true);
		document.body.classList.toggle("active");
	}

	const calcPortfolioTotalPrice = () => {
		let priceResult = 0;

		if (portfolioCurrencies?.length) {
			portfolioCurrencies?.forEach(({ count }) => {
				priceResult += +count;
			});
			setPortfolioPrice(priceResult);
		} else {
			setPortfolioPrice(0);
		}
	};

	useEffect(() => {
		calcPortfolioTotalPrice();
	}, [portfolioCurrencies]);

	return (
		<header>
			{topCurrency?.map(({ id, name, priceUsd }) => (
				<p key={ id } className="top-currency">
					{name} : <span className="dollar-sign"> $ </span>
					{parseFloat(`${priceUsd}`).toFixed(2)}
				</p>
			))}
			<p className="top-currency">
				Portfolio : {parseFloat(`${portfolioPrice}`).toFixed(2)} USD
			</p>
			<Button
				className={ "btn-portfolio" }
				type="button"
				text=""
				isSubmit={ false }
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
