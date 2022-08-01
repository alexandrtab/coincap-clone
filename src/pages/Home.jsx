import { useEffect, useState } from "react";
import { Header } from "../components/header";
import { Table } from "../components/table";
import { handleGetCurrenciesData } from "../entities/currency/api";
import { useDispatch } from "react-redux";
import { setCurrenciesData } from "../entities/currency/model";
import { Button } from "../components/button";

export const Home = () => {
  const [limit, setLimit] = useState(20);
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
      <div className="container">
        <Table />
        <div className="btn-container">
          <Button children={"Load more"} className={"btn-big"} type={"button"} onClickButton={() => setLimit(limit + 20)}/>
        </div>
      </div>
    </>
  );
};
