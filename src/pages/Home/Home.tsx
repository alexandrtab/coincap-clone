import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { Header } from "../../components/header";
import { Table } from "../../components/table";
import { handleGetCurrenciesData } from "../../entities/currency/api";
import { setCurrenciesData } from "../../entities/currency/model";
import { Button } from "../../components/button";

export const Home: React.FC = () => {
	const [limit, setLimit] = useState<number>(20);
	const dispatch = useDispatch();
	const handleGetData = async () => {
		const data = await handleGetCurrenciesData(limit);

		dispatch(setCurrenciesData(data));
	};

	useEffect(() => {
		handleGetData();
	}, [limit]);

	return (
		<>
			<Header />
			<div data-testid="home-page" className="container">
				<div className="greeting">
					<div className="greeting__content">
						<h1 className="greeting__content__title">WELCOME BACK! 👋 </h1>
					</div>
				</div>
				<Table />
				<div className="btn-container">
					<Button
						isSubmit={ false }
						text={ "Load more" }
						className={ "btn-big" }
						type={ "button" }
						onClickButton={ () => setLimit(limit + 20) }
					/>
				</div>
			</div>
		</>
	);
};
