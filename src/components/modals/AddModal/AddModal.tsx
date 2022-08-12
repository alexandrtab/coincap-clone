import { useState, useRef, useEffect } from "react";

import { useAppSelector, useAppDispatch } from "../../../app/hooks/useRedux";
import { setPortfolioCurrencies } from "../../../entities/currency/model/currencySlice";
import { ICurrency } from "../../../pages/Currency/types";
import { Button } from "../../button";
import { CurrencyPrice } from "../../CurrencyPrice/CurrencyPrice";

export const AddModal: React.FC = () => {
	const [count, setCount] = useState<number | null>(null);
	const [total, setTotal] = useState<number>(0);
	const dispatch = useAppDispatch();
	const inputElement = useRef<HTMLInputElement>(null);

	useEffect(() => {
		if (inputElement.current) {
			inputElement.current.focus();
		}
	}, []);

	const { activeCurrency, portfolioCurrencies } = useAppSelector(
		(store) => store.currency
	);
	const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		setCount(+e.target.value);
		if (activeCurrency) {
			setTotal(+parseFloat(`${+e.target.value * activeCurrency.priceUsd}`).toFixed(2));
		}
	};

	const handleAddCurrencyToPortfolio = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const currentCurrency = { ...activeCurrency, count: total } as ICurrency;

		if (count == undefined) {return null;}
		if (count <= 0) {
			return alert("Count must be greater than zero!");
		}
		if (portfolioCurrencies && !!portfolioCurrencies.length && count !== 0) {
			const lastIdOfElements =
				portfolioCurrencies[portfolioCurrencies.length - 1].id;

			if (lastIdOfElements && currentCurrency) {
				dispatch(
					setPortfolioCurrencies([
						...portfolioCurrencies,
						{ ...currentCurrency, id: lastIdOfElements + 1 },
					])
				);
			}

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
			if (portfolioCurrencies) {
				localStorage.setItem(
					"currencies",
					JSON.stringify([
						...portfolioCurrencies,
						{ ...currentCurrency, id: 1 },
					])
				);
			} else {
				localStorage.setItem(
					"currencies",
					JSON.stringify([
						{ ...currentCurrency, id: 1 },
					])
				);
			}
		}

		setCount(null);
		setTotal(0);
	};

	return (
		<form
			className="add-modal-window"
			onSubmit={ (e) => handleAddCurrencyToPortfolio(e) }
		>
			<div className="add-modal-window__change-block">
				<h3>{activeCurrency?.name}</h3>
				<div style={ { display: "flex" } }><h4> Price : </h4><CurrencyPrice currencySymbol="$" price={ parseFloat(`${ activeCurrency?.priceUsd }`).toFixed(2) } priceSize={ 1.2 } priceColor="black" /></div>
				<input
					autoFocus={ true }
					ref={ inputElement }
					onChange={ (e) => handleChangeInput(e) }
					value={ count ?? "" }
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
