import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

function Header() {
  return (
    <header>
    <Navbar expand="sm" collapseOnSelect>
      {/* <Container fluid="sm"> */}
        <Navbar.Brand href="/">Stocks App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/holding"><i className='fas fa-shopping-cart' />Holding</Nav.Link>
            <Nav.Link href="/login"><i className='fas fa-user' />Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      {/* </Container> */}
    </Navbar>
    </header>
  )
}

export default Header