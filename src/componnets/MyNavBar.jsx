import React, { useState } from 'react';
import { Navbar, Container, Nav, Offcanvas } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";


const MyNavBar = () => {
  const navigate  = useNavigate();

  const logout = () => {
    localStorage.setItem("token", "");
    navigate ("/login")
  }
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(true);
  const handleShow = () => setShow(true);

  return (
    <>
    <Navbar bg="primary" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand to="/" as={Link}>e-Commerce</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/Login">Login</Nav.Link>
            <Nav.Link as={Link} to="/Purchases"> Purchases </Nav.Link>
            <Nav.Link>Shop (sideBar)</Nav.Link>
            <Nav.Link onClick={logout}>Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
     <Offcanvas show={show} onHide={handleClose}>
     <Offcanvas.Header closeButton>
       <Offcanvas.Title>Offcanvas</Offcanvas.Title>
     </Offcanvas.Header>
     <Offcanvas.Body>
       Some text as placeholder. In real life you can have the elements you
       have chosen. Like, text, images, lists, etc.
     </Offcanvas.Body>
   </Offcanvas>
   </>
  );
};

export default MyNavBar;