import React from "react";
import { Carousel } from "react-bootstrap";
import { Row } from "react-bootstrap";

function StocksChart({ stocks }) {
  if (stocks) {
    return (
      <>
        <Row>
          <Carousel
            controls={true}
            indicators={true}
            interval={null}
            variant="dark"
          >
            {stocks?.map((stock) => (
              <Carousel.Item key={stock.name}>
                <img
                  // className="w-100"
                  src={require(`../assets/charts_weekly/${stock.name}.png`)}
                  alt={`${stock.name}`}
                  width="90%"
                  height="750px"
                />
              </Carousel.Item>


            ))}
          </Carousel>
        </Row>
      </>
    );
  } else {
    return (
      <>
        <Row>
          <h1>Stocks not found</h1>
        </Row>
      </>
    );
  }
}

export default StocksChart;
