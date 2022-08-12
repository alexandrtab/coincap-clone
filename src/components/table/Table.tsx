import { useState } from "react";
import { Link } from "react-router-dom";

import { setActiveCurrency } from "../../entities/currency/model";
import { AddModal, Modal } from "../modals/index";
import { Button } from "../button";
import { useAppSelector, useAppDispatch } from "../../app/hooks/useRedux";
import { ICurrency } from "../../pages/Currency/types";
import { CurrencyPrice } from "../CurrencyPrice/CurrencyPrice";

export const Table: React.FC = () => {
	const [modalActive, setModalActive] = useState<boolean>(false);
	const { currenciesData } = useAppSelector((store) => store.currency);
	const dispatch = useAppDispatch();
	const handleAddClick = (currency: ICurrency) => {
		setModalActive(true);
		document.body.classList.toggle("active");
		dispatch(setActiveCurrency(currency));
	};
	const handleRedirectClick = (currency: ICurrency) => {
		dispatch(setActiveCurrency(currency));
	};

	return (
		<main className="currency">
			<div className="currency__content">
				<table className="currency__content__table">
					<caption>Top Currencies For Today :</caption>
					<thead>
						<tr>
							<th>Rank</th>
							<th className="currency__content__table-extra">Name</th>
							<th>Symbol</th>
							<th>Price</th>
							<th>Add</th>
						</tr>
					</thead>
					<tbody>
						{currenciesData?.map((item: ICurrency) => (
							<tr key={ item.id }>
								<td>
									<Link
										to="/currency"
										onClick={ () => handleRedirectClick(item) }
									>
										{item.rank}
									</Link>
								</td>
								<td className="currency__content__table-extra">
									<Link
										to="/currency"
										onClick={ () => handleRedirectClick(item) }
									>
										{item.name}
									</Link>
								</td>
								<td>
									<Link
										to="/currency"
										onClick={ () => handleRedirectClick(item) }
									>
										{item.symbol}
									</Link>
								</td>
								<td>
									<CurrencyPrice currencySymbol="$" price={ parseFloat(`${item.priceUsd}`).toFixed(2) } priceSize={ 1.2 } priceColor="black" />
								</td>
								<td>
									<Button
										isSubmit={ false }
										text={ "+" }
										className={ "btn-add" }
										type="button"
										onClickButton={ () => handleAddClick(item) }
									/>
								</td>
							</tr>
						))}
					</tbody>
				</table>
				<Modal active={ modalActive } setActive={ setModalActive }>
					<AddModal />
				</Modal>
			</div>
		</main>
	);
};
