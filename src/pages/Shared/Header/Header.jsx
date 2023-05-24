import React, { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { AuthContext } from "../../../AuthProviders/AuthProvider";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    logOut()
      .then(() => {
        navigate(location);
        toast("logout Successfully");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand className="text-warning fs-3 fw-semibold title " href="/">
          <span className="fw-bold text-black">Chef</span> World
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavLink
              className="text-decoration-none text-black me-1 bg-hover"
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className="text-decoration-none text-black me-1 bg-hover"
              to="/blog"
            >
              Blog
            </NavLink>
            <NavLink
              to="/about"
              className="text-decoration-none text-black me-3 bg-hover"
            >
              About
            </NavLink>
          </Nav>
          {user &&
          <div style={{ position: "relative" }}>
            
            <small
              className="text-white"
              style={{ position: "absolute", left: "5px", bottom: "8px",}}
            >
              {user?.displayName}
            </small>
            <img
              className="profile-img"
              src={user?.photoURL}
              alt=""
            />
          </div>
          }
          {user ? (
            <Link onClick={handleLogout} className="sm:mt-1">
              <Button className="fw-semibold btn-user" variant="warning">
                Logout
              </Button>
            </Link>
          ) : (
            <Link to="/login" className="sm:mt-1">
              <Button className="fw-semibold" variant="warning">
                Login
              </Button>
            </Link>
          )}
        </Navbar.Collapse>
      </Container>
      <ToastContainer />
    </Navbar>
  );
};

export default Header;
