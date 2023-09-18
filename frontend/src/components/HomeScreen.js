import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import StocksList from './StocksList'
import Chart from './Chart'

function HomeScreen({name}) {
  return (

    <Container fluid="true">
    {console.log({name})}
    <Row>
        <StocksList />
        <Chart stock={`${name}`} />
    </Row>
    </Container>


  )
}

export default HomeScreen