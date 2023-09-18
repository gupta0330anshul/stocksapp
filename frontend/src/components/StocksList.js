import React, { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import stocks from "../stocks";

function filterStocks(searchTxt, stocks) {
  return stocks.filter((stock) => stock?.name.includes(searchTxt));
}

function StocksList() {
  const [searchTxt, setSearchTxt] = useState("");
  const [filteredStocks, setFilteredStocks] = useState(stocks);


  useEffect(() => {
    setFilteredStocks(filterStocks(searchTxt, stocks));
  },[searchTxt]);

  return (
    <Container fluid="true">
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
      <Col>
        {filteredStocks.map((stock) => (
          <Link to={`/stock/${stock?.name}`} className="px-3" key={stock.name}>
            {stock.name}
          </Link>
        ))}
      </Col>
    </Container>
  );
}

export default StocksList;
