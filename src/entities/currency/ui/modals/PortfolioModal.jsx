import { useSelector, useDispatch } from "react-redux";
import { setPortfolioCurrencies } from "../../model";

export const PortfolioModal = () => {
	const { portfolioCurrencies } = useSelector((store) => store.currency);
	const dispatch = useDispatch();

	const handleRemoveCurrencyFromPortfolio = (id) => {
		const filteredPortfolio = portfolioCurrencies.filter(
			(item) => item.id !== id
		);
		dispatch(setPortfolioCurrencies(filteredPortfolio));
		localStorage.setItem("currencies", JSON.stringify(filteredPortfolio));
	};

	return (
		<div className="modal-window">
			<h3>My Portfolio</h3>
			<ul className="portfolio-list">
				{portfolioCurrencies?.length ? (
					portfolioCurrencies.map(({ id, name, count }) => (
						<li key={id}>
							<div>
								<p className="portfolio-list__name">{name}</p>
								<p>{count}</p>
								<button
									className="btn btn__remove"
									onClick={() => handleRemoveCurrencyFromPortfolio(id)}
								>
									-
								</button>
							</div>
						</li>
					))
				) : (
					<p>Sorry, your portfolio is empty :(</p>
				)}
			</ul>
		</div>
	);
};
