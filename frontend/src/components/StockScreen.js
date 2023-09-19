import React from "react";

import { useParams } from "react-router-dom";

import StocksChart from "./StocksChart";

const StockScreen = () => {

  return (
    <>
      <StocksChart />
      {/* <Chart stock={`${name}`} /> */}
    </>
  );
};

export default StockScreen;
