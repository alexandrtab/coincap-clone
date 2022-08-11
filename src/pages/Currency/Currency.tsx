import React, { useState, useEffect } from "react";
import {
	AreaChart,
	Area,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
} from "recharts";
import { Link } from "react-router-dom";

import { setActiveCurrency } from "../../entities/currency/model";
import { Modal, AddModal } from "../../components/modals/index";
import { handleGetCurrencyHistory } from "../../entities/currency/api";
import { handleGenerateCurrencyHistoryData } from "../../utils/lib";
import { Button } from "../../components/button";
import { ICurrency } from "./types";
import { useAppSelector, useAppDispatch } from "../../app/hooks/useRedux";
import { IHistoryData } from "../../utils/types";

export const Currency: React.FC = () => {
	const { activeCurrency } = useAppSelector((store) => store.currency);
	const [modalActive, setModalActive] = useState<boolean>(false);
	const [currentHistory, setCurrentHistory] = useState<IHistoryData[]>([]);
	const dispatch = useAppDispatch();
	const handleAddClick = (currency: ICurrency) => {
		setModalActive(true);
		document.body.classList.toggle("active");
		dispatch(setActiveCurrency(currency));
	};
	const handleLoadCurrencyHistory = async () => {
		if (activeCurrency) {
			const history = await handleGetCurrencyHistory(activeCurrency?.id);

			setCurrentHistory(handleGenerateCurrencyHistoryData(history));
		}
	};

	useEffect(() => {
		handleLoadCurrencyHistory();
	}, []);

	if (!activeCurrency) {
		return <h1>No currrency :(</h1>;
	}

	return (
		<div>
			<div className="container">
				<div className="currency-info">
					<div>
						<Link to="/">
							<p>{"< Back to Home"}</p>
						</Link>
					</div>
					<div className="currency-info__name">
						<h3>{activeCurrency.name}</h3>
					</div>
					<div className="currency-info__details">
						<p>Symbol : {activeCurrency.symbol}</p>
						<p>
							Change Percent : {parseFloat(activeCurrency.changePercent24Hr).toFixed(2)}
						</p>
						<p>Rank : {activeCurrency.rank}</p>
						<p>PriceUSD : {parseFloat(`${activeCurrency.priceUsd}`).toFixed(2)}</p>
						<p>Supply : {parseFloat(activeCurrency.supply).toFixed(2)}</p>
						<Button text={ "BUY" } isSubmit={ false } className={ "btn-big" } type={ "button" } onClickButton={ () => handleAddClick(activeCurrency) }/>
					</div>
				</div>
				<div className="currency-graphic">
					<div style={ { width: "100%", height: 300 } }>
						<ResponsiveContainer>
							<AreaChart
								data={ currentHistory }
								margin={ {
									top: 10,
									right: 30,
									left: 0,
									bottom: 0,
								} }
							>
								<Area dataKey="priceUsd" stroke="#2451B7" />
								<XAxis dataKey="time" axisLine={ false } tickLine={ false } />
								<YAxis dataKey="priceUsd" tickLine={ false } tickCount={ 8 } />
								<Tooltip />
								<CartesianGrid
									strokeDasharray="3 3"
									opacity={ 0.1 }
									vertical={ false }
								/>
							</AreaChart>
						</ResponsiveContainer>
					</div>
				</div>
			</div>
			<Modal active={ modalActive } setActive={ setModalActive }>
				<AddModal />
			</Modal>
		</div>
	);
};
