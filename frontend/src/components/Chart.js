import React from "react";
import { Row } from "react-bootstrap";
import { useParams } from "react-router-dom";


function Chart() {
  const { name } = useParams();

  // const stockName = stocks.find((p) => p.name === name);
  return (

      <Row>
        <img
          src={require(`../assets/charts_weekly/${name}.png`)}
          alt="stocks"
          width={"1800px"}
        />
      </Row>

  );
}

export default Chart;
