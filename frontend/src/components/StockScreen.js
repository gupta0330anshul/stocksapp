import React from 'react'
import { Container } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import Chart from './Chart'
import StocksList from './StocksList'

const StockScreen = () => {
    const { name } = useParams()
  return (
    <Container>
    <StocksList />

    <Chart stock={`${name}`} />
    </Container>
  )
}

export default StockScreen