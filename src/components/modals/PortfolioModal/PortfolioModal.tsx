import { useEffect, useState } from "react";

import { useAppSelector, useAppDispatch } from "../../../app/hooks/useRedux";
import { setActiveCurrency, setPortfolioCurrencies } from "../../../entities/currency/model";
import { ICurrency } from "../../../pages/Currency/types";
import { Button } from "../../button";
import { AddModal } from "../AddModal/AddModal";
import { Modal } from "../Modal/Modal";

export const PortfolioModal: React.FC = () => {
	const { portfolioCurrencies } = useAppSelector((store) => store.currency);
	const dispatch = useAppDispatch();
	const [modalActive, setModalActive] = useState<boolean>(false);
	const [portfolioPrice, setPortfolioPrice] = useState<number>(0);
	const { currenciesData } = useAppSelector((store) => store.currency);
	const handleRemoveCurrencyFromPortfolio = (id: number) => {
		const confirmDeleting = window.confirm(
			"Delete this currency from Portfolio?"
		);
		const filteredPortfolio = portfolioCurrencies?.filter(
			(item) => item.id !== id
		);

		if (confirmDeleting) {
			dispatch(setPortfolioCurrencies(filteredPortfolio ?? null));
			localStorage.setItem("currencies", JSON.stringify(filteredPortfolio));
		} else {
			return;
		}
	};

	const handleAddClick = (currency: ICurrency) => {
		setModalActive(true);
		document.body.classList.toggle("active");
		dispatch(setActiveCurrency(currency));
	};
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
		<div className="portfolio-modal-window">
			<h3>My Portfolio</h3>
			<ul className="portfolio-modal-window__list">
				{portfolioCurrencies?.length ? (
					portfolioCurrencies.map((item: ICurrency) => (
						<li key={ item.id }>
							<div>
								<p className="portfolio-modal-window__list__name">{item.name}</p>
								<p>{item.count}</p>
								<Button
									isSubmit={ false }
									text={ "✏️" }
									className={ "btn-edit" }
									type="button"
									onClickButton={ () => handleAddClick(item) }
								/>
								<Button
									isSubmit={ false }
									text={ "-" }
									className={ "btn-remove" }
									type={ "button" }
									onClickButton={ () => handleRemoveCurrencyFromPortfolio(item.id) }
								/>
							</div>
						</li>
					))
				) : (
					<p>Sorry, your portfolio is empty :(</p>
				)}
				<p className="top-currency">
					Portfolio : {parseFloat(`${portfolioPrice}`).toFixed(2)} USD
				</p>
			</ul>
			<Modal active={ modalActive } setActive={ setModalActive }>
				<AddModal />
			</Modal>
		</div>
	);
};
