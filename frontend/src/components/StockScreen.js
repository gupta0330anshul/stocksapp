import React from "react";

import { useParams } from "react-router-dom";

import StocksList from "./StocksList";

const StockScreen = () => {

  return (
    <>
      <StocksList />
      {/* <Chart stock={`${name}`} /> */}
    </>
  );
};

export default StockScreen;
