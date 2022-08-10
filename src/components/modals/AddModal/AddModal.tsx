import { useState } from "react";

import { useAppSelector, useAppDispatch } from "../../../app/hooks/useRedux";
import { setPortfolioCurrencies } from "../../../entities/currency/model/currencySlice";
import { Button } from "../../button";

export const AddModal = () => {
	const [count, setCount] = useState(0);
	const [total, setTotal] = useState(0);
	const dispatch = useAppDispatch();

	const { activeCurrency, portfolioCurrencies } = useAppSelector(
		(store) => store.currency
	);
	const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		setCount(e.target.value);
		setTotal(parseFloat(e.target.value * activeCurrency.priceUsd).toFixed(2));
	};

	const handleAddCurrencyToPortfolio = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const currentCurrency = { ...activeCurrency, count: total };

		if (count <= 0) {
			return alert("Count must be greater than zero!");
		}
		if (portfolioCurrencies && !!portfolioCurrencies.length && count !== 0) {
			const lastIdOfElements =
				portfolioCurrencies[portfolioCurrencies.length - 1].id;

			dispatch(
				setPortfolioCurrencies([
					...portfolioCurrencies,
					{ ...currentCurrency, id: lastIdOfElements + 1 },
				])
			);
			localStorage.setItem(
				"currencies",
				JSON.stringify([
					...portfolioCurrencies,
					{ ...currentCurrency, id: lastIdOfElements + 1 },
				])
			);
			alert("CONGRADULATE! New currency has been already added to portfolio!");
		} else {
			dispatch(setPortfolioCurrencies([{ ...currentCurrency, id: 1 }]));
			localStorage.setItem(
				portfolioCurrencies.name,
				JSON.stringify([
					...portfolioCurrencies,
					[{ ...currentCurrency, id: 1 }],
				])
			);
		}

		setCount(0);
		setTotal(0);
	};

	return (
		<form
			className="add-modal-window"
			onSubmit={ (e) => handleAddCurrencyToPortfolio(e) }
		>
			<div className="add-modal-window__change-block">
				<h3>{activeCurrency?.name}</h3>
				<h4>Price : <span className="dollar-sign">$ </span>{parseFloat(activeCurrency?.priceUsd).toFixed(2)}</h4>
				<input
					onChange={ (e) => handleChangeInput(e) }
					value={ count }
					type="number"
					min="0"
					step="0.1"
					placeholder="0"
				/>
			</div>
			<div className="add-modal-window__total-price">
				<p>Total price : {total}$</p>
			</div>
			<div className="btn-container">
				<Button
					type="submit"
					className="btn-big"
					isSubmit={ true }
					text={ "Submit" }
					onClickButton={ () => handleAddCurrencyToPortfolio }
				/>
			</div>
		</form>
	);
};
