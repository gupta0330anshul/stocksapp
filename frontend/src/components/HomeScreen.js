import React from "react";
import { Container } from "react-bootstrap";

import StocksList from "./StocksList";

function HomeScreen() {
  return (
    <Container>
      <StocksList />
    </Container>
  );
}

export default HomeScreen;
