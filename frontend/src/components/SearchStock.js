import React from 'react'
import { Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import stocks from "../stocks.js";

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

const SearchStock = () => {
  return (
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
  )
}

export default SearchStock