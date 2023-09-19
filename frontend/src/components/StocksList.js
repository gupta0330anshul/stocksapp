import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import { Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import stocks from "../stocks";

function filterStocks(searchTxt, stocks) {
  const filteredStocks = stocks.filter((stock) => stock?.name.includes(searchTxt));
  // remove stocks from filteredStocks that are not in chart_weekly folder
  filteredStocks.forEach((stock, index) => {
    const img = new Image();
    try {
    img.src = require(`../assets/charts_weekly/${stock.name}.png`);
    }
    catch (err) {
      // console.log(stock.name + " not found");
      filteredStocks.splice(index, 1);
    }
    // img.onload = () => {
    //   // console.log("loaded");
    // };
    // img.onerror = () => {
    //   // console.log("error");
    //   filteredStocks.splice(index, 1);
    // };
  }
  );
  return filteredStocks;

}

function StocksList() {
  const [searchTxt, setSearchTxt] = useState("");
  const [filteredStocks, setFilteredStocks] = useState(filterStocks("", stocks));

  useEffect(() => {
    setFilteredStocks(filterStocks(searchTxt, stocks));
  },[searchTxt]);

  return (
    <>
      <Row>
        <Col className="search-container" xs={2}>
          <input
            type="text"
            placeholder="Search.."
            className="search-input"
            onChange={(e) => {
              setSearchTxt(e.target.value);
            }}
            value={searchTxt}
          />
        </Col>
        <Col>
          <button
            type="submit"
            className="search-button"
            xs={1}
            onClick={() => {
              // filter data
              setFilteredStocks(filterStocks(searchTxt, stocks));
            }}
          >
            Search
          </button>
        </Col>
      </Row>
      <br />
      <br />
      <Row>
      <Carousel controls={true} indicators={true} interval={null} variant="dark">
        {filteredStocks.map((stock) => (


            <Carousel.Item key={stock.name}>
              <img
                // className="w-100"
                src={
                  require(`../assets/charts_weekly/${stock.name}.png`)
                }
                alt={`${stock.name}`}
                width="1200px"
              />
            </Carousel.Item>


          // <Link to={`/stock/${stock?.name}`} className="px-3" key={stock.name}>
          //   {stock.name}
          // </Link>
        ))}
        </Carousel>
      </Row>
    </>
  );
}

export default StocksList;
