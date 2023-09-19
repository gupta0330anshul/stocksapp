import React from "react";
import { Row, Col } from "react-bootstrap";
import stocks from "../stocks.js";

import StocksChart from "./StocksChart";
import StocksList from "./StocksList.js";

const StockScreen = () => {
  if (stocks) {
    stocks.forEach((stock, index) => {
      const img = new Image();
      try {
      img.src = require(`../assets/charts_weekly/${stock.name}.png`);
      }
      catch (err) {
        // console.log(stock.name + " not found");
        stocks.splice(index, 1);
      }
    }
    );


    return (
      <Row>
        <Col>
          <StocksList />
        </Col>
        <Col xs={10}>
        <StocksChart stocks={stocks} />
        </Col>

      </Row>
    );
  }
  else {
    return (
      <>
      <Row>
        <Col>
          <h1>Stock not found</h1>
        </Col>
      </Row>
      </>
    );
  }

};

export default StockScreen;
