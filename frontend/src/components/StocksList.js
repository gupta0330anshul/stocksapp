import React from 'react'
import { Col } from 'react-bootstrap'
import stocks from '../stocks'

function StocksList() {
  return (
    <Col>
    {
        stocks.map(stock => (
            <a href={`/${stock.name}`} className='px-3' key={stock.name}>{stock.name}</a>
        ))
    }
    </Col>
  )
}

export default StocksList