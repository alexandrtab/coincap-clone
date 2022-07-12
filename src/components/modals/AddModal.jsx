import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setPortfolioCurrencies } from "../../entities/currency/model/currencySlice";

export const AddModal = () => {
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(0);
  const dispatch = useDispatch();

  const { activeCurrency, portfolioCurrencies } = useSelector(
    (store) => store.currency
  );
  const handleChangeInput = (e) => {
    setCount(e.target.value);
    setTotal(parseFloat(e.target.value * activeCurrency.priceUsd).toFixed(2));
  };

  const handleAddCurrencyToPortfolio = () => {
    const currentCurrency = { ...activeCurrency, count: total };
    if (count <= 0) {
      return alert("Count must be greater than zero!");
    }
    if (portfolioCurrencies && count !== 0) {
      dispatch(
        setPortfolioCurrencies([...portfolioCurrencies, currentCurrency])
      );
      localStorage.setItem(
        "currencies",
        JSON.stringify([...portfolioCurrencies, currentCurrency])
      );
      alert("CONGRADULATE! New currency has been already added to portfolio!");
    } else {
      dispatch(setPortfolioCurrencies([currentCurrency]));
      localStorage.setItem(
        portfolioCurrencies.name,
        JSON.stringify([...portfolioCurrencies, currentCurrency])
      );
    }

    setCount(0);
    setTotal(0);
  };
  return (
    <div className="add-modal-window">
      <div className="change-count-block">
        <h3>{activeCurrency?.name}</h3>
        <h4>Price : ${parseFloat(activeCurrency?.priceUsd).toFixed(2)}</h4>
        <input
          onChange={(e) => handleChangeInput(e)}
          value={count}
          type="number"
          min="0"
          step="0.1"
          placeholder="0"
        />
      </div>
      <div className="total-price">
        <p>Total price : {total}$</p>
      </div>
      <div className="btn__container">
        <button className="btn btn__big" onClick={handleAddCurrencyToPortfolio}>
					Submit
        </button>
      </div>
    </div>
  );
};
