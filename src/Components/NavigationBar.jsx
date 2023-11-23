import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './NavigationBar.css'
function NavigationBar() {
  return (
    <div>
    <Navbar  style={{background:"#cda1f77c"}}>
        <Container >
          <Navbar.Brand>ACADEMIC PERFORMANCE</Navbar.Brand>
        </Container>
      </Navbar>      
    </div>
  )
}

export default NavigationBar