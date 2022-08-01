import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveCurrency } from "../../entities/currency/model";
import { AddModal, Modal } from "../modals/index";
import { Link } from "react-router-dom";
import { Button } from "../button";

export const Table = () => {
  const [modalActive, setModalActive] = useState(false);
  const { currenciesData } = useSelector((store) => store.currency);
  const dispatch = useDispatch();
  const handleAddClick = (currency) => {
    setModalActive(true);
    document.body.classList.toggle("active");
    dispatch(setActiveCurrency(currency));
  };
  const handleRedirectClick = (currency) => {
    dispatch(setActiveCurrency(currency));
  };
  return (
    <main className="currency">
      <div className="currency__content">
        <table className="currency__content__table">
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
            {currenciesData?.map((item) => (
              <tr key={item.id}>
                <td>
                  <Link
                    to="/currency"
                    onClick={() => handleRedirectClick(item)}
                  >
                    {item.rank}
                  </Link>
                </td>
                <td className="extra-inf">
                  <Link
                    to="/currency"
                    onClick={() => handleRedirectClick(item)}
                  >
                    {item.name}
                  </Link>
                </td>
                <td>
                  <Link
                    to="/currency"
                    onClick={() => handleRedirectClick(item)}
                  >
                    {item.symbol}
                  </Link>
                </td>
                <td><span style={{color:"#21f507"}}> $ </span>{parseFloat(item.priceUsd).toFixed(2)}</td>
                <td>
                  <Button
                    children={"+"}
                    className={"btn-add"}
                    type="button"
                    onClickButton={() => handleAddClick(item)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Modal active={modalActive} setActive={setModalActive}>
          <AddModal />
        </Modal>
      </div>
    </main>
  );
};
