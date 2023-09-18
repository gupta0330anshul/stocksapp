import React from 'react'
import { Col } from 'react-bootstrap'
import stocks from '../stocks'

function Chart({ name }) {
    const stockName = stocks.find((p) => p.name === name)
  return (
    <Col >
        {console.log({stockName})}
        <img src={`require('../charts_weekly/${stockName}.png')`} alt="stocks" width="1400px" />
    </Col>
  )
}

export default Chart