import { useSelector, useDispatch } from "react-redux";

import { setPortfolioCurrencies } from "../../../entities/currency/model";
import { Button } from "../../button";

export const PortfolioModal = () => {
  const { portfolioCurrencies } = useSelector((store) => store.currency);
  const dispatch = useDispatch();
  const handleRemoveCurrencyFromPortfolio = (id) => {
    const confirmDeleting = window.confirm(
      "Delete this currency from Portfolio?"
    );
    const filteredPortfolio = portfolioCurrencies.filter(
      (item) => item.id !== id
    );

    if (confirmDeleting) {
      dispatch(setPortfolioCurrencies(filteredPortfolio));
      localStorage.setItem("currencies", JSON.stringify(filteredPortfolio));
    } else {
      return;
    }
  };

  return (
	<div className="portfolio-modal-window">
		<h3>My Portfolio</h3>
		<ul className="portfolio-modal-window__list">
			{portfolioCurrencies?.length ? (
          portfolioCurrencies.map(({ id, name, count }) => (
	<li key={ id }>
		<div>
			<p className="portfolio-modal-window__list__name">{name}</p>
			<p>{count}</p>
			<Button
				children={ "-" }
				className={ "btn-remove" }
				type={ "button" }
				onClickButton={ () => handleRemoveCurrencyFromPortfolio(id) }
                />
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
