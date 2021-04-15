import React, { useState, useEffect } from "react";
import { Navbar, Nav, Button, NavDropdown } from "react-bootstrap";
import logo from "../../../assets/img/white-logo.png";
import { BsList } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isHover, setHover] = useState(false);
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const getToken = () => {
    const data = localStorage.getItem("token");
    data && setAuthenticated(!isAuthenticated);
  };

  useEffect(() => {
    getToken();

    // eslint-disable-next-line
  }, []);

  const isHovered = () => {
    setHover(true);
  };

  const isNotHovered = () => {
    setHover(false);
  };

  const logout = () => {
    localStorage.clear();
    setExpanded(false);
    alert("Logout successful");
    window.location.reload();
  };

  const expandToggle = () => {
    setExpanded(expanded ? false : "expanded");
  };

  const closeToggle = () => {
    setExpanded(false);
  };

  return (
    <Navbar expanded={expanded} expand="lg" className="py-3 h-100" sticky="top">
      <Navbar.Brand src={logo} href="/" style={{ color: "black" }}>
        <NavLink to="/">
          <img src={logo} width={200} alt="white logo" />
        </NavLink>
      </Navbar.Brand>
      <Navbar.Toggle onClick={expandToggle} aria-controls="basic-navbar-nav">
        <BsList style={{ color: "white" }} />
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <NavLink
            className="navbar-link d-flex justify-content-center align-items-center mx-3 my-2"
            to="/services"
            style={{ color: "white" }}
            onClick={closeToggle}
          >
            Services
          </NavLink>
          <NavLink
            className="navbar-link d-flex justify-content-center align-items-center mx-3 my-2"
            to="/testimonial"
            style={{ color: "white" }}
            onClick={closeToggle}
          >
            Testimonial
          </NavLink>
          <NavLink
            className="navbar-link d-flex justify-content-center align-items-center mx-3 my-2"
            to="/price"
            style={{ color: "white" }}
            onClick={closeToggle}
          >
            Price
          </NavLink>
          <NavDropdown
            title="Support"
            className="text-center text-white mx-2 d-flex align-items-center justify-content-center flex-column"
            style={{ color: "white" }}
          >
            <NavLink
              to="/help"
              className="dropdown-link mx-2"
              onClick={closeToggle}
            >
              Help
            </NavLink>
            <br />
            <NavLink
              to="/blog"
              className="dropdown-link mx-2"
              onClick={closeToggle}
            >
              Blog
            </NavLink>
            <br />
            <NavLink
              to="/contact-us"
              className="dropdown-link mx-2"
              onClick={closeToggle}
            >
              Contact Us
            </NavLink>
          </NavDropdown>
          {isAuthenticated ? (
            <>
              <Button variant={"outline-navbar mx-2 my-2"} onClick={logout}>
                Logout
              </Button>
            </>
          ) : (
            <>
              <NavLink
                to="/login"
                className="btn-link-login"
                onClick={closeToggle}
              >
                <Button
                  onMouseOver={isNotHovered}
                  onMouseOut={isHovered}
                  variant={
                    isHover
                      ? "solid-navbar mx-2 my-2"
                      : "outline-navbar mx-2 my-2"
                  }
                >
                  Login
                </Button>
              </NavLink>
              <NavLink
                to="/register"
                className="btn-link-register"
                onClick={closeToggle}
              >
                <Button
                  onMouseOver={isHovered}
                  onMouseOut={isNotHovered}
                  variant={
                    !isHover
                      ? "solid-navbar mx-2 my-2"
                      : "outline-navbar mx-2 my-2"
                  }
                >
                  Register
                </Button>
              </NavLink>
            </>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
