import React from 'react';
import {Navbar,Container, Nav, NavDropdown} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Nabigation = () => {
    return (
        <div>
      

 
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as ={Link} to="/home">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as ={Link}  to="/tasks">ADD TASK</Nav.Link>
           
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
 </div>
    );
};

export default Nabigation;