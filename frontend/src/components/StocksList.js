import React from 'react'
import { Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import stocks from "../stocks.js";
import { Link } from "react-router-dom";


export function filterStocks(searchTxt, stocks) {
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
    }
    );
    return filteredStocks;

  }


const StocksList = () => {
  const [searchTxt, setSearchTxt] = useState("");
  const [filteredStocks, setFilteredStocks] = useState(stocks);

  useEffect(() => {
    setFilteredStocks(filterStocks(searchTxt, stocks));
  } , [searchTxt]);



  return (
    <>
    <Row>
    <Col className="search-container">
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
  <Row>
        {
          filteredStocks.map((stock) => (
              <Link to={`/stock/${stock?.name}`} className="px-3" key={stock.name}>
                {stock.name}
              </Link>

          ))
        }
        <br />
  </Row>
  </>
  )
}

export default StocksList