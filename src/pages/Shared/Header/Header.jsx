import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
    <Container fluid>
      <Navbar.Brand className="text-warning fs-3 fw-semibold title " href="/"><span className="fw-bold text-black">Chef</span> World</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="mx-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Link to='/' className="text-decoration-none text-black me-1 bg-hover">Home</Link>
          <Link className="text-decoration-none text-black me-1 bg-hover" to='/blog'>Blog</Link>
          <Link className="text-decoration-none text-black me-3 bg-hover">About</Link>
        </Nav>
        <Link to='/login' className="sm:mt-1"><Button className="fw-semibold" variant="warning">Login</Button></Link>
      </Navbar.Collapse>
     
    </Container>
  </Navbar>
  );
};

export default Header;
